/*! For license information please see ui-alert-stories.b1ec6a9c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[8528],{"./stories/ui/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Destructive:()=>Destructive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");const alertVariants=(0,dist.F)("relative w-full rounded-lg border border-neutral-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),Alert=react.forwardRef((({className,variant,...props},ref)=>(0,jsx_runtime.jsx)("div",{ref,role:"alert",className:(0,utils.cn)(alertVariants({variant}),className),...props})));Alert.displayName="Alert";const AlertTitle=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("h5",{ref,className:(0,utils.cn)("mb-1 font-medium leading-none tracking-tight",className),...props})));AlertTitle.displayName="AlertTitle";const AlertDescription=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("text-sm [&_p]:leading-relaxed",className),...props})));AlertDescription.displayName="AlertDescription",Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"},AlertTitle.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"},AlertDescription.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};var createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js");const Terminal=(0,createLucideIcon.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),CircleAlert=(0,createLucideIcon.A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),alert_stories={title:"UI/Alert",component:Alert,tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsxs)(Alert,{children:[(0,jsx_runtime.jsx)(Terminal,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)(AlertTitle,{children:"Heads up!"}),(0,jsx_runtime.jsx)(AlertDescription,{children:"You can add components and dependencies to your app using the cli."})]})},Destructive={render:()=>(0,jsx_runtime.jsxs)(Alert,{variant:"destructive",children:[(0,jsx_runtime.jsx)(CircleAlert,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)(AlertTitle,{children:"Error"}),(0,jsx_runtime.jsx)(AlertDescription,{children:"Your session has expired. Please log in again."})]})},__namedExportsOrder=["Default","Destructive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert>\n      <Terminal className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>\n        You can add components and dependencies to your app using the cli.\n      </AlertDescription>\n    </Alert>\n}',...Default.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert variant="destructive">\n      <AlertCircle className="h-4 w-4" />\n      <AlertTitle>Error</AlertTitle>\n      <AlertDescription>\n        Your session has expired. Please log in again.\n      </AlertDescription>\n    </Alert>\n}',...Destructive.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.$,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}}}]);