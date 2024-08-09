import{v4 as ea}from"uuid";import*as c from"zod";import{z as L}from"zod";var on=L.object({thoughts:L.string(),result:L.boolean(),relevantElements:L.array(L.number()).optional()}),ft=(n=>(n.CONTAINS="CONTAINS",n.STARTS_WITH="STARTS_WITH",n.EQUALS="EQUALS",n))(ft||{});var Eo=L.object({type:L.literal("ELEMENT_CONTENT"),negated:L.boolean().optional(),operation:L.nativeEnum(ft),value:L.string()}),Co=L.object({type:L.literal("ELEMENT_ATTRIBUTE"),negated:L.boolean().optional(),operation:L.nativeEnum(ft),attr:L.string(),value:L.string()}),yt=(o=>(o.EXISTS="EXISTS",o.VISIBLE="VISIBLE",o.ENABLED="ENABLED",o.EDITABLE="EDITABLE",o))(yt||{}),vo=L.object({type:L.literal("ELEMENT_EXISTENCE"),negated:L.boolean().optional(),condition:L.nativeEnum(yt)}),rn=L.discriminatedUnion("type",[Eo,Co,vo]);var xo=L.object({type:L.literal("CONTENT"),negated:L.boolean().optional(),value:L.string()}),an=L.discriminatedUnion("type",[xo]);import*as C from"zod";var Fe=(i=>(i.AI="AI",i.AI_HEALED="AI_HEALED",i.CLICK_TO_FIND="CLICK_TO_FIND",i.XY_PERCENT="XY_PERCENT",i.RECORDING="RECORDING",i.USER_CSS_SELECTOR="USER_CSS_SELECTOR",i))(Fe||{}),Se=C.object({id:C.number().int(),dataMomenticId:C.number().int().optional(),selector:C.string().optional(),generatedSelectors:C.string().array().optional(),role:C.string().optional(),name:C.string().optional(),numChildren:C.number().optional(),content:C.string().optional(),pathFromRoot:C.string().optional(),serializedForm:C.string().optional(),nodeOnlySerializedForm:C.string().optional(),serializedHtml:C.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:C.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned."),screenshotUrl:C.string().url().optional(),boundingBox:C.object({x:C.number().optional(),y:C.number().optional(),width:C.number(),height:C.number()}).describe("css pixel bounding box").optional(),inputDescription:C.string().optional().describe("the description that generated this cache"),targetSource:C.nativeEnum(Fe).optional()});function sn(s){return!!(s.name||s.role||s.content||s.serializedForm||s.serializedHtml||s.screenshotUrl)}var Ao=C.object({percentX:C.number().describe("between 0 and 1"),percentY:C.number()}),Ro=C.object({type:C.literal("description"),elementDescriptor:C.string(),a11yData:Se.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var j=C.discriminatedUnion("type",[Ro,C.object({type:C.literal("coordinates"),percentXYLocation:Ao})]);var fe=(E=>(E.AI_EXTRACT="AI_EXTRACT",E.AI_ASSERTION="AI_ASSERTION",E.AI_WAIT="AI_WAIT",E.AUTH_LOAD="AUTH_LOAD",E.AUTH_SAVE="AUTH_SAVE",E.BLUR="BLUR",E.CAPTCHA="CAPTCHA",E.CLICK="CLICK",E.COOKIE="COOKIE",E.DIALOG="DIALOG",E.DRAG="DRAG",E.ELEMENT_CHECK="ELEMENT_CHECK",E.FILE_UPLOAD="FILE_UPLOAD",E.FOCUS="FOCUS",E.GO_BACK="GO_BACK",E.GO_FORWARD="GO_FORWARD",E.HOVER="HOVER",E.JAVASCRIPT="JAVASCRIPT",E.LOCAL_STORAGE="LOCAL_STORAGE",E.MOUSE_DRAG="MOUSE_DRAG",E.NAVIGATE="NAVIGATE",E.NEW_TAB="NEW_TAB",E.PAGE_CHECK="PAGE_CHECK",E.PRESS="PRESS",E.REFRESH="REFRESH",E.REQUEST="REQUEST",E.SCROLL_DOWN="SCROLL_DOWN",E.SCROLL_UP="SCROLL_UP",E.SCROLL_LEFT="SCROLL_LEFT",E.SCROLL_RIGHT="SCROLL_RIGHT",E.SELECT_OPTION="SELECT_OPTION",E.TAB="TAB",E.TYPE="TYPE",E.VISUAL_DIFF="VISUAL_DIFF",E.WAIT="WAIT",E.WAIT_FOR_URL="WAIT_FOR_URL",E.SUCCESS="SUCCESS",E))(fe||{}),v=c.object({thoughts:c.string().optional(),id:c.string().uuid().describe("unique identifier to this step, used for step cache")}),ee=c.object({useSelector:c.boolean().optional(),useXY:c.boolean().optional(),force:c.boolean().optional(),disableCache:c.boolean().optional().describe("disable element caching for this step"),iframeUrl:c.string().optional().describe("url or url regex for the iframe")}),se=c.object({target:Se}).optional(),Qe=c.object({loadTimeout:c.number().int().max(60).optional().describe("Max seconds for the page to load")}),No=v.merge(Qe).merge(c.object({type:c.literal("NAVIGATE"),url:c.string()})),Ze=ee.merge(c.object({cache:se})),et=v.merge(Ze.merge(c.object({target:j.optional(),type:c.literal("SCROLL_UP"),deltaY:c.number().optional()}))),tt=v.merge(Ze.merge(c.object({target:j.optional(),type:c.literal("SCROLL_DOWN"),deltaY:c.number().optional()}))),nt=v.merge(Ze.merge(c.object({target:j.optional(),type:c.literal("SCROLL_LEFT"),deltaX:c.number().optional()}))),ot=v.merge(Ze.merge(c.object({target:j.optional(),type:c.literal("SCROLL_RIGHT"),deltaX:c.number().optional()}))),oa=c.discriminatedUnion("type",[et,tt,nt,ot]),Mo=v.merge(c.object({type:c.literal("DIALOG"),action:c.union([c.literal("ACCEPT"),c.literal("DISMISS")])})),Lo=v.merge(c.object({type:c.literal("WAIT"),delay:c.number()})),Oo=v.merge(c.object({type:c.literal("WAIT_FOR_URL"),url:c.string(),timeout:c.number().int().optional().describe("Max seconds to wait for the URL to match")})),_o=v.merge(Qe).merge(c.object({type:c.literal("REFRESH")})),Po=v.merge(c.object({type:c.literal("GO_BACK")})),Do=v.merge(c.object({type:c.literal("GO_FORWARD")})),ko=v.extend({type:c.literal("AUTH_SAVE")}),zo=v.extend({type:c.literal("AUTH_LOAD"),storageState:c.string().describe("JSON string auth state")}),ln=v.merge(ee).extend({type:c.literal("CAPTCHA")}),Fo=v.merge(c.object({type:c.literal("JAVASCRIPT"),code:c.string(),fragment:c.boolean().optional(),envKey:c.string().optional(),environment:c.union([c.literal("NODE"),c.literal("BROWSER")]).optional().describe("default NODE"),timeout:c.number().int().max(60).optional().describe("Max seconds for the code to complete")})),bt=v.merge(ee).merge(c.object({type:c.literal("CLICK"),target:j,doubleClick:c.boolean().optional(),rightClick:c.boolean().optional(),waitForUrl:c.string().optional().describe("call playwright waitForURL after click"),waitForDownload:c.boolean().optional().describe("wait for a download to occur and return the file downloaded"),cache:se})),St=v.merge(ee).merge(c.object({type:c.literal("DRAG"),fromTarget:j,toTarget:j,hoverSeconds:c.number().optional().describe("Seconds to hover the object before dropping"),cache:c.object({fromTarget:Se.optional(),toTarget:Se.optional()}).optional()})),wt=v.merge(ee).merge(c.object({type:c.literal("MOUSE_DRAG"),target:j.optional(),deltaX:c.string().describe("pixels to move horizontally, can be template"),deltaY:c.string().describe("pixels to move vertically, can be template"),steps:c.number().optional(),cache:se})),Tt=v.merge(ee).merge(c.object({type:c.literal("HOVER"),target:j,cache:se})),Et=v.merge(ee).merge(c.object({type:c.literal("FOCUS"),target:j,cache:se})),Ct=v.merge(ee).merge(c.object({type:c.literal("BLUR"),target:j,cache:se})),Uo=v.extend({type:c.literal("FILE_UPLOAD"),fileSource:c.discriminatedUnion("type",[c.object({type:c.literal("URL"),url:c.string()}).describe("Accessible link to the file, either public http or local file://")])}),vt=v.merge(ee).merge(c.object({type:c.literal("SELECT_OPTION"),target:j,option:c.string(),cache:se})),xt=v.merge(c.object({type:c.literal("AI_ASSERTION"),assertion:c.string(),disableCache:c.boolean().optional(),iframeUrl:c.string().optional(),timeout:c.number().int().optional().describe("Max seconds to wait for assertion to be true")})),Bo=xt.extend({type:c.literal("AI_WAIT")});var At=60,Rt=v.merge(ee).extend({type:c.literal("ELEMENT_CHECK"),target:j,assertion:rn,cache:se,timeout:c.number().int().min(0).max(At).optional().describe("max seconds to wait for the assertion to be true")}),Wo=v.extend({type:c.literal("PAGE_CHECK"),assertion:an,timeout:c.number().int().min(0).max(At).optional().describe("max seconds to wait for the assertion to be true")}),Ho=v.merge(c.object({type:c.literal("AI_EXTRACT"),goal:c.string(),schema:c.string().optional(),envKey:c.string().optional(),disableCache:c.boolean().optional(),iframeUrl:c.string().optional()})),jo=c.object({clearContent:c.boolean().optional(),pressKeysSequentially:c.boolean().optional(),force:c.boolean().optional(),pressEnter:c.boolean().optional()}),It=v.merge(ee).merge(jo).extend({type:c.literal("TYPE"),target:j.optional(),value:c.string(),cache:se}),Go=v.merge(c.object({type:c.literal("PRESS"),value:c.string()})),$o=v.merge(Qe).merge(c.object({type:c.literal("TAB"),url:c.string()})),Vo=v.merge(Qe).merge(c.object({type:c.literal("NEW_TAB"),url:c.string()})),qo=v.merge(c.object({type:c.literal("COOKIE"),value:c.string()})),Ko=v.merge(c.object({type:c.literal("LOCAL_STORAGE"),key:c.string(),value:c.string()})),Yo=v.merge(c.object({type:c.literal("REQUEST"),url:c.string(),method:c.union([c.literal("GET"),c.literal("POST"),c.literal("PUT"),c.literal("DELETE"),c.literal("PATCH")]),headers:c.record(c.string(),c.string()).optional(),params:c.record(c.string(),c.string()).optional(),body:c.string().optional(),timeout:c.number().int().optional().describe("Max seconds to wait for the request to complete")})),Xo=v.merge(c.object({type:c.literal("SUCCESS"),condition:xt.optional()})),Jo=v.merge(c.object({type:c.literal("FAILURE")})),Qo=c.object({data:c.string().describe("s3 url to a jpg"),width:c.number(),height:c.number()}),Nt=v.merge(ee).merge(c.object({type:c.literal("VISUAL_DIFF"),threshold:c.number().optional().describe("default 0.1"),target:j.optional(),screenshot:Qo.optional(),cache:se})),rt=c.discriminatedUnion("type",[bt,It,Go,vt,No,tt,et,xt,Xo]),Zo=c.discriminatedUnion("type",[Bo,Ho,zo,ko,ln,qo,Mo,St,Rt,Uo,Po,Do,Tt,Fo,Ko,wt,Vo,Wo,_o,Yo,nt,ot,$o,Nt,Lo,Et,Ct,Oo]),Mt=c.discriminatedUnion("type",[...rt.options,...Zo.options]),Lt=c.discriminatedUnion("type",[...rt.options,Jo]);var Y={type:!0,cache:!0},Ot=c.discriminatedUnion("type",[Ct.pick(Y),bt.pick(Y),St.pick(Y),Rt.pick(Y),Et.pick(Y),Tt.pick(Y),wt.pick(Y),et.pick(Y),tt.pick(Y),nt.pick(Y),ot.pick(Y),vt.pick(Y),It.pick(Y),Nt.pick(Y)]),er=Object.values(fe).filter(s=>Ot.options.some(e=>e.shape.type.safeParse(s).success));Mt.options.forEach(s=>{if("target"in s.shape&&!er.includes(s.shape.type.value))throw new Error(`Command ${s.shape.type.value} has a target but no cache`)});var ra=c.discriminatedUnion("type",[Ct,ln,bt,St,Et,Tt,wt,et,tt,nt,ot,vt,It,Nt,Rt]);import{z as dn}from"zod";import{z as cn}from"zod";import{z as _t}from"zod";var te=_t.object({index:_t.number().optional().describe("global index"),skipped:_t.boolean().optional()});var ne=(i=>(i.PRESET_ACTION="PRESET_ACTION",i.MODULE="MODULE",i.AI_ACTION="AI_ACTION",i.CONDITIONAL="CONDITIONAL",i.IFRAME="IFRAME",i.SECTION="SECTION",i))(ne||{});var le=te.extend({type:cn.literal("PRESET_ACTION"),command:Mt,skipped:cn.boolean().optional()});var Ne=te.extend({type:dn.literal("AI_ACTION"),text:dn.string(),steps:le.array().optional()});import{z as P}from"zod";var tr=P.object({cacheKey:P.string(),cacheExpiryMs:P.number()}),Pt=te.extend({id:P.string().uuid().describe("ID of the module step itself. Used to 'namespace' step cache entries."),inputs:P.record(P.string()).optional(),cacheConfig:tr.optional()}),Me=Pt.extend({type:P.literal("MODULE"),moduleId:P.string().uuid()}),nr=P.union([Me.pick({type:!0,moduleId:!0}),P.record(P.unknown())]),we=P.object({moduleId:P.string().uuid(),name:P.string(),parameters:P.string().array().nullish(),defaultParameters:P.record(P.string(),P.string()).nullish(),defaultCacheKey:P.string().nullish(),defaultCacheTtl:P.number().nullish()});import{z as B}from"zod";import{z as mn}from"zod";var Ue=te.extend({type:mn.literal("CONDITIONAL"),skipped:mn.boolean().optional()});import{z as oe}from"zod";var or=oe.object({type:oe.literal("attr"),name:oe.string(),value:oe.string()}),rr=oe.object({type:oe.literal("css"),selector:oe.string()}),ir=oe.object({type:oe.literal("url"),url:oe.string()}),ar=oe.union([or,ir,rr]),Be=te.extend({type:oe.literal("IFRAME"),identifier:ar});import{z as un}from"zod";var We=te.extend({type:un.literal("SECTION"),description:un.string()});var pn=we.merge(Pt).extend({type:B.literal("RESOLVED_MODULE"),steps:B.lazy(()=>Z.array())}),Dt=we.extend({steps:B.lazy(()=>Z.array())}),sr=Be.extend({steps:B.lazy(()=>Te.array())}),lr=Be.extend({steps:B.lazy(()=>Z.array())}),cr=We.extend({steps:B.lazy(()=>Te.array())}),dr=We.extend({steps:B.lazy(()=>Z.array())}),mr=Ue.extend({blocks:B.object({assertion:B.lazy(()=>le),steps:B.lazy(()=>Te.array())}).array(),elseSteps:B.lazy(()=>Te.array().optional())}),ur=Ue.extend({blocks:B.object({assertion:B.lazy(()=>le),steps:B.lazy(()=>Z.array())}).array(),elseSteps:B.lazy(()=>Z.array().optional())}),Te=B.discriminatedUnion("type",[le,Ne,Me,mr,sr,cr]),Z=B.discriminatedUnion("type",[le,Ne,pn,ur,lr,dr]);import{z as Ee}from"zod";var kt=Ee.object({key:Ee.string(),testId:Ee.string().optional(),moduleId:Ee.string().optional(),organizationId:Ee.string(),value:Ot}),pr=Ee.record(Ee.string(),kt);var He={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&F(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&F(t,n,e[n]);return t};var g=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(I=>Object.assign(I,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,I]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&I!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var H=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[MOMENTIC] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=H;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
  const warnings = [];
  const ele = (_a = customWindow.findElementInBodyOrShadowDom) == null ? void 0 : _a.call(customWindow, dataMomenticId);
  if (!ele) {
    return {
      error: \`Could not find element with data-momentic-id: \${dataMomenticId}\`,
      warnings
    };
  }
  const {
    selectors,
    error: cssError,
    warnings: cssWarnings
  } = customWindow.generateCssSelectors(dataMomenticId);
  warnings.push(...cssWarnings);
  if (cssError) {
    return { error: cssError, warnings };
  }
  return {
    warnings,
    attributes: {
      generatedSelectors: selectors,
      serializedHtml: (_b = customWindow.serializeElementWithContext) == null ? void 0 : _b.call(customWindow, ele),
      nodeOnlySerializedHtml: (_c = customWindow.serializeElementOnlyWithText) == null ? void 0 : _c.call(customWindow, ele)
    }
  };
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
  bannedElementAttributes: [
    // momentic internal
    "data-momentic-id",
    "aria-keyshortcuts",
    // auto-generated
    "data-ved"
  ],
  relevantElementAttributes: [
    "name",
    "id",
    "value",
    "type",
    "class",
    "height",
    "width",
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
    // inputs
    "min",
    "max",
    "minlength",
    "maxlength",
    "multiple",
    "pattern",
    "placeholder",
    "accept",
    // dropdowns
    "data-value",
    // general testing
    "data-testid",
    "data-cy",
    "data-test-id",
    "data-test",
    "data-role",
    "data-type",
    "data-action",
    "data-aria-hidden",
    "data-hidden",
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
  const warnings = [];
  const customWindow = window;
  const ele = document.querySelector(\`[data-momentic-id="\${dataMomenticId}"]\`);
  if (!ele) {
    return {
      selectors: [],
      error: \`Could not find element with data-momentic-id: \${dataMomenticId}\`,
      warnings
    };
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
  const whitelist = ["*data-testid*", "*data-cy*"];
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
    try {
      const selector = (_a = customWindow.CssSelectorGenerator) == null ? void 0 : _a.getCssSelector(
        ele,
        options
      );
      if (selector) {
        selectors.push(selector);
        blacklist.push(selector);
      }
    } catch (err) {
      warnings.push(
        \`Error generating selectors with CssSelectorGenerator: \${err}\`
      );
    }
  }
  try {
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
  } catch (err) {
    warnings.push(
      \`Error generating selectors with CssSelectorGenerator: \${err}\`
    );
  }
  if (selectors.length < 3) {
    try {
      const allOptionsSelector = (_c = customWindow.CssSelectorGenerator) == null ? void 0 : _c.getCssSelector(ele, {
        blacklist,
        maxCombinations: 50,
        maxCandidates: 50,
        includeTag: true
      });
      if (allOptionsSelector) {
        selectors.push(allOptionsSelector);
      }
    } catch (err) {
      warnings.push(
        \`Error generating all-option selector with CssSelectorGenerator: \${err}\`
      );
    }
  }
  try {
    const result = (_d = customWindow.momenticSelectorGenerator) == null ? void 0 : _d.call(customWindow, ele);
    if (result) {
      selectors.push(...result);
    }
  } catch (err) {
    warnings.push(
      \`Error generating selectors with Momentic custom library: \${err}\`
    );
  }
  try {
    const result = (_e = customWindow.medvCssSelectorGenerator) == null ? void 0 : _e.call(customWindow, ele);
    if (result) {
      selectors.push(result);
    }
  } catch (err) {
    warnings.push(\`Error generating selector with medv: \${err}\`);
  }
  return {
    selectors: Array.from(new Set(selectors)),
    warnings
  };
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

// src/html/element-location.ts
function addFindElementInBodyOrShadowDomScript() {
  const customWindow = window;
  if (customWindow.findElementInBodyOrShadowDom) {
    return;
  }
  customWindow.getAllElements = () => {
    const result = [];
    const stack = [document.body];
    while (stack.length > 0) {
      const currentNode = stack.pop();
      result.push(currentNode);
      if (currentNode.shadowRoot) {
        for (const node of currentNode.shadowRoot.querySelectorAll("*")) {
          stack.push(node);
        }
      }
      if (currentNode.children) {
        for (let i = currentNode.children.length - 1; i >= 0; i--) {
          stack.push(currentNode.children[i]);
        }
      }
    }
    return result;
  };
  customWindow.findElementInBodyOrShadowDom = (dataMomenticId) => {
    if (!customWindow.getAllElements) {
      console.error(
        \`[MOMENTIC] Momentic libraries missing from page when finding elements in the DOM\`
      );
      return null;
    }
    const allElements = customWindow.getAllElements();
    for (const ele of allElements) {
      if (ele.getAttribute("data-momentic-id") === \`\${dataMomenticId}\`) {
        return ele;
      }
    }
    return null;
  };
}
function addEvaluateCssSelectorsScript() {
  const customWindow = window;
  if (customWindow.evaluateCssSelectors) {
    return;
  }
  customWindow.evaluateCssSelectors = (params) => {
    var _a;
    if (!customWindow.serializeElementWithContext || !customWindow.ldist) {
      return {
        logs: ["[MOMENTIC] Missing Momentic library in css evaluation script"]
      };
    }
    const logs = [];
    const {
      selectors,
      serializedNodeWithContext,
      lDistThresholdLax,
      lDistThresholdStrict
    } = params;
    const matchResultMap = /* @__PURE__ */ new Map();
    for (const selector of selectors) {
      const matchingElements = document.querySelectorAll(selector);
      if (!matchingElements.length) {
        logs.push(\`Selector '\${selector}' did not match any elements\`);
        continue;
      }
      if (matchingElements.length > 1) {
        let log = \`Selector '\${selector}' matched more than one element:
\`;
        for (const elm2 of matchingElements) {
          log += customWindow.serializeElementWithContext(elm2);
          log += "\\n=======================\\n";
        }
        logs.push(log);
        continue;
      }
      const elm = matchingElements[0];
      logs.push(
        \`Selector '\${selector}' matched exactly one element: \${customWindow.serializeElementWithContext(elm)}\`
      );
      const matchingSelectors = (_a = matchResultMap.get(elm)) != null ? _a : [];
      matchingSelectors.push(selector);
      matchResultMap.set(elm, matchingSelectors);
    }
    let bestElement = void 0;
    let bestElementSelectors = [];
    for (const [key, selectors2] of matchResultMap.entries()) {
      if (!key.getAttribute("data-momentic-id")) {
        logs.push(
          \`Element has no data-momentic-id, skipping: \${customWindow.serializeElementWithContext(key)}\`
        );
        continue;
      }
      if (selectors2.length > bestElementSelectors.length) {
        bestElement = key;
        bestElementSelectors = selectors2;
      } else if (bestElement && selectors2.length === bestElementSelectors.length) {
        logs.push(
          \`Two elements have the same CSS selector matches, refusing to choose either: \${customWindow.serializeElementWithContext(key)}
\${customWindow.serializeElementWithContext(bestElement)}\`
        );
        bestElement = void 0;
        bestElementSelectors = [];
      } else {
      }
    }
    if (!bestElement || bestElementSelectors.length === 0) {
      return { logs };
    } else if (bestElementSelectors.length < 2) {
      logs.push(\`Refusing to choose candidate with less than 2 matches\`);
      return { logs };
    }
    const serializedElement = customWindow.serializeElementWithContext(bestElement);
    logs.push(
      \`Evaluating best candidate (\${bestElementSelectors.length} matches): \${serializedElement}\`
    );
    const ratioThreshold = bestElementSelectors.length > 5 ? lDistThresholdLax : lDistThresholdStrict;
    const lRatio = customWindow.ldist(serializedElement, serializedNodeWithContext) / Math.max(serializedElement.length, serializedNodeWithContext.length);
    if (lRatio > ratioThreshold) {
      logs.push(\`Best candidate has failing l-dist ratio of \${lRatio}\`);
      return { logs };
    } else {
      logs.push(\`Best candidate has passing l-dist ratio of \${lRatio}\`);
      return {
        logs,
        result: {
          serializedElement,
          workingSelectors: bestElementSelectors,
          dataMomenticId: bestElement.getAttribute("data-momentic-id")
        }
      };
    }
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
  const vowelChars = /* @__PURE__ */ new Set(["a", "e", "i", "o", "u", "y"]);
  let maxVowelCount = 0;
  let currentVowelCount = 0;
  for (const char of text.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowelChars.has(char)) {
      currentVowelCount++;
      if (currentVowelCount > maxVowelCount) {
        maxVowelCount = currentVowelCount;
      }
    } else {
      currentVowelCount = 0;
    }
  }
  if (maxVowelCount > 4) {
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

// src/html/html-element-serialization.ts
function trimElementAttributes(element, removeInputValues = true) {
  var _a, _b, _c, _d, _e;
  const customWindow = window;
  const bannedClassSubstrings = (_b = (_a = customWindow.momenticConstants) == null ? void 0 : _a.bannedClassSubstrings) != null ? _b : [];
  if (!bannedClassSubstrings.length) {
    console.error(
      "[MOMENTIC] Missing global Momentic constants in processClassAttribute"
    );
  }
  const bannedAttrNames = (_d = (_c = customWindow.momenticConstants) == null ? void 0 : _c.bannedElementAttributes) != null ? _d : [];
  if (!bannedAttrNames.length) {
    console.error(
      "[MOMENTIC] Missing global Momentic constants in processClassAttribute"
    );
  }
  const maxAttrValLength = 100;
  const attrNames = element.getAttributeNames();
  for (const attr of attrNames) {
    let attrVal = element.getAttribute(attr);
    if (!attrVal) {
      continue;
    }
    if (bannedAttrNames.includes(attr)) {
      element.removeAttribute(attr);
      continue;
    }
    if (attrVal.length > maxAttrValLength) {
      attrVal = attrVal.slice(0, maxAttrValLength) + "...";
      element.setAttribute(attr, attrVal);
    }
    switch (attr) {
      case "class": {
        let classToKeep;
        for (const classVal of attrVal.split(" ")) {
          if (bannedClassSubstrings.some((bad) => classVal.includes(bad))) {
            continue;
          }
          if (checkIsNameAutogenerated(classVal)) {
            continue;
          }
          classToKeep = classVal;
          break;
        }
        if (classToKeep) {
          element.setAttribute("class", classToKeep);
        } else {
          element.removeAttribute("class");
        }
        break;
      }
      case "type":
      case "role": {
        if ((attrVal == null ? void 0 : attrVal.toLowerCase()) === element.tagName.toLowerCase()) {
          element.removeAttribute(attr);
        }
        break;
      }
      case "href": {
        if (attrVal.startsWith("data:") || attrVal.startsWith("/xjs")) {
          element.removeAttribute(attr);
        }
        break;
      }
      case "src": {
        if (attrVal.startsWith("data:")) {
          element.setAttribute(attr, \`\${attrVal.split(";")[0]};TRUNCATED\`);
        }
        break;
      }
      case "value": {
        if (removeInputValues && (element.getAttribute("type") === "text" || !element.getAttribute("type"))) {
          element.removeAttribute(attr);
          break;
        }
      }
      default: {
        if ([/data-.*/, /aria-.*/].some((re) => attr.match(re))) {
          continue;
        }
        if (!((_e = customWindow.momenticConstants) == null ? void 0 : _e.relevantElementAttributes.includes(
          attr
        ))) {
          element.removeAttribute(attr);
        }
      }
    }
  }
}
function serializeSelfClosingElement(element) {
  const tagName = element.tagName.toLowerCase();
  const attributes = Array.from(element.attributes).map((attr) => \`\${attr.name}="\${attr.value}"\`).join(" ");
  const selfClosingTag = \`<\${tagName} \${attributes} />\`;
  return selfClosingTag;
}
function serializeNodeSingleChildLayer(node, includeChildren) {
  var _a, _b, _c;
  const maxLineLength = 500;
  const customWindow = window;
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || "";
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }
  const elementNode = node.cloneNode(true);
  (_a = customWindow.trimElementAttributes) == null ? void 0 : _a.call(customWindow, elementNode, true);
  if (elementNode.children.length === 0 && !((_b = elementNode.textContent) == null ? void 0 : _b.trim())) {
    return serializeSelfClosingElement(elementNode);
  }
  let result = \`<\${elementNode.tagName.toLowerCase()}\`;
  const attrNames = elementNode.getAttributeNames();
  for (const attr of attrNames) {
    result += \` \${attr}="\${elementNode.getAttribute(attr)}"\`;
  }
  if (includeChildren) {
    const childrenString = Array.from(elementNode.childNodes).map((child) => \`  \${serializeNodeSingleChildLayer(child, false)}\`).join("\\n");
    if (childrenString.trim()) {
      result += \`>
\${childrenString}
</\${elementNode.tagName.toLowerCase()}>\`;
      return result;
    }
  } else if ((_c = elementNode.textContent) == null ? void 0 : _c.trim()) {
    let textContent = elementNode.textContent.trim();
    if (textContent.length > maxLineLength) {
      textContent = textContent.slice(0, maxLineLength) + "...";
    }
    result += \`>
  \${textContent}
</\${elementNode.tagName.toLowerCase()}>\`;
    return result;
  }
  return \`\${result} />\`;
}
function serializeElementWithContext(element) {
  let serializedElement = serializeNodeSingleChildLayer(element, true);
  if (element.previousElementSibling) {
    serializedElement = \`\${serializeNodeSingleChildLayer(element.previousElementSibling, false)}
\${serializedElement}\`;
  }
  if (element.nextElementSibling) {
    serializedElement = \`\${serializedElement}
\${serializeNodeSingleChildLayer(element.nextElementSibling, false)}\`;
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
  (_a = customWindow.trimElementAttributes) == null ? void 0 : _a.call(customWindow, ele, true);
  return ele.outerHTML;
}
function addElementSerializationScripts() {
  const customWindow = window;
  customWindow.trimElementAttributes = trimElementAttributes;
  customWindow.serializeElementWithContext = serializeElementWithContext;
  customWindow.serializeElementOnlyWithText = serializeElementOnlyWithText;
}

// src/html/html-page-serialization.ts
var MAX_TEXT_CONTENT_LINE_LENGTH = 3e3;
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
      "Momentic browser library error: Missing global momentic constants in shouldFilterNode"
    );
  }
  if (customWindow.momenticConstants.bannedElementTagNames.includes(
    node.tagName.toLowerCase()
  ))
    return true;
  return !isNodeInteresting(node) && node.childNodes.length === 0;
}
function processElementNode(node) {
  const customWindow = window;
  if (!customWindow.trimElementAttributes) {
    throw new Error(
      "Momentic browser library error: Missing 'trimElementAttributes' function in processElementNode"
    );
  }
  customWindow.trimElementAttributes(node, false);
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent && node.textContent.length > MAX_TEXT_CONTENT_LINE_LENGTH) {
      node.textContent = node.textContent.slice(
        0,
        MAX_TEXT_CONTENT_LINE_LENGTH
      );
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
  const node = processElementNode(currentNode);
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
    return {
      result: "",
      error: "This page contains no elements. Are you sure the page is loaded completely?"
    };
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
  let processedBody;
  try {
    processedBody = walkDOMTree(bodyCopy, globalData);
  } catch (err) {
    return {
      result: "",
      error: err.message
    };
  }
  if (!processedBody) {
    return {
      result: "",
      error: "This page contains no elements. Are you sure the page is loaded completely?"
    };
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
  return {
    result: processedBody.outerHTML
  };
}
function addHtmlTreeSerializationFunctions() {
  const customWindow = window;
  customWindow.getCondensedHtmlTree = getCondensedHtmlTree;
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
        return !["data-momentic-id", "aria-keyshortcuts"].includes(name);
      },
      className: (name) => {
        return name.length < 30 && name.split(" ").every((n) => !checkIsNameAutogenerated(n));
      },
      optimizedMinLength: 2,
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
var shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
function isElementImportant(element) {
  var _a;
  const anchoringElementTagNames = [
    "html",
    "body",
    "header",
    "select",
    "form",
    "nav",
    "footer",
    "aside",
    "main",
    "menu",
    "legend",
    "article",
    "iframe",
    "section",
    "h1",
    "h2",
    "h3",
    "button",
    "label",
    "a",
    "button",
    "summary",
    "details",
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
  const maxResultsToGenerate = 12;
  const maxResultsToReturn = 6;
  const maxSteps = 500;
  let steps = 0;
  while (queue.length > 0 && results.size < maxResultsToGenerate && steps < maxSteps) {
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
  const selectors = Array.from(results);
  shuffleArray(selectors);
  return selectors.slice(0, maxResultsToReturn);
}

// src/html/recording.ts
function areBoundingBoxesSimilar(originalNode, candidate) {
  const originalBox = originalNode.getBoundingClientRect();
  const candidateBox = candidate.getBoundingClientRect();
  const originalWidth = originalBox.width;
  const originalHeight = originalBox.height;
  const candidateWidth = candidateBox.width;
  const candidateHeight = candidateBox.height;
  const isAreaSimilar = Math.abs(originalWidth - candidateWidth) < 200 && Math.abs(originalHeight - candidateHeight) < 200;
  const isIntersecting = originalBox.left < candidateBox.right && originalBox.right > candidateBox.left && originalBox.top < candidateBox.bottom && originalBox.bottom > candidateBox.top;
  return isAreaSimilar && isIntersecting;
}
function addRecordingTargetResolver() {
  const customWindow = window;
  if (customWindow.resolveRecordingTarget) {
    return;
  }
  customWindow.resolveRecordingTarget = (element) => {
    var _a, _b;
    const generateResult = (momenticId, reason) => {
      if (!customWindow.generateHtmlCacheAttributes) {
        return {
          error: "Missing generateHtmlCacheAttributes function",
          warnings: []
        };
      }
      const dataMomenticId = parseInt(momenticId);
      const { attributes, error, warnings } = customWindow.generateHtmlCacheAttributes(dataMomenticId);
      return {
        target: {
          dataMomenticId,
          htmlAttributes: attributes,
          metadata: { reason }
        },
        error,
        warnings
      };
    };
    let originalMomenticId = element.getAttribute("data-momentic-id");
    if (!originalMomenticId) {
      originalMomenticId = \`999\${Math.floor(Math.random() * 100)}\`;
      element.setAttribute("data-momentic-id", originalMomenticId);
      return generateResult(
        originalMomenticId,
        \`Forced to regenerate momentic id on element (chose \${originalMomenticId})\`
      );
    }
    if (!customWindow.momenticIdsInA11yTree) {
      return generateResult(
        originalMomenticId,
        "No additional information on relevant accessibility nodes"
      );
    }
    if (customWindow.momenticIdsInA11yTree.has(parseInt(originalMomenticId))) {
      return generateResult(originalMomenticId);
    }
    let parent = element.parentElement;
    while (parent) {
      const parentMomenticId = parent.getAttribute("data-momentic-id");
      if (parentMomenticId && customWindow.momenticIdsInA11yTree.has(parseInt(parentMomenticId)) && areBoundingBoxesSimilar(element, parent)) {
        return generateResult(
          parentMomenticId,
          "Redirected recording click to a parent with a similar bounding box"
        );
      }
      parent = parent.parentElement;
    }
    for (const child of (_b = (_a = element.parentElement) == null ? void 0 : _a.children) != null ? _b : []) {
      const childMomenticId = child.getAttribute("data-momentic-id");
      if (childMomenticId && customWindow.momenticIdsInA11yTree.has(parseInt(childMomenticId)) && areBoundingBoxesSimilar(element, child)) {
        return generateResult(
          childMomenticId,
          "Redirected recording click to a sibling with a similar bounding box"
        );
      }
    }
    return generateResult(
      originalMomenticId,
      "No relevant intersecting accessible nodes"
    );
  };
}
function addPressListener() {
  const customWindow = window;
  if (customWindow.pressListener) {
    return;
  }
  customWindow.pressListener = (event) => {
    var _a, _b;
    if (!customWindow.captureKeystroke) {
      return;
    }
    console.log("[MOMENTIC] Window press listener fired");
    customWindow.captureKeystroke({
      key: event.key,
      url: window.location.href,
      dataMomenticId: (_b = (_a = event.target) == null ? void 0 : _a.getAttribute(
        "data-momentic-id"
      )) != null ? _b : void 0
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
    if (!customWindow2.captureElementEvent || !customWindow2.generateHtmlCacheAttributes || !customWindow2.resolveRecordingTarget) {
      return;
    }
    const element = event.target;
    console.debug("[MOMENTIC] Window click listener fired", element);
    if (event.button !== 0) {
      console.debug("[MOMENTIC] Ignoring click event with non-primary button");
      return;
    }
    if (element.tagName.toLowerCase() === "select") {
      console.debug("[MOMENTIC] Ignoring click on select element");
      return;
    }
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === "select") {
        console.debug("[MOMENTIC] Ignoring click on child of select element");
        return;
      }
      parent = parent.parentElement;
    }
    if (event.detail === 0) {
      console.log(
        "[MOMENTIC] Ignoring click event likely triggered by Enter key"
      );
      return;
    }
    const recordingTarget = customWindow2.resolveRecordingTarget(element);
    customWindow2.captureElementEvent(__spreadValues({
      type: "CLICK"
    }, recordingTarget));
  };
  document.addEventListener("mousedown", customWindow.clickListener, {
    // This flag allows us to process before stuff like navigation actually occurs
    capture: true
  });
}
function addSelectListener() {
  const customWindow = window;
  if (customWindow.selectListener) {
    return;
  }
  customWindow.selectListener = (event) => {
    const customWindow2 = window;
    if (!customWindow2.captureElementEvent) {
      return;
    }
    if (!customWindow2.generateHtmlCacheAttributes) {
      console.error("[MOMENTIC] Missing generateHtmlCacheAttributes function");
      return;
    }
    console.debug("[MOMENTIC] Window select listener fired");
  };
}
function addRecordingListeners() {
  addRecordingTargetResolver();
  addClickListener();
  addSelectListener();
  addPressListener();
}

// src/html/registration.ts
function registerAllMomenticListeners() {
  addMedvCssGenerator();
  addMomenticConstantsToWindow();
  addFindElementInBodyOrShadowDomScript();
  addBrowserLdistScript();
  addMomenticSelectorGeneratorLib();
  addTrackCursorScript();
  addCssGenerationScript();
  addEvaluateCssSelectorsScript();
  addHtmlTreeSerializationFunctions();
  addElementSerializationScripts();
  addGenerateHtmlCacheAttributesScript();
  addRecordingListeners();
}

// src/html/index.ts
registerAllMomenticListeners();
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as Ii}from"crypto";import Ni from"dedent";import{distance as Mi}from"fastest-levenshtein";import{existsSync as Li,readFileSync as Oi,rmSync as So}from"fs";import _i from"js-beautify";import{cloneDeep as Pi}from"lodash-es";import{homedir as Di}from"os";import Zt from"p-timeout";import{basename as wo,join as To}from"path";import{chromium as ki,devices as zi}from"playwright";import{errors as Fi}from"playwright";import{addExtra as Ui}from"playwright-extra";import Bi from"puppeteer-extra-plugin-recaptcha";import Wi from"sharp";import Is from"string-argv";import{v4 as Ms}from"uuid";import{z as D}from"zod";import{z as Le}from"zod";var me=(a=>(a.AI_PROVIDER="AIProviderError",a.ACTION_FAILURE="ActionFailureError",a.ASSERTION_FAILURE="AssertionFailureError",a.CONFIG_ERROR="UserConfigurationError",a.JOB_TIMEOUT="JobTimeoutError",a.WEB_AGENT_PLATFORM="InternalWebAgentError",a.UNKNOWN_PLATFORM="InternalPlatformError",a))(me||{});var zt=Le.object({reason:Le.nativeEnum(me),summary:Le.string()}),hn=Le.object({errorMessage:Le.string(),errorStack:Le.string().optional(),classification:zt.optional()});var W=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let i of Object.values(me))if(t.startsWith(i)){r=!0,e=i;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}},Ce=class extends Error{decisions;constructor(e,t,n={}){super(e,n),this.decisions=t,this.name="NoElementsFoundError"}toString(){return`${this.message}
Decisions:
${this.decisions.map(e=>e.toString()).join(`
`)}`}};var Ft=(g=>(g.COMMAND="command",g.ASSERTION="assertion",g.LOCATOR="locator",g.VISUAL_LOCATOR="visual-locator",g.VISUAL_ASSERTION="visual-assertion",g.REVERSE_MAPPER="reverse-mapper",g.TEXT_EXTRACTION="text-extraction",g.GOAL_SPLITTER="goal-splitter",g.TEST_GEN_PLANNING="test-gen-planning",g.TEST_GEN_REVISING="test-gen-revising",g.TEST_GEN_EVAL="test-gen-evaluation",g.TEST_GEN_TASK_RABBIT="test-gen-task-rabbit",g.RESULT_CLASSIFICATION="result-classification",g.KEYWORD_EXTRACTOR="keyword-extractor",g))(Ft||{});var Ps=D.object({command:D.string(),thoughts:D.string()}),Ds=D.string().pipe(D.coerce.number());var gn=D.object({phrase:D.string()}),Ut=D.object({result:D.union([D.literal("NOT_FOUND"),D.string(),D.number(),D.array(D.unknown()),D.record(D.unknown(),D.unknown())])}),fn=D.object({thoughts:D.string(),id:D.number().int()});import{z as Bt}from"zod";var it=Bt.object({width:Bt.number().min(200).max(1e4),height:Bt.number().min(200).max(1e4)}),yn={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},Fs=Object.keys(yn);var je=yn["Desktop Large"];var js=new Set(Object.values(fe));var gr={AI_ACTION:"AI action",RESOLVED_MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",AUTH_LOAD:"Load auth state",AUTH_SAVE:"Save auth state",ELEMENT_CHECK:"Element check",PAGE_CHECK:"Page check",WAIT_FOR_URL:"Wait for URL",SUCCESS:"Done"},Gs={AI_ACTION:"Ask AI to plan and execute something on the page.",RESOLVED_MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page, retrying until a configurable timeout.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from an HTML Select <select> element based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",AUTH_LOAD:"Load auth state (cookies, local storage) from the JavaScript object format returned by 'Save auth state' and then refresh the page.",AUTH_SAVE:"Save auth state (cookies, local storage) into a JavaScript object format usable by 'Load auth state'.",ELEMENT_CHECK:"Assert on an element's state using pre-built conditions, including content, visibility, attribute value checks.",PAGE_CHECK:"Assert on the active page's state using pre-built conditions, including URL and content checks.",WAIT_FOR_URL:"Wait for the active page's URL to match a specific URL or glob pattern. If a new tab is opened, this command will wait for the new tab's URL to match instead.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import{z as I}from"zod";var qs=I.object({body:I.string(),to:I.string(),from:I.string()}),Ks=I.object({from:I.string().optional(),to:I.string().optional(),timeout:I.number().optional(),beforeDate:I.string().pipe(I.coerce.date()).or(I.date()).optional(),afterDate:I.string().pipe(I.coerce.date()).or(I.date()).optional()}),Ys=I.object({inbox:I.string(),afterDate:I.string().pipe(I.coerce.date()).or(I.date()).optional(),timeout:I.number().optional(),trimWhitespace:I.boolean().optional()});var Xs=I.object({result:I.unknown(),variableUpdates:I.record(I.string(),I.unknown()).optional(),error:I.string().optional(),success:I.boolean()});import*as T from"zod";import{cloneDeep as sl}from"lodash-es";import*as O from"zod";import{z as Oe}from"zod";var bn="BASE_URL";var Zs={[bn]:"https://www.google.com"},Sn=Oe.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),Ge=Oe.object({name:Oe.string(),variables:Oe.record(Oe.string().describe("variable name"),Oe.string().describe("variable value"))});import*as ve from"zod";var wn=ve.object({type:ve.nativeEnum(ne),generatedStep:rt.optional(),serializedCommand:ve.string().optional(),elementInteracted:ve.string().optional()});var ye=O.object({goal:O.string(),url:O.string(),browserState:O.string(),history:O.string(),numPrevious:O.number(),lastCommand:wn.or(O.null()),returnSchema:O.string().optional()}),Wt=O.object({env:O.record(O.unknown()),results:O.array(O.unknown()),inputs:O.record(O.unknown()).optional()});var dl=Object.getPrototypeOf(async function(){}).constructor;var Tn=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(Tn||{}),En=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(En||{}),fr=T.object({beforeUrl:T.string(),beforeScreenshot:T.string().optional(),afterUrl:T.string().optional(),afterScreenshot:T.string().optional(),startedAt:T.coerce.date(),finishedAt:T.coerce.date(),viewport:T.object({height:T.number(),width:T.number()}),status:T.nativeEnum(En),message:T.string().optional(),elementInteracted:T.string().optional()}),xe=T.object({startedAt:T.coerce.date(),finishedAt:T.coerce.date(),status:T.nativeEnum(Tn),message:T.string().optional(),data:T.unknown().optional(),beforeTestContext:Wt.optional(),afterTestContext:Wt.optional(),failureReason:T.nativeEnum(me).optional(),details:T.unknown().describe("Parse using StepExecutionLogSchema.array() to get type safety. We don't explicitly type it because it's non-critical information.")}),Ht=xe.merge(le).extend({results:fr.array()}),yr=xe.merge(Ne).extend({results:T.lazy(()=>Ht.array())}),br=xe.merge(Me).extend({moduleName:T.string().optional(),results:T.lazy(()=>Ae.array())}),Sr=xe.merge(Ue).extend({assertion:Ht.optional(),results:T.lazy(()=>Ae.array()).describe("results for the block actually executed")}),wr=xe.merge(Be).extend({results:T.lazy(()=>Ae.array())}),Tr=xe.merge(We).extend({results:T.lazy(()=>Ae.array())}),Ae=T.discriminatedUnion("type",[yr,Ht,br,Sr,wr,Tr]),Tl=xe.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0}),El=T.object({results:Ae.array(),errorMessage:T.string(),errorStack:T.string().optional()});import{parseString as Er,splitCookiesString as Cr}from"set-cookie-parser";import{z as k}from"zod";var Cn=k.object({name:k.string(),value:k.string(),url:k.string().optional(),domain:k.string().optional(),path:k.string().optional(),expires:k.number().default(Date.now()/1e3+60*60*24*365),httpOnly:k.boolean().optional(),secure:k.boolean().default(!0),sameSite:k.union([k.literal("Strict"),k.literal("Lax"),k.literal("None")]).default("None")});function vn(s){let e=[],t=Cr(s);for(let n of t){let o=Er(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let d=o.sameSite.trim().toLowerCase();if(d==="strict")r="Strict";else if(d==="lax")r="Lax";else if(d==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${d}`)}o.httpOnly===void 0&&(o.httpOnly=!1),!o.path&&o.domain&&(o.path="/");let i=Cn.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(i);let a=[i.name,...Object.keys(i)].map(d=>d.toLowerCase()),l=n.match(/\b(\w+)=([^;]*)/g);if(l)for(let d of l){let[h,u]=d.split("=");if(!h||!u)throw new Error(`Invalid key-value pair in cookie: ${d}`);a.includes(h.toLowerCase())||e.push({...i,name:h,value:u})}}return e}var vr=k.object({origin:k.string(),localStorage:k.array(k.object({name:k.string(),value:k.string()}))}),Al=k.object({cookies:Cn.array(),origins:vr.array()});import{z as ue}from"zod";var Nl=ue.object({x:ue.number(),y:ue.number(),correlation:ue.number()}),Ml=ue.object({searchImageBase64String:ue.string(),pageImageBase64String:ue.string(),id:ue.string().uuid(),timeoutMs:ue.number().max(1e4).min(0).optional()});import{z as X}from"zod";var xr=X.object({orgId:X.string(),cacheKeys:X.string().array()}),_l=X.object({keyParams:xr,clientMetadata:X.string(),lockAcquisitionTimeoutMs:X.number().optional()}),Pl=X.object({acquired:X.boolean(),acquiredByMetadata:X.string(),keyPrefix:X.string()}),Dl=X.object({keyPrefix:X.string(),result:X.string(),ttlMs:X.number()});var kl=5*60*1e3;import{z as re}from"zod";import{z}from"zod";import{z as R}from"zod";var Ar="modules",Rr="fixtures",Ir="environments",Nr="chromium",xn=[Ar,Rr,Ir,Nr];import{isValidCron as Mr}from"cron-validator";import{z as U}from"zod";var An=1e4,Rn=6e4,Lr=U.object({pageLoadTimeoutMs:U.number().optional().refine(s=>s===void 0||s<=Rn&&s>=-1,{message:`Page load timeout must be between 0 and ${Rn/1e3} seconds`}),smartWaitingTimeoutMs:U.number().optional().refine(s=>s===void 0||s<=An&&s>=-1,{message:`Smart waiting timeout must be between 0 and ${An/1e3} seconds`}),extraHeaders:U.record(U.string(),U.string()).optional().describe("HTTP headers to be sent on every request"),userAgent:U.string().optional()}),Or=U.object({disableAICaching:U.boolean().default(!1),viewport:it.optional()}),$e=Or.merge(Lr),In=U.object({cron:U.string().refine(s=>Mr(s),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:U.boolean().default(!1),env:U.string().optional(),timeZone:U.string().default("America/Los_Angeles"),jobKey:U.string().optional()}),Nn=U.object({onSuccess:U.boolean().default(!1),onFailure:U.boolean().default(!0)});var _r=R.string().min(1).max(255).superRefine((s,e)=>{try{kr(s)}catch(t){return e.addIssue({code:R.ZodIssueCode.custom,message:t.message,fatal:!0}),R.NEVER}}),Pr=R.object({name:R.string(),default:R.boolean().optional(),defaultOnLocal:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:Sn.array().optional()}),be=R.object({id:R.string(),name:_r,baseUrl:R.preprocess(s=>s===null?"":s,R.union([R.string().url(),R.literal("")])).optional(),schemaVersion:R.string(),advanced:$e,retries:R.number(),envs:R.array(Pr).optional()}),Yl=be.pick({name:!0,baseUrl:!0,retries:!0}).extend({advanced:$e}),Mn=R.object({createdAt:R.coerce.date(),updatedAt:R.coerce.date(),schedule:In,notification:Nn,createdBy:R.string(),organizationId:R.string()}),Xl=be.merge(Mn),Jl=be.merge(Mn).merge(R.object({steps:R.array(Z)})),jt=be.merge(R.object({steps:R.array(Z)})),Ql=be.extend({steps:R.record(R.string(),R.unknown()).array()}),Dr=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function kr(s){if(s=s.toLowerCase().trim(),s.length===0||s.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(s))throw new Error('Name contains one of the following invalid characters: <>:"/\\|?*');if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(s))throw new Error(`"${s}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(s)||/^\s|\s$/.test(s))throw new Error("Name cannot start or end with a space or dot.");if(s.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(s==="none")throw new Error("Name cannot be 'none'.");if(xn.includes(s))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(s.match(Dr))throw new Error("Name cannot be a UUID. Please choose a different name.")}var ic=we.extend({fileType:z.literal("momentic/module"),schemaVersion:z.string(),steps:z.record(z.string(),z.unknown()).array()}),ac=we.extend({steps:z.array(z.record(z.string(),z.unknown())),schemaVersion:z.string()}),sc=be.extend({steps:z.array(z.record(z.string(),z.unknown()))}),lc=z.object({test:z.string().describe("YAML for the test, including metadata and steps"),modules:z.record(z.string(),z.string()).describe("Map of module name to YAML for the module")});var zr="1.0.0",Ln=re.object({run:re.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:re.boolean().optional().describe("Defaults to true")}),pc=re.object({type:re.literal("momentic/fixture"),schemaVersion:re.string(),name:re.string(),description:re.string().optional(),setup:re.object({steps:Ln.array(),timeout:re.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:re.object({steps:Ln.array(),timeout:re.number().optional().describe("Timeout for all steps in seconds")}).optional()}),hc={type:"momentic/fixture",schemaVersion:zr,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as Fr}from"zod";var yc=Fr.string().array();import{z as M}from"zod";var Ac=M.array(M.object({id:M.string(),name:M.string(),fullFilePath:M.string(),testPath:M.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:M.string(),lastModified:M.coerce.date(),createdAt:M.coerce.date()}));var Rc=M.object({steps:Z.array()});var Ic=M.object({name:M.string(),baseUrl:M.string().url().optional(),environment:M.string().optional(),viewport:it.optional()}),Nc=jt.merge(M.object({testPath:M.string()})),Mc=M.object({name:M.string(),steps:M.lazy(()=>Z.array())});var Lc=Dt.array(),Oc=M.array(M.object({name:M.string(),moduleId:M.string().uuid(),numSteps:M.number()})),_c=M.array(Ge),Pc=M.object({defaultEnv:M.string().optional().describe("name of the default env, or undefined to unset")});import*as A from"zod";var Fc=A.object({thoughts:A.string().optional().describe("only provided if a description was provided"),target:Se.optional().describe("only provided if a description was provided"),pageState:A.string().optional().describe("serialized a11y tree, only provided if a description was provided"),options:A.array(A.string()).optional().describe("provided for <select> elements only"),screenshot:A.object({data:A.string(),height:A.number().int(),width:A.number().int()}).optional().describe("only provided if returnScreenshot is true")});var _e=A.object({matched:A.boolean(),reason:A.string().optional().describe("Human understandable description")}),Ur=_e.extend({type:A.literal("A11Y_ID")}),Br=_e.extend({type:A.literal("USER_SELECTOR")}),Wr=_e.extend({type:A.literal("CSS_SELECTOR"),selectors:A.string().array()}),Hr=_e.extend({type:A.literal("A11Y_DISTANCE"),distance:A.number().optional(),closestElement:A.string().optional(),savedElement:A.string().optional()}),jr=_e.extend({type:A.literal("HTML_DISTANCE"),distance:A.number().optional(),closestElement:A.string().optional(),savedElement:A.string().optional()}),Gr=_e.extend({type:A.literal("TEMPLATE_MATCHING"),elementImageUrl:A.string().url()}),On=A.discriminatedUnion("type",[Ur,Br,Wr,Hr,jr,Gr]);var $r={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},Vr={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},Gt=class s{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=$r[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=Vr[e],i=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&i.push("\x1B[39m"),i.push(...t),console.log(...i),o&&!Array.isArray(o))for(let[a,l]of Object.entries(o)){let d=l;l instanceof Error?d=l.message:typeof l=="object"&&(d=JSON.stringify(l,void 0,2),d=d.split(`
`).map((h,u)=>u>0?`  ${h}`:h).join(`
`)),console.log(e===0?`${r}  ${a}:`:`  ${a}:`,d)}else if(o)for(let a of o){let l=a;typeof a=="object"&&(l=JSON.stringify(a,void 0,2),l=l.split(`
`).map((d,h)=>h>0?`  ${d}`:d).join(`
`)),console.log(e===0?`${r}  `:"  ",l)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new s(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Bc=new Gt(1,{}),$t={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>$t,flush:()=>{},bindings:()=>({})},at={},Pe=({logger:s,logKey:e,maxCount:t,intervalMs:n},o,r,...i)=>{let a=at[e];a?clearTimeout(a.timer):(a={count:0,totalCount:0},at[e]=a),a.totalCount++,a.count<t&&(a.count++,s.debug(o,r,...i)),a.timer=setTimeout(()=>{let l=at[e];l?.totalCount!==l?.count&&s.debug({logKey:e,totalCount:l?.totalCount,count:l?.count},`Debug logs were rate-limited for ${e}`),delete at[e]},n)};import{z as G}from"zod";var qr=G.object({id:G.string(),createdAt:G.coerce.date(),createdBy:G.string(),organizationId:G.string(),name:G.string(),schemaVersion:G.string().describe("Schema version for steps"),parameters:G.string().array().nullish().describe("Parameter list"),defaultParameters:G.record(G.string(),G.string()).nullish(),defaultCacheKey:G.string().nullish(),defaultCacheTtl:G.number().nullish(),numSteps:G.number()}),Kc=qr.omit({numSteps:!0}).extend({steps:G.lazy(()=>Te.array())}),Yc=5*60*1e3;import*as p from"zod";import{z as x}from"zod";var Ve={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},st=(a=>(a.PENDING="PENDING",a.RUNNING="RUNNING",a.PASSED="PASSED",a.FAILED="FAILED",a.CANCELLED="CANCELLED",a.RETRYING="RETRYING",a.WAITING_FOR_USER="WAITING_FOR_USER",a))(st||{}),Kr={PASSED:"PASSED",FAILED:"FAILED"},pe=x.string().pipe(x.coerce.date()).or(x.date()),lt=x.object({id:x.string(),runKey:x.string(),organizationId:x.string(),createdAt:pe,createdBy:x.string(),scheduledAt:pe.or(x.null()),startedAt:pe.or(x.null()),updatedAt:pe.nullish(),finishedAt:pe.or(x.null()),status:x.unknown().transform(s=>x.nativeEnum(st).parse(s)),expectedStatus:x.nativeEnum(Kr).or(x.null()),trigger:x.nativeEnum(Ve),attempts:x.number(),failureReason:x.nativeEnum(me).nullish(),failureDetails:hn.nullish(),testId:x.string().or(x.null()),testName:x.string().or(x.null()).optional(),test:x.object({name:x.string(),id:x.string()}).or(x.null()),suiteId:x.string().or(x.null()).optional()}),od=lt.omit({failureReason:!0,failureDetails:!0}),Vt=lt.merge(x.object({results:Ae.array(),test:x.object({name:x.string(),id:x.string(),baseUrl:x.string(),advanced:$e.optional()}).or(x.null())})),rd=x.object({id:x.string(),name:x.string()});var Re=p.object({disableCache:p.boolean()}),hd=p.object({error:p.boolean(),reason:p.string(),message:p.string()}),gd=ye.merge(Re),_n=Lt,fd=ye.merge(Re).merge(p.object({screenshot:p.string().optional()})),Pn=on,yd=ye.pick({browserState:!0,goal:!0}).merge(Re).merge(p.object({screenshot:p.string().optional()})),bd=ye.pick({goal:!0}).merge(Re).merge(p.object({screenshot:p.string().describe("base64 encoded image"),hintActivatedScreenshot:p.string().describe("base64 encoded image")})),Dn=fn,Sd=ye.pick({goal:!0,url:!0}).merge(Re),kn=p.string().array(),wd=ye.pick({goal:!0,browserState:!0}).merge(Re),zn=gn,Td=ye.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(Re);var Ed=p.object({testPaths:p.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:p.string().optional(),all:p.boolean().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),Cd=p.object({message:p.string(),queuedTests:p.object({name:p.string(),id:p.string()}).array(),runIds:p.string().uuid().array()});var vd=p.string().array(),xd=p.union([p.object({paths:p.string().array().describe("run specific test paths (e.g. todo-test)"),all:p.boolean().describe("run all tests").optional()}),p.object({path:p.string().describe("deprecated; present for backcompat")})]),Ad=p.object({tests:p.record(p.string().describe("Test name"),p.string().describe("Test YAML")),modules:p.record(p.string().describe("Module name"),p.string().describe("Module YAML"))}),Yr=p.object({test:p.string().describe("test YAML"),modules:p.record(p.string().describe("moduleId"),p.string().describe("module YAML"))}),Rd=Yr.array(),Id=p.object({testId:p.string(),schemaVersion:p.string(),steps:p.array(p.record(p.unknown()))}),Nd=p.object({entries:p.array(kt),testId:p.string()}),Md=p.object({steps:p.array(p.record(p.unknown())),testId:p.string(),schemaVersion:p.string(),organizationId:p.string()});var Ld=p.object({testId:p.string(),testName:p.string(),trigger:p.nativeEnum(Ve)});var Xr=Vt.pick({id:!0,status:!0,testName:!0,testId:!0,test:!0,failureReason:!0,failureDetails:!0}),Od=Xr.array(),_d=Vt.pick({startedAt:!0,finishedAt:!0,results:!0,status:!0,failureDetails:!0,failureReason:!0}).partial(),Pd=p.object({screenshot:p.string()}),Dd=p.object({key:p.string()}),kd=p.object({orgId:p.string()}),zd=p.array(Ge),Fd=p.array(Ge),Ud=p.record(p.string(),p.union([p.string(),p.boolean()])),Bd=p.object({paths:p.string().array(),env:p.string().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),Wd=p.object({suiteRunIds:p.string().array()});import{z as $}from"zod";var Jr=$.object({content:$.string(),ids:$.string().array(),tokenLength:$.number()}),Qr=$.object({chunks:Jr.array(),numRecs:$.number()}),Gd=$.object({ids:$.string().array(),score:$.number(),tokenLength:$.number()}),$d=$.object({description:$.string(),tokenLimit:$.number()}).merge(Qr),Fn=$.object({ids:$.number().array()});import{z as H}from"zod";var Zr=H.object({type:H.literal("TARGETING"),name:H.string().optional().describe("Target name for steps with multiple targets"),elementLocationDecisions:On.array(),pageState:H.string().optional(),targetSource:H.nativeEnum(Fe).optional()}),ei=H.object({type:H.literal("AI_LOCATION"),matched:H.boolean(),pageState:H.string().optional(),ragUsed:H.boolean().optional(),thoughts:H.string().optional()}),ti=H.object({type:H.literal("ASSERTION"),relevantElementsSerialized:H.string().array().optional(),pageState:H.string().optional(),ragUsed:H.boolean().optional()}),Xd=H.discriminatedUnion("type",[Zr,ei,ti]);import{z as ie}from"zod";var tm=ie.object({id:ie.string().uuid(),orgId:ie.string(),createdAt:pe,startedAt:pe.or(ie.null()),finishedAt:pe.or(ie.null()),status:ie.string().transform(s=>ie.nativeEnum(st).parse(s)),trigger:ie.nativeEnum(Ve),suite:ie.object({id:ie.string(),name:ie.string()}),runs:lt.array()});import{validator as sm}from"@exodus/schemasafe";var Un=s=>{s.extraHeaders&&(s.extraHeaders=Object.fromEntries(Object.entries(s.extraHeaders).filter(([e,t])=>e.trim()&&t.trim())))};import{z as De}from"zod";var Sm=De.object({goal:De.string(),completionType:De.nativeEnum(Ft)}),Bn=De.object({keywords:De.array(De.string())});import{v4 as Hi}from"uuid";var Wn=s=>!s.toLowerCase().startsWith("http");function qe(s,e){try{return!!new URL(s).origin.trim()}catch(t){return e?.error({url:s,err:t},"Invalid URL in check"),!1}}var Hn={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts","data-ved"],relevantElementAttributes:["name","id","value","type","class","height","width","target","title","href","src","alt","role","headers","scope","checked","required","action","min","max","minlength","maxlength","multiple","pattern","placeholder","accept","data-value","data-testid","data-cy","data-test-id","data-test","data-role","data-type","data-action","data-aria-hidden","data-hidden","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function jn(s){if(s[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(s.length>10){let u=Math.floor(s.length/8);if((s.match(/[-_:/ ]/g)??[]).length<u)return!0}if((s.match(/[^0-9a-zA-Z.]/g)??[]).length/s.length>.2)return!0;let t=(s.match(/[0-9]/g)??[]).length;if(t/s.length>.3)return!0;let n=(s.toLowerCase().match(/[aeiou]/gi)??[]).length;if((s.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=new Set(["a","e","i","o","u","y"]),i=0,a=0;for(let u of s.toLowerCase())u>="a"&&u<="z"&&!r.has(u)?(a++,a>i&&(i=a)):a=0;if(i>4)return!0;let l=(s.match(/[A-Z]/g)??[]).length,d=(s.match(/[a-z]/g)??[]).length,h=Math.ceil(s.length*.3);return!!(d&&t&&Math.abs(d-t)<h||d&&l&&Math.abs(d-l)<h)}import{randomUUID as qn}from"crypto";import{distance as Kt}from"fastest-levenshtein";import{cloneDeep as Kn}from"lodash-es";import ni from"p-timeout";var Gn=new Set(["about:blank","chrome-error://chromewebdata/"]),$n=3,ae="data-momentic-id",Vn=500,qt=["button","image","generic","graphics-symbol","tab","link","menuitem","group"];var oi=["focusable","keyshortcuts","controls","live","relevant","orientation"],ri=["selected","readonly","modal","required","invalid"],ii=["id","name","role","content"],ai=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","image","svgroot","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],si=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree","activeAriaModalDialog"],li=["menulistpopup","statictext","inlinetextbox"],ci=80,dt=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],di=["cite"],mi={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"],separator:["hr"]},Yn={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},Yt=class s{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;domNode;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){this.domNode=e.domNode,this.tagName=e.domNode.tagName||void 0;let t=e.domNode.attributes.id;this.name=this.name||e.domNode.attributes.name||(t&&!jn(t)?t:""),this.role=this.role||(e.domNode.attributes.role??""),fi(this.properties,e.domNode)}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return ai.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=Yn){let t=Object.assign({},Yn,e),{indentLevel:n,noChildren:o,noProperties:r,noID:i,noContent:a}=t,l=Kn(this.properties),d=" ".repeat(n),h=this.role||"",u=this.tagName??"unknown",m=this.name;h==="heading"&&m==="heading"&&(m="");let f=dt.includes(this.role)||di.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${d}${m}
`;let g=`${d}<${u}`;if(!i&&!f&&(g+=` id="${this.id}"`),h&&h!=="generic"&&h!==u&&!(mi[h]??[]).includes(u)&&(g+=` role=${JSON.stringify(h)}`),m&&(g+=` name=${JSON.stringify(m)}`),this.content&&!a&&(g+=` content=${JSON.stringify(this.content)}`),Object.keys(l).length>0&&!r&&Object.entries(l).forEach(([b,w])=>{if(!oi.includes(b)){if(ri.includes(b)&&(!w||w==="false"))return;if(b==="value"&&a&&(l.type==="text"||this.role==="textbox"))return;if(b==="type"&&w===u)return;typeof w=="string"?g+=` ${b}="${w}"`:typeof w=="boolean"?w?g+=` ${b}`:g+=` ${b}={false}`:typeof w<"u"&&(g+=` ${b}={${JSON.stringify(w)}}`)}}),u==="::before"||u==="::after"){let b="";for(let w of this.children)b+=w.serialize({...e,indentLevel:n,neighbors:0});return b}let y=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||y)g+=` />
`;else{let b="";for(let S of this.children)b+=S.serialize({...e,indentLevel:n+2,neighbors:0});let w=b.trim();w.length<=ci&&!w.includes(`
`)?g+=`>${w}</${u}>
`:g+=`>
${b}${d}</${u}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let b=this.parent.children.findIndex(N=>N.id===this.id),w=b>0?this.parent.children[b-1]?.serialize({...e,neighbors:0}):"",S=b<this.parent.children.length-1?this.parent.children[b+1]?.serialize({...e,neighbors:0}):"";return`${w||""}
${g}
${S||""}`}return g}shallowClone(){let e=new s({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=Kn(this.properties),e}},Xt=class s{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,i=!1){let a=e.has(r.id)||r.id===t?.id,l=r.shallowClone(),d=r.children,h=!1,u=[];for(let m of d){let f=n(m,a||h);f&&(u.push(f),f.parent=l,h=!0)}if(l.children=u,a||h)return l;if(dt.includes(r.role)&&i)return l}let o=n(t);return new s(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function ui(s){return s.name?.value?`"${s.name.value}"`:s.role?.value&&s.role.value!=="none"&&s.role.value!=="generic"?`"${s.role.value}"`:`"${s.nodeId}"`}function pi(s,e,t,n){return s.bounds.x===null||s.bounds.y===null||s.bounds.height===null||s.bounds.width===null||s.bounds.width===0||s.bounds.height===0?!0:s.bounds.x+s.bounds.width<e.leftBound||s.bounds.x>e.rightBound?(Pe({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):s.bounds.y+s.bounds.height<e.upperBound||s.bounds.y>e.lowerBound?(Pe({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):s.computedStyles.display==="none"?(t.debug({domNode:s},"Filtering out node since it has display none"),!1):!0}async function Xn({node:s,parent:e,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l}){if(!e&&s.parentId)throw new Error(`Got no parent for accessibility node ${s.nodeId}: ${JSON.stringify(s)}`);let d=(S,N={})=>{},h=s.backendDOMNodeId,u=li.includes((s.role?.value).toLowerCase());if(!u&&h===void 0)return d("Filtering out node since it doesn't exist in the DOM"),[];let m=h?t.backendIdToNode[h]:void 0;if(!u&&!m)try{let S=await ni(o.send("DOM.describeNode",{backendNodeId:h}),{milliseconds:500,fallback:()=>{r.debug("Timeout getting node from CDP while processing a11y tree")}});if(S&&S.node.nodeName.toLowerCase()==="slot"&&S.node.distributedNodes?.length)r.debug({redirectedDomNode:m,parentAXNode:e?.getNodeOnlySerializedForm(),originalAXNode:s,cdpResult:S},"Redirected to assigned slot");else return d("Filtering out node since it doesn't exist in the DOM",{cdpResult:S}),[]}catch(S){return d("Filtering out node since it doesn't exist in the DOM",{err:S}),[]}if(m&&e&&a&&l&&s.backendDOMNodeId&&!pi(m,l,r,i))return m&&(m.momenticIgnored=!0),[];let f=s.name?.value?typeof s.name.value=="string"?s.name.value:`${s.name.value}`:"",g=s.value?.value?typeof s.value.value=="string"?s.value.value:`${s.value.value}`:"";if(f==="momentic_cursor"||f.includes("chakra"))return m&&(m.momenticIgnored=!0),[];let y=new Yt({domNode:m,id:parseInt(s.nodeId),role:s.role?.value||"",name:f,content:g,properties:s.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+ui(s),backendNodeID:s.backendDOMNodeId,ignoredByCDP:s.ignored});for(let S of s.childIds??[]){if(!S)continue;let N=n.get(parseInt(S));if(!N)continue;let _=await Xn({node:N,parent:y,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l});_.length&&(y.children=y.children.concat(_))}if(y.role==="StaticText"&&(y.children=[]),y.children.length===1&&y.children[0].role==="StaticText"){let S=y.name,N=y.children[0]?.name;(S===N||!N)&&(y.children=[])}let b=[];for(let S=y.children.length-1;S>=0;S--){let N=y.children[S];if(N.role!=="StaticText"){b.push(N);continue}if(S===0||y.children[S-1].role!=="StaticText"){b.push(N);continue}y.children[S-1].name+=` ${N.name}`}if(y.children=b.reverse(),y.role==="generic"&&y.children.length===1){let S=y.children[0];if(y.name&&!dt.includes(S.role)&&y.name===S.name)return m&&(m.momenticIgnored=!0),y.children}if(!y.isInteresting()&&s.parentId)return m&&(m.momenticIgnored=!0),y.children;for(let S of y.children)S.parent=y;return[y]}function Jn({node:s,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){s.id=r,r+=1,e.set(s.id,s),s.dataMomenticId?t.set(s.dataMomenticId,s):dt.includes(s.role);for(let i of s.children)r=Jn({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}async function Qn({a11yGraph:s,domGraph:e,logger:t,cdpClient:n,filterByViewport:o,viewportDetails:r}){if(!s.root)throw new Error("A11y tree has no root");let i=qn();s.allNodes=s.allNodes.filter(u=>u.ignored?!u.ignoredReasons?.find(f=>si.includes(f.name)):!0);let a=new Map;for(let u of s.allNodes)a.set(parseInt(u.nodeId),u);let l=await Xn({node:s.root,domGraph:e,parent:null,inputNodeMap:a,cdpClient:n,logger:t,callId:qn(),filterByViewport:o,viewportDetails:r});if(l.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(l)}`);if(l.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let d=new Map,h=new Map;return Jn({node:l[0],a11yIdNodeMap:d,dataMomenticIdMap:h,logger:t,callId:i}),new Xt(l[0],d,h)}var Jt=(s,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=s[o];if(typeof r!="string"||!r.trim()||e[o]===void 0)continue;let i=Kt(r,e[o])/Math.min(r.length,e[o].length);i===0?t+=2:i<=.1&&t++}if(e.numChildren!==void 0&&(s.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=s.getNodeOnlySerializedForm(),r=Kt(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.1&&t++}if(e.serializedForm){let o=s.serialize({noID:!0,maxLevel:1,neighbors:1}),r=Kt(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.1&&t++}return t},hi=["href","src"];function gi(s,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return hi.includes(s)&&e.length>60?e.slice(0,50)+"...":s==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function fi(s,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{Hn.relevantElementAttributes.includes(t)&&!ii.includes(t)&&!s[t]&&!t.startsWith("aria")&&t!=="class"&&(s[t]=gi(t,n))})}function Zn(s,e,t=4e3){let n=[],o=Math.floor(t/2),r=`id="${s}"`,i=0,a=e.indexOf(r,i);for(;a!==-1;){let l=Math.max(i,a-o),d=Math.min(e.length,a+o),h=e.slice(l,d);n.push(h),i=d,a=e.indexOf(r,i)}return n.join(`
...
`)}var Ie={r:147,g:196,b:125,a:.55},eo={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:Ie,paddingColor:Ie,borderColor:Ie,marginColor:Ie,eventTargetColor:Ie,shapeColor:Ie,shapeMarginColor:Ie,showInfo:!0,showAccessibilityInfo:!0};var mt=["display","opacity","visibility","height","max-height","overflow"];function to({snapshot:s,devicePixelRatio:e,pageFrameId:t}){let n=s.strings,o=s.documents,r=o[0];t&&(r=o.find(l=>n[l.frameId]===t));let i={};return{root:yi(r,n,e,i),backendIdToNode:i}}function yi(s,e,t,n){let o=s.layout,r={};o.nodeIndex.forEach((g,y)=>{r[g]=y});let i=o.styles,a=o.bounds??[],l=s.nodes,d=l.backendNodeId??[],h=l.attributes??[],u=l.parentIndex??[],m=l.nodeName??[],f=l.inputChecked??{index:[]};for(let g=0;g<d.length;g++){let y=d[g],b=h[g]??[],w=u[g]&&u[g]>=0?u[g]:null,S=r[g],N;S?N=a[S]??[]:N=[];let _={backendNodeId:y,bounds:{x:N[0]??null,y:N[1]??null,width:N[2]??null,height:N[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:w?d[w]:null,tagName:m[g]!==void 0?e[m[g]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};_.parentBackendNodeId&&n[_.parentBackendNodeId].children.push(y);for(let q of Object.keys(_.bounds)){let Q=q;_.bounds[Q]!==null&&(_.bounds[Q]/=t)}let de=i[g]??[];for(let q=0;q<de.length&&!(q>=mt.length);q++){let Q=de[q];if(!Q||isNaN(Q))continue;let ge=e[Q];if(!ge)continue;let K=mt[q];_.computedStyles[K]=ge}for(let q=0;q<b.length;q+=2){let Q=b[q],ge=b[q+1];if(!Q||!ge)continue;let K=e[Q],ze=e[ge];!K||!ze||(_.attributes[K]=ze)}f.index.includes(g)&&(_.attributes.checked="true"),n[_.backendNodeId]=_}return n[d[0]]}async function Ye(s){return s.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var F=(s=1e3)=>new Promise(e=>setTimeout(()=>e(),s));function no(){return window.lastCursorPos}function oo(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function ro(){window.globalHintManager&&window.globalHintManager.reset()}function io(){let s={addIdsToElement:(e,t)=>{let n="getElementsByTagName"in e?e.getElementsByTagName("*"):e.querySelectorAll("*"),o=t;for(let r=0;r<n.length;r++){let i=n[r];i&&(i.setAttribute("data-momentic-id",`${o}`),i.setAttribute("aria-keyshortcuts",`${o}`),o++,i.shadowRoot&&(o=s.addIdsToElement(i.shadowRoot,o)))}return o}};return s.addIdsToElement(document.body,1)}async function Xe(s,e){let t=Date.now();for(;Date.now()-t<8e3;){try{if(await s.evaluate(()=>{let o=window;return!!(o.generateCssSelectors&&o.evaluateCssSelectors&&o.generateHtmlCacheAttributes&&o.ldist)},{timeout:1e3}))return}catch{}e.debug("Waiting for momentic browser scripts to load..."),await F(500)}throw new Error(`Failed to load momentic browser scripts on page ${s.url()}`)}var ao=`(function () {
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
})()`;var so=({nodeOnlySerializedHtml:s})=>{let e=window;if(!e.ldist||!e.serializeElementOnlyWithText||!e.getAllElements)return{error:"Momentic core libraries not found"};let t=e.getAllElements(),n,o,r=1/0,i;for(let a of t){let l=e.serializeElementOnlyWithText(a),d=e.ldist(s,l);d<r?(r=d,o=l,n=a.getAttribute("data-momentic-id")??void 0,i=void 0):d===r&&(i=l)}return i?{error:`[MOMENTIC] Multiple HTML elements with same distance (${r}) found:
      ${i}
      ==================
      ${o}
      `}:{dataMomenticId:n,closestDistance:r,closestNodeSerialized:o}};import $u from"nodejs-file-downloader";import{tmpdir as bi}from"os";import Ku from"p-timeout";import Qt,{basename as Xu,dirname as Ju}from"path";var Si="file://",Zu=Qt.join(bi(),"momentic","downloads");var ep=50*1024*1024;function lo(s,e){return`${Si}${s}/${e}`}function co(s){let e=Qt.extname(s),t=Qt.basename(s,e);return s=(t.length>100?t.slice(t.length-100):t)+e,s=s.trim().replaceAll(" ","_"),s}async function uo({locator:s,logger:e}){let[t,n]=await s.evaluate(r=>[r.tagName.toLowerCase(),r.getAttribute("class")??""]);if(t!=="input"||!n.toLowerCase().includes("chakra"))return;let o=await s.boundingBox({timeout:2e3});if(o===null){e.warn({elementDisplayString:await Ye(s)},"Attempting to click on element with no bounding box");return}if(!(o.width!==1||o.height!==1))try{await Xe(s.page(),e);let r=await s.evaluate(a=>{let l=window;if(!l.CssSelectorGenerator)return{type:"error",error:"[Momentic] Missing CSS selector libraries"};let d=a.parentElement;if(!d)return{type:"error",error:"Input click target has no parent for redirection"};let h=l.CssSelectorGenerator.getCssSelector(d,{}),u=a.getBoundingClientRect(),m=d.getBoundingClientRect(),f={x:Math.min(Math.max(1,u.left-m.left),m.width-1),y:Math.min(Math.max(1,u.top-m.top),m.height-1)};return{type:"result",selector:h,relativePoint:f,serializedForm:d.outerHTML.slice(0,500)}});if(r.type==="error")throw new Error(r.error);let i=s.page().locator(r.selector);return await i.waitFor({state:"attached",timeout:2e3}),e.info(r,`Redirected click to parent element with selector: ${r.selector}`),{locator:i,relativePoint:r.relativePoint}}catch(r){e.error({err:r},"Failed finding parent label for Chakra element");return}}var ho=["date","datetime-local","month","time","week"],po={date:/^\d{4}-\d{2}-\d{2}$/,"datetime-local":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,month:/^\d{4}-\d{2}$/,time:/^\d{2}:\d{2}$/,week:/^\d{4}-W\d{2}$/};async function go(s,e,t,n){let o=(await s.evaluate(()=>document.activeElement?.getAttribute("type"))??"").toLowerCase();return po[o]&&(po[o].test(e)&&n.warn(`Detected datetime input (${e}) in normalized format - this may fail to fill correctly as it is not how the user would input the value`),t.pressKeysSequentially=!0,t.clearContent=!1,n.debug("Transforming datetime input to use sequential key presses")),!1}var ji=To(Di(),"momentic","chromium"),ke=process.env.TWO_CAPTCHA_KEY,gt=Ui(ki);gt.use(Bi({provider:{id:"2captcha",token:ke},visualFeedback:!0}));async function en(s,e){let t,n;for(let o=0;o<4;o++)try{return t=s.pages(),(await Promise.all(t.map(async r=>({title:await r.title(),url:r.url()})))).filter(r=>qe(r.url,e))}catch(r){n=r,await F(500)}throw new Error(`Failed to get tab titles after all retries: ${n?.message}`)}var tn=class s{static USER_AGENT=zi["Desktop Chrome"].userAgent;contextInitialized=!1;browser;context;page;systemDevicePixelRatio;userControlledBrowserSettings;pageLoadPromise=null;lastTabChangeEventTimeout=void 0;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;enricher;storage;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;viewport;onTabsChange=void 0;constructor({storage:e,enricher:t,browser:n,context:o,page:r,baseUrl:i,logger:a,localMode:l,cdpClient:d,userBrowserSettings:h,viewport:u,onTabsChange:m,systemDevicePixelRatio:f}){Un(h),this.storage=e,this.enricher=t,this.browser=n,this.context=o,this.cdpClient=d,this.page=r,this.baseURL=i,this.logger=a,this.userControlledBrowserSettings=h,this.localMode=!!l,this.viewport=u||je,this.onTabsChange=m,this.systemDevicePixelRatio=f}async initializeContext(){if(this.contextInitialized)return;this.userControlledBrowserSettings.extraHeaders&&await this.context.setExtraHTTPHeaders(this.userControlledBrowserSettings.extraHeaders),await this.context.grantPermissions(["clipboard-read","clipboard-write","microphone","camera"]);let e=[this.context.addInitScript({content:He.cssGeneratorLibJs}),this.context.addInitScript({content:He.htmlUtilsLibJs})];this.localMode&&e.push(this.context.addInitScript({content:ao}));let t=n=>this.handleNewPageEvent(n);this.context.on("page",t),await this.handleNewPageEventHelper(this.page),this.context.on("close",()=>{this.logger.debug("Chrome browser context was closed"),this.context.off("page",t)}),await Promise.all(e),this.contextInitialized=!0}static async init({baseUrl:e,logger:t,storage:n,enricher:o,userBrowserSettings:r,browserArgs:i,contextArgs:a,onClose:l,waitForLoad:d=!0,localMode:h,localAppUrl:u,extensionPath:m,skipPageSetup:f,timeout:g,browserbaseConnectUrl:y,onTabsChange:b}){process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY="1";let w={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...i??{}},S={viewport:je,userAgent:r.userAgent??s.USER_AGENT,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...a??{}},N=null,_,de;if(h)_=await gt.launchPersistentContext(ji,{...w,...S,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${u}`,`--load-extension=${m}`,"--test-type=browser","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"],baseURL:e}),de=_.pages()[0],l&&de.on("close",()=>{l()});else if(y){N=await gt.connectOverCDP(y);let K=N.contexts()[0];if(!K)throw new Error("Failed to get browserbase default context");let ze=K.pages()[0];if(!ze)throw new Error("Failed to get browserbase default page");_=K,de=ze}else{N=await gt.launch({...w,args:["--disable-dev-shm-usage","--no-first-run","--renderer-process-limit=3","--disable-site-isolation-for-policy","--disable-site-isolation-trials","--autoplay-policy=user-gesture-required","--disable-add-to-shelf","--disable-desktop-notifications","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]});let K={...S,baseURL:e};_=await N.newContext(K),t.debug({contextArgs:K},"Browser initialization context args"),de=await _.newPage()}let q=await s.initCDPSession(_,de,t,g),Q=new s({browser:N,context:_,page:de,baseUrl:e,logger:t,storage:n,enricher:o,localMode:h,userBrowserSettings:r,cdpClient:q,viewport:S.viewport||je,onTabsChange:b,systemDevicePixelRatio:S.deviceScaleFactor});await Q.initializeContext();let ge=async()=>{try{await Q.navigate({url:e,initialNavigation:!f,loadTimeoutMs:g})}catch(K){if(t.error({err:K},"Failed to initialize Chrome browser"),d)throw K}};return d?await ge():ge(),Q}async handleAvailableTabsChangeHelper(){try{let e=await en(this.context,this.logger),t=this.page.url();this.onTabsChange?.(e,t)}catch(e){this.logger.error({err:e},"Error sending available tabs to frontend")}}async handleAvailableTabsChange(){clearTimeout(this.lastTabChangeEventTimeout),this.lastTabChangeEventTimeout=setTimeout(()=>this.handleAvailableTabsChangeHelper(),1500)}async handlePageErrorEvent(e){}handlePageClosedEvent(e){if(!this.browser||!this.browser.isConnected())return;let t=async()=>{try{if(this.page!==e){this.logger.info({url:e.url()},"Detected background page was closed"),this.handleAvailableTabsChange();return}this.logger.info({url:e.url()},"Detected active page was closed, switching to another tab");let n=this.context.pages();for(let o=n.length-1;o>=0;o--){let r=n[o];if(!(!r||r.isClosed()||!qe(r.url()))){this.logger.info(`Automatically switching to tab ${o} after close: ${r.url()}`),await this.switchToPageByIndex(r,o);break}}}catch(n){this.logger.warn({err:n},"Error in page close event handler")}};this.pageLoadPromise=t()}async handleNewPageEvent(e){let t=e.url();if(!(!t.trim()||t==="about:blank"))try{this.logger.debug({url:t},"Detected new page event, registering handlers and waiting for load to complete"),await this.handleNewPageEventHelper(e)}catch(n){this.logger.warn({err:n},"Error handling new page open, continuing....")}}async handleNewPageEventHelper(e){e.on("close",n=>this.handlePageClosedEvent(n)),e.on("pageerror",async n=>this.handlePageErrorEvent(n)),e.on("framenavigated",async n=>{n===e.mainFrame()&&await this.handleFrameNavigationEvent(n)});let t=this.pageLoadPromise;this.pageLoadPromise=(async()=>{try{await Promise.resolve(t),await this.waitForPageOrFrameLoad(e),this.handleAvailableTabsChange()}finally{this.pageLoadPromise=null}})()}async handleFrameNavigationEvent(e){let t=e.url();if(!t||t==="about:blank")return;let n=this.pageLoadPromise;this.pageLoadPromise=(async()=>{try{await Promise.resolve(n),await this.waitForPageOrFrameLoad(e),this.handleAvailableTabsChange()}finally{this.pageLoadPromise=null}})()}async getLocatorFromCdpFrame(e,t){let n=this.page;for(let a of t)n=n.frameLocator(`iframe[src=${JSON.stringify(a)}]`);let o=this.getAttributeFromStringArray(e.attributes??[],"src");if(!o)throw new Error(`Got iframe without src attribute: ${JSON.stringify(e)}`);let r=n.locator(`iframe[src=${JSON.stringify(o)}]`),i=await(await r.evaluateHandle(a=>a)).asElement().contentFrame();if(!i)throw new Error(`Got null frame from locator: ${r}`);return await this.waitForPageOrFrameLoad(i),i}async getMatchingFrame(e){if(e.type!=="url")throw new Error("Only url frame identifiers are supported now");let t=e.url,o=[{node:(await this.cdpClient.send("DOM.getDocument",{pierce:!0,depth:-1})).root,srcChain:[]}],r=[];for(;o.length>0;){let i=o.pop(),a=i.node,l=i.srcChain;if(a.nodeName.toLowerCase()==="iframe"){let d=this.getAttributeFromStringArray(a.attributes??[],"src");if(!d)continue;t.startsWith("/")&&t.endsWith("/")?new RegExp(t.slice(1,-1)).test(d)&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}):t.trim()===d.trim()&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}),l=[...l,d]}for(let d of a.children??[])o.push({node:d,srcChain:l});a.contentDocument&&o.push({node:a.contentDocument,srcChain:l})}if(r.length===1)return r[0];throw r.length>1?new Error(`Found multiple frames with src matching '${t}'. Please use a more specific selector.`):new Error(`Failed to find frame with src matching: ${t}`)}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="",o;for(;e<3;){try{if(this.activeFrame.type==="url")n=this.activeFrame.url,t=(await this.getMatchingFrame(this.activeFrame)).frame;else throw new Error(`Frame identifier type ${this.activeFrame.type} is not yet supported`);if(t)return t}catch(r){o=r}await F(250),e++}throw new W("InternalWebAgentError",o?o.message:`Failed to find frame with src matching '${n}' on page`)}static async initCDPSession(e,t,n,o=8e3){let r=2,i=async()=>{try{let l=await e.newCDPSession(t);return l.on("Target.targetCrashed",d=>{n.error({payload:d},"CDP session crashed, Momentic will likely not function correctly")}),l.on("Inspector.targetCrashed",d=>{n.error({payload:d},"CDP inspector session crashed, Momentic will likely not function correctly")}),await l.send("Accessibility.enable"),await l.send("DOM.enable"),await l.send("Overlay.enable"),l}catch(l){if(r>0)return n.debug({err:l},"Failed to initialize CDP session, re-creating CDP client"),await F(500),r--,i();throw l}};return await Zt(i(),{milliseconds:o,fallback:()=>{throw new Error(`Failed to initialize session within page load timeout (${t.url()})`)}})}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&await this.context.clearCookies();let t=this.context.pages();for(let r=0;r<t.length;r++){if(e.clearStorage){let i=t[r].url();try{this.originsVisited.delete(new URL(i).origin)}catch{}try{await t[r].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(a=>{a.forEach(l=>{l.name&&indexedDB.deleteDatabase(l.name)})})},{timeout:1e3})}catch(a){this.logger.debug({err:a},"Failed clearing site data, continuing...")}}r!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[r].url()}`),await t[r].close())}if(this.page=this.context.pages()[0],this.page.isClosed()){this.logger.debug("Page is closed, exiting reset early");return}let n=await s.initCDPSession(this.context,this.page,this.logger,e.timeout),o=this.cdpClient;if(this.cdpClient=n,o.detach(),e.clearStorage)for(let r of this.originsVisited)this.logger.debug({origin:r},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:r,storageTypes:"all"}),this.originsVisited.delete(r);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async toggleHints(e){let t=this.page;e.state==="on"?(await t.addStyleTag({content:He.vimiumCss}),await t.addScriptTag({content:He.vimiumJs}),await t.evaluate(oo,{timeout:1e3})):await t.evaluate(ro,{timeout:1e3})}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){if(!this.browser)return;let e=this.browser;this.browser=null;try{this.originsVisited.clear(),await this.page.close(),await this.context.close(),await e.close()}catch(t){throw new Error(`Error cleaning up browser: ${t}`)}finally{this.browser=null}}get closed(){return!this.browser||!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}url(){return this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let i=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:i}}async screenshot(e){let{retries:t=1}=e;try{let n=await this.screenshotHelper({...e,retries:t});if(n.byteLength>5e6)this.logger.error("Page screenshot is greater than 5MB, which may cause performance issues with some AI models");else if(n.length===0)throw new Error("Got empty screenshot");return n}catch(n){if(t>0)return this.logger.debug({err:n},"Failed taking screenshot, retrying..."),await F(500),this.screenshot({...e,retries:t-1});throw n}}async screenshotHelper({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,timeout:i,clearHighlights:a=!1}){a&&await this.removeAllHighlights();let l={fullPage:!1,type:"jpeg",quality:t,scale:n,caret:r?"hide":"initial",path:o,timeout:i??4e3};e&&(l.scale="css");let d;if(l.scale==="css"||l.path)d=await this.page.screenshot(l);else{let h=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});d=Buffer.from(h.data,"base64")}if(!e)return d;if(e){let h;"id"in e?h=(await this.resolveTarget(null,e)).locator:h=e;let u=await h.boundingBox();if(!u)throw new Error("Attempted to screenshot an element that is not visible on the page");let{x:m,y:f,width:g,height:y}=u;if(!g||!y)throw new Error("Attempted to screenshot an element with zero width or height");if(m<0||f<0)throw new Error("Attempted to screenshot an element with negative coordinates");m=Math.floor(m),f=Math.floor(f),g=Math.ceil(g),y=Math.ceil(y);try{d=await Wi(d).extract({left:m,top:f,width:g,height:y}).toBuffer()}catch(b){throw new Error(`Failed taking element screenshot at coordinates (${m}, ${f}) with size (${g}, ${y}): ${b}`)}}return d}async getViewport(){return this.viewport}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n=this.pageLoadTimeout}){Wn(e)&&(e=new URL(e,this.baseURL).toString());let o=Date.now();this.logger.debug(`Navigating to ${e}`);try{t||await this.waitForDOMStability();try{await this.page.goto(e,{timeout:n,waitUntil:"domcontentloaded"})}catch(i){throw new W("ActionFailureError",i.message)}await this.waitForPageOrFrameLoad(this.page),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-o)}ms`)}catch(i){if(i instanceof Error&&i.message.includes("ERR_ABORTED")){this.logger.error({err:i},"Navigation error, possibly due to user cancellation");return}throw i}let r=this.url();if(Gn.has(r))throw new W("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t)try{await this.exposeRecordingBindings()}catch(i){i instanceof Error&&i.message.includes("already registered")||this.logger.error({err:i},"Failed to install Momentic libraries for action recording")}}async type(e,t={},n=!1){await this.directTypeHelper(e,t,n)}async directTypeHelper(e,t={},n=!1){let o=await this.getUserPageOrFrame();if(!await go(o,e,t,this.logger)){if(n){let r=Date.now(),i=!1;for(;Date.now()-r<this.smartWaitingTimeout;){let a=await o.evaluate(()=>document.activeElement&&document.activeElement.tagName.toLowerCase());if(a&&a!=="body"){i=!0;break}await F(250)}i||this.logger.warn("No active element found to type into, attempting anyways")}t.clearContent&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),t.pressKeysSequentially?await this.page.keyboard.type(e,{delay:100}):await this.page.keyboard.insertText(e),t.pressEnter&&await this.page.keyboard.press("Enter")}}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:4e3})}async highlight(e,t){try{let n=await this.resolveTarget(null,e,{skipFetchTree:!0});return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.debug({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})},{timeout:1e3})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{let r=window;r.momenticIsEligible=h=>{let m=window.getComputedStyle(h,null).getPropertyValue("display");if(m==="none"||m==="contents")return!1;let f=h.getBoundingClientRect();return!(!f.height||!f.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let i=0;for(;!r.momenticIsEligible(n)&&i<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,i++}let a=n.style.getPropertyValue("outline"),l=n.style.getPropertyPriority("outline");n.style.setProperty("outline","5px dashed rgb(255, 0, 153)","important");let d=`momentic${Math.floor(Math.random()*1e7)}`;r[d]=()=>{n.style.removeProperty("outline"),n.style.setProperty("outline",a,l)},r.removeHighlightTimers.push(setTimeout(()=>{r[d](),r.removeHighlightFunctions?.[d]&&delete r.removeHighlightFunctions[d]},2750)),r.removeHighlightFunctions[d]=r[d]},t?.color,{timeout:1e3}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}recordUrlVisited(e){try{this.originsVisited.add(new URL(e).origin)}catch(t){this.logger.warn({err:t},"Failed to record origin visited")}}async wrapPageLoad(e){return await Promise.resolve(this.pageLoadPromise),await e()}async loadAuthState(e){await this.waitForPageOrFrameLoad(this.page);for(let n of e.cookies)await this.setCookie(n);await this.cdpClient.send("DOMStorage.enable");let t=0;for(let n of e.origins??[])for(let o of n.localStorage)try{await this.cdpClient.send("DOMStorage.setDOMStorageItem",{storageId:{securityOrigin:new URL(n.origin).origin,isLocalStorage:!0},key:o.name,value:o.value}),t++}catch(r){this.logger.warn({err:r,origin:n},"Failed to set local storage entry");break}this.logger.debug({storageState:e},`Loaded ${e.cookies.length} cookies and ${t} local storage entries`),await this.refresh()}async saveAuthState(){return this.context.storageState()}async getOpenPageUrls(){return(await en(this.context,this.logger)).map(t=>t.url)}saveA11yDetailsToCache(e,t){t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()}async saveNodeDetailsToCache(e,t,n,o,r){if(t&&(this.saveA11yDetailsToCache(t,n),t.properties.hidden&&t.properties.hidden!=="false"&&this.logger.warn({serializedForm:t.getSerializedFormWithContext()},"Chose hidden element for action")),!(n.generatedSelectors&&n.generatedSelectors.length>1)){if(o)n.dataMomenticId=o;else{this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}try{let i=await this.fetchHtmlAttributes(e,o);Object.assign(n,i)}catch(i){this.logger.debug({err:i},"Failed to fetch HTML attributes for target")}if(qt.includes(n?.role??""))try{await this.saveElementVisualAttributes(n,r)}catch(i){this.logger.debug({err:i},"Failed to get element screenshot while saving node details")}}}async saveElementVisualAttributes(e,t){if(!t)return;await t.scrollIntoViewIfNeeded({timeout:4e3});let n=await t.boundingBox();if(!n||!n.width||!n.height){e.boundingBox=void 0,e.screenshotUrl=void 0;return}let{x:o=0,y:r=0,width:i=0,height:a=0}=n;if(e.boundingBox&&Math.abs(e.boundingBox.width-i)<1&&Math.abs(e.boundingBox.height-a)<1&&Math.abs((e.boundingBox.x??0)-o)<1&&Math.abs((e.boundingBox.y??0)-r)<1)return;this.logger.debug({oldBox:e.boundingBox,newBox:n},"Updating element screenshot");let l=await this.screenshot({target:t,scale:"css",timeout:4e3});e.boundingBox=n,e.screenshotUrl=await this.storage.uploadScreenshot(l)}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2||!t.serializedHtml)throw new Error("Insufficient data to resolve target using CSS selectors");let n;try{n=await e.evaluate(l=>window.evaluateCssSelectors(l),{selectors:t.generatedSelectors,lDistThresholdLax:.5,lDistThresholdStrict:.15,serializedNodeWithContext:t.serializedHtml})}catch(l){throw new Error(`Failed to evaluate CSS selectors in browser: ${l}`)}if(n.result)this.logger.debug(n,"CSS selector evaluation returned an element");else throw new Error("CSS selector evaluation returned no eligible elements");let o=n.result,r=parseInt(o.dataMomenticId),i=this.dataMomenticIdToNodeMap.get(r);if(t.nodeOnlySerializedForm&&i){let l=Jt(i,t);if(l<4){let d=`Rejecting best CSS selector candidate due to low similarity score (${l})`;throw new Error(d)}}let a=e.locator(o.workingSelectors[0]);return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(e,i,t,r,a),t.generatedSelectors=Array.from(new Set([...o.workingSelectors??[],...t.generatedSelectors??[]])),{a11yNode:i,displayString:o.serializedElement,locator:a,decisions:[{type:"CSS_SELECTOR",matched:!0,reason:`${o.workingSelectors.length} CSS selectors matched the following element: ${o.serializedElement}`,selectors:o.workingSelectors}]}}async resolveTarget(e,t,n={}){let{skipFetchTree:o=!1,targetName:r}=n;this.logger.debug({target:t,skipFetchTree:o},"Resolve target called");let i=await this.getUserPageOrFrame();if(await Xe(i,this.logger),t.id>0&&!sn(t)){let m=this.a11yIdToNodeMap.get(t.id);if(!m)throw new W("InternalWebAgentError",`Resolving target failed because id ${t.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);let f=await this.getLocatorFromA11yNode(m);return await this.saveNodeDetailsToCache(i,m,t,m.dataMomenticId,f),{locator:f,a11yNode:m,displayString:m.getNodeOnlySerializedForm(),decisions:[]}}let a=Date.now(),l,d=0,h=this.smartWaitingTimeout,u;for(;!l||l-a<h;){d++;try{l=Date.now(),u=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!0,skipFetchTreeWait:!0,skipFetchTree:o}),this.logger.debug(`Resolution succeeded through CSS selectors only (attempt ${d})`);break}catch(m){this.logger.debug({err:m,decisions:m instanceof Ce?m.decisions:[]},`Could not resolve target through CSS selectors only (x${d})`),await F(500)}}return u||(this.logger.debug("Waiting for page stability and retrying all target matching methods"),u=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!1,skipFetchTreeWait:!1,skipFetchTree:o})),e?.details?.push({type:"TARGETING",name:r,elementLocationDecisions:u.decisions,pageState:u.pageState,targetSource:t.targetSource}),u}async resolveTargetHelper({root:e,target:t,cssSelectorOnly:n,skipFetchTree:o,skipFetchTreeWait:r}){let i=[];if(t.id<0&&t.selector){let m=e.locator(t.selector),f;try{f=await Ye(m)}catch(g){throw new Ce(`'${t.selector}' failed to resolve: ${g}`,[{type:"USER_SELECTOR",matched:!1}])}return i.push({type:"USER_SELECTOR",matched:!0,reason:`The user-provided CSS selector ${t.selector} matched an element on the page.`}),{locator:m,a11yNode:void 0,pageState:void 0,displayString:f,decisions:i}}let a;o||(a=(await this.getBrowserState({skipWait:r})).serialize(),this.logger.debug({skipFetchTreeWait:r,tree:a},"Got a11y tree before attempting target resolution"));let l=this.a11yIdToNodeMap.get(t.id),d=l?.getNodeOnlySerializedForm();if(l&&t.serializedForm&&d===t.serializedForm){let m=await this.getLocatorFromA11yNode(l);return await this.saveNodeDetailsToCache(e,l,t,l.dataMomenticId,m),i.push({type:"A11Y_ID",matched:!0,reason:`An element with the same Chrome-internal accessibility node ID matched the saved content exactly: ${d}.`}),{locator:m,a11yNode:l,displayString:d,decisions:i,pageState:a}}if(t.generatedSelectors){let m,f;try{m=await this.resolveTargetUsingCssSelectors(e,t)}catch(g){f=g}if(m)return{...m,pageState:a,decisions:[...i,...m.decisions]};if(n)throw new Ce("Could not resolve target with CSS selector only",i);i.push({type:"CSS_SELECTOR",matched:!1,reason:f?.message,selectors:Pi(t.generatedSelectors)}),t.generatedSelectors=void 0}if(t.serializedForm&&t.serializedForm.trim().length<10){let m="Refusing to attempt accessibility node comparison since the saved node is too short.";i.push({type:"A11Y_DISTANCE",matched:!1,reason:m,savedElement:t.serializedForm})}else if(t.serializedForm){let m=1/0,f,g;for(let b of this.a11yIdToNodeMap.values()){let w=b.getSerializedFormWithContext(),S=Mi(t.serializedForm,w);S<m?(m=S,f=b,g=void 0):S===m&&(g=b)}let y=Math.ceil(.1*t.serializedForm.length);if(f&&m<y&&m<25)if(g){let b=Ni`
          Multiple accessibility nodes have the same string distance - refusing to pick between them:
          Candidate 1:
            ${f.getSerializedFormWithContext()}
          =====================
          Candidate 2:
            ${g.getSerializedFormWithContext()}`;i.push({type:"A11Y_DISTANCE",matched:!1,reason:b,distance:m,closestElement:f.getNodeOnlySerializedForm(),savedElement:t.serializedForm})}else{let b=await this.getLocatorFromA11yNode(f);return await this.saveNodeDetailsToCache(e,f,t,f.dataMomenticId,b),i.push({type:"A11Y_DISTANCE",matched:!0,reason:`Found an accessibility node on the page within ${y} distance of the saved element.`,distance:m,closestElement:f.getSerializedFormWithContext()}),{locator:b,pageState:a,a11yNode:f,displayString:f.getNodeOnlySerializedForm(),decisions:i}}else i.push({type:"A11Y_DISTANCE",matched:!1,reason:`Closest accessibility node is still too far away (${m} > ${y}) to be considered a match.`,distance:m,closestElement:f?.getSerializedFormWithContext(),savedElement:t.serializedForm})}if(t.nodeOnlySerializedHtml&&t.nodeOnlySerializedHtml.trim().length<10){let m="Refusing to attempt HTML comparison since the saved element is too short.";i.push({type:"HTML_DISTANCE",matched:!1,reason:m})}else if(t.nodeOnlySerializedHtml){let m=await e.content();m.length>5e5&&(m=m.slice(5e5)+"...");try{let f=await e.evaluate(so,{nodeOnlySerializedHtml:t.nodeOnlySerializedHtml}),g=Math.floor(.15*t.nodeOnlySerializedHtml.length);if(f.closestDistance&&f.closestDistance>=g){let y=`Closest HTML candidate still has too far distance (${f.closestDistance}) from threshold (${g})`;i.push({type:"HTML_DISTANCE",matched:!1,reason:y,distance:f.closestDistance,closestElement:f.closestNodeSerialized})}else{if(f.error)throw new Error(f.error);if(f.dataMomenticId){let y=parseInt(f.dataMomenticId),b=this.dataMomenticIdToNodeMap.get(y),w;b?w=await this.getLocatorFromA11yNode(b):w=e.locator(`[${ae}="${y}"]`);let S=f.closestNodeSerialized??await Ye(w);return await this.saveNodeDetailsToCache(e,b,t,y,w),i.push({type:"HTML_DISTANCE",matched:!0,reason:`Found an element on the page within ${g} string comparison distance of the saved element.`,distance:f.closestDistance,closestElement:S,savedElement:t.nodeOnlySerializedHtml}),this.logger.debug({result:f,originalTarget:t,displayString:S},"Resolved cached target to new node with pure html levenshtein distance"),{locator:w,a11yNode:b,displayString:S,decisions:i,pageState:m}}else throw new Error(`Got invalid HTML evaluation result: ${JSON.stringify(f)}`)}}catch(f){this.logger.debug({err:f},"Failed to find closest HTML node using levenshtein distance"),i.push({type:"HTML_DISTANCE",matched:!1,reason:`Error finding closest HTML node by string distance: ${f}`})}}let h=t.screenshotUrl,u=t.role??"";if(h&&qt.includes(u))try{let m=await this.resolveTargetWithScreenshot({screenshotUrl:h,oldTarget:t});return{...m,decisions:[...i,...m.decisions],pageState:a}}catch(m){i.push({type:"TEMPLATE_MATCHING",matched:!1,reason:`Error finding closest element using saved screenshot: ${m}`,elementImageUrl:h}),this.logger.error({err:m},"Error finding closest element using saved screenshot")}throw this.logger.debug({target:t,decisions:i},"Failed to find any relevant node"),new Ce(`Could not find any relevant node given cached target: ${JSON.stringify(t)}`,i)}async resolveTargetWithScreenshot({screenshotUrl:e,oldTarget:t}){let n;if(!this.enricher)throw new Error("Enricher not available for screenshot resolution");let o=await this.screenshot({scale:"css"}),i=await(await fetch(e)).arrayBuffer(),a=Hi(),l=await this.enricher.runTemplateMatching({searchImageBase64String:Buffer.from(i).toString("base64"),pageImageBase64String:o.toString("base64"),id:a});this.logger.debug({id:a,templateMatch:l},"Template matching got successful result");let{target:d,locator:h}=await this.getTargetFromPositionPercentages({percentX:l.x,percentY:l.y}),u=d.boundingBox?.width,m=d.boundingBox?.height;if(!u||!m)throw n="Rejecting target from screenshot due to no bounding box",new Error(n);let f=t.boundingBox?.width??0,g=t.boundingBox?.height??0;if(Math.abs(u-f)>50)throw n=`Rejecting target from screenshot due to width difference (${u-f})`,new Error(n);if(Math.abs(m-g)>50)throw n=`Rejecting target from screenshot due to height difference (${m-g})`,new Error(n);return{locator:h,a11yNode:this.a11yIdToNodeMap.get(d.id),displayString:d.nodeOnlySerializedHtml??"",decisions:[{type:"TEMPLATE_MATCHING",matched:!0,reason:"Found element using screenshot",elementImageUrl:e}]}}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let i=(await this.getBrowserState({})).serialize();this.logger.debug({tree:i},"Got a11y tree for x / y resolution")}let n=await this.getUserPageOrFrame(),{target:o}=await this.getTargetFromPositionPercentages(e);if((o.generatedSelectors??[]).length>0)return{locator:n.locator(o.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(o.id),displayString:o.nodeOnlySerializedHtml??o.nodeOnlySerializedForm??"Unknown element",decisions:[]};let r=this.a11yIdToNodeMap.get(o.id);if(r&&r.dataMomenticId)return{locator:n.locator(`[${ae}="${r.dataMomenticId}"]`),a11yNode:r,displayString:r.getNodeOnlySerializedForm(),decisions:[]};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async saveDownloadToDisk(e,t){this.logger.info("Download detected, saving file to disk");let n=await e,o=await n.path(),r=co(n.suggestedFilename()),i=t();await n.saveAs(To(i,r)),So(o,{force:!0}),setTimeout(()=>{So(i,{recursive:!0,force:!0})},5*60*1e3);let a=lo(wo(i),r);return this.logger.debug({uri:a,downloadFolder:i},"Saved download to isolated folder"),a}async typeIntoTarget(e,t,n={}){await this.highlightTarget(t);let o=2,r=n.force,i=await t.getAttribute("type",{timeout:1e3})??"",a=ho.some(l=>l===i.toLowerCase());for(;o>0;)try{await t.click({timeout:4e3,force:r,position:a?{x:1,y:1}:void 0});break}catch(l){if(o--,o===0)throw l;this.logger.warn({err:l},"Failed clicking on element for type action, retrying with force enabled"),r=!0}return this.directTypeHelper(e,n)}async click(e,t,n={}){let o,r=await uo({locator:e,logger:this.logger});r&&(e=r.locator,o=r.relativePoint),await this.highlightTarget(e);let i=this.url(),a=await this.getOpenPageUrls(),l;n.waitForDownload&&(l=(async()=>{try{return await this.page.waitForEvent("download",{timeout:1e4})}catch(u){throw u instanceof Fi.TimeoutError?new W("ActionFailureError",`Download did not complete in ${1e4}ms`):u}})());let d=2,h=n.force;for(;d>0;)try{if(this.logger.debug("Clicking on element with locator"),n.doubleClick)await e.dblclick({button:n.rightClick?"right":"left",timeout:4e3,position:o,force:h});else{let u=await e.getAttribute("target");if(await e.click({button:n.rightClick?"right":"left",timeout:4e3,position:o,force:h}),u==="_blank"){this.logger.debug("Waiting for new page promise due to _blank target");let m=Date.now(),f=this.pageLoadTimeout;for(;!this.pageLoadPromise&&Date.now()-m<f;)await F(250)}}this.logger.debug("Click completed on element");break}catch(u){if(d--,d===0)throw u;this.logger.warn({err:u},"Failed clicking on element, retrying with 'disable stability checks' enabled"),h=!0,await F(250)}if(n.waitForUrl&&await this.waitForUrl(i,n.waitForUrl,a),l){if(!t.createIsolatedFolder)throw new W("InternalWebAgentError","Cannot wait for download without a callback to create an isolated folder");return this.logger.info("Waiting for download to start and complete"),{downloadedFile:await Zt(this.saveDownloadToDisk(l,t.createIsolatedFolder),{milliseconds:1e4,fallback:()=>{throw new W("ActionFailureError",`Download timed out after ${1e4}ms`)}})}}}async waitForUrl(e,t,n,o){let r=o??this.pageLoadTimeout,i=4;n||(n=await this.getOpenPageUrls());let a;for(let l=0;l<i;l++){if(a=await this.getOpenPageUrls(),a.length!==n.length)for(let d=a.length-1;d>=0;d--){let h=a[d];if(h!==e&&qe(h,this.logger)){await this.switchToPage(h,d);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t,{timeout:Math.max(r/i,500),waitUntil:"domcontentloaded"});break}catch(d){if(l===i-1)throw d;continue}}try{await this.waitForPageOrFrameLoad(this.page)}catch{}}async dragAndDrop(e,t,n={}){let o={timeout:8e3,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await F(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let i=Object.assign({timeout:4e3},r);o&&await o.hover(i);let a=await(await this.getUserPageOrFrame()).evaluate(no);a||(this.logger.debug("Could not get current mouse position before mouse drag action, defaulting to 0,0"),a={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+a.left,t+a.top,{steps:n}),await F(250),await this.page.mouse.up()}async hover(e,t){await this.highlightTarget(e),await e.hover({timeout:4e3,force:t})}async focus(e){await this.highlightTarget(e),await e.focus({timeout:4e3})}async blur(e){await this.highlightTarget(e),await e.blur({timeout:4e3})}async selectOption(e,t,n=!1){await this.highlightTarget(e);let o={timeout:4e3,force:n},r=2;for(;r>0;)try{await e.selectOption(t,o),this.logger.debug(`Selected '${t}' from dropdown`);break}catch(i){if(r--,r===0)throw i;this.logger.debug({err:i},"Failed selecting option, retrying with force enabled"),o.force=!0}}async press(e){await this.page.keyboard.press(e)}async refresh(e){let t=e?.loadTimeoutMs??this.pageLoadTimeout,n=async()=>{await this.page.reload({waitUntil:"domcontentloaded",timeout:t}),await this.waitForPageOrFrameLoad(this.page)};await this.wrapPageLoad(n)}async getBrowserStateHelper({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger}){await Promise.resolve(this.pageLoadPromise);let o=await this.getUserPageOrFrame(),r=await this.getViewportOffsetDetails(o),i;this.activeFrame&&(i=(await this.getMatchingFrame(this.activeFrame)).node.frameId,n.debug({iframeId:i},"Resolved iframe id"));let a=await this.getRawA11yTree({root:o,skipWait:e,iframeId:i,logger:n}),l=await this.getDOMTree(r.devicePixelRatio,i),d=await Qn({a11yGraph:a,domGraph:l,logger:n,cdpClient:this.cdpClient,filterByViewport:t,viewportDetails:r});if(!d||!d.root)throw new Error("Accessibility tree appears empty");return this.a11yIdToNodeMap=d.a11yIdNodeMap,this.dataMomenticIdToNodeMap=d.dataMomenticIdMap,this.domGraph=l,d}async getBrowserState(e){let{logger:t=this.logger,maxAttempts:n=2}=e,o=0,r;for(;o<n;){o++;try{return await Zt(this.getBrowserStateHelper(e),{milliseconds:this.pageLoadTimeout})}catch(i){r=i instanceof Error?i.message:`${i}`,o<n&&t.debug({err:i,url:this.url()},"Error getting a11y tree, retrying...")}}throw new W("ActionFailureError",`Getting page content failed after ${n} attempts. Are you sure this page is working? Error: ${r}`)}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(e){let[t,n,o,r,i]=await e.evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:t,lowerBound:t+r,leftBound:n,rightBound:n+o,width:o,height:r,devicePixelRatio:this.systemDevicePixelRatio??i}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(await this.cdpClient.send("DOMSnapshot.enable"),n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:mt}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await F(500),this.logger.debug({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new W("InternalWebAgentError","Error fetching DOM tree");return to({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async waitForDOMStability(e){let{logger:t=this.logger}=e??{};try{let{root:r}=await this.cdpClient.send("DOM.getDocument",{depth:-1,pierce:!0})}catch(r){t.debug({err:r},"Failed to request root node while getting a11y tree")}let n={value:Date.now()},o=()=>{n.value=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",o),this.cdpClient.addListener("DOM.characterDataModified",o),this.cdpClient.addListener("DOM.attributeModified",o),this.cdpClient.addListener("DOM.childNodeCountUpdated",o),this.cdpClient.addListener("DOM.documentUpdated",o),this.cdpClient.addListener("Page.frameDetached",o),this.cdpClient.addListener("Page.frameStartedLoading",o),this.cdpClient.addListener("Page.frameRequestedNavigation",o);try{await this.waitForDOMStabilityHelper(n,t)}finally{this.cdpClient.removeListener("Accessibility.nodesUpdated",o),this.cdpClient.removeListener("DOM.characterDataModified",o),this.cdpClient.removeListener("DOM.attributeModified",o),this.cdpClient.removeListener("DOM.childNodeCountUpdated",o),this.cdpClient.removeListener("DOM.documentUpdated",o),this.cdpClient.removeListener("Page.frameDetached",o),this.cdpClient.removeListener("Page.frameStartedLoading",o),this.cdpClient.removeListener("Page.frameRequestedNavigation",o)}}async waitForDOMStabilityHelper(e,t=this.logger){let n=!1,o=Date.now(),r=this.smartWaitingTimeout,i;for(;Date.now()-o<r;){if(await F(500),i)try{let{data:a}=await this.cdpClient.send("Page.captureScreenshot",{optimizeForSpeed:!0,quality:25,format:"jpeg"});if(a!==i){i=a;continue}}catch{}else try{let{data:a}=await this.cdpClient.send("Page.captureScreenshot",{optimizeForSpeed:!0,quality:25,format:"jpeg"});i=a}catch{}if(!(Date.now()-e.value<750)){n=!0;break}}t.debug({duration:Date.now()-o,a11yStableReceived:n},"A11y wait phase completed")}async getRawA11yTree({root:e,skipWait:t=!1,iframeId:n=void 0,logger:o=this.logger}){t||await this.waitForDOMStability({logger:o}),await e.evaluate(io);let r;if(n)r=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:n})).node.backendDOMNodeId;else{let{node:a}=await this.cdpClient.send("Accessibility.getRootAXNode");r=a.backendDOMNodeId}let{nodes:i}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:r});if(!i||i.length<=1)throw new W("ActionFailureError","The page has no content. Are you sure it is working properly?");return{root:i[0],allNodes:i}}async clickUsingVisualCoordinates(e,t){let n=await this.getUserPageOrFrame(),{percentX:o,percentY:r}=e,{width:i,height:a}=await this.getViewportOffsetDetails(n),l=Math.ceil(i*o),d=Math.ceil(a*r),h=this.url(),u=await this.getOpenPageUrls();this.logger.debug({pixelDeltaX:l,pixelDeltaY:d,width:i,height:a},"Executing mouse click with visual coordinates"),await this.wrapPageLoad(async()=>this.page.mouse.click(l,d,{button:t.rightClick?"right":"left",clickCount:t.doubleClick?2:1})),t.waitForUrl&&await this.waitForUrl(h,t.waitForUrl,u)}async dragAndDropUsingVisualCoordinates(e,t,n){let o=await this.getUserPageOrFrame(),{percentX:r,percentY:i}=e,{percentX:a,percentY:l}=t,{width:d,height:h}=await this.getViewportOffsetDetails(o),u=Math.ceil(d*r),m=Math.ceil(h*i),f=Math.ceil(d*a),g=Math.ceil(h*l);await this.page.mouse.move(u,m),await this.page.mouse.down(),await this.page.mouse.move(f,g),await F(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async hoverUsingVisualCoordinates(e){let t=await this.getUserPageOrFrame(),{percentX:n,percentY:o}=e,{width:r,height:i}=await this.getViewportOffsetDetails(t),a=Math.ceil(r*n),l=Math.ceil(i*o);await this.page.mouse.move(a,l)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,ae);if(!r)throw new Error(`Could not find attribute ${ae} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.debug({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${ae}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async l=>{let d=await this.getLocatorFromBackendID(l);t.doubleClick?await d.dblclick({timeout:4e3}):await d.click({timeout:4e3,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(l){this.logger.error({err:l},"Failed clicking on node"),o=l,n++,await F(500)}let i=e.parent?.children??[];for(let l of i){if(l.id===e.id)continue;let d=!1,h=Jt(l,e);if(e.name&&l.name===e.name?d=!0:h>=5&&(this.logger.debug({similarityScore:h},"Sibling qualified for click redirection through comparison score"),d=!0),!!d)try{return await r(l.backendNodeID),l}catch(u){this.logger.debug({err:u,candidate:l.getLogForm()},"Failed clicking on sibling during click redirection")}}let a=e.parent;for(n=0;n<$n;){if(!a||["rootwebarea","main"].includes(a.role.toLowerCase()))throw new W("ActionFailureError",o.message,{cause:o});if(!a.backendNodeID){a=a.parent;continue}try{return await r(a.id),a}catch(d){this.logger.debug({err:d,candidate:a.getLogForm()},"Failed clicking on parent during click redirection"),n++,a=a.parent}}throw new W("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,i=o.nodes,a=i.nodeName||[],l=i.backendNodeId||[],d=r.nodeIndex,h=r.bounds,u=-1;for(let S=0;S<a.length;S++)if(l[S]===e){u=d.indexOf(S);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[m=0,f=0,g=0,y=0]=h[u];m/=n,f/=n,g/=n,y/=n;let b=m+g/2,w=f+y/2;return{centerX:b,centerY:w}}async scroll(e,t,n,o){let r=t==="left"?-1:1,i=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([l,d,h,u])=>window.scrollTo(window.scrollX+(l??window.innerWidth)*h,window.scrollY+(d??window.innerHeight)*u),[e,n,r,i]);else{let a=this.page.viewportSize()||je;await this.page.mouse.wheel((e??a.width)*r,(n??a.height)*i)}}async scrollUp(e){return this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPageLoad(async()=>await this.page.goForward({waitUntil:"domcontentloaded",timeout:this.pageLoadTimeout}))}async goBack(){await this.wrapPageLoad(async()=>this.page.goBack({waitUntil:"domcontentloaded",timeout:this.pageLoadTimeout}))}async changeActivePage(e,t){this.recordUrlVisited(e.url()),this.page=e;let n=await s.initCDPSession(this.context,this.page,this.logger,t??this.pageLoadTimeout),o=this.cdpClient;this.cdpClient=n,o.detach()}async createNewTab(e,t){let n=await this.context.newPage();await this.changeActivePage(n,t?.loadTimeoutMs),await this.navigate({url:e,initialNavigation:!0,...t})}async switchToPageByIndex(e,t,n){let o=e.url();if(!qe(o,this.logger)){this.logger.error({tabUrl:o},"Refusing to switch to tab with invalid URL");return}this.logger.debug(`Switching to tab ${t} with url ${o}`),await this.changeActivePage(e,n?.loadTimeoutMs),await this.waitForPageOrFrameLoad(e)}async switchToPage(e,t,n){await this.wrapPageLoad(async()=>this.switchToPageHelper(e,t,n))}async switchToPageHelper(e,t,n){let o=this.context.pages(),r=await en(this.context,this.logger);if(t){await this.switchToPageByIndex(o[t],t,n);let i=r[t].url;this.onTabsChange?.(r,i);return}for(let i=0;i<o.length;i++){let a=o[i];if(a.url().includes(e)){await this.switchToPageByIndex(a,i,n);let l=r[i].url;this.onTabsChange?.(r,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async setCookie(e){let t;typeof e=="string"?t=vn(e):t=[e],this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:ke,method:"turnstile",sitekey:t,pageurl:this.url(),json:1})});if(!n.ok){let i=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},i),new Error(i)}let{request:o}=await n.json(),r=Date.now();for(;Date.now()-r<6e4;){await F(2500);let i=await fetch(`https://2captcha.com/res.php?key=${ke}&action=get&id=${o}&json=1`,{method:"GET"});if(!i.ok){let l=`Captcha solution API returned error response: ${i.statusText}`;throw this.logger.error({text:await i.text()},l),new Error(l)}if((await i.json()).status===1)break}}async solveCaptcha(){await this.getBrowserState({});let e;for(let a of this.a11yIdToNodeMap.values())if(a.role==="image"&&a.name.toLowerCase().includes("captcha")){if(!a.backendNodeID)continue;e=await this.getLocatorFromBackendID(a.backendNodeID);break}if(!e){let a=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!a.captchas||!a.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:4e3}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:ke,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let a=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},a),new Error(a)}let{taskId:o}=await n.json(),r=Date.now(),i="";for(;Date.now()-r<6e4;){await F(2500);let a=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:ke,taskId:o})});if(!a.ok){let d=`Captcha solution API returned error response: ${a.statusText}`;throw this.logger.error({text:await a.text()},d),new Error(d)}let l=await a.json();if(l.errorId){let d=`Captcha solution API returned error ID ${l.errorId}`;throw this.logger.error(d),new Error(d)}if(l.status==="ready"){i=l.solution.text;break}}if(!i)throw new Error("Captcha solution timed out");return i}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=new AbortController;await this.startTreeRefreshCronForRecording(e.signal);let t;try{if(t=await(await this.getUserPageOrFrame()).evaluate(async()=>{let n=window;if(!n.resolveRecordingTarget){console.error("[Momentic] Missing Momentic recording library functions");return}let o=null;n.targetCaptureClickListener=async i=>(console.log("[Momentic] Target capture listener fired"),i.preventDefault(),o=i.target,!1),document.addEventListener("click",n.targetCaptureClickListener,{capture:!0,once:!0});let r=Date.now();for(;!o&&Date.now()-r<1e4;)await new Promise(i=>setTimeout(i,250));if(!o)throw new Error("Timed out waiting for user to click on an element");return n.resolveRecordingTarget(o)}),t?.error)throw new Error(t.error);if(t?.target)t.warnings.length&&this.logger.warn({result:t},"Got warnings while capturing target from click");else throw new Error("No target captured from click")}catch(n){throw this.logger.error({err:n},"Error recording target click"),new Error(`Error recording click: ${n.message}`)}finally{e.abort()}if(!t)throw new Error("Got no target from recorded click - please make sure you clicked on an interactive element");return this.getTargetFromRecordedClick(t.target).target}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,i=o.width??0,a=o.height??0,l=r+i,d=o.y??0,h=d+(o.height??0),u=t.bounds,m=u.width??0,f=u.height??0,g=u.x??0,y=g+(u.width??0),b=u.y??0,w=b+(u.height??0);return g<l&&y>r&&b<h&&w>d?Math.abs(i-m)<200&&Math.abs(a-f)<200?!0:(Pe({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(Pe({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=Ii();for(let d of n)if(d.attributes?.[ae]===e){o=d;break}if(!o)return[];let i=[],a=t.backendIdToNode[o.parentBackendNodeId??-1];for(;a&&(a?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,a,r));)a=t.backendIdToNode[a.parentBackendNodeId??-1];a&&i.push(a);let l=[o];for(;l.length;){let d=l.shift();for(let h of d.children??[]){let u=t.backendIdToNode[h];u&&!u.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,u,r)?i.push(u):u&&l.push(u)}}return i}getTargetFromRecordedClick(e){this.logger.debug(e,"Got HTML target attributes from click re cording");let{htmlAttributes:t,dataMomenticId:n}=e,r=this.dataMomenticIdToNodeMap.get(n),i={id:r?.id??-1,dataMomenticId:n,targetSource:"CLICK_TO_FIND",...t};return r?this.saveA11yDetailsToCache(r,i):this.logger.warn({htmlAttributes:t},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),{target:i,a11yNode:r}}async exposeRecordingBindings(){let e=({frame:t},n)=>{if(!this.transformer)return;let{type:o,target:r,error:i,warnings:a,selectedValue:l}=n,d=t.url();if(this.logger.debug({url:d,...n},`${o} event captured on element`),i){this.logger.error({error:i,warnings:a},"Error while capturing passive element interaction");return}else if(r)a.length&&this.logger.warn({warnings:a},`Warnings while capturing passive element interaction of type ${o}`);else{this.logger.error({event:n},"No target found in passive element interaction event");return}let{dataMomenticId:h,htmlAttributes:u}=r,m=this.dataMomenticIdToNodeMap,f=this.mostRecentA11yTree,g=m.get(h),y={id:g?.id??-1,dataMomenticId:h,targetSource:"RECORDING",...u};g?this.saveA11yDetailsToCache(g,y):this.logger.debug({url:d,htmlAttributes:u},"Could not find corresponding accessibility node for click, continuing with HTML attributes only"),(async()=>{if(!this.transformer){this.logger.warn("No natural language translation since transformer is not initialized anymore");return}this.logger.debug({target:r,url:d},`Generating description for ${o.toLowerCase()}ed target`);let b=f?.serialize();g&&b&&b.length>5e3&&(b=Zn(g.id,b),this.logger.debug({serializedTree:b},"Trimmed a11y tree for description transformation"));try{await this.transformer.recordElementAction({type:o,target:y,browserState:b,url:d,selectedValue:l})}catch(w){this.logger.error({err:w},`Failed to record ${o} action`)}})()};await this.context.exposeBinding("captureElementEvent",({frame:t},n)=>{try{e({frame:t},n)}catch(o){this.logger.error({err:o},"Failed to capture element interaction")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},t)=>{this.transformer&&this.transformer.recordKeystroke(t)})}async fetchA11yTreeForRecording(){let e=await this.getBrowserState({skipWait:!0,maxAttempts:1,logger:$t});if(this.mostRecentA11yTree=e,Math.random()<.1){let n=this.mostRecentA11yTree.serialize();this.logger.debug({tree:n.length>4e5?"REDACTED_DUE_TO_SIZE":n},"Refreshed a11y tree during recording")}await(await this.getUserPageOrFrame()).evaluate(n=>{let o=window;o.momenticIdsInA11yTree=new Set(n)},Array.from(this.dataMomenticIdToNodeMap.keys()))}async startTreeRefreshCronForRecording(e){if(await this.fetchA11yTreeForRecording(),e.aborted)return;let t,n=!1,o=0,r=0,i=async()=>{if(!(Date.now()-r<=1e3)&&!n){n=!0;try{await this.fetchA11yTreeForRecording(),o=0}catch(a){if(r=Date.now(),o++,o>=8||a.message.includes("crashed")){clearInterval(t),this.logger.error({err:a},"Fatal errors while refreshing a11y tree during recording, exiting...");return}}finally{n=!1}}};t=setInterval(()=>{!this.transformer||e.aborted||i()},Vn),e.addEventListener("abort",()=>{clearInterval(t),t=void 0})}async startRecording(e,t){this.logger.debug("Starting passive recording mode in Chrome browser"),await this.startTreeRefreshCronForRecording(e),this.transformer=t,e.addEventListener("abort",async()=>{this.transformer=void 0})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value),{timeout:1e3})}getActivePage(){return this.page}async waitForPageOrFrameLoad(e){let t=this.pageLoadTimeout;await e.waitForLoadState("domcontentloaded",{timeout:t});try{await e.waitForLoadState("load",{timeout:t})}catch(n){this.logger.warn({err:n},"Timeout elapsed waiting for current frame to load, continuing...")}this.recordUrlVisited(e.url())}async getCondensedHtml(){return this.wrapPageLoad(async()=>this.getCondensedHtmlHelper())}async getCondensedHtmlHelper(){await this.waitForDOMStability();let e=await this.getUserPageOrFrame();await Xe(e,this.logger);let{result:t,error:n}=await e.evaluate(()=>window.getCondensedHtmlTree(),{timeout:1e3});if(n)throw new Error(`Failed to process page HTML: ${n}`);if(!t)throw new W("InternalWebAgentError","Got empty HTML tree - are you sure the page is fully loaded?");return _i.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:100})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages(e,{percentX:t,percentY:n}){if(t<0||t>1||n<0||n>1)throw new W("InternalWebAgentError","Invalid percent passed to percentage location");let{width:o,height:r,upperBound:i,leftBound:a,devicePixelRatio:l}=await this.getViewportOffsetDetails(e),d=Math.round(i),h=Math.round(a),u=Math.ceil(o*t),m=Math.ceil(r*n);await this.cdpClient.send("DOM.getDocument",{depth:0});let f;try{f=await this.cdpClient.send("DOM.getNodeForLocation",{x:u+h,y:m+d})}catch(g){throw this.logger.error({err:g,pixelDeltaX:u,pixelDeltaY:m,leftBoundRounded:h,upperBoundRounded:d,devicePixelRatio:l},"Failed to get DOM node from position percents"),new Error("No element was found at the given location")}return f}async highlightFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n;try{n=await this.getDomNodeFromPositionPercentages(t,e)}catch{}return n?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:eo,backendNodeId:n.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:n?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n=await this.getDomNodeFromPositionPercentages(t,e),o=this.domGraph?.backendIdToNode[n.backendNodeId],r=o?.attributes[ae],i=parseInt(r??"");if(!o||!r||isNaN(i))throw new Error("No HTML node was found at the given location");let a=t.locator(`[${ae}="${r}"]`);for(let u of this.a11yIdToNodeMap.values()){if(u.backendNodeID!==n.backendNodeId)continue;let m={id:u.id,targetSource:"XY_PERCENT"};return await this.saveNodeDetailsToCache(t,u,m,parseInt(r),a),{target:m,locator:a}}let l=this.getDomCandidatesInA11yTree(`${r}`,this.domGraph);for(let u of l){let m=parseInt(u.attributes?.[ae]??"");if(isNaN(m))continue;let f=t.locator(`[${ae}="${m}"]`),g=this.dataMomenticIdToNodeMap.get(m),y=g?.id;if(!y)continue;let b={id:y,targetSource:"XY_PERCENT"};return await this.saveNodeDetailsToCache(t,g,b,parseInt(r),f),this.logger.debug({target:b},"Redirected click on non-accessible element to nearest a11y node"),{target:b,locator:f}}let d=await this.fetchHtmlAttributes(t,i);return{target:{id:-1,dataMomenticId:i,targetSource:"XY_PERCENT",...d},locator:a}}async fetchHtmlAttributes(e,t){let n=await e.evaluate(o=>{let r=window;return r.generateHtmlCacheAttributes?r.generateHtmlCacheAttributes(o):{warnings:[],error:"generateHtmlCacheAttributes is not defined"}},t);if("error"in n)throw new Error(n.error);if(n.attributes)n.warnings.length&&this.logger.warn(n,"Got warnings while generating HTML attributes for target");else return this.logger.warn(n,"Got no generated HTML attributes for target"),{};return this.logger.debug(n.attributes,"Generated HTML attributes for target"),n.attributes}async moveMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.move(a,l,{steps:3})}async clickMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.click(a,l,{button:"left"})}async scrollFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);return await this.page.mouse.wheel(a,l),{deltaX:a,deltaY:l}}canSolveCaptchas(){return!!ke}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames(),n=[];for(let r of t)if(!r.isDetached())try{let a=await(await r.frameElement()).evaluate(l=>"src"in l?l.getAttribute("src"):null);a&&a!=="about:blank"&&a!==e&&n.push(a)}catch(i){let a=i.message;["detached","browser has been closed"].some(l=>a.includes(l))||this.logger.debug({err:i},"Error fetching frame src url, continuing...")}return Array.from(new Set(n))}async setFileChooserHandler(e){setTimeout(()=>{try{e.cleanup()}catch(t){this.logger.debug({err:t,filePath:e.filePath},"Failed cleaning up file after upload")}},3e4),await this.setFileChooserHandlerHelper(e)}async setFileChooserHandlerHelper({filePath:e}){if(!Li(e)){this.logger.error({filePath:e},"File chooser triggered after the source file has been cleaned up, ignoring...");return}this.page.once("filechooser",async n=>{this.logger.debug({filePath:e},"File chooser triggered"),await n.setFiles(e,{timeout:8e3})});let t=Oi(e).toString("base64");await(await this.getUserPageOrFrame()).evaluate(({fileName:n,base64Data:o})=>{let r=window;r.MomenticFile=class{async getFile(){let i=atob(o),a=new Array(i.length);for(let h=0;h<i.length;h++)a[h]=i.charCodeAt(h);let l=new Uint8Array(a),d=new Blob([l]);return new File([d],n)}},r.showOpenFilePicker=async()=>[new r.MomenticFile]},{fileName:wo(e),base64Data:t})}getSerializedFormFromA11yId(e){return this.a11yIdToNodeMap.get(e)?.getNodeOnlySerializedForm()}get smartWaitingTimeout(){return this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3}get pageLoadTimeout(){return this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}};var Gi={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},$i=Gi;import{z as Ki}from"zod";import Vi from"fetch-retry";var qi=Vi(global.fetch),J=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await qi(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var nn=class extends J{constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${J.API_VERSION}/web-agent/recommend-chunks`,e);return Fn.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${J.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return Ki.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${J.API_VERSION}/web-agent/locate-element`,{...e,disableCache:t.disableCache});return Dn.parse(n)}async getAssertionResult(e,t){let n={...e,disableCache:!!t.disableCache},o=await this.sendRequest(`/${J.API_VERSION}/web-agent/assertion`,n);return Pn.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${J.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,screenshot:e.screenshot,disableCache:t.disableCache});return _n.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${J.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t.disableCache});return kn.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${J.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t.disableCache});return zn.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:!!t.disableCache},o=await this.sendRequest(`/${J.API_VERSION}/web-agent/text-extraction`,n);return Ut.parse(o)}async getTestResultClassification(e){let t=await this.sendRequest(`/${J.API_VERSION}/web-agent/result-classification`,e);return zt.parse(t)}async getExtractedKeywords(e,t){let n=await this.sendRequest(`/${J.API_VERSION}/web-agent/extract-keywords`,{goal:e,disableCache:t.disableCache});return Bn.parse(n)}};export{nn as APIGenerator,tn as ChromeBrowser,fe as CommandType,$i as DEFAULT_CONTROLLER_CONFIG,ne as StepType};
