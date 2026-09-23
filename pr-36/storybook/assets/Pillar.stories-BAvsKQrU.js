import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as b,t as a}from"./tokens-DJqrrynb.js";import{B as y}from"./Band-CC5RQlWi.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";function t({index:r,title:x,lead:i,keyIdea:o,points:d=[],children:j}){return e.jsxs("article",{style:{color:"var(--band-fg, #16211F)"},children:[e.jsxs("div",{style:{fontFamily:b.ui,fontWeight:700,fontSize:20,letterSpacing:".04em",color:"var(--band-accent, #184A4F)",marginBottom:10},children:[String(r).padStart(2,"0"),"."]}),e.jsx("h3",{style:{...a.heading,margin:"0 0 12px",textWrap:"balance"},children:x}),i&&e.jsx("p",{style:{...a.body,margin:"0 0 10px"},children:i}),o&&e.jsxs("p",{style:{...a.body,fontStyle:"italic",color:"var(--band-fg-soft, #5C6B68)",margin:"0 0 14px"},children:["Key idea: ",o]}),d.length>0&&e.jsx("ul",{style:{...a.body,fontSize:"1rem",color:"var(--band-fg-soft, #5C6B68)",margin:0,paddingLeft:"1.1em"},children:d.map(l=>e.jsx("li",{style:{marginBottom:6},children:l},l))}),j]})}t.__docgenInfo={description:"",methods:[],displayName:"Pillar",props:{index:{required:!0,tsType:{name:"number"},description:'1-based; rendered as "01."'},title:{required:!0,tsType:{name:"string"},description:""},lead:{required:!1,tsType:{name:"string"},description:"The one-line belief the pillar opens with."},keyIdea:{required:!1,tsType:{name:"string"},description:'"Key idea: …"'},points:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const w={title:"Components/Pillar",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[r=>e.jsx("div",{className:"page",children:r()})]},h={index:1,title:"Below the surface",lead:"We believe the best creative work starts below the obvious answer.",keyIdea:"Better questions create better brands.",points:["We dig deeper than logos and taglines","We uncover the emotional core behind the work","We believe meaningful creative starts with curiosity"]},n={args:h,render:r=>e.jsx(y,{tone:"jade",frame:"sky",pad:"lg",children:e.jsxs("div",{style:{display:"grid",gap:40,gridTemplateColumns:"repeat(auto-fit, minmax(16rem, 1fr))"},children:[e.jsx(t,{...r}),e.jsx(t,{...r,index:2,title:"Work people can feel",keyIdea:"Emotion creates connection."}),e.jsx(t,{...r,index:3,title:"Relationships. Not projects.",keyIdea:"Strong relationships create stronger creative."})]})})},s={args:h,render:r=>e.jsx(y,{tone:"cream",pad:"md",children:e.jsx(t,{...r})})};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: one,
  render: args => <Band tone="jade" frame="sky" pad="lg">
      <div style={{
      display: 'grid',
      gap: 40,
      gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))'
    }}>
        <Pillar {...args} />
        <Pillar {...args} index={2} title="Work people can feel" keyIdea="Emotion creates connection." />
        <Pillar {...args} index={3} title="Relationships. Not projects." keyIdea="Strong relationships create stronger creative." />
      </div>
    </Band>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: one,
  render: args => <Band tone="cream" pad="md">
      <Pillar {...args} />
    </Band>
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const W=["OnJade","OnCream"];export{s as OnCream,n as OnJade,W as __namedExportsOrder,w as default};
