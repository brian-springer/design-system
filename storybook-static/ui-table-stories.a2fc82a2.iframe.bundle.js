"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[7242],{"./stories/ui/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoFooter:()=>NoFooter,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./lib/utils.ts");const Table=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("div",{className:"relative w-full overflow-auto",children:(0,jsx_runtime.jsx)("table",{ref,className:(0,utils.cn)("w-full caption-bottom text-sm",className),...props})})));Table.displayName="Table";const TableHeader=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("thead",{ref,className:(0,utils.cn)("[&_tr]:border-b",className),...props})));TableHeader.displayName="TableHeader";const TableBody=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("tbody",{ref,className:(0,utils.cn)("[&_tr:last-child]:border-0",className),...props})));TableBody.displayName="TableBody";const TableFooter=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("tfoot",{ref,className:(0,utils.cn)("border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",className),...props})));TableFooter.displayName="TableFooter";const TableRow=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("tr",{ref,className:(0,utils.cn)("border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",className),...props})));TableRow.displayName="TableRow";const TableHead=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("th",{ref,className:(0,utils.cn)("h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 dark:text-neutral-400",className),...props})));TableHead.displayName="TableHead";const TableCell=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("td",{ref,className:(0,utils.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",className),...props})));TableCell.displayName="TableCell";const TableCaption=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)("caption",{ref,className:(0,utils.cn)("mt-4 text-sm text-neutral-500 dark:text-neutral-400",className),...props})));TableCaption.displayName="TableCaption",Table.__docgenInfo={description:"",methods:[],displayName:"Table"},TableHeader.__docgenInfo={description:"",methods:[],displayName:"TableHeader"},TableBody.__docgenInfo={description:"",methods:[],displayName:"TableBody"},TableFooter.__docgenInfo={description:"",methods:[],displayName:"TableFooter"},TableHead.__docgenInfo={description:"",methods:[],displayName:"TableHead"},TableRow.__docgenInfo={description:"",methods:[],displayName:"TableRow"},TableCell.__docgenInfo={description:"",methods:[],displayName:"TableCell"},TableCaption.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const table_stories={title:"UI/Table",component:Table,parameters:{layout:"centered"},tags:["autodocs"]},invoices=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"}],TableDemo=()=>(0,jsx_runtime.jsxs)(Table,{children:[(0,jsx_runtime.jsx)(TableCaption,{children:"A list of your recent invoices."}),(0,jsx_runtime.jsx)(TableHeader,{children:(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableHead,{className:"w-[100px]",children:"Invoice"}),(0,jsx_runtime.jsx)(TableHead,{children:"Status"}),(0,jsx_runtime.jsx)(TableHead,{children:"Method"}),(0,jsx_runtime.jsx)(TableHead,{className:"text-right",children:"Amount"})]})}),(0,jsx_runtime.jsx)(TableBody,{children:invoices.map((invoice=>(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{className:"font-medium",children:invoice.invoice}),(0,jsx_runtime.jsx)(TableCell,{children:invoice.paymentStatus}),(0,jsx_runtime.jsx)(TableCell,{children:invoice.paymentMethod}),(0,jsx_runtime.jsx)(TableCell,{className:"text-right",children:invoice.totalAmount})]},invoice.invoice)))}),(0,jsx_runtime.jsx)(TableFooter,{children:(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{colSpan:3,children:"Total"}),(0,jsx_runtime.jsx)(TableCell,{className:"text-right",children:"$1,750.00"})]})})]}),Default={render:()=>(0,jsx_runtime.jsx)(TableDemo,{})},SimpleTableDemo=()=>(0,jsx_runtime.jsxs)(Table,{children:[(0,jsx_runtime.jsx)(TableHeader,{children:(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableHead,{children:"Name"}),(0,jsx_runtime.jsx)(TableHead,{children:"Email"}),(0,jsx_runtime.jsx)(TableHead,{children:"Role"})]})}),(0,jsx_runtime.jsxs)(TableBody,{children:[(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{children:"John Doe"}),(0,jsx_runtime.jsx)(TableCell,{children:"john@example.com"}),(0,jsx_runtime.jsx)(TableCell,{children:"Admin"})]}),(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{children:"Jane Smith"}),(0,jsx_runtime.jsx)(TableCell,{children:"jane@example.com"}),(0,jsx_runtime.jsx)(TableCell,{children:"User"})]})]})]}),Simple={render:()=>(0,jsx_runtime.jsx)(SimpleTableDemo,{})},TableWithoutFooter=()=>(0,jsx_runtime.jsxs)(Table,{children:[(0,jsx_runtime.jsx)(TableHeader,{children:(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableHead,{children:"Product"}),(0,jsx_runtime.jsx)(TableHead,{children:"Price"}),(0,jsx_runtime.jsx)(TableHead,{children:"Quantity"}),(0,jsx_runtime.jsx)(TableHead,{className:"text-right",children:"Total"})]})}),(0,jsx_runtime.jsxs)(TableBody,{children:[(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{children:"Product A"}),(0,jsx_runtime.jsx)(TableCell,{children:"$100.00"}),(0,jsx_runtime.jsx)(TableCell,{children:"2"}),(0,jsx_runtime.jsx)(TableCell,{className:"text-right",children:"$200.00"})]}),(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{children:"Product B"}),(0,jsx_runtime.jsx)(TableCell,{children:"$75.00"}),(0,jsx_runtime.jsx)(TableCell,{children:"3"}),(0,jsx_runtime.jsx)(TableCell,{className:"text-right",children:"$225.00"})]})]})]}),NoFooter={render:()=>(0,jsx_runtime.jsx)(TableWithoutFooter,{})},__namedExportsOrder=["Default","Simple","NoFooter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <TableDemo />\n}",...Default.parameters?.docs?.source}}},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  render: () => <SimpleTableDemo />\n}",...Simple.parameters?.docs?.source}}},NoFooter.parameters={...NoFooter.parameters,docs:{...NoFooter.parameters?.docs,source:{originalSource:"{\n  render: () => <TableWithoutFooter />\n}",...NoFooter.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);