import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a,f as r}from"./tokens-DGCmQ6RG.js";function t({eyebrow:l,title:d,subtitle:W,variant:c="centered",tone:p,label:j="Mile 5,280"}){return c==="divider"?e.jsx("h2",{style:{fontFamily:r.ui,fontSize:12,fontWeight:600,letterSpacing:".22em",textTransform:"uppercase",color:a.muted,margin:0},children:j}):c==="marker"?e.jsx("div",{style:{padding:"8px 0"},children:e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:r.ui,fontSize:12,letterSpacing:".24em",textTransform:"uppercase",color:p??a.pine,marginBottom:6},children:l}),e.jsx("h3",{style:{fontFamily:r.display,fontWeight:800,fontSize:28,margin:0,letterSpacing:"-.01em"},children:d})]})}):e.jsxs("div",{style:{padding:"8px 0",textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:r.ui,fontSize:12,letterSpacing:".24em",textTransform:"uppercase",color:p??a.red,marginBottom:12},children:l}),e.jsx("h3",{style:{fontFamily:r.display,fontWeight:800,fontSize:34,letterSpacing:"-.01em",margin:"0 0 12px"},children:d}),e.jsx("p",{style:{fontFamily:r.serif,fontSize:18,color:a.muted,maxWidth:"54ch",margin:"0 auto",lineHeight:1.5},children:W})]})}t.__docgenInfo={description:`Section header: eyebrow + title + subtitle. Sits directly on whatever
ground it's placed on — no card shell, no rule.`,methods:[],displayName:"SectionHeader",props:{eyebrow:{required:!1,tsType:{name:"string"},description:"Small uppercase kicker above the title."},title:{required:!1,tsType:{name:"string"},description:"Main headline."},subtitle:{required:!1,tsType:{name:"string"},description:"Supporting lead paragraph (centered variant only)."},variant:{required:!1,tsType:{name:"union",raw:"'centered' | 'marker' | 'divider'",elements:[{name:"literal",value:"'centered'"},{name:"literal",value:"'marker'"},{name:"literal",value:"'divider'"}]},description:"Layout:\n- `centered` — centered eyebrow + headline + lead, on the page ground.\n- `marker` — left-aligned eyebrow + headline.\n- `divider` — a small uppercase label heading (uses `label`).",defaultValue:{value:"'centered'",computed:!1}},tone:{required:!1,tsType:{name:"string"},description:"Eyebrow color override (centered defaults to red, marker to pine)."},barColor:{required:!1,tsType:{name:"string"},description:"@deprecated The marker bar is gone; kept so callers don't break."},label:{required:!1,tsType:{name:"string"},description:"Center label on the `divider` variant.",defaultValue:{value:"'Mile 5,280'",computed:!1}}}};const q={title:"Components/Section Header",component:t,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["centered","marker","divider"]}}},i={args:{variant:"centered",eyebrow:"A brand-first approach",title:"We dig below the surface.",subtitle:"Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."}},n={args:{variant:"marker",eyebrow:"02 · Work people can feel",title:"Emotion creates connection."}},s={args:{variant:"divider",label:"Mile 5,280"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[e.jsx(t,{variant:"centered",eyebrow:"A brand-first approach",title:"We dig below the surface.",subtitle:"Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."}),e.jsx(t,{variant:"marker",eyebrow:"02 · Work people can feel",title:"Emotion creates connection."}),e.jsx(t,{variant:"divider",label:"Mile 5,280"})]})};var m,u,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    eyebrow: 'A brand-first approach',
    title: 'We dig below the surface.',
    subtitle: "Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive."
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'marker',
    eyebrow: '02 · Work people can feel',
    title: 'Emotion creates connection.'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'divider',
    label: 'Mile 5,280'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,k,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 18
  }}>
      <SectionHeader variant="centered" eyebrow="A brand-first approach" title="We dig below the surface." subtitle="Most brands stop at safe messaging. We're more interested in the version that feels human, honest, and alive." />
      <SectionHeader variant="marker" eyebrow="02 · Work people can feel" title="Emotion creates connection." />
      <SectionHeader variant="divider" label="Mile 5,280" />
    </div>
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const A=["Centered","Marker","Divider","AllVariants"];export{o as AllVariants,i as Centered,s as Divider,n as Marker,A as __namedExportsOrder,q as default};
