import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{t as l,c as t,f as y}from"./tokens-DJqrrynb.js";import{b as x,B as u}from"./Band-CC5RQlWi.js";import{P as R}from"./Pill-pDj635C5.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useHover-D0oxY1V2.js";function b(e){const a=e.trim(),o=/^#([0-9a-f]{3,8})$/i.exec(a);if(o){let r=o[1];(r.length===3||r.length===4)&&(r=[...r].map(c=>c+c).join(""));const i=parseInt(r.slice(0,6),16),d=r.length===8?parseInt(r.slice(6,8),16)/255:1;return{r:i>>16&255,g:i>>8&255,b:i&255,a:d}}const s=/^rgba?\(([^)]+)\)$/i.exec(a);if(s){const r=s[1].split(/[\s,/]+/).filter(Boolean).map(Number),[i,d,c,f=1]=r;return{r:i,g:d,b:c,a:Number.isNaN(f)?1:f}}return null}function B(e,a){return{r:e.r*e.a+a.r*(1-e.a),g:e.g*e.a+a.g*(1-e.a),b:e.b*e.a+a.b*(1-e.a),a:1}}function A({r:e,g:a,b:o}){const s=r=>{const i=r/255;return i<=.03928?i/12.92:((i+.055)/1.055)**2.4};return .2126*s(e)+.7152*s(a)+.0722*s(o)}function g(e,a){const o=b(e),s=b(a);if(!o||!s)return 1;const r=B(o,{...s}),i=A(r),d=A(s);return(Math.max(i,d)+.05)/(Math.min(i,d)+.05)}function E(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA large":"fail"}const _={title:"Foundations/Colors",parameters:{layout:"fullscreen",docs:{description:{component:`The palette as it's actually used: whole fields, edge to edge, with the
type each field allows. Type on a field is white / paper / lime only; small
text on periwinkle is white only; red is never text on a field — it's a
mark or a 3:1 UI edge. Lime is the exclamation mark: the CTA, one
highlighted word, pillar numerals.`}}},decorators:[e=>n.jsx("div",{className:"page",children:e()})]},N=[{name:"Pine",hex:t.pine,role:"primary field"},{name:"Jade",hex:t.jade,role:"secondary field"},{name:"Periwinkle",hex:t.peri,role:"the “alive” field"},{name:"Sky",hex:t.sky,role:"light field · squiggle"},{name:"Blush",hex:t.blush,role:"light field · frame"},{name:"Lime",hex:t.lime,role:"the exclamation mark"},{name:"Cream",hex:t.cream,role:"page ground"},{name:"Ink",hex:t.ink,role:"text on light"},{name:"Signal red",hex:t.red,role:"marks · 3:1 edges"},{name:"Red (deep)",hex:t.redDeep,role:"red as small text"},{name:"Gold",hex:t.gold,role:"selection · stars"},{name:"Muted",hex:t.muted,role:"secondary text on light"}],O={...l.eyebrow,color:"var(--band-fg-soft)",margin:0},p={render:()=>n.jsxs(u,{tone:"cream",pad:"md",children:[n.jsx("h1",{style:{...l.displayLG,margin:"0 0 8px"},children:"Color palette"}),n.jsx("p",{style:{...l.lead,color:t.muted,maxWidth:"60ch",margin:"0 0 32px"},children:"Deep pine anchors the system; jade and periwinkle carry whole pages. Sky, blush and lime are light fields and marks. Every swatch is an arch — the guide's shape."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:20},children:N.map(e=>n.jsxs("div",{children:[n.jsx("div",{style:{aspectRatio:"4 / 3",borderRadius:"999px 999px 0 0",background:e.hex,boxShadow:e.hex===t.cream?`inset 0 0 0 1px ${t.border}`:void 0}}),n.jsx("div",{style:{fontFamily:y.ui,fontWeight:600,fontSize:14,marginTop:10},children:e.name}),n.jsxs("div",{style:{fontFamily:y.ui,fontSize:12,color:t.muted},children:[e.hex,e.role?` · ${e.role}`:""]})]},e.name))})]})},D=Object.keys(x).filter(e=>e!=="transparent"),m={name:"Fields (allowed type per tone)",render:()=>n.jsx(n.Fragment,{children:D.map(e=>{const a=x[e],o=g(a.accent,a.bg)>=4.5;return n.jsxs(u,{tone:e,pad:"md",children:[n.jsxs("p",{style:O,children:[e," · ",a.bg]}),n.jsxs("h2",{style:{...l.displayMD,margin:"12px 0 0"},children:[n.jsx("span",{style:{color:a.accent},children:"One word"})," in the accent."]}),n.jsx("h3",{style:{...l.heading,margin:"20px 0 0"},children:"A serif heading, sentence case."}),n.jsxs("p",{style:{...l.body,color:"var(--band-fg-soft)",maxWidth:"54ch",margin:"10px 0 0"},children:["Body copy in the soft foreground (",a.fgSoft,"). Small text in the accent is"," ",o?"allowed":"display-only"," on this field (",g(a.accent,a.bg).toFixed(2),":1)."]}),n.jsx("div",{style:{marginTop:16},children:n.jsx(R,{tone:e==="sky"?"pine":"sky",children:"Eyebrow pill"})})]},e)})})},k=[["white","#FFFFFF"],["paper",t.paper],["ink",t.ink],["pine",t.pine],["muted",t.muted],["lime",t.lime],["sky",t.sky],["red",t.red],["red deep",t.redDeep]],h={name:"Pairings (WCAG)",render:()=>n.jsxs(u,{tone:"cream",pad:"md",children:[n.jsx("h2",{style:{...l.displayMD,margin:"0 0 16px"},children:"Type on field"}),n.jsx("p",{style:{...l.body,color:t.muted,maxWidth:"60ch",margin:"0 0 24px"},children:"AA = body text (≥4.5:1). AA large = display only (≥3:1). The same helper (`utils/contrast.ts`) backs these numbers."}),n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:y.ui,fontSize:13,minWidth:720},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{textAlign:"left",padding:"8px 10px"},children:"field"}),k.map(([e])=>n.jsx("th",{style:{textAlign:"left",padding:"8px 10px"},children:e},e))]})}),n.jsx("tbody",{children:D.map(e=>n.jsxs("tr",{children:[n.jsxs("td",{style:{padding:"6px 10px",fontWeight:600},children:[n.jsx("span",{style:{display:"inline-block",width:14,height:14,borderRadius:"50%",background:x[e].bg,marginRight:8,verticalAlign:"middle",boxShadow:`inset 0 0 0 1px ${t.border}`}}),e]}),k.map(([a,o])=>{const s=g(o,x[e].bg),r=E(s);return n.jsxs("td",{style:{padding:"6px 10px",color:r==="fail"?t.muted:t.ink,fontWeight:r==="AA"||r==="AAA"?600:400},children:[s.toFixed(2)," ",n.jsx("span",{style:{fontSize:11,opacity:.7},children:r})]},a)})]},e))})]})})]})};var j,S,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Band tone="cream" pad="md">
      <h1 style={{
      ...text.displayLG,
      margin: '0 0 8px'
    } as CSSProperties}>Color palette</h1>
      <p style={{
      ...text.lead,
      color: colors.muted,
      maxWidth: '60ch',
      margin: '0 0 32px'
    }}>
        Deep pine anchors the system; jade and periwinkle carry whole pages. Sky, blush and lime are
        light fields and marks. Every swatch is an arch — the guide's shape.
      </p>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 20
    }}>
        {swatches.map(s => <div key={s.name}>
            <div style={{
          aspectRatio: '4 / 3',
          borderRadius: '999px 999px 0 0',
          background: s.hex,
          boxShadow: s.hex === colors.cream ? \`inset 0 0 0 1px \${colors.border}\` : undefined
        }} />
            <div style={{
          fontFamily: font.ui,
          fontWeight: 600,
          fontSize: 14,
          marginTop: 10
        }}>{s.name}</div>
            <div style={{
          fontFamily: font.ui,
          fontSize: 12,
          color: colors.muted
        }}>
              {s.hex}
              {s.role ? \` · \${s.role}\` : ''}
            </div>
          </div>)}
      </div>
    </Band>
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,T,F;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Fields (allowed type per tone)',
  render: () => <>
      {TONES.map(tone => {
      const spec = bandTones[tone];
      const smallAccentOk = contrastRatio(spec.accent, spec.bg) >= 4.5;
      return <Band key={tone} tone={tone} pad="md">
            <p style={label}>
              {tone} · {spec.bg}
            </p>
            <h2 style={{
          ...text.displayMD,
          margin: '12px 0 0'
        } as CSSProperties}>
              <span style={{
            color: spec.accent
          }}>One word</span> in the accent.
            </h2>
            <h3 style={{
          ...text.heading,
          margin: '20px 0 0'
        }}>A serif heading, sentence case.</h3>
            <p style={{
          ...text.body,
          color: 'var(--band-fg-soft)',
          maxWidth: '54ch',
          margin: '10px 0 0'
        }}>
              Body copy in the soft foreground ({spec.fgSoft}). Small text in the accent is{' '}
              {smallAccentOk ? 'allowed' : 'display-only'} on this field (
              {contrastRatio(spec.accent, spec.bg).toFixed(2)}:1).
            </p>
            <div style={{
          marginTop: 16
        }}>
              <Pill tone={tone === 'sky' ? 'pine' : 'sky'}>Eyebrow pill</Pill>
            </div>
          </Band>;
    })}
    </>
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var C,W,P;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Pairings (WCAG)',
  render: () => <Band tone="cream" pad="md">
      <h2 style={{
      ...text.displayMD,
      margin: '0 0 16px'
    } as CSSProperties}>Type on field</h2>
      <p style={{
      ...text.body,
      color: colors.muted,
      maxWidth: '60ch',
      margin: '0 0 24px'
    }}>
        AA = body text (≥4.5:1). AA large = display only (≥3:1). The same helper
        (\`utils/contrast.ts\`) backs these numbers.
      </p>
      <div style={{
      overflowX: 'auto'
    }}>
        <table style={{
        borderCollapse: 'collapse',
        fontFamily: font.ui,
        fontSize: 13,
        minWidth: 720
      }}>
          <thead>
            <tr>
              <th style={{
              textAlign: 'left',
              padding: '8px 10px'
            }}>field</th>
              {CANDIDATES.map(([n]) => <th key={n} style={{
              textAlign: 'left',
              padding: '8px 10px'
            }}>
                  {n}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {TONES.map(tone => <tr key={tone}>
                <td style={{
              padding: '6px 10px',
              fontWeight: 600
            }}>
                  <span style={{
                display: 'inline-block',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: bandTones[tone].bg,
                marginRight: 8,
                verticalAlign: 'middle',
                boxShadow: \`inset 0 0 0 1px \${colors.border}\`
              }} />
                  {tone}
                </td>
                {CANDIDATES.map(([n, hex]) => {
              const r = contrastRatio(hex, bandTones[tone].bg);
              const g = grade(r);
              return <td key={n} style={{
                padding: '6px 10px',
                color: g === 'fail' ? colors.muted : colors.ink,
                fontWeight: g === 'AA' || g === 'AAA' ? 600 : 400
              }}>
                      {r.toFixed(2)} <span style={{
                  fontSize: 11,
                  opacity: 0.7
                }}>{g}</span>
                    </td>;
            })}
              </tr>)}
          </tbody>
        </table>
      </div>
    </Band>
}`,...(P=(W=h.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const q=["Palette","Fields","Pairings"];export{m as Fields,h as Pairings,p as Palette,q as __namedExportsOrder,_ as default};
