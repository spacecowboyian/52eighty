#!/usr/bin/env bash
#
# Publish a built directory into the `gh-pages` branch.
#
#   publish-to-pages.sh <source-dir> <dest-subdir> <commit-message>
#
# `dest-subdir` empty means the branch root (production). Anything else is a
# subdirectory, e.g. `pr-20` for a pull-request preview. Pass an empty
# source-dir with a subdir to delete that subdir (preview teardown).
#
# Production and previews share one branch, so each publish has to delete its
# own stale files without touching the other's. A root publish therefore
# excludes `/pr-*` from --delete; a preview publish is scoped to its own
# directory and can delete freely inside it.
#
# GitHub Pages serving from a branch does NOT add `.nojekyll` the way
# `actions/deploy-pages` does, and Jekyll drops directories starting with an
# underscore — which would silently 404 every asset in Astro's `_astro/`. The
# file is created here and never removed.

set -euo pipefail

SRC="${1?source dir required (empty string means: delete the dest subdir)}"
DEST_SUBDIR="${2-}"
MESSAGE="${3:-Publish to GitHub Pages}"

BRANCH="gh-pages"
WORKTREE="$(mktemp -d)"

if [ -n "$SRC" ] && [ ! -d "$SRC" ]; then
  echo "Source directory '$SRC' does not exist" >&2
  exit 1
fi

if [ -z "$SRC" ] && [ -z "$DEST_SUBDIR" ]; then
  echo "Refusing to delete the branch root." >&2
  exit 1
fi

git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

git worktree add --detach "$WORKTREE" >/dev/null

# Bootstrap the branch if this is the very first publish. `checkout --orphan`
# misbehaves inside a linked worktree, so build an empty root commit with
# plumbing and push that — after this the fetch path below always applies.
if ! git ls-remote --exit-code --heads origin "$BRANCH" >/dev/null 2>&1; then
  empty_tree="$(git hash-object -t tree /dev/null)"
  root_commit="$(git commit-tree "$empty_tree" -m "Initialize $BRANCH")"
  git push origin "$root_commit:refs/heads/$BRANCH"
fi

# Other pull requests publish to this same branch concurrently. Rather than
# rebasing a prepared commit (whose tree would carry a stale copy of everyone
# else's directories), each attempt resets to the current tip and re-applies
# just the paths this build owns.
for attempt in 1 2 3 4 5; do
  git fetch origin "$BRANCH" --depth=1
  tip="$(git rev-parse FETCH_HEAD)"
  git -C "$WORKTREE" reset --hard "$tip"
  git -C "$WORKTREE" clean -fdx

  if [ -z "$SRC" ]; then
    rm -rf "${WORKTREE:?}/${DEST_SUBDIR:?}"
  elif [ -n "$DEST_SUBDIR" ]; then
    mkdir -p "$WORKTREE/$DEST_SUBDIR"
    rsync -a --delete "$SRC/" "$WORKTREE/$DEST_SUBDIR/"
  else
    # `/.git` must be excluded: this is a linked worktree, so .git is a real
    # file here and --delete would remove it, detaching the checkout mid-run.
    rsync -a --delete --exclude='/pr-*' --exclude='/.git' "$SRC/" "$WORKTREE/"
  fi

  touch "$WORKTREE/.nojekyll"

  git -C "$WORKTREE" add -A

  if git -C "$WORKTREE" diff --cached --quiet; then
    echo "No changes to publish."
    exit 0
  fi

  git -C "$WORKTREE" commit -m "$MESSAGE"

  if git -C "$WORKTREE" push origin "HEAD:$BRANCH"; then
    echo "Published on attempt $attempt."
    exit 0
  fi

  echo "Push rejected (attempt $attempt) — another publish landed first; re-applying onto the new tip."
  sleep $((attempt * 3))
done

echo "Could not publish after 5 attempts." >&2
exit 1
