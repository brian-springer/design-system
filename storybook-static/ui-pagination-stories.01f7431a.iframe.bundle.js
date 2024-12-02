/*! For license information please see ui-pagination-stories.01f7431a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[6222],{"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./stories/ui/pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Simple:()=>Simple,WithoutLinks:()=>WithoutLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pagination_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chevron_left=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-left.js"),chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js"),ellipsis=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/ellipsis.js"),utils=__webpack_require__("./lib/utils.ts"),ui_button=__webpack_require__("./components/ui/button.tsx");const Pagination=({className,...props})=>(0,jsx_runtime.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,utils.cn)("mx-auto flex w-full justify-center",className),...props});Pagination.displayName="Pagination";const PaginationContent=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("ul",{ref,className:(0,utils.cn)("flex flex-row items-center gap-1",className),...props})));PaginationContent.displayName="PaginationContent";const PaginationItem=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("li",{ref,className:(0,utils.cn)("",className),...props})));PaginationItem.displayName="PaginationItem";const PaginationLink=({className,isActive,size="icon",...props})=>(0,jsx_runtime.jsx)("a",{"aria-current":isActive?"page":void 0,className:(0,utils.cn)((0,ui_button.r)({variant:isActive?"outline":"ghost",size}),className),...props});PaginationLink.displayName="PaginationLink";const PaginationPrevious=({className,...props})=>(0,jsx_runtime.jsxs)(PaginationLink,{"aria-label":"Go to previous page",size:"default",className:(0,utils.cn)("gap-1 pl-2.5",className),...props,children:[(0,jsx_runtime.jsx)(chevron_left.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{children:"Previous"})]});PaginationPrevious.displayName="PaginationPrevious";const PaginationNext=({className,...props})=>(0,jsx_runtime.jsxs)(PaginationLink,{"aria-label":"Go to next page",size:"default",className:(0,utils.cn)("gap-1 pr-2.5",className),...props,children:[(0,jsx_runtime.jsx)("span",{children:"Next"}),(0,jsx_runtime.jsx)(chevron_right.A,{className:"h-4 w-4"})]});PaginationNext.displayName="PaginationNext";const PaginationEllipsis=({className,...props})=>(0,jsx_runtime.jsxs)("span",{"aria-hidden":!0,className:(0,utils.cn)("flex h-9 w-9 items-center justify-center",className),...props,children:[(0,jsx_runtime.jsx)(ellipsis.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"More pages"})]});PaginationEllipsis.displayName="PaginationEllipsis",Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination"},PaginationContent.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"},PaginationEllipsis.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"},PaginationItem.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"},PaginationLink.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}},PaginationNext.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"},PaginationPrevious.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const pagination_stories={title:"UI/Pagination",component:Pagination,parameters:{layout:"centered"},tags:["autodocs"]},PaginationDemo=()=>(0,jsx_runtime.jsx)(Pagination,{children:(0,jsx_runtime.jsxs)(PaginationContent,{children:[(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationPrevious,{href:"#"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",children:"1"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",isActive:!0,children:"2"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",children:"3"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationEllipsis,{})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationNext,{href:"#"})})]})}),Default={render:()=>(0,jsx_runtime.jsx)(PaginationDemo,{})},SimplePaginationDemo=()=>(0,jsx_runtime.jsx)(Pagination,{children:(0,jsx_runtime.jsxs)(PaginationContent,{children:[(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationPrevious,{href:"#"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",children:"1"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",children:"2"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationLink,{href:"#",children:"3"})}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationNext,{href:"#"})})]})}),Simple={render:()=>(0,jsx_runtime.jsx)(SimplePaginationDemo,{})},PaginationWithoutLinks=()=>(0,jsx_runtime.jsx)(Pagination,{children:(0,jsx_runtime.jsxs)(PaginationContent,{children:[(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationPrevious,{})}),(0,jsx_runtime.jsx)(PaginationItem,{children:"1"}),(0,jsx_runtime.jsx)(PaginationItem,{children:"2"}),(0,jsx_runtime.jsx)(PaginationItem,{children:"3"}),(0,jsx_runtime.jsx)(PaginationItem,{children:(0,jsx_runtime.jsx)(PaginationNext,{})})]})}),WithoutLinks={render:()=>(0,jsx_runtime.jsx)(PaginationWithoutLinks,{})},__namedExportsOrder=["Default","Simple","WithoutLinks"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <PaginationDemo />\n}",...Default.parameters?.docs?.source}}},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  render: () => <SimplePaginationDemo />\n}",...Simple.parameters?.docs?.source}}},WithoutLinks.parameters={...WithoutLinks.parameters,docs:{...WithoutLinks.parameters?.docs,source:{originalSource:"{\n  render: () => <PaginationWithoutLinks />\n}",...WithoutLinks.parameters?.docs?.source}}}},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-sky-950 dark:focus-visible:ring-sky-300",{variants:{variant:{default:"bg-sky-800 text-sky-50 hover:bg-sky-800/90 dark:bg-sky-600 dark:text-sky-50 dark:hover:bg-sky-600/90",destructive:"bg-red-500 text-sky-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-sky-50 dark:hover:bg-red-900/90",outline:"border border-sky-200 bg-white hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50",secondary:"bg-sky-100 text-sky-800 hover:bg-sky-100/80 dark:bg-sky-800 dark:text-sky-50 dark:hover:bg-sky-800/80",ghost:"hover:bg-sky-100 hover:text-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",link:"text-sky-800 underline-offset-4 hover:underline dark:text-sky-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.$,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/chevron-left.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronLeft});const ChevronLeft=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},"./node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])}}]);