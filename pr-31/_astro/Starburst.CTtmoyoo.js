import{r as E,R as xa}from"./index.BCOEHr3l.js";var Pa={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn;function fe(){if(fn)return na;fn=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(e,r,i){var o=null;if(i!==void 0&&(o=""+i),r.key!==void 0&&(o=""+r.key),"key"in r){i={};for(var s in r)s!=="key"&&(i[s]=r[s])}else i=r;return r=i.ref,{$$typeof:a,type:e,key:o,ref:r!==void 0?r:null,props:i}}return na.Fragment=n,na.jsx=t,na.jsxs=t,na}var un;function ue(){return un||(un=1,Pa.exports=fe()),Pa.exports}var _=ue();const x={pine:"#184A4F",jade:"#096D61",ink:"#16211F",muted:"#5C6B68",red:"#FF3B3B",peri:"#5A70BB",gold:"#FBBA16",blush:"#FFD0C7",sky:"#8CB6F2",lime:"#F0FC97",cream:"#FBF9F5",surface:"#FFFFFF",border:"#E7E1D8",paper:"#F4F1EA"},Ss={display:"'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",serif:"'Minion 3','Source Serif 4 Variable',Georgia,serif",ui:"'Owners Narrow','Acumin Pro Wide','Archivo Variable',system-ui,sans-serif"},As={displayMD:{fontFamily:"'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",fontWeight:400,textTransform:"uppercase",fontSize:"clamp(1.875rem, 4vw, 2.75rem)",lineHeight:1,letterSpacing:".02em"},title:{fontFamily:"'Minion 3','Source Serif 4 Variable',Georgia,serif",fontWeight:700,fontSize:"1.25rem",lineHeight:1.2}},ks={sm:6,md:12,lg:18,pill:999},Fs={lg:"0 18px 40px rgba(22,33,31,.16)"},ce={out:"cubic-bezier(.2,.7,.2,1)"};function Is(){const[a,n]=E.useState(!1);return{isHovered:a,hoverProps:{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1)}}}function Cs(){const[a,n]=E.useState(!1);return{isFocused:a,focusProps:{onFocus:()=>n(!0),onBlur:()=>n(!1)}}}function de(a=.3){const n=E.useRef(null),[t,e]=E.useState(!1);return E.useEffect(()=>{const r=n.current;if(!r)return;const i=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(e(!0),i.unobserve(s.target))})},{threshold:a});return i.observe(r),()=>i.disconnect()},[a]),{ref:n,inView:t}}function me(){const[a,n]=E.useState(!1);return E.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)");n(t.matches);const e=()=>n(t.matches);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},[]),a}/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function _a(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function ge(a){if(Array.isArray(a))return a}function ve(a){if(Array.isArray(a))return _a(a)}function pe(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function be(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Bn(e.key),e)}}function he(a,n,t){return n&&be(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function ga(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=qa(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=Bn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function ye(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function xe(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,u=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function f(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):cn(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function wa(a,n){return ge(a)||xe(a,n)||qa(a,n)||we()}function T(a){return ve(a)||ye(a)||qa(a)||Se()}function Ae(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Bn(a){var n=Ae(a,"string");return typeof n=="symbol"?n:n+""}function ba(a){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ba(a)}function qa(a,n){if(a){if(typeof a=="string")return _a(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_a(a,n):void 0}}var dn=function(){},Ja={},Xn={},Hn=null,Vn={mark:dn,measure:dn};try{typeof window<"u"&&(Ja=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Hn=MutationObserver),typeof performance<"u"&&(Vn=performance)}catch{}var ke=Ja.navigator||{},mn=ke.userAgent,gn=mn===void 0?"":mn,D=Ja,w=Xn,vn=Hn,ua=Vn;D.document;var $=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Gn=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),ca,Fe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ie=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,qn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ce={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",sa="duotone",Kn="sharp",Qn="sharp-duotone",Zn="chisel",at="etch",nt="graphite",tt="jelly",et="jelly-duo",rt="jelly-fill",it="mosaic",ot="notdog",st="notdog-duo",lt="pixel",ft="slab",ut="slab-duo",ct="slab-press",dt="slab-press-duo",mt="thumbprint",gt="utility",vt="utility-duo",pt="utility-fill",bt="vellum",ht="whiteboard",Pe="Classic",Ee="Duotone",ze="Sharp",Oe="Sharp Duotone",je="Chisel",Te="Etch",_e="Graphite",Ne="Jelly",Le="Jelly Duo",Me="Jelly Fill",$e="Mosaic",Re="Notdog",De="Notdog Duo",We="Pixel",Ue="Slab",Ye="Slab Duo",Be="Slab Press",Xe="Slab Press Duo",He="Thumbprint",Ve="Utility",Ge="Utility Duo",qe="Utility Fill",Je="Vellum",Ke="Whiteboard",yt=[C,sa,Kn,Qn,Zn,at,nt,tt,et,rt,it,ot,st,lt,ft,ut,ct,dt,mt,gt,vt,pt,bt,ht];ca={},g(g(g(g(g(g(g(g(g(g(ca,C,Pe),sa,Ee),Kn,ze),Qn,Oe),Zn,je),at,Te),nt,_e),tt,Ne),et,Le),rt,Me),g(g(g(g(g(g(g(g(g(g(ca,it,$e),ot,Re),st,De),lt,We),ft,Ue),ut,Ye),ct,Be),dt,Xe),mt,He),gt,Ve),g(g(g(g(ca,vt,Ge),pt,qe),bt,Je),ht,Ke);var Qe={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Ze={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ar=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),nr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},xt=["fak","fa-kit","fakd","fa-kit-duotone"],pn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},tr=["kit"],er="kit",rr="kit-duotone",ir="Kit",or="Kit Duotone";g(g({},er,ir),rr,or);var sr={kit:{"fa-kit":"fak"}},lr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fr={kit:{fak:"fa-kit"}},bn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},da,ma={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ur=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],cr="classic",dr="duotone",mr="sharp",gr="sharp-duotone",vr="chisel",pr="etch",br="graphite",hr="jelly",yr="jelly-duo",xr="jelly-fill",wr="mosaic",Sr="notdog",Ar="notdog-duo",kr="pixel",Fr="slab",Ir="slab-duo",Cr="slab-press",Pr="slab-press-duo",Er="thumbprint",zr="utility",Or="utility-duo",jr="utility-fill",Tr="vellum",_r="whiteboard",Nr="Classic",Lr="Duotone",Mr="Sharp",$r="Sharp Duotone",Rr="Chisel",Dr="Etch",Wr="Graphite",Ur="Jelly",Yr="Jelly Duo",Br="Jelly Fill",Xr="Mosaic",Hr="Notdog",Vr="Notdog Duo",Gr="Pixel",qr="Slab",Jr="Slab Duo",Kr="Slab Press",Qr="Slab Press Duo",Zr="Thumbprint",ai="Utility",ni="Utility Duo",ti="Utility Fill",ei="Vellum",ri="Whiteboard";da={},g(g(g(g(g(g(g(g(g(g(da,cr,Nr),dr,Lr),mr,Mr),gr,$r),vr,Rr),pr,Dr),br,Wr),hr,Ur),yr,Yr),xr,Br),g(g(g(g(g(g(g(g(g(g(da,wr,Xr),Sr,Hr),Ar,Vr),kr,Gr),Fr,qr),Ir,Jr),Cr,Kr),Pr,Qr),Er,Zr),zr,ai),g(g(g(g(da,Or,ni),jr,ti),Tr,ei),_r,ri);var ii="kit",oi="kit-duotone",si="Kit",li="Kit Duotone";g(g({},ii,si),oi,li);var fi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ui={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Na={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ci=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],wt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(ur,ci),di=["solid","regular","light","thin","duotone","brands","semibold"],St=[1,2,3,4,5,6,7,8,9,10],mi=St.concat([11,12,13,14,15,16,17,18,19,20]),gi=["aw","fw","pull-left","pull-right"],vi=[].concat(T(Object.keys(ui)),di,gi,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",ma.GROUP,ma.SWAP_OPACITY,ma.PRIMARY,ma.SECONDARY]).concat(St.map(function(a){return"".concat(a,"x")})).concat(mi.map(function(a){return"w-".concat(a)})),pi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",La=16,At="fa",kt="svg-inline--fa",B="data-fa-i2svg",Ma="data-fa-pseudo-element",bi="data-fa-pseudo-element-pending",Ka="data-prefix",Qa="data-icon",hn="fontawesome-i2svg",hi="async",yi=["HTML","HEAD","STYLE","SCRIPT"],Ft=["::before","::after",":before",":after"],It=(function(){try{return!0}catch{return!1}})();function la(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[C]}})}var Ct=f({},qn);Ct[C]=f(f(f(f({},{"fa-duotone":"duotone"}),qn[C]),pn.kit),pn["kit-duotone"]);var xi=la(Ct),$a=f({},nr);$a[C]=f(f(f(f({},{duotone:"fad"}),$a[C]),bn.kit),bn["kit-duotone"]);var yn=la($a),Ra=f({},Na);Ra[C]=f(f({},Ra[C]),fr.kit);var Za=la(Ra),Da=f({},fi);Da[C]=f(f({},Da[C]),sr.kit);la(Da);var wi=Fe,Pt="fa-layers-text",Si=Ie,Ai=f({},Qe);la(Ai);var ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ea=Ce,Fi=[].concat(T(tr),T(vi)),ea=D.FontAwesomeConfig||{};function Ii(a){var n=w.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Ci(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(w&&typeof w.querySelector=="function"){var Pi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pi.forEach(function(a){var n=wa(a,2),t=n[0],e=n[1],r=Ci(Ii(t));r!=null&&(ea[e]=r)})}var Et={styleDefault:"solid",familyDefault:C,cssPrefix:At,replacementClass:kt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ea.familyPrefix&&(ea.cssPrefix=ea.familyPrefix);var J=f(f({},Et),ea);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(Et).forEach(function(a){Object.defineProperty(m,a,{enumerable:!0,set:function(t){J[a]=t,ra.forEach(function(e){return e(m)})},get:function(){return J[a]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){J.cssPrefix=n,ra.forEach(function(t){return t(m)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=m;var ra=[];function Ei(a){return ra.push(a),function(){ra.splice(ra.indexOf(a),1)}}var H=La,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zi(a){if(!(!a||!$)){var n=w.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=w.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return w.head.insertBefore(n,e),a}}var Oi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var a=12,n="";a-- >0;)n+=Oi[Math.random()*62|0];return n}function Q(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function an(a){return a.classList?Q(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function zt(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ji(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(zt(a[t]),'" ')},"").trim()}function Sa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function nn(a){return a.size!==N.size||a.x!==N.x||a.y!==N.y||a.rotate!==N.rotate||a.flipX||a.flipY}function Ti(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:u}}function _i(a){var n=a.transform,t=a.width,e=t===void 0?La:t,r=a.height,i=r===void 0?La:r,o="";return Gn?o+="translate(".concat(n.x/H-e/2,"em, ").concat(n.y/H-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/H,"em), calc(-50% + ").concat(n.y/H,"em)) "),o+="scale(".concat(n.size/H*(n.flipX?-1:1),", ").concat(n.size/H*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var Ni=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ot(){var a=At,n=kt,t=m.cssPrefix,e=m.replacementClass,r=Ni;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var wn=!1;function za(){m.autoAddCss&&!wn&&(zi(Ot()),wn=!0)}var Li={mixout:function(){return{dom:{css:Ot,insertCss:za}}},hooks:function(){return{beforeDOMElementCreation:function(){za()},beforeI2svg:function(){za()}}}},M=D||{};M[L]||(M[L]={});M[L].styles||(M[L].styles={});M[L].hooks||(M[L].hooks={});M[L].shims||(M[L].shims=[]);var j=M[L],jt=[],Tt=function(){w.removeEventListener("DOMContentLoaded",Tt),ha=1,jt.map(function(n){return n()})},ha=!1;$&&(ha=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ha||w.addEventListener("DOMContentLoaded",Tt));function Mi(a){$&&(ha?setTimeout(a,0):jt.push(a))}function fa(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?zt(a):"<".concat(n," ").concat(ji(e),">").concat(i.map(fa).join(""),"</").concat(n,">")}function Sn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Oa=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,l,u,d;for(e===void 0?(l=1,d=n[i[0]]):(l=0,d=e);l<o;l++)u=i[l],d=s(d,n[u],u,n);return d};function _t(a){return T(a).length!==1?null:a.codePointAt(0).toString(16)}function An(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Wa(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=An(n);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(a,An(n)):j.styles[a]=f(f({},j.styles[a]||{}),i),a==="fas"&&Wa("fa",n)}var oa=j.styles,$i=j.shims,Nt=Object.keys(Za),Ri=Nt.reduce(function(a,n){return a[n]=Object.keys(Za[n]),a},{}),tn=null,Lt={},Mt={},$t={},Rt={},Dt={};function Di(a){return~Fi.indexOf(a)}function Wi(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!Di(r)?r:null}var Wt=function(){var n=function(i){return Oa(oa,function(o,s,l){return o[l]=Oa(s,i,{}),o},{})};Lt=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Mt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Dt=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in oa||m.autoFetchSvg,e=Oa($i,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});$t=e.names,Rt=e.unicodes,tn=Aa(m.styleDefault,{family:m.familyDefault})};Ei(function(a){tn=Aa(a.styleDefault,{family:m.familyDefault})});Wt();function en(a,n){return(Lt[a]||{})[n]}function Ui(a,n){return(Mt[a]||{})[n]}function Y(a,n){return(Dt[a]||{})[n]}function Ut(a){return $t[a]||{prefix:null,iconName:null}}function Yi(a){var n=Rt[a],t=en("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function W(){return tn}var Yt=function(){return{prefix:null,iconName:null,rest:[]}};function Bi(a){var n=C,t=Nt.reduce(function(e,r){return e[r]="".concat(m.cssPrefix,"-").concat(r),e},{});return yt.forEach(function(e){(a.includes(t[e])||a.some(function(r){return Ri[e].includes(r)}))&&(n=e)}),n}function Aa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?C:t,r=xi[e][a];if(e===sa&&!a)return"fad";var i=yn[e][a]||yn[e][r],o=a in j.styles?a:null,s=i||o||null;return s}function Xi(a){var n=[],t=null;return a.forEach(function(e){var r=Wi(m.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function kn(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var Fn=wt.concat(xt);function ka(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=kn(a.filter(function(p){return Fn.includes(p)})),o=kn(a.filter(function(p){return!Fn.includes(p)})),s=i.filter(function(p){return r=p,!Jn.includes(p)}),l=wa(s,1),u=l[0],d=u===void 0?null:u,c=Bi(i),v=f(f({},Xi(o)),{},{prefix:Aa(d,{family:c})});return f(f(f({},v),qi({values:a,family:c,styles:oa,config:m,canonical:v,givenPrefix:r})),Hi(e,r,v))}function Hi(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?Ut(r):{},o=Y(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!oa.far&&oa.fas&&!m.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Vi=yt.filter(function(a){return a!==C||a!==sa}),Gi=Object.keys(Na).filter(function(a){return a!==C}).map(function(a){return Object.keys(Na[a])}).flat();function qi(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,l=a.config,u=l===void 0?{}:l,d=t===sa,c=n.includes("fa-duotone")||n.includes("fad"),v=u.familyDefault==="duotone",p=e.prefix==="fad"||e.prefix==="fa-duotone";if(!d&&(c||v||p)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Vi.includes(t)){var h=Object.keys(s).find(function(S){return Gi.includes(S)});if(h||u.autoFetchSvg){var y=ar.get(t).defaultShortPrefixId;e.prefix=y,e.iconName=Y(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=W()||"fas"),e}var Ji=(function(){function a(){pe(this,a),this.definitions={}}return he(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Wa(s,o[s]);var l=Za[C][s];l&&Wa(l,o[s]),Wt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(t[s][c]=u)}),t[s][l]=u}),t}}])})(),In=[],G={},q={},Ki=Object.keys(q);function Qi(a,n){var t=n.mixoutsTo;return In=a,G={},Object.keys(q).forEach(function(e){Ki.indexOf(e)===-1&&delete q[e]}),In.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),ba(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){G[o]||(G[o]=[]),G[o].push(i[o])})}e.provides&&e.provides(q)}),t}function Ua(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=G[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function X(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=G[a]||[];r.forEach(function(i){i.apply(null,t)})}function U(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return q[a]?q[a].apply(null,n):void 0}function Ya(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||W();if(n)return n=Y(t,n)||n,Sn(Bt.definitions,t,n)||Sn(j.styles,t,n)}var Bt=new Ji,Zi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},ao={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(X("beforeI2svg",n),U("pseudoElements2svg",n),U("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Mi(function(){to({autoReplaceSvgRoot:t}),X("watch",n)})}},no={icon:function(n){if(n===null)return null;if(ba(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Y(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Aa(n[0]);return{prefix:e,iconName:Y(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(wi))){var r=ka(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:Y(i,n)||n}}}},P={noAuto:Zi,config:m,dom:ao,parse:no,library:Bt,findIconDefinition:Ya,toHtml:fa},to=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?w:t;(Object.keys(j.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&P.dom.i2svg({node:e})};function Fa(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return fa(e)})}}),Object.defineProperty(a,"node",{get:function(){if($){var e=w.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function eo(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(nn(o)&&t.found&&!e.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};r.style=Sa(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ro(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:e}]}]}function io(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function rn(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,l=a.maskId,u=a.extra,d=a.watchable,c=d===void 0?!1:d,v=e.found?e:t,p=v.width,h=v.height,y=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(z){return u.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};!io(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[B]="");var A=f(f({},S),{},{prefix:r,iconName:i,main:t,mask:e,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=e.found&&t.found?U("generateAbstractMask",A)||{children:[],attributes:{}}:U("generateAbstractIcon",A)||{children:[],attributes:{}},I=k.children,R=k.attributes;return A.children=I,A.attributes=R,s?ro(A):eo(A)}function Cn(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[B]="");var u=f({},i.styles);nn(r)&&(u.transform=_i({transform:r,width:t,height:e}),u["-webkit-transform"]=u.transform);var d=Sa(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[n]}),c}function oo(a){var n=a.content,t=a.extra,e=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=Sa(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var ja=j.styles;function Ba(a){var n=a[0],t=a[1],e=a.slice(4),r=wa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var so={found:!1,width:512,height:512};function lo(a,n){!It&&!m.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Xa(a,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=W()),new Promise(function(e,r){if(t==="fa"){var i=Ut(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&ja[n]&&ja[n][a]){var o=ja[n][a];return e(Ba(o))}lo(a,n),e(f(f({},so),{},{icon:m.showMissingIcons&&a?U("missingIconAbstract")||{}:{}}))})}var Pn=function(){},Ha=m.measurePerformance&&ua&&ua.mark&&ua.measure?ua:{mark:Pn,measure:Pn},ta='FA "7.3.1"',fo=function(n){return Ha.mark("".concat(ta," ").concat(n," begins")),function(){return Xt(n)}},Xt=function(n){Ha.mark("".concat(ta," ").concat(n," ends")),Ha.measure("".concat(ta," ").concat(n),"".concat(ta," ").concat(n," begins"),"".concat(ta," ").concat(n," ends"))},on={begin:fo,end:Xt},va=function(){};function En(a){var n=a.getAttribute?a.getAttribute(B):null;return typeof n=="string"}function uo(a){var n=a.getAttribute?a.getAttribute(Ka):null,t=a.getAttribute?a.getAttribute(Qa):null;return n&&t}function co(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(m.replacementClass)}function mo(){if(m.autoReplaceSvg===!0)return pa.replace;var a=pa[m.autoReplaceSvg];return a||pa.replace}function go(a){return w.createElementNS("http://www.w3.org/2000/svg",a)}function vo(a){return w.createElement(a)}function Ht(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?go:vo:t;if(typeof a=="string")return w.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(Ht(o,{ceFn:e}))}),r}function po(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var pa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Ht(r),t)}),t.getAttribute(B)===null&&m.keepOriginalSource){var e=w.createComment(po(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~an(t).indexOf(m.replacementClass))return pa.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return fa(s)}).join(`
`);t.setAttribute(B,""),t.innerHTML=o}};function zn(a){a()}function Vt(a,n){var t=typeof n=="function"?n:va;if(a.length===0)t();else{var e=zn;m.mutateApproach===hi&&(e=D.requestAnimationFrame||zn),e(function(){var r=mo(),i=on.begin("mutate");a.map(r),i(),t()})}}var sn=!1;function Gt(){sn=!0}function Va(){sn=!1}var ya=null;function On(a){if(vn&&m.observeMutations){var n=a.treeCallback,t=n===void 0?va:n,e=a.nodeCallback,r=e===void 0?va:e,i=a.pseudoElementsCallback,o=i===void 0?va:i,s=a.observeMutationsRoot,l=s===void 0?w:s;ya=new vn(function(u){if(!sn){var d=W();Q(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!En(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&En(c.target)&&~ki.indexOf(c.attributeName))if(c.attributeName==="class"&&uo(c.target)){var v=ka(an(c.target)),p=v.prefix,h=v.iconName;c.target.setAttribute(Ka,p||d),h&&c.target.setAttribute(Qa,h)}else co(c.target)&&r(c.target)})}}),$&&ya.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bo(){ya&&ya.disconnect()}function ho(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function yo(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=ka(an(a));return r.prefix||(r.prefix=W()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ui(r.prefix,a.innerText)||en(r.prefix,_t(a.innerText))),!r.iconName&&m.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function xo(a){var n=Q(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function wo(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=yo(a),e=t.iconName,r=t.prefix,i=t.rest,o=xo(a),s=Ua("parseNodeAttributes",{},a),l=n.styleParser?ho(a):[];return f({iconName:e,prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var So=j.styles;function qt(a){var n=m.autoReplaceSvg==="nest"?jn(a,{styleParser:!1}):jn(a);return~n.extra.classes.indexOf(Pt)?U("generateLayersText",a,n):U("generateSvgReplacementMutation",a,n)}function Ao(){return[].concat(T(xt),T(wt))}function Tn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var t=w.documentElement.classList,e=function(c){return t.add("".concat(hn,"-").concat(c))},r=function(c){return t.remove("".concat(hn,"-").concat(c))},i=m.autoFetchSvg?Ao():Jn.concat(Object.keys(So));i.includes("fa")||i.push("fa");var o=[".".concat(Pt,":not([").concat(B,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var l=on.begin("onTree"),u=s.reduce(function(d,c){try{var v=qt(c);v&&d.push(v)}catch(p){It||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Vt(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),l(),d()})}).catch(function(v){l(),c(v)})})}function ko(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qt(a).then(function(t){t&&Vt([t],n)})}function Fo(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ya(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ya(r||{})),a(e,f(f({},t),{},{mask:r}))}}var Io=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?N:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,u=t.maskId,d=u===void 0?null:u,c=t.classes,v=c===void 0?[]:c,p=t.attributes,h=p===void 0?{}:p,y=t.styles,S=y===void 0?{}:y;if(n){var A=n.prefix,k=n.iconName,I=n.icon;return Fa(f({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:t}),rn({icons:{main:Ba(I),mask:l?Ba(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:f(f({},N),r),symbol:o,maskId:d,extra:{attributes:h,styles:S,classes:v}})})}},Co={mixout:function(){return{icon:Fo(Io)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Tn,t.nodeCallback=ko,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?w:e,i=t.callback,o=i===void 0?function(){}:i;return Tn(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,u=e.maskId,d=e.extra;return new Promise(function(c,v){Promise.all([Xa(r,i),l.iconName?Xa(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var h=wa(p,2),y=h[0],S=h[1];c([t,rn({icons:{main:y,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=Sa(s);l.length>0&&(r.style=l);var u;return nn(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},Po={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Fa({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},Eo={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return Fa({type:"counter",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),oo({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(T(i))}})})}}}},zo={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?N:r,o=e.classes,s=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,d=e.styles,c=d===void 0?{}:d;return Fa({type:"text",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),Cn({content:t,transform:f(f({},N),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Gn){var l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([t,Cn({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Jt=new RegExp('"',"ug"),_n=[1105920,1112319],Nn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Ze),pi),lr),Ga=Object.keys(Nn).reduce(function(a,n){return a[n.toLowerCase()]=Nn[n],a},{}),Oo=Object.keys(Ga).reduce(function(a,n){var t=Ga[n];return a[n]=t[900]||T(Object.entries(t))[0][1],a},{});function jo(a){var n=a.replace(Jt,"");return _t(T(n)[0]||"")}function To(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(Jt,""),r=e.codePointAt(0),i=r>=_n[0]&&r<=_n[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function _o(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(Ga[t]||{})[r]||Oo[t]}function Ln(a,n){var t="".concat(bi).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=Q(a.children),o=i.filter(function(Z){return Z.getAttribute(Ma)===n})[0],s=D.getComputedStyle(a,n),l=s.getPropertyValue("font-family"),u=l.match(Si),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return a.removeChild(o),e();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),p=_o(l,d),h=jo(v),y=u[0].startsWith("FontAwesome"),S=To(s),A=en(p,h),k=A;if(y){var I=Yi(h);I.iconName&&I.prefix&&(A=I.iconName,p=I.prefix)}if(A&&!S&&(!o||o.getAttribute(Ka)!==p||o.getAttribute(Qa)!==k)){a.setAttribute(t,k),o&&a.removeChild(o);var R=wo(),z=R.extra;z.attributes[Ma]=n,Xa(A,p).then(function(Z){var Ia=rn(f(f({},R),{},{icons:{main:Z,mask:Yt()},prefix:p,iconName:k,extra:z,watchable:!0})),aa=w.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(aa,a.firstChild):a.appendChild(aa),aa.outerHTML=Ia.map(function(Ca){return fa(Ca)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function No(a){return Promise.all([Ln(a,"::before"),Ln(a,"::after")])}function Lo(a){return a.parentNode!==document.head&&!~yi.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Ma)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Mo=function(n){return!!n&&Ft.some(function(t){return n.includes(t)})},$o=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(l){return l.trim()});e=e.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=ga(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Mo(o)){var s=Ft.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){r.e(l)}finally{r.f()}return t};function Mn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if($){var t;if(n)t=a;else if(m.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=ga(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=ga(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=$o(u.selectorText),c=ga(d),v;try{for(c.s();!(v=c.n()).done;){var p=v.value;e.add(p)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{t=a.querySelectorAll(h)}catch{}}return new Promise(function(y,S){var A=Q(t).filter(Lo).map(No),k=on.begin("searchPseudoElements");Gt(),Promise.all(A).then(function(){k(),Va(),y()}).catch(function(){k(),Va(),S()})})}}var Ro={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Mn,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?w:e;m.searchPseudoElements&&Mn(r)}}},$n=!1,Do={mixout:function(){return{dom:{unwatch:function(){Gt(),$n=!0}}}},hooks:function(){return{bootstrap:function(){On(Ua("mutationObserverCallbacks",{}))},noAuto:function(){bo()},watch:function(t){var e=t.observeMutationsRoot;$n?Va():On(Ua("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Rn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},Wo={mixout:function(){return{parse:{transform:function(t){return Rn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Rn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),p.path)}]}]}}}},Ta={x:0,y:0,width:"100%",height:"100%"};function Dn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function Uo(a){return a.tag==="g"?a.children:[a]}var Yo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?ka(r.split(" ").map(function(o){return o.trim()})):Yt();return i.prefix||(i.prefix=W()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,p=Ti({transform:l,containerWidth:c,iconWidth:u}),h={tag:"rect",attributes:f(f({},Ta),{},{fill:"white"})},y=d.children?{children:d.children.map(Dn)}:{},S={tag:"g",attributes:f({},p.inner),children:[Dn(f({tag:d.tag,attributes:f(f({},d.attributes),p.path)},y))]},A={tag:"g",attributes:f({},p.outer),children:[S]},k="mask-".concat(s||xn()),I="clip-".concat(s||xn()),R={tag:"mask",attributes:f(f({},Ta),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,A]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Uo(v)},R]};return e.push(z,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},Ta)}),{children:e,attributes:r}}}},Bo={provides:function(n){var t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Xo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Ho=[Li,Co,Po,Eo,zo,Ro,Do,Wo,Yo,Bo,Xo];Qi(Ho,{mixoutsTo:P});P.noAuto;var K=P.config;P.library;P.dom;var Kt=P.parse;P.findIconDefinition;P.toHtml;var Vo=P.icon;P.layer;P.text;P.counter;function Go(a){return a=a-0,a===a}function Qt(a){return Go(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var qo=(a,n)=>xa.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Jo(a){return a.charAt(0).toUpperCase()+a.slice(1)}var V=new Map,Ko=1e3;function Qo(a){if(V.has(a))return V.get(a);const n={};let t=0;const e=a.length;for(;t<e;){const r=a.indexOf(";",t),i=r===-1?e:r,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const d=Qt(l);n[d.startsWith("webkit")?Jo(d):d]=u}}}t=i+1}if(V.size===Ko){const r=V.keys().next().value;r&&V.delete(r)}return V.set(a,n),n}function Zt(a,n,t={}){if(typeof n=="string")return n;const e=(n.children||[]).map(c=>{let v=c;return("fill"in t||t.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(v={...c,attributes:{...c.attributes,fill:void 0}}),Zt(a,v)}),r=n.attributes||{},i={};for(const[c,v]of Object.entries(r))switch(!0){case c==="class":{i.className=v;break}case c==="style":{i.style=Qo(String(v));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=v;break}default:i[Qt(c)]=v}const{style:o,role:s,"aria-label":l,gradientFill:u,...d}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:c,stops:v=[],...p}=u;e.unshift(a(c==="linear"?"linearGradient":"radialGradient",{...p,id:u.id},v.map(qo)))}return a(n.tag,{...i,...d},...e)}var Zo=Zt.bind(null,xa.createElement),Wn=(a,n)=>{const t=E.useId();return a||(n?t:void 0)},as=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},ns="searchPseudoElementsFullScan"in K&&typeof K.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",ts=Number.parseInt(ns)>=7,es=()=>ts,ia="fa",F={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},rs={left:"fa-pull-left",right:"fa-pull-right"},is={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},os={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},O={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function ss(a){const n=K.cssPrefix||K.familyPrefix||ia;return n===ia?a:a.replace(new RegExp(String.raw`(?<=^|\s)${ia}-`,"g"),`${n}-`)}function ls(a){const{beat:n,fade:t,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:d,inverse:c,border:v,flip:p,size:h,rotation:y,pull:S,swapOpacity:A,rotateBy:k,widthAuto:I,canvasSquare:R,canvasRoomy:z,flip360:Z,buzz:Ia,float:aa,jello:Ca,spinSnap:re,spinSnap4:ie,spinSnap8:oe,swing:se,wag:le,className:ln}=a,b=[];return ln&&b.push(...ln.split(" ")),n&&b.push(F.beat),t&&b.push(F.fade),e&&b.push(F.beatFade),r&&b.push(F.bounce),i&&b.push(F.shake),o&&b.push(F.spin),l&&b.push(F.spinReverse),s&&b.push(F.spinPulse),u&&b.push(F.pulse),d&&b.push(O.fixedWidth),c&&b.push(O.inverse),v&&b.push(O.border),p===!0&&b.push(O.flip),(p==="horizontal"||p==="both")&&b.push(O.flipHorizontal),(p==="vertical"||p==="both")&&b.push(O.flipVertical),h!=null&&b.push(os[h]),y!=null&&y!==0&&b.push(is[y]),S!=null&&b.push(rs[S]),A&&b.push(O.swapOpacity),es()?(k&&b.push(O.rotateBy),I&&b.push(O.widthAuto),R&&b.push(O.canvasSquare),z&&b.push(O.canvasRoomy),Z&&b.push(F.flip360),Ia&&b.push(F.buzz),aa&&b.push(F.float),Ca&&b.push(F.jello),re&&b.push(F.spinSnap),ie&&b.push(F.spinSnap4),oe&&b.push(F.spinSnap8),se&&b.push(F.swing),le&&b.push(F.wag),(K.cssPrefix||K.familyPrefix||ia)===ia?b:b.map(ss)):b}var fs=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Un(a){if(a)return fs(a)?a:Kt.icon(a)}function us(a){return Object.keys(a)}var Yn=new as("FontAwesomeIcon"),ae={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},cs=new Set(Object.keys(ae)),ds=xa.forwardRef((a,n)=>{const t={...ae,...a},{icon:e,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:u}=t,d=Wn(l,!!r),c=Wn(s,!!o),v=Un(e);if(!v)return Yn.error("Icon lookup is undefined",e),null;const p=ls(t),h=typeof u=="string"?Kt.transform(u):u,y=Un(r),S=Vo(v,{...p.length>0&&{classes:p},...h&&{transform:h},...y&&{mask:y},symbol:i,title:o,titleId:c,maskId:d});if(!S)return Yn.error("Could not find icon",v),null;const{abstract:A}=S,k={ref:n};for(const I of us(t))cs.has(I)||(k[I]=t[I]);return Zo(A[0],k)});ds.displayName="FontAwesomeIcon";const ms={cream:{bg:x.cream,fg:x.ink,fgSoft:x.muted,accent:x.pine,header:"light"},pine:{bg:x.pine,fg:"#FFFFFF",fgSoft:"#CFE2E0",accent:x.lime,header:"dark"},jade:{bg:x.jade,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.84)",accent:x.lime,header:"dark"},peri:{bg:x.peri,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.88)",accent:x.lime,header:"dark"},sky:{bg:x.sky,fg:x.pine,fgSoft:x.ink,accent:x.pine,header:"light"},blush:{bg:x.blush,fg:x.pine,fgSoft:x.ink,accent:x.red,header:"light"},lime:{bg:x.lime,fg:x.pine,fgSoft:x.ink,accent:x.red,header:"light"},transparent:{bg:"transparent",fg:x.ink,fgSoft:x.muted,accent:x.pine,header:"light"}},Ps=E.forwardRef(function({as:n="section",tone:t="cream",frame:e,edge:r="none",pad:i="md",headerTone:o,background:s,reveal:l=!1,className:u,style:d,children:c,...v},p){const h=ms[t],y={"--band-bg":h.bg,"--band-fg":h.fg,"--band-fg-soft":h.fgSoft,"--band-accent":h.accent},S=["band",`band--${t}`,`band--pad-${i}`,r!=="none"?`band--edge-${r}`:"",s?"band--has-bg":"",u??""].filter(Boolean).join(" "),A=xa.createElement(n,{ref:p,className:S,"data-header-tone":o??h.header,"data-reveal":l?"":void 0,style:{background:h.bg,color:h.fg,...y,...d},...v},s?_.jsx("div",{className:"band__bg","aria-hidden":"true",children:s}):null,c);return e?_.jsx("div",{className:`band band--frame band--frame-${e}`,style:{background:x[e]},children:A}):A}),ne='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.37 182.13"><path fill="currentColor" d="M396.23 120.09C364.78 115.26 333.06 111.46 301.17 110.96C291.24 110.8 281.08 110.86 270.9 111.42C275.29 97.25 273.75 81.88 263.61 70.52C250.71 56.04 230 51.1 211.69 47.86C199.97 45.79 187.91 43.99 175.8 43.13C177.6 36.49 178.25 29.74 176.09 23.08C173.6 15.38 167.32 9.7 160.21 6.4C142.3 -1.9 120.11 -0.05 100.87 0.74C79.81 1.61 58.79 3.59 37.81 5.84C27.29 6.98 16.78 8.18 6.26 9.36C-3.23 10.43 -1.38 25.28 8.11 24.21C44.97 20.07 82.07 15.22 119.16 15.18C127.76 15.17 136.44 15.43 144.88 17.19C150.67 18.39 157.81 20.43 161.08 25.87C164.01 30.76 163.05 36.86 160.78 42.57C145.62 42.57 130.53 44.43 116.08 49.4C100.13 54.88 84.39 64.94 74.23 78.77C69.19 85.64 64.51 94.65 65.73 103.44C66.75 110.9 72.26 115.97 79.26 117.7C91.6 120.74 105.29 114.08 115.91 108.08C129.23 100.54 141.35 91.2 152.14 80.26C158.64 73.66 164.95 66.14 169.64 57.86C175.81 58.17 181.94 58.76 187.98 59.49C203.95 61.43 220.63 63.5 235.58 69.63C247.14 74.37 258.03 82.19 258.64 95.92C258.89 101.64 257.4 107.33 254.94 112.75C238.22 114.67 221.75 118.34 206.45 125.07C197.81 128.86 189.29 133.6 181.98 139.67C175.93 144.68 169.49 150.93 166.57 158.42C163.4 166.54 165.22 175.58 173.1 179.79C179 182.95 186.26 182.48 192.62 180.95C207.55 177.36 221.09 169.24 233.3 159.95C245.15 150.93 256.16 139.9 263.83 126.92C272.54 126.18 281.25 125.88 289.79 125.79C318.5 125.51 347.2 128.36 375.57 132.25C381.8 133.1 388.03 134.02 394.25 134.98C403.64 136.42 405.64 121.54 396.23 120.09M80.81 102.24C80.89 102.28 80.88 102.33 80.81 102.24M98.38 100.16C93.5 102.17 89.97 103.72 84.75 103.42C84.15 103.39 82.31 103.03 82.33 103.06C81.84 102.92 81.4 102.65 80.93 102.45C81.97 102.89 81.03 102.34 80.8 102.24C80.73 102.14 80.59 101.92 80.41 101.42C80.3 101.13 80.28 100.55 80.44 99.36C81.36 92.39 86.92 85.79 91.78 81.11C96.95 76.12 102.94 71.78 109.29 68.49C122.68 61.56 137.23 58.57 151.98 57.81C138.73 76.16 118.91 91.7 98.38 100.16M239.17 135.02C233.39 141.17 226.75 146.54 219.87 151.38C216.64 153.66 213.33 155.81 209.95 157.85C208.04 159 208.94 158.5 207.28 159.38C206.13 159.99 204.96 160.58 203.78 161.15C198.69 163.58 193.33 165.77 187.77 166.72C185.28 167.15 183.07 167.48 180.62 166.83C181.5 167.06 179.2 165.65 179.99 166.52C179.89 166.4 179.8 166.31 179.73 166.24C179.73 166.23 179.74 166.22 179.75 166.2C183.45 153.63 198.35 145.22 209.42 140.06C220.4 134.94 232.11 131.61 244.08 129.47C242.45 131.43 240.79 133.29 239.17 135.02"/></svg>',gs=/viewBox="([^"]+)"/.exec(ne)?.[1]??"0 0 402.4 182.1",vs=/d="([^"]+)"/.exec(ne)?.[1]??"";function Es({draw:a=!1,width:n=200,className:t,style:e}){const r=me(),{ref:i,inView:o}=de(.25),[s,l]=E.useState(!a);return E.useEffect(()=>{if(!a)return;if(r||o){l(!0);return}const u=window.setTimeout(()=>l(!0),1500);return()=>window.clearTimeout(u)},[a,r,o]),_.jsx("span",{ref:i,className:t,"aria-hidden":"true",style:{display:"inline-block",width:n,lineHeight:0,...e},children:_.jsx("svg",{viewBox:gs,width:"100%",style:{display:"block",overflow:"visible"},children:_.jsx("path",{d:vs,fill:"currentColor",style:{clipPath:s?"inset(0 0 0 0)":"inset(0 100% 0 0)",transition:a&&!r?`clip-path 1.1s ${ce.out}`:"none"}})})})}E.createContext(null);const te='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.73 241.61"><path fill="currentColor" d="M91.04 2.05L119.68 35.75L145.72 0L156.9 42.79L195.87 21.88L187.38 65.28L231.56 63.36L205.08 98.77L245.73 116.21L206.5 136.63L235.55 169.97L191.35 171.35L203.06 214L162.64 196.06L154.68 239.57L126.05 205.87L100 241.61L88.82 198.82L49.85 219.73L58.34 176.33L14.16 178.25L40.64 142.84L0 125.4L39.23 104.98L10.17 71.64L54.38 70.26L42.66 27.61L83.09 45.55ZM91.04 2.05"/></svg>',ee='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.22 69.67"><path fill="currentColor" d="M51.35 0.66C41.1 3.4 35.02 13.93 37.76 24.18C35.02 13.93 24.49 7.85 14.24 10.6C3.99 13.34 -2.09 23.88 0.65 34.12C8.46 64.43 49.96 69.67 49.96 69.67C49.96 69.67 83.27 44.38 74.87 14.24C72.13 3.99 61.6 -2.09 51.35 0.66"/></svg>',ps=/viewBox="([^"]+)"/.exec(te)?.[1]??"0 0 245.7 241.6",bs=/d="([^"]+)"/.exec(te)?.[1]??"",hs=/viewBox="([^"]+)"/.exec(ee)?.[1]??"0 0 76.2 69.7",ys=/d="([^"]+)"/.exec(ee)?.[1]??"";function zs({size:a=72,color:n=x.lime,heart:t=!1,heartColor:e=x.red,pulse:r=!1,className:i,style:o}){return _.jsxs("span",{className:i,"aria-hidden":"true",style:{display:"inline-grid",placeItems:"center",width:a,height:a,lineHeight:0,animation:r?"sc-pulse .6s cubic-bezier(.2,.7,.2,1) 1":void 0,transformOrigin:"center",...o},children:[_.jsx("svg",{viewBox:ps,width:a,height:a,style:{gridArea:"1 / 1",display:"block"},children:_.jsx("path",{d:bs,fill:n})}),t&&_.jsx("svg",{viewBox:hs,width:a*.36,height:a*.36,style:{gridArea:"1 / 1",display:"block",transform:"translateY(2%)"},children:_.jsx("path",{d:ys,fill:e})})]})}export{Ps as B,ds as F,Es as S,me as a,Is as b,x as c,ms as d,ce as e,Ss as f,zs as g,_ as j,ks as r,Fs as s,As as t,Cs as u};
