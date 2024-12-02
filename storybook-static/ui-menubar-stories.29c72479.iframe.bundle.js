"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[7750],{"./stories/ui/menubar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>menubar_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),react_menu_dist=__webpack_require__("./node_modules/@radix-ui/react-menu/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("./node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),[Collection,useCollection,createCollectionScope]=(0,dist.N)("Menubar"),[createMenubarContext,createMenubarScope]=(0,react_context_dist.A)("Menubar",[createCollectionScope,react_roving_focus_dist.RG]),useMenuScope=(0,react_menu_dist.UE)(),useRovingFocusGroupScope=(0,react_roving_focus_dist.RG)(),[MenubarContextProvider,useMenubarContext]=createMenubarContext("Menubar"),Menubar=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,value:valueProp,onValueChange,defaultValue,loop=!0,dir,...menubarProps}=props,direction=(0,react_direction_dist.jH)(dir),rovingFocusGroupScope=useRovingFocusGroupScope(__scopeMenubar),[value="",setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue}),[currentTabStopId,setCurrentTabStopId]=react.useState(null);return(0,jsx_runtime.jsx)(MenubarContextProvider,{scope:__scopeMenubar,value,onMenuOpen:react.useCallback((value2=>{setValue(value2),setCurrentTabStopId(value2)}),[setValue]),onMenuClose:react.useCallback((()=>setValue("")),[setValue]),onMenuToggle:react.useCallback((value2=>{setValue((prevValue=>Boolean(prevValue)?"":value2)),setCurrentTabStopId(value2)}),[setValue]),dir:direction,loop,children:(0,jsx_runtime.jsx)(Collection.Provider,{scope:__scopeMenubar,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:__scopeMenubar,children:(0,jsx_runtime.jsx)(react_roving_focus_dist.bL,{asChild:!0,...rovingFocusGroupScope,orientation:"horizontal",loop,dir:direction,currentTabStopId,onCurrentTabStopIdChange:setCurrentTabStopId,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{role:"menubar",...menubarProps,ref:forwardedRef})})})})})}));Menubar.displayName="Menubar";var[MenubarMenuProvider,useMenubarMenuContext]=createMenubarContext("MenubarMenu"),MenubarMenu=props=>{const{__scopeMenubar,value:valueProp,...menuProps}=props,autoValue=(0,react_id_dist.B)(),value=valueProp||autoValue||"LEGACY_REACT_AUTO_VALUE",context=useMenubarContext("MenubarMenu",__scopeMenubar),menuScope=useMenuScope(__scopeMenubar),triggerRef=react.useRef(null),wasKeyboardTriggerOpenRef=react.useRef(!1),open=context.value===value;return react.useEffect((()=>{open||(wasKeyboardTriggerOpenRef.current=!1)}),[open]),(0,jsx_runtime.jsx)(MenubarMenuProvider,{scope:__scopeMenubar,value,triggerId:(0,react_id_dist.B)(),triggerRef,contentId:(0,react_id_dist.B)(),wasKeyboardTriggerOpenRef,children:(0,jsx_runtime.jsx)(react_menu_dist.bL,{...menuScope,open,onOpenChange:open2=>{open2||context.onMenuClose()},modal:!1,dir:context.dir,...menuProps})})};MenubarMenu.displayName="MenubarMenu";var MenubarTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,disabled=!1,...triggerProps}=props,rovingFocusGroupScope=useRovingFocusGroupScope(__scopeMenubar),menuScope=useMenuScope(__scopeMenubar),context=useMenubarContext("MenubarTrigger",__scopeMenubar),menuContext=useMenubarMenuContext("MenubarTrigger",__scopeMenubar),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref,menuContext.triggerRef),[isFocused,setIsFocused]=react.useState(!1),open=context.value===menuContext.value;return(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeMenubar,value:menuContext.value,disabled,children:(0,jsx_runtime.jsx)(react_roving_focus_dist.q7,{asChild:!0,...rovingFocusGroupScope,focusable:!disabled,tabStopId:menuContext.value,children:(0,jsx_runtime.jsx)(react_menu_dist.Mz,{asChild:!0,...menuScope,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button",role:"menuitem",id:menuContext.triggerId,"aria-haspopup":"menu","aria-expanded":open,"aria-controls":open?menuContext.contentId:void 0,"data-highlighted":isFocused?"":void 0,"data-state":open?"open":"closed","data-disabled":disabled?"":void 0,disabled,...triggerProps,ref:composedRefs,onPointerDown:(0,primitive_dist.m)(props.onPointerDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey||(context.onMenuOpen(menuContext.value),open||event.preventDefault())})),onPointerEnter:(0,primitive_dist.m)(props.onPointerEnter,(()=>{Boolean(context.value)&&!open&&(context.onMenuOpen(menuContext.value),ref.current?.focus())})),onKeyDown:(0,primitive_dist.m)(props.onKeyDown,(event=>{disabled||(["Enter"," "].includes(event.key)&&context.onMenuToggle(menuContext.value),"ArrowDown"===event.key&&context.onMenuOpen(menuContext.value),["Enter"," ","ArrowDown"].includes(event.key)&&(menuContext.wasKeyboardTriggerOpenRef.current=!0,event.preventDefault()))})),onFocus:(0,primitive_dist.m)(props.onFocus,(()=>setIsFocused(!0))),onBlur:(0,primitive_dist.m)(props.onBlur,(()=>setIsFocused(!1)))})})})})}));MenubarTrigger.displayName="MenubarTrigger";var MenubarPortal=props=>{const{__scopeMenubar,...portalProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.ZL,{...menuScope,...portalProps})};MenubarPortal.displayName="MenubarPortal";var MenubarContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,align="start",...contentProps}=props,menuScope=useMenuScope(__scopeMenubar),context=useMenubarContext("MenubarContent",__scopeMenubar),menuContext=useMenubarMenuContext("MenubarContent",__scopeMenubar),getItems=useCollection(__scopeMenubar),hasInteractedOutsideRef=react.useRef(!1);return(0,jsx_runtime.jsx)(react_menu_dist.UC,{id:menuContext.contentId,"aria-labelledby":menuContext.triggerId,"data-radix-menubar-content":"",...menuScope,...contentProps,ref:forwardedRef,align,onCloseAutoFocus:(0,primitive_dist.m)(props.onCloseAutoFocus,(event=>{Boolean(context.value)||hasInteractedOutsideRef.current||menuContext.triggerRef.current?.focus(),hasInteractedOutsideRef.current=!1,event.preventDefault()})),onFocusOutside:(0,primitive_dist.m)(props.onFocusOutside,(event=>{const target=event.target;getItems().some((item=>item.ref.current?.contains(target)))&&event.preventDefault()})),onInteractOutside:(0,primitive_dist.m)(props.onInteractOutside,(()=>{hasInteractedOutsideRef.current=!0})),onEntryFocus:event=>{menuContext.wasKeyboardTriggerOpenRef.current||event.preventDefault()},onKeyDown:(0,primitive_dist.m)(props.onKeyDown,(event=>{if(["ArrowRight","ArrowLeft"].includes(event.key)){const target=event.target,targetIsSubTrigger=target.hasAttribute("data-radix-menubar-subtrigger"),isKeyDownInsideSubMenu=target.closest("[data-radix-menubar-content]")!==event.currentTarget,isPrevKey=("rtl"===context.dir?"ArrowRight":"ArrowLeft")===event.key;if(!isPrevKey&&targetIsSubTrigger)return;if(isKeyDownInsideSubMenu&&isPrevKey)return;let candidateValues=getItems().filter((item=>!item.disabled)).map((item=>item.value));isPrevKey&&candidateValues.reverse();const currentIndex=candidateValues.indexOf(menuContext.value);candidateValues=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateValues,currentIndex+1):candidateValues.slice(currentIndex+1);const[nextValue]=candidateValues;nextValue&&context.onMenuOpen(nextValue)}}),{checkForDefaultPrevented:!1}),style:{...props.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})}));MenubarContent.displayName="MenubarContent";var MenubarGroup=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...groupProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.YJ,{...menuScope,...groupProps,ref:forwardedRef})}));MenubarGroup.displayName="MenubarGroup";var MenubarLabel=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...labelProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.JU,{...menuScope,...labelProps,ref:forwardedRef})}));MenubarLabel.displayName="MenubarLabel";var MenubarItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...itemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.q7,{...menuScope,...itemProps,ref:forwardedRef})}));MenubarItem.displayName="MenubarItem";var MenubarCheckboxItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...checkboxItemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.H_,{...menuScope,...checkboxItemProps,ref:forwardedRef})}));MenubarCheckboxItem.displayName="MenubarCheckboxItem";var MenubarRadioGroup=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...radioGroupProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.z6,{...menuScope,...radioGroupProps,ref:forwardedRef})}));MenubarRadioGroup.displayName="MenubarRadioGroup";var MenubarRadioItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...radioItemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.hN,{...menuScope,...radioItemProps,ref:forwardedRef})}));MenubarRadioItem.displayName="MenubarRadioItem";var MenubarItemIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...itemIndicatorProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.VF,{...menuScope,...itemIndicatorProps,ref:forwardedRef})}));MenubarItemIndicator.displayName="MenubarItemIndicator";var MenubarSeparator=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...separatorProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.wv,{...menuScope,...separatorProps,ref:forwardedRef})}));MenubarSeparator.displayName="MenubarSeparator";var MenubarArrow=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...arrowProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.i3,{...menuScope,...arrowProps,ref:forwardedRef})}));MenubarArrow.displayName="MenubarArrow";var MenubarSub=props=>{const{__scopeMenubar,children,open:openProp,onOpenChange,defaultOpen}=props,menuScope=useMenuScope(__scopeMenubar),[open=!1,setOpen]=(0,react_use_controllable_state_dist.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,jsx_runtime.jsx)(react_menu_dist.Pb,{...menuScope,open,onOpenChange:setOpen,children})};MenubarSub.displayName="MenubarSub";var MenubarSubTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...subTriggerProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.ZP,{"data-radix-menubar-subtrigger":"",...menuScope,...subTriggerProps,ref:forwardedRef})}));MenubarSubTrigger.displayName="MenubarSubTrigger";var MenubarSubContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...subContentProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.G5,{...menuScope,"data-radix-menubar-content":"",...subContentProps,ref:forwardedRef,style:{...props.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})}));MenubarSubContent.displayName="MenubarSubContent";var Root3=Menubar,Menu=MenubarMenu,Trigger=MenubarTrigger,Portal2=MenubarPortal,Content2=MenubarContent,Label2=MenubarLabel,Item3=MenubarItem,CheckboxItem2=MenubarCheckboxItem,RadioGroup2=MenubarRadioGroup,RadioItem2=MenubarRadioItem,ItemIndicator2=MenubarItemIndicator,Separator2=MenubarSeparator,Sub2=MenubarSub,SubTrigger2=MenubarSubTrigger,SubContent2=MenubarSubContent,chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js"),check=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),circle=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle.js"),utils=__webpack_require__("./lib/utils.ts");const menubar_MenubarMenu=Menu,menubar_MenubarSub=Sub2,menubar_MenubarRadioGroup=RadioGroup2,menubar_Menubar=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(Root3,{ref,className:(0,utils.cn)("flex h-10 items-center space-x-1 rounded-md border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-950",className),...props})));menubar_Menubar.displayName=Root3.displayName;const menubar_MenubarTrigger=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(Trigger,{ref,className:(0,utils.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-50",className),...props})));menubar_MenubarTrigger.displayName=Trigger.displayName;const menubar_MenubarSubTrigger=react.forwardRef((({className,inset,children,...props},ref)=>(0,jsx_runtime.jsxs)(SubTrigger2,{ref,className:(0,utils.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-50",inset&&"pl-8",className),...props,children:[children,(0,jsx_runtime.jsx)(chevron_right.A,{className:"ml-auto h-4 w-4"})]})));menubar_MenubarSubTrigger.displayName=SubTrigger2.displayName;const menubar_MenubarSubContent=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(SubContent2,{ref,className:(0,utils.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",className),...props})));menubar_MenubarSubContent.displayName=SubContent2.displayName;const menubar_MenubarContent=react.forwardRef((({className,align="start",alignOffset=-4,sideOffset=8,...props},ref)=>(0,jsx_runtime.jsx)(Portal2,{children:(0,jsx_runtime.jsx)(Content2,{ref,align,alignOffset,sideOffset,className:(0,utils.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",className),...props})})));menubar_MenubarContent.displayName=Content2.displayName;const menubar_MenubarItem=react.forwardRef((({className,inset,...props},ref)=>(0,jsx_runtime.jsx)(Item3,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",inset&&"pl-8",className),...props})));menubar_MenubarItem.displayName=Item3.displayName;const menubar_MenubarCheckboxItem=react.forwardRef((({className,children,checked,...props},ref)=>(0,jsx_runtime.jsxs)(CheckboxItem2,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",className),checked,...props,children:[(0,jsx_runtime.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,jsx_runtime.jsx)(ItemIndicator2,{children:(0,jsx_runtime.jsx)(check.A,{className:"h-4 w-4"})})}),children]})));menubar_MenubarCheckboxItem.displayName=CheckboxItem2.displayName;const menubar_MenubarRadioItem=react.forwardRef((({className,children,...props},ref)=>(0,jsx_runtime.jsxs)(RadioItem2,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",className),...props,children:[(0,jsx_runtime.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,jsx_runtime.jsx)(ItemIndicator2,{children:(0,jsx_runtime.jsx)(circle.A,{className:"h-2 w-2 fill-current"})})}),children]})));menubar_MenubarRadioItem.displayName=RadioItem2.displayName;const menubar_MenubarLabel=react.forwardRef((({className,inset,...props},ref)=>(0,jsx_runtime.jsx)(Label2,{ref,className:(0,utils.cn)("px-2 py-1.5 text-sm font-semibold",inset&&"pl-8",className),...props})));menubar_MenubarLabel.displayName=Label2.displayName;const menubar_MenubarSeparator=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(Separator2,{ref,className:(0,utils.cn)("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",className),...props})));menubar_MenubarSeparator.displayName=Separator2.displayName;const MenubarShortcut=({className,...props})=>(0,jsx_runtime.jsx)("span",{className:(0,utils.cn)("ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400",className),...props});MenubarShortcut.displayname="MenubarShortcut",menubar_Menubar.__docgenInfo={description:"",methods:[]},menubar_MenubarTrigger.__docgenInfo={description:"",methods:[]},menubar_MenubarContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"-4",computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1}}},menubar_MenubarItem.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}},menubar_MenubarSeparator.__docgenInfo={description:"",methods:[]},menubar_MenubarLabel.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}},menubar_MenubarCheckboxItem.__docgenInfo={description:"",methods:[]},menubar_MenubarRadioItem.__docgenInfo={description:"",methods:[]},menubar_MenubarSubContent.__docgenInfo={description:"",methods:[]},menubar_MenubarSubTrigger.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}},MenubarShortcut.__docgenInfo={description:"",methods:[],displayName:"MenubarShortcut"};const menubar_stories={title:"UI/Menubar",component:menubar_Menubar,parameters:{layout:"centered"},tags:["autodocs"]},MenubarDemo=()=>(0,jsx_runtime.jsxs)(menubar_Menubar,{children:[(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"File"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsxs)(menubar_MenubarItem,{children:["New Tab ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⌘T"})]}),(0,jsx_runtime.jsxs)(menubar_MenubarItem,{children:["New Window ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⌘N"})]}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{disabled:!0,children:"New Incognito Window"}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsxs)(menubar_MenubarSub,{children:[(0,jsx_runtime.jsx)(menubar_MenubarSubTrigger,{children:"Share"}),(0,jsx_runtime.jsxs)(menubar_MenubarSubContent,{children:[(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Email link"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Messages"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Notes"})]})]}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsxs)(menubar_MenubarItem,{children:["Print... ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⌘P"})]})]})]}),(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"Edit"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsxs)(menubar_MenubarItem,{children:["Undo ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⌘Z"})]}),(0,jsx_runtime.jsxs)(menubar_MenubarItem,{children:["Redo ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⇧⌘Z"})]}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsxs)(menubar_MenubarSub,{children:[(0,jsx_runtime.jsx)(menubar_MenubarSubTrigger,{children:"Find"}),(0,jsx_runtime.jsxs)(menubar_MenubarSubContent,{children:[(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Search the web"}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Find..."}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Find Next"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Find Previous"})]})]}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Cut"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Copy"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Paste"})]})]}),(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"View"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsx)(menubar_MenubarCheckboxItem,{children:"Always Show Bookmarks Bar"}),(0,jsx_runtime.jsx)(menubar_MenubarCheckboxItem,{checked:!0,children:"Always Show Full URLs"}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsxs)(menubar_MenubarItem,{inset:!0,children:["Reload ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⌘R"})]}),(0,jsx_runtime.jsxs)(menubar_MenubarItem,{disabled:!0,inset:!0,children:["Force Reload ",(0,jsx_runtime.jsx)(MenubarShortcut,{children:"⇧⌘R"})]}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{inset:!0,children:"Toggle Fullscreen"}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{inset:!0,children:"Hide Sidebar"})]})]}),(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"Profiles"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsxs)(menubar_MenubarRadioGroup,{value:"benoit",children:[(0,jsx_runtime.jsx)(menubar_MenubarRadioItem,{value:"andy",children:"Andy"}),(0,jsx_runtime.jsx)(menubar_MenubarRadioItem,{value:"benoit",children:"Benoit"}),(0,jsx_runtime.jsx)(menubar_MenubarRadioItem,{value:"Luis",children:"Luis"})]}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{inset:!0,children:"Edit..."}),(0,jsx_runtime.jsx)(menubar_MenubarSeparator,{}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{inset:!0,children:"Add Profile..."})]})]})]}),Default={render:()=>(0,jsx_runtime.jsx)(MenubarDemo,{})},SimpleMenubarDemo=()=>(0,jsx_runtime.jsxs)(menubar_Menubar,{children:[(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"File"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"New"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Open"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Save"})]})]}),(0,jsx_runtime.jsxs)(menubar_MenubarMenu,{children:[(0,jsx_runtime.jsx)(menubar_MenubarTrigger,{children:"Edit"}),(0,jsx_runtime.jsxs)(menubar_MenubarContent,{children:[(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Cut"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Copy"}),(0,jsx_runtime.jsx)(menubar_MenubarItem,{children:"Paste"})]})]})]}),Simple={render:()=>(0,jsx_runtime.jsx)(SimpleMenubarDemo,{})},__namedExportsOrder=["Default","Simple"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <MenubarDemo />\n}",...Default.parameters?.docs?.source}}},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  render: () => <SimpleMenubarDemo />\n}",...Simple.parameters?.docs?.source}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);