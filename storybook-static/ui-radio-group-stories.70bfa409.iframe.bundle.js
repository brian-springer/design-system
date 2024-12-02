"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[5793],{"./stories/ui/radio-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithDescription:()=>WithDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>radio_group_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-radio-group/dist/index.mjs"),circle=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle.js"),utils=__webpack_require__("./lib/utils.ts");const RadioGroup=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.bL,{className:(0,utils.cn)("grid gap-2",className),...props,ref})));RadioGroup.displayName=dist.bL.displayName;const RadioGroupItem=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.q7,{ref,className:(0,utils.cn)("aspect-square h-4 w-4 rounded-full border border-neutral-200 border-neutral-900 text-neutral-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-50 dark:text-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",className),...props,children:(0,jsx_runtime.jsx)(dist.C1,{className:"flex items-center justify-center",children:(0,jsx_runtime.jsx)(circle.A,{className:"h-2.5 w-2.5 fill-current text-current"})})})));RadioGroupItem.displayName=dist.q7.displayName,RadioGroup.__docgenInfo={description:"",methods:[]},RadioGroupItem.__docgenInfo={description:"",methods:[]};var label=__webpack_require__("./components/ui/label.tsx");const radio_group_stories={title:"UI/RadioGroup",component:RadioGroup,tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsxs)(RadioGroup,{defaultValue:"option-one",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(RadioGroupItem,{value:"option-one",id:"option-one"}),(0,jsx_runtime.jsx)(label.J,{htmlFor:"option-one",children:"Option One"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(RadioGroupItem,{value:"option-two",id:"option-two"}),(0,jsx_runtime.jsx)(label.J,{htmlFor:"option-two",children:"Option Two"})]})]})},WithDescription={render:()=>(0,jsx_runtime.jsxs)(RadioGroup,{defaultValue:"comfortable",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(RadioGroupItem,{value:"default",id:"r1"}),(0,jsx_runtime.jsxs)("div",{className:"grid gap-1.5 leading-none",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"r1",children:"Default"}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"The default system spacing."})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(RadioGroupItem,{value:"comfortable",id:"r2"}),(0,jsx_runtime.jsxs)("div",{className:"grid gap-1.5 leading-none",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"r2",children:"Comfortable"}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"Increased spacing for better readability."})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,jsx_runtime.jsx)(RadioGroupItem,{value:"compact",id:"r3"}),(0,jsx_runtime.jsxs)("div",{className:"grid gap-1.5 leading-none",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"r3",children:"Compact"}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"Reduced spacing to show more content."})]})]})]})},__namedExportsOrder=["Default","WithDescription"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioGroup defaultValue="option-one">\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="option-one" id="option-one" />\n        <Label htmlFor="option-one">Option One</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="option-two" id="option-two" />\n        <Label htmlFor="option-two">Option Two</Label>\n      </div>\n    </RadioGroup>\n}',...Default.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioGroup defaultValue="comfortable">\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="default" id="r1" />\n        <div className="grid gap-1.5 leading-none">\n          <Label htmlFor="r1">Default</Label>\n          <p className="text-sm text-muted-foreground">\n            The default system spacing.\n          </p>\n        </div>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="comfortable" id="r2" />\n        <div className="grid gap-1.5 leading-none">\n          <Label htmlFor="r2">Comfortable</Label>\n          <p className="text-sm text-muted-foreground">\n            Increased spacing for better readability.\n          </p>\n        </div>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="compact" id="r3" />\n        <div className="grid gap-1.5 leading-none">\n          <Label htmlFor="r3">Compact</Label>\n          <p className="text-sm text-muted-foreground">\n            Reduced spacing to show more content.\n          </p>\n        </div>\n      </div>\n    </RadioGroup>\n}',...WithDescription.parameters?.docs?.source}}}},"./components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(),className),...props})));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b.displayName,Label.__docgenInfo={description:"",methods:[]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);