import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DURGLf5P.js";import{a as X,c as t,r as w,f as j,e as m}from"./tokens-DlkmHXpM.js";import{u as G}from"./useHover-D0oxY1V2.js";import{W as J}from"./Wordmark-86oXSAz4.js";import"./_commonjsHelpers-CqkleIqs.js";const h=320;function U({open:e,onClose:n,links:i,contactHref:d,id:s}){const l=p.useRef(null),u=p.useRef(null);p.useEffect(()=>{if(!e)return;const a=o=>{o.key==="Escape"&&n()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,n]),p.useEffect(()=>{var o;if(!e)return;(o=l.current)==null||o.focus();const a=c=>{var T;if(c.key!=="Tab")return;const b=(T=u.current)==null?void 0:T.querySelectorAll("a[href], button");if(!b||b.length===0)return;const N=b[0],C=b[b.length-1];c.shiftKey&&document.activeElement===N?(c.preventDefault(),C.focus()):!c.shiftKey&&document.activeElement===C&&(c.preventDefault(),N.focus())};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e]),p.useEffect(()=>{if(!e)return;const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}},[e]);const g={position:"fixed",inset:0,background:"rgba(22,33,31,.5)",opacity:e?1:0,visibility:e?"visible":"hidden",transition:e?`opacity ${h}ms ease, visibility 0s`:`opacity ${h}ms ease, visibility 0s linear ${h}ms`,zIndex:40},F={position:"fixed",top:0,right:0,bottom:0,width:"min(80vw, 320px)",background:t.pine,boxShadow:X.lg,transform:e?"translateX(0)":"translateX(100%)",visibility:e?"visible":"hidden",transition:e?`transform ${h}ms cubic-bezier(.4,0,.2,1), visibility 0s`:`transform ${h}ms cubic-bezier(.4,0,.2,1), visibility 0s linear ${h}ms`,zIndex:41,display:"flex",flexDirection:"column",padding:"18px 24px 32px",overflowY:"auto"};return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:g,onClick:n,"aria-hidden":"true",className:"sc-mobile-menu-backdrop"}),r.jsxs("div",{ref:u,id:s,style:F,role:"dialog","aria-modal":"true","aria-label":"Site menu","aria-hidden":!e,className:"sc-mobile-menu",children:[r.jsx("button",{ref:l,onClick:n,"aria-label":"Close menu",style:{alignSelf:"flex-end",width:40,height:40,borderRadius:w.sm,background:"none",border:"none",color:t.paper,fontSize:26,lineHeight:1,cursor:"pointer",marginBottom:16},children:"×"}),r.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:4},children:i.map(a=>r.jsx("a",{href:a.href,style:{fontFamily:j.display,fontWeight:400,fontSize:24,color:t.paper,textDecoration:"none",padding:"12px 0"},children:a.label},a.label))}),d?r.jsx("a",{href:d,style:{marginTop:24,fontFamily:j.ui,fontWeight:600,fontSize:15,background:t.lime,color:t.ink,padding:"14px 22px",borderRadius:w.pill,textDecoration:"none",textAlign:"center"},children:"Contact"}):null]}),r.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          .sc-mobile-menu,
          .sc-mobile-menu-backdrop {
            transition-duration: 0s !important;
          }
        }
      `})]})}U.__docgenInfo={description:`The off-canvas site menu for narrow viewports — a real full-height drawer,
not a fixed-size mockup. \`Navbar\` owns the open state and renders the toggle;
this component is only the panel.

Stays mounted so it can animate both ways. When closed it's \`visibility:
hidden\`, which takes its links out of the tab order — \`display: none\` would
do that too but kills the transition, and leaving it merely translated
offscreen leaves focusable links sitting outside the viewport.`,methods:[],displayName:"MobileMenu",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is showing."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the visitor dismisses the drawer (close button, backdrop, or Escape)."},links:{required:!0,tsType:{name:"Array",elements:[{name:"MobileMenuLink"}],raw:"MobileMenuLink[]"},description:"Navigation links to list in the drawer."},contactHref:{required:!1,tsType:{name:"string"},description:"Destination for the Contact call to action. Omitted renders no CTA."},id:{required:!1,tsType:{name:"string"},description:"Ties the drawer to the toggle that controls it (`aria-controls`)."}}};const Q=[{label:"About",href:"#nav"},{label:"Our Work",href:"#nav"},{label:"Newsletter",href:"#nav"}],Z=[{label:"About",href:"#nav"},{label:"Our Work",href:"#nav"}];function ee({label:e,href:n,tone:i}){const{isHovered:d,hoverProps:s}=G(),l=i==="dark",u={fontFamily:j.ui,fontWeight:500,fontSize:15,color:l?t.paper:t.ink,textDecoration:"none",borderBottom:"2px solid transparent",paddingBottom:3,transition:`border-color .3s ${m.out}, color .3s ${m.out}`};return r.jsx("a",{href:n,...s,style:{...u,...d?{borderColor:l?t.lime:t.gold}:{}},children:e})}function re({href:e}){const{isHovered:n,hoverProps:i}=G(),s={...{fontFamily:j.ui,fontWeight:600,fontSize:14,background:t.pine,color:t.paper,border:"none",padding:"10px 22px",borderRadius:w.pill,cursor:"pointer",transition:`transform .2s ${m.out}`,textDecoration:"none",display:"inline-block"},...n?{transform:"translateY(-2px)"}:{}};return e?r.jsx("a",{href:e,...i,style:s,children:"Contact"}):r.jsx("button",{...i,style:s,children:"Contact"})}function te({href:e}){const n={fontFamily:j.ui,fontWeight:600,fontSize:14,background:t.lime,color:t.ink,border:"none",padding:"10px 22px",borderRadius:w.pill,cursor:"pointer",textDecoration:"none",display:"inline-block"};return e?r.jsx("a",{href:e,style:n,children:"Contact"}):r.jsx("button",{style:n,children:"Contact"})}function ne({open:e,onClick:n,controls:i,tone:d}){const s={display:"block",width:20,height:2,borderRadius:2,background:d==="dark"?t.paper:t.ink,transition:`transform .2s ${m.out}, opacity .2s ${m.out}, background .3s ${m.out}`};return r.jsxs("button",{type:"button",onClick:n,"aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":i,className:"sc-navbar-toggle",style:{width:44,height:44,borderRadius:w.sm,border:"none",background:"transparent",cursor:"pointer",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:0},children:[r.jsx("span",{style:{...s,transform:e?"translateY(7px) rotate(45deg)":"none"}}),r.jsx("span",{style:{...s,opacity:e?0:1}}),r.jsx("span",{style:{...s,transform:e?"translateY(-7px) rotate(-45deg)":"none"}})]})}function f({tone:e="light",links:n,contactHref:i,homeHref:d,chrome:s="card"}){const l=n??(e==="dark"?Z:Q),[u,g]=p.useState(!1),F=p.useId();p.useEffect(()=>{const o=window.matchMedia("(min-width: 640px)"),c=()=>{o.matches&&g(!1)};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]);const a=s==="flush"?{background:"transparent"}:e==="dark"?{borderRadius:16,overflow:"hidden",background:t.ink,backgroundImage:"repeating-linear-gradient(45deg,#1c2a27 0 12px,#1a2724 12px 24px)"}:{background:t.surface,border:`1px solid ${t.border}`,borderRadius:16,overflow:"hidden"};return r.jsxs("div",{style:a,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 28px"},children:[r.jsx(J,{tone:e,href:d,height:28}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:26},children:[r.jsx("div",{className:"sc-navbar-links",children:l.map(o=>r.jsx(ee,{...o,tone:e},o.label))}),r.jsx("div",{className:"sc-navbar-cta",children:e==="dark"?r.jsx(te,{href:i}):r.jsx(re,{href:i})}),r.jsx(ne,{open:u,onClick:()=>g(o=>!o),controls:F,tone:e})]})]}),r.jsx(U,{id:F,open:u,onClose:()=>g(!1),links:l,contactHref:i}),r.jsx("style",{children:`
        .sc-navbar-links {
          display: none;
          align-items: center;
          gap: 26px;
        }
        .sc-navbar-cta {
          display: none;
        }
        .sc-navbar-toggle {
          display: flex;
        }
        @media (min-width: 640px) {
          .sc-navbar-links {
            display: flex;
          }
          .sc-navbar-cta {
            display: block;
          }
          .sc-navbar-toggle {
            display: none;
          }
        }
      `})]})}f.__docgenInfo={description:"The 52Eighty site header.",methods:[],displayName:"Navbar",props:{tone:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`'light' = cream/white header with underline-on-hover links + pine Contact pill.
 'dark'  = ink striped background, lime Contact pill ("Over imagery" variant).`,defaultValue:{value:"'light'",computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"NavbarLink"}],raw:"NavbarLink[]"},description:"Nav links to render. Defaults to placeholder `#nav` anchors matching the source design."},contactHref:{required:!1,tsType:{name:"string"},description:"Destination for the Contact pill. Renders a `<button>` (no-op) when omitted."},homeHref:{required:!1,tsType:{name:"string"},description:"Where the mark links (the home page). Renders a plain mark when omitted."},chrome:{required:!1,tsType:{name:"union",raw:"'card' | 'flush'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'flush'"}]},description:`'card' (default) — the floating card, as shown in Storybook.
'flush' — no background/border/radius of its own, for embedding in the
site's glass header, which supplies the chrome. Works with either tone:
flush + \`dark\` is paper type over a dark field.`,defaultValue:{value:"'card'",computed:!1}}}};const ae=[{label:"About",href:"#about"},{label:"Our Work",href:"#work"}],pe={title:"Components/Navbar",component:f,tags:["autodocs"],parameters:{layout:"fullscreen"}},y={args:{tone:"light"},render:e=>r.jsx("div",{style:{padding:30,background:"#FBF9F5"},children:r.jsx(f,{...e})})},v={args:{tone:"dark"},render:e=>r.jsx("div",{style:{padding:30,background:"#FBF9F5"},children:r.jsx(f,{...e})})},k={args:{tone:"dark",chrome:"flush"},render:e=>r.jsx("div",{style:{padding:"0 0 60px",background:"linear-gradient(#0c1a1c, #184A4F)"},children:r.jsx(f,{...e})})},x={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>r.jsxs("div",{style:{background:"#FBF9F5",minHeight:400},children:[r.jsx(f,{links:ae,contactHref:"#start",chrome:"flush"}),r.jsx("p",{style:{padding:24,fontFamily:"Georgia, serif",color:"#5C6B68"},children:"Page content sits behind the drawer, and stops scrolling while it's open."})]})};var S,D,E,L,I;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tone: 'light'
  },
  render: args => <div style={{
    padding: 30,
    background: '#FBF9F5'
  }}>
      <Navbar {...args} />
    </div>
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Light desktop header: cream/white, underline-on-hover links, pine Contact pill.",...(I=(L=y.parameters)==null?void 0:L.docs)==null?void 0:I.description}}};var R,A,M,W,_;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tone: 'dark'
  },
  render: args => <div style={{
    padding: 30,
    background: '#FBF9F5'
  }}>
      <Navbar {...args} />
    </div>
}`,...(M=(A=v.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:'Dark "over imagery" header: ink striped background, lime Contact pill.',...(_=(W=v.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var $,q,z,B,O;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    tone: 'dark',
    chrome: 'flush'
  },
  render: args => <div style={{
    padding: '0 0 60px',
    background: 'linear-gradient(#0c1a1c, #184A4F)'
  }}>
      <Navbar {...args} />
    </div>
}`,...(z=(q=k.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"Flush + dark: paper type over a dark field with no chrome of its own — what the site's glass header renders over a photo or pine band.",...(O=(B=k.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};var H,K,P,V,Y;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <div style={{
    background: '#FBF9F5',
    minHeight: 400
  }}>
      <Navbar links={SITE_LINKS} contactHref="#start" chrome="flush" />
      <p style={{
      padding: 24,
      fontFamily: 'Georgia, serif',
      color: '#5C6B68'
    }}>
        Page content sits behind the drawer, and stops scrolling while it's open.
      </p>
    </div>
}`,...(P=(K=x.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:`The header below the 640px breakpoint: wordmark + hamburger, with the links
and the Contact CTA in the drawer. Tap the hamburger to slide it in — Escape,
the backdrop, or the close button dismiss it.

Needs a viewport narrower than 640px to show the toggle, so view this story
in Storybook's mobile viewport (or drag the preview pane narrow).`,...(Y=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};const ue=["Light","Dark","FlushDark","Mobile"];export{v as Dark,k as FlushDark,y as Light,x as Mobile,ue as __namedExportsOrder,pe as default};
