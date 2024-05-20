import dr from"dedent";import{v4 as ur}from"uuid";import*as u from"zod";import*as F from"zod";var le=F.object({id:F.number().int(),selector:F.string().optional(),generatedSelectors:F.string().array().optional(),role:F.string().optional(),name:F.string().optional(),numChildren:F.number().optional(),content:F.string().optional(),pathFromRoot:F.string().optional(),serializedForm:F.string().optional(),nodeOnlySerializedForm:F.string().optional(),serializedHtml:F.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:F.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned.")});function Le(o){return!!(o.name||o.role||o.content||o.serializedForm)}var q=(R=>(R.AI_EXTRACT="AI_EXTRACT",R.AI_ASSERTION="AI_ASSERTION",R.AI_WAIT="AI_WAIT",R.CAPTCHA="CAPTCHA",R.CLICK="CLICK",R.FOCUS="FOCUS",R.BLUR="BLUR",R.COOKIE="COOKIE",R.DIALOG="DIALOG",R.DRAG="DRAG",R.GO_BACK="GO_BACK",R.GO_FORWARD="GO_FORWARD",R.HOVER="HOVER",R.JAVASCRIPT="JAVASCRIPT",R.LOCAL_STORAGE="LOCAL_STORAGE",R.MOUSE_DRAG="MOUSE_DRAG",R.NAVIGATE="NAVIGATE",R.NEW_TAB="NEW_TAB",R.PRESS="PRESS",R.REFRESH="REFRESH",R.REQUEST="REQUEST",R.SCROLL_DOWN="SCROLL_DOWN",R.SCROLL_UP="SCROLL_UP",R.SCROLL_LEFT="SCROLL_LEFT",R.SCROLL_RIGHT="SCROLL_RIGHT",R.SELECT_OPTION="SELECT_OPTION",R.TAB="TAB",R.TYPE="TYPE",R.VISUAL_DIFF="VISUAL_DIFF",R.WAIT="WAIT",R.SUCCESS="SUCCESS",R))(q||{}),mr=u.object({percentX:u.number(),percentY:u.number()}),G=u.object({elementDescriptor:u.string(),percentXYLocation:mr.optional(),a11yData:le.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});function Wt(o){return!(!o||!o.elementDescriptor&&!o.percentXYLocation)}var x=u.object({thoughts:u.string().optional(),id:u.string().default(()=>ur()).describe("unique identifier to this step, used for step cache")}),Z=u.object({useVision:u.boolean().default(!1),filterByViewport:u.boolean().default(!1),useSelector:u.boolean().default(!1),useXY:u.boolean().default(!1),disableCache:u.boolean().default(!1).describe("disable element caching for this step"),iframeUrl:u.string().optional().describe("url or url regex for the iframe")}),te=u.object({target:le}).optional(),_e=u.object({loadTimeout:u.number().int().max(60).optional().describe("Max seconds for the page to load"),networkTimeout:u.number().int().max(60).optional().describe("How many seconds to wait for network idle after navigation")}),pr=x.merge(_e).merge(u.object({type:u.literal("NAVIGATE"),url:u.string()})).describe("NAVIGATE <URL> - Go to the specified fully qualified URL. Only navigate to URLs relevant to the user goal."),Me=Z.merge(u.object({cache:te})),nt=x.merge(Me.merge(u.object({target:G.optional(),type:u.literal("SCROLL_UP"),deltaY:u.number().optional()}))).describe("SCROLL_UP [id] - Scroll up one entire page height. Optionally, provide an id to focus the element with the specified id before scrolling."),rt=x.merge(Me.merge(u.object({target:G.optional(),type:u.literal("SCROLL_DOWN"),deltaY:u.number().optional()}))).describe("SCROLL_DOWN [id] - Scroll down by one entire page height. Optionally, provide an id to focus the element with the specified id before scrolling."),ot=x.merge(Me.merge(u.object({target:G.optional(),type:u.literal("SCROLL_LEFT"),deltaX:u.number().optional()}))).describe("SCROLL_LEFT [id] - Scroll to the left by one page width. Optionally, provide an id to focus the element with the specified id before scrolling."),it=x.merge(Me.merge(u.object({target:G.optional(),type:u.literal("SCROLL_RIGHT"),deltaX:u.number().optional()}))).describe("SCROLL_RIGHT [id] - Scroll to the right by one page width. Optionally, provide an id to focus the element with the specified id before scrolling."),Mi=u.discriminatedUnion("type",[nt,rt,ot,it]),hr=x.merge(u.object({type:u.literal("DIALOG"),action:u.union([u.literal("ACCEPT"),u.literal("DISMISS")])})),gr=x.merge(u.object({type:u.literal("WAIT"),delay:u.number()})),fr=x.merge(_e).merge(u.object({type:u.literal("REFRESH")})),yr=x.merge(u.object({type:u.literal("GO_BACK")})),br=x.merge(u.object({type:u.literal("GO_FORWARD")})),wr=x.merge(Z).merge(u.object({type:u.literal("CAPTCHA")})),Sr=x.merge(u.object({type:u.literal("JAVASCRIPT"),code:u.string(),fragment:u.boolean().default(!1),envKey:u.string().optional(),environment:u.union([u.literal("NODE"),u.literal("BROWSER")]).default("NODE"),timeout:u.number().int().max(60).optional().describe("Max seconds for the code to complete")})),Ht=x.merge(Z).merge(u.object({type:u.literal("CLICK"),target:G,doubleClick:u.boolean().default(!1),rightClick:u.boolean().default(!1),waitForUrl:u.string().optional().describe("call playwright waitForURL after click"),force:u.boolean().default(!1),cache:te})).describe(dr`CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled or hidden elements.
  Only click on elements on the Current Page.
  You should try to click on relevant elements with the following tag names: button, input, link, image.
  As a last resort, you may click on relevant generic elements.
  `.replaceAll(`
`," ")),Gt=x.merge(Z).merge(u.object({type:u.literal("DRAG"),fromTarget:G,toTarget:G,force:u.boolean().default(!1),hoverSeconds:u.number().optional().describe("Seconds to hover the object before dropping"),cache:u.object({fromTarget:le.optional(),toTarget:le.optional()}).optional()})),Vt=x.merge(Z).merge(u.object({type:u.literal("MOUSE_DRAG"),target:G.optional(),force:u.boolean().default(!1),deltaX:u.string().describe("pixels to move horizontally, can be template"),deltaY:u.string().describe("pixels to move vertically, can be template"),steps:u.number().default(1),cache:te})),$t=x.merge(Z).merge(u.object({type:u.literal("HOVER"),target:G,force:u.boolean().default(!1),cache:te})),jt=x.merge(Z).merge(u.object({type:u.literal("FOCUS"),target:G,cache:te})),qt=x.merge(Z).merge(u.object({type:u.literal("BLUR"),target:G,cache:te})),Yt=x.merge(Z.omit({useVision:!0})).merge(u.object({type:u.literal("SELECT_OPTION"),target:G,filterByViewport:u.boolean().default(!1),useSelector:u.boolean().default(!1),option:u.string(),cache:te})).describe(`SELECT_OPTION <id> "<option>" - select an option from a dropdown-type element on the page. Provide the "id" of the dropdown element in the <id> argument and the "name" of the option to be selected in the <option> argument enclosed by single quotes. ONLY use this command to interact with combobox, listbox, or menu elements. For other element types, use CLICK. For example, to select Option 2 from <combobox id="24">
  <menuitem name="Option 1" />
  <menuitem id="26" name="Option 2" />
</combobox>, output SELECT_OPTION 24 'Option 2'`),st=x.merge(u.object({type:u.literal("AI_ASSERTION"),assertion:u.string(),useVision:u.boolean().default(!1),filterByViewport:u.boolean().default(!1),cancelOnFailure:u.boolean().default(!1),disableCache:u.boolean().default(!1).describe("disable AI caching for this step"),iframeUrl:u.string().optional().describe("url or url regex for the iframe")})).describe('ASSERT "phrase" <use-vision> - make an assertion about the state of the page. If <use-vision> is set to false, the state must be verifiable through the HTML on the page. Else, it must be verifiable through a screenshot of the page. This commands runs instantaneously.'),Cr=st.merge(u.object({type:u.literal("AI_WAIT"),timeout:u.number().int().optional().describe("Max seconds to wait for assertion to be true")})).describe('WAIT_UNTIL "phrase" <use-vision> <timeout> - Wait for up to <timeout> seconds until the phrase is true. This command accepts the same options as ASSERT.'),Tr=x.merge(u.object({type:u.literal("AI_EXTRACT"),goal:u.string(),schema:u.string().optional(),envKey:u.string().optional(),disableCache:u.boolean().default(!1).describe("disable AI caching for this step")})),vr=u.object({clearContent:u.boolean().default(!0),pressKeysSequentially:u.boolean().default(!1),force:u.boolean().default(!1)}),Xt=x.merge(Z).merge(u.object({type:u.literal("TYPE"),target:G.optional(),value:u.string(),pressEnter:u.boolean().default(!1),cache:te})).merge(vr).describe('TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.'),Er=x.merge(u.object({type:u.literal("PRESS"),value:u.string()})).describe('PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key. Do not provide key codes; only use key names supported by the Playwright press method.'),Ar=x.merge(_e).merge(u.object({type:u.literal("TAB"),url:u.string()})),Ir=x.merge(_e).merge(u.object({type:u.literal("NEW_TAB"),url:u.string()})),Rr=x.merge(u.object({type:u.literal("COOKIE"),value:u.string()})),xr=x.merge(u.object({type:u.literal("LOCAL_STORAGE"),key:u.string(),value:u.string()})),Nr=x.merge(u.object({type:u.literal("REQUEST"),url:u.string(),method:u.union([u.literal("GET"),u.literal("POST"),u.literal("PUT"),u.literal("DELETE"),u.literal("PATCH")]),headers:u.record(u.string(),u.string()).optional(),params:u.record(u.string(),u.string()).optional(),body:u.string().optional(),timeout:u.number().int().optional().describe("Max seconds to wait for the request to complete")})),Or=x.merge(u.object({type:u.literal("SUCCESS"),condition:st.optional()})).describe("SUCCESS - the user goal has been successfully achieved"),Lr=x.merge(u.object({type:u.literal("FAILURE")})).describe("FAILURE - there are no commands to suggest that could make progress that have not already been tried before"),_r=u.object({data:u.string().describe("s3 url to a jpg"),width:u.number(),height:u.number()}),Kt=x.merge(Z).merge(u.object({type:u.literal("VISUAL_DIFF"),threshold:u.number().default(.1),target:G.optional(),screenshot:_r.optional(),cache:te})),ce=u.discriminatedUnion("type",[Ht,Xt,Er,Yt,pr,rt,nt,st,Cr,Or]);ce.options.forEach(o=>{if(!o.description)throw new Error("All UserEditableAICommandSchema options must have a description")});var Mr=u.discriminatedUnion("type",[wr,Rr,hr,Gt,Tr,yr,br,$t,Sr,xr,Vt,Ir,fr,Nr,ot,it,Ar,Kt,gr,jt,qt]),Pe=u.discriminatedUnion("type",[...ce.options,...Mr.options]),at=u.discriminatedUnion("type",[...ce.options,Lr]),de=o=>{let e;switch(o){case"VISUAL_DIFF":case"SUCCESS":case"SCROLL_DOWN":case"SCROLL_UP":case"SCROLL_LEFT":case"SCROLL_RIGHT":case"CAPTCHA":case"GO_BACK":case"GO_FORWARD":case"REFRESH":e={type:o};break;case"AI_EXTRACT":e={type:o,goal:""};break;case"DIALOG":e={type:o,action:"DISMISS"};break;case"DRAG":e={type:o,fromTarget:{elementDescriptor:""},toTarget:{elementDescriptor:""}};break;case"MOUSE_DRAG":e={type:o,deltaX:"0",deltaY:"0",steps:1};break;case"WAIT":e={type:o,delay:1};break;case"HOVER":case"BLUR":case"FOCUS":case"CLICK":e={type:o,target:{elementDescriptor:""}};break;case"COOKIE":case"PRESS":case"TYPE":e={type:o,value:""};break;case"SELECT_OPTION":e={type:o,target:{elementDescriptor:""},option:""};break;case"NAVIGATE":case"NEW_TAB":case"TAB":e={type:o,url:""};break;case"REQUEST":e={type:o,url:"",method:"GET"};break;case"LOCAL_STORAGE":e={type:o,key:"",value:""};break;case"JAVASCRIPT":e={type:o,code:""};break;case"AI_WAIT":case"AI_ASSERTION":e={type:o,assertion:""};break;default:return(n=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(o)}return Pe.parse(e)},j={type:!0,cache:!0},Ce=u.discriminatedUnion("type",[Ht.pick(j),Gt.pick(j),Vt.pick(j),$t.pick(j),jt.pick(j),qt.pick(j),nt.pick(j),rt.pick(j),ot.pick(j),it.pick(j),Yt.pick(j),Xt.pick(j),Kt.pick(j)]),Jt=Object.values(q).filter(o=>Ce.options.some(e=>e.shape.type.safeParse(o).success));Pe.options.forEach(o=>{if("target"in o.shape&&!Jt.includes(o.shape.type.value))throw new Error(`Command ${o.shape.type.value} has a target but no cache`)});function lt(o){switch(o.type){case"DRAG":{if(!o.fromTarget?.a11yData||!o.toTarget?.a11yData)return;o.cache={fromTarget:o.fromTarget.a11yData,toTarget:o.toTarget.a11yData},delete o.fromTarget.a11yData,delete o.toTarget.a11yData;return}case"MOUSE_DRAG":case"HOVER":case"SCROLL_UP":case"SCROLL_DOWN":case"SCROLL_LEFT":case"SCROLL_RIGHT":case"SELECT_OPTION":case"TYPE":case"VISUAL_DIFF":case"CLICK":case"FOCUS":case"BLUR":{if(!o.target?.a11yData)return;o.cache={target:o.target.a11yData},delete o.target.a11yData;return}default:return}}import{cloneDeep as Pr,unset as Di}from"lodash-es";import{v4 as en}from"uuid";import*as T from"zod";var ne=(n=>(n.AI_ACTION="AI_ACTION",n.PRESET_ACTION="PRESET_ACTION",n.MODULE="MODULE",n))(ne||{}),Te=T.object({type:T.literal("AI_ACTION"),text:T.string(),commands:T.array(ce).optional(),skipped:T.boolean().optional()}),ve=T.object({type:T.literal("PRESET_ACTION"),command:Pe,skipped:T.boolean().optional()}),ct=T.object({id:T.string().describe("ID of the module step itself. Used to 'namespace' step cache entries.").default(()=>en()),type:T.literal("MODULE"),moduleId:T.string().uuid(),inputs:T.record(T.string()).optional(),skipped:T.boolean().optional()}),fe=T.union([Te,ve]),ke=T.object({moduleId:T.string().uuid(),name:T.string(),parameters:T.string().array().optional(),steps:fe.array(),skipped:T.boolean().optional()}),kr=ke.merge(T.object({type:T.literal("RESOLVED_MODULE"),inputs:T.record(T.string()).optional().describe("input params from test"),id:T.string().default(()=>en()).describe("id for the module step itself")})),De=T.union([Te,ve,ct]),Ee=T.union([Te,ve,kr]);var dt=T.object({key:T.string(),testId:T.string().optional(),moduleId:T.string().optional(),organizationId:T.string(),value:Ce}),Dr=T.record(dt);function Qt(o,e){let t=o;return e&&(t=`${e}:${o}`),t}function Zt(o){let e=[{key:Qt(o.id,o.moduleStepId),organizationId:o.orgId,testId:o.testId,value:o.value,moduleId:o.moduleId}];return o.moduleStepId&&e.push({key:Qt(o.id),organizationId:o.orgId,value:o.value,moduleId:o.moduleId}),e}function ze({steps:o,testId:e,orgId:t,moduleStepId:n,moduleId:r}){o=Pr(o);let i=[],l=[],s=[];for(let a of o)switch(a.type){case"RESOLVED_MODULE":{let{cachesToSave:m,stepsToSave:d}=ze({steps:a.steps,testId:e,orgId:t,moduleStepId:a.id,moduleId:a.moduleId});s=s.concat(m),i.find(p=>p.moduleId===a.moduleId)||i.push({moduleId:a.moduleId,steps:fe.array().parse(d),name:a.name,parameters:a.parameters}),l.push({type:"MODULE",moduleId:a.moduleId,inputs:a.inputs,id:a.id});break}case"AI_ACTION":{if(!a.commands){l.push(a);break}l.push({...a,commands:a.commands.map(m=>(lt(m),"cache"in m&&m.cache&&(s.push(...Zt({id:m.id,orgId:t,testId:e,moduleStepId:n,moduleId:r,value:Ce.parse(m)})),delete m.cache),m))});break}case"PRESET_ACTION":{let m=a.command;lt(m),"cache"in m&&m.cache&&(s.push(...Zt({id:m.id,orgId:t,testId:e,moduleStepId:n,moduleId:r,value:Ce.parse(m)})),delete m.cache),l.push({...a,command:m});break}default:return(m=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(a)}return{stepsToSave:l,cachesToSave:s,moduleUpdates:i}}var Ae={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&H(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&H(t,n,e[n]);return t};var g=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(F=>Object.assign(F,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,F]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&F!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var I=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[Momentic] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=I;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => {
  return (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")];
  var isAwait = false;
  var method;
  var it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw")
          throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x = obj[k](v);
          if (!(x instanceof Object))
            throw TypeError("Object expected");
          resolve(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};

// src/html/cache.ts
function generateHtmlCacheAttributes(dataMomenticId) {
  var _a, _b, _c;
  const customWindow = window;
  const result = {};
  const ele = customWindow.document.querySelector(
    \`[data-momentic-id="\${dataMomenticId}"]\`
  );
  if (!ele) {
    throw new Error(
      \`[MOMENTIC] Could not find element with data-momentic-id: \${dataMomenticId}\`
    );
  }
  try {
    result.generatedSelectors = (_a = customWindow.generateCssSelectors) == null ? void 0 : _a.call(customWindow, dataMomenticId);
  } catch (err) {
    console.error(\`[MOMENTIC] Error generating CSS selectors: \${err}\`);
  }
  result.serializedHtml = (_b = customWindow.serializeElementWithContext) == null ? void 0 : _b.call(customWindow, ele);
  result.nodeOnlySerializedHtml = (_c = customWindow.serializeElementOnlyWithText) == null ? void 0 : _c.call(customWindow, ele);
  return result;
}
function addGenerateHtmlCacheAttributesScript() {
  const customWindow = window;
  if (customWindow.generateHtmlCacheAttributes) {
    return;
  }
  customWindow.generateHtmlCacheAttributes = generateHtmlCacheAttributes;
}

// src/html/constants.ts
var momenticConstants = {
  bannedClassSubstrings: [
    "relative",
    "flex",
    "center",
    "justify",
    "auto",
    "sticky",
    "absolute",
    "top",
    "right",
    "left",
    "bottom",
    "items-center"
  ],
  bannedElementTagNames: [
    "html",
    "head",
    "title",
    "meta",
    "iframe",
    "script",
    "style",
    "path",
    "svg",
    "br",
    "::marker",
    "noscript"
  ],
  bannedElementAttributes: ["data-momentic-id", "aria-keyshortcuts"],
  relevantElementAttributes: [
    "name",
    "id",
    "value",
    "type",
    "class",
    "height",
    "width",
    "placeholder",
    "target",
    "title",
    "href",
    "src",
    "alt",
    "role",
    "headers",
    "scope",
    "checked",
    "required",
    "action",
    // dropdowns
    "data-value",
    // general testing
    "data-testid",
    // react flow
    "data-handleid",
    "data-handlepos",
    // aria
    "aria-label",
    "aria-role",
    "aria-selected",
    "aria-disabled",
    "aria-hidden"
  ]
};
function addMomenticConstantsToWindow() {
  const customWindow = window;
  if (customWindow.momenticConstants) {
    return;
  }
  customWindow.momenticConstants = momenticConstants;
}

// src/html/css-generation.ts
function generateCssSelectors(dataMomenticId) {
  var _a, _b, _c, _d, _e;
  const customWindow = window;
  const ele = document.querySelector(\`[data-momentic-id="\${dataMomenticId}"]\`);
  if (!ele) {
    throw new Error(
      \`[MOMENTIC] Could not find element with data-momentic-id: \${dataMomenticId}\`
    );
  }
  const selectors = [];
  const blacklist = [
    "*data-momentic-id*",
    // generated by momentic
    "*aria-keyshortcuts*",
    // generated by momentic
    "*data-ved*",
    // google's auto-generated stuff
    /.*\\[.*style.*\\].*/,
    // styles attributes suck are often duplicate
    /.*\\[.*d=.*\\]/,
    // path attributes are really long and bad
    /.*xmnls.*/,
    // svg attribute that is present on everything
    /.*\\[[^=]*?\\].*/,
    // attributes without values
    /.*#.*:r.*:.*/,
    // any id attribute with radix auto-generated :r in it
    /.*aria.*=.*:r.*:.*/,
    // any aria attribute with radix auto-generated :r in it
    /.*aria.*radix.*/,
    // any aria attribute with radix in it
    /.*chakra.*/
    // chakra ui classes and attributes
  ];
  const whitelist = ["*data-testid*"];
  for (let i = 0; i < 3; i++) {
    const allSelectorTypes = [
      "id",
      "attribute",
      "tag",
      "nthchild",
      "nthoftype"
    ];
    const options = {
      blacklist,
      maxCombinations: 50,
      maxCandidates: 50,
      selectors: allSelectorTypes,
      whitelist,
      // this is kind of racist
      includeTag: true
    };
    if (i !== 0) {
      const selectorSubset = [...allSelectorTypes];
      selectorSubset.splice(i, 1);
      options.selectors = selectorSubset;
    }
    const selector = (_a = customWindow.CssSelectorGenerator) == null ? void 0 : _a.getCssSelector(
      ele,
      options
    );
    if (selector) {
      selectors.push(selector);
      blacklist.push(selector);
    }
  }
  const momenticSelector = (_b = customWindow.CssSelectorGenerator) == null ? void 0 : _b.getCssSelector(
    ele,
    {
      blacklist,
      maxCombinations: 50,
      maxCandidates: 50,
      selectors: ["class", "attribute", "nthoftype", "nthchild"],
      includeTag: true
    }
  );
  if (momenticSelector) {
    selectors.push(momenticSelector);
  }
  if (selectors.length < 3) {
    const allOptionsSelector = (_c = customWindow.CssSelectorGenerator) == null ? void 0 : _c.getCssSelector(ele, {
      blacklist,
      maxCombinations: 50,
      maxCandidates: 50,
      includeTag: true
    });
    if (allOptionsSelector) {
      selectors.push(allOptionsSelector);
    }
  }
  try {
    const result = (_d = customWindow.momenticSelectorGenerator) == null ? void 0 : _d.call(customWindow, ele);
    if (result) {
      selectors.push(...result);
    }
  } catch (err) {
    console.error(
      \`[MOMENTIC] Error generating selectors with Momentic custom library: \${err}\`
    );
  }
  try {
    const result = (_e = customWindow.medvCssSelectorGenerator) == null ? void 0 : _e.call(customWindow, ele);
    if (result) {
      selectors.push(result);
    }
  } catch (err) {
    console.error(\`[MOMENTIC] Error generating medv selector: \${err}\`);
  }
  if (!selectors.length) {
    throw new Error(
      \`[MOMENTIC] No CSS selectors could be generated from any method\`
    );
  }
  return Array.from(new Set(selectors));
}
function addCssGenerationScript() {
  const customWindow = window;
  if (customWindow.generateCssSelectors) {
    return;
  }
  customWindow.generateCssSelectors = generateCssSelectors;
}

// src/html/cursor.ts
function addTrackCursorScript() {
  const customWindow = window;
  if (customWindow.trackCursorMove) {
    return;
  }
  customWindow.trackCursorMove = function(e) {
    e = e || window.event;
    customWindow.lastCursorPos = {
      left: e.pageX,
      top: e.pageY
    };
  };
  document.addEventListener("mousemove", customWindow.trackCursorMove);
}

// src/html/html-element-serialization.ts
function trimElementAttributes(element) {
  var _a;
  const customWindow = window;
  const attrNames = element.getAttributeNames();
  for (const attr of attrNames) {
    const attrVal = element.getAttribute(attr);
    if (attr === "class" && attrVal) {
      element.setAttribute("class", attrVal.split(" ")[0]);
      continue;
    }
    if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.relevantElementAttributes.includes(attr))) {
      element.removeAttribute(attr);
      continue;
    }
    if (attrVal === "value" && element.getAttribute("type") === "text") {
      element.removeAttribute("value");
      continue;
    }
  }
}
function serializeNode(node, includeChildren) {
  var _a;
  const customWindow = window;
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || "";
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }
  const elementNode = node.cloneNode(true);
  let result = \`<\${elementNode.tagName.toLowerCase()}\`;
  (_a = customWindow.trimElementAttributes) == null ? void 0 : _a.call(customWindow, elementNode);
  const attrNames = elementNode.getAttributeNames();
  for (const attr of attrNames) {
    result += \` \${attr}="\${elementNode.getAttribute(attr)}"\`;
  }
  if (includeChildren) {
    const childrenString = Array.from(elementNode.childNodes).map((child) => \`  \${serializeNode(child, false)}\`).join("\\n");
    if (childrenString.trim()) {
      result += \`>
\${childrenString}
</\${elementNode.tagName.toLowerCase()}>\`;
      return result;
    }
  }
  return \`\${result} />\`;
}
function serializeElementWithContext(element) {
  let serializedElement = serializeNode(element, true);
  if (element.previousElementSibling) {
    serializedElement = \`\${serializeNode(element.previousElementSibling, false)}
\${serializedElement}\`;
  }
  if (element.nextElementSibling) {
    serializedElement = \`\${serializedElement}
\${serializeNode(element.nextElementSibling, false)}\`;
  }
  return serializedElement;
}
function serializeElementOnlyWithText(element) {
  var _a;
  const customWindow = window;
  const originalText = element.textContent;
  const ele = element.cloneNode(false);
  if (originalText) {
    ele.textContent = originalText;
  }
  (_a = customWindow.trimElementAttributes) == null ? void 0 : _a.call(customWindow, ele);
  return ele.outerHTML;
}
function addElementSerializationScripts() {
  const customWindow = window;
  customWindow.trimElementAttributes = trimElementAttributes;
  customWindow.serializeElementWithContext = serializeElementWithContext;
  customWindow.serializeElementOnlyWithText = serializeElementOnlyWithText;
}

// src/html/ldist.ts
function addBrowserLdistScript() {
  const customWindow = window;
  if (customWindow.ldist) {
    return;
  }
  customWindow.ldist = (a, b) => {
    const an = a ? a.length : 0;
    const bn = b ? b.length : 0;
    if (an === 0) {
      return bn;
    }
    if (bn === 0) {
      return an;
    }
    const matrix = new Array(bn + 1);
    for (let i = 0; i <= bn; ++i) {
      const row = matrix[i] = new Array(an + 1);
      row[0] = i;
    }
    const firstRow = matrix[0];
    for (let j = 1; j <= an; ++j) {
      firstRow[j] = j;
    }
    for (let i = 1; i <= bn; ++i) {
      for (let j = 1; j <= an; ++j) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1],
            // substitution
            matrix[i][j - 1],
            // insertion
            matrix[i - 1][j]
            // deletion
          ) + 1;
        }
      }
    }
    return matrix[bn][an];
  };
}

// src/html/utils.ts
function checkIsNameAutogenerated(text) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (((_a = text[0]) == null ? void 0 : _a.match(/[0-9a-zA-Z]/)) === null) {
    return true;
  }
  if (text.length > 10) {
    const expectedMinSeparators = Math.floor(text.length / 8);
    const numSeparators = ((_b = text.match(/[-_:/ ]/g)) != null ? _b : []).length;
    if (numSeparators < expectedMinSeparators) {
      return true;
    }
  }
  const specialChars = ((_c = text.match(/[^0-9a-zA-Z.]/g)) != null ? _c : []).length;
  if (specialChars / text.length > 0.2) {
    return true;
  }
  const numbers = ((_d = text.match(/[0-9]/g)) != null ? _d : []).length;
  if (numbers / text.length > 0.3) {
    return true;
  }
  const vowels = ((_e = text.toLowerCase().match(/[aeiou]/gi)) != null ? _e : []).length;
  const consonants = ((_f = text.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)) != null ? _f : []).length;
  if (consonants / vowels > 5) {
    return true;
  }
  const capitals = ((_g = text.match(/[A-Z]/g)) != null ? _g : []).length;
  const letters = ((_h = text.match(/[a-z]/g)) != null ? _h : []).length;
  const expectedDifference = Math.ceil(text.length * 0.3);
  if (letters && numbers && Math.abs(letters - numbers) < expectedDifference) {
    return true;
  }
  if (letters && capitals && Math.abs(letters - capitals) < expectedDifference) {
    return true;
  }
  return false;
}

// src/html/medv-css-generator-lib.ts
function addMedvCssGenerator() {
  const customWindow = window;
  if (customWindow.medvCssSelectorGenerator) {
    return;
  }
  let config;
  let rootDocument;
  let start;
  function finder(input, options) {
    start = /* @__PURE__ */ new Date();
    if (input.nodeType !== Node.ELEMENT_NODE) {
      throw new Error(\`Can't generate CSS selector for non-element node type.\`);
    }
    if ("html" === input.tagName.toLowerCase()) {
      return "html";
    }
    const defaults = {
      root: document.body,
      idName: (_name) => true,
      className: (_name) => true,
      tagName: (_name) => true,
      attr: (_name, _value) => false,
      seedMinLength: 1,
      optimizedMinLength: 2,
      threshold: 1e3,
      maxNumberOfTries: 1e4,
      timeoutMs: void 0
    };
    config = __spreadValues(__spreadValues({}, defaults), options);
    rootDocument = findRootDocument(config.root, defaults);
    let path = bottomUpSearch(
      input,
      "all",
      () => bottomUpSearch(
        input,
        "two",
        () => bottomUpSearch(input, "one", () => bottomUpSearch(input, "none"))
      )
    );
    if (path) {
      const optimized = sort(optimize(path, input));
      if (optimized.length > 0) {
        path = optimized[0];
      }
      return selector(path);
    } else {
      throw new Error(\`Selector was not found.\`);
    }
  }
  function findRootDocument(rootNode, defaults) {
    if (rootNode.nodeType === Node.DOCUMENT_NODE) {
      return rootNode;
    }
    if (rootNode === defaults.root) {
      return rootNode.ownerDocument;
    }
    return rootNode;
  }
  function bottomUpSearch(input, limit, fallback) {
    let path = null;
    const stack = [];
    let current = input;
    let i = 0;
    while (current) {
      const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - start.getTime();
      if (config.timeoutMs !== void 0 && elapsedTime > config.timeoutMs) {
        throw new Error(
          \`Timeout: Can't find a unique selector after \${elapsedTime}ms\`
        );
      }
      let level = maybe(id(current)) || maybe(...attr(current)) || maybe(...classNames(current)) || maybe(tagName(current)) || [any()];
      const nth = index(current);
      if (limit == "all") {
        if (nth) {
          level = level.concat(
            level.filter(dispensableNth).map((node) => nthChild(node, nth))
          );
        }
      } else if (limit == "two") {
        level = level.slice(0, 1);
        if (nth) {
          level = level.concat(
            level.filter(dispensableNth).map((node) => nthChild(node, nth))
          );
        }
      } else if (limit == "one") {
        const [node] = level = level.slice(0, 1);
        if (nth && dispensableNth(node)) {
          level = [nthChild(node, nth)];
        }
      } else if (limit == "none") {
        level = [any()];
        if (nth) {
          level = [nthChild(level[0], nth)];
        }
      }
      for (const node of level) {
        node.level = i;
      }
      stack.push(level);
      if (stack.length >= config.seedMinLength) {
        path = findUniquePath(stack, fallback);
        if (path) {
          break;
        }
      }
      current = current.parentElement;
      i++;
    }
    if (!path) {
      path = findUniquePath(stack, fallback);
    }
    if (!path && fallback) {
      return fallback();
    }
    return path;
  }
  function findUniquePath(stack, fallback) {
    const paths = sort(combinations(stack));
    if (paths.length > config.threshold) {
      return fallback ? fallback() : null;
    }
    for (const candidate of paths) {
      if (unique(candidate)) {
        return candidate;
      }
    }
    return null;
  }
  function selector(path) {
    let node = path[0];
    let query = node.name;
    for (let i = 1; i < path.length; i++) {
      const level = path[i].level || 0;
      if (node.level === level - 1) {
        query = \`\${path[i].name} > \${query}\`;
      } else {
        query = \`\${path[i].name} \${query}\`;
      }
      node = path[i];
    }
    return query;
  }
  function penalty(path) {
    return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
  }
  function unique(path) {
    const css = selector(path);
    switch (rootDocument.querySelectorAll(css).length) {
      case 0:
        throw new Error(\`Can't select any node with this selector: \${css}\`);
      case 1:
        return true;
      default:
        return false;
    }
  }
  function id(input) {
    const elementId = input.getAttribute("id");
    if (elementId && config.idName(elementId)) {
      return {
        name: "#" + CSS.escape(elementId),
        penalty: 0
      };
    }
    return null;
  }
  function attr(input) {
    const attrs = Array.from(input.attributes).filter(
      (attr2) => config.attr(attr2.name, attr2.value)
    );
    return attrs.map(
      (attr2) => ({
        name: \`[\${CSS.escape(attr2.name)}="\${CSS.escape(attr2.value)}"]\`,
        penalty: 0.5
      })
    );
  }
  function classNames(input) {
    const names = Array.from(input.classList).filter(config.className);
    return names.map(
      (name) => ({
        name: "." + CSS.escape(name),
        penalty: 1
      })
    );
  }
  function tagName(input) {
    const name = input.tagName.toLowerCase();
    if (config.tagName(name)) {
      return {
        name,
        penalty: 2
      };
    }
    return null;
  }
  function any() {
    return {
      name: "*",
      penalty: 3
    };
  }
  function index(input) {
    const parent = input.parentNode;
    if (!parent) {
      return null;
    }
    let child = parent.firstChild;
    if (!child) {
      return null;
    }
    let i = 0;
    while (child) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        i++;
      }
      if (child === input) {
        break;
      }
      child = child.nextSibling;
    }
    return i;
  }
  function nthChild(node, i) {
    return {
      name: node.name + \`:nth-child(\${i})\`,
      penalty: node.penalty + 1
    };
  }
  function dispensableNth(node) {
    return node.name !== "html" && !node.name.startsWith("#");
  }
  function maybe(...level) {
    const list = level.filter(notEmpty);
    if (list.length > 0) {
      return list;
    }
    return null;
  }
  function notEmpty(value) {
    return value !== null && value !== void 0;
  }
  function* combinations(stack, path = []) {
    if (stack.length > 0) {
      for (const node of stack[0]) {
        yield* __yieldStar(combinations(stack.slice(1, stack.length), path.concat(node)));
      }
    } else {
      yield path;
    }
  }
  function sort(paths) {
    return [...paths].sort((a, b) => penalty(a) - penalty(b));
  }
  function* optimize(path, input, scope = {
    counter: 0,
    visited: /* @__PURE__ */ new Map()
  }) {
    if (path.length > 2 && path.length > config.optimizedMinLength) {
      for (let i = 1; i < path.length - 1; i++) {
        if (scope.counter > config.maxNumberOfTries) {
          return;
        }
        scope.counter += 1;
        const newPath = [...path];
        newPath.splice(i, 1);
        const newPathKey = selector(newPath);
        if (scope.visited.has(newPathKey)) {
          return;
        }
        if (unique(newPath) && same(newPath, input)) {
          yield newPath;
          scope.visited.set(newPathKey, true);
          yield* __yieldStar(optimize(newPath, input, scope));
        }
      }
    }
  }
  function same(path, input) {
    return rootDocument.querySelector(selector(path)) === input;
  }
  customWindow.medvCssSelectorGenerator = (element) => {
    var _a;
    const relevantAttributes = (_a = customWindow.momenticConstants) == null ? void 0 : _a.relevantElementAttributes;
    if (!relevantAttributes) {
      throw new Error(
        "[MOMENTIC] Momentic constants missing during css generation"
      );
    }
    return finder(element, {
      seedMinLength: 3,
      idName: (name) => !checkIsNameAutogenerated(name),
      attr: (name, value) => {
        return relevantAttributes.includes(name) && !checkIsNameAutogenerated(value);
      },
      className: (name) => {
        return name.length < 30 && name.split(" ").every((n) => !checkIsNameAutogenerated(n));
      },
      optimizedMinLength: 3,
      threshold: 100,
      timeoutMs: 250,
      maxNumberOfTries: 5e3
    });
  };
}

// src/html/momentic-css-generator-lib.ts
function addMomenticSelectorGeneratorLib() {
  const customWindow = window;
  if (customWindow.momenticSelectorGenerator) {
    return;
  }
  customWindow.momenticSelectorGenerator = momenticSelectorGenerator;
}
function momenticSingleElementSelectorGenerator(element) {
  var _a, _b;
  const customWindow = window;
  const tagName = element.tagName.toLowerCase();
  const relevantAttributes = (_a = customWindow.momenticConstants) == null ? void 0 : _a.relevantElementAttributes;
  if (!relevantAttributes) {
    throw new Error(
      "[MOMENTIC] Momentic constants missing during css generation"
    );
  }
  const eligibleAttributes = [];
  for (const attribute of element.getAttributeNames()) {
    if (!relevantAttributes.includes(attribute)) {
      continue;
    }
    if (!element.getAttribute(attribute)) {
      continue;
    }
    if (checkIsNameAutogenerated((_b = element.getAttribute(attribute)) != null ? _b : "") && !["src", "href"].includes(attribute)) {
      continue;
    }
    if (attribute === "class" && element.classList.length > 1) {
      continue;
    }
    eligibleAttributes.push(attribute);
  }
  if (eligibleAttributes.length === 0) {
    return [tagName];
  } else if (eligibleAttributes.length === 1) {
    const attr = eligibleAttributes[0];
    const value = JSON.stringify(element.getAttribute(attr));
    return [\`\${tagName}[\${attr}=\${value}]\`];
  }
  const results = /* @__PURE__ */ new Set([tagName]);
  for (let i = 0; i < eligibleAttributes.length; i++) {
    for (let j = i + 1; j < eligibleAttributes.length; j++) {
      const attr1 = eligibleAttributes[i];
      const value1 = JSON.stringify(
        element.getAttribute(eligibleAttributes[i])
      );
      const attr2 = eligibleAttributes[j];
      const value2 = JSON.stringify(
        element.getAttribute(eligibleAttributes[j])
      );
      results.add(\`\${tagName}[\${attr1}=\${value1}][\${attr2}=\${value2}]\`);
    }
  }
  return Array.from(results);
}
function isElementImportant(element) {
  var _a;
  const anchoringElementTagNames = [
    "html",
    "body",
    "header",
    "select",
    "form",
    "navbar",
    "footer",
    "aside",
    "main",
    "article",
    "iframe",
    "section",
    "h1",
    "h2",
    "h3",
    "table",
    "td",
    "tr",
    "th",
    "dialog",
    "ol",
    "ul",
    "li"
  ];
  const anchoringAttributes = [
    "role",
    "aria-role",
    "aria-modal",
    "name",
    "aria-label",
    "title",
    "for",
    "id"
  ];
  if (anchoringElementTagNames.includes(element.tagName.toLowerCase())) {
    return true;
  }
  for (const attr of anchoringAttributes) {
    if (element.hasAttribute(attr) && !checkIsNameAutogenerated((_a = element.getAttribute(attr)) != null ? _a : "")) {
      return true;
    }
  }
  return false;
}
function momenticSelectorGenerator(originalElement) {
  var _a, _b;
  const results = /* @__PURE__ */ new Set();
  const queue = [
    { currentSelectorTokens: [], currentElement: originalElement }
  ];
  const maxSteps = 500;
  let steps = 0;
  while (queue.length > 0 && results.size < 4 && steps < maxSteps) {
    steps++;
    const entry = queue.shift();
    const { currentSelectorTokens, currentElement } = entry;
    const importantParents = [];
    let importantParent = currentElement.parentElement;
    while (importantParents.length < 3 && importantParent && importantParent.tagName.toLowerCase() !== "html") {
      if (isElementImportant(importantParent)) {
        importantParents.push(importantParent);
      }
      importantParent = importantParent.parentElement;
    }
    const elementSelectors = momenticSingleElementSelectorGenerator(currentElement);
    for (const selector of elementSelectors) {
      const fullSelectorTokens = [selector, ...currentSelectorTokens];
      const fullSelector = fullSelectorTokens.join(" ");
      const globalCheck = document.querySelectorAll(fullSelector);
      if (
        // unique on page
        globalCheck.length === 1 && // we have more than one element in this selector
        fullSelectorTokens.length > 1 && // the first thing is not a bare div or span, which can be very flaky
        !["div", "span"].some((x) => fullSelectorTokens[0] === x)
      ) {
        let existingSuffix = false;
        for (const existingSelector of results.values()) {
          if (fullSelector.endsWith(existingSelector)) {
            existingSuffix = true;
            break;
          }
        }
        if (!existingSuffix) {
          results.add(fullSelector);
          if (results.size >= 4) {
            break;
          }
        }
      }
      for (const parent of importantParents) {
        const nextSelectorTokens = [...fullSelectorTokens];
        const parentCheck = parent.querySelectorAll(fullSelector);
        if (parentCheck.length === 1) {
          const nextQueueEntry = {
            currentSelectorTokens: nextSelectorTokens,
            currentElement: parent
          };
          queue.push(nextQueueEntry);
        } else if (currentElement.parentElement && currentElement.parentNode) {
          const siblings = Array.from(
            (_b = (_a = currentElement.parentNode) == null ? void 0 : _a.children) != null ? _b : []
          );
          const index = siblings.indexOf(currentElement);
          if (index === -1) {
            continue;
          }
          nextSelectorTokens[0] = \`> \${nextSelectorTokens[0]}:nth-child(\${index + 1})\`;
          const nextQueueEntry = {
            currentSelectorTokens: nextSelectorTokens,
            currentElement: currentElement.parentElement
          };
          queue.push(nextQueueEntry);
        }
      }
    }
  }
  return Array.from(results);
}

// src/html/page-serialization.ts
function processClassAttribute(attr, classNameCounts) {
  var _a;
  const customWindow = window;
  if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.bannedClassSubstrings)) {
    throw new Error(
      "[Momentic] Missing global Momentic constants in processClassAttribute"
    );
  }
  const classNames = attr.trim().split(" ");
  for (const cls of classNames) {
    if (cls.length <= 4) {
      continue;
    }
    if (classNameCounts[cls] && classNameCounts[cls] > 1) {
      continue;
    }
    if (customWindow.momenticConstants.bannedClassSubstrings.some(
      (bad) => cls.includes(bad)
    )) {
      continue;
    }
    return cls;
  }
  return "";
}
function isNodeInteresting(node) {
  var _a;
  if (node.getAttribute("id") === "momentic_cursor") {
    return false;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if ((_a = node.textContent) == null ? void 0 : _a.trim()) {
    return true;
  }
  if (node.getAttributeNames().length > 1) {
    return true;
  }
  if (node.getAttributeNames().length === 1 && !node.getAttribute("class")) {
    return true;
  }
  return false;
}
function shouldFilterNode(node) {
  var _a;
  const customWindow = window;
  if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.bannedElementTagNames)) {
    throw new Error(
      "[Momentic] Missing global Momentic constants in shouldFilterNode"
    );
  }
  if (customWindow.momenticConstants.bannedElementTagNames.includes(
    node.tagName.toLowerCase()
  ))
    return true;
  return !isNodeInteresting(node) && node.childNodes.length === 0;
}
function processElementNode(node, data) {
  var _a, _b, _c;
  const customWindow = window;
  if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.relevantElementAttributes) || !((_b = customWindow.momenticConstants) == null ? void 0 : _b.bannedElementAttributes)) {
    throw new Error(
      "[Momentic] Missing global Momentic constants in processElementNode"
    );
  }
  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  const attributes = node.getAttributeNames();
  for (const attr of attributes) {
    if (customWindow.momenticConstants.bannedElementAttributes.includes(attr)) {
      node.removeAttribute(attr);
      continue;
    }
    switch (attr) {
      case "class": {
        const classNames = processClassAttribute(
          (_c = node.getAttribute("class")) != null ? _c : "",
          data.classNameCounts
        );
        if (!classNames) {
          node.removeAttribute(attr);
        } else {
          node.setAttribute(attr, classNames);
        }
        break;
      }
      case "src": {
        const src = node.getAttribute(attr);
        if (src == null ? void 0 : src.startsWith("data:")) {
          node.setAttribute(attr, \`\${src.split(";")[0]};TRUNCATED\`);
        }
        break;
      }
      default: {
        if (!customWindow.momenticConstants.relevantElementAttributes.includes(
          attr
        ) && ![/data-.*/, /aria-.*/].some((re) => attr.match(re))) {
          node.removeAttribute(attr);
        }
        const attrVal = node.getAttribute(attr);
        if (attrVal == null ? void 0 : attrVal.includes("&")) {
          node.setAttribute(attr, decodeHtml(attrVal));
        }
      }
    }
  }
  return node;
}
function walkDOMTree(currentNode, data) {
  if (currentNode.nodeType === Node.TEXT_NODE) {
    return currentNode;
  } else if (currentNode.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  const node = processElementNode(currentNode, data);
  if (shouldFilterNode(node)) {
    return false;
  }
  const children = [...node.childNodes];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const processedChild = walkDOMTree(child, data);
    if (!processedChild) {
      node.removeChild(child);
      child.remove();
    } else {
      node.replaceChild(processedChild, child);
    }
  }
  const interesting = isNodeInteresting(node);
  if (!interesting && node.childNodes.length === 0) {
    return false;
  } else if (!interesting && node.childNodes.length === 1) {
    return node.childNodes[0];
  }
  return node;
}
function getCondensedHtmlTree() {
  var _a;
  const bodyCopy = document.body.cloneNode(true);
  const globalData = {
    classNameCounts: {}
  };
  const allElements = bodyCopy.getElementsByTagName("*");
  if (!allElements || !allElements.length) {
    throw new Error(
      "This page contains no elements. Are you sure the page is loaded completely?"
    );
  }
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const classNames = element.getAttribute("class");
    if (classNames) {
      const individualClassNames = classNames.split(" ");
      individualClassNames.forEach((className) => {
        globalData.classNameCounts[className] = (globalData.classNameCounts[className] || 0) + 1;
      });
    }
  }
  const processedBody = walkDOMTree(bodyCopy, globalData);
  if (!processedBody) {
    throw new Error(
      "This page contains no elements. Are you sure the page is loaded completely?"
    );
  }
  const orphanedNodes = [];
  const bodyNodes = (_a = processedBody.childNodes) != null ? _a : [];
  for (let i = 0; i < bodyNodes.length; i++) {
    const node = bodyNodes[i];
    if (!node.parentNode) {
      orphanedNodes.push(node);
    }
  }
  for (let i = 0; i < orphanedNodes.length; i++) {
    processedBody.removeChild(orphanedNodes[i]);
  }
  return processedBody.outerHTML;
}
function addHtmlTreeSerializationFunctions() {
  const customWindow = window;
  customWindow.getCondensedHtmlTree = getCondensedHtmlTree;
}

// src/html/recording.ts
function addPressListener() {
  const customWindow = window;
  if (customWindow.pressListener) {
    return;
  }
  customWindow.pressListener = (event) => {
    if (!customWindow.captureKeystroke) {
      return;
    }
    console.log("[Momentic] Window press listener fired");
    customWindow.captureKeystroke({
      key: event.key,
      url: window.location.href
    });
  };
  document.addEventListener("keydown", customWindow.pressListener, {
    capture: true
  });
}
function addClickListener() {
  const customWindow = window;
  if (customWindow.clickListener) {
    return;
  }
  customWindow.clickListener = (event) => {
    const customWindow2 = window;
    if (!customWindow2.captureClick) {
      return;
    }
    if (!customWindow2.generateHtmlCacheAttributes) {
      throw new Error(
        "[Momentic] Missing generateHtmlCacheAttributes function"
      );
    }
    console.log("[Momentic] Window click listener fired", event.target);
    const element = event.target;
    const dataMomenticIdAttr = element.getAttribute("data-momentic-id");
    if (!dataMomenticIdAttr) {
      console.warn(
        "[Momentic] Clicked element does not have a data-momentic-id attribute, ignoring...",
        element
      );
      return;
    }
    const dataMomenticId = parseInt(dataMomenticIdAttr);
    const htmlAttributes = customWindow2.generateHtmlCacheAttributes(dataMomenticId);
    customWindow2.captureClick(dataMomenticId, htmlAttributes);
  };
  document.addEventListener("click", customWindow.clickListener, {
    // This flag allows us to process before stuff like navigation actually occurs
    capture: true
  });
}
function addRecordingListeners() {
  addClickListener();
  addPressListener();
}

// src/html/index.ts
addMedvCssGenerator();
addMomenticConstantsToWindow();
addBrowserLdistScript();
addMomenticSelectorGeneratorLib();
addTrackCursorScript();
addCssGenerationScript();
addHtmlTreeSerializationFunctions();
addElementSerializationScripts();
addGenerateHtmlCacheAttributesScript();
addRecordingListeners();
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as Vo}from"crypto";import{distance as rr}from"fastest-levenshtein";import $o from"js-beautify";import{homedir as jo}from"os";import{join as qo}from"path";import{chromium as Yo,devices as or}from"playwright";import{addExtra as Xo}from"playwright-extra";import Ko from"puppeteer-extra-plugin-recaptcha";import Jo from"puppeteer-extra-plugin-stealth";import{z as Ie}from"zod";var tn=Ie.object({thoughts:Ie.string(),result:Ie.boolean(),relevantElements:Ie.array(Ie.number()).optional()});import Ki from"string-argv";import{v4 as Qi}from"uuid";import{z as D}from"zod";var Re=(a=>(a.AI_PROVIDER="AIProviderError",a.AI_TIMEOUT="AITimeoutError",a.JOB_TIMEOUT="JobTimeoutError",a.ACTION_FAILURE="ActionFailureError",a.ASSERTION_FAILURE="AssertionFailureError",a.CONFIG_ERROR="UserConfigurationError",a.WEB_AGENT_PLATFORM="InternalWebAgentError",a.UNKNOWN_PLATFORM="InternalPlatformError",a))(Re||{});var Fe=class extends Error{constructor(e={}){super("Got empty a11y tree",e),this.name="EmptyA11yTreeError"}};var E=class extends Error{reason;emitToUser;constructor(e,t,n={},r=!1){let i=!1;for(let l of Object.values(Re))if(t.startsWith(l)){i=!0,e=l;break}i?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=r}toString(){return this.message}toJSON(){return{message:this.message}}};var ns=D.object({command:D.string(),thoughts:D.string()}),rs=D.string().pipe(D.coerce.number());var nn=D.object({phrase:D.string()}),ut=D.object({result:D.union([D.literal("NOT_FOUND"),D.string(),D.number(),D.array(D.unknown()),D.record(D.unknown(),D.unknown())])});import{z as mt}from"zod";var Ue=mt.object({width:mt.number().min(200).max(1e4),height:mt.number().min(200).max(1e4)}),rn={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},ss=Object.keys(rn);var pt=rn["Desktop Large"];var ds=new Set(Object.values(q));var Fr={AI_ACTION:"AI action",MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",SUCCESS:"Done"},us={AI_ACTION:"Ask AI to plan and execute something on the page.",MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from a dropdown based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import*as I from"zod";import{cloneDeep as Ts}from"lodash-es";import*as _ from"zod";import{z as ye}from"zod";var on=(t=>(t.PROD="production",t.DEV="development",t))(on||{}),hs=Object.values(on),sn="BASE_URL";var gs={[sn]:"https://www.google.com"},an=ye.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),xe=ye.object({name:ye.string(),variables:ye.record(ye.string().describe("variable name"),ye.string().describe("variable value"))});import*as ue from"zod";var ln=ue.object({type:ue.nativeEnum(ne),generatedStep:ce.optional(),serializedCommand:ue.string().optional(),elementInteracted:ue.string().optional()});var re=_.object({goal:_.string(),url:_.string(),browserState:_.string(),history:_.string(),numPrevious:_.number(),lastCommand:ln.or(_.null()),returnSchema:_.string().optional()}),ht=_.object({env:_.record(_.unknown()),results:_.array(_.unknown()),inputs:_.record(_.unknown()).optional()});var Be=Object.getPrototypeOf(async function(){}).constructor;var cn=(i=>(i.SUCCESS="SUCCESS",i.FAILED="FAILED",i.RUNNING="RUNNING",i.IDLE="IDLE",i.CANCELLED="CANCELLED",i))(cn||{}),dn=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(dn||{}),Ur=I.object({beforeUrl:I.string(),beforeScreenshot:I.string().optional(),afterUrl:I.string().optional(),afterScreenshot:I.string().optional(),startedAt:I.coerce.date(),finishedAt:I.coerce.date(),viewport:I.object({height:I.number(),width:I.number()}),status:I.nativeEnum(dn),message:I.string().optional(),elementInteracted:I.string().optional()}),We=I.object({startedAt:I.coerce.date(),finishedAt:I.coerce.date(),status:I.nativeEnum(cn),message:I.string().optional(),data:I.unknown().optional(),userAgent:I.string().optional(),beforeTestContext:ht.optional(),afterTestContext:ht.optional()}),gt=ve.merge(We).merge(I.object({results:Ur.array()})),un=Te.merge(We).merge(I.object({results:gt.array()})),Br=ct.merge(We).merge(I.object({moduleName:I.string().optional(),results:I.union([un,gt]).array()})),He=I.discriminatedUnion("type",[un,gt,Br]),xs=We.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0});function mn(o,e){return o.length<e?o:o.slice(0,e-3)+"[...]"}function ft(o){switch(o.type){case"SUCCESS":return o.condition?.assertion?`Check success condition: ${o.condition.assertion}`:"All commands completed";case"AI_EXTRACT":return`Extract data from page: ${o.goal}`;case"NAVIGATE":return`Go to URL: ${mn(o.url,30)}`;case"DIALOG":return`Automatically ${o.action.toLowerCase()} the next dialog`;case"CAPTCHA":return"Solve captchas on the page";case"GO_BACK":return"Go back to the previous page";case"GO_FORWARD":return"Go forward to the next page";case"SCROLL_DOWN":return`Scroll down ${o.deltaY?`${o.deltaY}px`:"1 page height"}${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"SCROLL_UP":return`Scroll up ${o.deltaY?`${o.deltaY}px`:"1 page height"}${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"SCROLL_LEFT":return`Scroll left ${o.deltaX?`${o.deltaX}px`:"1 page width"}${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"SCROLL_RIGHT":return`Scroll right ${o.deltaX?`${o.deltaX}px`:"1 page width"}${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"WAIT":return`Wait for ${o.delay} seconds`;case"REFRESH":return"Refresh the page";case"CLICK":{let n="";return o.target?.elementDescriptor.length?n=` on element: '${o.target.elementDescriptor}'`:o.cache?.target.nodeOnlySerializedHtml&&(n=` on element: '${o.cache?.target.nodeOnlySerializedHtml}'`),`Click${n}`}case"FOCUS":return`Focus '${o.target.elementDescriptor}'`;case"BLUR":return`Focus '${o.target.elementDescriptor}'`;case"DRAG":return`Drag '${o.fromTarget.elementDescriptor}' onto '${o.toTarget.elementDescriptor}'`;case"MOUSE_DRAG":return o.target?.elementDescriptor?`Click and drag '${o.target.elementDescriptor}' by ${o.deltaX}px horizontally, ${o.deltaY}px vertically`:`Click and drag mouse by ${o.deltaX}px horizontally, ${o.deltaY}px vertically`;case"TYPE":{let n="";return o.target?.elementDescriptor.length?n=` in element: '${o.target.elementDescriptor}'`:o.cache?.target.nodeOnlySerializedHtml&&(n=` in element: '${o.cache?.target.nodeOnlySerializedHtml}'`),`Type '${o.value}'${n||""}`}case"HOVER":{let n="";return o.target.elementDescriptor.length>0?n=` over element: '${o.target.elementDescriptor}'`:o.cache?.target.nodeOnlySerializedHtml&&(n=` over element: '${o.cache?.target.nodeOnlySerializedHtml}'`),`Hover${n}`}case"PRESS":return`Press ${o.value}`;case"SELECT_OPTION":let e="";return o.target.elementDescriptor.length>0?e=` in: '${o.target.elementDescriptor}'`:o.cache?.target.nodeOnlySerializedHtml&&(e=` in: '${o.cache?.target.nodeOnlySerializedHtml}'`),`Select option '${o.option}'${e}`;case"TAB":return`Switch to tab with substring: ${o.url}`;case"NEW_TAB":return`Open new tab to: ${o.url}`;case"REQUEST":return`Send ${o.method} request to ${o.url}`;case"COOKIE":return`Set cookie: ${o.value}`;case"LOCAL_STORAGE":return`Set local storage: ${o.key}: ${o.value}`;case"JAVASCRIPT":return`Run JavaScript: ${mn(o.code,30)}`;case"AI_ASSERTION":return`${o.useVision?"Visual assertion":"Assertion"}: '${o.assertion}'`;case"AI_WAIT":return`Wait until ${o.useVision?"visual assertion":"assertion"} is true: '${o.assertion}'`;case"VISUAL_DIFF":return`Visual diff with baseline${o.target?` for element: '${o.target.elementDescriptor}'`:""}`;default:return(n=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(o)}}import{parseString as Wr,splitCookiesString as Hr}from"set-cookie-parser";import{z as Y}from"zod";var Gr=Y.object({name:Y.string(),value:Y.string(),url:Y.string().optional(),domain:Y.string().optional(),path:Y.string().optional(),expires:Y.number().default(Date.now()/1e3+60*60*24*365),httpOnly:Y.boolean().default(!1),secure:Y.boolean().default(!0),sameSite:Y.union([Y.literal("Strict"),Y.literal("Lax"),Y.literal("None")]).default("None")});function pn(o){let e=[],t=Hr(o);for(let n of t){let r=Wr(n);if(!r.name)throw new Error("Name missing from cookie");if(!r.value)throw new Error("Value missing from cookie");let i;if(r.sameSite){let c=r.sameSite.trim().toLowerCase();if(c==="strict")i="Strict";else if(c==="lax")i="Lax";else if(c==="none")i="None";else throw new Error(`Invalid sameSite setting in cookie: ${c}`)}!r.path&&r.domain&&(r.path="/");let l=Gr.parse({...r,expires:r.expires?r.expires.getTime()/1e3:void 0,sameSite:i});e.push(l);let s=[l.name,...Object.keys(l)].map(c=>c.toLowerCase()),a=n.match(/\b(\w+)=([^;]*)/g);if(a)for(let c of a){let[m,d]=c.split("=");if(!m||!d)throw new Error(`Invalid key-value pair in cookie: ${c}`);s.includes(m.toLowerCase())||e.push({...l,name:m,value:d})}}return e}import{z as K}from"zod";var $r="1.0.0",hn=K.object({run:K.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:K.boolean().optional().describe("Defaults to true")}),Us=K.object({type:K.literal("momentic/fixture"),schemaVersion:K.string(),name:K.string(),description:K.string().optional(),setup:K.object({steps:hn.array(),timeout:K.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:K.object({steps:hn.array(),timeout:K.number().optional().describe("Timeout for all steps in seconds")}).optional()}),Bs={type:"momentic/fixture",schemaVersion:$r,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as jr}from"zod";var Gs=jr.string().array();import{z as N}from"zod";import{z as L}from"zod";var qr="modules",Yr="fixtures",Xr="environments",Kr="chromium",gn=[qr,Yr,Xr,Kr],yt="momentic-frame",$s=`${yt}-0`;import{isValidCron as Jr}from"cron-validator";import{z as V}from"zod";var Qr=V.object({pageLoadTimeoutMs:V.number().optional(),autoWaitForNetworkIdle:V.boolean().optional()}),Ge=Qr.merge(V.object({disableAICaching:V.boolean().default(!1),viewport:Ue.optional()})),fn=V.object({cron:V.string().refine(o=>Jr(o),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:V.boolean().default(!1),env:V.string().optional(),timeZone:V.string().default("America/Los_Angeles"),jobKey:V.string().optional()}),yn=V.object({onSuccess:V.boolean().default(!1),onFailure:V.boolean().default(!0)});var Zr=L.string().min(1).max(255).superRefine((o,e)=>{try{oo(o)}catch(t){return e.addIssue({code:L.ZodIssueCode.custom,message:t.message,fatal:!0}),L.NEVER}}),eo=L.object({name:L.string(),defaultOnCloud:L.boolean().optional(),defaultOnLocal:L.boolean().optional(),fixtures:an.array().optional()}),se=L.object({id:L.string(),name:Zr,baseUrl:L.string().url().optional(),schemaVersion:L.string(),advanced:Ge,retries:L.number(),envs:L.array(eo).optional()}),na=se.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),to=L.object({createdAt:L.coerce.date(),updatedAt:L.coerce.date(),schedule:fn,notification:yn,createdBy:L.string(),organizationId:L.string()}),no=se.merge(to).merge(L.object({steps:L.array(Ee)})),bn=se.merge(L.object({steps:L.array(Ee)})),ra=se.merge(L.object({steps:De.array()})),ro=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function oo(o){if(o=o.toLowerCase().trim(),o.length===0||o.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(o))throw new Error("Name can only contain alphanumeric characters, spaces, dashes, and underscores.");if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(o))throw new Error(`"${o}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(o)||/^\s|\s$/.test(o))throw new Error("Name cannot start or end with a space or dot.");if(o.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(o==="none")throw new Error("Name cannot be 'none'.");if(gn.includes(o))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(o.match(ro))throw new Error("Name cannot be a UUID. Please choose a different name.")}import{stringify as la}from"yaml";import{z as O}from"zod";var pa=O.object({test:O.string().describe("YAML for the test, including metadata and steps"),modules:O.record(O.string(),O.string()).describe("Map of module name to YAML for the module")}),ha=se.merge(O.object({steps:De.array(),fileType:O.literal("momentic/test")})),wn=ke.merge(O.object({schemaVersion:O.string(),fileType:O.literal("momentic/module")})),ga=se.merge(O.object({steps:O.array(O.record(O.string(),O.unknown()))})),fa=O.object({moduleId:O.string().uuid(),name:O.string(),schemaVersion:O.string(),steps:O.array(O.record(O.string(),O.unknown())),parameters:O.string().array().optional()});var Ea=N.array(N.object({id:N.string(),name:N.string(),fullFilePath:N.string(),testPath:N.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:N.string(),lastModified:N.coerce.date(),createdAt:N.coerce.date()}));var Aa=N.object({steps:Ee.array()});var Ia=N.object({name:N.string(),baseUrl:N.string().url().optional(),environment:N.string().optional(),viewport:Ue.optional()}),Ra=bn.merge(N.object({testPath:N.string()})),xa=N.object({name:N.string(),steps:fe.array()});var Na=N.array(wn),Oa=N.array(N.object({name:N.string(),moduleId:N.string().uuid(),numSteps:N.number()})),La=N.array(xe);import*as z from"zod";var Sn=z.object({thoughts:z.string(),id:z.number().int(),conflicts:z.number().int().array().optional()});var Da=z.object({thoughts:z.string().optional().describe("only provided if a description was provided"),target:le.optional().describe("only provided if a description was provided"),conflictingElements:z.string().array().optional().describe("serialized html of conflicting elements"),options:z.array(z.string()).optional().describe("provided for <select> elements only"),screenshot:z.object({data:z.string(),height:z.number().int(),width:z.number().int()}).optional().describe("only provided if returnScreenshot is true")});function bt(o,e){if(!e||"useSelector"in o&&o.useSelector)return e;switch(o.type){case"SELECT_OPTION":return`<select> element: ${e}`;case"TYPE":return`text input element: ${e}`;default:return e}return e}var io={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},so={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},wt=class o{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=io[e],r;Array.isArray(t[0])?(r=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(r={...t[0],...this.logBindings},t=t.slice(1));let i=so[e],l=[`${i}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&l.push("\x1B[39m"),l.push(...t),console.log(...l),r&&!Array.isArray(r))for(let[s,a]of Object.entries(r)){let c=a;a instanceof Error?c=a.message:typeof a=="object"&&(c=JSON.stringify(a,void 0,2),c=c.split(`
`).map((m,d)=>d>0?`  ${m}`:m).join(`
`)),console.log(e===0?`${i}  ${s}:`:`  ${s}:`,c)}else if(r)for(let s of r){let a=s;typeof s=="object"&&(a=JSON.stringify(s,void 0,2),a=a.split(`
`).map((c,m)=>m>0?`  ${c}`:c).join(`
`)),console.log(e===0?`${i}  `:"  ",a)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new o(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Fa=new wt(1,{}),$e={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>$e,flush:()=>{},bindings:()=>({})},Ve={},me=({logger:o,logKey:e,maxCount:t,intervalMs:n},r,i,...l)=>{let s=Ve[e];s?clearTimeout(s.timer):(s={count:0,totalCount:0},Ve[e]=s),s.totalCount++,s.count<t&&(s.count++,o.debug(r,i,...l)),s.timer=setTimeout(()=>{let a=Ve[e];a?.totalCount!==a?.count&&o.debug({logKey:e,totalCount:a?.totalCount,count:a?.count},`Debug logs were rate-limited for ${e}`),delete Ve[e]},n)};import{z as ee}from"zod";var ao=ee.object({id:ee.string(),createdAt:ee.coerce.date(),createdBy:ee.string(),organizationId:ee.string(),name:ee.string(),schemaVersion:ee.string().describe("Schema version for steps"),parameters:ee.string().array().or(ee.null()).describe("Parameter list"),numSteps:ee.number()}),Ha=ee.object({steps:fe.array()}).merge(ao.omit({numSteps:!0}));import*as f from"zod";import{z as A}from"zod";var St={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Ct={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED",WAITING_FOR_USER:"WAITING_FOR_USER"},lo={PASSED:"PASSED",FAILED:"FAILED"},je=A.string().pipe(A.coerce.date()).or(A.date()),co=A.object({id:A.string(),createdAt:je,createdBy:A.string(),organizationId:A.string(),scheduledAt:je.or(A.null()),startedAt:je.or(A.null()),finishedAt:je.or(A.null()),testId:A.string().or(A.null()),status:A.nativeEnum(Ct),expectedStatus:A.nativeEnum(lo).or(A.null()),runKey:A.string(),trigger:A.nativeEnum(St),attempts:A.number(),test:A.object({name:A.string(),id:A.string()}).or(A.null()),suiteId:A.string().or(A.null()).optional(),testName:A.string().or(A.null()).optional()}),uo=co.merge(A.object({results:He.array(),test:A.object({name:A.string(),id:A.string(),baseUrl:A.string(),advanced:Ge.optional()}).or(A.null())})),Xa=A.object({id:A.string(),name:A.string()});var ae=f.object({disableCache:f.boolean()}),al=f.object({error:f.boolean(),reason:f.string(),message:f.string()}),ll=re.merge(ae),Cn=at,cl=f.discriminatedUnion("vision",[re.merge(ae).merge(f.object({vision:f.literal(!1)})),re.pick({goal:!0,url:!0}).merge(ae).merge(f.object({screenshot:f.string(),vision:f.literal(!0)}))]),Tt=tn,dl=re.pick({browserState:!0,goal:!0}).merge(ae),ul=re.pick({goal:!0}).merge(ae).merge(f.object({screenshot:f.string().describe("base64 encoded image"),hintActivatedScreenshot:f.string().describe("base64 encoded image")})),vt=Sn,ml=re.pick({goal:!0,url:!0}).merge(ae),Tn=f.string().array(),pl=re.pick({goal:!0,browserState:!0}).merge(ae),vn=nn,hl=re.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(ae);var gl=f.object({testPaths:f.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:f.string().optional(),all:f.boolean().optional(),urlOverride:f.string().optional()}),fl=f.object({message:f.string(),queuedTests:f.object({name:f.string(),id:f.string()}).array()});var yl=f.string().array(),bl=f.union([f.object({paths:f.string().array().describe("run specific test paths (e.g. todo-test)"),all:f.boolean().describe("run all tests").optional()}),f.object({path:f.string().describe("deprecated; present for backcompat")})]),wl=f.object({tests:f.record(f.string().describe("Test name"),f.string().describe("Test YAML")),modules:f.record(f.string().describe("Module name"),f.string().describe("Module YAML"))}),mo=f.object({test:f.string().describe("test YAML"),modules:f.record(f.string().describe("moduleId"),f.string().describe("module YAML"))}),Sl=mo.array(),Cl=f.object({testId:f.string(),schemaVersion:f.string(),steps:f.array(f.record(f.unknown()))}),Tl=f.object({entries:f.array(dt),testId:f.string()}),vl=f.object({steps:f.array(f.record(f.unknown())),testId:f.string(),schemaVersion:f.string(),organizationId:f.string()});var El=f.object({testPath:f.string(),testId:f.string(),testName:f.string()}).partial().merge(f.object({trigger:f.nativeEnum(St)}));var Al=f.object({startedAt:f.coerce.date(),finishedAt:f.coerce.date(),results:He.array(),status:f.nativeEnum(Ct)}).partial(),Il=f.object({screenshot:f.string()}),Rl=f.object({key:f.string()}),xl=f.object({orgId:f.string()}),Nl=f.array(xe),Ol=f.array(xe),Ll=f.record(f.string(),f.union([f.string(),f.boolean()]));import{z as H}from"zod";var po=H.object({content:H.string(),ids:H.string().array(),tokenLength:H.number()}),ho=H.object({chunks:po.array(),numRecs:H.number()}),Pl=H.object({ids:H.string().array(),score:H.number(),tokenLength:H.number()}),kl=H.object({description:H.string(),tokenLimit:H.number()}).merge(ho),En=H.object({ids:H.number().array()});import{validator as $l}from"@exodus/schemasafe";var pe=(o,e)=>{let{hostname:t,pathname:n}=new URL(o),{hostname:r,pathname:i}=new URL(e);return t!==r||n!==i},Et=o=>{try{return new URL(o),!0}catch{return!1}},An=o=>!o.toLowerCase().startsWith("http"),At=(o,e)=>{try{return new URL(o,e),!0}catch{return!1}};var In={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts"],relevantElementAttributes:["name","id","value","type","class","height","width","placeholder","target","title","href","src","alt","role","headers","scope","checked","required","action","data-value","data-testid","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function Rn(o){if(o[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(o.length>10){let a=Math.floor(o.length/8);if((o.match(/[-_:/ ]/g)??[]).length<a)return!0}if((o.match(/[^0-9a-zA-Z.]/g)??[]).length/o.length>.2)return!0;let t=(o.match(/[0-9]/g)??[]).length;if(t/o.length>.3)return!0;let n=(o.toLowerCase().match(/[aeiou]/gi)??[]).length;if((o.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let i=(o.match(/[A-Z]/g)??[]).length,l=(o.match(/[a-z]/g)??[]).length,s=Math.ceil(o.length*.3);return!!(l&&t&&Math.abs(l-t)<s||l&&i&&Math.abs(l-i)<s)}import{randomUUID as Ln}from"crypto";import{distance as Rt}from"fastest-levenshtein";import{cloneDeep as _n}from"lodash-es";var xn=new Set(["about:blank","chrome-error://chromewebdata/"]),Nn=3,J="data-momentic-id",It=500;var go=["focusable","keyshortcuts","controls","live","relevant"],fo=["selected","readonly","modal","required"],yo=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],bo=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree"],wo=["menulistpopup","statictext","inlinetextbox"],So=80,qe=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],Co=["cite"],To={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"]},Mn={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},xt=class o{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){Ro(this.properties,e.domNode);let t=e.domNode.attributes.id;this.tagName=e.domNode.tagName||void 0,this.name=this.name||e.domNode.attributes.name||(t&&!Rn(t)?t:"")}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return yo.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=Mn){let t=Object.assign({},Mn,e),{indentLevel:n,noChildren:r,noProperties:i,noID:l,noContent:s}=t,a=_n(this.properties),c=" ".repeat(n),m=this.role||(a.role?`${a.role}`:"");delete a.role;let d=this.tagName??"unknown",p=this.name;m==="heading"&&p==="heading"&&(p="");let h=qe.includes(this.role)||Co.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${c}${p}
`;let g=`${c}<${d}`;if(!l&&!h&&(g+=` id="${this.id}"`),m&&m!=="generic"&&m!==d&&!(To[m]??[]).includes(d)&&(g+=` role=${JSON.stringify(m)}`),p&&(g+=` name=${JSON.stringify(p)}`),this.content&&!s&&(g+=` content=${JSON.stringify(this.content)}`),Object.keys(a).length>0&&!i&&Object.entries(a).forEach(([y,w])=>{if(!go.includes(y)){if(fo.includes(y)&&!w)return;if(y==="value"&&s&&a.type==="text")return;typeof w=="string"?g+=` ${y}="${w}"`:typeof w=="boolean"?w?g+=` ${y}`:g+=` ${y}={false}`:typeof w<"u"&&(g+=` ${y}={${JSON.stringify(w)}}`)}}),d==="::before"||d==="::after"){let y="";for(let w of this.children)y+=w.serialize({...e,indentLevel:n,neighbors:0});return y}let b=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||r||b)g+=` />
`;else{let y="";for(let S of this.children)y+=S.serialize({...e,indentLevel:n+2,neighbors:0});let w=y.trim();w.length<=So&&!w.includes(`
`)?g+=`>${w}</${d}>
`:g+=`>
${y}${c}</${d}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let y=this.parent.children.findIndex(v=>v.id===this.id),w=y>0?this.parent.children[y-1]?.serialize({...e,neighbors:0}):"",S=y<this.parent.children.length-1?this.parent.children[y+1]?.serialize({...e,neighbors:0}):"";return`${w||""}
${g}
${S||""}`}return g}shallowClone(){let e=new o({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=_n(this.properties),e}},Nt=class o{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(i,l=!1){let s=e.has(i.id)||i.id===t?.id,a=i.shallowClone(),c=i.children,m=!1,d=[];for(let p of c){let h=n(p,s||m);h&&(d.push(h),h.parent=a,m=!0)}if(a.children=d,s||m)return a;if(qe.includes(i.role)&&l)return a}let r=n(t);return new o(r,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function vo(o){return o.name?.value?`"${o.name.value}"`:o.role?.value&&o.role.value!=="none"&&o.role.value!=="generic"?`"${o.role.value}"`:`"${o.nodeId}"`}function Eo(o,e,t,n){return o.bounds.x===null||o.bounds.y===null||o.bounds.height===null||o.bounds.width===null||o.bounds.width===0||o.bounds.height===0?!0:o.bounds.x+o.bounds.width<e.leftBound||o.bounds.x>e.rightBound?(me({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:o,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):o.bounds.y+o.bounds.height<e.upperBound||o.bounds.y>e.lowerBound?(me({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:o,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):o.computedStyles.display==="none"?(t.debug({domNode:o},"Filtering out node since it has display none"),!1):!0}function Pn({node:o,parent:e,domGraph:t,inputNodeMap:n,logger:r,callId:i,filterByViewport:l,viewportDetails:s}){if(!e&&o.parentId)throw new Error(`Got no parent for accessibility node ${o.nodeId}: ${JSON.stringify(o)}`);let a=o.backendDOMNodeId!==void 0?t.backendIdToNode[o.backendDOMNodeId]:void 0;if(!a&&!wo.includes((o.role?.value).toLowerCase()))return[];if(a&&e&&l&&s&&o.backendDOMNodeId&&!Eo(a,s,r,i))return a&&(a.momenticIgnored=!0),[];let c=o.name?.value?typeof o.name.value=="string"?o.name.value:`${o.name.value}`:"",m=o.value?.value?typeof o.value.value=="string"?o.value.value:`${o.value.value}`:"";if(c==="momentic_cursor"||c.includes("chakra"))return a&&(a.momenticIgnored=!0),[];let d=new xt({domNode:a,id:parseInt(o.nodeId),role:o.role?.value||"",name:c,content:m,properties:o.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+vo(o),backendNodeID:o.backendDOMNodeId,ignoredByCDP:o.ignored}),p=o.childIds??[];for(let b of p){if(!b)continue;let y=n.get(parseInt(b));if(!y)continue;let w=Pn({node:y,parent:d,domGraph:t,inputNodeMap:n,logger:r,callId:i,filterByViewport:l,viewportDetails:s});w.length&&(d.children=d.children.concat(w))}if(d.role==="StaticText"&&(d.children=[]),d.children.length===1&&d.children[0].role==="StaticText"){let b=d.name,y=d.children[0]?.name;(b===y||!y)&&(d.children=[])}let h=[];for(let b=d.children.length-1;b>=0;b--){let y=d.children[b];if(y.role!=="StaticText"){h.push(y);continue}if(b===0||d.children[b-1].role!=="StaticText"){h.push(y);continue}d.children[b-1].name+=` ${y.name}`}if(d.children=h.reverse(),d.role==="generic"&&d.children.length===1){let b=d.children[0];if(d.name&&!qe.includes(b.role)&&d.name===b.name)return a&&(a.momenticIgnored=!0),d.children}if(!d.isInteresting()&&o.parentId)return a&&(a.momenticIgnored=!0),d.children;for(let b of d.children)b.parent=d;return[d]}function kn({node:o,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:r,startId:i=1}){o.id=i,i+=1,e.set(o.id,o),o.dataMomenticId?t.set(o.dataMomenticId,o):qe.includes(o.role)||me({logger:n,logKey:r,maxCount:5,intervalMs:3e3},{node:o.serialize({neighbors:1,maxLevel:1}),role:o.role,logKey:r},"Node has no data-momentic-id");for(let l of o.children)i=kn({node:l,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:r,startId:i});return i}function Dn({a11yGraph:o,domGraph:e,logger:t,filterByViewport:n,viewportDetails:r}){if(!o.root)throw new Error("A11y tree has no root");let i=Ln();o.allNodes=o.allNodes.filter(m=>m.ignored?!m.ignoredReasons?.find(p=>bo.includes(p.name)):!0);let l=new Map;for(let m of o.allNodes)l.set(parseInt(m.nodeId),m);let s=Pn({node:o.root,domGraph:e,parent:null,inputNodeMap:l,logger:t,callId:Ln(),filterByViewport:n,viewportDetails:r});if(s.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(s)}`);if(s.length===0)throw new Fe;let a=new Map,c=new Map;return kn({node:s[0],a11yIdNodeMap:a,dataMomenticIdMap:c,logger:t,callId:i}),new Nt(s[0],a,c)}var Ot=(o,e)=>{let t=1,n=["name","role","content"];for(let r of n){let i=o[r];if(typeof i!="string"||!i.trim())continue;let l=Rt(i,e[r])/Math.min(i.length,e[r].length);l===0?t+=2:l<=.15&&t++}if(e.numChildren!==void 0&&(o.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let r=o.getNodeOnlySerializedForm(),i=Rt(r,e.nodeOnlySerializedForm)/Math.min(r.length,e.nodeOnlySerializedForm.length);i===0?t+=2:i<=.15&&t++}if(e.serializedForm){let r=o.serialize({noID:!0,maxLevel:1,neighbors:1}),i=Rt(r,e.serializedForm)/Math.min(r.length,e.serializedForm.length);i===0?t+=2:i<=.15&&t++}return t},Ao=["href","src"];function Io(o,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return Ao.includes(o)&&e.length>60?e.slice(0,50)+"...":o==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function Ro(o,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{In.relevantElementAttributes.includes(t)&&!o[t]&&!t.startsWith("aria")&&t!=="class"&&(o[t]=Io(t,n))})}var he={r:147,g:196,b:125,a:.55},Xe={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:he,paddingColor:he,borderColor:he,marginColor:he,eventTargetColor:he,shapeColor:he,shapeMarginColor:he,showInfo:!0,showAccessibilityInfo:!0};var Ye=["display","opacity","visibility","height","max-height","overflow"];function zn({snapshot:o,devicePixelRatio:e,pageFrameId:t}){let n=o.strings,r=o.documents,i=r[0];t&&(i=r.find(S=>n[S.frameId]===t));let l={},s=i.layout,a={};s.nodeIndex.forEach((S,v)=>{a[S]=v});let c=s.styles,m=s.bounds??[],d=i.nodes,p=d.backendNodeId??[],h=d.attributes??[],g=d.parentIndex??[],b=d.nodeName??[],y=d.inputChecked??{index:[]};for(let S=0;S<p.length;S++){let v=p[S],B=h[S]??[],Q=g[S]&&g[S]>=0?g[S]:null,P=a[S],k;P?k=m[P]??[]:k=[];let W={backendNodeId:v,bounds:{x:k[0]??null,y:k[1]??null,width:k[2]??null,height:k[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:Q?p[Q]:null,tagName:b[S]!==void 0?n[b[S]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};W.parentBackendNodeId&&l[W.parentBackendNodeId].children.push(v);for(let C of Object.keys(W.bounds)){let X=C;W.bounds[X]!==null&&(W.bounds[X]/=e)}let we=c[S]??[];for(let C=0;C<we.length&&!(C>=Ye.length);C++){let X=we[C];if(!X||isNaN(X))continue;let Se=n[X];if(!Se)continue;let Oe=Ye[C];W.computedStyles[Oe]=Se}for(let C=0;C<B.length;C+=2){let X=B[C],Se=B[C+1];if(!X||!Se)continue;let Oe=n[X],Bt=n[Se];!Oe||!Bt||(W.attributes[Oe]=Bt)}y.index.includes(S)&&(W.attributes.checked="true"),l[W.backendNodeId]=W}return{root:l[p[0]],backendIdToNode:l}}async function Fn(o){return o.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,r)=>{let i=`${n} ${r.name}="${r.value}"`;return i.length<=50?i:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var M=(o=1e3)=>new Promise(e=>setTimeout(()=>e(),o));var Un=`
function addCursorScript() {
  if (window.cursor) {
    return;
  }
  window.cursor = document.createElement("img");
  window.cursor.setAttribute(
    "src",
    "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDcpIj48cGF0aCBkPSJtNi4xNDggMTguNDczIDEuODYzLTEuMDAzIDEuNjE1LS44MzktMi41NjgtNC44MTZoNC4zMzJsLTExLjM3OS0xMS40MDh2MTYuMDE1bDMuMzE2LTMuMjIxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im02LjQzMSAxNyAxLjc2NS0uOTQxLTIuNzc1LTUuMjAyaDMuNjA0bC04LjAyNS04LjA0M3YxMS4xODhsMi41My0yLjQ0MnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+",
  );
  window.cursor.setAttribute("aria-label", "momentic_cursor")
  window.cursor.setAttribute("id", "momentic_cursor");
  window.cursor.setAttribute(
    "style",
    "position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0; height:4vh; width:2vw;",
  );
  window.cursor.style.filter =
    "invert(0%) sepia(6%) saturate(24%) hue-rotate(315deg) brightness(89%) contrast(110%)";
  document.body.appendChild(cursor);
  document.onmousemove = function (e) {
    e = e || window.event;
    document.getElementById("momentic_cursor").style.left =
      \`calc(\${e.pageX}px - 0.8vw)\`;
    document.getElementById("momentic_cursor").style.top =
      \`calc(\${e.pageY}px - 1.8vh)\`;
    console.debug("[MOMENTIC] Cursor moved", e.pageX, e.pageY);
  };
}
setInterval(addCursorScript, 1000)
`;function Bn(){return window.lastCursorPos}function Wn(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function Hn(){window.globalHintManager&&window.globalHintManager.reset()}function Gn(){let o=document.body.getElementsByTagName("*"),e=1;for(let t=0;t<o.length;t++){let n=e.toString();for(;[6].some(i=>n.includes(i.toString()));)e++,n=e.toString();let r=o[t];r?.setAttribute("data-momentic-id",`${e}`),r?.setAttribute("aria-keyshortcuts",`${e}`),e++}}var xo=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),No=new Set(["script","document"]),Oo=["cdn.doubleverify.com","securepubads.g.doubleclick.net","pagead2.googlesyndication.com","googleads.g.doubleclick.net","static.criteo.net","intercom.io","googletagmanager.com","google-analytics.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","px.ads.linkedin.com","www.clarity.ms","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms","app.posthog.com","soraban.com","rs.fullstory.com","api2.amplitude.com"],Lo=["youtube.com/api/stats","play.google.com/log","youtube.com/youtubei/v1/log_event","retool.com/api/ddMetric"],_o=["api.stripe.com","supabase.co"],Mo=[];async function $n(o){for(let e of Mo)await o.route(e,t=>t.abort())}function Lt(o){return`${o.resourceType()} ${o.method()} ${o.url()}`}function Vn(o){return o=o.replace(/^www\./,""),o}function jn(o){return _o.some(e=>o.includes(e))}function qn(o,e){if(!xo.has(o.resourceType()))return!1;let t=new URL(e),n=o.url(),r=new URL(n);return Oo.some(i=>r.hostname.includes(i))||Lo.some(i=>n.includes(i))?!1:No.has(o.resourceType())||o.method()!=="GET"?!0:Vn(r.hostname).includes(Vn(t.hostname))}var Yn=`(function () {
  if (document.__customCookieSetterApplied__) {
    return;
  }
  document.__customCookieSetterApplied__ = true;
  console.log("[MOMENTIC] Applying cookie interceptor")

  // Store the original document.cookie object
  const originalCookieProperty =
    Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ||
    Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");

  Object.defineProperty(document, "cookie", {
    get: function () {
      return originalCookieProperty.get.apply(document);
    },
    // Customize the setter
    set: function (value) {
      // Append "; SameSite=None; Secure" to all cookie strings, checking not to double-append if script reruns
      const cookieValue = value + "; SameSite=None; Secure";
      console.debug("[MOMENTIC] Adding cookie", cookieValue);
      // Use the original setter to set the modified cookie string
      originalCookieProperty.set.apply(document, [cookieValue]);
      originalCookieProperty.set.apply(document, [value]);
    },
  });
})()`;var Xn=o=>{let e;for(let n of o){let r=document.querySelectorAll(n);if(!r.length){let l=`[MOMENTIC] Could not find element in document ${document.title} with selector: ${n}`;throw console.error(l),new Error(l)}if(r.length>1){let l=`[MOMENTIC] Found multiple elements with selector: ${n}`;throw console.error(l),new Error(l)}let i=r[0];if(e&&e.getAttribute("data-momentic-id")!==i?.getAttribute("data-momentic-id")){let l="[MOMENTIC] Rejecting selector combination because of mismatch";throw console.error(l),new Error(l)}e=i}let t=e.getAttribute("data-momentic-id");if(!t){let n=`[MOMENTIC] Selector resolved to element with no data-momentic-id: ${e.outerHTML}`;throw console.error(n),new Error(n)}return{momenticId:t}};var Kn=o=>{let e=window,t=document.querySelector(`[data-momentic-id="${o}"]`);if(!t)throw new Error(`[MOMENTIC] Could not find element with data-momentic-id: ${o}`);if(!e.serializeElementWithContext)throw new Error("[MOMENTIC] Momentic core libraries not found");return e.serializeElementWithContext(t)},Jn=({serializedHtml:o,distanceThreshold:e})=>{let t=window;if(!t.ldist||!t.serializeElementOnlyWithText)throw new Error("[MOMENTIC] Momentic core libraries not found");let n=document.body.getElementsByTagName("*"),r,i,l=1/0,s;for(let a of n){let c=t.serializeElementOnlyWithText(a);if(Math.abs(c.length-o.length)>e)continue;let m=t.ldist(o,c);m<l?(l=m,i=c,r=a.getAttribute("data-momentic-id")??void 0,s=void 0):m===l&&(s=c)}if(s&&l!==0)throw new Error(`[MOMENTIC] Multiple HTML elements with same distance (${l}) found:
      ${s}
      ==================
      ${i}
      `);if(l>e)throw new Error(`Closest HTML candidate still has too far distance (${l}) from threshold (${e})
      Closest node: ${i}
      Target node: ${o}
      `);return{dataMomenticId:r,closestDistance:l}};var Qo=qo(jo(),"momentic","chromium"),be=process.env.TWO_CAPTCHA_KEY,Ke=Xo(Yo);Ke.use(Jo());Ke.use(Ko({provider:{id:"2captcha",token:be},visualFeedback:!0}));var _t=class o{browser;context;page;systemDevicePixelRatio;networkSettings;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;constructor({browser:e,context:t,page:n,baseUrl:r,logger:i,localMode:l,cdpClient:s,networkSettings:a}){this.browser=e,this.context=t,this.cdpClient=s,this.page=n,this.baseURL=r,this.originsVisited.add(new URL(r).origin),this.logger=i,this.networkSettings=a,this.localMode=!!l}static USER_AGENT=or["Desktop Chrome"].userAgent;static async init({baseUrl:e,logger:t,networkSettings:n,browserArgs:r,contextArgs:i,onBrowserUpdateDuringLoad:l,onClose:s,waitForLoad:a=!0,localMode:c,localAppUrl:m,extensionPath:d,skipPageSetup:p,timeout:h}){let g={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...r??{}},b={viewport:pt,userAgent:or["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...i??{}},y=null,w,S;c?(w=await Ke.launchPersistentContext(Qo,{...g,...b,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${m}`,`--load-extension=${d}`,"--test-type=browser"],baseURL:e}),S=w.pages()[0],s&&S.on("close",()=>{s()})):(y=await Ke.launch(g),w=await y.newContext({deviceScaleFactor:process.env.NODE_ENV==="development"?2:1,...b,baseURL:e}),S=await w.newPage()),await $n(w),await o.addBrowserPageInitScripts(w,!!c);let v=new o({browser:y,context:w,page:S,baseUrl:e,logger:t,localMode:c,networkSettings:n,cdpClient:await w.newCDPSession(S)});v.systemDevicePixelRatio=b.deviceScaleFactor;let B=!1,Q=async()=>{try{await v.navigate({url:e,initialNavigation:!p,loadTimeoutMs:h})}catch(P){if(t.error({err:P},"Failed to initialize chrome browser"),a)throw P}finally{B=!0}};if(a?await Q():Q(),l){let P=async()=>{try{l({viewport:await v.getViewport(),buffer:await v.screenshot({}),iframeSrcUrls:await v.getFrameSrcUrls()})}catch{}},k=setInterval(()=>{if(Date.now()-W<(h??8e3*2))P();else{clearInterval(k);return}},400),W=Date.now();for(;!B&&Date.now()-W<(h??8e3*2);)await M(250);clearInterval(k)}return v}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="";for(;e<5;){try{if(this.activeFrame.type==="name"?(n=this.activeFrame.name,t=this.page.frame(n)):(n=this.activeFrame.url,n.startsWith("/")&&n.endsWith("/")?t=await(await this.page.evaluateHandle(r=>{let i=new RegExp(r.slice(1,-1));return Array.from(document.querySelectorAll("iframe")).find(l=>i.test(l.src))},n)).asElement()?.contentFrame():t=await(await this.page.$(`iframe[src="${n}"]`))?.contentFrame()),t)return t}catch{}await M(100),e++}throw new E("InternalWebAgentError",`Failed to find frame '${n}' on page ${this.page.url()}`)}async initCDPSession(e){e===void 0&&(e=this.networkSettings.pageLoadTimeoutMs??3e3);let t=!1,n=e===null?1/0:2,r=async()=>{try{this.cdpClient=await this.context.newCDPSession(this.page),await this.cdpClient.send("Accessibility.enable"),await this.cdpClient.send("DOM.enable"),await this.cdpClient.send("Overlay.enable"),t=!0}catch(i){if(n>0)return this.logger.warn({err:i},"Failed to initialize CDP session, re-creating CDP client"),await M(250),n--,r();throw i}};return e===null?await r():await Promise.race([r(),M(e)]),t}setLogger(e){this.logger=e}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&(this.logger.debug("Clearing cookies"),await this.context.clearCookies());let t=this.localMode?[await this.getUserPageOrFrame()]:this.context.pages();for(let n=0;n<t.length;n++){if(e.clearStorage){let r=t[n].url();this.logger.debug(`Clearing local storage for tab ${r}`),this.originsVisited.delete(new URL(r).origin);try{await t[n].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(i=>{i.forEach(l=>{l.name&&indexedDB.deleteDatabase(l.name)})})})}catch(i){this.logger.debug({err:i},"Failed clearing site data, continuing...")}}n!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[n].url()}`),await t[n].close())}if(this.page=this.context.pages()[0],this.page.isClosed())this.logger.warn("Page is closed, exiting reset early");else if(!await this.initCDPSession(e.timeout))this.logger.warn("Skipping clearing local storage because CDP session failed to initialize");else if(e.clearStorage)for(let r of this.originsVisited)this.logger.debug({origin:r},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:r,storageTypes:"all"}),this.originsVisited.delete(r);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async wait(e){await M(e)}async toggleHints(e){let t=await this.getUserPageOrFrame();e.state==="on"?(await t.addStyleTag({content:Ae.vimiumCss}),await t.addScriptTag({content:Ae.vimiumJs}),await t.evaluate(Wn)):await t.evaluate(Hn)}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){this.originsVisited.clear(),await this.page.close(),await this.context.close(),this.browser&&await this.browser.close()}get closed(){return this.page.isClosed()||!!this.browser&&!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}async url(){return this.localMode?(await this.getUserPageOrFrame()).url():this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),r=t?.slice(-1)[0],i=Buffer.from("");await this.showHints();let l=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${r}`:void 0});return{before:i,after:l}}async screenshot({target:e,quality:t,scale:n="device",saveToDiskPath:r,hideCaret:i,retries:l=1,timeout:s,clearHighlights:a=!1}){a&&await this.removeAllHighlights();let c={fullPage:!1,quality:t,scale:n,type:"jpeg",caret:i?"hide":"initial",path:r,timeout:s??2500};try{if(e)return(await this.resolveTarget(e)).locator.screenshot(c);if(!this.localMode||!this.activeFrame){let m=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});return Buffer.from(m.data,"base64")}else return this.page.locator(`iframe[name="${this.activeFrame}"]`).screenshot(c)}catch(m){if(this.logger.warn({err:m},"Failed taking screenshot, continuing..."),l>0)return await M(250),this.screenshot({target:e,quality:t,scale:n,saveToDiskPath:r,hideCaret:i,retries:l-1,timeout:s,clearHighlights:a});throw m}}async getViewport(){if(this.localMode&&this.activeFrame){let t=await this.page.locator(`iframe[name="${this.activeFrame}"]`).boundingBox();if(!t)throw new Error(`Failed to get bounding box for frame: ${this.activeFrame}`);return t}let e=this.page.viewportSize();if(!e)throw new Error("failed to get viewport");return e}static async addBrowserPageInitScripts(e,t){let n=[e.addInitScript({content:Ae.cssGeneratorLibJs}),e.addInitScript({content:Ae.htmlUtilsLibJs})];t?n.push(e.addInitScript({content:Yn})):n.push(e.addInitScript({content:Un})),await Promise.all(n)}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n,networkIdleTimeoutMs:r=0}){n===void 0&&(n=this.networkSettings.pageLoadTimeoutMs??8e3),An(e)&&(e=new URL(e,this.baseURL).toString()),n&&(n=Math.min(n,6e4)),r&&(r=Math.min(r,6e4)),this.logger.debug(`Navigating to ${e}`),this.originsVisited.add(new URL(e).origin),t&&await this.initCDPSession(n);let i=Date.now(),l=await this.getUserPageOrFrame(),s=async()=>{await l.goto(e,{waitUntil:"domcontentloaded",timeout:n??0});try{await l.waitForLoadState("load",{timeout:n??0})}catch(c){this.logger.warn({err:c},"Timeout elapsed waiting for load state, continuing anyways...")}};try{r?await this.wrapPossibleNavigation(s,r):await s(),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-i)}ms`)}catch(c){if(c instanceof Error&&c.message.includes("ERR_ABORTED")){this.logger.error({err:c},"Navigation error, possibly due to user cancellation");return}throw c}let a=await this.url();if(xn.has(a)&&process.env.NODE_ENV==="production")throw new E("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t){await this.attachNavigationHandler(this.page.mainFrame());try{await this.exposeRecordingBindings()}catch(c){c instanceof Error&&c.message.includes("already registered")||this.logger.error({err:c},"Failed to expose recording bindings during navigation")}}this.logger.info({url:e,urlAfterNav:a},"Navigation complete")}async type(e,t={}){this.logger.info({text:e},"Entering text with keyboard");let{clearContent:n=!0,pressKeysSequentially:r=!1}=t;n&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),r?await this.page.keyboard.type(e):await this.page.keyboard.insertText(e)}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:2500})}async highlight(e,t){try{let n=await this.resolveTarget(e,!0);return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.warn({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,r)=>{try{console.log("[MOMENTIC] Adding highlight for",n);let i=window;i.momenticIsEligible=w=>{let v=window.getComputedStyle(w,null).getPropertyValue("display");if(v==="none"||v==="contents")return!1;let B=w.getBoundingClientRect();return!(!B.height||!B.width)},i.removeHighlightTimers=i.removeHighlightTimers||[],i.removeHighlightFunctions=i.removeHighlightFunctions||{};let l=!1,s=0;for(;!i.momenticIsEligible(n)&&s<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,s++,l=!0}l&&console.log("[MOMENTIC] Redirected highlight to parent",n);let a=n.style.getPropertyValue("outline"),c=n.style.getPropertyPriority("outline"),m=n.style.getPropertyValue("background-color"),d=n.style.getPropertyPriority("background-color"),p=n.style.getPropertyValue("opacity"),h=n.style.getPropertyPriority("opacity");if(a.includes("blue")&&a.includes("solid")&&a.includes("3px")){console.log("[MOMENTIC] Already highlighted",n);return}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.setProperty("outline","3px solid deepskyblue","important"):n.style.setProperty("outline","3px solid royalblue","important");let g="rgba(255, 255, 128, 0.5)",b=window.getComputedStyle(n,null).getPropertyValue("background-color");b&&!b.includes("255, 255, 255")&&!b.includes("0, 0, 0")&&(g=`rgba(${b.match(/\d+/g).map(Number).slice(0,3).map(v=>255-v).join(", ")}, 0.5)`),n.style.setProperty("background-color",r??g,"important"),n.style.setProperty("opacity","100","important");let y=`momentic${Math.floor(Math.random()*1e7)}`;i[y]=()=>{console.log("[MOMENTIC] Clearing highlight for",n);try{n.style.removeProperty("outline"),n.style.setProperty("outline",a,c),n.style.removeProperty("background-color"),n.style.setProperty("backgroundColor",m,d),n.style.removeProperty("opacity"),n.style.setProperty("opacity",p,h)}catch(w){console.error(`Failed to remove highlight: ${w}`)}},i.removeHighlightTimers.push(setTimeout(()=>{i.removeHighlightFunctions?.[y]&&(delete i.removeHighlightFunctions[y],i[y]())},2750)),i.removeHighlightFunctions[y]=i[y]}catch(i){throw console.error(i),i}},t?.color,{timeout:2500}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}async wrapPossibleNavigation(e,t=3e3){if(this.networkSettings.autoWaitForNetworkIdle===!1)return e();let n=await this.url(),r=Date.now(),i=new Map,l=new Map,s=b=>{let y=Lt(b.request());l.set(y,(l.get(y)??0)+1);let w=b.status();w>=500&&this.logger.warn({request:y,status:w},"Received 500 level response")},a=b=>{let y=Lt(b);qn(b,n)&&(i.set(y,(i.get(y)??0)+1),r=Date.now())};this.page.on("response",s),this.page.on("request",a),await this.page.waitForTimeout(0);let c=Date.now(),m=await e();for(;;){if(Date.now()-c>2e3){this.logger.warn("Timeout elapsed waiting for network stable");break}if(Date.now()-r>750){this.logger.debug(`Network stable in ${Date.now()-c}ms`);break}await M(250)}let d=Date.now(),p=!1,h=new Set;for(;;){if(!p&&Date.now()-d>t){this.logger.warn({requests:Array.from(h).slice(0,10)},"Timeout elapsed waiting for requests to complete");break}let b=!1;h=new Set;for(let y of i.keys())i.get(y)!==l.get(y)&&(jn(y)&&(this.logger.warn({uri:y},"Waiting for necessary network request to finish. To reduce test latency, please eliminate this long-running request or reach out to Momentic Support."),p=!0),b=!0,h.add(y));if(!b){this.logger.debug({url:await this.url(),requests:Array.from(i.entries()).slice(0,10)},`Network idle in ${Math.floor(Date.now()-d)}ms`);break}await M(250)}this.page.off("request",a),this.page.off("response",s);let g=await this.url();if(this.originsVisited.add(new URL(g).origin),pe(g,n)){this.logger.debug({startUrl:n,newUrl:g},"Detected url change in wrapPossibleNavigation, waiting for load state");let b=await this.getUserPageOrFrame();await b.waitForLoadState("domcontentloaded",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3});try{await b.waitForLoadState("load",{timeout:t})}catch{this.logger.warn({url:await this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}return m}getOpenPages(){return this.context.pages().map(e=>e.url())}async saveNodeDetailsToCache(e,t,n){if(e&&(t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()),t.generatedSelectors&&t.generatedSelectors.length>1)return;if(!n){this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}let r=await this.getUserPageOrFrame();try{let i=await this.fetchHtmlAttributes(n,r);Object.assign(t,i)}catch(i){this.logger.error({err:i},"Failed to fetch HTML attributes for target")}}async ensureMomenticBrowserScriptsLoaded(){let e=Date.now();for(;Date.now()-e<8e3;)try{await(await this.getUserPageOrFrame()).evaluate(()=>{let t=window;if(!(t.generateCssSelectors&&t.generateHtmlCacheAttributes&&t.ldist))throw new Error("Not loaded yet")},{timeout:2500});return}catch(t){this.logger.debug({err:t},"Waiting for momentic browser scripts to load..."),await M(250)}throw new Error(`Failed to load momentic browser scripts on page ${await this.url()}`)}async resolveSelectorCombinationInPage(e){if(e.length)try{return await(await this.getUserPageOrFrame()).evaluate(Xn,e)}catch(t){this.logger.debug(`Error checking CSS selector combination: ${t}`);return}}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2)return;let n,r,i,l=[];for(let s=0;s<t.generatedSelectors.length;s++)for(let a=0;a<t.generatedSelectors.length;a++){let c=t.generatedSelectors[s],m=t.generatedSelectors[a];c!==m&&l.push([c,m])}for(let s of l){let a=await this.resolveSelectorCombinationInPage(s);if(!a)continue;let{momenticId:c}=a,m=parseInt(c);if(!t.serializedHtml)continue;let d=await e.evaluate(Kn,m);if(!d)continue;let p=rr(d,t.serializedHtml)/Math.max(d.length,t.serializedHtml.length);if(p>.2){this.logger.debug({target:t,candidateSerializedHtml:d,levenshteinRatio:p,combo:s},"Rejecting CSS selector due to html ldist");continue}n={a11yNode:void 0,locator:e.locator(s[0]),displayString:d},r=m,i=s;let h=this.dataMomenticIdToNodeMap.get(m);if(!h){this.logger.debug({target:t,proposedNode:n.displayString,selectors:s},"Matched CSS selector successfully using html-only comparison");break}let g=Ot(h,t);if(g<6){n=void 0,r=void 0,i=void 0,this.logger.debug({target:t,proposedNode:h.getNodeOnlySerializedForm(),comparisonScore:g,combo:s},"Rejecting CSS selector due to a11y score");continue}else n.a11yNode=h;this.logger.debug({target:t,proposedNode:n.displayString,comparisonScore:g,selectors:s},"Matched CSS selector successfully using html + a11y comparison");break}if(n)return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(n.a11yNode,t,r),t.generatedSelectors=Array.from(new Set([...i??[],...t.generatedSelectors??[]])),n}async resolveTarget(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target called"),await this.ensureMomenticBrowserScriptsLoaded(),e.id>0&&!Le(e)){let r=this.a11yIdToNodeMap.get(e.id);if(!r)throw new E("InternalWebAgentError",`Resolving target failed because id ${e.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);return await this.saveNodeDetailsToCache(r,e,r.dataMomenticId),{locator:await this.getLocatorFromA11yNode(r),a11yNode:r,displayString:r.getNodeOnlySerializedForm()}}let n=await this.getUserPageOrFrame();if(e.id<0&&e.selector){let r=n.locator(e.selector),i;try{i=await Fn(r)}catch(l){throw new Error(`'${e.selector}' failed to resolve: ${l}`)}return{locator:r,a11yNode:void 0,displayString:i}}if(!t){let r=(await this.getA11yTree({skipWait:!0})).serialize();this.logger.debug({tree:r},"Got a11y tree for css resolution")}if(e.generatedSelectors){let r=await this.resolveTargetUsingCssSelectors(n,e);if(r)return r;e.generatedSelectors=void 0}if(!t){let r=(await this.getA11yTree({skipWait:!1})).serialize();this.logger.debug({tree:r},"Got a11y tree for a11y resolution")}if(e.serializedForm){let r=1/0,i,l;for(let s of this.a11yIdToNodeMap.values()){let a=s.getSerializedFormWithContext(),c=rr(e.serializedForm,a);c<r?(r=c,i=s,l=void 0):c===r&&(l=s)}if(i&&r<Math.ceil(.15*e.serializedForm.length)&&r<50)if(l&&r!==0)this.logger.debug({equalNodeSerialized:l.getLogForm()},"Multiple nodes with same distance, refusing to resolve using levenshtein distance");else return this.logger.debug({newNodeSerializedForm:i.getLogForm(),distance:r,originalLength:e.serializedForm.length,target:e},"Resolved cached a11y target to new node with pure levenshtein distance"),await this.saveNodeDetailsToCache(i,e,i.dataMomenticId),{a11yNode:i,locator:await this.getLocatorFromA11yNode(i),displayString:i.getNodeOnlySerializedForm()};else this.logger.debug({closestDistance:r,closestNode:i?.getLogForm()},"No close a11y node found by levenshtein distance")}if(e.nodeOnlySerializedHtml)try{let r=await n.evaluate(Jn,{serializedHtml:e.nodeOnlySerializedHtml,distanceThreshold:Math.ceil(.2*e.nodeOnlySerializedHtml.length)}),i=parseInt(r.dataMomenticId??""),l=this.dataMomenticIdToNodeMap.get(i);if(l)return this.logger.debug({result:r,a11yNode:l.getLogForm(),target:e},"Resolved cached a11y target to new node with pure html levenshtein distance"),await this.saveNodeDetailsToCache(l,e,i),{a11yNode:l,locator:await this.getLocatorFromA11yNode(l),displayString:l.getNodeOnlySerializedForm()};this.logger.debug({result:r},"Failed to find a11y node corresponding to html levenshtein comparison result")}catch(r){this.logger.debug({err:r},"Error finding closest HTML node by levenshtein distance")}throw this.logger.debug({target:e},"Failed to find any relevant node"),new Error(`Could not find any relevant node given cached target: ${JSON.stringify(e)}`)}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let i=(await this.getA11yTree({})).serialize();this.logger.debug({tree:i},"Got a11y tree for x / y resolution")}let n=await this.getTargetFromPositionPercentages(e);if((n.generatedSelectors??[]).length>0)return{locator:(await this.getUserPageOrFrame()).locator(n.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(n.id),displayString:n.nodeOnlySerializedHtml??n.nodeOnlySerializedForm??"Unknown element"};let r=this.a11yIdToNodeMap.get(n.id);if(r&&r.dataMomenticId)return{locator:(await this.getUserPageOrFrame()).locator(`[${J}="${r.dataMomenticId}"]`),a11yNode:r,displayString:r.getNodeOnlySerializedForm()};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async typeIntoTarget(e,t,n={}){let r=2;for(;r>0;)try{await t.click({force:n.force,timeout:2500});break}catch(i){if(r--,r===0)throw i;this.logger.warn({err:i},"Failed clicking on element for typing")}this.highlightTarget(t),await this.type(e,n)}async click(e,t={}){this.highlightTarget(e);let n=await this.url(),r=this.getOpenPages(),i=2;for(;i>0;)try{t.doubleClick?await this.wrapPossibleNavigation(async()=>{await e.dblclick({button:t.rightClick?"right":"left",force:t.force,timeout:2500})}):await this.wrapPossibleNavigation(async()=>e.click({button:t.rightClick?"right":"left",force:t.force,timeout:2500})),this.logger.info("Click completed on element");break}catch(s){if(i--,i===0)throw s;this.logger.warn({err:s},"Failed clicking on element, retrying")}let l;if(t.waitForUrl){let a=this.networkSettings.pageLoadTimeoutMs??8e3;for(let c=0;c<4;c++){if(l=this.getOpenPages(),l.length!==r.length)for(let m=l.length-1;m>=0;m--){let d=l[m];if(d!==n){await this.switchToPage(d,m);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t.waitForUrl,{timeout:Math.min(a/4,500)});break}catch(m){if(c===3)throw m}}}}async dragAndDrop(e,t,n={}){let r={timeout:5e3,force:n.force};await e.hover(r),await this.page.mouse.down(),await t.hover(r),await M(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,5e3):500),await this.page.mouse.up()}async mouseDrag(e,t,n,r,i={}){let l=Object.assign({timeout:2500},i);r&&await r.hover(l);let s=await(await this.getUserPageOrFrame()).evaluate(Bn);s||(this.logger.warn("Could not get current mouse position before mouse drag action, defaulting to 0,0"),s={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+s.left,t+s.top,{steps:n}),await M(250),await this.page.mouse.up()}async hover(e){this.highlightTarget(e),await e.hover({timeout:2500})}async focus(e){this.highlightTarget(e),await e.focus({timeout:2500})}async blur(e){this.highlightTarget(e),await e.blur({timeout:2500})}async selectOption(e,t){this.highlightTarget(e);let n={timeout:2500,force:!1},r=2;for(;r>0;)try{await e.selectOption(t,n),this.logger.info(`Selected '${t}' from dropdown`);break}catch(i){if(r--,r===0)throw i;this.logger.warn({err:i},"Failed selecting option, retrying with force enabled"),n.force=!0}}async press(e){this.localMode&&this.activeFrame&&(await(await this.getUserPageOrFrame()).evaluate(()=>{let n=document.activeElement;return n&&n.tagName.toLowerCase()!=="body"})||(this.logger.warn(`No element on the page is currently focused, clicking on <body> before pressing ${e}`),await(await this.getUserPageOrFrame()).locator("body").click())),await this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))}async refresh(e){if(this.localMode&&this.activeFrame){let n=(await this.getUserPageOrFrame()).url();await this.navigate({url:n,loadTimeoutMs:e?.loadTimeoutMs,networkIdleTimeoutMs:e?.networkIdleTimeoutMs})}else{let t=async()=>this.page.reload({timeout:e?.loadTimeoutMs??this.networkSettings.pageLoadTimeoutMs??8e3});e?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(t,e.networkIdleTimeoutMs):await t()}}async getActiveFrameCdpId(){if(!this.activeFrame)return;let e;this.activeFrame.type==="name"?e=`document.querySelector("iframe[name='${this.activeFrame.name}']")`:this.activeFrame.url.startsWith("/")&&this.activeFrame.url.endsWith("/")?e=`Array.from(document.querySelectorAll("iframe")).find(iframe => ${this.activeFrame.url}.test(iframe.src))`:e=`document.querySelector("iframe[src='${this.activeFrame.url}']")`;let{result:t,exceptionDetails:n}=await this.cdpClient.send("Runtime.evaluate",{expression:e});if(n)throw new Error(`Could not find frame with expression ${e}: ${n.exception?.description}`);let r=t.objectId;if(!r)throw new Error(`Could not find frame with expression ${e}`);try{return{pageFrameId:(await this.cdpClient.send("DOM.describeNode",{objectId:r})).node.frameId}}catch(i){throw new Error(`Error resolving iframe: ${i}`)}}async getA11yTree({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger,maxAttempts:r=2}){let i=null,l=0,s=await this.url(),a;for(;!i&&l<r;){let c=async()=>{let m=await this.getViewportOffsetDetails();n.debug({url:s,viewportDetails:m},"Got viewport details");let d=await this.getActiveFrameCdpId(),p=await this.getRawA11yTree({skipWait:e,iframeId:d?.pageFrameId,logger:n}),h=await this.getDOMTree(m.devicePixelRatio,d?.pageFrameId);if(i=Dn({a11yGraph:p,domGraph:h,logger:n,filterByViewport:t,viewportDetails:m}),!i||!i.root)throw new Error("Accessibility tree appears empty");this.a11yIdToNodeMap=i.a11yIdNodeMap,this.dataMomenticIdToNodeMap=i.dataMomenticIdMap,this.domGraph=h};try{l++,await Promise.race([c(),M(2500)])}catch(m){a=m,l<r&&(n.warn({err:m,url:s},"Error getting a11y tree, retrying..."),await M(1e3))}}if(!i)throw new E("ActionFailureError",`Getting accessibility tree failed after ${r} attempts: ${a?.message}`);return i}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(){let[e,t,n,r,i]=await(await this.getUserPageOrFrame()).evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:e,lowerBound:e+r,leftBound:t,rightBound:t+n,width:n,height:r,devicePixelRatio:this.systemDevicePixelRatio??i}}async getDOMTree(e,t){let n,r=0;for(;!n&&r<3;)try{if(n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:Ye}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(i){await M(250),this.logger.error({err:i},"Error fetching DOM tree"),r++}if(!n||!n.documents.length)throw new E("InternalWebAgentError","Error fetching DOM tree");return zn({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async getRawA11yTree({skipWait:e=!1,iframeId:t=void 0,logger:n=this.logger}){let r=await this.url(),i=Date.now(),l=()=>{i=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",l);let s=!1,a=()=>{n.debug({url:r},"Accessibility load event fired on page"),s=!0,i=Date.now()};this.cdpClient.addListener("Accessibility.loadComplete",a);let c=Date.now(),m=!e;for(;!e&&Date.now()-c<3e3;)if(await M(250),!(!s&&Date.now()-c<1e3)&&Date.now()-i>=750){m=!1;break}n.debug({duration:Date.now()-c,eventReceived:s,timeoutTriggered:m,skipWait:e},"A11y wait phase completed"),await(await this.getUserPageOrFrame()).evaluate(Gn);let d;if(t)d=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:t})).node.backendDOMNodeId;else{let{node:h}=await this.cdpClient.send("Accessibility.getRootAXNode");d=h.backendDOMNodeId}let{nodes:p}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:d});if(this.cdpClient.removeListener("Accessibility.loadComplete",a),this.cdpClient.removeListener("Accessibility.nodesUpdated",l),!p||p.length<=1)throw new E("ActionFailureError","No content in accessibility tree");return{root:p[0],allNodes:p}}async clickUsingVisualCoordinates(e){let t=await this.getElementLocation(e);if(!t)throw new Error(`Could not find element location with backend node id: ${e}`);this.logger.debug({location:t},"Executing mouse click"),await this.page.mouse.click(t.centerX,t.centerY)}getAttributeFromStringArray(e,t){let n=e.findIndex(r=>r===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),r=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,i=this.getAttributeFromStringArray(r,J);if(!i)throw new Error(`Could not find attribute ${J} for object ${e}`);return i}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(r){throw this.logger.error({err:r,object:JSON.stringify(t.object)},"Failed to get ID attribute"),r}return(await this.getUserPageOrFrame()).locator(`[${J}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,r,i=async a=>{let c=await this.getLocatorFromBackendID(a);t.doubleClick?await c.dblclick({timeout:2500}):await c.click({timeout:2500,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await i(e.backendNodeID),e}catch(a){this.logger.error({err:a},"Failed clicking on node"),r=a,n++,await M(1e3)}let l=e.parent?.children??[];for(let a of l){if(a.id===e.id)continue;let c=!1,m=Ot(a,e);if(e.name&&a.name===e.name?c=!0:m>=5&&(this.logger.debug({similarityScore:m},"Sibling qualified for click redirection through comparison score"),c=!0),!!c)try{return await i(a.backendNodeID),a}catch(d){this.logger.debug({err:d,candidate:a.getLogForm()},"Failed clicking on sibling during click redirection")}}let s=e.parent;for(n=0;n<Nn;){if(!s||["rootwebarea","main"].includes(s.role.toLowerCase()))throw new E("ActionFailureError",r.message,{cause:r});if(!s.backendNodeID){s=s.parent;continue}try{return await i(s.id),s}catch(c){this.logger.debug({err:c,candidate:s.getLogForm()},"Failed clicking on parent during click redirection"),n++,s=s.parent}}throw new E("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${r.message}`,{cause:r})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let r=t.documents[0],i=r.layout,l=r.nodes,s=l.nodeName||[],a=l.backendNodeId||[],c=i.nodeIndex,m=i.bounds,d=-1;for(let S=0;S<s.length;S++)if(a[S]===e){d=c.indexOf(S);break}if(d===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[p=0,h=0,g=0,b=0]=m[d];p/=n,h/=n,g/=n,b/=n;let y=p+g/2,w=h+b/2;return{centerX:y,centerY:w}}async scroll(e,t,n,r){let i=t==="left"?-1:1,l=r==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([a,c,m,d])=>window.scrollTo(window.scrollX+(a??window.innerWidth)*m,window.scrollY+(c??window.innerHeight)*d),[e,n,i,l]);else{let s=this.page.viewportSize()||pt;await this.page.mouse.wheel((e??s.width)*i,(n??s.height)*l)}}async scrollUp(e){await this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPossibleNavigation(async()=>this.localMode&&this.activeFrame?(await this.getUserPageOrFrame()).evaluate(e=>{let t=e().contentWindow;t?t.history.forward():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${this.activeFrame}"]`)):this.page.goForward({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async goBack(){await this.wrapPossibleNavigation(async()=>this.localMode&&this.activeFrame?(await this.getUserPageOrFrame()).evaluate(e=>{let t=e().contentWindow;t?t.history.back():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${this.activeFrame}"]`)):this.page.goBack({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async createNewTab(e,t){let n=await this.context.newPage();this.page=n,await this.navigate({url:e,initialNavigation:!0,...t}),this.originsVisited.add(new URL(e).origin)}async switchToPage(e,t,n){let r=async(l,s)=>{let a=l.url();this.logger.info(`Switching to tab ${s} with url ${a}`),this.originsVisited.add(new URL(a).origin),this.page=l,await this.initCDPSession(n?.loadTimeoutMs),await this.attachNavigationHandler(this.page.mainFrame());try{let c=async()=>{let m=n?.loadTimeoutMs??8e3;await l.waitForLoadState("domcontentloaded",{timeout:m});try{await l.waitForLoadState("load",{timeout:m})}catch{this.logger.warn({url:a},"Timeout elapsed waiting for load state, continuing anyways...")}};n?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(c,n.networkIdleTimeoutMs):await c()}catch{this.logger.warn({url:a},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}},i=this.context.pages();if(t){await r(i[t],t);return}for(let l=0;l<i.length;l++){let s=i[l];if(s.url().includes(e)){await r(s,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async frameNavigationHandler(e){if(!!e.parentFrame()===this.localMode){process.env.NODE_ENV!=="production"&&this.logger.debug({url:e.url()},"Frame navigation event fired");try{let t=new URL(e.url()).origin;if(!t||t==="about:blank"||this.originsVisited.has(t)||t==="null")return;this.logger.debug(`Adding ${t} to visited set`),this.originsVisited.add(t)}catch(t){this.logger.debug({err:t},"Failed to add run page setup handler")}}}async attachNavigationHandler(e){await this.frameNavigationHandler(e),this.page.off("framenavigated",t=>this.frameNavigationHandler(t)),this.page.on("framenavigated",t=>this.frameNavigationHandler(t))}async setCookie(e){let t=pn(e);this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([r,i])=>{r&&localStorage.setItem(r,i||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:be,method:"turnstile",sitekey:t,pageurl:await this.url(),json:1})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{request:r}=await n.json(),i=Date.now(),l="";for(;Date.now()-i<6e4;){await M(2500);let s=await fetch(`https://2captcha.com/res.php?key=${be}&action=get&id=${r}&json=1`,{method:"GET"});if(!s.ok){let c=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},c),new Error(c)}let a=await s.json();if(a.status===1){l=a.request;break}}}async solveCaptcha(){await this.getA11yTree({});let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=await this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:2500}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:be,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{taskId:r}=await n.json(),i=Date.now(),l="";for(;Date.now()-i<6e4;){await M(2500);let s=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:be,taskId:r})});if(!s.ok){let c=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},c),new Error(c)}let a=await s.json();if(a.errorId){let c=`Captcha solution API returned error ID ${a.errorId}`;throw this.logger.error(c),new Error(c)}if(a.status==="ready"){l=a.solution.text;break}}if(!l)throw new Error("Captcha solution timed out");return l}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=await this.getA11yTree({skipWait:!0});this.mostRecentA11yTree=e,this.logger.debug({tree:this.mostRecentA11yTree},"Refreshed a11y tree before target capture");let t=!1,n=setInterval(()=>{(async()=>{if(!t){t=!0;try{this.mostRecentA11yTree=await this.getA11yTree({skipWait:!0,maxAttempts:1,logger:$e}),Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(a){this.logger.error({err:a},"Failed to get a11y tree in target capture click handler")}finally{t=!1}}})()},It),r=[];try{r=await(await this.getUserPageOrFrame()).evaluate(async()=>{let s=window,a=null;s.targetCaptureClickListener=async d=>{console.log("[Momentic] Target capture listener fired",d.target),d.preventDefault(),a=d.target},document.addEventListener("click",s.targetCaptureClickListener,{capture:!0,once:!0});let c=15e3;for(;!a&&c>0;)await new Promise(d=>setTimeout(d,100)),c-=100;if(!a)throw new Error("Timed out waiting for user to click on an element");let m=a;return[m.getAttribute(J),m.parentElement?.getAttribute(J),m.parentElement?.parentElement?.getAttribute(J)].filter(d=>!!d)})}catch(s){throw new Error(`Failed to capture: ${s.message}`)}finally{clearInterval(n)}if(!r.length)throw new Error("Selected element did not have Momentic handlers attached - if it appeared recently, please wait for the page to stabilize before clicking");let i;for(let s of r)if(i=this.getA11yIdFromDataMomenticId(parseInt(s)),i)break;if(!i)throw new Error("Selected element is not interactive - please try a neighboring or parent element instead");let l={id:i};return await this.resolveTarget(l,!0),l}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let r=e.bounds,i=r.x??0,l=r.width??0,s=r.height??0,a=i+l,c=r.y??0,m=c+(r.height??0),d=t.bounds,p=d.width??0,h=d.height??0,g=d.x??0,b=g+(d.width??0),y=d.y??0,w=y+(d.height??0);return g<a&&b>i&&y<m&&w>c?Math.abs(l-p)<200&&Math.abs(s-h)<200?!0:(me({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(me({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),r,i=Vo();for(let c of n)if(c.attributes?.[J]===e){r=c;break}if(!r)return[];let l=[],s=t.backendIdToNode[r.parentBackendNodeId??-1];for(;s&&(s?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(r,s,i));)s=t.backendIdToNode[s.parentBackendNodeId??-1];s&&l.push(s);let a=[r];for(;a.length;){let c=a.shift();for(let m of c.children??[]){let d=t.backendIdToNode[m];d&&!d.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(r,d,i)?l.push(d):d&&a.push(d)}}return l}async exposeRecordingBindings(){let e=({frame:t},n,r)=>{if(!this.transformer)return;this.logger.info({dataMomenticId:n,htmlAttributes:r},"Click captured on element");let i=this.domGraph,l=this.dataMomenticIdToNodeMap,s=this.mostRecentA11yTree,a=t.url(),c,m,d=l.get(n),p=[];if(d)c={id:d.id,...r};else{p=this.getDomCandidatesInA11yTree(`${n}`,i);for(let h of p){let g=parseInt(h.attributes?.[J]??"");if(isNaN(g))continue;let b=l.get(g);if(!b){this.logger.warn({candidate:h},"Candidate DOM node doesn't exist in the a11y tree");continue}d=b,m=b.id,c={id:m,...r},this.logger.debug({newNode:d?.getLogForm()},"Redirected click on non-accessible element to nearest a11y node");break}}(!d||!c)&&(this.logger.warn({url:a,htmlAttributes:r,a11yIntersectionNodes:p},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),c={id:-1,...r}),(async()=>{if(!this.transformer){this.logger.debug("No click translation since transformer is not initialized anymore");return}this.logger.info({target:c,url:a},"Generating description for clicked target");let h=s.serialize();if(d){let g=h.indexOf(`id="${d.id}"`);h=h.slice(0,g+1e3),h.length>3e4&&(h=s.pruneUsingRelevantIds(new Set([d.id])).serialize())}try{await this.transformer.recordClick({target:c,browserState:h,url:a})}catch(g){this.logger.error({err:g},"Failed capturing click in transformer")}})()};await this.context.exposeBinding("captureClick",({frame:t},n,r)=>{try{e({frame:t},n,r)}catch(i){this.logger.error({err:i},"Failed to capture click in captureClick handler")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},{key:t,url:n})=>{this.transformer&&(this.logger.info({key:t},"Captured keypress"),this.transformer.recordKeystroke(t,n))})}async startRecording(e,t){this.logger.info("Starting passive recording mode in Chrome browser"),this.transformer=t;let n=await this.getA11yTree({skipWait:!0});this.mostRecentA11yTree=n;let r,i=[async()=>{this.transformer=void 0}];(()=>{if(r)return;let s=!1,a=async()=>{if(!s){s=!0;try{let c=await this.getA11yTree({skipWait:!0,maxAttempts:1,logger:$e});this.mostRecentA11yTree=c,Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(c){this.logger.warn({err:c},"Failed to get a11y tree in frame navigation listener")}s=!1}};r=setInterval(()=>{!this.transformer||e.aborted||a()},It),i.push(async()=>{clearInterval(r),r=void 0})})(),e.addEventListener("abort",async()=>{for(let s of i)try{await s()}catch(a){this.logger.warn({err:a},"Recording cleanup function failed, continuing...")}})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(i=>i.value))}async getCondensedHtml(){let e=await this.getUserPageOrFrame();await this.ensureMomenticBrowserScriptsLoaded();let t=await e.evaluate(()=>window.getCondensedHtmlTree?.());if(!t)throw new E("InternalWebAgentError","Empty HTML tree");return $o.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:80})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages({percentX:e,percentY:t}){if(e<0||e>1||t<0||t>1)throw new E("InternalWebAgentError","Invalid percent passed to percentage location");let{width:n,height:r,upperBound:i,leftBound:l}=await this.getViewportOffsetDetails(),s=Math.ceil(n*e),a=Math.ceil(r*t);await this.cdpClient.send("DOM.getDocument",{depth:0});let c;try{c=await this.cdpClient.send("DOM.getNodeForLocation",{x:s+l,y:a+i})}catch{throw new Error("No element was found at the given location")}return c}async highlightFromPositionPercentages(e){let t;try{t=await this.getDomNodeFromPositionPercentages(e)}catch{}return t?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:Xe,backendNodeId:t.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:t?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getDomNodeFromPositionPercentages(e),n=this.domGraph?.backendIdToNode[t.backendNodeId],r=n?.attributes[J],i=parseInt(r??"");if(!n||!r||isNaN(i))throw new Error("No HTML node was found at the given location");for(let c of this.a11yIdToNodeMap.values()){if(c.backendNodeID!==t.backendNodeId)continue;let m={id:c.id};return await this.saveNodeDetailsToCache(c,m,parseInt(r)),m}let l=this.getDomCandidatesInA11yTree(`${r}`,this.domGraph);for(let c of l){let m=parseInt(c.attributes?.[J]??"");if(isNaN(m))continue;let d=this.dataMomenticIdToNodeMap.get(m),p=d?.id;if(!p)continue;let h={id:p};return await this.saveNodeDetailsToCache(d,h,parseInt(r)),this.logger.debug({target:h},"Redirected click on non-accessible element to nearest a11y node"),h}return{id:-1,...await this.fetchHtmlAttributes(i)}}async fetchHtmlAttributes(e,t){t=t??await this.getUserPageOrFrame();let n=await t.evaluate(r=>{let i=window;if(!i.generateHtmlCacheAttributes)throw new Error("generateHtmlCacheAttributes is not defined on the window object");return i.generateHtmlCacheAttributes(r)},e);return this.logger.debug(n,"Generated HTML attributes for target"),n}async toggleInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:{showInfo:!0,showAccessibilityInfo:!0,contentColor:{r:147,g:196,b:125,a:.55}}})}async moveMouseFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:r,height:i}=n,l=Math.ceil(r*e),s=Math.ceil(i*t);await this.page.mouse.move(l,s,{steps:3})}async scrollFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:r,height:i}=n,l=Math.ceil(r*e),s=Math.ceil(i*t);return await this.page.mouse.wheel(l,s),{deltaX:l,deltaY:s}}async startInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:Xe})}async stopInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"none",highlightConfig:Xe}),await this.clearAllCdpHighlights()}canSolveCaptchas(){return!!be}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames().filter(i=>!i.name().startsWith(yt)),n=(await Promise.all(t.map(async i=>{try{return(await i.frameElement()).getAttribute("src")}catch{return null}}))).filter(i=>i!==null&&i!=="about:blank"&&i!==e);return Array.from(new Set(n))}};var Zo={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},ei=Zo;import Si from"buffer-image-size";import{existsSync as li}from"fs";import{faker as ti}from"@faker-js/faker";import ni from"assert";import ri from"axios";import oi from"moment";import ii from"p-timeout";import si from"pg";async function ir({code:o,fragment:e,context:t,timeoutMs:n=1e4}){let r=o;e&&(r=`return ${o}`);let i=t.toObjectCopy(),l=(c,m)=>{i.env[c]=m,t.setVariable(c,m)},s;return await ii((async()=>{s=await Promise.resolve(new Be("axios","moment","faker","assert","pg","env","results","inputs","setVariable",r)(ri,oi,ti,ni,si,i.env,i.results,i.inputs??{},l))})(),{milliseconds:n,message:`Timeout of ${n}ms exceeded for code execution`}),s}import{z as ge}from"zod";var sr=process.env.GCP_JS_EVAL_FUNCTION_ENDPOINT,ai=ge.object({result:ge.unknown(),variableUpdates:ge.record(ge.string(),ge.unknown()).optional(),error:ge.string().optional(),success:ge.boolean()});async function ar({code:o,fragment:e,context:t,logger:n,timeoutMs:r=1e4}){let i=new AbortController;if(!sr)throw new Error("GCP_JS_EVAL_FUNCTION_ENDPOINT environment variable not set");let l=setTimeout(()=>{i.abort()},r),s={code:o,fragment:e,state:t.toObjectCopy()},a=await fetch(sr,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),signal:i.signal});if(!a.ok)throw new Error(`Code evaluation server returned error code: ${a.status}`);clearTimeout(l);let c;try{c=ai.parse(await a.json()),n.debug({response:c},"Response from code evaluation server")}catch(m){throw new Error(`Code evaluation server returned invalid response: ${m}`)}if(c.error)throw new Error(`Code evaluation server returned error: ${c.error}`);if(c.variableUpdates)for(let[m,d]of Object.entries(c.variableUpdates))t.setVariable(m,d);return c.result}var ci=di();function di(){if(process.env.NODE_ENV!=="production")return!1;if(process.env.NAMESPACE)return!0;try{if(li("/var/run/secrets/kubernetes.io/serviceaccount/token"))return!0}catch{}return!1}async function Mt(o){let e;return ci?(o.logger.info({code:o.code,fragment:o.fragment,state:o.context.toObjectCopy()},"Running code remotely"),e=ar):(o.logger.info({code:o.code,fragment:o.fragment,state:o.context.toObjectCopy()},"Running code locally"),e=ir),e(o)}async function Je(o){let{s:e,context:t,logger:n,timeoutMs:r=2e3,retries:i=1}=o,l=/{{(.*?)}}/g,s=e.matchAll(l),a=e;for(let c of s){if(c.length<2)continue;let m=c[1].trim(),d;try{d=await Mt({code:m,fragment:!0,context:t,timeoutMs:r,logger:n})}catch(h){if(i>0)return n.warn({err:h},"Error evaluating template string, retrying..."),Je({...o,retries:i-1});throw n.error({err:h},"Error evaluating template string"),h}let p=typeof d=="string"?d:`${d}`;a=a.replace(c[0],p)}return a}import Ci from"dedent";import Ti from"diff-lines";import zt from"jpeg-js";import{cloneDeep as vi}from"lodash-es";import Ei from"pixelmatch";var Qe={"gpt-3.5-turbo-1106":16184,"ft:gpt-3.5-turbo-0125:momentic:locator-0508:9NvTpgSc":16184,"ft:gpt-3.5-turbo-1106:momentic:text-assertions:9CEFjgB4":16184,"ft:gpt-3.5-turbo-1106:momentic::8vgMsQca":16184,"gpt-4-0613":8092,"gpt-4-1106-preview":128e3,"gpt-4-0125-preview":128e3,"gpt-4-vision-preview":128e3,"gpt-4-turbo-2024-04-09":128e3,"gpt-4o-2024-05-13":128e3,"claude-3-opus-20240229":2e5,"claude-3-sonnet-20240229":2e5};var ui=["Shift","CapsLock","Dead","Meta","AudioVolumeUp","AudioVolumeDown"],Ze=class{static ACTION_DEBOUNCE_DELAY=500;recordedSteps=new Map;onStepRecord;signal;generator;testId;orgId;storage;indices;logger;constructor({signal:e,onStepRecord:t,generator:n,initialIndices:r,storage:i,testId:l,orgId:s,logger:a}){this.signal=e,this.storage=i,this.logger=a,this.testId=l,this.orgId=s,this.onStepRecord=(c,m,d)=>{this.recordedSteps.set(JSON.stringify(m),{step:c,url:d});let{cachesToSave:p,stepsToSave:h}=ze({steps:[c],testId:l,orgId:s}),g=h[0];a.debug({step:g},"Sending recorded step to client"),t(g,m),(async()=>{try{await this.storage.saveStepCacheEntries(p,l,a),a.debug({step:g},`Saved ${p.length} caches for recorded step`)}catch(b){a.error({err:b},"Error saving step cache for recorded step")}})()},this.generator=n,this.indices=r}reserveIndexForCommand(e,t){let n=Array.from(this.indices);return this.recordedSteps.set(JSON.stringify(n),{step:{type:"PRESET_ACTION",command:de(e)},url:t}),this.indices[this.indices.length-1]++,n}async recordClick({target:e,browserState:t,url:n,indices:r}){if(this.signal.aborted){this.logger.debug("Transformer aborted, ignoring click...");return}let i=de("CLICK"),l=e.nodeOnlySerializedHtml?.trim()??e.nodeOnlySerializedForm??"Unknown element - please provide a description manually",s=e.id>0?`Generating description for '${e.nodeOnlySerializedHtml?.trim()??"element"}'...`:l,a={type:"PRESET_ACTION",command:{...i,useSelector:!!e.selector,target:{elementDescriptor:s},cache:{target:e}}};if(r||(r=Array.from(this.indices),this.indices[this.indices.length-1]++),this.onStepRecord(a,r,n),e.id<=0){this.logger.debug("Skipping reverse mapping for non-accessible element");return}let c;try{c=(await this.generator.getReverseMappedDescription({goal:`${e.id}`,browserState:t},!1)).phrase}catch(p){this.logger.error({err:p},"Error generating reverse mapping description"),c=l}let m=this.recordedSteps.get(JSON.stringify(r))?.step,d=m?.command;d&&"target"in d&&d.target?(d.target.elementDescriptor=c,this.onStepRecord({...m,command:d},r,n)):this.logger.warn("Could not find existing command to update after description mapping")}recordKeystroke(e,t){if(ui.includes(e)||this.signal.aborted)return;let n="normal";e.length>1&&(n="special");let r;if(n==="normal"){let d=de("TYPE");r={type:"PRESET_ACTION",command:{...d,target:void 0,value:e,clearContent:!1}}}else{let d=de("PRESS");r={type:"PRESET_ACTION",command:{...d,value:e}}}let i,l=Array.from(this.indices);l[this.indices.length-1]--;let s=this.recordedSteps.get(JSON.stringify(l)),a=s?.step,c=a?.command,m=s?.url;if(t===m){if(c?.type===r.command.type){let d=c.value,p=r.command.value;r={type:"PRESET_ACTION",command:{...c,value:r.command.type==="PRESS"?`${d}+${p}`:`${d}${p}`}},i=l}else if(c?.type==="CLICK"&&r.command.type==="TYPE")a.command={...r.command,target:c.target,cache:c.cache},r=s.step,i=l;else if(c?.type==="TYPE"&&r.command.type==="PRESS"&&r.command.value==="Backspace"){let d=c.value;r={type:"PRESET_ACTION",command:{...c,value:d.slice(0,d.length-1)}},i=l}}i||(i=Array.from(this.indices),this.indices[this.indices.length-1]++),this.onStepRecord(r,i,t)}recordScroll(e){if(this.signal.aborted)return;let{url:t}=e,n=()=>{let{deltaY:s}=e;if(!s)return;let a=Array.from(this.indices);a[this.indices.length-1]--;let c=this.recordedSteps.get(JSON.stringify(a))?.step.command,m;c?.type==="SCROLL_DOWN"&&c.deltaY?(s+=c.deltaY,m=a):c?.type==="SCROLL_UP"&&c.deltaY?(s-=c.deltaY,m=a):(m=Array.from(this.indices),this.indices[this.indices.length-1]++);let d=s>0?"SCROLL_DOWN":"SCROLL_UP",p=de(d);p.deltaY=Math.abs(s);let h={type:"PRESET_ACTION",command:p};this.onStepRecord(h,m,t)},r=()=>{let{deltaX:s}=e;if(!s)return;let a=Array.from(this.indices);a[this.indices.length-1]--;let c=this.recordedSteps.get(JSON.stringify(a))?.step.command,m;c?.type==="SCROLL_RIGHT"&&c.deltaX?(s+=c.deltaX,m=a):c?.type==="SCROLL_LEFT"&&c.deltaX?(s-=c.deltaX,m=a):(m=Array.from(this.indices),this.indices[this.indices.length-1]++);let d=s>0?"SCROLL_RIGHT":"SCROLL_LEFT",p=de(d);p.deltaX=Math.abs(s);let h={type:"PRESET_ACTION",command:p};this.onStepRecord(h,m,t)},i=Array.from(this.indices);i[this.indices.length-1]--;let l=this.recordedSteps.get(JSON.stringify(i));l?.step.command.type==="SCROLL_LEFT"||l?.step.command.type==="SCROLL_RIGHT"?(r(),e.deltaY>=20&&n()):(n(),e.deltaX>=20&&r())}};var et=3.1;function mi(o){let e=0;for(let t=0;t<o.length;t++){let n=o.charCodeAt(t);!(n>=48&&n<=57)&&!(n>=65&&n<=90)&&!(n>=97&&n<=122)&&e++}return e}function tt(o){return Math.ceil(Pt(o)/et)}function Pt(o){let e=0;if(typeof o=="string"){let t=o;t=t.replaceAll(`
`,""),t=t.replaceAll(" ","");let n=mi(t);return t.length-n+et*n}if(typeof o>"u")return 0;if(typeof o=="number")return String(o).length;if(Array.isArray(o))return o.forEach(t=>{e+=Pt(t)}),e;if(typeof o=="object"){let t=o;return Object.keys(t).forEach(n=>{e+=String(n).length,n==="image_url"?(t[n]??{}).detail==="high"?e+=1105*et:e+=85*et:e+=Pt(t[n])}),e}throw new Error(`Unsupported type passed to token length calculator '${typeof o}': ${o}`)}var pi=500,hi=3e3,gi=8e3,lr=/<(\w+) id="(\d+)".*?>/g,fi=/(<\/(\w+?)>)|(<(\w+?).*?\/>)/g,cr=["h1","h2","section","footer","nav","aside","form","label","dialog"],yi=[...cr,"span","div","h3"],bi=["table","select","form","ul","ol","menu","pre","code","dialog"],wi=["table","form","dialog","nav","section","ul","select"];function kt({serializedTree:o,tokenLimit:e}){let t=tt(o);if(t<=e)return;let n=[],r=o.split(`
`),i=0,l=[],s=0,a=[],c=[],m=!1;for(;i<r.length;){m&&(n.push({ids:a,content:l.join(`
`),tokenLength:s}),l=[],s=0,a=c.length?[c[c.length-1].id]:[],m=!1);let h=r[i],g=tt(h);l.push(h),s+=g;let y=Array.from(h.matchAll(lr)).map(C=>C&&C.length>=3?{tagName:C[1],id:C[2]}:void 0).filter(C=>!!C),S=Array.from(h.matchAll(fi)).map(C=>C&&(C[2]||C[4])).filter(C=>!!C);S.reverse();for(let C of y)a.push(C.id),c.push(C);for(let C of S){let X=c[c.length-1];X&&X.tagName===C&&c.pop()}let v=c.some(C=>bi.includes(C.tagName)),B=r[i+1]??"",Q=tt(B),k=Array.from(B.matchAll(lr)).map(C=>C&&C.length>2?C[1]:void 0).filter(C=>!!C),W=k.some(C=>cr.includes(C)),we=k.some(C=>yi.includes(C));s+Q>=gi&&(m=!0),s>=pi&&(W&&!v||S.some(C=>wi.includes(C)))&&(m=!0),s>=hi&&we&&!v&&(m=!0),i++}l.length&&n.push({ids:a,content:l.join(`
`),tokenLength:s});let d=t/n.length,p=Math.min(n.length,Math.ceil(e*1.5/d));return{chunks:n,numRecs:p}}var Dt=(o,e,t)=>{let[n,...r]=e.split("."),i=n;return r.length>=1?Dt(o[i],r.join("."),t):o[i]=t,o};var Ai=1e4,Ft=class{orgId;flagStore;browser;pendingInstructions;generator;commandHistory;config;closed=!1;logger;recordAbortController=null;constructor({browser:e,config:t,generator:n,logger:r,orgId:i,flagStore:l}){this.orgId=i,this.browser=e,this.generator=n,this.config=t,this.logger=r,this.flagStore=l,this.pendingInstructions=[],this.commandHistory=[]}get history(){return this.commandHistory.filter(e=>e.state==="DONE")}get lastExecutedCommand(){let e=this.history;return e.length===0?null:e[e.length-1]}setOpen(){this.closed=!1}isClosed(){return this.closed}setLogger(e){this.logger=e}resetHistory(){this.commandHistory=[],this.pendingInstructions=[]}async resetState(e){this.resetHistory(),this.closed=!0,await this.browser.reset(e)}async getBrowserState({filterByViewport:e=!1,skipWait:t=!1}){let n=await this.browser.getA11yTree({filterByViewport:e,skipWait:t}),r=n.serialize();return this.logger.debug({tree:r,activeFrame:this.browser.getActiveFrame()},"Got a11y tree"),{browserState:r,tree:n}}getSerializedHistory(e,t){let n;return this.config.useHistory==="diff"?n=this.getDiffHistory(e,t):n=this.getListHistory(),n}async splitUserGoal(e,t,n){if(e==="AI_ACTION"&&t.match(/[,!;.]|(?:and)|(?:then)/)&&this.config.useGoalSplitter){let r=await this.generator.getGranularGoals({goal:t,url:await this.browser.url()},n);this.pendingInstructions=r.reverse()}else this.pendingInstructions=[t]}async promptToCommand(e,t,n){try{return await this.promptToCommandHelper(e,t,n)}catch(r){throw r instanceof E?r:new E("InternalWebAgentError",`Error generating command: ${r instanceof Error?r.message:r}`,{cause:r})}}async promptToCommandHelper(e,t,n){if(this.pendingInstructions.length===0){if(!t.trim())throw new Error("Cannot generate commands for empty goal");await this.splitUserGoal(e,t,n)}let r=this.pendingInstructions[this.pendingInstructions.length-1];this.logger.info({goal:r},"Starting prompt translation");let i=Date.now(),l=await this.browser.url(),{browserState:s}=await this.getBrowserState({filterByViewport:!1});this.logger.info({duration:Date.now()-i,url:l},"Got browser state");let a=this.commandHistory.length;this.commandHistory.push({state:"PENDING",browserStateBeforeCommand:s,urlBeforeCommand:l,type:e});let c=this.getSerializedHistory(l,s),m={url:l,numPrevious:a,browserState:s,history:c,goal:r,lastCommand:this.lastExecutedCommand},d=await this.generator.getProposedCommand(m,n);if(this.logger.info({type:d.type,thoughts:d.thoughts},"Got proposed command"),d.type==="SUCCESS"){let p=this.pendingInstructions.pop();if(this.logger.info({finishedInstruction:p,remainingInstructions:this.pendingInstructions},"Removing pending instruction due to SUCCESS"),this.pendingInstructions.length!==0)return this.commandHistory=[],this.promptToCommand(e,"",n)}else d.type==="FAILURE"&&(this.logger.info({remainingInstructions:this.pendingInstructions},"Removing pending instructions due to FAILURE"),this.pendingInstructions=[]);return{context:m,command:d}}async locateElementWithSelector(e,t){return this.wrapFrameUseCommand(async()=>{let n={id:-1,selector:e},r=await this.browser.resolveTarget(n);return{thoughts:"Located element with selector",target:n,locator:r.locator}},t)}async locateElement(e){if(!e.description)throw new E("ActionFailureError","Cannot locate element with empty description");return this.wrapFrameUseCommand(()=>this.locateElementHelper(e),e.iframeUrl)}async locateElementHelper({description:e,useVision:t,disableCache:n,context:r,filterByViewport:i,returnConflicts:l}){r&&(e=await Je({s:e,context:r,logger:this.logger}));let{browserState:s,tree:a}=await this.getBrowserState({filterByViewport:i}),c;if(t){let{before:m,after:d}=await this.browser.screenshotWithHints({clearHighlights:!0}),p=await this.generator.getElementLocationWithVision({goal:e,screenshot:m,hintActivatedScreenshot:d},n);if(p.id<=0)throw new Error(p.thoughts);let h={id:this.browser.getA11yIdFromDataMomenticId(p.id)??-1},g=await this.browser.resolveTarget(h,!0);c={thoughts:p.thoughts,target:h,locator:g.locator}}else{let m=s,d=!1,p=.125*Qe["gpt-4o-2024-05-13"],h=kt({serializedTree:s,tokenLimit:p});if(h&&this.flagStore.isBooleanFlagEnabled("locator_rag")){let v=(await this.generator.getRecommendedChunks({...h,description:e,tokenLimit:p})).ids;v.length===0?this.logger.warn("RAG returned no important information"):(m=a.pruneUsingRelevantIds(new Set(v)).serialize(),this.logger.debug({tree:m},"Pruned a11y tree with RAG"),d=!0)}let g=await this.generator.getElementLocation({browserState:m,goal:e},n);if(this.logger.debug({usedRag:d,result:g},"Got locator result"),g.id<=0)throw new E("ActionFailureError",`Could not find any relevant element: ${g.thoughts}`);let b={id:g.id},y=await this.browser.resolveTarget(b),w;l&&g.conflicts&&(w=await Promise.all(g.conflicts.slice(0,3).map(async S=>{let v={id:S};return await this.browser.resolveTarget(v),v}))),c={thoughts:g.thoughts,target:b,locator:y.locator,conflicts:w}}return c}getDiffHistory(e,t){let n=this.history.filter(i=>i.type==="AI_ACTION");if(n.length===0)return"<NONE/>";let r=[`
You have already executed the following commands successfully (most recent listed first)`,"-".repeat(10)];return n.reverse().forEach((i,l)=>{if(r.push(`COMMAND ${n.length-l}${l===0?" (command just executed)":""}: ${i.serializedCommand}`),l===0)if(pe(i.urlBeforeCommand,e))r.push(`  URL CHANGE: '${i.urlBeforeCommand}' -> '${e}'`);else{let s=Ti(i.browserStateBeforeCommand,t,{n_surrounding:1});s?s.length<Ai?(r.push("PAGE CONTENT CHANGE:"),s.split(`
`).forEach(a=>r.push(`  ${a}`))):r.push("PAGE CONTENT CHANGE: <TOO_LONG_TO_DISPLAY/>"):r.push("PAGE CONTENT CHANGE: <NONE/>")}r.push("-".repeat(10))}),r.push(`STARTING URL: ${this.browser.baseURL}`),r.join(`
`)}getListHistory(){return Ci`Here are the commands that you have successfully executed:
    ${this.commandHistory.filter(e=>e.type==="AI_ACTION").map(e=>`- ${e.serializedCommand}`).join(`
`)}`}async executeCommand(e,t,n,r=!1){let i=this.commandHistory[this.commandHistory.length-1];if(!r&&(!i||i.state!=="PENDING"))throw new E("InternalWebAgentError","Executing command but there is no pending entry in the history");if(this.closed)throw new Error("Attempting to execute command on a closed controller");let l=Date.now(),s=await this.executePresetStep(e,t,n),a=Date.now()-l;return this.logger.debug({result:s,duration:a},"Got execution result"),s.succeedImmediately&&!r&&(this.pendingInstructions.pop(),this.pendingInstructions.length>0&&(s.succeedImmediately=!1)),s.elementInteracted&&"target"in e&&e.target&&!e.target.elementDescriptor&&(e.target.elementDescriptor=s.elementInteracted.trim()),r||(i.generatedStep=e,i.serializedCommand=ft(e),i.state="DONE"),s}async executeAssertion(e){let t=!1,n=await this.getBrowserState({filterByViewport:e.filterByViewport}),{browserState:r}=n,{tree:i}=n,l=await this.browser.url(),s,a;if(e.useVision)a=await this.browser.screenshot({clearHighlights:!0}),s={goal:e.assertion,url:l,screenshot:a,browserState:"",history:"",numPrevious:-1,lastCommand:null};else{let m=this.getSerializedHistory(l,r),d=.8*Qe["ft:gpt-3.5-turbo-1106:momentic:text-assertions:9CEFjgB4"],p=kt({serializedTree:r,tokenLimit:d});if(p){let g=(await this.generator.getRecommendedChunks({...p,description:e.assertion,tokenLimit:d})).ids;g.length===0?this.logger.warn("RAG returned no important information for assertion"):(r=i.pruneUsingRelevantIds(new Set(g)).serialize(),this.logger.debug({browserState:r},"Pruned a11y tree with RAG"),t=!0)}s={goal:e.assertion,url:l,browserState:r,history:m,lastCommand:this.lastExecutedCommand,numPrevious:this.commandHistory.length}}let c=await this.generator.getAssertionResult(s,e.useVision,e.disableCache);if(c.relevantElements&&Promise.all(Array.from(new Set(c.relevantElements)).slice(0,5).map(m=>this.browser.highlight({id:m}))),this.logger.debug({usedRag:t,result:c},"Got assertion result"),!c.result)throw new E("AssertionFailureError",c.thoughts);return{succeedImmediately:!1,thoughts:c.thoughts,urlAfterCommand:l,beforeScreenshotOverride:a}}async wrapMultiElementTargetingCommand(e,t,n,r,i=1){let l=await Promise.all(e.map((s,a)=>this.wrapElementTargetingCommand({target:s,cache:t[a],action:async c=>c,options:r})));try{return{result:await n(...l.map(a=>a.result)),caches:l.map(a=>a.cache),elementInteractedDisplayStrings:l.map(a=>a.elementInteractedDisplayString)}}catch(s){if(i>0)return this.logger.warn({err:s},"Failed to execute action with multiple cached targets, retrying with AI"),this.wrapMultiElementTargetingCommand(e,e.map(()=>{}),n,r,i-1);throw new E("ActionFailureError",s.message,{cause:s})}}async wrapFrameUseCommand(e,t){if(!t)return e();let n=this.browser.getActiveFrame();try{return this.logger.debug({frameUrl:t},"Setting parent iframe target"),this.browser.setActiveFrame({type:"url",url:t}),await e()}finally{this.browser.setActiveFrame(n)}}async wrapElementTargetingCommand(e){return this.wrapFrameUseCommand(()=>this.wrapElementTargetingCommandHelper(e),e.options.iframeUrl)}async wrapElementTargetingCommandHelper({target:e,cache:t,action:n,options:r}){let{useVision:i,disableCache:l,filterByViewport:s,useSelector:a}=r,c=r.retriesWithAI??1,m;if((!t||l)&&!Wt(e))throw new E("ActionFailureError","Cannot target element with no cached data or element descriptor");if(a){let p={id:-1,selector:e.elementDescriptor},h=await this.browser.resolveTarget(p);return{result:await n(h.locator),cache:p,elementInteractedDisplayString:h.displayString}}if(e.percentXYLocation){let p=await this.browser.resolveTargetWithXY(e.percentXYLocation);return{result:await n(p.locator),cache:void 0,elementInteractedDisplayString:p.displayString}}l&&(this.logger.info("Cache explicitly disabled for this step"),t=void 0);let d=!!t&&Le(t);if(!t){this.logger.debug("No cached locator data for target, prompting AI for fresh location"),c--;let p=await this.locateElement({description:e.elementDescriptor,useVision:i,disableCache:l,filterByViewport:s,iframeUrl:r.iframeUrl});t=p.target,m=p.thoughts}try{let p=await this.browser.resolveTarget(t),h=await n(p.locator);return d?this.logger.info("Successfully used cached target to perform action"):this.logger.info("Successfully generated and used new target data"),this.logger.debug({cache:t},"Cache state after action"),{result:h,cache:t,thoughts:m,elementInteractedDisplayString:p.displayString}}catch(p){if(p instanceof E)throw p;if(c>0&&e)return this.logger.debug({cache:t},"Cache state after failed targeting attempt"),this.logger.warn({err:p},"Failed to execute action with cached target, retrying with AI"),this.wrapElementTargetingCommand({target:e,cache:void 0,action:n,options:{...r,retriesWithAI:c}});throw new E("ActionFailureError",p.message,{cause:p})}}async screenshotWithDimensions(e){let t=await this.browser.screenshot(e),n=Si(t);return{buffer:t,...n}}async executePresetStep(e,t,n){let r;try{r=await this.resolveCommandTemplateStrings(e,t)}catch(i){throw new E("ActionFailureError",i.message,{cause:i})}try{let i=this.browser.getOpenPages(),l=await this.browser.url(),s=await this.executePresetStepHelper(e,t,n),a=!0;(e.type==="NAVIGATE"||e.type==="NEW_TAB"||e.type==="TAB"||e.type==="REFRESH")&&(a=!1);let c=this.browser.getOpenPages(),m=await this.browser.url();if(this.logger.debug({beforePages:i,afterPages:c,currentUrl:m},"URL after preset action"),a&&c.length!==i.length)for(let d=c.length-1;d>=0;d--){let p=c[d];if(p!==l&&p!==m){await this.browser.switchToPage(p,d);break}}return s}catch(i){throw this.logger.error({err:i},"Error thrown in web agent controller"),i}finally{this.restoreCommandTemplateReplacements(e,r)}}restoreCommandTemplateReplacements(e,t={}){for(let[n,r]of Object.entries(t))Dt(e,n,r)}async resolveCommandTemplateStrings(e,t,n="",r={}){let i=["type","a11yData","thoughts","cache"];for(let l in e){if(i.includes(l))continue;let s=e[l],a=n?`${n}.${l}`:l;if(typeof s=="string"&&s.includes("{{")){let c=await Je({s,context:t,logger:this.logger});if(s===c)continue;r[a]=s,e[l]=c}else typeof s=="object"&&s!==null&&!Array.isArray(s)&&await this.resolveCommandTemplateStrings(s,t,a,r)}return r}async executePresetStepHelper(e,t,n){switch(n=n||"disableCache"in e&&e.disableCache,e.type){case"SUCCESS":let r=e.condition;return r?.assertion.trim()?this.wrapFrameUseCommand(()=>this.executeAssertion(r),r?.iframeUrl):{succeedImmediately:!1,urlAfterCommand:await this.browser.url()};case"AI_ASSERTION":{if(!e.assertion.trim())throw new E("ActionFailureError","Missing assertion");return this.wrapFrameUseCommand(()=>this.executeAssertion(e),e.iframeUrl)}case"AI_WAIT":{if(!e.assertion.trim())throw new E("ActionFailureError","Missing assertion");let d=Date.now();if(e.timeout&&e.timeout>60)throw new E("AssertionFailureError",`AI wait timeout of ${e.timeout} exceeds the maximum allowed timeout of 60s`);let p=(e.timeout??10)*1e3,h,g,b=0;for(;Date.now()-d<p;)try{h=await this.executeAssertion({...e,type:"AI_ASSERTION"});break}catch(y){g=y instanceof Error?y:new Error(`${y}`),this.logger.warn({err:y},`AI_WAIT assert attempt ${b} failed, retrying...`),b++,await M(p/10)}if(!h){let y=`AI wait still failing after ${p}ms.`;throw g&&(y+=` Latest result: ${g.message}`),new E("AssertionFailureError",y)}return h}case"AI_EXTRACT":{if(!e.goal.trim())throw new E("ActionFailureError","Cannot perform AI extraction without goal");let d=await this.browser.getCondensedHtml(),p=await this.generator.getTextExtraction({goal:e.goal,browserState:d,returnSchema:e.schema},n);if(p.result==="NOT_FOUND")throw new E("ActionFailureError","No relevant data found for extraction goal on this page");return{data:p.result,succeedImmediately:!1,urlAfterCommand:await this.browser.url()}}case"NAVIGATE":if(!Et(e.url)&&!At(e.url,this.browser.baseURL))throw new E("ActionFailureError",`Invalid URL provided to navigate command: ${e.url}`);await this.browser.navigate({url:e.url,loadTimeoutMs:e.loadTimeout?e.loadTimeout*1e3:void 0,networkIdleTimeoutMs:e.networkTimeout?e.networkTimeout*1e3:5e3});break;case"DIALOG":this.browser.registerDialogHandler(e.action);break;case"CAPTCHA":if(!this.browser.canSolveCaptchas())break;let i=await this.browser.solveCaptcha();i&&(await this.wrapElementTargetingCommand({target:{elementDescriptor:"the captcha image solution input"},cache:void 0,action:d=>this.browser.click(d),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}}),await this.browser.type(i,{clearContent:!0,pressKeysSequentially:!1}));break;case"GO_BACK":await this.browser.goBack();break;case"GO_FORWARD":await this.browser.goForward();break;case"SCROLL_LEFT":case"SCROLL_RIGHT":case"SCROLL_DOWN":case"SCROLL_UP":let l,s;if(e.target&&(e.target.elementDescriptor.trim()||e.target.a11yData)){let{cache:d,thoughts:p,elementInteractedDisplayString:h}=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target??e.target.a11yData,action:g=>this.browser.hover(g),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});l=h,d&&(e.cache={target:d}),s=p}switch(e.type){case"SCROLL_UP":await this.browser.scrollUp(e.deltaY);break;case"SCROLL_DOWN":await this.browser.scrollDown(e.deltaY);break;case"SCROLL_LEFT":await this.browser.scrollLeft(e.deltaX);break;case"SCROLL_RIGHT":await this.browser.scrollRight(e.deltaX);break}return{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:l,thoughts:s};case"WAIT":await this.browser.wait(e.delay*1e3);break;case"REFRESH":await this.browser.refresh({networkIdleTimeoutMs:e.networkTimeout?e.networkTimeout*1e3:void 0,loadTimeoutMs:e.loadTimeout?e.loadTimeout*1e3:void 0});break;case"CLICK":{let d=await this.browser.url(),p={useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl},{elementInteractedDisplayString:h,cache:g,thoughts:b}=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target??e.target.a11yData,action:w=>this.browser.click(w,{doubleClick:e.doubleClick,rightClick:e.rightClick,force:e.force,waitForUrl:e.waitForUrl}),options:p});g&&(e.cache={target:g});let y={urlAfterCommand:await this.browser.url(),succeedImmediately:!1,elementInteracted:h,thoughts:b};return pe(d,y.urlAfterCommand)&&(y.succeedImmediately=!0,y.succeedImmediatelyReason="URL changed"),y}case"DRAG":{let{caches:d,elementInteractedDisplayStrings:p}=await this.wrapMultiElementTargetingCommand([e.fromTarget,e.toTarget],[e.cache?.fromTarget,e.cache?.toTarget],(h,g)=>this.browser.dragAndDrop(h,g,{force:e.force,hoverSeconds:e.hoverSeconds}),{useVision:e.useVision,filterByViewport:e.filterByViewport,useSelector:e.useSelector,disableCache:n});return d&&d.every(h=>h)&&(e.cache={fromTarget:d[0],toTarget:d[1]}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:p[0]}}case"MOUSE_DRAG":{let d,p;if(e.target?.elementDescriptor){let b=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target,action:async y=>y,options:{useVision:e.useVision,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl,disableCache:n}});d=b.result,p=b.elementInteractedDisplayString}let h=parseInt(e.deltaX),g=parseInt(e.deltaY);if(isNaN(h)||isNaN(g))throw new E("ActionFailureError",`Invalid pixel values passed to mouse drag command: (${e.deltaX}, ${e.deltaY})`);return await this.browser.mouseDrag(h,g,e.steps,d,{force:e.force}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:p}}case"SELECT_OPTION":{let d=e.target.elementDescriptor,{cache:p,thoughts:h,elementInteractedDisplayString:g}=await this.wrapElementTargetingCommand({target:{elementDescriptor:bt(e,d)},cache:e.cache?.target??e.target.a11yData,action:b=>this.browser.selectOption(b,e.option),options:{useVision:!1,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});return p&&(e.cache={target:p}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:g,thoughts:h}}case"TAB":await this.browser.switchToPage(e.url,void 0,{networkIdleTimeoutMs:e.networkTimeout?e.networkTimeout*1e3:void 0,loadTimeoutMs:e.loadTimeout?e.loadTimeout*1e3:void 0});break;case"NEW_TAB":await this.browser.createNewTab(e.url,{networkIdleTimeoutMs:e.networkTimeout?e.networkTimeout*1e3:void 0,loadTimeoutMs:e.loadTimeout?e.loadTimeout*1e3:void 0});break;case"COOKIE":if(!e.value)break;await this.browser.setCookie(e.value);break;case"LOCAL_STORAGE":if(!e.value||!e.key)break;await this.browser.setLocalStorage(e.key,e.value);break;case"JAVASCRIPT":{let d;try{e.environment==="BROWSER"?d=await this.browser.executePageFunction(new Be(e.fragment?`return ${e.code}`:e.code),void 0):d=await Mt({code:e.code,fragment:!!e.fragment,context:t,timeoutMs:e.timeout?e.timeout*1e3:void 0,logger:this.logger})}catch(p){throw new E("ActionFailureError",p instanceof Error?p.message:`${p}`,{cause:p})}try{JSON.stringify(d)}catch(p){throw new E("ActionFailureError",`Return value is not serializable: ${p instanceof Error?p.message:`${p}`}`,{cause:p})}return{urlAfterCommand:await this.browser.url(),succeedImmediately:!1,data:d}}case"TYPE":{let d=await this.browser.url(),p,h,g=vi(e.target);if(g){g.elementDescriptor=bt(e,g.elementDescriptor);let{elementInteractedDisplayString:y,cache:w,thoughts:S}=await this.wrapElementTargetingCommand({target:g,cache:e.cache?.target??g.a11yData,action:v=>this.browser.typeIntoTarget(e.value,v,{force:e.force,clearContent:e.clearContent,pressKeysSequentially:e.pressKeysSequentially}),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});h=S,p=y,w&&(e.cache={target:w})}else await this.browser.type(e.value,{force:e.force,clearContent:e.clearContent,pressKeysSequentially:e.pressKeysSequentially});e.pressEnter&&await this.browser.press("Enter");let b={urlAfterCommand:await this.browser.url(),succeedImmediately:!1,elementInteracted:p,thoughts:h};return pe(d,b.urlAfterCommand)&&(b.succeedImmediately=!0,b.succeedImmediatelyReason="URL changed"),b}case"HOVER":{let{cache:d,thoughts:p,elementInteractedDisplayString:h}=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target??e.target.a11yData,action:g=>this.browser.hover(g),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});return d&&(e.cache={target:d}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:h,thoughts:p}}case"FOCUS":{let{elementInteractedDisplayString:d,cache:p,thoughts:h}=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target??e.target.a11yData,action:g=>this.browser.focus(g),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});return p&&(e.cache={target:p}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:d,thoughts:h}}case"BLUR":{let{cache:d,thoughts:p,elementInteractedDisplayString:h}=await this.wrapElementTargetingCommand({target:e.target,cache:e.cache?.target??e.target.a11yData,action:g=>this.browser.blur(g),options:{useVision:e.useVision,disableCache:n,filterByViewport:e.filterByViewport,useSelector:e.useSelector,iframeUrl:e.iframeUrl}});return d&&(e.cache={target:d}),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),elementInteracted:h,thoughts:p}}case"PRESS":let a=await this.browser.url();await this.browser.press(e.value);let c={urlAfterCommand:await this.browser.url(),succeedImmediately:!1};return pe(a,c.urlAfterCommand)&&(c.succeedImmediately=!0,c.succeedImmediatelyReason="URL changed"),c;case"REQUEST":{let d=e.timeout??30,p=null,h=new AbortController,g=Object.fromEntries(Object.entries(e.headers||{}).filter(([P,k])=>P&&k)),b=new URLSearchParams;Object.entries(e.params||{}).filter(([P,k])=>P&&k).forEach(([P,k])=>{b.append(P,k)});let y;if(Et(e.url)&&(y=e.url),At(e.url,this.browser.baseURL)&&(y=new URL(e.url,this.browser.baseURL).toString()),!y)throw new E("ActionFailureError",`Invalid URL: ${e.url}`);let w=async()=>{try{p=await fetch(`${y}?${b.toString()}`,{headers:g,method:e.method,body:e.body,signal:h.signal})}catch(P){this.logger.error({err:P},"Failed to make fetch request")}},S=async()=>{await new Promise(P=>setTimeout(P,d*1e3)),h.abort()};await Promise.race([S(),w()]);let v=p;if(!v)throw new E("ActionFailureError",`Fetch request timed out after ${d} seconds`);if(!v.ok)throw new E("ActionFailureError",`Fetch request failed with status ${v.status}`);let B={};v.headers.forEach((P,k)=>{B[k]=P});let Q={status:v.status,headers:B};return v.headers.get("content-type")?.includes("json")?Q.json=await v.json():v.headers.get("content-type")?.includes("text")&&(Q.text=await v.text()),{succeedImmediately:!1,urlAfterCommand:await this.browser.url(),data:Q}}case"VISUAL_DIFF":{if(!e.screenshot)throw new E("ActionFailureError","Cannot execute visual diff without saved screenshot");let d=await this.screenshotWithDimensions({target:e.cache?.target??e.target?.a11yData,clearHighlights:!0,hideCaret:!0});if(d.height!==e.screenshot.height||d.width!==e.screenshot.width)throw new E("ActionFailureError","Current screenshot does not match saved screenshot dimensions - did you change the size of the target or the viewport?");let p={data:Buffer.alloc(d.width*d.height*4),width:d.width,height:d.height},h;if(e.screenshot.data.startsWith("https://")){let w=await fetch(e.screenshot.data);h=Buffer.from(await w.arrayBuffer())}else h=Buffer.from(e.screenshot.data,"base64");let b=Ei(zt.decode(h).data,zt.decode(d.buffer).data,p.data,d.width,d.height,{threshold:e.threshold,diffColorAlt:[0,255,0]})/(d.width*d.height)*100,y=b>e.threshold*100;return{fail:y,thoughts:y?`Visual diff of ${b.toFixed(2)}% detected, which is over the threshold of ${e.threshold*100}%`:void 0,beforeScreenshotOverride:d.buffer,afterScreenshotOverride:zt.encode(p,75).data,succeedImmediately:!1,urlAfterCommand:await this.browser.url()}}default:return(d=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(e)}return{succeedImmediately:!1,urlAfterCommand:await this.browser.url()}}async getReverseMappedTarget(e,t,n){return(await this.generator.getReverseMappedDescription({browserState:e.browserState,goal:`${t}`},n)).phrase}stopRecordMode(){this.recordAbortController?.abort()}async startRecordMode(e){this.recordAbortController=new AbortController;let t=new Ze({signal:this.recordAbortController.signal,...e});await this.browser.startRecording(this.recordAbortController.signal,t)}};import{z as xi}from"zod";import Ii from"fetch-retry";var Ri=Ii(global.fetch),$=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await Ri(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var Ut=class extends ${constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${$.API_VERSION}/web-agent/recommend-chunks`,e);return En.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${$.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return xi.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/locate-element`,{browserState:e.browserState,goal:e.goal,disableCache:t});return vt.parse(n)}async getElementLocationWithVision(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/visual-locate`,{goal:e.goal,screenshot:e.screenshot?.toString("base64"),hintActivatedScreenshot:e.hintActivatedScreenshot?.toString("base64"),disableCache:t});return vt.parse(n)}async getAssertionResult(e,t,n){if(t){let i=await this.sendRequest(`/${$.API_VERSION}/web-agent/assertion`,{url:e.url,goal:e.goal,screenshot:e.screenshot?.toString("base64"),disableCache:n,vision:!0});return Tt.parse(i)}let r=await this.sendRequest(`/${$.API_VERSION}/web-agent/assertion`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:n,vision:!1});return Tt.parse(r)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:t});return Cn.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t});return Tn.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t});return vn.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:t},r=await this.sendRequest(`/${$.API_VERSION}/web-agent/text-extraction`,n);return ut.parse(r)}};export{Ut as APIGenerator,Ft as ActionController,_t as ChromeBrowser,q as CommandType,ei as DEFAULT_CONTROLLER_CONFIG,ne as StepType};
