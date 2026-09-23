import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./index-DURGLf5P.js";import{t as r}from"./tokens-Dones2Tp.js";import"./_commonjsHelpers-CqkleIqs.js";function a({eyebrow:t,title:c,subtitle:p,variant:m="centered",as:n="h2",tone:u,label:E="Mile 5,280"}){const h={...r.eyebrow,color:u??"var(--band-accent, #184A4F)",marginTop:10};if(m==="divider")return d.createElement(n,{style:{...r.eyebrow,color:u??"var(--band-fg-soft, #5C6B68)",margin:0}},E);const g={...n==="h1"?r.displayLG:r.displayMD,color:"var(--band-fg, #16211F)",margin:0,textWrap:"balance"};return m==="marker"?e.jsxs("div",{style:{padding:"8px 0"},children:[d.createElement(n,{style:g},c),t&&e.jsx("div",{style:h,children:t})]}):e.jsxs("div",{style:{padding:"8px 0",textAlign:"center"},children:[d.createElement(n,{style:g},c),t&&e.jsx("div",{style:h,children:t}),p&&e.jsx("p",{style:{...r.lead,color:"var(--band-fg-soft, #5C6B68)",maxWidth:"54ch",margin:"18px auto 0"},children:p})]})}a.__docgenInfo={description:`Section header: title + eyebrow + subtitle. Sits directly on whatever
ground it's placed on — no card shell, no rule. Display type is the
uppercase hand-drawn face at its single weight; text colour comes from the
surrounding band (\`--band-fg\`) so the same header works on any field.`,methods:[],displayName:"SectionHeader",props:{eyebrow:{required:!1,tsType:{name:"string"},description:"Small uppercase label. Sits *below* the title, per the guide's composition."},title:{required:!1,tsType:{name:"string"},description:"Main headline."},subtitle:{required:!1,tsType:{name:"string"},description:"Supporting lead paragraph (centered variant only)."},variant:{required:!1,tsType:{name:"union",raw:"'centered' | 'marker' | 'divider'",elements:[{name:"literal",value:"'centered'"},{name:"literal",value:"'marker'"},{name:"literal",value:"'divider'"}]},description:"Layout:\n- `centered` — centered headline + eyebrow + lead, on the page ground.\n- `marker` — left-aligned headline + eyebrow.\n- `divider` — a small uppercase label heading (uses `label`).",defaultValue:{value:"'centered'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Heading level. `h1` uses the page-title display size, everything else the\nsection size. Default `h2`; pages pass `h1` for their title.",defaultValue:{value:"'h2'",computed:!1}},tone:{required:!1,tsType:{name:"string"},description:"Eyebrow color override (defaults to pine)."},barColor:{required:!1,tsType:{name:"string"},description:"@deprecated The marker bar is gone; kept so callers don't break."},label:{required:!1,tsType:{name:"string"},description:"Center label on the `divider` variant.",defaultValue:{value:"'Mile 5,280'",computed:!1}}}};const H={title:"Components/Section Header",component:a,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["centered","marker","divider"]},as:{control:"inline-radio",options:["h1","h2","h3"]}}},i={args:{variant:"centered",as:"h1",eyebrow:"A brand-first approach",title:"We dig below the surface.",subtitle:"Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."}},s={args:{variant:"marker",eyebrow:"02 · Work people can feel",title:"Emotion creates connection."}},o={args:{variant:"divider",label:"Mile 5,280"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[e.jsx(a,{variant:"centered",eyebrow:"A brand-first approach",title:"We dig below the surface.",subtitle:"Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."}),e.jsx(a,{variant:"marker",eyebrow:"02 · Work people can feel",title:"Emotion creates connection."}),e.jsx(a,{variant:"divider",label:"Mile 5,280"})]})};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    as: 'h1',
    eyebrow: 'A brand-first approach',
    title: 'We dig below the surface.',
    subtitle: "Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,x,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'marker',
    eyebrow: '02 · Work people can feel',
    title: 'Emotion creates connection.'
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,S,M;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'divider',
    label: 'Mile 5,280'
  }
}`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var W,j,T;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 18
  }}>
      <SectionHeader variant="centered" eyebrow="A brand-first approach" title="We dig below the surface." subtitle="Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive." />
      <SectionHeader variant="marker" eyebrow="02 · Work people can feel" title="Emotion creates connection." />
      <SectionHeader variant="divider" label="Mile 5,280" />
    </div>
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const V=["Centered","Marker","Divider","AllVariants"];export{l as AllVariants,i as Centered,o as Divider,s as Marker,V as __namedExportsOrder,H as default};
