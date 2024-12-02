"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[2989],{"./stories/ui/drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>drawer_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ui_button=__webpack_require__("./components/ui/button.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/vaul/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");const Drawer=({shouldScaleBackground=!0,...props})=>(0,jsx_runtime.jsx)(dist._s.Root,{shouldScaleBackground,...props});Drawer.displayName="Drawer";const DrawerTrigger=dist._s.Trigger,DrawerPortal=dist._s.Portal,DrawerClose=dist._s.Close,DrawerOverlay=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist._s.Overlay,{ref,className:(0,utils.cn)("fixed inset-0 z-50 bg-black/80",className),...props})));DrawerOverlay.displayName=dist._s.Overlay.displayName;const DrawerContent=react.forwardRef((({className,children,...props},ref)=>(0,jsx_runtime.jsxs)(DrawerPortal,{children:[(0,jsx_runtime.jsx)(DrawerOverlay,{}),(0,jsx_runtime.jsxs)(dist._s.Content,{ref,className:(0,utils.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",className),...props,children:[(0,jsx_runtime.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-100 dark:bg-neutral-800"}),children]})]})));DrawerContent.displayName="DrawerContent";const DrawerHeader=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("grid gap-1.5 p-4 text-center sm:text-left",className),...props});DrawerHeader.displayName="DrawerHeader";const DrawerFooter=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("mt-auto flex flex-col gap-2 p-4",className),...props});DrawerFooter.displayName="DrawerFooter";const DrawerTitle=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist._s.Title,{ref,className:(0,utils.cn)("text-lg font-semibold leading-none tracking-tight",className),...props})));DrawerTitle.displayName=dist._s.Title.displayName;const DrawerDescription=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist._s.Description,{ref,className:(0,utils.cn)("text-sm text-neutral-500 dark:text-neutral-400",className),...props})));DrawerDescription.displayName=dist._s.Description.displayName,Drawer.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{shouldScaleBackground:{defaultValue:{value:"true",computed:!1},required:!1}}},DrawerOverlay.__docgenInfo={description:"",methods:[]},DrawerContent.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"},DrawerHeader.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"},DrawerFooter.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"},DrawerTitle.__docgenInfo={description:"",methods:[]},DrawerDescription.__docgenInfo={description:"",methods:[]};const drawer_stories={title:"UI/Drawer",component:Drawer,parameters:{layout:"centered"},tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsxs)(Drawer,{children:[(0,jsx_runtime.jsx)(DrawerTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)(ui_button.$,{variant:"outline",children:"Open Drawer"})}),(0,jsx_runtime.jsxs)(DrawerContent,{children:[(0,jsx_runtime.jsxs)(DrawerHeader,{children:[(0,jsx_runtime.jsx)(DrawerTitle,{children:"Edit profile"}),(0,jsx_runtime.jsx)(DrawerDescription,{children:"Make changes to your profile here. Click save when you're done."})]}),(0,jsx_runtime.jsx)("div",{className:"p-4",children:(0,jsx_runtime.jsx)("p",{children:"Drawer content goes here..."})}),(0,jsx_runtime.jsxs)(DrawerFooter,{children:[(0,jsx_runtime.jsx)(ui_button.$,{children:"Save changes"}),(0,jsx_runtime.jsx)(DrawerClose,{asChild:!0,children:(0,jsx_runtime.jsx)(ui_button.$,{variant:"outline",children:"Cancel"})})]})]})]})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <Drawer>\n      <DrawerTrigger asChild>\n        <Button variant="outline">Open Drawer</Button>\n      </DrawerTrigger>\n      <DrawerContent>\n        <DrawerHeader>\n          <DrawerTitle>Edit profile</DrawerTitle>\n          <DrawerDescription>\n            Make changes to your profile here. Click save when you\'re done.\n          </DrawerDescription>\n        </DrawerHeader>\n        <div className="p-4">\n          <p>Drawer content goes here...</p>\n        </div>\n        <DrawerFooter>\n          <Button>Save changes</Button>\n          <DrawerClose asChild>\n            <Button variant="outline">Cancel</Button>\n          </DrawerClose>\n        </DrawerFooter>\n      </DrawerContent>\n    </Drawer>\n}',...Default.parameters?.docs?.source}}}},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-sky-950 dark:focus-visible:ring-sky-300",{variants:{variant:{default:"bg-sky-800 text-sky-50 hover:bg-sky-800/90 dark:bg-sky-600 dark:text-sky-50 dark:hover:bg-sky-600/90",destructive:"bg-red-500 text-sky-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-sky-50 dark:hover:bg-red-900/90",outline:"border border-sky-200 bg-white hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50",secondary:"bg-sky-100 text-sky-800 hover:bg-sky-100/80 dark:bg-sky-800 dark:text-sky-50 dark:hover:bg-sky-800/80",ghost:"hover:bg-sky-100 hover:text-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",link:"text-sky-800 underline-offset-4 hover:underline dark:text-sky-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);