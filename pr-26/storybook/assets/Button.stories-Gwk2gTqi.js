import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a,e as x,r as K,f as Q}from"./tokens-DGCmQ6RG.js";import{u as U}from"./useHover-D0oxY1V2.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";const S={sm:{fontSize:13,padding:"9px 18px"},md:{fontSize:15,padding:"13px 26px"},lg:{fontSize:17,padding:"16px 34px"}},X={sm:"9px 16px 9px 14px",md:"13px 24px 13px 22px",lg:"16px 32px 16px 30px"},Z={primary:{background:a.pine,color:a.paper,border:"none"},accent:{background:a.red,color:"#fff",border:"none"},outline:{background:"transparent",color:a.pine,border:`2px solid ${a.pine}`},ghost:{background:"transparent",color:a.pine,border:"none"}},ee={primary:{transform:"translateY(-3px)",boxShadow:"0 10px 22px rgba(24,74,79,.32)",background:"#13403F"},accent:{transform:"translateY(-3px)",boxShadow:"0 10px 22px rgba(255,59,59,.34)"},outline:{transform:"translateY(-3px)",background:a.pine,color:a.paper},ghost:{background:"#F0EFE6"}},re={primary:`transform .22s ${x.out},box-shadow .22s ease,background .2s ease`,accent:`transform .22s ${x.out},box-shadow .22s ease`,outline:`transform .22s ${x.out},background .2s ease,color .2s ease`,ghost:"background .2s ease"},ae={background:"#D9D3C8",color:"#9A9488",border:"none",cursor:"not-allowed"};function r({variant:u="primary",size:m="md",icon:g=!1,disabled:n=!1,href:f,children:h,...C}){const{isHovered:J,hoverProps:y}=U(),b={fontFamily:Q.ui,fontWeight:600,fontSize:S[m].fontSize,borderRadius:K.pill,cursor:"pointer",textDecoration:"none",display:"inline-block",padding:g?X[m]:S[m].padding,...Z[u],transition:re[u],...g?{display:"inline-flex",alignItems:"center",gap:9}:{}},v=n?{...b,...ae}:{...b,...J?ee[u]:{}},B=g&&e.jsx("span",{style:{display:"inline-block",width:16,height:16,borderRadius:"50%",border:`2px solid ${a.lime}`}});return f&&!n?e.jsxs("a",{href:f,...y,style:v,children:[B,h]}):e.jsxs("button",{...C,...n?{}:y,disabled:n,style:v,children:[B,h]})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'accent' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual style. Pine `primary`, red `accent`, `outline`, or `ghost`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Padding / font-size scale.",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"boolean"},description:"Render the small lime-ringed circle icon + gap before the label.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:"Render as a same-styled `<a>` instead of a `<button>` — for real navigation."},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const le={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["primary","accent","outline","ghost"]},size:{control:"inline-radio",options:["sm","md","lg"]},icon:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{variant:"primary",children:"Primary"}},s={args:{variant:"accent",children:"Accent"}},o={args:{variant:"outline",children:"Outline"}},i={args:{variant:"ghost",children:"Ghost"}},l={args:{disabled:!0,children:"Disabled"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:14,alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},d={args:{variant:"primary",icon:!0,children:"With icon"}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:26,background:"#fff",border:"1px solid #E7E1D8",borderRadius:16,padding:32},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:14,alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"accent",children:"Accent"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:14,alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{icon:!0,children:"With icon"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]})};var j,z,k;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,D,W;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent'
  }
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var R,I,P;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,E,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var T,V,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,_,$;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 14,
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var F,L,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: true,
    children: 'With icon'
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,N,Y;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 26,
    background: '#fff',
    border: '1px solid #E7E1D8',
    borderRadius: 16,
    padding: 32
  }}>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }}>
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button icon>With icon</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
}`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const ce=["Primary","Accent","Outline","Ghost","Disabled","Sizes","WithIcon","AllVariants"];export{s as Accent,p as AllVariants,l as Disabled,i as Ghost,o as Outline,t as Primary,c as Sizes,d as WithIcon,ce as __namedExportsOrder,le as default};
