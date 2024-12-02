/*! For license information please see ui-breadcrumb-stories.a2a547f9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[585],{"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./stories/ui/breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LongBreadcrumb:()=>LongBreadcrumb,WithCustomSeparator:()=>WithCustomSeparator,WithEllipsis:()=>WithEllipsis,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumb_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js"),ellipsis=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/ellipsis.js"),utils=__webpack_require__("./lib/utils.ts");const Breadcrumb=react.forwardRef((({...props},ref)=>(0,jsx_runtime.jsx)("nav",{ref,"aria-label":"breadcrumb",...props})));Breadcrumb.displayName="Breadcrumb";const BreadcrumbList=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("ol",{ref,className:(0,utils.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-neutral-500 sm:gap-2.5 dark:text-neutral-400",className),...props})));BreadcrumbList.displayName="BreadcrumbList";const BreadcrumbItem=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("li",{ref,className:(0,utils.cn)("inline-flex items-center gap-1.5",className),...props})));BreadcrumbItem.displayName="BreadcrumbItem";const BreadcrumbLink=react.forwardRef((({asChild,className,...props},ref)=>{const Comp=asChild?dist.DX:"a";return(0,jsx_runtime.jsx)(Comp,{ref,className:(0,utils.cn)("transition-colors hover:text-neutral-950 dark:hover:text-neutral-50",className),...props})}));BreadcrumbLink.displayName="BreadcrumbLink";const BreadcrumbPage=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("span",{ref,role:"link","aria-disabled":"true","aria-current":"page",className:(0,utils.cn)("font-normal text-neutral-950 dark:text-neutral-50",className),...props})));BreadcrumbPage.displayName="BreadcrumbPage";const BreadcrumbSeparator=({children,className,...props})=>(0,jsx_runtime.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,utils.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5",className),...props,children:null!=children?children:(0,jsx_runtime.jsx)(chevron_right.A,{})});BreadcrumbSeparator.displayName="BreadcrumbSeparator";const BreadcrumbEllipsis=({className,...props})=>(0,jsx_runtime.jsxs)("span",{role:"presentation","aria-hidden":"true",className:(0,utils.cn)("flex h-9 w-9 items-center justify-center",className),...props,children:[(0,jsx_runtime.jsx)(ellipsis.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"More"})]});BreadcrumbEllipsis.displayName="BreadcrumbElipssis",Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},BreadcrumbList.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"},BreadcrumbItem.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"},BreadcrumbLink.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}},BreadcrumbPage.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"},BreadcrumbSeparator.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"},BreadcrumbEllipsis.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"};const breadcrumb_stories={title:"UI/Breadcrumb",component:Breadcrumb,tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsx)(Breadcrumb,{children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/products",children:"Products"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"Category"})})]})})},WithCustomSeparator={render:()=>(0,jsx_runtime.jsx)(Breadcrumb,{children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{children:"→"}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/products",children:"Products"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{children:"→"}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"Category"})})]})})},WithEllipsis={render:()=>(0,jsx_runtime.jsx)(Breadcrumb,{children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbEllipsis,{})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/products",children:"Products"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"Category"})})]})})},LongBreadcrumb={render:()=>(0,jsx_runtime.jsx)(Breadcrumb,{children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/products",children:"Products"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/electronics",children:"Electronics"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/computers",children:"Computers"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"/laptops",children:"Laptops"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"MacBook Pro"})})]})})},__namedExportsOrder=["Default","WithCustomSeparator","WithEllipsis","LongBreadcrumb"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/">Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>Category</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n}',...Default.parameters?.docs?.source}}},WithCustomSeparator.parameters={...WithCustomSeparator.parameters,docs:{...WithCustomSeparator.parameters?.docs,source:{originalSource:'{\n  render: () => <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/">Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>→</BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>→</BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage>Category</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n}',...WithCustomSeparator.parameters?.docs?.source}}},WithEllipsis.parameters={...WithEllipsis.parameters,docs:{...WithEllipsis.parameters?.docs,source:{originalSource:'{\n  render: () => <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/">Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbEllipsis />\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>Category</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n}',...WithEllipsis.parameters?.docs?.source}}},LongBreadcrumb.parameters={...LongBreadcrumb.parameters,docs:{...LongBreadcrumb.parameters?.docs,source:{originalSource:'{\n  render: () => <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/">Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/computers">Computers</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href="/laptops">Laptops</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>MacBook Pro</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n}',...LongBreadcrumb.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])}}]);