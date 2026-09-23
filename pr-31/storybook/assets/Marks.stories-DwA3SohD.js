import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s,t as h}from"./tokens-BRN9VsJC.js";import{b as F,B as c}from"./Band-DUZSeUeW.js";import{A as m,a as $}from"./Arch-Sai6kFub.js";import{S as u}from"./Squiggle-BNAXrcqA.js";import{P as g}from"./Pill-CuS_pkbb.js";import{W as H}from"./Wordmark-DT3ClbA5.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useInView-CShgmNTz.js";import"./useHover-D0oxY1V2.js";const O='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.73 241.61"><path fill="currentColor" d="M91.04 2.05L119.68 35.75L145.72 0L156.9 42.79L195.87 21.88L187.38 65.28L231.56 63.36L205.08 98.77L245.73 116.21L206.5 136.63L235.55 169.97L191.35 171.35L203.06 214L162.64 196.06L154.68 239.57L126.05 205.87L100 241.61L88.82 198.82L49.85 219.73L58.34 176.33L14.16 178.25L40.64 142.84L0 125.4L39.23 104.98L10.17 71.64L54.38 70.26L42.66 27.61L83.09 45.55ZM91.04 2.05"/></svg>',_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.22 69.67"><path fill="currentColor" d="M51.35 0.66C41.1 3.4 35.02 13.93 37.76 24.18C35.02 13.93 24.49 7.85 14.24 10.6C3.99 13.34 -2.09 23.88 0.65 34.12C8.46 64.43 49.96 69.67 49.96 69.67C49.96 69.67 83.27 44.38 74.87 14.24C72.13 3.99 61.6 -2.09 51.35 0.66"/></svg>';var y;const Y=((y=/viewBox="([^"]+)"/.exec(O))==null?void 0:y[1])??"0 0 245.7 241.6";var f;const Z=((f=/d="([^"]+)"/.exec(O))==null?void 0:f[1])??"";var x;const J=((x=/viewBox="([^"]+)"/.exec(_))==null?void 0:x[1])??"0 0 76.2 69.7";var v;const K=((v=/d="([^"]+)"/.exec(_))==null?void 0:v[1])??"";function p({size:r=72,color:a=s.lime,heart:R=!1,heartColor:N=s.red,pulse:G=!1,className:U,style:X}){return e.jsxs("span",{className:U,"aria-hidden":"true",style:{display:"inline-grid",placeItems:"center",width:r,height:r,lineHeight:0,animation:G?"sc-pulse .6s cubic-bezier(.2,.7,.2,1) 1":void 0,transformOrigin:"center",...X},children:[e.jsx("svg",{viewBox:Y,width:r,height:r,style:{gridArea:"1 / 1",display:"block"},children:e.jsx("path",{d:Z,fill:a})}),R&&e.jsx("svg",{viewBox:J,width:r*.36,height:r*.36,style:{gridArea:"1 / 1",display:"block",transform:"translateY(2%)"},children:e.jsx("path",{d:K,fill:N})})]})}p.__docgenInfo={description:"",methods:[],displayName:"Starburst",props:{size:{required:!1,tsType:{name:"number"},description:"Size in px.",defaultValue:{value:"72",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Burst colour. Default lime.",defaultValue:{value:"'#F0FC97'",computed:!1}},heart:{required:!1,tsType:{name:"boolean"},description:"Show the heart inside.",defaultValue:{value:"false",computed:!1}},heartColor:{required:!1,tsType:{name:"string"},description:"Heart colour. Default red.",defaultValue:{value:"'#FF3B3B'",computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"One beat on mount.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const me={title:"Foundations/Marks",parameters:{layout:"fullscreen",docs:{description:{component:`The brand's hand-drawn marks, extracted as vector paths from the
2026-06-22 brand guide (p1 logo, p2 squiggle, p7 starburst + heart), and
the CSS arch. Marks are seasoning: at most one per viewport, two squiggles
per page. Every story renders on every band tone so the a11y addon sees
each pairing.`}}},decorators:[r=>e.jsx("div",{className:"page",children:r()})]},Q=Object.keys(F).filter(r=>r!=="transparent"),ee={...h.eyebrow,color:"var(--band-fg-soft)",margin:"0 0 12px"};function V({render:r}){return e.jsx(e.Fragment,{children:Q.map(a=>e.jsxs(c,{tone:a,pad:"sm",children:[e.jsx("p",{style:ee,children:a}),r(a)]},a))})}const t={render:()=>e.jsx(V,{render:r=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:32},children:[e.jsx(H,{tone:F[r].header,height:32}),e.jsx(u,{width:120,style:{color:r==="sky"?s.pine:s.sky}}),e.jsx(p,{size:72,heart:!0,color:r==="lime"?s.pine:s.lime}),e.jsx(g,{tone:r==="sky"?"pine":"sky",children:"How we talk"}),e.jsx(g,{tone:"red",size:"lg",children:"How we look"})]})})},o={name:"Arch",render:()=>e.jsx(V,{render:r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,maxWidth:720},children:[e.jsx(m,{tone:r==="sky"?"pine":"sky"}),e.jsx(m,{tone:"blush",ratio:"1 / 1"}),e.jsx(m,{tone:"pine",children:e.jsx("img",{src:"/intake/river-bluff-hero-1280.jpg",alt:"",style:$})})]})})},i={name:"Squiggle (draws on view)",render:()=>e.jsxs(c,{tone:"jade",pad:"lg",children:[e.jsx("h2",{style:{...h.displayMD,color:"#fff",margin:0,maxWidth:"12ch"},children:"Go further. It’s less crowded."}),e.jsx(u,{draw:!0,width:200,style:{color:s.sky,marginTop:-24,marginLeft:"40%"}})]})},n={name:"Starburst (pulses on mount)",render:()=>e.jsx(c,{tone:"pine",pad:"lg",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(p,{size:72,heart:!0,pulse:!0}),e.jsxs("h1",{style:{...h.displayXL,color:"#fff",margin:0},children:[e.jsx("span",{style:{color:s.blush},children:"Creative"})," with a heartbeat"]})]})})},l={name:"At 24px and 240px",render:()=>e.jsx(c,{tone:"pine",pad:"md",children:[24,240].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24,marginBottom:24},children:[e.jsx(H,{tone:"dark",height:r}),e.jsx(u,{width:r*2,style:{color:s.sky}}),e.jsx(p,{size:r,heart:!0})]},r))})},d={render:()=>e.jsx("div",{style:{padding:32,display:"flex",gap:16,alignItems:"center"},children:[16,32,64,128].map(r=>e.jsx("img",{src:"/favicon.svg",width:r,height:r,alt:`favicon at ${r}px`},r))})};var w,j,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <OnEveryTone render={tone => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 32
  }}>
          <Wordmark tone={bandTones[tone].header} height={32} />
          <Squiggle width={120} style={{
      color: tone === 'sky' ? colors.pine : colors.sky
    }} />
          <Starburst size={72} heart color={tone === 'lime' ? colors.pine : colors.lime} />
          <Pill tone={tone === 'sky' ? 'pine' : 'sky'}>How we talk</Pill>
          <Pill tone="red" size="lg">
            How we look
          </Pill>
        </div>} />
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,S,L;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Arch',
  render: () => <OnEveryTone render={tone => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 24,
    maxWidth: 720
  }}>
          <Arch tone={tone === 'sky' ? 'pine' : 'sky'} />
          <Arch tone="blush" ratio="1 / 1" />
          <Arch tone="pine">
            <img src="/intake/river-bluff-hero-1280.jpg" alt="" style={archMedia} />
          </Arch>
        </div>} />
}`,...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var B,T,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Squiggle (draws on view)',
  render: () => <Band tone="jade" pad="lg">
      <h2 style={{
      ...text.displayMD,
      color: '#fff',
      margin: 0,
      maxWidth: '12ch'
    }}>
        Go further. It’s less crowded.
      </h2>
      <Squiggle draw width={200} style={{
      color: colors.sky,
      marginTop: -24,
      marginLeft: '40%'
    }} />
    </Band>
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var A,C,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Starburst (pulses on mount)',
  render: () => <Band tone="pine" pad="lg">
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
        <Starburst size={72} heart pulse />
        <h1 style={{
        ...text.displayXL,
        color: '#fff',
        margin: 0
      }}>
          <span style={{
          color: colors.blush
        }}>Creative</span> with a heartbeat
        </h1>
      </div>
    </Band>
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var M,W,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'At 24px and 240px',
  render: () => <Band tone="pine" pad="md">
      {[24, 240].map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      marginBottom: 24
    }}>
          <Wordmark tone="dark" height={size} />
          <Squiggle width={size * 2} style={{
        color: colors.sky
      }} />
          <Starburst size={size} heart />
        </div>)}
    </Band>
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var E,P,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {[16, 32, 64, 128].map(s => <img key={s} src="/favicon.svg" width={s} height={s} alt={\`favicon at \${s}px\`} />)}
    </div>
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const he=["Marks","ArchShape","SquiggleDraw","StarburstPulse","Sizes","Favicon"];export{o as ArchShape,d as Favicon,t as Marks,l as Sizes,i as SquiggleDraw,n as StarburstPulse,he as __namedExportsOrder,me as default};
