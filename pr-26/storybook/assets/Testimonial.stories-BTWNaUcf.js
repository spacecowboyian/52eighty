import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d,c as t,f as i}from"./tokens-DGCmQ6RG.js";function a({quote:l,author:u,role:c,variant:h="feature",avatarColor:g}){return h==="feature"?e.jsxs("div",{style:{background:t.lime,borderRadius:d.lg,padding:"34px 32px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{fontFamily:i.display,fontWeight:800,fontSize:90,lineHeight:.6,color:t.pine,opacity:.25,position:"absolute",top:24,left:24},children:"“"}),e.jsx("p",{style:{fontFamily:i.serif,fontSize:24,lineHeight:1.45,color:t.ink,margin:"34px 0 22px",position:"relative"},children:l}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:46,height:46,borderRadius:"50%",background:g??t.pine}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:i.ui,fontWeight:600,fontSize:15},children:u}),e.jsx("div",{style:{fontFamily:i.ui,fontSize:13,color:"#3E5552"},children:c})]})]})]}):h==="rating"?e.jsxs("div",{style:{background:"#fff",borderRadius:d.lg,padding:24},children:[e.jsx("div",{style:{fontFamily:i.ui,fontSize:14,color:t.gold,marginBottom:10,letterSpacing:2},children:"★★★★★"}),e.jsx("p",{style:{fontFamily:i.serif,fontSize:16,lineHeight:1.5,color:t.ink,margin:0},children:l})]}):e.jsxs("div",{style:{background:"#fff",borderRadius:d.lg,padding:24},children:[e.jsx("p",{style:{fontFamily:i.serif,fontSize:16,lineHeight:1.5,color:t.ink,margin:"0 0 16px"},children:l}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:g??t.blush}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:i.ui,fontWeight:600,fontSize:14},children:u}),e.jsx("div",{style:{fontFamily:i.ui,fontSize:12,color:t.muted},children:c})]})]})]})}a.__docgenInfo={description:`Testimonial / quote card from the 5280 testimonials section.
Three variants ported pixel-for-pixel from the source markup.`,methods:[],displayName:"Testimonial",props:{quote:{required:!0,tsType:{name:"string"},description:"The quote body text."},author:{required:!1,tsType:{name:"string"},description:"Author name. Omit on the `rating` variant."},role:{required:!1,tsType:{name:"string"},description:"Author role / organization line."},variant:{required:!1,tsType:{name:"union",raw:"'feature' | 'plain' | 'rating'",elements:[{name:"literal",value:"'feature'"},{name:"literal",value:"'plain'"},{name:"literal",value:"'rating'"}]},description:"Visual style:\n- `feature` — large lime card with oversized quote-mark + avatar.\n- `plain` — white card with small avatar.\n- `rating` — white card with a gold star row, no author.",defaultValue:{value:"'feature'",computed:!1}},avatarColor:{required:!1,tsType:{name:"string"},description:"Avatar fill color (feature uses pine, plain blush by default)."}}};const S={title:"Components/Testimonial",component:a,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["feature","plain","rating"]}}},r={args:{variant:"feature",quote:"They didn't just make us something pretty — they found the thing we'd been trying to say for years, and said it in a way people actually felt.",author:"Dana Whitfield",role:"Exec. Director, Rivertown"}},n={args:{variant:"plain",quote:'"Working with 52Eighty felt like having a creative partner who actually cared about our mission."',author:"Marcus Hale",role:"Founder, Altitude"}},o={args:{variant:"rating",quote:`"Went further than any agency we've hired. The film still gives us chills."`}},s={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:18,alignItems:"start"},children:[e.jsx(a,{variant:"feature",quote:"They didn't just make us something pretty — they found the thing we'd been trying to say for years, and said it in a way people actually felt.",author:"Dana Whitfield",role:"Exec. Director, Rivertown"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[e.jsx(a,{variant:"plain",quote:'"Working with 52Eighty felt like having a creative partner who actually cared about our mission."',author:"Marcus Hale",role:"Founder, Altitude"}),e.jsx(a,{variant:"rating",quote:`"Went further than any agency we've hired. The film still gives us chills."`})]})]})};var p,f,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'feature',
    quote: "They didn't just make us something pretty — they found the thing we'd been trying to say for years, and said it in a way people actually felt.",
    author: 'Dana Whitfield',
    role: 'Exec. Director, Rivertown'
  }
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    quote: '"Working with 52Eighty felt like having a creative partner who actually cared about our mission."',
    author: 'Marcus Hale',
    role: 'Founder, Altitude'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,j,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'rating',
    quote: '"Went further than any agency we\\'ve hired. The film still gives us chills."'
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,k,q;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: 18,
    alignItems: 'start'
  }}>
      <Testimonial variant="feature" quote="They didn't just make us something pretty — they found the thing we'd been trying to say for years, and said it in a way people actually felt." author="Dana Whitfield" role="Exec. Director, Rivertown" />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }}>
        <Testimonial variant="plain" quote={'"Working with 52Eighty felt like having a creative partner who actually cared about our mission."'} author="Marcus Hale" role="Founder, Altitude" />
        <Testimonial variant="rating" quote={'"Went further than any agency we\\'ve hired. The film still gives us chills."'} />
      </div>
    </div>
}`,...(q=(k=s.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const R=["Feature","Plain","Rating","AllVariants"];export{s as AllVariants,r as Feature,n as Plain,o as Rating,R as __namedExportsOrder,S as default};
