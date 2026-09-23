import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Z,R as ee}from"./index-DURGLf5P.js";import{c as a,t as h}from"./tokens-DlkmHXpM.js";import{S as ae}from"./SectionHeader-Dm1HrBG0.js";import{B as re}from"./Button-xWI2mdgv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useHover-D0oxY1V2.js";const H={cream:{bg:a.cream,fg:a.ink,fgSoft:a.muted,accent:a.pine,header:"light"},pine:{bg:a.pine,fg:"#FFFFFF",fgSoft:"#CFE2E0",accent:a.lime,header:"dark"},jade:{bg:a.jade,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.84)",accent:a.lime,header:"dark"},peri:{bg:a.peri,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.88)",accent:a.lime,header:"dark"},sky:{bg:a.sky,fg:a.pine,fgSoft:a.ink,accent:a.pine,header:"light"},blush:{bg:a.blush,fg:a.pine,fgSoft:a.ink,accent:a.red,header:"light"},lime:{bg:a.lime,fg:a.pine,fgSoft:a.ink,accent:a.red,header:"light"},transparent:{bg:"transparent",fg:a.ink,fgSoft:a.muted,accent:a.pine,header:"light"}},n=Z.forwardRef(function({as:z="section",tone:f="cream",frame:u,edge:b="none",pad:D="md",headerTone:G,background:g,reveal:M=!1,className:I,style:J,children:K,...Q},U){const o=H[f],X={"--band-bg":o.bg,"--band-fg":o.fg,"--band-fg-soft":o.fgSoft,"--band-accent":o.accent},Y=["band",`band--${f}`,`band--pad-${D}`,b!=="none"?`band--edge-${b}`:"",g?"band--has-bg":"",I??""].filter(Boolean).join(" "),y=ee.createElement(z,{ref:U,className:Y,"data-header-tone":G??o.header,"data-reveal":M?"":void 0,style:{background:o.bg,color:o.fg,...X,...J},...Q},g?e.jsx("div",{className:"band__bg","aria-hidden":"true",children:g}):null,K);return u?e.jsx("div",{className:`band band--frame band--frame-${u}`,style:{background:a[u]},children:y}):y});n.__docgenInfo={description:"",methods:[],displayName:"Band",props:{as:{required:!1,tsType:{name:"union",raw:"'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'",elements:[{name:"literal",value:"'section'"},{name:"literal",value:"'div'"},{name:"literal",value:"'article'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"}]},description:"Element to render.",defaultValue:{value:"'section'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'cream' | 'pine' | 'jade' | 'peri' | 'sky' | 'blush' | 'lime' | 'transparent'",elements:[{name:"literal",value:"'cream'"},{name:"literal",value:"'pine'"},{name:"literal",value:"'jade'"},{name:"literal",value:"'peri'"},{name:"literal",value:"'sky'"},{name:"literal",value:"'blush'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'transparent'"}]},description:"",defaultValue:{value:"'cream'",computed:!1}},frame:{required:!1,tsType:{name:"union",raw:"'sky' | 'blush'",elements:[{name:"literal",value:"'sky'"},{name:"literal",value:"'blush'"}]},description:"Wrap the field in a sky/blush frame with a square-cornered inner field (guide pp3–6, 8)."},edge:{required:!1,tsType:{name:"union",raw:"'none' | 'arch'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'arch'"}]},description:"`arch` domes the top edge over the band above it.",defaultValue:{value:"'none'",computed:!1}},pad:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Vertical rhythm: same-colour neighbours `sm`; a colour seam `md` both sides; the reel's bottom `lg`.",defaultValue:{value:"'md'",computed:!1}},headerTone:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Override what the header reads as over this band (defaults from the tone)."},background:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Full-bleed layer behind the content — a photo + scrim. `aria-hidden`."},reveal:{required:!1,tsType:{name:"boolean"},description:"Opt in to the one whole-block settle after a hard colour edge (PR 7).",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const L=Object.keys(H),ce={title:"Layout/Band",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{tone:{control:"select",options:L},pad:{control:"inline-radio",options:["none","sm","md","lg"]},edge:{control:"inline-radio",options:["none","arch"]},frame:{control:"inline-radio",options:[void 0,"sky","blush"]}},decorators:[r=>e.jsx("div",{className:"page",children:r()})]};function t({tone:r}){return e.jsxs(e.Fragment,{children:[e.jsx(ae,{variant:"marker",title:`${r} field`,eyebrow:"Allowed type on this ground"}),e.jsx("p",{style:{...h.body,color:"var(--band-fg-soft)",maxWidth:"54ch",margin:"18px 0 0"},children:"Body copy in the soft foreground. Headings in the foreground. The accent is reserved for eyebrows, numerals and one highlighted word."})]})}const l={args:{tone:"pine",pad:"md",edge:"none"},render:r=>e.jsx(n,{...r,children:e.jsx(t,{tone:r.tone??"cream"})})},s={render:()=>e.jsx(e.Fragment,{children:L.filter(r=>r!=="transparent").map(r=>e.jsx(n,{tone:r,pad:"md",children:e.jsx(t,{tone:r})},r))})},d={...s,parameters:{viewport:{defaultViewport:"mobile1"}}},i={...s,parameters:{viewport:{defaultViewport:"tablet"}}},c={name:"Seams: colour → arch → hard edge",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{tone:"pine",pad:"lg",children:e.jsx(t,{tone:"pine"})}),e.jsx(n,{tone:"jade",pad:"md",children:e.jsx(t,{tone:"jade"})}),e.jsxs(n,{tone:"peri",pad:"lg",edge:"arch",children:[e.jsx(t,{tone:"peri"}),e.jsx("p",{style:{margin:"24px 0 0"},children:e.jsx(re,{variant:"accent",size:"lg",children:"Start your project"})})]}),e.jsx(n,{tone:"pine",pad:"md",children:e.jsx(t,{tone:"pine"})})]})},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{tone:"pine",frame:"sky",pad:"lg",children:e.jsx(t,{tone:"pine"})}),e.jsx(n,{tone:"cream",frame:"blush",pad:"lg",children:e.jsx(t,{tone:"cream"})})]})},m={render:()=>e.jsxs(n,{tone:"transparent",headerTone:"dark",pad:"lg",style:{minHeight:"70vh",alignContent:"end"},background:e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, #184A4F 0%, rgba(24,74,79,.2) 60%), radial-gradient(circle at 70% 30%, #8CB6F2, #096D61)"}}),children:[e.jsx("h2",{style:{...h.displayLG,color:"#fff",margin:0},children:"Photo, then pine."}),e.jsx("p",{style:{...h.lead,color:"rgba(255,255,255,.88)",maxWidth:"40ch"},children:"The scrim's last stop is the next band's colour, so the seam is a resolve, not a line."})]})};var v,x,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tone: 'pine',
    pad: 'md',
    edge: 'none'
  },
  render: args => <Band {...args}>
      <Copy tone={args.tone ?? 'cream'} />
    </Band>
}`,...(j=(x=l.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,B,F;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      {TONES.filter(t => t !== 'transparent').map(tone => <Band key={tone} tone={tone} pad="md">
          <Copy tone={tone} />
        </Band>)}
    </>
}`,...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var T,S,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...AllTones,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,R,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...AllTones,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var N,q,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,O,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <>
      <Band tone="pine" frame="sky" pad="lg">
        <Copy tone="pine" />
      </Band>
      <Band tone="cream" frame="blush" pad="lg">
        <Copy tone="cream" />
      </Band>
    </>
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var _,P,$;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const pe=["Playground","AllTones","AllTonesMobile","AllTonesTablet","Seams","Framed","WithBackground"];export{s as AllTones,d as AllTonesMobile,i as AllTonesTablet,p as Framed,l as Playground,c as Seams,m as WithBackground,pe as __namedExportsOrder,ce as default};
