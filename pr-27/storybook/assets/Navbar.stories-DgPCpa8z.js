import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DURGLf5P.js";import{a as H,c as r,r as v,f as l,e as $}from"./tokens-Dones2Tp.js";import{u as O}from"./useHover-D0oxY1V2.js";import"./_commonjsHelpers-CqkleIqs.js";const h=320;function K({open:t,onClose:i,links:o,contactHref:s,id:a}){const c=d.useRef(null),u=d.useRef(null);d.useEffect(()=>{if(!t)return;const n=p=>{p.key==="Escape"&&i()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t,i]),d.useEffect(()=>{var p;if(!t)return;(p=c.current)==null||p.focus();const n=m=>{var F;if(m.key!=="Tab")return;const f=(F=u.current)==null?void 0:F.querySelectorAll("a[href], button");if(!f||f.length===0)return;const j=f[0],S=f[f.length-1];m.shiftKey&&document.activeElement===j?(m.preventDefault(),S.focus()):!m.shiftKey&&document.activeElement===S&&(m.preventDefault(),j.focus())};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t]),d.useEffect(()=>{if(!t)return;const n=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=n}},[t]);const k={position:"fixed",inset:0,background:"rgba(22,33,31,.5)",opacity:t?1:0,visibility:t?"visible":"hidden",transition:t?`opacity ${h}ms ease, visibility 0s`:`opacity ${h}ms ease, visibility 0s linear ${h}ms`,zIndex:40},w={position:"fixed",top:0,right:0,bottom:0,width:"min(80vw, 320px)",background:r.pine,boxShadow:H.lg,transform:t?"translateX(0)":"translateX(100%)",visibility:t?"visible":"hidden",transition:t?`transform ${h}ms cubic-bezier(.4,0,.2,1), visibility 0s`:`transform ${h}ms cubic-bezier(.4,0,.2,1), visibility 0s linear ${h}ms`,zIndex:41,display:"flex",flexDirection:"column",padding:"18px 24px 32px",overflowY:"auto"};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:k,onClick:i,"aria-hidden":"true",className:"sc-mobile-menu-backdrop"}),e.jsxs("div",{ref:u,id:a,style:w,role:"dialog","aria-modal":"true","aria-label":"Site menu","aria-hidden":!t,className:"sc-mobile-menu",children:[e.jsx("button",{ref:c,onClick:i,"aria-label":"Close menu",style:{alignSelf:"flex-end",width:40,height:40,borderRadius:v.sm,background:"none",border:"none",color:r.paper,fontSize:26,lineHeight:1,cursor:"pointer",marginBottom:16},children:"×"}),e.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:4},children:o.map(n=>e.jsx("a",{href:n.href,style:{fontFamily:l.display,fontWeight:400,fontSize:24,color:r.paper,textDecoration:"none",padding:"12px 0"},children:n.label},n.label))}),s?e.jsx("a",{href:s,style:{marginTop:24,fontFamily:l.ui,fontWeight:600,fontSize:15,background:r.lime,color:r.ink,padding:"14px 22px",borderRadius:v.pill,textDecoration:"none",textAlign:"center"},children:"Contact"}):null]}),e.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          .sc-mobile-menu,
          .sc-mobile-menu-backdrop {
            transition-duration: 0s !important;
          }
        }
      `})]})}K.__docgenInfo={description:`The off-canvas site menu for narrow viewports — a real full-height drawer,
not a fixed-size mockup. \`Navbar\` owns the open state and renders the toggle;
this component is only the panel.

Stays mounted so it can animate both ways. When closed it's \`visibility:
hidden\`, which takes its links out of the tab order — \`display: none\` would
do that too but kills the transition, and leaving it merely translated
offscreen leaves focusable links sitting outside the viewport.`,methods:[],displayName:"MobileMenu",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is showing."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the visitor dismisses the drawer (close button, backdrop, or Escape)."},links:{required:!0,tsType:{name:"Array",elements:[{name:"MobileMenuLink"}],raw:"MobileMenuLink[]"},description:"Navigation links to list in the drawer."},contactHref:{required:!1,tsType:{name:"string"},description:"Destination for the Contact call to action. Omitted renders no CTA."},id:{required:!1,tsType:{name:"string"},description:"Ties the drawer to the toggle that controls it (`aria-controls`)."}}};const P=[{label:"About",href:"#nav"},{label:"Our Work",href:"#nav"},{label:"Newsletter",href:"#nav"}],V=[{label:"About",href:"#nav"},{label:"Our Work",href:"#nav"}];function Y({label:t,href:i,tone:o}){const{isHovered:s,hoverProps:a}=O();if(o==="dark")return e.jsx("a",{href:i,style:{fontFamily:l.ui,fontWeight:500,fontSize:15,color:r.paper,textDecoration:"none"},children:t});const c={fontFamily:l.ui,fontWeight:500,fontSize:15,color:r.ink,textDecoration:"none",borderBottom:"2px solid transparent",paddingBottom:3,transition:"border-color .2s ease"};return e.jsx("a",{href:i,...a,style:{...c,...s?{borderColor:r.gold}:{}},children:t})}function G({href:t}){const{isHovered:i,hoverProps:o}=O(),a={...{fontFamily:l.ui,fontWeight:600,fontSize:14,background:r.pine,color:r.paper,border:"none",padding:"10px 22px",borderRadius:v.pill,cursor:"pointer",transition:`transform .2s ${$.out}`,textDecoration:"none",display:"inline-block"},...i?{transform:"translateY(-2px)"}:{}};return t?e.jsx("a",{href:t,...o,style:a,children:"Contact"}):e.jsx("button",{...o,style:a,children:"Contact"})}function U({href:t}){const i={fontFamily:l.ui,fontWeight:600,fontSize:14,background:r.lime,color:r.ink,border:"none",padding:"10px 22px",borderRadius:v.pill,cursor:"pointer",textDecoration:"none",display:"inline-block"};return t?e.jsx("a",{href:t,style:i,children:"Contact"}):e.jsx("button",{style:i,children:"Contact"})}function X({tone:t}){return t==="dark"?e.jsx("span",{style:{fontFamily:l.display,fontWeight:400,fontSize:18,color:r.paper,letterSpacing:".02em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"52Eighty Creative"}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:r.pine,color:r.lime,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:l.display,fontWeight:400,fontSize:13},children:"52"}),e.jsx("span",{style:{fontFamily:l.display,fontWeight:400,fontSize:18,letterSpacing:".02em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"52Eighty Creative"})]})}function J({open:t,onClick:i,controls:o,tone:s}){const a={display:"block",width:20,height:2,borderRadius:2,background:s==="dark"?r.paper:r.ink,transition:"transform .2s ease, opacity .2s ease"};return e.jsxs("button",{type:"button",onClick:i,"aria-label":t?"Close menu":"Open menu","aria-expanded":t,"aria-controls":o,className:"sc-navbar-toggle",style:{width:44,height:44,borderRadius:v.sm,border:"none",background:"transparent",cursor:"pointer",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:0},children:[e.jsx("span",{style:{...a,transform:t?"translateY(7px) rotate(45deg)":"none"}}),e.jsx("span",{style:{...a,opacity:t?0:1}}),e.jsx("span",{style:{...a,transform:t?"translateY(-7px) rotate(-45deg)":"none"}})]})}function x({tone:t="light",links:i,contactHref:o,chrome:s="card"}){const a=i??(t==="dark"?V:P),[c,u]=d.useState(!1),k=d.useId();d.useEffect(()=>{const n=window.matchMedia("(min-width: 640px)"),p=()=>{n.matches&&u(!1)};return n.addEventListener("change",p),()=>n.removeEventListener("change",p)},[]);const w=t==="dark"?{borderRadius:16,overflow:"hidden",background:r.ink,backgroundImage:"repeating-linear-gradient(45deg,#1c2a27 0 12px,#1a2724 12px 24px)"}:s==="flush"?{background:"transparent"}:{background:r.surface,border:`1px solid ${r.border}`,borderRadius:16,overflow:"hidden"};return e.jsxs("div",{style:w,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 28px"},children:[e.jsx(X,{tone:t}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:26},children:[e.jsx("div",{className:"sc-navbar-links",children:a.map(n=>e.jsx(Y,{...n,tone:t},n.label))}),e.jsx("div",{className:"sc-navbar-cta",children:t==="dark"?e.jsx(U,{href:o}):e.jsx(G,{href:o})}),e.jsx(J,{open:c,onClick:()=>u(n=>!n),controls:k,tone:t})]})]}),e.jsx(K,{id:k,open:c,onClose:()=>u(!1),links:a,contactHref:o}),e.jsx("style",{children:`
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
      `})]})}x.__docgenInfo={description:"The 52Eighty site header.",methods:[],displayName:"Navbar",props:{tone:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`'light' = cream/white header with underline-on-hover links + pine Contact pill.
 'dark'  = ink striped background, lime Contact pill ("Over imagery" variant).`,defaultValue:{value:"'light'",computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"NavbarLink"}],raw:"NavbarLink[]"},description:"Nav links to render. Defaults to placeholder `#nav` anchors matching the source design."},contactHref:{required:!1,tsType:{name:"string"},description:"Destination for the Contact pill. Renders a `<button>` (no-op) when omitted."},chrome:{required:!1,tsType:{name:"union",raw:"'card' | 'flush'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'flush'"}]},description:`'card' (default) — the floating bordered/rounded card, as shown in Storybook.
'flush' — no background/border/radius of its own, for embedding in a
full-width sticky page header that supplies its own chrome. Light tone only.`,defaultValue:{value:"'card'",computed:!1}}}};const Q=[{label:"About",href:"#about"},{label:"Our Work",href:"#work"}],ie={title:"Components/Navbar",component:x,tags:["autodocs"],parameters:{layout:"fullscreen"}},g={args:{tone:"light"},render:t=>e.jsx("div",{style:{padding:30,background:"#FBF9F5"},children:e.jsx(x,{...t})})},b={args:{tone:"dark"},render:t=>e.jsx("div",{style:{padding:30,background:"#FBF9F5"},children:e.jsx(x,{...t})})},y={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>e.jsxs("div",{style:{background:"#FBF9F5",minHeight:400},children:[e.jsx(x,{links:Q,contactHref:"#start",chrome:"flush"}),e.jsx("p",{style:{padding:24,fontFamily:"Georgia, serif",color:"#5C6B68"},children:"Page content sits behind the drawer, and stops scrolling while it's open."})]})};var C,T,N,E,L;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tone: 'light'
  },
  render: args => <div style={{
    padding: 30,
    background: '#FBF9F5'
  }}>
      <Navbar {...args} />
    </div>
}`,...(N=(T=g.parameters)==null?void 0:T.docs)==null?void 0:N.source},description:{story:"Light desktop header: cream/white, underline-on-hover links, pine Contact pill.",...(L=(E=g.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var D,I,R,z,W;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    tone: 'dark'
  },
  render: args => <div style={{
    padding: 30,
    background: '#FBF9F5'
  }}>
      <Navbar {...args} />
    </div>
}`,...(R=(I=b.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:'Dark "over imagery" header: ink striped background, lime Contact pill.',...(W=(z=b.parameters)==null?void 0:z.docs)==null?void 0:W.description}}};var M,A,_,q,B;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source},description:{story:`The header below the 640px breakpoint: wordmark + hamburger, with the links
and the Contact CTA in the drawer. Tap the hamburger to slide it in — Escape,
the backdrop, or the close button dismiss it.

Needs a viewport narrower than 640px to show the toggle, so view this story
in Storybook's mobile viewport (or drag the preview pane narrow).`,...(B=(q=y.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};const ae=["Light","Dark","Mobile"];export{b as Dark,g as Light,y as Mobile,ae as __namedExportsOrder,ie as default};
