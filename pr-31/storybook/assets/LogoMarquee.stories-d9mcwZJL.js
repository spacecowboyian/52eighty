import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p,f as d}from"./tokens-BRN9VsJC.js";const m=["PTBA","Altitude","Northbound","Cardinal Co.","Rivertown","Field & Co."];function i({logos:t,hidden:r}){return e.jsx("div",{"aria-hidden":r?"true":void 0,style:{display:"flex",gap:48,paddingRight:48,alignItems:"center"},children:t.map((c,u)=>e.jsx("div",{style:{fontFamily:d.display,fontWeight:400,fontSize:22,color:"#C9C2B6"},children:c},u))})}function o({logos:t=m,label:r="We really like working with these folks"}){return e.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:"30px 0",overflow:"hidden"},children:[e.jsx("div",{style:{fontFamily:d.ui,fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:p.muted,textAlign:"center",marginBottom:22},children:r}),e.jsxs("div",{style:{display:"flex",width:"max-content",animation:"sc-marquee 22s linear infinite"},children:[e.jsx(i,{logos:t}),e.jsx(i,{logos:t,hidden:!0})]})]})}o.__docgenInfo={description:"Continuously scrolling client logo strip with two duplicated tracks.",methods:[],displayName:"LogoMarquee",props:{logos:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Client logo names rendered in the scrolling strip.",defaultValue:{value:`[
  'PTBA',
  'Altitude',
  'Northbound',
  'Cardinal Co.',
  'Rivertown',
  'Field & Co.',
]`,computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Small uppercase label above the track.",defaultValue:{value:"'We really like working with these folks'",computed:!1}}}};const h={title:"Components/Logo Marquee",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={render:()=>e.jsx("div",{style:{padding:40},children:e.jsx(o,{})})};var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 40
  }}>
      <LogoMarquee />
    </div>
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,h as default};
