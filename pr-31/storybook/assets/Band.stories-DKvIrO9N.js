import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n,b as P}from"./Band-DUZSeUeW.js";import{S as V}from"./SectionHeader-CGzQNRjw.js";import{B as L}from"./Button-Cy2u__Fg.js";import{t as c}from"./tokens-BRN9VsJC.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Pill-CuS_pkbb.js";import"./useHover-D0oxY1V2.js";import"./Squiggle-BNAXrcqA.js";import"./useInView-CShgmNTz.js";const O=Object.keys(P),K={title:"Layout/Band",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{tone:{control:"select",options:O},pad:{control:"inline-radio",options:["none","sm","md","lg"]},edge:{control:"inline-radio",options:["none","arch"]},frame:{control:"inline-radio",options:[void 0,"sky","blush"]}},decorators:[r=>e.jsx("div",{className:"page",children:r()})]};function a({tone:r}){return e.jsxs(e.Fragment,{children:[e.jsx(V,{variant:"marker",title:`${r} field`,eyebrow:"Allowed type on this ground"}),e.jsx("p",{style:{...c.body,color:"var(--band-fg-soft)",maxWidth:"54ch",margin:"18px 0 0"},children:"Body copy in the soft foreground. Headings in the foreground. The accent is reserved for eyebrows, numerals and one highlighted word."})]})}const t={args:{tone:"pine",pad:"md",edge:"none"},render:r=>e.jsx(n,{...r,children:e.jsx(a,{tone:r.tone??"cream"})})},o={render:()=>e.jsx(e.Fragment,{children:O.filter(r=>r!=="transparent").map(r=>e.jsx(n,{tone:r,pad:"md",children:e.jsx(a,{tone:r})},r))})},s={...o,parameters:{viewport:{defaultViewport:"mobile1"}}},d={...o,parameters:{viewport:{defaultViewport:"tablet"}}},i={name:"Seams: colour → arch → hard edge",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{tone:"pine",pad:"lg",children:e.jsx(a,{tone:"pine"})}),e.jsx(n,{tone:"jade",pad:"md",children:e.jsx(a,{tone:"jade"})}),e.jsxs(n,{tone:"peri",pad:"lg",edge:"arch",children:[e.jsx(a,{tone:"peri"}),e.jsx("p",{style:{margin:"24px 0 0"},children:e.jsx(L,{variant:"accent",size:"lg",children:"Start your project"})})]}),e.jsx(n,{tone:"pine",pad:"md",children:e.jsx(a,{tone:"pine"})})]})},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{tone:"pine",frame:"sky",pad:"lg",children:e.jsx(a,{tone:"pine"})}),e.jsx(n,{tone:"cream",frame:"blush",pad:"lg",children:e.jsx(a,{tone:"cream"})})]})},l={render:()=>e.jsxs(n,{tone:"transparent",headerTone:"dark",pad:"lg",style:{minHeight:"70vh",alignContent:"end"},background:e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, #184A4F 0%, rgba(24,74,79,.2) 60%), radial-gradient(circle at 70% 30%, #8CB6F2, #096D61)"}}),children:[e.jsx("h2",{style:{...c.displayLG,color:"#fff",margin:0},children:"Photo, then pine."}),e.jsx("p",{style:{...c.lead,color:"rgba(255,255,255,.88)",maxWidth:"40ch"},children:"The scrim's last stop is the next band's colour, so the seam is a resolve, not a line."})]})};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tone: 'pine',
    pad: 'md',
    edge: 'none'
  },
  render: args => <Band {...args}>
      <Copy tone={args.tone ?? 'cream'} />
    </Band>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,x,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      {TONES.filter(t => t !== 'transparent').map(tone => <Band key={tone} tone={tone} pad="md">
          <Copy tone={tone} />
        </Band>)}
    </>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,f,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...AllTones,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var B,T,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...AllTones,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,k,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Seams: colour → arch → hard edge',
  render: () => <>
      <Band tone="pine" pad="lg">
        <Copy tone="pine" />
      </Band>
      <Band tone="jade" pad="md">
        <Copy tone="jade" />
      </Band>
      <Band tone="peri" pad="lg" edge="arch">
        <Copy tone="peri" />
        <p style={{
        margin: '24px 0 0'
      }}>
          <Button variant="accent" size="lg">
            Start your project
          </Button>
        </p>
      </Band>
      <Band tone="pine" pad="md">
        <Copy tone="pine" />
      </Band>
    </>
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,A,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      <Band tone="pine" frame="sky" pad="lg">
        <Copy tone="pine" />
      </Band>
      <Band tone="cream" frame="blush" pad="lg">
        <Copy tone="cream" />
      </Band>
    </>
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var W,E,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Band tone="transparent" headerTone="dark" pad="lg" style={{
    minHeight: '70vh',
    alignContent: 'end'
  }} background={<div style={{
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #184A4F 0%, rgba(24,74,79,.2) 60%), radial-gradient(circle at 70% 30%, #8CB6F2, #096D61)'
  }} />}>
      <h2 style={{
      ...text.displayLG,
      color: '#fff',
      margin: 0
    }}>Photo, then pine.</h2>
      <p style={{
      ...text.lead,
      color: 'rgba(255,255,255,.88)',
      maxWidth: '40ch'
    }}>
        The scrim's last stop is the next band's colour, so the seam is a resolve, not a line.
      </p>
    </Band>
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Q=["Playground","AllTones","AllTonesMobile","AllTonesTablet","Seams","Framed","WithBackground"];export{o as AllTones,s as AllTonesMobile,d as AllTonesTablet,p as Framed,t as Playground,i as Seams,l as WithBackground,Q as __namedExportsOrder,K as default};
