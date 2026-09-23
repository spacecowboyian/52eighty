import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v,R as ne}from"./index-DURGLf5P.js";import{c as a,e as oe}from"./tokens-DGCmQ6RG.js";import{a as S,u as de}from"./useHover-D0oxY1V2.js";import"./_commonjsHelpers-CqkleIqs.js";const ce={fontFamily:"var(--ui)",fontWeight:600,fontSize:12,letterSpacing:".1em",textTransform:"uppercase",color:a.muted,display:"block",marginBottom:7},w={width:"100%",fontFamily:"var(--ui)",fontSize:15,color:a.ink,padding:"12px 15px",border:"1.5px solid #E0DACF",borderRadius:11,background:"#FDFCF9",outline:"none",transition:"border-color .2s ease,box-shadow .2s ease"},R={border:`1.5px solid ${a.pine}`,boxShadow:"0 0 0 3px rgba(24,74,79,.14)"},ue={color:a.jade,border:`1.5px solid ${a.jade}`,background:a.surface,boxShadow:"0 0 0 3px rgba(9,109,97,.12)"},pe={color:a.red,border:`1.5px solid ${a.red}`,background:a.surface,boxShadow:"0 0 0 3px rgba(255,59,59,.1)"},me={fontFamily:"var(--ui)",fontSize:12,color:a.jade},fe={fontFamily:"var(--ui)",fontSize:12,color:a.red};function T(t){return t==="valid"?ue:t==="invalid"?pe:{}}function k({children:t,htmlFor:r}){return t?e.jsx("label",{htmlFor:r,style:ce,children:t}):null}function C({state:t,message:r}){if(t==="default")return null;const s=r??(t==="valid"?"✓ Looks good":"Please enter a valid email");return e.jsx("div",{style:{marginTop:8,...t==="valid"?me:fe},children:s})}function p({label:t,state:r="default",message:s,style:d,type:o="text",...i}){const{isFocused:l,focusProps:c}=S(),u=v.useId(),n=i.id??u;return e.jsxs("div",{children:[e.jsx(k,{htmlFor:n,children:t}),e.jsx("input",{type:o,...i,id:n,...c,style:{...w,...T(r),...r==="default"&&l?R:{},...d}}),e.jsx(C,{state:r,message:s})]})}function I({label:t,state:r="default",message:s,options:d,children:o,style:i,...l}){const{isFocused:c,focusProps:u}=S(),n=v.useId(),h=l.id??n;return e.jsxs("div",{children:[e.jsx(k,{htmlFor:h,children:t}),e.jsx("select",{...l,id:h,...u,style:{...w,cursor:"pointer",...T(r),...r==="default"&&c?R:{},...i},children:d?d.map(b=>e.jsx("option",{children:b},b)):o}),e.jsx(C,{state:r,message:s})]})}function N({label:t,state:r="default",message:s,rows:d=3,style:o,...i}){const{isFocused:l,focusProps:c}=S(),u=v.useId(),n=i.id??u;return e.jsxs("div",{children:[e.jsx(k,{htmlFor:n,children:t}),e.jsx("textarea",{rows:d,...i,id:n,...c,style:{...w,fontFamily:"var(--serif)",resize:"vertical",...T(r),...r==="default"&&l?R:{},...o}}),e.jsx(C,{state:r,message:s})]})}p.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},state:{required:!1,tsType:{name:"union",raw:"'default' | 'valid' | 'invalid'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'invalid'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Override the auto helper message shown for valid/invalid states."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},state:{required:!1,tsType:{name:"union",raw:"'default' | 'valid' | 'invalid'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'invalid'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Override the auto helper message shown for valid/invalid states."},options:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},state:{required:!1,tsType:{name:"union",raw:"'default' | 'valid' | 'invalid'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'invalid'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Override the auto helper message shown for valid/invalid states."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},rows:{defaultValue:{value:"3",computed:!1},required:!1}}};const ye={background:a.pine,borderRadius:16,padding:"30px 28px",color:a.paper},ge={fontFamily:"var(--ui)",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#9FC2BF",marginBottom:8},xe={fontFamily:"var(--display)",fontWeight:800,fontSize:24,margin:"0 0 6px",lineHeight:1.1},ve={fontFamily:"var(--serif)",fontSize:15,color:"#CFE2E0",margin:"0 0 18px"},he={fontFamily:"var(--ui)",fontWeight:600,fontSize:15,background:a.lime,color:a.ink,padding:"14px 16px",borderRadius:12,textAlign:"center",animation:`sc-pop .3s ${oe.out} both`},be={flex:1,minWidth:0,fontFamily:"var(--ui)",fontSize:15,color:a.ink,padding:"12px 15px",border:"none",borderRadius:11,background:"#FDFCF9",outline:"none"},Se={boxShadow:"0 0 0 3px rgba(240,252,151,.5)"},je={fontFamily:"var(--ui)",fontWeight:600,fontSize:15,background:a.red,color:"#fff",border:"none",padding:"12px 22px",borderRadius:11,cursor:"pointer",transition:`transform .2s ${oe.out}`},Fe={transform:"translateY(-2px)"};function B({subscribed:t=!1,eyebrow:r="Weekly Marketing Newsletter",heading:s="Go further every week.",body:d="One sharp idea on brand and story. No noise.",onSubscribe:o}){const[i,l]=v.useState(t),[c,u]=v.useState(""),{isHovered:n,hoverProps:h}=de(),{isFocused:b,focusProps:ie}=S();ne.useEffect(()=>l(t),[t]);const le=j=>{j.preventDefault();const E=c.trim();E&&(o==null||o(E),l(!0))};return e.jsxs("div",{style:ye,children:[e.jsx("div",{style:ge,children:r}),e.jsx("h3",{style:xe,children:s}),e.jsx("p",{style:ve,children:d}),i?e.jsx("div",{style:he,children:"✓ You're on the list. Talk soon."}):e.jsxs("form",{onSubmit:le,style:{display:"flex",gap:9},children:[e.jsx("input",{type:"email",value:c,onChange:j=>u(j.target.value),placeholder:"you@email.com",required:!0,autoComplete:"email",...ie,style:{...be,...b?Se:{}}}),e.jsx("button",{type:"submit",...h,style:{...je,...n?Fe:{}},children:"Join"})]})]})}B.__docgenInfo={description:"",methods:[],displayName:"NewsletterSignup",props:{subscribed:{required:!1,tsType:{name:"boolean"},description:"Force the confirmed state (useful for stories / SSR).",defaultValue:{value:"false",computed:!1}},eyebrow:{required:!1,tsType:{name:"string"},description:"Eyebrow label above the heading.",defaultValue:{value:"'Weekly Marketing Newsletter'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Go further every week.'",computed:!1}},body:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'One sharp idea on brand and story. No noise.'",computed:!1}},onSubscribe:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"void"}}},description:"Called with the submitted email when the form is sent."}}};const we={background:"#fff",borderRadius:16,padding:28,display:"flex",flexDirection:"column",gap:18},Re={display:"flex",gap:18},F={fontFamily:"var(--ui)",fontSize:14,color:a.ink,display:"flex",alignItems:"center",gap:8,cursor:"pointer"},Te={width:18,height:18,borderRadius:5,background:a.pine,display:"inline-flex",alignItems:"center",justifyContent:"center",color:a.lime,fontSize:11},ke={width:18,height:18,borderRadius:5,border:"1.5px solid #E0DACF"},Ce={width:18,height:18,borderRadius:"50%",border:`5px solid ${a.pine}`,background:"#fff"};function q({projectTypes:t=["Branding","Video production","Marketing strategy"]}){return e.jsxs("div",{style:we,children:[e.jsx(p,{label:"Full name",placeholder:"Miles Ramsay"}),e.jsx(I,{label:"Project type",options:t}),e.jsx(N,{label:"Tell us the story",rows:3,placeholder:"What are you trying to say, and to whom?"}),e.jsxs("div",{style:Re,children:[e.jsxs("label",{style:F,children:[e.jsx("span",{style:Te,children:"✓"}),"Email"]}),e.jsxs("label",{style:F,children:[e.jsx("span",{style:ke}),"Phone"]}),e.jsxs("label",{style:F,children:[e.jsx("span",{style:Ce}),"ASAP"]})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"ContactForm",props:{projectTypes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:'Options for the "Project type" select.',defaultValue:{value:"['Branding', 'Video production', 'Marketing strategy']",computed:!1}}}};const Pe={title:"Components/Forms",tags:["autodocs"],parameters:{docs:{description:{component:"Forms & Inputs — inputs focus to pine with a soft ring. Includes the inline newsletter signup and the valid/invalid field states from the live site."}}}},Ie={background:"#fff",border:"1px solid #E7E1D8",borderRadius:16,padding:28,display:"flex",flexDirection:"column",gap:18,maxWidth:420},m={render:()=>e.jsxs("div",{style:Ie,children:[e.jsx(p,{label:"Full name",placeholder:"Miles Ramsay"}),e.jsx(I,{label:"Project type",options:["Branding","Video production","Marketing strategy"]}),e.jsx(N,{label:"Tell us the story",rows:3,placeholder:"What are you trying to say, and to whom?"})]})},f={render:()=>e.jsxs("div",{style:{background:"#fff",border:"1px solid #E7E1D8",borderRadius:16,padding:"24px 28px",maxWidth:420},children:[e.jsx("div",{style:{fontFamily:"var(--ui)",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#5C6B68",marginBottom:14},children:"States"}),e.jsx("div",{style:{marginBottom:14},children:e.jsx(p,{state:"valid",defaultValue:"hello@5280.com",message:"✓ Looks good"})}),e.jsx(p,{state:"invalid",defaultValue:"not-an-email",message:"Please enter a valid email"})]})},y={render:()=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(B,{})})},g={render:()=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(q,{})})},x={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{padding:32,background:"#FBF9F5"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,alignItems:"start",maxWidth:880},children:[e.jsx(q,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[e.jsx(B,{}),e.jsxs("div",{style:{background:"#fff",border:"1px solid #E7E1D8",borderRadius:16,padding:"24px 28px"},children:[e.jsx("div",{style:{fontFamily:"var(--ui)",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#5C6B68",marginBottom:14},children:"States"}),e.jsx("div",{style:{marginBottom:14},children:e.jsx(p,{state:"valid",defaultValue:"hello@5280.com",message:"✓ Looks good"})}),e.jsx(p,{state:"invalid",defaultValue:"not-an-email",message:"Please enter a valid email"})]})]})]})})};var V,P,W,z,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={card}>
      <TextInput label="Full name" placeholder="Miles Ramsay" />
      <SelectInput label="Project type" options={['Branding', 'Video production', 'Marketing strategy']} />
      <TextAreaField label="Tell us the story" rows={3} placeholder="What are you trying to say, and to whom?" />
    </div>
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Label + input + focus ring across all three control types.",...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var M,_,A,L,O;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#fff',
    border: '1px solid #E7E1D8',
    borderRadius: 16,
    padding: '24px 28px',
    maxWidth: 420
  }}>
      <div style={{
      fontFamily: 'var(--ui)',
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#5C6B68',
      marginBottom: 14
    }}>
        States
      </div>
      <div style={{
      marginBottom: 14
    }}>
        <TextInput state="valid" defaultValue="hello@5280.com" message="✓ Looks good" />
      </div>
      <TextInput state="invalid" defaultValue="not-an-email" message="Please enter a valid email" />
    </div>
}`,...(A=(_=f.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:'Green "Looks good" and red "Please enter a valid email" states.',...(O=(L=f.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var $,H,G,Y,J;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <NewsletterSignup />
    </div>
}`,...(G=(H=y.parameters)==null?void 0:H.docs)==null?void 0:G.source},description:{story:"Interactive: submit swaps the form for the lime confirmation (sc-pop).",...(J=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var K,Q,U,X,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <ContactForm />
    </div>
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"The full white-card contact form composite.",...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,ae,re,se;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    padding: 32,
    background: '#FBF9F5'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      alignItems: 'start',
      maxWidth: 880
    }}>
        <ContactForm />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }}>
          <NewsletterSignup />
          <div style={{
          background: '#fff',
          border: '1px solid #E7E1D8',
          borderRadius: 16,
          padding: '24px 28px'
        }}>
            <div style={{
            fontFamily: 'var(--ui)',
            fontSize: 11,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#5C6B68',
            marginBottom: 14
          }}>
              States
            </div>
            <div style={{
            marginBottom: 14
          }}>
              <TextInput state="valid" defaultValue="hello@5280.com" message="✓ Looks good" />
            </div>
            <TextInput state="invalid" defaultValue="not-an-email" message="Please enter a valid email" />
          </div>
        </div>
      </div>
    </div>
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"The complete forms section: contact card alongside newsletter + states.",...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};const We=["Fields","FieldStates","Newsletter","Contact","Section"];export{g as Contact,f as FieldStates,m as Fields,y as Newsletter,x as Section,We as __namedExportsOrder,Pe as default};
