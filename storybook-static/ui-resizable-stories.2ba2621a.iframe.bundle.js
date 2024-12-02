"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[901],{"./stories/ui/resizable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ThreePanel:()=>ThreePanel,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>resizable_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),grip_vertical=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/grip-vertical.js"),react_resizable_panels_browser_esm=__webpack_require__("./node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js"),utils=__webpack_require__("./lib/utils.ts");const ResizablePanelGroup=({className,...props})=>(0,jsx_runtime.jsx)(react_resizable_panels_browser_esm.YZ,{className:(0,utils.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",className),...props}),ResizablePanel=react_resizable_panels_browser_esm.Zk,ResizableHandle=({withHandle,className,...props})=>(0,jsx_runtime.jsx)(react_resizable_panels_browser_esm.TW,{className:(0,utils.cn)("relative flex w-px items-center justify-center bg-neutral-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-neutral-800 dark:focus-visible:ring-neutral-300",className),...props,children:withHandle&&(0,jsx_runtime.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800",children:(0,jsx_runtime.jsx)(grip_vertical.A,{className:"h-2.5 w-2.5"})})});ResizablePanelGroup.__docgenInfo={description:"",methods:[],displayName:"ResizablePanelGroup"},ResizableHandle.__docgenInfo={description:"",methods:[],displayName:"ResizableHandle",props:{withHandle:{required:!1,tsType:{name:"boolean"},description:""}}};const resizable_stories={title:"UI/Resizable",component:ResizablePanel,parameters:{layout:"centered"},tags:["autodocs"]},ResizableDemo=()=>(0,jsx_runtime.jsxs)(ResizablePanelGroup,{direction:"horizontal",className:"min-h-[200px] max-w-md rounded-lg border",children:[(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:50,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"One"})})}),(0,jsx_runtime.jsx)(ResizableHandle,{}),(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:50,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Two"})})})]}),Default={render:()=>(0,jsx_runtime.jsx)(ResizableDemo,{})},VerticalResizableDemo=()=>(0,jsx_runtime.jsxs)(ResizablePanelGroup,{direction:"vertical",className:"min-h-[400px] max-w-md rounded-lg border",children:[(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:25,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Header"})})}),(0,jsx_runtime.jsx)(ResizableHandle,{}),(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:60,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Content"})})}),(0,jsx_runtime.jsx)(ResizableHandle,{}),(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:15,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Footer"})})})]}),Vertical={render:()=>(0,jsx_runtime.jsx)(VerticalResizableDemo,{})},ThreePanelResizableDemo=()=>(0,jsx_runtime.jsxs)(ResizablePanelGroup,{direction:"horizontal",className:"min-h-[200px] max-w-md rounded-lg border",children:[(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:30,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Sidebar"})})}),(0,jsx_runtime.jsx)(ResizableHandle,{}),(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:40,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Content"})})}),(0,jsx_runtime.jsx)(ResizableHandle,{}),(0,jsx_runtime.jsx)(ResizablePanel,{defaultSize:30,children:(0,jsx_runtime.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:"Preview"})})})]}),ThreePanel={render:()=>(0,jsx_runtime.jsx)(ThreePanelResizableDemo,{})},__namedExportsOrder=["Default","Vertical","ThreePanel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <ResizableDemo />\n}",...Default.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  render: () => <VerticalResizableDemo />\n}",...Vertical.parameters?.docs?.source}}},ThreePanel.parameters={...ThreePanel.parameters,docs:{...ThreePanel.parameters?.docs,source:{originalSource:"{\n  render: () => <ThreePanelResizableDemo />\n}",...ThreePanel.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);