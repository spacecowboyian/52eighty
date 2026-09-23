import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as e,f as l}from"./tokens-DGCmQ6RG.js";import{u as y}from"./useHover-D0oxY1V2.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";function n({href:p,children:h,style:f,...u}){const{isHovered:g,hoverProps:x}=y(),b={fontFamily:l.ui,fontWeight:600,fontSize:15,color:e.jade,textDecoration:"none",borderBottom:`2px solid ${e.jade}`,paddingBottom:2,transition:"color .2s ease,border-color .2s ease"},k={color:e.red,borderColor:e.red};return t.jsx("a",{...u,...x,href:p,style:{...b,...g?k:{},...f},children:h})}n.__docgenInfo={description:"Underlined text link: jade → red on hover, with matching border-color.",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:"Destination URL."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={title:"Components/Link",component:n,tags:["autodocs"]},r={args:{href:"#buttons",children:"Text link →"}},o={render:()=>t.jsxs("p",{style:{fontFamily:l.serif,fontSize:17,color:"#5C6B68",maxWidth:"60ch",margin:0},children:["Pine is the workhorse; red is reserved for the single most important action on a screen. Need a refresher? ",t.jsx(n,{href:"#buttons",children:"Read the button guidelines →"})]})};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    href: '#buttons',
    children: 'Text link →'
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <p style={{
    fontFamily: font.serif,
    fontSize: 17,
    color: '#5C6B68',
    maxWidth: '60ch',
    margin: 0
  }}>
      Pine is the workhorse; red is reserved for the single most important
      action on a screen. Need a refresher? <Link href="#buttons">Read the button guidelines →</Link>
    </p>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Default","InContext"];export{r as Default,o as InContext,S as __namedExportsOrder,N as default};
