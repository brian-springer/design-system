"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[422],{"./stories/ui/switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>switch_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");const Switch=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.bL,{className:(0,utils.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",className),...props,ref,children:(0,jsx_runtime.jsx)(dist.zi,{className:(0,utils.cn)("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950")})})));Switch.displayName=dist.bL.displayName,Switch.__docgenInfo={description:"",methods:[]};var label=__webpack_require__("./components/ui/label.tsx");const switch_stories={title:"UI/Switch",component:Switch,parameters:{layout:"centered"},tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsx)(Switch,{})},SwitchWithLabel=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(Switch,{id:"airplane-mode"}),(0,jsx_runtime.jsx)(label.J,{htmlFor:"airplane-mode",children:"Airplane Mode"})]}),WithLabel={render:()=>(0,jsx_runtime.jsx)(SwitchWithLabel,{})},Disabled={render:()=>(0,jsx_runtime.jsx)(Switch,{disabled:!0})},Checked={render:()=>(0,jsx_runtime.jsx)(Switch,{defaultChecked:!0})},__namedExportsOrder=["Default","WithLabel","Disabled","Checked"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <Switch />\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  render: () => <SwitchWithLabel />\n}",...WithLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: () => <Switch disabled />\n}",...Disabled.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  render: () => <Switch defaultChecked />\n}",...Checked.parameters?.docs?.source}}}},"./components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(),className),...props})));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b.displayName,Label.__docgenInfo={description:"",methods:[]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);