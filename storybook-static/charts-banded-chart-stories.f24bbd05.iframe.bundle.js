/*! For license information please see charts-banded-chart-stories.f24bbd05.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[3252],{"./stories/charts/banded-chart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurvedTrend:()=>CurvedTrend,Forecast:()=>Forecast,Metrics:()=>Metrics,MultiLine:()=>MultiLine,Performance:()=>Performance,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/recharts/es6/component/ResponsiveContainer.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/recharts/es6/chart/ComposedChart.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/recharts/es6/cartesian/CartesianGrid.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/recharts/es6/cartesian/XAxis.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/recharts/es6/cartesian/YAxis.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/recharts/es6/component/Tooltip.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/recharts/es6/cartesian/Area.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/recharts/es6/cartesian/Line.js"),_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/recharts/es6/component/Legend.js"),_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/trending-up.js"),_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/trending-down.js"),_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/minus.js"),_components_ui_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/card.tsx"),_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/ui/badge.tsx"),_components_ui_chart__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/ui/chart.tsx");const chartConfig={range:{label:"Expected Range",color:"#e0f2fe"},actual:{label:"Actual Performance",color:"#0369a1"},target:{label:"Target",color:"#f43f5e"},benchmark:{label:"Industry Benchmark",color:"#8b5cf6"}},chartStyles_band={fill:"#e0f2fe",stroke:"#7dd3fc"},chartStyles_line={stroke:"#0369a1",activeDot:"#0ea5e9"},chartStyles_target={stroke:"#f43f5e",activeDot:"#fda4af"},chartStyles_benchmark={stroke:"#8b5cf6",activeDot:"#a78bfa"},generateBandedData=(variant="performance")=>{const generateNoise=(base,variance)=>base+(Math.random()-.5)*variance;if("multiline"===variant)return[{month:"Jan",range:[60,80],actual:75,target:70,benchmark:65},{month:"Feb",range:[65,85],actual:73,target:72,benchmark:68},{month:"Mar",range:[70,90],actual:82,target:75,benchmark:72},{month:"Apr",range:[75,95],actual:88,target:78,benchmark:76},{month:"May",range:[70,100],actual:85,target:80,benchmark:79},{month:"Jun",range:[80,110],actual:92,target:85,benchmark:83}];if("curved"===variant)return Array.from({length:12},((_,i)=>{const base=80+20*Math.sin(i/2);return{month:new Date(2024,i).toLocaleString("default",{month:"short"}),range:[base-10+generateNoise(0,5),base+10+generateNoise(0,5)],actual:base+generateNoise(0,8),target:base+5+generateNoise(0,3)}}));if("performance"===variant)return Array.from({length:6},((_,i)=>{const base=75+5*i+generateNoise(0,15);return{month:new Date(2024,i).toLocaleString("default",{month:"short"}),range:[base-10,base+10],actual:base+generateNoise(0,12)}}));if("forecast"===variant){const base=100;return Array.from({length:6},((_,i)=>{const projected=base+10*i+generateNoise(0,20);return{month:new Date(2024,i+6).toLocaleString("default",{month:"short"}),range:[projected-15,projected+15],actual:i<3?projected+generateNoise(0,10):null}}))}return Array.from({length:4},((_,i)=>{const base=150+50*i+generateNoise(0,40);return{month:`Q${i+1}`,range:[base-25,base+25],actual:base+generateNoise(0,30)}}))},BandedChartDemo=({data,title="Performance Metrics",description="Actual vs Expected Range",trend,variant="performance"})=>{const curveType="curved"===variant?"natural":"monotone";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Zp,{className:"w-[800px]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.aR,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.ZB,{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.BT,{children:description})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Wu,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_chart__WEBPACK_IMPORTED_MODULE_4__.at,{className:"h-[400px]",config:chartConfig,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.u,{width:"100%",height:"100%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.X,{data,margin:{top:20,right:20,bottom:20,left:20},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.d,{strokeDasharray:"3 3",className:"stroke-muted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.W,{dataKey:"month",tick:{fill:"#374151"},tickLine:{stroke:"#374151"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__.h,{tick:{fill:"#374151"},tickLine:{stroke:"#374151"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__.m,{content:props=>{const{payload,label,active}=props;if(!active||!payload)return null;const relevantData=payload.filter((p=>["actual","target","benchmark"].includes(String(p.dataKey))));return 0===relevantData.length?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"rounded-lg border bg-background p-2 shadow-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"font-medium",children:label}),relevantData.map(((entry,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-muted-foreground",children:[entry.name,":"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-medium",style:{color:entry.color},children:entry.value})]},index)))]})})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_11__.G,{dataKey:"range",stroke:chartStyles_band.stroke,fill:chartStyles_band.fill,connectNulls:!0,dot:!1,activeDot:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_12__.N,{type:curveType,dataKey:"actual",stroke:chartStyles_line.stroke,activeDot:{r:6,fill:chartStyles_line.activeDot,strokeWidth:2,stroke:chartStyles_line.stroke},connectNulls:!0,strokeWidth:2}),"multiline"===variant&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_12__.N,{type:curveType,dataKey:"target",stroke:chartStyles_target.stroke,activeDot:{r:6,fill:chartStyles_target.activeDot,strokeWidth:2,stroke:chartStyles_target.stroke},strokeWidth:2,strokeDasharray:"5 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_12__.N,{type:curveType,dataKey:"benchmark",stroke:chartStyles_benchmark.stroke,activeDot:{r:6,fill:chartStyles_benchmark.activeDot,strokeWidth:2,stroke:chartStyles_benchmark.stroke},strokeWidth:2,strokeDasharray:"3 3"})]}),"curved"===variant&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_12__.N,{type:curveType,dataKey:"target",stroke:chartStyles_target.stroke,activeDot:{r:6,fill:chartStyles_target.activeDot,strokeWidth:2,stroke:chartStyles_target.stroke},strokeWidth:2,strokeDasharray:"5 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Area_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_13__.s,{})]})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.wL,{className:"flex items-center justify-between text-sm text-muted-foreground",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"forecast"===variant?"Showing forecast range and actuals":"multiline"===variant?"Comparing against target and industry benchmark":"curved"===variant?"Smooth trend visualization with target":"Showing historical performance"}),trend&&getTrendBadge(trend)]})]})},calculateTrend=data=>{const validData=data.filter((d=>null!==d.actual));if(validData.length<2)return{direction:"unchanged",value:0,period:"period"};const first=validData[0].actual,change=(validData[validData.length-1].actual-first)/first*100;return{direction:change>0?"up":change<0?"down":"unchanged",value:Math.abs(Math.round(change)),period:"period"}},getTrendBadge=trend=>{const icon={up:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_14__.A,{className:"h-3 w-3"}),down:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_15__.A,{className:"h-3 w-3"}),unchanged:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_16__.A,{className:"h-3 w-3"})}[trend.direction],variant={up:"default",down:"destructive",unchanged:"secondary"}[trend.direction];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__.E,{variant,className:"ml-2 px-1.5 py-0.5 font-medium",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"flex items-center gap-1.5",children:[icon,trend.value,"% this ",trend.period]})})},__WEBPACK_DEFAULT_EXPORT__={title:"Charts/BandedChart",component:BandedChartDemo,parameters:{layout:"centered"}},Performance={render:()=>{const[data]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>generateBandedData("performance"))),trend=calculateTrend(data);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BandedChartDemo,{data,trend})}},Forecast={render:()=>{const[data]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>generateBandedData("forecast"))),trend=calculateTrend(data);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BandedChartDemo,{data,trend,variant:"forecast",title:"Performance Forecast",description:"Expected range with future projections"})}},Metrics={render:()=>{const[data]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>generateBandedData("metrics"))),trend=calculateTrend(data);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BandedChartDemo,{data,trend,variant:"metrics",title:"Quarterly Metrics",description:"Performance metrics by quarter"})}},MultiLine={render:()=>{const[data]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>generateBandedData("multiline"))),trend=calculateTrend(data);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BandedChartDemo,{data,trend,variant:"multiline",title:"Performance Comparison",description:"Actual performance vs Target and Industry Benchmark"})}},CurvedTrend={render:()=>{const[data]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>generateBandedData("curved"))),trend=calculateTrend(data);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BandedChartDemo,{data,trend,variant:"curved",title:"Annual Performance Trend",description:"Smooth visualization of performance trends"})}},__namedExportsOrder=["Performance","Forecast","Metrics","MultiLine","CurvedTrend"];Performance.parameters={...Performance.parameters,docs:{...Performance.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [data] = useState(() => generateBandedData('performance'));\n    const trend = calculateTrend(data);\n    return <BandedChartDemo data={data} trend={trend} />;\n  }\n}",...Performance.parameters?.docs?.source}}},Forecast.parameters={...Forecast.parameters,docs:{...Forecast.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [data] = useState(() => generateBandedData(\'forecast\'));\n    const trend = calculateTrend(data);\n    return <BandedChartDemo data={data} trend={trend} variant="forecast" title="Performance Forecast" description="Expected range with future projections" />;\n  }\n}',...Forecast.parameters?.docs?.source}}},Metrics.parameters={...Metrics.parameters,docs:{...Metrics.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [data] = useState(() => generateBandedData(\'metrics\'));\n    const trend = calculateTrend(data);\n    return <BandedChartDemo data={data} trend={trend} variant="metrics" title="Quarterly Metrics" description="Performance metrics by quarter" />;\n  }\n}',...Metrics.parameters?.docs?.source}}},MultiLine.parameters={...MultiLine.parameters,docs:{...MultiLine.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [data] = useState(() => generateBandedData(\'multiline\'));\n    const trend = calculateTrend(data);\n    return <BandedChartDemo data={data} trend={trend} variant="multiline" title="Performance Comparison" description="Actual performance vs Target and Industry Benchmark" />;\n  }\n}',...MultiLine.parameters?.docs?.source}}},CurvedTrend.parameters={...CurvedTrend.parameters,docs:{...CurvedTrend.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [data] = useState(() => generateBandedData(\'curved\'));\n    const trend = calculateTrend(data);\n    return <BandedChartDemo data={data} trend={trend} variant="curved" title="Annual Performance Trend" description="Smooth visualization of performance trends" />;\n  }\n}',...CurvedTrend.parameters?.docs?.source}}}},"./components/ui/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs")),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils.ts");const badgeVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",{variants:{variant:{default:"border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",secondary:"border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",destructive:"border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",outline:"text-neutral-950 dark:text-neutral-50"}},defaultVariants:{variant:"default"}});function Badge({className,variant,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(badgeVariants({variant}),className),...props})}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]}},"./components/ui/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>CardDescription,Wu:()=>CardContent,ZB:()=>CardTitle,Zp:()=>Card,aR:()=>CardHeader,wL:()=>CardFooter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts");const Card=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",className),...props})));Card.displayName="Card";const CardHeader=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6",className),...props})));CardHeader.displayName="CardHeader";const CardTitle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight",className),...props})));CardTitle.displayName="CardTitle";const CardDescription=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-neutral-500 dark:text-neutral-400",className),...props})));CardDescription.displayName="CardDescription";const CardContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0",className),...props})));CardContent.displayName="CardContent";const CardFooter=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0",className),...props})));CardFooter.displayName="CardFooter",Card.__docgenInfo={description:"",methods:[],displayName:"Card"},CardHeader.__docgenInfo={description:"",methods:[],displayName:"CardHeader"},CardFooter.__docgenInfo={description:"",methods:[],displayName:"CardFooter"},CardTitle.__docgenInfo={description:"",methods:[],displayName:"CardTitle"},CardDescription.__docgenInfo={description:"",methods:[],displayName:"CardDescription"},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.$,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/minus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Minus});const Minus=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},"./node_modules/lucide-react/dist/esm/icons/trending-down.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TrendingDown});const TrendingDown=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},"./node_modules/lucide-react/dist/esm/icons/trending-up.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TrendingUp});const TrendingUp=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])}}]);