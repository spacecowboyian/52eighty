import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// Dropbox shared-file links use dl=0 for the human preview page; dl=1 triggers
// a direct-download redirect chain that supports HTTP range requests.
// Signed tokens on the resolved dl.dropboxusercontent.com URL are minted fresh
// per request -- never cache a resolved URL, always re-resolve close to use.
export function toDirectUrl(shareUrl) {
  return shareUrl.includes('dl=0')
    ? shareUrl.replace('dl=0', 'dl=1')
    : shareUrl + (shareUrl.includes('?') ? '&' : '?') + 'dl=1';
}

// Cheap HEAD-only check before paying for ffprobe: confirms the link is
// downloadable (not view-only), and cross-checks size against our recorded value.
export async function headCheck(url, { timeoutSeconds = 20 } = {}) {
  try {
    const { stdout } = await execFileAsync('curl', [
      '-sI', '-L',
      '--max-time', String(timeoutSeconds),
      '-o', '/dev/null',
      '-w', '%{http_code} %{content_length} %{url_effective}',
      url,
    ]);
    const [httpCode, contentLength, urlEffective] = stdout.trim().split(' ');
    return { httpCode: Number(httpCode), contentLength: Number(contentLength), urlEffective };
  } catch (err) {
    return { error: err.message };
  }
}
