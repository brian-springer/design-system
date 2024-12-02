/*! For license information please see ui-input-otp-stories.fa5add69.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[9442],{"./stories/ui/input-otp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithSeparator:()=>WithSeparator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_otp_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),Bt=Object.defineProperty,At=Object.defineProperties,kt=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,vt=(r,s,e)=>s in r?Bt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var xt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");var jt=react.createContext({}),Lt=react.forwardRef(((A,B)=>{var X,lt,ut,dt,ft,z=A,{value:r,onChange:s,maxLength:e,textAlign:u="left",pattern:P,placeholder:D,inputMode:G="numeric",onComplete:H,pushPasswordManagerStrategy:F="increase-width",pasteTransformer:W,containerClassName:Z,noScriptCSSFallback:T=Nt,render:f,children:h}=z,a=((r,s)=>{var e={};for(var u in r)gt.call(r,u)&&s.indexOf(u)<0&&(e[u]=r[u]);if(null!=r&&Y)for(var u of Y(r))s.indexOf(u)<0&&Et.call(r,u)&&(e[u]=r[u]);return e})(z,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]);let[q,nt]=react.useState("string"==typeof a.defaultValue?a.defaultValue:""),i=null!=r?r:q,I=function _t(r){let s=react.useRef();return react.useEffect((()=>{s.current=r})),s.current}(i),x=react.useCallback((t=>{null==s||s(t),nt(t)}),[s]),m=react.useMemo((()=>P?"string"==typeof P?new RegExp(P):P:null),[P]),l=react.useRef(null),K=react.useRef(null),J=react.useRef({value:i,onChange:x,isIOS:"undefined"!=typeof window&&(null==(lt=null==(X=null==window?void 0:window.CSS)?void 0:X.supports)?void 0:lt.call(X,"-webkit-touch-callout","none"))}),V=react.useRef({prev:[null==(ut=l.current)?void 0:ut.selectionStart,null==(dt=l.current)?void 0:dt.selectionEnd,null==(ft=l.current)?void 0:ft.selectionDirection]});react.useImperativeHandle(B,(()=>l.current),[]),react.useEffect((()=>{let t=l.current,o=K.current;if(!t||!o)return;function d(){if(document.activeElement!==t)return L(null),void N(null);let w,c=t.selectionStart,b=t.selectionEnd,mt=t.selectionDirection,v=t.maxLength,C=t.value,_=V.current.prev,g=-1,E=-1;if(0!==C.length&&null!==c&&null!==b){let Dt=c===b,Ht=c===C.length&&C.length<v;if(Dt&&!Ht){let y=c;if(0===y)g=0,E=1,w="forward";else if(y===v)g=y-1,E=y,w="backward";else if(v>1&&C.length>1){let et=0;if(null!==_[0]&&null!==_[1]){w=y<_[1]?"backward":"forward";let Wt=_[0]===_[1]&&_[0]<v;"backward"===w&&!Wt&&(et=-1)}g=et+y,E=et+y+1}}-1!==g&&-1!==E&&g!==E&&l.current.setSelectionRange(g,E,w)}let pt=-1!==g?g:c,Rt=-1!==E?E:b,yt=null!=w?w:mt;L(pt),N(Rt),V.current.prev=[pt,Rt,yt]}if(J.current.value!==t.value&&J.current.onChange(t.value),V.current.prev=[t.selectionStart,t.selectionEnd,t.selectionDirection],document.addEventListener("selectionchange",d,{capture:!0}),d(),document.activeElement===t&&Q(!0),!document.getElementById("input-otp-style")){let c=document.createElement("style");if(c.id="input-otp-style",document.head.appendChild(c),c.sheet){let b="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";$(c.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),$(c.sheet,`[data-input-otp]:autofill { ${b} }`),$(c.sheet,`[data-input-otp]:-webkit-autofill { ${b} }`),$(c.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),$(c.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let p=()=>{o&&o.style.setProperty("--root-height",`${t.clientHeight}px`)};p();let R=new ResizeObserver(p);return R.observe(t),()=>{document.removeEventListener("selectionchange",d,{capture:!0}),R.disconnect()}}),[]);let[ot,rt]=react.useState(!1),[j,Q]=react.useState(!1),[M,L]=react.useState(null),[k,N]=react.useState(null);react.useEffect((()=>{!function ht(r){return[setTimeout(r,0),setTimeout(r,10),setTimeout(r,50)]}((()=>{var p,R,c,b;null==(p=l.current)||p.dispatchEvent(new Event("input"));let t=null==(R=l.current)?void 0:R.selectionStart,o=null==(c=l.current)?void 0:c.selectionEnd,d=null==(b=l.current)?void 0:b.selectionDirection;null!==t&&null!==o&&(L(t),N(o),V.current.prev=[t,o,d])}))}),[i,j]),react.useEffect((()=>{void 0!==I&&i!==I&&I.length<e&&i.length===e&&(null==H||H(i))}),[e,H,I,i]);let O=function Tt({containerRef:r,inputRef:s,pushPasswordManagerStrategy:e,isFocused:u}){let[P,D]=react.useState(!1),[G,H]=react.useState(!1),[F,W]=react.useState(!1),Z=react.useMemo((()=>"none"!==e&&("increase-width"===e||"experimental-no-flickering"===e)&&P&&G),[P,G,e]),T=react.useCallback((()=>{let f=r.current,h=s.current;if(!f||!h||F||"none"===e)return;let a=f,z=a.getBoundingClientRect().left+a.offsetWidth-18,q=a.getBoundingClientRect().top+a.offsetHeight/2;0===document.querySelectorAll(xt).length&&document.elementFromPoint(z,q)===f||(D(!0),W(!0))}),[r,s,F,e]);return react.useEffect((()=>{let f=r.current;if(!f||"none"===e)return;function h(){let A=window.innerWidth-f.getBoundingClientRect().right;H(A>=40)}h();let a=setInterval(h,1e3);return()=>{clearInterval(a)}}),[r,e]),react.useEffect((()=>{let f=u||document.activeElement===s.current;if("none"===e||!f)return;let h=setTimeout(T,0),a=setTimeout(T,2e3),B=setTimeout(T,5e3),A=setTimeout((()=>{W(!0)}),6e3);return()=>{clearTimeout(h),clearTimeout(a),clearTimeout(B),clearTimeout(A)}}),[s,u,e,T]),{hasPWMBadge:P,willPushPWMBadge:Z,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:K,inputRef:l,pushPasswordManagerStrategy:F,isFocused:j}),st=react.useCallback((t=>{let o=t.currentTarget.value.slice(0,e);o.length>0&&m&&!m.test(o)?t.preventDefault():("string"==typeof I&&o.length<I.length&&document.dispatchEvent(new Event("selectionchange")),x(o))}),[e,x,I,m]),at=react.useCallback((()=>{var t;if(l.current){let o=Math.min(l.current.value.length,e-1),d=l.current.value.length;null==(t=l.current)||t.setSelectionRange(o,d),L(o),N(d)}Q(!0)}),[e]),ct=react.useCallback((t=>{var g,E;let o=l.current;if(!(W||J.current.isIOS&&t.clipboardData&&o))return;let d=t.clipboardData.getData("text/plain"),p=W?W(d):d;console.log({_content:d,content:p}),t.preventDefault();let R=null==(g=l.current)?void 0:g.selectionStart,c=null==(E=l.current)?void 0:E.selectionEnd,v=(R!==c?i.slice(0,R)+p+i.slice(c):i.slice(0,R)+p+i.slice(R)).slice(0,e);if(v.length>0&&m&&!m.test(v))return;o.value=v,x(v);let C=Math.min(v.length,e-1),_=v.length;o.setSelectionRange(C,_),L(C),N(_)}),[e,x,m,i]),It=react.useMemo((()=>({position:"relative",cursor:a.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"})),[a.disabled]),it=react.useMemo((()=>({position:"absolute",inset:0,width:O.willPushPWMBadge?`calc(100% + ${O.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:O.willPushPWMBadge?`inset(0 ${O.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"})),[O.PWM_BADGE_SPACE_WIDTH,O.willPushPWMBadge,u]),Mt=react.useMemo((()=>react.createElement("input",((r,s)=>At(r,kt(s)))(((r,s)=>{for(var e in s||(s={}))gt.call(s,e)&&vt(r,e,s[e]);if(Y)for(var e of Y(s))Et.call(s,e)&&vt(r,e,s[e]);return r})({autoComplete:a.autoComplete||"one-time-code"},a),{"data-input-otp":!0,"data-input-otp-placeholder-shown":0===i.length||void 0,"data-input-otp-mss":M,"data-input-otp-mse":k,inputMode:G,pattern:null==m?void 0:m.source,"aria-placeholder":D,style:it,maxLength:e,value:i,ref:l,onPaste:t=>{var o;ct(t),null==(o=a.onPaste)||o.call(a,t)},onChange:st,onMouseOver:t=>{var o;rt(!0),null==(o=a.onMouseOver)||o.call(a,t)},onMouseLeave:t=>{var o;rt(!1),null==(o=a.onMouseLeave)||o.call(a,t)},onFocus:t=>{var o;at(),null==(o=a.onFocus)||o.call(a,t)},onBlur:t=>{var o;Q(!1),null==(o=a.onBlur)||o.call(a,t)}}))),[st,at,ct,G,it,e,k,M,a,null==m?void 0:m.source,i]),tt=react.useMemo((()=>({slots:Array.from({length:e}).map(((t,o)=>{var c;let d=j&&null!==M&&null!==k&&(M===k&&o===M||o>=M&&o<k),p=void 0!==i[o]?i[o]:null;return{char:p,placeholderChar:void 0!==i[0]?null:null!=(c=null==D?void 0:D[o])?c:null,isActive:d,hasFakeCaret:d&&null===p}})),isFocused:j,isHovering:!a.disabled&&ot})),[j,ot,e,k,M,a.disabled,i]),Ct=react.useMemo((()=>f?f(tt):react.createElement(jt.Provider,{value:tt},h)),[h,tt,f]);return react.createElement(react.Fragment,null,null!==T&&react.createElement("noscript",null,react.createElement("style",null,T)),react.createElement("div",{ref:K,"data-input-otp-container":!0,style:It,className:Z},Ct,react.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Mt)))}));function $(r,s){try{r.insertRule(s)}catch(e){console.error("input-otp could not insert CSS rule:",s)}}Lt.displayName="Input";var Nt="\n[data-input-otp] {\n  --nojs-bg: white !important;\n  --nojs-fg: black !important;\n\n  background-color: var(--nojs-bg) !important;\n  color: var(--nojs-fg) !important;\n  caret-color: var(--nojs-fg) !important;\n  letter-spacing: .25em !important;\n  text-align: center !important;\n  border: 1px solid var(--nojs-fg) !important;\n  border-radius: 4px !important;\n  width: 100% !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-input-otp] {\n    --nojs-bg: black !important;\n    --nojs-fg: white !important;\n  }\n}";const Dot=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var utils=__webpack_require__("./lib/utils.ts");const InputOTP=react.forwardRef((({className,containerClassName,...props},ref)=>(0,jsx_runtime.jsx)(Lt,{ref,containerClassName:(0,utils.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",containerClassName),className:(0,utils.cn)("disabled:cursor-not-allowed",className),...props})));InputOTP.displayName="InputOTP";const InputOTPGroup=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("flex items-center",className),...props})));InputOTPGroup.displayName="InputOTPGroup";const InputOTPSlot=react.forwardRef((({index,className,...props},ref)=>{const inputOTPContext=react.useContext(jt),{char,hasFakeCaret,isActive}=inputOTPContext.slots[index];return(0,jsx_runtime.jsxs)("div",{ref,className:(0,utils.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-neutral-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-neutral-800",isActive&&"z-10 ring-2 ring-neutral-950 ring-offset-white dark:ring-neutral-300 dark:ring-offset-neutral-950",className),...props,children:[char,hasFakeCaret&&(0,jsx_runtime.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,jsx_runtime.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-neutral-950 duration-1000 dark:bg-neutral-50"})})]})}));InputOTPSlot.displayName="InputOTPSlot";const InputOTPSeparator=react.forwardRef((({...props},ref)=>(0,jsx_runtime.jsx)("div",{ref,role:"separator",...props,children:(0,jsx_runtime.jsx)(Dot,{})})));InputOTPSeparator.displayName="InputOTPSeparator",InputOTP.__docgenInfo={description:"",methods:[],displayName:"InputOTP"},InputOTPGroup.__docgenInfo={description:"",methods:[],displayName:"InputOTPGroup"},InputOTPSlot.__docgenInfo={description:"",methods:[],displayName:"InputOTPSlot",props:{index:{required:!0,tsType:{name:"number"},description:""}}},InputOTPSeparator.__docgenInfo={description:"",methods:[],displayName:"InputOTPSeparator"};const input_otp_stories={title:"UI/InputOTP",component:InputOTP,parameters:{layout:"centered"},tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsx)(InputOTP,{maxLength:6,children:(0,jsx_runtime.jsxs)(InputOTPGroup,{children:[(0,jsx_runtime.jsx)(InputOTPSlot,{index:0}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:1}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:2}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:3}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:4}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:5})]})})},WithSeparator={render:()=>(0,jsx_runtime.jsx)(InputOTP,{maxLength:6,children:(0,jsx_runtime.jsxs)(InputOTPGroup,{className:"gap-2",children:[(0,jsx_runtime.jsx)(InputOTPSlot,{index:0}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:1}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:2}),(0,jsx_runtime.jsx)("div",{className:"flex items-center",children:"-"}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:3}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:4}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:5})]})})},__namedExportsOrder=["Default","WithSeparator"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <InputOTP maxLength={6}>\n      <InputOTPGroup>\n        <InputOTPSlot index={0} />\n        <InputOTPSlot index={1} />\n        <InputOTPSlot index={2} />\n        <InputOTPSlot index={3} />\n        <InputOTPSlot index={4} />\n        <InputOTPSlot index={5} />\n      </InputOTPGroup>\n    </InputOTP>\n}",...Default.parameters?.docs?.source}}},WithSeparator.parameters={...WithSeparator.parameters,docs:{...WithSeparator.parameters?.docs,source:{originalSource:'{\n  render: () => <InputOTP maxLength={6}>\n      <InputOTPGroup className="gap-2">\n        <InputOTPSlot index={0} />\n        <InputOTPSlot index={1} />\n        <InputOTPSlot index={2} />\n        <div className="flex items-center">-</div>\n        <InputOTPSlot index={3} />\n        <InputOTPSlot index={4} />\n        <InputOTPSlot index={5} />\n      </InputOTPGroup>\n    </InputOTP>\n}',...WithSeparator.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}}}]);