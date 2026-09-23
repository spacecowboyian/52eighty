import{r as ia,R as ya}from"./index.BCOEHr3l.js";var Pa={exports:{}},Z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn;function oe(){if(fn)return Z;fn=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(e,r,i){var o=null;if(i!==void 0&&(o=""+i),r.key!==void 0&&(o=""+r.key),"key"in r){i={};for(var s in r)s!=="key"&&(i[s]=r[s])}else i=r;return r=i.ref,{$$typeof:a,type:e,key:o,ref:r!==void 0?r:null,props:i}}return Z.Fragment=n,Z.jsx=t,Z.jsxs=t,Z}var ln;function se(){return ln||(ln=1,Pa.exports=oe()),Pa.exports}var un=se();const x={pine:"#184A4F",jade:"#096D61",ink:"#16211F",muted:"#5C6B68",red:"#FF3B3B",peri:"#5A70BB",gold:"#FBBA16",blush:"#FFD0C7",sky:"#8CB6F2",lime:"#F0FC97",cream:"#FBF9F5",surface:"#FFFFFF",border:"#E7E1D8",paper:"#F4F1EA"},us={display:"'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",serif:"'Minion 3','Source Serif 4 Variable',Georgia,serif",ui:"'Owners Narrow','Acumin Pro Wide','Archivo Variable',system-ui,sans-serif"},cs={displayMD:{fontFamily:"'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",fontWeight:400,textTransform:"uppercase",fontSize:"clamp(1.875rem, 4vw, 2.75rem)",lineHeight:1,letterSpacing:".02em"},title:{fontFamily:"'Minion 3','Source Serif 4 Variable',Georgia,serif",fontWeight:700,fontSize:"1.25rem",lineHeight:1.2}},ds={sm:6,md:12,lg:18,pill:999},ms={lg:"0 18px 40px rgba(22,33,31,.16)"},gs={out:"cubic-bezier(.2,.7,.2,1)"};function vs(){const[a,n]=ia.useState(!1);return{isHovered:a,hoverProps:{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1)}}}function ps(){const[a,n]=ia.useState(!1);return{isFocused:a,focusProps:{onFocus:()=>n(!0),onBlur:()=>n(!1)}}}/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Ta(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function fe(a){if(Array.isArray(a))return a}function le(a){if(Array.isArray(a))return Ta(a)}function ue(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function ce(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Xn(e.key),e)}}function de(a,n,t){return n&&ce(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function ma(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Va(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var f=t.next();return o=f.done,f},e:function(f){s=!0,i=f},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=Xn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function me(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ge(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],f=!0,u=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);f=!0);}catch(d){u=!0,r=d}finally{try{if(!f&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function l(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):cn(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function xa(a,n){return fe(a)||ge(a,n)||Va(a,n)||ve()}function j(a){return le(a)||me(a)||Va(a)||pe()}function be(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Xn(a){var n=be(a,"string");return typeof n=="symbol"?n:n+""}function pa(a){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pa(a)}function Va(a,n){if(a){if(typeof a=="string")return Ta(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ta(a,n):void 0}}var dn=function(){},qa={},Hn={},Bn=null,Gn={mark:dn,measure:dn};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(Hn=document),typeof MutationObserver<"u"&&(Bn=MutationObserver),typeof performance<"u"&&(Gn=performance)}catch{}var he=qa.navigator||{},mn=he.userAgent,gn=mn===void 0?"":mn,M=qa,S=Hn,vn=Bn,la=Gn;M.document;var $=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Vn=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),ua,ye=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,xe=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,qn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Se={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",oa="duotone",Kn="sharp",Qn="sharp-duotone",Zn="chisel",at="etch",nt="graphite",tt="jelly",et="jelly-duo",rt="jelly-fill",it="mosaic",ot="notdog",st="notdog-duo",ft="pixel",lt="slab",ut="slab-duo",ct="slab-press",dt="slab-press-duo",mt="thumbprint",gt="utility",vt="utility-duo",pt="utility-fill",bt="vellum",ht="whiteboard",we="Classic",Ae="Duotone",ke="Sharp",Fe="Sharp Duotone",Ie="Chisel",Pe="Etch",Ee="Graphite",ze="Jelly",Ce="Jelly Duo",Oe="Jelly Fill",je="Mosaic",Te="Notdog",Ne="Notdog Duo",_e="Pixel",$e="Slab",Le="Slab Duo",Me="Slab Press",Re="Slab Press Duo",De="Thumbprint",We="Utility",Ue="Utility Duo",Ye="Utility Fill",Xe="Vellum",He="Whiteboard",yt=[P,oa,Kn,Qn,Zn,at,nt,tt,et,rt,it,ot,st,ft,lt,ut,ct,dt,mt,gt,vt,pt,bt,ht];ua={},g(g(g(g(g(g(g(g(g(g(ua,P,we),oa,Ae),Kn,ke),Qn,Fe),Zn,Ie),at,Pe),nt,Ee),tt,ze),et,Ce),rt,Oe),g(g(g(g(g(g(g(g(g(g(ua,it,je),ot,Te),st,Ne),ft,_e),lt,$e),ut,Le),ct,Me),dt,Re),mt,De),gt,We),g(g(g(g(ua,vt,Ue),pt,Ye),bt,Xe),ht,He);var Be={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Ge={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Ve=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),qe={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},xt=["fak","fa-kit","fakd","fa-kit-duotone"],pn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Je=["kit"],Ke="kit",Qe="kit-duotone",Ze="Kit",ar="Kit Duotone";g(g({},Ke,Ze),Qe,ar);var nr={kit:{"fa-kit":"fak"}},tr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},er={kit:{fak:"fa-kit"}},bn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ca,da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],ir="classic",or="duotone",sr="sharp",fr="sharp-duotone",lr="chisel",ur="etch",cr="graphite",dr="jelly",mr="jelly-duo",gr="jelly-fill",vr="mosaic",pr="notdog",br="notdog-duo",hr="pixel",yr="slab",xr="slab-duo",Sr="slab-press",wr="slab-press-duo",Ar="thumbprint",kr="utility",Fr="utility-duo",Ir="utility-fill",Pr="vellum",Er="whiteboard",zr="Classic",Cr="Duotone",Or="Sharp",jr="Sharp Duotone",Tr="Chisel",Nr="Etch",_r="Graphite",$r="Jelly",Lr="Jelly Duo",Mr="Jelly Fill",Rr="Mosaic",Dr="Notdog",Wr="Notdog Duo",Ur="Pixel",Yr="Slab",Xr="Slab Duo",Hr="Slab Press",Br="Slab Press Duo",Gr="Thumbprint",Vr="Utility",qr="Utility Duo",Jr="Utility Fill",Kr="Vellum",Qr="Whiteboard";ca={},g(g(g(g(g(g(g(g(g(g(ca,ir,zr),or,Cr),sr,Or),fr,jr),lr,Tr),ur,Nr),cr,_r),dr,$r),mr,Lr),gr,Mr),g(g(g(g(g(g(g(g(g(g(ca,vr,Rr),pr,Dr),br,Wr),hr,Ur),yr,Yr),xr,Xr),Sr,Hr),wr,Br),Ar,Gr),kr,Vr),g(g(g(g(ca,Fr,qr),Ir,Jr),Pr,Kr),Er,Qr);var Zr="kit",ai="kit-duotone",ni="Kit",ti="Kit Duotone";g(g({},Zr,ni),ai,ti);var ei={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ri={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Na={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ii=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(rr,ii),oi=["solid","regular","light","thin","duotone","brands","semibold"],wt=[1,2,3,4,5,6,7,8,9,10],si=wt.concat([11,12,13,14,15,16,17,18,19,20]),fi=["aw","fw","pull-left","pull-right"],li=[].concat(j(Object.keys(ri)),oi,fi,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",da.GROUP,da.SWAP_OPACITY,da.PRIMARY,da.SECONDARY]).concat(wt.map(function(a){return"".concat(a,"x")})).concat(si.map(function(a){return"w-".concat(a)})),ui={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",_a=16,At="fa",kt="svg-inline--fa",U="data-fa-i2svg",$a="data-fa-pseudo-element",ci="data-fa-pseudo-element-pending",Ja="data-prefix",Ka="data-icon",hn="fontawesome-i2svg",di="async",mi=["HTML","HEAD","STYLE","SCRIPT"],Ft=["::before","::after",":before",":after"],It=(function(){try{return!0}catch{return!1}})();function sa(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[P]}})}var Pt=l({},qn);Pt[P]=l(l(l(l({},{"fa-duotone":"duotone"}),qn[P]),pn.kit),pn["kit-duotone"]);var gi=sa(Pt),La=l({},qe);La[P]=l(l(l(l({},{duotone:"fad"}),La[P]),bn.kit),bn["kit-duotone"]);var yn=sa(La),Ma=l({},Na);Ma[P]=l(l({},Ma[P]),er.kit);var Qa=sa(Ma),Ra=l({},ei);Ra[P]=l(l({},Ra[P]),nr.kit);sa(Ra);var vi=ye,Et="fa-layers-text",pi=xe,bi=l({},Be);sa(bi);var hi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ea=Se,yi=[].concat(j(Je),j(li)),na=M.FontAwesomeConfig||{};function xi(a){var n=S.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Si(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(S&&typeof S.querySelector=="function"){var wi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wi.forEach(function(a){var n=xa(a,2),t=n[0],e=n[1],r=Si(xi(t));r!=null&&(na[e]=r)})}var zt={styleDefault:"solid",familyDefault:P,cssPrefix:At,replacementClass:kt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};na.familyPrefix&&(na.cssPrefix=na.familyPrefix);var V=l(l({},zt),na);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(zt).forEach(function(a){Object.defineProperty(m,a,{enumerable:!0,set:function(t){V[a]=t,ta.forEach(function(e){return e(m)})},get:function(){return V[a]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){V.cssPrefix=n,ta.forEach(function(t){return t(m)})},get:function(){return V.cssPrefix}});M.FontAwesomeConfig=m;var ta=[];function Ai(a){return ta.push(a),function(){ta.splice(ta.indexOf(a),1)}}var X=_a,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ki(a){if(!(!a||!$)){var n=S.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=S.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return S.head.insertBefore(n,e),a}}var Fi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var a=12,n="";a-- >0;)n+=Fi[Math.random()*62|0];return n}function J(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function Za(a){return a.classList?J(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ct(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ii(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Ct(a[t]),'" ')},"").trim()}function Sa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function an(a){return a.size!==T.size||a.x!==T.x||a.y!==T.y||a.rotate!==T.rotate||a.flipX||a.flipY}function Pi(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ei(a){var n=a.transform,t=a.width,e=t===void 0?_a:t,r=a.height,i=r===void 0?_a:r,o="";return Vn?o+="translate(".concat(n.x/X-e/2,"em, ").concat(n.y/X-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/X,"em), calc(-50% + ").concat(n.y/X,"em)) "),o+="scale(".concat(n.size/X*(n.flipX?-1:1),", ").concat(n.size/X*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var zi=`:root, :host {
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
}`;function Ot(){var a=At,n=kt,t=m.cssPrefix,e=m.replacementClass,r=zi;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var Sn=!1;function za(){m.autoAddCss&&!Sn&&(ki(Ot()),Sn=!0)}var Ci={mixout:function(){return{dom:{css:Ot,insertCss:za}}},hooks:function(){return{beforeDOMElementCreation:function(){za()},beforeI2svg:function(){za()}}}},_=M||{};_[N]||(_[N]={});_[N].styles||(_[N].styles={});_[N].hooks||(_[N].hooks={});_[N].shims||(_[N].shims=[]);var O=_[N],jt=[],Tt=function(){S.removeEventListener("DOMContentLoaded",Tt),ba=1,jt.map(function(n){return n()})},ba=!1;$&&(ba=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),ba||S.addEventListener("DOMContentLoaded",Tt));function Oi(a){$&&(ba?setTimeout(a,0):jt.push(a))}function fa(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?Ct(a):"<".concat(n," ").concat(Ii(e),">").concat(i.map(fa).join(""),"</").concat(n,">")}function wn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Ca=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,f,u,d;for(e===void 0?(f=1,d=n[i[0]]):(f=0,d=e);f<o;f++)u=i[f],d=s(d,n[u],u,n);return d};function Nt(a){return j(a).length!==1?null:a.codePointAt(0).toString(16)}function An(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Da(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=An(n);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(a,An(n)):O.styles[a]=l(l({},O.styles[a]||{}),i),a==="fas"&&Da("fa",n)}var ra=O.styles,ji=O.shims,_t=Object.keys(Qa),Ti=_t.reduce(function(a,n){return a[n]=Object.keys(Qa[n]),a},{}),nn=null,$t={},Lt={},Mt={},Rt={},Dt={};function Ni(a){return~yi.indexOf(a)}function _i(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!Ni(r)?r:null}var Wt=function(){var n=function(i){return Ca(ra,function(o,s,f){return o[f]=Ca(s,i,{}),o},{})};$t=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Lt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Dt=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var t="far"in ra||m.autoFetchSvg,e=Ca(ji,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Mt=e.names,Rt=e.unicodes,nn=wa(m.styleDefault,{family:m.familyDefault})};Ai(function(a){nn=wa(a.styleDefault,{family:m.familyDefault})});Wt();function tn(a,n){return($t[a]||{})[n]}function $i(a,n){return(Lt[a]||{})[n]}function W(a,n){return(Dt[a]||{})[n]}function Ut(a){return Mt[a]||{prefix:null,iconName:null}}function Li(a){var n=Rt[a],t=tn("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function R(){return nn}var Yt=function(){return{prefix:null,iconName:null,rest:[]}};function Mi(a){var n=P,t=_t.reduce(function(e,r){return e[r]="".concat(m.cssPrefix,"-").concat(r),e},{});return yt.forEach(function(e){(a.includes(t[e])||a.some(function(r){return Ti[e].includes(r)}))&&(n=e)}),n}function wa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?P:t,r=gi[e][a];if(e===oa&&!a)return"fad";var i=yn[e][a]||yn[e][r],o=a in O.styles?a:null,s=i||o||null;return s}function Ri(a){var n=[],t=null;return a.forEach(function(e){var r=_i(m.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function kn(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var Fn=St.concat(xt);function Aa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=kn(a.filter(function(p){return Fn.includes(p)})),o=kn(a.filter(function(p){return!Fn.includes(p)})),s=i.filter(function(p){return r=p,!Jn.includes(p)}),f=xa(s,1),u=f[0],d=u===void 0?null:u,c=Mi(i),v=l(l({},Ri(o)),{},{prefix:wa(d,{family:c})});return l(l(l({},v),Yi({values:a,family:c,styles:ra,config:m,canonical:v,givenPrefix:r})),Di(e,r,v))}function Di(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?Ut(r):{},o=W(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!ra.far&&ra.fas&&!m.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Wi=yt.filter(function(a){return a!==P||a!==oa}),Ui=Object.keys(Na).filter(function(a){return a!==P}).map(function(a){return Object.keys(Na[a])}).flat();function Yi(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,f=a.config,u=f===void 0?{}:f,d=t===oa,c=n.includes("fa-duotone")||n.includes("fad"),v=u.familyDefault==="duotone",p=e.prefix==="fad"||e.prefix==="fa-duotone";if(!d&&(c||v||p)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Wi.includes(t)){var h=Object.keys(s).find(function(w){return Ui.includes(w)});if(h||u.autoFetchSvg){var y=Ve.get(t).defaultShortPrefixId;e.prefix=y,e.iconName=W(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=R()||"fas"),e}var Xi=(function(){function a(){ue(this,a),this.definitions={}}return de(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=l(l({},t.definitions[s]||{}),o[s]),Da(s,o[s]);var f=Qa[P][s];f&&Da(f,o[s]),Wt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,d=u[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(t[s][c]=u)}),t[s][f]=u}),t}}])})(),In=[],B={},G={},Hi=Object.keys(G);function Bi(a,n){var t=n.mixoutsTo;return In=a,B={},Object.keys(G).forEach(function(e){Hi.indexOf(e)===-1&&delete G[e]}),In.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),pa(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){B[o]||(B[o]=[]),B[o].push(i[o])})}e.provides&&e.provides(G)}),t}function Wa(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=B[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function Y(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=B[a]||[];r.forEach(function(i){i.apply(null,t)})}function D(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return G[a]?G[a].apply(null,n):void 0}function Ua(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||R();if(n)return n=W(t,n)||n,wn(Xt.definitions,t,n)||wn(O.styles,t,n)}var Xt=new Xi,Gi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Y("noAuto")},Vi={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(Y("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Oi(function(){Ji({autoReplaceSvgRoot:t}),Y("watch",n)})}},qi={icon:function(n){if(n===null)return null;if(pa(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=wa(n[0]);return{prefix:e,iconName:W(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(vi))){var r=Aa(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=R();return{prefix:i,iconName:W(i,n)||n}}}},E={noAuto:Gi,config:m,dom:Vi,parse:qi,library:Xt,findIconDefinition:Ua,toHtml:fa},Ji=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?S:t;(Object.keys(O.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&E.dom.i2svg({node:e})};function ka(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return fa(e)})}}),Object.defineProperty(a,"node",{get:function(){if($){var e=S.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function Ki(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(an(o)&&t.found&&!e.found){var s=t.width,f=t.height,u={x:s/f/2,y:.5};r.style=Sa(l(l({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Qi(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:e}]}]}function Zi(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function en(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,f=a.maskId,u=a.extra,d=a.watchable,c=d===void 0?!1:d,v=e.found?e:t,p=v.width,h=v.height,y=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(z){return u.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(u.classes).join(" "),w={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};!Zi(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[U]="");var A=l(l({},w),{},{prefix:r,iconName:i,main:t,mask:e,maskId:f,transform:o,symbol:s,styles:l({},u.styles)}),k=e.found&&t.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}},I=k.children,L=k.attributes;return A.children=I,A.attributes=L,s?Qi(A):Ki(A)}function Pn(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,f=l(l({},i.attributes),{},{class:i.classes.join(" ")});s&&(f[U]="");var u=l({},i.styles);an(r)&&(u.transform=Ei({transform:r,width:t,height:e}),u["-webkit-transform"]=u.transform);var d=Sa(u);d.length>0&&(f.style=d);var c=[];return c.push({tag:"span",attributes:f,children:[n]}),c}function ao(a){var n=a.content,t=a.extra,e=l(l({},t.attributes),{},{class:t.classes.join(" ")}),r=Sa(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var Oa=O.styles;function Ya(a){var n=a[0],t=a[1],e=a.slice(4),r=xa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ea.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var no={found:!1,width:512,height:512};function to(a,n){!It&&!m.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Xa(a,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=R()),new Promise(function(e,r){if(t==="fa"){var i=Ut(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&Oa[n]&&Oa[n][a]){var o=Oa[n][a];return e(Ya(o))}to(a,n),e(l(l({},no),{},{icon:m.showMissingIcons&&a?D("missingIconAbstract")||{}:{}}))})}var En=function(){},Ha=m.measurePerformance&&la&&la.mark&&la.measure?la:{mark:En,measure:En},aa='FA "7.3.1"',eo=function(n){return Ha.mark("".concat(aa," ").concat(n," begins")),function(){return Ht(n)}},Ht=function(n){Ha.mark("".concat(aa," ").concat(n," ends")),Ha.measure("".concat(aa," ").concat(n),"".concat(aa," ").concat(n," begins"),"".concat(aa," ").concat(n," ends"))},rn={begin:eo,end:Ht},ga=function(){};function zn(a){var n=a.getAttribute?a.getAttribute(U):null;return typeof n=="string"}function ro(a){var n=a.getAttribute?a.getAttribute(Ja):null,t=a.getAttribute?a.getAttribute(Ka):null;return n&&t}function io(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(m.replacementClass)}function oo(){if(m.autoReplaceSvg===!0)return va.replace;var a=va[m.autoReplaceSvg];return a||va.replace}function so(a){return S.createElementNS("http://www.w3.org/2000/svg",a)}function fo(a){return S.createElement(a)}function Bt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?so:fo:t;if(typeof a=="string")return S.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(Bt(o,{ceFn:e}))}),r}function lo(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var va={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Bt(r),t)}),t.getAttribute(U)===null&&m.keepOriginalSource){var e=S.createComment(lo(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~Za(t).indexOf(m.replacementClass))return va.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return fa(s)}).join(`
`);t.setAttribute(U,""),t.innerHTML=o}};function Cn(a){a()}function Gt(a,n){var t=typeof n=="function"?n:ga;if(a.length===0)t();else{var e=Cn;m.mutateApproach===di&&(e=M.requestAnimationFrame||Cn),e(function(){var r=oo(),i=rn.begin("mutate");a.map(r),i(),t()})}}var on=!1;function Vt(){on=!0}function Ba(){on=!1}var ha=null;function On(a){if(vn&&m.observeMutations){var n=a.treeCallback,t=n===void 0?ga:n,e=a.nodeCallback,r=e===void 0?ga:e,i=a.pseudoElementsCallback,o=i===void 0?ga:i,s=a.observeMutationsRoot,f=s===void 0?S:s;ha=new vn(function(u){if(!on){var d=R();J(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!zn(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&zn(c.target)&&~hi.indexOf(c.attributeName))if(c.attributeName==="class"&&ro(c.target)){var v=Aa(Za(c.target)),p=v.prefix,h=v.iconName;c.target.setAttribute(Ja,p||d),h&&c.target.setAttribute(Ka,h)}else io(c.target)&&r(c.target)})}}),$&&ha.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uo(){ha&&ha.disconnect()}function co(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function mo(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=Aa(Za(a));return r.prefix||(r.prefix=R()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=$i(r.prefix,a.innerText)||tn(r.prefix,Nt(a.innerText))),!r.iconName&&m.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function go(a){var n=J(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function vo(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=mo(a),e=t.iconName,r=t.prefix,i=t.rest,o=go(a),s=Wa("parseNodeAttributes",{},a),f=n.styleParser?co(a):[];return l({iconName:e,prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var po=O.styles;function qt(a){var n=m.autoReplaceSvg==="nest"?jn(a,{styleParser:!1}):jn(a);return~n.extra.classes.indexOf(Et)?D("generateLayersText",a,n):D("generateSvgReplacementMutation",a,n)}function bo(){return[].concat(j(xt),j(St))}function Tn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var t=S.documentElement.classList,e=function(c){return t.add("".concat(hn,"-").concat(c))},r=function(c){return t.remove("".concat(hn,"-").concat(c))},i=m.autoFetchSvg?bo():Jn.concat(Object.keys(po));i.includes("fa")||i.push("fa");var o=[".".concat(Et,":not([").concat(U,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=rn.begin("onTree"),u=s.reduce(function(d,c){try{var v=qt(c);v&&d.push(v)}catch(p){It||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Gt(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),d()})}).catch(function(v){f(),c(v)})})}function ho(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qt(a).then(function(t){t&&Gt([t],n)})}function yo(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ua(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ua(r||{})),a(e,l(l({},t),{},{mask:r}))}}var xo=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?T:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,f=s===void 0?null:s,u=t.maskId,d=u===void 0?null:u,c=t.classes,v=c===void 0?[]:c,p=t.attributes,h=p===void 0?{}:p,y=t.styles,w=y===void 0?{}:y;if(n){var A=n.prefix,k=n.iconName,I=n.icon;return ka(l({type:"icon"},n),function(){return Y("beforeDOMElementCreation",{iconDefinition:n,params:t}),en({icons:{main:Ya(I),mask:f?Ya(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:l(l({},T),r),symbol:o,maskId:d,extra:{attributes:h,styles:w,classes:v}})})}},So={mixout:function(){return{icon:yo(xo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Tn,t.nodeCallback=ho,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?S:e,i=t.callback,o=i===void 0?function(){}:i;return Tn(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,f=e.mask,u=e.maskId,d=e.extra;return new Promise(function(c,v){Promise.all([Xa(r,i),f.iconName?Xa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var h=xa(p,2),y=h[0],w=h[1];c([t,en({icons:{main:y,mask:w},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,f=Sa(s);f.length>0&&(r.style=f);var u;return an(o)&&(u=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},wo={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return ka({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(j(i)).join(" ")},children:o}]})}}}},Ao={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,f=e.styles,u=f===void 0?{}:f;return ka({type:"counter",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:e}),ao({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(j(i))}})})}}}},ko={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?T:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,d=e.styles,c=d===void 0?{}:d;return ka({type:"text",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:e}),Pn({content:t,transform:l(l({},T),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Vn){var f=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/f,s=u.height/f}return Promise.resolve([t,Pn({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Jt=new RegExp('"',"ug"),Nn=[1105920,1112319],_n=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Ge),ui),tr),Ga=Object.keys(_n).reduce(function(a,n){return a[n.toLowerCase()]=_n[n],a},{}),Fo=Object.keys(Ga).reduce(function(a,n){var t=Ga[n];return a[n]=t[900]||j(Object.entries(t))[0][1],a},{});function Io(a){var n=a.replace(Jt,"");return Nt(j(n)[0]||"")}function Po(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(Jt,""),r=e.codePointAt(0),i=r>=Nn[0]&&r<=Nn[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function Eo(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(Ga[t]||{})[r]||Fo[t]}function $n(a,n){var t="".concat(ci).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=J(a.children),o=i.filter(function(K){return K.getAttribute($a)===n})[0],s=M.getComputedStyle(a,n),f=s.getPropertyValue("font-family"),u=f.match(pi),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return a.removeChild(o),e();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),p=Eo(f,d),h=Io(v),y=u[0].startsWith("FontAwesome"),w=Po(s),A=tn(p,h),k=A;if(y){var I=Li(h);I.iconName&&I.prefix&&(A=I.iconName,p=I.prefix)}if(A&&!w&&(!o||o.getAttribute(Ja)!==p||o.getAttribute(Ka)!==k)){a.setAttribute(t,k),o&&a.removeChild(o);var L=vo(),z=L.extra;z.attributes[$a]=n,Xa(A,p).then(function(K){var Fa=en(l(l({},L),{},{icons:{main:K,mask:Yt()},prefix:p,iconName:k,extra:z,watchable:!0})),Q=S.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(Q,a.firstChild):a.appendChild(Q),Q.outerHTML=Fa.map(function(Ia){return fa(Ia)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function zo(a){return Promise.all([$n(a,"::before"),$n(a,"::after")])}function Co(a){return a.parentNode!==document.head&&!~mi.indexOf(a.tagName.toUpperCase())&&!a.getAttribute($a)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Oo=function(n){return!!n&&Ft.some(function(t){return n.includes(t)})},jo=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(u){return u.trim()})});var r=ma(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Oo(o)){var s=Ft.reduce(function(f,u){return f.replace(u,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(f){r.e(f)}finally{r.f()}return t};function Ln(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if($){var t;if(n)t=a;else if(m.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=ma(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=ma(o.cssRules),f;try{for(s.s();!(f=s.n()).done;){var u=f.value,d=jo(u.selectorText),c=ma(d),v;try{for(c.s();!(v=c.n()).done;){var p=v.value;e.add(p)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{t=a.querySelectorAll(h)}catch{}}return new Promise(function(y,w){var A=J(t).filter(Co).map(zo),k=rn.begin("searchPseudoElements");Vt(),Promise.all(A).then(function(){k(),Ba(),y()}).catch(function(){k(),Ba(),w()})})}}var To={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ln,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?S:e;m.searchPseudoElements&&Ln(r)}}},Mn=!1,No={mixout:function(){return{dom:{unwatch:function(){Vt(),Mn=!0}}}},hooks:function(){return{bootstrap:function(){On(Wa("mutationObserverCallbacks",{}))},noAuto:function(){uo()},watch:function(t){var e=t.observeMutationsRoot;Mn?Ba():On(Wa("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Rn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},_o={mixout:function(){return{parse:{transform:function(t){return Rn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Rn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),p.path)}]}]}}}},ja={x:0,y:0,width:"100%",height:"100%"};function Dn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function $o(a){return a.tag==="g"?a.children:[a]}var Lo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?Aa(r.split(" ").map(function(o){return o.trim()})):Yt();return i.prefix||(i.prefix=R()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,f=t.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,p=Pi({transform:f,containerWidth:c,iconWidth:u}),h={tag:"rect",attributes:l(l({},ja),{},{fill:"white"})},y=d.children?{children:d.children.map(Dn)}:{},w={tag:"g",attributes:l({},p.inner),children:[Dn(l({tag:d.tag,attributes:l(l({},d.attributes),p.path)},y))]},A={tag:"g",attributes:l({},p.outer),children:[w]},k="mask-".concat(s||xn()),I="clip-".concat(s||xn()),L={tag:"mask",attributes:l(l({},ja),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,A]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:$o(v)},L]};return e.push(z,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},ja)}),{children:e,attributes:r}}}},Mo={provides:function(n){var t=!1;M.matchMedia&&(t=M.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=l(l({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ro={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Do=[Ci,So,wo,Ao,ko,To,No,_o,Lo,Mo,Ro];Bi(Do,{mixoutsTo:E});E.noAuto;var q=E.config;E.library;E.dom;var Kt=E.parse;E.findIconDefinition;E.toHtml;var Wo=E.icon;E.layer;E.text;E.counter;function Uo(a){return a=a-0,a===a}function Qt(a){return Uo(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Yo=(a,n)=>ya.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Xo(a){return a.charAt(0).toUpperCase()+a.slice(1)}var H=new Map,Ho=1e3;function Bo(a){if(H.has(a))return H.get(a);const n={};let t=0;const e=a.length;for(;t<e;){const r=a.indexOf(";",t),i=r===-1?e:r,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const f=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(f&&u){const d=Qt(f);n[d.startsWith("webkit")?Xo(d):d]=u}}}t=i+1}if(H.size===Ho){const r=H.keys().next().value;r&&H.delete(r)}return H.set(a,n),n}function Zt(a,n,t={}){if(typeof n=="string")return n;const e=(n.children||[]).map(c=>{let v=c;return("fill"in t||t.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(v={...c,attributes:{...c.attributes,fill:void 0}}),Zt(a,v)}),r=n.attributes||{},i={};for(const[c,v]of Object.entries(r))switch(!0){case c==="class":{i.className=v;break}case c==="style":{i.style=Bo(String(v));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=v;break}default:i[Qt(c)]=v}const{style:o,role:s,"aria-label":f,gradientFill:u,...d}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),f&&(i["aria-label"]=f,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:c,stops:v=[],...p}=u;e.unshift(a(c==="linear"?"linearGradient":"radialGradient",{...p,id:u.id},v.map(Yo)))}return a(n.tag,{...i,...d},...e)}var Go=Zt.bind(null,ya.createElement),Wn=(a,n)=>{const t=ia.useId();return a||(n?t:void 0)},Vo=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},qo="searchPseudoElementsFullScan"in q&&typeof q.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Jo=Number.parseInt(qo)>=7,Ko=()=>Jo,ea="fa",F={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},Qo={left:"fa-pull-left",right:"fa-pull-right"},Zo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},as={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},C={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function ns(a){const n=q.cssPrefix||q.familyPrefix||ea;return n===ea?a:a.replace(new RegExp(String.raw`(?<=^|\s)${ea}-`,"g"),`${n}-`)}function ts(a){const{beat:n,fade:t,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:f,pulse:u,fixedWidth:d,inverse:c,border:v,flip:p,size:h,rotation:y,pull:w,swapOpacity:A,rotateBy:k,widthAuto:I,canvasSquare:L,canvasRoomy:z,flip360:K,buzz:Fa,float:Q,jello:Ia,spinSnap:ne,spinSnap4:te,spinSnap8:ee,swing:re,wag:ie,className:sn}=a,b=[];return sn&&b.push(...sn.split(" ")),n&&b.push(F.beat),t&&b.push(F.fade),e&&b.push(F.beatFade),r&&b.push(F.bounce),i&&b.push(F.shake),o&&b.push(F.spin),f&&b.push(F.spinReverse),s&&b.push(F.spinPulse),u&&b.push(F.pulse),d&&b.push(C.fixedWidth),c&&b.push(C.inverse),v&&b.push(C.border),p===!0&&b.push(C.flip),(p==="horizontal"||p==="both")&&b.push(C.flipHorizontal),(p==="vertical"||p==="both")&&b.push(C.flipVertical),h!=null&&b.push(as[h]),y!=null&&y!==0&&b.push(Zo[y]),w!=null&&b.push(Qo[w]),A&&b.push(C.swapOpacity),Ko()?(k&&b.push(C.rotateBy),I&&b.push(C.widthAuto),L&&b.push(C.canvasSquare),z&&b.push(C.canvasRoomy),K&&b.push(F.flip360),Fa&&b.push(F.buzz),Q&&b.push(F.float),Ia&&b.push(F.jello),ne&&b.push(F.spinSnap),te&&b.push(F.spinSnap4),ee&&b.push(F.spinSnap8),re&&b.push(F.swing),ie&&b.push(F.wag),(q.cssPrefix||q.familyPrefix||ea)===ea?b:b.map(ns)):b}var es=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Un(a){if(a)return es(a)?a:Kt.icon(a)}function rs(a){return Object.keys(a)}var Yn=new Vo("FontAwesomeIcon"),ae={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},is=new Set(Object.keys(ae)),os=ya.forwardRef((a,n)=>{const t={...ae,...a},{icon:e,mask:r,symbol:i,title:o,titleId:s,maskId:f,transform:u}=t,d=Wn(f,!!r),c=Wn(s,!!o),v=Un(e);if(!v)return Yn.error("Icon lookup is undefined",e),null;const p=ts(t),h=typeof u=="string"?Kt.transform(u):u,y=Un(r),w=Wo(v,{...p.length>0&&{classes:p},...h&&{transform:h},...y&&{mask:y},symbol:i,title:o,titleId:c,maskId:d});if(!w)return Yn.error("Could not find icon",v),null;const{abstract:A}=w,k={ref:n};for(const I of rs(t))is.has(I)||(k[I]=t[I]);return Go(A[0],k)});os.displayName="FontAwesomeIcon";ia.createContext(null);const ss={cream:{bg:x.cream,fg:x.ink,fgSoft:x.muted,accent:x.pine,header:"light"},pine:{bg:x.pine,fg:"#FFFFFF",fgSoft:"#CFE2E0",accent:x.lime,header:"dark"},jade:{bg:x.jade,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.84)",accent:x.lime,header:"dark"},peri:{bg:x.peri,fg:"#FFFFFF",fgSoft:"rgba(255,255,255,.88)",accent:x.lime,header:"dark"},sky:{bg:x.sky,fg:x.pine,fgSoft:x.ink,accent:x.pine,header:"light"},blush:{bg:x.blush,fg:x.pine,fgSoft:x.ink,accent:x.red,header:"light"},lime:{bg:x.lime,fg:x.pine,fgSoft:x.ink,accent:x.red,header:"light"},transparent:{bg:"transparent",fg:x.ink,fgSoft:x.muted,accent:x.pine,header:"light"}},bs=ia.forwardRef(function({as:n="section",tone:t="cream",frame:e,edge:r="none",pad:i="md",headerTone:o,background:s,reveal:f=!1,className:u,style:d,children:c,...v},p){const h=ss[t],y={"--band-bg":h.bg,"--band-fg":h.fg,"--band-fg-soft":h.fgSoft,"--band-accent":h.accent},w=["band",`band--${t}`,`band--pad-${i}`,r!=="none"?`band--edge-${r}`:"",s?"band--has-bg":"",u??""].filter(Boolean).join(" "),A=ya.createElement(n,{ref:p,className:w,"data-header-tone":o??h.header,"data-reveal":f?"":void 0,style:{background:h.bg,color:h.fg,...y,...d},...v},s?un.jsx("div",{className:"band__bg","aria-hidden":"true",children:s}):null,c);return e?un.jsx("div",{className:`band band--frame band--frame-${e}`,style:{background:x[e]},children:A}):A});export{bs as B,os as F,vs as a,x as c,gs as e,us as f,un as j,ds as r,ms as s,cs as t,ps as u};
