import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as i,r as v}from"./tokens-DTPdHAMK.js";const w={fontFamily:"var(--ui)",fontSize:12,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:i.muted},j={fontFamily:"var(--ui)",fontSize:12,fontWeight:600,letterSpacing:".06em",color:i.pine};function S({current:e,total:t,labels:l}){const s=l==null?void 0:l[e-1];return r.jsxs("div",{role:"progressbar","aria-valuemin":1,"aria-valuemax":t,"aria-valuenow":e,"aria-valuetext":s?`Step ${e} of ${t} — ${s}`:`Step ${e} of ${t}`,children:[r.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:12,marginBottom:8},children:[r.jsxs("span",{style:w,children:["Step ",e," of ",t]}),s&&r.jsx("span",{style:j,children:s})]}),r.jsx("div",{style:{display:"flex",gap:6},children:Array.from({length:t},(T,p)=>r.jsx("span",{style:{flex:1,height:4,borderRadius:v.pill,background:p<e?i.pine:i.border,transition:"background .3s ease"}},p))})]})}S.__docgenInfo={description:`"Step 1 of 3" counter plus a segmented bar. Segments render as a flex row so
the bar fills whatever width it is given without a media query.`,methods:[],displayName:"StepProgress",props:{current:{required:!0,tsType:{name:"number"},description:"1-based index of the active step."},total:{required:!0,tsType:{name:"number"},description:"Total number of steps."},labels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Per-step short titles, rendered beside the counter when supplied."}}};const k={title:"Components/StepProgress",component:S,tags:["autodocs"]},b=["The spark","What we see","Let's make it happen"],a={args:{current:1,total:3,labels:b}},n={args:{current:2,total:3,labels:b}},o={args:{current:3,total:3}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 3,
    labels
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    current: 2,
    total: 3,
    labels
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    current: 3,
    total: 3
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const q=["Default","MidFlow","CounterOnly"];export{o as CounterOnly,a as Default,n as MidFlow,q as __namedExportsOrder,k as default};
