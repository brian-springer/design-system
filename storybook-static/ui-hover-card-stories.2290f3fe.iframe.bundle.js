"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[5883],{"./stories/ui/hover-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hover_card_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");const HoverCard=dist.bL,HoverCardTrigger=dist.l9,HoverCardContent=react.forwardRef((({className,align="center",sideOffset=4,...props},ref)=>(0,jsx_runtime.jsx)(dist.UC,{ref,align,sideOffset,className:(0,utils.cn)("z-50 w-64 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",className),...props})));HoverCardContent.displayName=dist.UC.displayName,HoverCardContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};var ui_button=__webpack_require__("./components/ui/button.tsx"),calendar_days=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/calendar-days.js"),avatar=__webpack_require__("./components/ui/avatar.tsx");const hover_card_stories={title:"UI/HoverCard",component:HoverCard,parameters:{layout:"centered"},tags:["autodocs"]},HoverCardDemo=()=>(0,jsx_runtime.jsxs)(HoverCard,{children:[(0,jsx_runtime.jsx)(HoverCardTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)(ui_button.$,{variant:"link",children:"@nextjs"})}),(0,jsx_runtime.jsx)(HoverCardContent,{className:"w-80",children:(0,jsx_runtime.jsxs)("div",{className:"flex justify-between space-x-4",children:[(0,jsx_runtime.jsxs)(avatar.eu,{children:[(0,jsx_runtime.jsx)(avatar.BK,{src:"https://github.com/vercel.png"}),(0,jsx_runtime.jsx)(avatar.q5,{children:"VC"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-1",children:[(0,jsx_runtime.jsx)("h4",{className:"text-sm font-semibold",children:"@nextjs"}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:"The React Framework – created and maintained by @vercel."}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center pt-2",children:[(0,jsx_runtime.jsx)(calendar_days.A,{className:"mr-2 h-4 w-4 opacity-70"}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})]})]})]})})]}),Default={render:()=>(0,jsx_runtime.jsx)(HoverCardDemo,{})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <HoverCardDemo />\n}",...Default.parameters?.docs?.source}}}},"./components/ui/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BK:()=>AvatarImage,eu:()=>Avatar,q5:()=>AvatarFallback});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils.ts");const Avatar=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.bL,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className),...props})));Avatar.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.bL.displayName;const AvatarImage=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__._V,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("aspect-square h-full w-full",className),...props})));AvatarImage.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__._V.displayName;const AvatarFallback=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.H4,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",className),...props})));AvatarFallback.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.H4.displayName,Avatar.__docgenInfo={description:"",methods:[]},AvatarImage.__docgenInfo={description:"",methods:[]},AvatarFallback.__docgenInfo={description:"",methods:[]}},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-sky-950 dark:focus-visible:ring-sky-300",{variants:{variant:{default:"bg-sky-800 text-sky-50 hover:bg-sky-800/90 dark:bg-sky-600 dark:text-sky-50 dark:hover:bg-sky-600/90",destructive:"bg-red-500 text-sky-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-sky-50 dark:hover:bg-red-900/90",outline:"border border-sky-200 bg-white hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50",secondary:"bg-sky-100 text-sky-800 hover:bg-sky-100/80 dark:bg-sky-800 dark:text-sky-50 dark:hover:bg-sky-800/80",ghost:"hover:bg-sky-100 hover:text-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",link:"text-sky-800 underline-offset-4 hover:underline dark:text-sky-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);