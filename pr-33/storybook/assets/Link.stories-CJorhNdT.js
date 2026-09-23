import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as e,f as l}from"./tokens-DJqrrynb.js";import{u as y}from"./useHover-D0oxY1V2.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";function s({href:p,children:h,style:f,...u}){const{isHovered:x,hoverProps:g}=y(),b={fontFamily:l.ui,fontWeight:600,fontSize:15,color:e.jade,textDecoration:"none",borderBottom:`2px solid ${e.jade}`,paddingBottom:2,transition:"color .2s ease,border-color .2s ease"},k={color:e.redDeep,borderColor:e.redDeep};return t.jsx("a",{...u,...g,href:p,style:{...b,...x?k:{},...f},children:h})}s.__docgenInfo={description:"Underlined text link: jade → deep red on hover (red as small text needs the 4.85:1 shade).",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:"Destination URL."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const L={title:"Components/Link",component:s,tags:["autodocs"]},r={args:{href:"#buttons",children:"Text link →"}},o={render:()=>t.jsxs("p",{style:{fontFamily:l.serif,fontSize:17,color:"#5C6B68",maxWidth:"60ch",margin:0},children:["Pine is the workhorse; red is reserved for the single most important action on a screen. Need a refresher? ",t.jsx(s,{href:"#buttons",children:"Read the button guidelines →"})]})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["Default","InContext"];export{r as Default,o as InContext,N as __namedExportsOrder,L as default};
