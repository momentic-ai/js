import{v4 as Li}from"uuid";import*as d from"zod";import{z as M}from"zod";var qt=M.object({thoughts:M.string(),result:M.boolean(),relevantElements:M.array(M.number()).optional()}),st=(n=>(n.CONTAINS="CONTAINS",n.STARTS_WITH="STARTS_WITH",n.EQUALS="EQUALS",n))(st||{});var lo=M.object({type:M.literal("ELEMENT_CONTENT"),negated:M.boolean().optional(),operation:M.nativeEnum(st),value:M.string()}),co=M.object({type:M.literal("ELEMENT_ATTRIBUTE"),negated:M.boolean().optional(),operation:M.nativeEnum(st),attr:M.string(),value:M.string()}),lt=(o=>(o.EXISTS="EXISTS",o.VISIBLE="VISIBLE",o.ENABLED="ENABLED",o.EDITABLE="EDITABLE",o))(lt||{}),mo=M.object({type:M.literal("ELEMENT_EXISTENCE"),negated:M.boolean().optional(),condition:M.nativeEnum(lt)}),Xt=M.discriminatedUnion("type",[lo,co,mo]);var uo=M.object({type:M.literal("CONTENT"),negated:M.boolean().optional(),value:M.string()}),Yt=M.discriminatedUnion("type",[uo]);import*as v from"zod";var be=v.object({id:v.number().int(),dataMomenticId:v.number().int().optional(),selector:v.string().optional(),generatedSelectors:v.string().array().optional(),role:v.string().optional(),name:v.string().optional(),numChildren:v.number().optional(),content:v.string().optional(),pathFromRoot:v.string().optional(),serializedForm:v.string().optional(),nodeOnlySerializedForm:v.string().optional(),serializedHtml:v.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:v.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned."),screenshotUrl:v.string().url().optional(),boundingBox:v.object({x:v.number().optional(),y:v.number().optional(),width:v.number(),height:v.number()}).describe("css pixel bounding box").optional(),inputDescription:v.string().optional().describe("the description that generated this cache")});function Kt(s){return!!(s.name||s.role||s.content||s.serializedForm||s.serializedHtml||s.screenshotUrl)}var po=v.object({percentX:v.number().describe("between 0 and 1"),percentY:v.number()}),ho=v.object({type:v.literal("description"),elementDescriptor:v.string(),a11yData:be.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var B=v.discriminatedUnion("type",[ho,v.object({type:v.literal("coordinates"),percentXYLocation:po})]);var pe=(C=>(C.AI_EXTRACT="AI_EXTRACT",C.AI_ASSERTION="AI_ASSERTION",C.AI_WAIT="AI_WAIT",C.AUTH_LOAD="AUTH_LOAD",C.AUTH_SAVE="AUTH_SAVE",C.BLUR="BLUR",C.CAPTCHA="CAPTCHA",C.CLICK="CLICK",C.COOKIE="COOKIE",C.DIALOG="DIALOG",C.DRAG="DRAG",C.ELEMENT_CHECK="ELEMENT_CHECK",C.FILE_UPLOAD="FILE_UPLOAD",C.FOCUS="FOCUS",C.GO_BACK="GO_BACK",C.GO_FORWARD="GO_FORWARD",C.HOVER="HOVER",C.JAVASCRIPT="JAVASCRIPT",C.LOCAL_STORAGE="LOCAL_STORAGE",C.MOUSE_DRAG="MOUSE_DRAG",C.NAVIGATE="NAVIGATE",C.NEW_TAB="NEW_TAB",C.PAGE_CHECK="PAGE_CHECK",C.PRESS="PRESS",C.REFRESH="REFRESH",C.REQUEST="REQUEST",C.SCROLL_DOWN="SCROLL_DOWN",C.SCROLL_UP="SCROLL_UP",C.SCROLL_LEFT="SCROLL_LEFT",C.SCROLL_RIGHT="SCROLL_RIGHT",C.SELECT_OPTION="SELECT_OPTION",C.TAB="TAB",C.TYPE="TYPE",C.VISUAL_DIFF="VISUAL_DIFF",C.WAIT="WAIT",C.SUCCESS="SUCCESS",C))(pe||{}),T=d.object({thoughts:d.string().optional(),id:d.string().uuid().describe("unique identifier to this step, used for step cache")}),Z=d.object({useSelector:d.boolean().optional(),useXY:d.boolean().optional(),force:d.boolean().optional(),disableCache:d.boolean().optional().describe("disable element caching for this step"),iframeUrl:d.string().optional().describe("url or url regex for the iframe")}),re=d.object({target:be}).optional(),Ve=d.object({loadTimeout:d.number().int().max(60).optional().describe("Max seconds for the page to load"),networkTimeout:d.number().int().max(60).optional().describe("How many seconds to wait for network idle after navigation")}),go=T.merge(Ve).merge(d.object({type:d.literal("NAVIGATE"),url:d.string()})),$e=Z.merge(d.object({cache:re})),qe=T.merge($e.merge(d.object({target:B.optional(),type:d.literal("SCROLL_UP"),deltaY:d.number().optional()}))),Xe=T.merge($e.merge(d.object({target:B.optional(),type:d.literal("SCROLL_DOWN"),deltaY:d.number().optional()}))),Ye=T.merge($e.merge(d.object({target:B.optional(),type:d.literal("SCROLL_LEFT"),deltaX:d.number().optional()}))),Ke=T.merge($e.merge(d.object({target:B.optional(),type:d.literal("SCROLL_RIGHT"),deltaX:d.number().optional()}))),Di=d.discriminatedUnion("type",[qe,Xe,Ye,Ke]),fo=T.merge(d.object({type:d.literal("DIALOG"),action:d.union([d.literal("ACCEPT"),d.literal("DISMISS")])})),yo=T.merge(d.object({type:d.literal("WAIT"),delay:d.number()})),bo=T.merge(Ve).merge(d.object({type:d.literal("REFRESH")})),So=T.merge(d.object({type:d.literal("GO_BACK")})),wo=T.merge(d.object({type:d.literal("GO_FORWARD")})),Co=T.extend({type:d.literal("AUTH_SAVE")}),To=T.extend({type:d.literal("AUTH_LOAD"),storageState:d.string().describe("JSON string auth state")}),Jt=T.merge(Z).extend({type:d.literal("CAPTCHA")}),Eo=T.merge(d.object({type:d.literal("JAVASCRIPT"),code:d.string(),fragment:d.boolean().optional(),envKey:d.string().optional(),environment:d.union([d.literal("NODE"),d.literal("BROWSER")]).optional().describe("default NODE"),timeout:d.number().int().max(60).optional().describe("Max seconds for the code to complete")})),ct=T.merge(Z).merge(d.object({type:d.literal("CLICK"),target:B,doubleClick:d.boolean().optional(),rightClick:d.boolean().optional(),waitForUrl:d.string().optional().describe("call playwright waitForURL after click"),waitForDownload:d.boolean().optional().describe("wait for a download to occur and return the file downloaded"),cache:re})),dt=T.merge(Z).merge(d.object({type:d.literal("DRAG"),fromTarget:B,toTarget:B,hoverSeconds:d.number().optional().describe("Seconds to hover the object before dropping"),cache:d.object({fromTarget:be.optional(),toTarget:be.optional()}).optional()})),mt=T.merge(Z).merge(d.object({type:d.literal("MOUSE_DRAG"),target:B.optional(),deltaX:d.string().describe("pixels to move horizontally, can be template"),deltaY:d.string().describe("pixels to move vertically, can be template"),steps:d.number().optional(),cache:re})),ut=T.merge(Z).merge(d.object({type:d.literal("HOVER"),target:B,cache:re})),pt=T.merge(Z).merge(d.object({type:d.literal("FOCUS"),target:B,cache:re})),ht=T.merge(Z).merge(d.object({type:d.literal("BLUR"),target:B,cache:re})),vo=T.extend({type:d.literal("FILE_UPLOAD"),fileSource:d.discriminatedUnion("type",[d.object({type:d.literal("URL"),url:d.string()}).describe("Accessible link to the file, either public http or local file://")])}),gt=T.merge(Z).merge(d.object({type:d.literal("SELECT_OPTION"),target:B,option:d.string(),cache:re})),ft=T.merge(d.object({type:d.literal("AI_ASSERTION"),assertion:d.string(),disableCache:d.boolean().optional(),iframeUrl:d.string().optional()})),Ao=ft.merge(d.object({type:d.literal("AI_WAIT"),timeout:d.number().int().optional().describe("Max seconds to wait for assertion to be true")})),Qt=T.merge(Z).extend({type:d.literal("ELEMENT_CHECK"),target:B,assertion:Xt,cache:re}),xo=T.extend({type:d.literal("PAGE_CHECK"),assertion:Yt}),Ro=T.merge(d.object({type:d.literal("AI_EXTRACT"),goal:d.string(),schema:d.string().optional(),envKey:d.string().optional(),disableCache:d.boolean().optional(),iframeUrl:d.string().optional()})),Io=d.object({clearContent:d.boolean().optional(),pressKeysSequentially:d.boolean().optional(),force:d.boolean().optional()}),yt=T.merge(Z).merge(Io).extend({type:d.literal("TYPE"),target:B.optional(),value:d.string(),pressEnter:d.boolean().optional(),cache:re}),No=T.merge(d.object({type:d.literal("PRESS"),value:d.string()})),Mo=T.merge(Ve).merge(d.object({type:d.literal("TAB"),url:d.string()})),Oo=T.merge(Ve).merge(d.object({type:d.literal("NEW_TAB"),url:d.string()})),Lo=T.merge(d.object({type:d.literal("COOKIE"),value:d.string()})),_o=T.merge(d.object({type:d.literal("LOCAL_STORAGE"),key:d.string(),value:d.string()})),Po=T.merge(d.object({type:d.literal("REQUEST"),url:d.string(),method:d.union([d.literal("GET"),d.literal("POST"),d.literal("PUT"),d.literal("DELETE"),d.literal("PATCH")]),headers:d.record(d.string(),d.string()).optional(),params:d.record(d.string(),d.string()).optional(),body:d.string().optional(),timeout:d.number().int().optional().describe("Max seconds to wait for the request to complete")})),Do=T.merge(d.object({type:d.literal("SUCCESS"),condition:ft.optional()})),ko=T.merge(d.object({type:d.literal("FAILURE")})),zo=d.object({data:d.string().describe("s3 url to a jpg"),width:d.number(),height:d.number()}),bt=T.merge(Z).merge(d.object({type:d.literal("VISUAL_DIFF"),threshold:d.number().optional().describe("default 0.1"),target:B.optional(),screenshot:zo.optional(),cache:re})),Je=d.discriminatedUnion("type",[ct,yt,No,gt,go,Xe,qe,ft,Ao,Do]),Fo=d.discriminatedUnion("type",[Ro,To,Co,Jt,Lo,fo,dt,Qt,vo,So,wo,ut,Eo,_o,mt,Oo,xo,bo,Po,Ye,Ke,Mo,bt,yo,pt,ht]),St=d.discriminatedUnion("type",[...Je.options,...Fo.options]),wt=d.discriminatedUnion("type",[...Je.options,ko]);var $={type:!0,cache:!0},Ct=d.discriminatedUnion("type",[ht.pick($),ct.pick($),dt.pick($),Qt.pick($),pt.pick($),ut.pick($),mt.pick($),qe.pick($),Xe.pick($),Ye.pick($),Ke.pick($),gt.pick($),yt.pick($),bt.pick($)]),Uo=Object.values(pe).filter(s=>Ct.options.some(e=>e.shape.type.safeParse(s).success));St.options.forEach(s=>{if("target"in s.shape&&!Uo.includes(s.shape.type.value))throw new Error(`Command ${s.shape.type.value} has a target but no cache`)});var ki=d.discriminatedUnion("type",[ht,Jt,ct,dt,pt,ut,mt,qe,Xe,Ye,Ke,gt,yt,bt]);import{z as en}from"zod";import{z as Zt}from"zod";import{z as Tt}from"zod";var ee=Tt.object({index:Tt.number().optional().describe("global index"),skipped:Tt.boolean().optional()});var te=(i=>(i.PRESET_ACTION="PRESET_ACTION",i.MODULE="MODULE",i.AI_ACTION="AI_ACTION",i.CONDITIONAL="CONDITIONAL",i.IFRAME="IFRAME",i.SECTION="SECTION",i))(te||{});var ie=ee.extend({type:Zt.literal("PRESET_ACTION"),command:St,skipped:Zt.boolean().optional()});var Ne=ee.extend({type:en.literal("AI_ACTION"),text:en.string(),steps:ie.array().optional()});import{z as H}from"zod";var Bo=H.object({cacheKey:H.string(),cacheExpiryMs:H.number()}),Et=ee.extend({id:H.string().uuid().describe("ID of the module step itself. Used to 'namespace' step cache entries."),inputs:H.record(H.string()).optional(),cacheConfig:Bo.optional()}),Me=Et.extend({type:H.literal("MODULE"),moduleId:H.string().uuid()}),Wo=H.union([Me.pick({type:!0,moduleId:!0}),H.record(H.unknown())]),Oe=H.object({moduleId:H.string().uuid(),name:H.string(),parameters:H.string().array().nullish()});import{z as D}from"zod";import{z as tn}from"zod";var ke=ee.extend({type:tn.literal("CONDITIONAL"),skipped:tn.boolean().optional()});import{z as ne}from"zod";var Ho=ne.object({type:ne.literal("attr"),name:ne.string(),value:ne.string()}),jo=ne.object({type:ne.literal("css"),selector:ne.string()}),Go=ne.object({type:ne.literal("url"),url:ne.string()}),Vo=ne.union([Ho,Go,jo]),ze=ee.extend({type:ne.literal("IFRAME"),identifier:Vo});import{z as nn}from"zod";var Fe=ee.extend({type:nn.literal("SECTION"),description:nn.string()});var on=Oe.merge(Et).extend({type:D.literal("RESOLVED_MODULE"),steps:D.lazy(()=>K.array())}),vt=Oe.extend({steps:D.lazy(()=>K.array())}),$o=ze.extend({steps:D.lazy(()=>Se.array())}),qo=ze.extend({steps:D.lazy(()=>K.array())}),Xo=Fe.extend({steps:D.lazy(()=>Se.array())}),Yo=Fe.extend({steps:D.lazy(()=>K.array())}),Ko=ke.extend({blocks:D.object({assertion:D.lazy(()=>ie),steps:D.lazy(()=>Se.array())}).array(),elseSteps:D.lazy(()=>Se.array().optional())}),Jo=ke.extend({blocks:D.object({assertion:D.lazy(()=>ie),steps:D.lazy(()=>K.array())}).array(),elseSteps:D.lazy(()=>K.array().optional())}),Se=D.discriminatedUnion("type",[ie,Ne,Me,Ko,$o,Xo]),K=D.discriminatedUnion("type",[ie,Ne,on,Jo,qo,Yo]);import{z as we}from"zod";var At=we.object({key:we.string(),testId:we.string().optional(),moduleId:we.string().optional(),organizationId:we.string(),value:Ct}),Qo=we.record(we.string(),At);var Ue={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&F(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&F(t,n,e[n]);return t};var g=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(I=>Object.assign(I,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,I]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&I!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var H=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[MOMENTIC] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=H;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
  var _a, _b, _c, _d;
  const customWindow = window;
  const result = {};
  const ele = (_a = customWindow.findElementInBodyOrShadowDom) == null ? void 0 : _a.call(customWindow, dataMomenticId);
  if (!ele) {
    console.error(
      \`[MOMENTIC] Could not find element with data-momentic-id: \${dataMomenticId}\`
    );
    return result;
  }
  try {
    result.generatedSelectors = (_b = customWindow.generateCssSelectors) == null ? void 0 : _b.call(customWindow, dataMomenticId);
  } catch (err) {
    console.error(\`[MOMENTIC] Error generating CSS selectors: \${err}\`);
  }
  result.serializedHtml = (_c = customWindow.serializeElementWithContext) == null ? void 0 : _c.call(customWindow, ele);
  result.nodeOnlySerializedHtml = (_d = customWindow.serializeElementOnlyWithText) == null ? void 0 : _d.call(customWindow, ele);
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
  const customWindow = window;
  const ele = document.querySelector(\`[data-momentic-id="\${dataMomenticId}"]\`);
  if (!ele) {
    console.error(
      \`[MOMENTIC] Could not find element with data-momentic-id: \${dataMomenticId}\`
    );
    return [];
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
      console.error(
        \`[MOMENTIC] Error generating selectors with CssSelectorGenerator: \${err}\`
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
    console.error(
      \`[MOMENTIC] Error generating selectors with CssSelectorGenerator: \${err}\`
    );
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
function trimElementAttributes(element) {
  var _a;
  const maxAttrValLength = 100;
  const customWindow = window;
  const attrNames = element.getAttributeNames();
  for (const attr of attrNames) {
    let attrVal = element.getAttribute(attr);
    if (!attrVal) {
      continue;
    }
    if (attrVal.length > maxAttrValLength) {
      attrVal = attrVal.slice(0, maxAttrValLength) + "...";
    }
    switch (attr) {
      case "class": {
        const firstClass = attrVal.split(" ")[0];
        if (!checkIsNameAutogenerated(firstClass)) {
          element.setAttribute("class", firstClass);
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
      case "value": {
        if (element.getAttribute("type") === "text" || !element.getAttribute("type")) {
          element.removeAttribute("value");
          break;
        }
      }
      default: {
        if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.relevantElementAttributes.includes(
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
  (_a = customWindow.trimElementAttributes) == null ? void 0 : _a.call(customWindow, elementNode);
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

// src/html/page-serialization.ts
function processClassAttribute(attr, classNameCounts) {
  var _a;
  const customWindow = window;
  if (!((_a = customWindow.momenticConstants) == null ? void 0 : _a.bannedClassSubstrings)) {
    console.error(
      "[MOMENTIC] Missing global Momentic constants in processClassAttribute"
    );
    return "";
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
    console.error(
      "[MOMENTIC] Missing global Momentic constants in shouldFilterNode"
    );
    return false;
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
    console.error(
      "[MOMENTIC] Missing global Momentic constants in processElementNode"
    );
    return node;
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
    console.error(
      "[MOMENTIC] This page contains no elements. Are you sure the page is loaded completely?"
    );
    return "";
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
    console.error(
      "[MOMENTIC] This page contains no elements. Are you sure the page is loaded completely?"
    );
    return "";
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
        console.error(
          "[MOMENTIC] Missing generateHtmlCacheAttributes function"
        );
        return void 0;
      }
      const dataMomenticId = parseInt(momenticId);
      const htmlAttributes = customWindow.generateHtmlCacheAttributes(dataMomenticId);
      return {
        dataMomenticId,
        htmlAttributes,
        metadata: reason ? { reason } : void 0
      };
    };
    const originalMomenticId = element.getAttribute("data-momentic-id");
    if (!originalMomenticId) {
      console.warn(
        \`[MOMENTIC] Ignoring target click on element does not have a data-momentic-id attribute: \${element.outerHTML}\`
      );
      return void 0;
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
    if (!customWindow2.captureElementEvent) {
      return;
    }
    if (!customWindow2.generateHtmlCacheAttributes || !customWindow2.resolveRecordingTarget) {
      console.warn("[MOMENTIC] Missing Momentic recording libraries");
      return;
    }
    console.debug("[MOMENTIC] Window click listener fired");
    const element = event.target;
    if (element.tagName.toLowerCase() === "select") {
      console.log("[MOMENTIC] Ignoring click on select element");
      return;
    }
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === "select") {
        console.log("[MOMENTIC] Ignoring click on child of select element");
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
    if (!recordingTarget) {
      return;
    }
    customWindow2.captureElementEvent(__spreadValues({
      type: "CLICK"
    }, recordingTarget));
  };
  document.addEventListener("click", customWindow.clickListener, {
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

// src/html/index.ts
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
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as li}from"crypto";import{distance as ci}from"fastest-levenshtein";import{readFileSync as di,rmSync as ro}from"fs";import mi from"js-beautify";import{homedir as ui}from"os";import it from"p-timeout";import{basename as io,join as so}from"path";import{chromium as pi,devices as ao}from"playwright";import{errors as hi}from"playwright";import{addExtra as gi}from"playwright-extra";import fi from"puppeteer-extra-plugin-recaptcha";import yi from"sharp";import as from"string-argv";import{v4 as ls}from"uuid";import{z}from"zod";import{z as Le}from"zod";var de=(a=>(a.AI_PROVIDER="AIProviderError",a.JOB_TIMEOUT="JobTimeoutError",a.ACTION_FAILURE="ActionFailureError",a.ASSERTION_FAILURE="AssertionFailureError",a.CONFIG_ERROR="UserConfigurationError",a.WEB_AGENT_PLATFORM="InternalWebAgentError",a.UNKNOWN_PLATFORM="InternalPlatformError",a))(de||{});var xt=Le.object({reason:Le.nativeEnum(de),summary:Le.string()}),rn=Le.object({errorMessage:Le.string(),errorStack:Le.string().optional(),classification:xt.optional()});var k=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let i of Object.values(de))if(t.startsWith(i)){r=!0,e=i;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}};var us=z.object({command:z.string(),thoughts:z.string()}),ps=z.string().pipe(z.coerce.number());var an=z.object({phrase:z.string()}),Rt=z.object({result:z.union([z.literal("NOT_FOUND"),z.string(),z.number(),z.array(z.unknown()),z.record(z.unknown(),z.unknown())])});import{z as It}from"zod";var Qe=It.object({width:It.number().min(200).max(1e4),height:It.number().min(200).max(1e4)}),sn={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},fs=Object.keys(sn);var Be=sn["Desktop Large"];var Cs=new Set(Object.values(pe));var er={AI_ACTION:"AI action",RESOLVED_MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",AUTH_LOAD:"Load auth state",AUTH_SAVE:"Save auth state",ELEMENT_CHECK:"Element check",PAGE_CHECK:"Page check",SUCCESS:"Done"},Ts={AI_ACTION:"Ask AI to plan and execute something on the page.",RESOLVED_MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from an HTML Select <select> element based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",AUTH_LOAD:"Load auth state (cookies, local storage) from the JavaScript object format returned by 'Save auth state' and then refresh the page.",AUTH_SAVE:"Save auth state (cookies, local storage) into a JavaScript object format usable by 'Load auth state'.",ELEMENT_CHECK:"Assert on an element's state using pre-built conditions, including content, visibility, attribute value checks.",PAGE_CHECK:"Assert on the active page's state using pre-built conditions, including URL and content checks.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import{z as R}from"zod";var As=R.object({body:R.string(),to:R.string(),from:R.string()}),xs=R.object({from:R.string().optional(),to:R.string().optional(),timeout:R.number().optional(),beforeDate:R.string().pipe(R.coerce.date()).or(R.date()).optional(),afterDate:R.string().pipe(R.coerce.date()).or(R.date()).optional()}),Rs=R.object({inbox:R.string(),afterDate:R.string().pipe(R.coerce.date()).or(R.date()).optional(),timeout:R.number().optional(),trimWhitespace:R.boolean().optional()});var Is=R.object({result:R.unknown(),variableUpdates:R.record(R.string(),R.unknown()).optional(),error:R.string().optional(),success:R.boolean()});import*as w from"zod";import{cloneDeep as Us}from"lodash-es";import*as L from"zod";import{z as _e}from"zod";var ln="BASE_URL";var Os={[ln]:"https://www.google.com"},cn=_e.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),We=_e.object({name:_e.string(),variables:_e.record(_e.string().describe("variable name"),_e.string().describe("variable value"))});import*as Ce from"zod";var dn=Ce.object({type:Ce.nativeEnum(te),generatedStep:Je.optional(),serializedCommand:Ce.string().optional(),elementInteracted:Ce.string().optional()});var he=L.object({goal:L.string(),url:L.string(),browserState:L.string(),history:L.string(),numPrevious:L.number(),lastCommand:dn.or(L.null()),returnSchema:L.string().optional()}),Nt=L.object({env:L.record(L.unknown()),results:L.array(L.unknown()),inputs:L.record(L.unknown()).optional()});var Hs=Object.getPrototypeOf(async function(){}).constructor;var mn=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(mn||{}),un=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(un||{}),tr=w.object({beforeUrl:w.string(),beforeScreenshot:w.string().optional(),afterUrl:w.string().optional(),afterScreenshot:w.string().optional(),startedAt:w.coerce.date(),finishedAt:w.coerce.date(),viewport:w.object({height:w.number(),width:w.number()}),status:w.nativeEnum(un),message:w.string().optional(),elementInteracted:w.string().optional()}),Te=w.object({startedAt:w.coerce.date(),finishedAt:w.coerce.date(),status:w.nativeEnum(mn),message:w.string().optional(),data:w.unknown().optional(),beforeTestContext:Nt.optional(),afterTestContext:Nt.optional(),failureReason:w.nativeEnum(de).optional()}),Mt=Te.merge(ie).extend({results:tr.array()}),nr=Te.merge(Ne).extend({results:w.lazy(()=>Mt.array())}),or=Te.merge(Me).extend({moduleName:w.string().optional(),results:w.lazy(()=>Ee.array())}),rr=Te.merge(ke).extend({assertion:Mt.optional(),results:w.lazy(()=>Ee.array()).describe("results for the block actually executed")}),ir=Te.merge(ze).extend({results:w.lazy(()=>Ee.array())}),ar=Te.merge(Fe).extend({results:w.lazy(()=>Ee.array())}),Ee=w.discriminatedUnion("type",[nr,Mt,or,rr,ir,ar]),Zs=Te.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0}),el=w.object({results:Ee.array(),errorMessage:w.string(),errorStack:w.string().optional()});import{parseString as sr,splitCookiesString as lr}from"set-cookie-parser";import{z as J}from"zod";var cr=J.object({name:J.string(),value:J.string(),url:J.string().optional(),domain:J.string().optional(),path:J.string().optional(),expires:J.number().default(Date.now()/1e3+60*60*24*365),httpOnly:J.boolean().optional(),secure:J.boolean().default(!0),sameSite:J.union([J.literal("Strict"),J.literal("Lax"),J.literal("None")]).default("None")});function pn(s){let e=[],t=lr(s);for(let n of t){let o=sr(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let c=o.sameSite.trim().toLowerCase();if(c==="strict")r="Strict";else if(c==="lax")r="Lax";else if(c==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${c}`)}o.httpOnly===void 0&&(o.httpOnly=!1),!o.path&&o.domain&&(o.path="/");let i=cr.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(i);let a=[i.name,...Object.keys(i)].map(c=>c.toLowerCase()),l=n.match(/\b(\w+)=([^;]*)/g);if(l)for(let c of l){let[m,u]=c.split("=");if(!m||!u)throw new Error(`Invalid key-value pair in cookie: ${c}`);a.includes(m.toLowerCase())||e.push({...i,name:m,value:u})}}return e}import{z as me}from"zod";var al=me.object({x:me.number(),y:me.number(),correlation:me.number()}),sl=me.object({searchImageBase64String:me.string(),pageImageBase64String:me.string(),id:me.string().uuid(),timeoutMs:me.number().max(1e4).min(0).optional()});import{z as q}from"zod";var dr=q.object({orgId:q.string(),cacheKeys:q.string().array()}),dl=q.object({keyParams:dr,clientMetadata:q.string(),lockAcquisitionTimeoutMs:q.number().optional()}),ml=q.object({acquired:q.boolean(),acquiredByMetadata:q.string(),keyPrefix:q.string()}),ul=q.object({keyPrefix:q.string(),result:q.string(),ttlMs:q.number()});import{z as oe}from"zod";import{z as X}from"zod";import{z as x}from"zod";var mr="modules",ur="fixtures",pr="environments",hr="chromium",hn=[mr,ur,pr,hr];import{isValidCron as gr}from"cron-validator";import{z as F}from"zod";var fr=F.object({pageLoadTimeoutMs:F.number().max(6e4).min(1e3).optional(),smartWaitingTimeoutMs:F.number().max(1e4).min(0).optional(),extraHeaders:F.record(F.string(),F.string()).optional().describe("HTTP headers to be sent on every request")}),Ze=fr.merge(F.object({disableAICaching:F.boolean().default(!1),viewport:Qe.optional()})),gn=F.object({cron:F.string().refine(s=>gr(s),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:F.boolean().default(!1),env:F.string().optional(),timeZone:F.string().default("America/Los_Angeles"),jobKey:F.string().optional()}),fn=F.object({onSuccess:F.boolean().default(!1),onFailure:F.boolean().default(!0)});var yr=x.string().min(1).max(255).superRefine((s,e)=>{try{wr(s)}catch(t){return e.addIssue({code:x.ZodIssueCode.custom,message:t.message,fatal:!0}),x.NEVER}}),br=x.object({name:x.string(),default:x.boolean().optional(),defaultOnLocal:x.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:x.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:cn.array().optional()}),ge=x.object({id:x.string(),name:yr,baseUrl:x.preprocess(s=>s===null?"":s,x.union([x.string().url(),x.literal("")])).optional(),schemaVersion:x.string(),advanced:Ze,retries:x.number(),envs:x.array(br).optional()}),Al=ge.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),yn=x.object({createdAt:x.coerce.date(),updatedAt:x.coerce.date(),schedule:gn,notification:fn,createdBy:x.string(),organizationId:x.string()}),xl=ge.merge(yn),Rl=ge.merge(yn).merge(x.object({steps:x.array(K)})),Ot=ge.merge(x.object({steps:x.array(K)})),Il=ge.extend({steps:x.record(x.string(),x.unknown()).array()}),Sr=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function wr(s){if(s=s.toLowerCase().trim(),s.length===0||s.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(s))throw new Error('Name contains one of the following invalid characters: <>:"/\\|?*');if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(s))throw new Error(`"${s}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(s)||/^\s|\s$/.test(s))throw new Error("Name cannot start or end with a space or dot.");if(s.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(s==="none")throw new Error("Name cannot be 'none'.");if(hn.includes(s))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(s.match(Sr))throw new Error("Name cannot be a UUID. Please choose a different name.")}var Dl=Oe.extend({steps:X.array(X.record(X.string(),X.unknown())),schemaVersion:X.string()}),kl=ge.extend({steps:X.array(X.record(X.string(),X.unknown()))}),zl=X.object({test:X.string().describe("YAML for the test, including metadata and steps"),modules:X.record(X.string(),X.string()).describe("Map of module name to YAML for the module")});var Cr="1.0.0",bn=oe.object({run:oe.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:oe.boolean().optional().describe("Defaults to true")}),Hl=oe.object({type:oe.literal("momentic/fixture"),schemaVersion:oe.string(),name:oe.string(),description:oe.string().optional(),setup:oe.object({steps:bn.array(),timeout:oe.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:oe.object({steps:bn.array(),timeout:oe.number().optional().describe("Timeout for all steps in seconds")}).optional()}),jl={type:"momentic/fixture",schemaVersion:Cr,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as Tr}from"zod";var $l=Tr.string().array();import{z as N}from"zod";var tc=N.array(N.object({id:N.string(),name:N.string(),fullFilePath:N.string(),testPath:N.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:N.string(),lastModified:N.coerce.date(),createdAt:N.coerce.date()}));var nc=N.object({steps:K.array()});var oc=N.object({name:N.string(),baseUrl:N.string().url().optional(),environment:N.string().optional(),viewport:Qe.optional()}),rc=Ot.merge(N.object({testPath:N.string()})),ic=N.object({name:N.string(),steps:N.lazy(()=>K.array())});var ac=vt.array(),sc=N.array(N.object({name:N.string(),moduleId:N.string().uuid(),numSteps:N.number()})),lc=N.array(We),cc=N.object({defaultEnv:N.string().optional().describe("name of the default env, or undefined to unset")});import*as U from"zod";var Sn=U.object({thoughts:U.string(),id:U.number().int(),conflicts:U.number().int().array().optional()});var pc=U.object({thoughts:U.string().optional().describe("only provided if a description was provided"),target:be.optional().describe("only provided if a description was provided"),conflictingElements:U.string().array().optional().describe("serialized html of conflicting elements"),options:U.array(U.string()).optional().describe("provided for <select> elements only"),screenshot:U.object({data:U.string(),height:U.number().int(),width:U.number().int()}).optional().describe("only provided if returnScreenshot is true")});var Er={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},vr={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},Lt=class s{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=Er[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=vr[e],i=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&i.push("\x1B[39m"),i.push(...t),console.log(...i),o&&!Array.isArray(o))for(let[a,l]of Object.entries(o)){let c=l;l instanceof Error?c=l.message:typeof l=="object"&&(c=JSON.stringify(l,void 0,2),c=c.split(`
`).map((m,u)=>u>0?`  ${m}`:m).join(`
`)),console.log(e===0?`${r}  ${a}:`:`  ${a}:`,c)}else if(o)for(let a of o){let l=a;typeof a=="object"&&(l=JSON.stringify(a,void 0,2),l=l.split(`
`).map((c,m)=>m>0?`  ${c}`:c).join(`
`)),console.log(e===0?`${r}  `:"  ",l)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new s(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},gc=new Lt(1,{}),_t={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>_t,flush:()=>{},bindings:()=>({})},et={},ve=({logger:s,logKey:e,maxCount:t,intervalMs:n},o,r,...i)=>{let a=et[e];a?clearTimeout(a.timer):(a={count:0,totalCount:0},et[e]=a),a.totalCount++,a.count<t&&(a.count++,s.debug(o,r,...i)),a.timer=setTimeout(()=>{let l=et[e];l?.totalCount!==l?.count&&s.debug({logKey:e,totalCount:l?.totalCount,count:l?.count},`Debug logs were rate-limited for ${e}`),delete et[e]},n)};import{z as ae}from"zod";var Ar=ae.object({id:ae.string(),createdAt:ae.coerce.date(),createdBy:ae.string(),organizationId:ae.string(),name:ae.string(),schemaVersion:ae.string().describe("Schema version for steps"),parameters:ae.string().array().nullish().describe("Parameter list"),numSteps:ae.number()}),Ec=Ar.omit({numSteps:!0}).extend({steps:ae.lazy(()=>Se.array())}),vc=5*60*1e3;import*as p from"zod";import{z as E}from"zod";var He={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Pt={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED",RETRYING:"RETRYING",WAITING_FOR_USER:"WAITING_FOR_USER"},xr={PASSED:"PASSED",FAILED:"FAILED"},fe=E.string().pipe(E.coerce.date()).or(E.date()),Dt=E.object({id:E.string(),runKey:E.string(),organizationId:E.string(),createdAt:fe,createdBy:E.string(),scheduledAt:fe.or(E.null()),startedAt:fe.or(E.null()),finishedAt:fe.or(E.null()),status:E.nativeEnum(Pt),expectedStatus:E.nativeEnum(xr).or(E.null()),trigger:E.nativeEnum(He),attempts:E.number(),failureReason:E.nativeEnum(de).nullish(),failureDetails:rn.nullish(),testId:E.string().or(E.null()),testName:E.string().or(E.null()).optional(),test:E.object({name:E.string(),id:E.string()}).or(E.null()),suiteId:E.string().or(E.null()).optional()}),kt=Dt.merge(E.object({results:Ee.array(),test:E.object({name:E.string(),id:E.string(),baseUrl:E.string(),advanced:Ze.optional()}).or(E.null())})),Lc=E.object({id:E.string(),name:E.string()});var Ae=p.object({disableCache:p.boolean()}),jc=p.object({error:p.boolean(),reason:p.string(),message:p.string()}),Gc=he.merge(Ae),wn=wt,Vc=he.merge(Ae).merge(p.object({screenshot:p.string().optional()})),Cn=qt,$c=he.pick({browserState:!0,goal:!0}).merge(Ae).merge(p.object({screenshot:p.string().optional()})),qc=he.pick({goal:!0}).merge(Ae).merge(p.object({screenshot:p.string().describe("base64 encoded image"),hintActivatedScreenshot:p.string().describe("base64 encoded image")})),Tn=Sn,Xc=he.pick({goal:!0,url:!0}).merge(Ae),En=p.string().array(),Yc=he.pick({goal:!0,browserState:!0}).merge(Ae),vn=an,Kc=he.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(Ae);var Jc=p.object({testPaths:p.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:p.string().optional(),all:p.boolean().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),Qc=p.object({message:p.string(),queuedTests:p.object({name:p.string(),id:p.string()}).array(),runIds:p.string().uuid().array()});var Zc=p.string().array(),ed=p.union([p.object({paths:p.string().array().describe("run specific test paths (e.g. todo-test)"),all:p.boolean().describe("run all tests").optional()}),p.object({path:p.string().describe("deprecated; present for backcompat")})]),td=p.object({tests:p.record(p.string().describe("Test name"),p.string().describe("Test YAML")),modules:p.record(p.string().describe("Module name"),p.string().describe("Module YAML"))}),Rr=p.object({test:p.string().describe("test YAML"),modules:p.record(p.string().describe("moduleId"),p.string().describe("module YAML"))}),nd=Rr.array(),od=p.object({testId:p.string(),schemaVersion:p.string(),steps:p.array(p.record(p.unknown()))}),rd=p.object({entries:p.array(At),testId:p.string()}),id=p.object({steps:p.array(p.record(p.unknown())),testId:p.string(),schemaVersion:p.string(),organizationId:p.string()});var ad=p.object({testPath:p.string(),testId:p.string(),testName:p.string()}).partial().merge(p.object({trigger:p.nativeEnum(He)}));var Ir=kt.pick({id:!0,status:!0,testName:!0,testId:!0,test:!0,failureReason:!0,failureDetails:!0}),sd=Ir.array(),ld=kt.pick({startedAt:!0,finishedAt:!0,results:!0,status:!0,failureDetails:!0,failureReason:!0}).partial(),cd=p.object({screenshot:p.string()}),dd=p.object({key:p.string()}),md=p.object({orgId:p.string()}),ud=p.array(We),pd=p.array(We),hd=p.record(p.string(),p.union([p.string(),p.boolean()])),gd=p.object({paths:p.string().array(),env:p.string().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),fd=p.object({suiteRunIds:p.string().array()});import{z as j}from"zod";var Nr=j.object({content:j.string(),ids:j.string().array(),tokenLength:j.number()}),Mr=j.object({chunks:Nr.array(),numRecs:j.number()}),Sd=j.object({ids:j.string().array(),score:j.number(),tokenLength:j.number()}),wd=j.object({description:j.string(),tokenLimit:j.number()}).merge(Mr),An=j.object({ids:j.number().array()});import{z as se}from"zod";var Ad=se.object({id:se.string().uuid(),orgId:se.string(),createdAt:fe,startedAt:fe.or(se.null()),finishedAt:fe.or(se.null()),status:se.nativeEnum(Pt),trigger:se.nativeEnum(He),suite:se.object({id:se.string(),name:se.string()}),runs:Dt.array()});import{validator as Od}from"@exodus/schemasafe";import{v4 as bi}from"uuid";var xn=(s,e)=>{try{let{hostname:t,pathname:n}=new URL(s),{hostname:o,pathname:r}=new URL(e);return t!==o||n!==r}catch{return!1}};var Rn=s=>!s.toLowerCase().startsWith("http");function je(s,e){try{return!!new URL(s).origin.trim()}catch(t){return e?.error({url:s,err:t},"Invalid URL in check"),!1}}var In={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts"],relevantElementAttributes:["name","id","value","type","class","height","width","target","title","href","src","alt","role","headers","scope","checked","required","action","min","max","minlength","maxlength","multiple","pattern","placeholder","accept","data-value","data-testid","data-cy","data-test-id","data-test","data-role","data-type","data-action","data-aria-hidden","data-hidden","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function Nn(s){if(s[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(s.length>10){let l=Math.floor(s.length/8);if((s.match(/[-_:/ ]/g)??[]).length<l)return!0}if((s.match(/[^0-9a-zA-Z.]/g)??[]).length/s.length>.2)return!0;let t=(s.match(/[0-9]/g)??[]).length;if(t/s.length>.3)return!0;let n=(s.toLowerCase().match(/[aeiou]/gi)??[]).length;if((s.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=(s.match(/[A-Z]/g)??[]).length,i=(s.match(/[a-z]/g)??[]).length,a=Math.ceil(s.length*.3);return!!(i&&t&&Math.abs(i-t)<a||i&&r&&Math.abs(i-r)<a)}import{randomUUID as Pn}from"crypto";import{distance as Ft}from"fastest-levenshtein";import{cloneDeep as Dn}from"lodash-es";import Or from"p-timeout";var Mn=new Set(["about:blank","chrome-error://chromewebdata/"]),On=3,le="data-momentic-id",Ln=500,zt=["button","image","generic","graphics-symbol","tab","link","menuitem","group"];var Lr=["focusable","keyshortcuts","controls","live","relevant","orientation"],_r=["selected","readonly","modal","required","invalid"],Pr=["id","name","role","content"],Dr=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","image","svgroot","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],kr=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree","activeAriaModalDialog"],zr=["menulistpopup","statictext","inlinetextbox"],Fr=80,tt=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],Ur=["cite"],Br={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"],separator:["hr"]},kn={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},Ut=class s{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;domNode;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){this.domNode=e.domNode,this.tagName=e.domNode.tagName||void 0;let t=e.domNode.attributes.id;this.name=this.name||e.domNode.attributes.name||(t&&!Nn(t)?t:""),this.role=this.role||(e.domNode.attributes.role??""),Vr(this.properties,e.domNode)}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return Dr.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=kn){let t=Object.assign({},kn,e),{indentLevel:n,noChildren:o,noProperties:r,noID:i,noContent:a}=t,l=Dn(this.properties),c=" ".repeat(n),m=this.role||"",u=this.tagName??"unknown",h=this.name;m==="heading"&&h==="heading"&&(h="");let y=tt.includes(this.role)||Ur.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${c}${h}
`;let g=`${c}<${u}`;if(!i&&!y&&(g+=` id="${this.id}"`),m&&m!=="generic"&&m!==u&&!(Br[m]??[]).includes(u)&&(g+=` role=${JSON.stringify(m)}`),h&&(g+=` name=${JSON.stringify(h)}`),this.content&&!a&&(g+=` content=${JSON.stringify(this.content)}`),Object.keys(l).length>0&&!r&&Object.entries(l).forEach(([b,A])=>{if(!Lr.includes(b)){if(_r.includes(b)&&(!A||A==="false"))return;if(b==="value"&&a&&(l.type==="text"||this.role==="textbox"))return;if(b==="type"&&A===u)return;typeof A=="string"?g+=` ${b}="${A}"`:typeof A=="boolean"?A?g+=` ${b}`:g+=` ${b}={false}`:typeof A<"u"&&(g+=` ${b}={${JSON.stringify(A)}}`)}}),u==="::before"||u==="::after"){let b="";for(let A of this.children)b+=A.serialize({...e,indentLevel:n,neighbors:0});return b}let f=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||f)g+=` />
`;else{let b="";for(let S of this.children)b+=S.serialize({...e,indentLevel:n+2,neighbors:0});let A=b.trim();A.length<=Fr&&!A.includes(`
`)?g+=`>${A}</${u}>
`:g+=`>
${b}${c}</${u}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let b=this.parent.children.findIndex(I=>I.id===this.id),A=b>0?this.parent.children[b-1]?.serialize({...e,neighbors:0}):"",S=b<this.parent.children.length-1?this.parent.children[b+1]?.serialize({...e,neighbors:0}):"";return`${A||""}
${g}
${S||""}`}return g}shallowClone(){let e=new s({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=Dn(this.properties),e}},Bt=class s{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,i=!1){let a=e.has(r.id)||r.id===t?.id,l=r.shallowClone(),c=r.children,m=!1,u=[];for(let h of c){let y=n(h,a||m);y&&(u.push(y),y.parent=l,m=!0)}if(l.children=u,a||m)return l;if(tt.includes(r.role)&&i)return l}let o=n(t);return new s(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function Wr(s){return s.name?.value?`"${s.name.value}"`:s.role?.value&&s.role.value!=="none"&&s.role.value!=="generic"?`"${s.role.value}"`:`"${s.nodeId}"`}function Hr(s,e,t,n){return s.bounds.x===null||s.bounds.y===null||s.bounds.height===null||s.bounds.width===null||s.bounds.width===0||s.bounds.height===0?!0:s.bounds.x+s.bounds.width<e.leftBound||s.bounds.x>e.rightBound?(ve({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):s.bounds.y+s.bounds.height<e.upperBound||s.bounds.y>e.lowerBound?(ve({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):s.computedStyles.display==="none"?(t.debug({domNode:s},"Filtering out node since it has display none"),!1):!0}async function zn({node:s,parent:e,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l}){if(!e&&s.parentId)throw new Error(`Got no parent for accessibility node ${s.nodeId}: ${JSON.stringify(s)}`);let c=(S,I={})=>{},m=s.backendDOMNodeId,u=zr.includes((s.role?.value).toLowerCase());if(!u&&m===void 0)return c("Filtering out node since it doesn't exist in the DOM"),[];let h=m?t.backendIdToNode[m]:void 0;if(!u&&!h)try{let S=await Or(o.send("DOM.describeNode",{backendNodeId:m}),{milliseconds:500,fallback:()=>{r.debug("Timeout getting node from CDP while processing a11y tree")}});if(S&&S.node.nodeName.toLowerCase()==="slot"&&S.node.distributedNodes?.length)r.debug({redirectedDomNode:h,parentAXNode:e?.getNodeOnlySerializedForm(),originalAXNode:s,cdpResult:S},"Redirected to assigned slot");else return c("Filtering out node since it doesn't exist in the DOM",{cdpResult:S}),[]}catch(S){return c("Filtering out node since it doesn't exist in the DOM",{err:S}),[]}if(h&&e&&a&&l&&s.backendDOMNodeId&&!Hr(h,l,r,i))return h&&(h.momenticIgnored=!0),[];let y=s.name?.value?typeof s.name.value=="string"?s.name.value:`${s.name.value}`:"",g=s.value?.value?typeof s.value.value=="string"?s.value.value:`${s.value.value}`:"";if(y==="momentic_cursor"||y.includes("chakra"))return h&&(h.momenticIgnored=!0),[];let f=new Ut({domNode:h,id:parseInt(s.nodeId),role:s.role?.value||"",name:y,content:g,properties:s.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Wr(s),backendNodeID:s.backendDOMNodeId,ignoredByCDP:s.ignored});for(let S of s.childIds??[]){if(!S)continue;let I=n.get(parseInt(S));if(!I)continue;let O=await zn({node:I,parent:f,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l});O.length&&(f.children=f.children.concat(O))}if(f.role==="StaticText"&&(f.children=[]),f.children.length===1&&f.children[0].role==="StaticText"){let S=f.name,I=f.children[0]?.name;(S===I||!I)&&(f.children=[])}let b=[];for(let S=f.children.length-1;S>=0;S--){let I=f.children[S];if(I.role!=="StaticText"){b.push(I);continue}if(S===0||f.children[S-1].role!=="StaticText"){b.push(I);continue}f.children[S-1].name+=` ${I.name}`}if(f.children=b.reverse(),f.role==="generic"&&f.children.length===1){let S=f.children[0];if(f.name&&!tt.includes(S.role)&&f.name===S.name)return h&&(h.momenticIgnored=!0),f.children}if(!f.isInteresting()&&s.parentId)return h&&(h.momenticIgnored=!0),f.children;for(let S of f.children)S.parent=f;return[f]}function Fn({node:s,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){s.id=r,r+=1,e.set(s.id,s),s.dataMomenticId?t.set(s.dataMomenticId,s):tt.includes(s.role)||ve({logger:n,logKey:o,maxCount:5,intervalMs:3e3},{node:s.serialize({neighbors:1,maxLevel:1}),role:s.role,logKey:o},"Node has no data-momentic-id");for(let i of s.children)r=Fn({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}async function Un({a11yGraph:s,domGraph:e,logger:t,cdpClient:n,filterByViewport:o,viewportDetails:r}){if(!s.root)throw new Error("A11y tree has no root");let i=Pn();s.allNodes=s.allNodes.filter(u=>u.ignored?!u.ignoredReasons?.find(y=>kr.includes(y.name)):!0);let a=new Map;for(let u of s.allNodes)a.set(parseInt(u.nodeId),u);let l=await zn({node:s.root,domGraph:e,parent:null,inputNodeMap:a,cdpClient:n,logger:t,callId:Pn(),filterByViewport:o,viewportDetails:r});if(l.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(l)}`);if(l.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let c=new Map,m=new Map;return Fn({node:l[0],a11yIdNodeMap:c,dataMomenticIdMap:m,logger:t,callId:i}),new Bt(l[0],c,m)}var Wt=(s,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=s[o];if(typeof r!="string"||!r.trim()||e[o]===void 0)continue;let i=Ft(r,e[o])/Math.min(r.length,e[o].length);i===0?t+=2:i<=.1&&t++}if(e.numChildren!==void 0&&(s.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=s.getNodeOnlySerializedForm(),r=Ft(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.1&&t++}if(e.serializedForm){let o=s.serialize({noID:!0,maxLevel:1,neighbors:1}),r=Ft(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.1&&t++}return t},jr=["href","src"];function Gr(s,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return jr.includes(s)&&e.length>60?e.slice(0,50)+"...":s==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function Vr(s,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{In.relevantElementAttributes.includes(t)&&!Pr.includes(t)&&!s[t]&&!t.startsWith("aria")&&t!=="class"&&(s[t]=Gr(t,n))})}function Bn(s,e,t=4e3){let n=[],o=Math.floor(t/2),r=`id="${s}"`,i=0,a=e.indexOf(r,i);for(;a!==-1;){let l=Math.max(i,a-o),c=Math.min(e.length,a+o),m=e.slice(l,c);n.push(m),i=c,a=e.indexOf(r,i)}return n.join(`
...
`)}var xe={r:147,g:196,b:125,a:.55},Wn={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:xe,paddingColor:xe,borderColor:xe,marginColor:xe,eventTargetColor:xe,shapeColor:xe,shapeMarginColor:xe,showInfo:!0,showAccessibilityInfo:!0};var nt=["display","opacity","visibility","height","max-height","overflow"];function Hn({snapshot:s,devicePixelRatio:e,pageFrameId:t}){let n=s.strings,o=s.documents,r=o[0];t&&(r=o.find(l=>n[l.frameId]===t));let i={};return{root:$r(r,n,e,i),backendIdToNode:i}}function $r(s,e,t,n){let o=s.layout,r={};o.nodeIndex.forEach((g,f)=>{r[g]=f});let i=o.styles,a=o.bounds??[],l=s.nodes,c=l.backendNodeId??[],m=l.attributes??[],u=l.parentIndex??[],h=l.nodeName??[],y=l.inputChecked??{index:[]};for(let g=0;g<c.length;g++){let f=c[g],b=m[g]??[],A=u[g]&&u[g]>=0?u[g]:null,S=r[g],I;S?I=a[S]??[]:I=[];let O={backendNodeId:f,bounds:{x:I[0]??null,y:I[1]??null,width:I[2]??null,height:I[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:A?c[A]:null,tagName:h[g]!==void 0?e[h[g]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};O.parentBackendNodeId&&n[O.parentBackendNodeId].children.push(f);for(let G of Object.keys(O.bounds)){let Y=G;O.bounds[Y]!==null&&(O.bounds[Y]/=t)}let ce=i[g]??[];for(let G=0;G<ce.length&&!(G>=nt.length);G++){let Y=ce[G];if(!Y||isNaN(Y))continue;let ue=e[Y];if(!ue)continue;let V=nt[G];O.computedStyles[V]=ue}for(let G=0;G<b.length;G+=2){let Y=b[G],ue=b[G+1];if(!Y||!ue)continue;let V=e[Y],De=e[ue];!V||!De||(O.attributes[V]=De)}y.index.includes(g)&&(O.attributes.checked="true"),n[O.backendNodeId]=O}return n[c[0]]}async function jn(s){return s.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var _=(s=1e3)=>new Promise(e=>setTimeout(()=>e(),s));function Gn(){return window.lastCursorPos}function Vn(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function $n(){window.globalHintManager&&window.globalHintManager.reset()}function qn(){let s={addIdsToElement:(e,t)=>{let n="getElementsByTagName"in e?e.getElementsByTagName("*"):e.querySelectorAll("*"),o=t;for(let r=0;r<n.length;r++){let i=n[r];i&&(i.setAttribute("data-momentic-id",`${o}`),i.setAttribute("aria-keyshortcuts",`${o}`),o++,i.shadowRoot&&(o=s.addIdsToElement(i.shadowRoot,o)))}return o}};return s.addIdsToElement(document.body,1)}var qr=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),Xr=new Set(["script","document"]),Yr=["cdn.doubleverify.com","securepubads.g.doubleclick.net","pagead2.googlesyndication.com","googleads.g.doubleclick.net","static.criteo.net","intercom.io","googletagmanager.com","google-analytics.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","px.ads.linkedin.com","www.clarity.ms","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms","app.posthog.com","soraban.com","rs.fullstory.com","api2.amplitude.com"],Kr=["youtube.com/api/stats","play.google.com/log","youtube.com/youtubei/v1/log_event","retool.com/api/ddMetric","google.com/xjs/_/js"];function Ht(s){return`${s.resourceType()} ${s.method()} ${s.url()}`}function Xn(s){return s=s.replace(/^www\./,""),s}function Yn(s,e){if(!qr.has(s.resourceType()))return!1;let t,n,o;try{t=new URL(e),o=s.url(),n=new URL(o)}catch{return!0}return!n.hostname.trim()||Yr.some(r=>n.hostname.includes(r))||Kr.some(r=>o.includes(r))?!1:Xr.has(s.resourceType())||s.method()!=="GET"?!0:Xn(n.hostname).includes(Xn(t.hostname))}import ru from"nodejs-file-downloader";import{tmpdir as Jr}from"os";import su from"p-timeout";import jt,{basename as cu,dirname as du}from"path";var Qr="file://",uu=jt.join(Jr(),"momentic","downloads");var pu=50*1024*1024;function Kn(s,e){return`${Qr}${s}/${e}`}function Jn(s){let e=jt.extname(s),t=jt.basename(s,e);return s=(t.length>100?t.slice(t.length-100):t)+e,s=s.trim().replaceAll(" ","_"),s}var Qn=`(function () {
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
})()`;var Zn=({nodeOnlySerializedHtml:s,distanceThreshold:e})=>{let t=window;if(!t.ldist||!t.serializeElementOnlyWithText||!t.getAllElements)return console.error("[MOMENTIC] Momentic core libraries not found when finding closest elements"),{};let n=t.getAllElements(),o,r,i=1/0,a;for(let l of n){let c=t.serializeElementOnlyWithText(l);if(Math.abs(c.length-s.length)>e)continue;let m=t.ldist(s,c);m<i?(i=m,r=c,o=l.getAttribute("data-momentic-id")??void 0,a=void 0):m===i&&(a=c)}return a?(console.error(`[MOMENTIC] Multiple HTML elements with same distance (${i}) found:
      ${a}
      ==================
      ${r}
      `),{}):i>e?(console.error(`Closest HTML candidate still has too far distance (${i}) from threshold (${e})
      Closest node: ${r}
      Target node: ${s}
      `),{}):{dataMomenticId:o,closestDistance:i,closestNodeSerialized:r}};var Si=so(ui(),"momentic","chromium"),Pe=process.env.TWO_CAPTCHA_KEY,at=gi(pi);at.use(fi({provider:{id:"2captcha",token:Pe},visualFeedback:!0}));async function Gt(s,e){let t,n;for(let o=0;o<4;o++)try{return t=s.pages(),(await Promise.all(t.map(async r=>({title:await r.title(),url:r.url()})))).filter(r=>je(r.url,e))}catch(r){n=r,await _(500)}throw new Error(`Failed to get tab titles after all retries: ${n?.message}`)}async function wi({context:s,localMode:e,browserSettings:t,logger:n}){t.extraHeaders&&await s.setExtraHTTPHeaders(t.extraHeaders),await s.grantPermissions(["clipboard-read","clipboard-write","microphone","camera"]);let o=[s.addInitScript({content:Ue.cssGeneratorLibJs}),s.addInitScript({content:Ue.htmlUtilsLibJs})];e&&o.push(s.addInitScript({content:Qn})),s.on("close",()=>{n.debug("Context was closed")}),await Promise.all(o)}var Vt=class s{contextHandlersCleanup;browser;context;page;systemDevicePixelRatio;userControlledBrowserSettings;pageLoadPromise=null;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;enricher;storage;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;viewport;onTabsChange=void 0;constructor({storage:e,enricher:t,browser:n,context:o,page:r,baseUrl:i,logger:a,localMode:l,cdpClient:c,userBrowserSettings:m,viewport:u,onTabsChange:h}){this.storage=e,this.enricher=t,this.browser=n,this.context=o,this.cdpClient=c,this.page=r,this.baseURL=i,this.logger=a,this.userControlledBrowserSettings=m,this.localMode=!!l,this.viewport=u||Be,this.onTabsChange=h}static USER_AGENT=ao["Desktop Chrome"].userAgent;static async init({baseUrl:e,logger:t,storage:n,enricher:o,userBrowserSettings:r,browserArgs:i,contextArgs:a,onClose:l,waitForLoad:c=!0,localMode:m,localAppUrl:u,extensionPath:h,skipPageSetup:y,timeout:g,browserbaseConnectUrl:f,onTabsChange:b}){process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY="1";let A={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...i??{}},S={viewport:Be,userAgent:ao["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...a??{}},I=null,O,ce;if(m)O=await at.launchPersistentContext(Si,{...A,...S,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${u}`,`--load-extension=${h}`,"--test-type=browser","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"],baseURL:e}),ce=O.pages()[0],l&&ce.on("close",()=>{l()});else if(f){I=await at.connectOverCDP(f);let V=I.contexts()[0];if(!V)throw new Error("Failed to get browserbase default context");let De=V.pages()[0];if(!De)throw new Error("Failed to get browserbase default page");O=V,ce=De}else{I=await at.launch({...A,args:["--disable-dev-shm-usage","--no-first-run","--renderer-process-limit=3","--disable-site-isolation-for-policy","--disable-site-isolation-trials","--autoplay-policy=user-gesture-required","--disable-add-to-shelf","--disable-desktop-notifications","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]});let V={...S,baseURL:e};O=await I.newContext(V),t.debug({contextArgs:V},"Browser initialization context args"),ce=await O.newPage()}await wi({context:O,logger:t,localMode:!!m,browserSettings:r});let G=await s.initCDPSession(O,ce,t,g),Y=new s({browser:I,context:O,page:ce,baseUrl:e,logger:t,storage:n,enricher:o,localMode:m,userBrowserSettings:r,cdpClient:G,viewport:S.viewport||Be,onTabsChange:b});Y.systemDevicePixelRatio=S.deviceScaleFactor;let ue=async()=>{try{await Y.navigate({url:e,initialNavigation:!y,loadTimeoutMs:g})}catch(V){if(t.error({err:V},"Failed to initialize Chrome browser"),c)throw V}};return c?await ue():ue(),Y}registerContextHandlers(){if(this.contextHandlersCleanup)return;let e=t=>this.handleNewPageEvent(t);this.context.on("page",e),this.contextHandlersCleanup=()=>{this.context.off("page",e)}}async handleAvailableTabsChange(){try{let e=await Gt(this.context,this.logger),t=this.page.url();this.onTabsChange?.(e,t)}catch(e){this.logger.error({err:e},"Error sending available tabs to frontend")}}async handlePageErrorEvent(e){}handlePageClosedEvent(e){if(!this.browser||!this.browser.isConnected())return;(async()=>{try{if(this.page!==e){this.logger.info({url:e.url()},"Detected background page was closed"),this.handleAvailableTabsChange();return}this.logger.info({url:e.url()},"Detected active page was closed, switching to another tab");let n=this.context.pages();for(let o=n.length-1;o>=0;o--){let r=n[o];if(!(!r||r.isClosed()||!je(r.url()))){this.logger.info(`Automatically switching to tab ${o} after close: ${r.url()}`),await this.switchToPageByIndex(r,o);break}}}catch(n){this.logger.warn({err:n},"Error in page close event handler")}})()}handleNewPageEvent(e){try{this.handleNewPageEventHelper(e),this.handleAvailableTabsChange()}catch(t){this.logger.warn({err:t},"Error handling new page open, continuing....")}}handleNewPageEventHelper(e){e.on("close",n=>this.handlePageClosedEvent(n)),e.on("pageerror",n=>this.handlePageErrorEvent(n));let t=e.url().trim();if(!t){this.logger.debug("Not waiting for blank url that is likely triggered by a download link");return}this.logger.debug({url:t},"Detected new page after action, waiting for load to complete"),this.recordUrlVisited(t),this.pageLoadPromise=(async()=>{await e.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await e.waitForLoadState("load",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}finally{this.pageLoadPromise=null}})()}async getLocatorFromCdpFrame(e,t){let n=this.page;for(let a of t)n=n.frameLocator(`iframe[src=${JSON.stringify(a)}]`);let o=this.getAttributeFromStringArray(e.attributes??[],"src");if(!o)throw new Error(`Got iframe without src attribute: ${JSON.stringify(e)}`);let r=n.locator(`iframe[src=${JSON.stringify(o)}]`),i=await(await r.evaluateHandle(a=>a)).asElement().contentFrame();if(!i)throw new Error(`Got null frame from locator: ${r}`);await i.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await i.waitForLoadState("load",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3})}catch(a){this.logger.error({err:a,frameSrc:o},"Timeout elapsed waiting for frame to fully load, continuing anyways...")}return i}async getMatchingFrame(e){if(e.type!=="url")throw new Error("Only url frame identifiers are supported now");let t=e.url,o=[{node:(await this.cdpClient.send("DOM.getDocument",{pierce:!0,depth:-1})).root,srcChain:[]}],r=[];for(;o.length>0;){let i=o.pop(),a=i.node,l=i.srcChain;if(a.nodeName.toLowerCase()==="iframe"){let c=this.getAttributeFromStringArray(a.attributes??[],"src");if(!c)continue;t.startsWith("/")&&t.endsWith("/")?new RegExp(t.slice(1,-1)).test(c)&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}):t.trim()===c.trim()&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}),l=[...l,c]}for(let c of a.children??[])o.push({node:c,srcChain:l});a.contentDocument&&o.push({node:a.contentDocument,srcChain:l})}if(r.length===1)return r[0];throw r.length>1?new Error(`Found multiple frames with src matching '${t}'. Please use a more specific selector.`):new Error(`Failed to find frame with src matching: ${t}`)}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="",o;for(;e<3;){try{if(this.activeFrame.type==="url")n=this.activeFrame.url,t=(await this.getMatchingFrame(this.activeFrame)).frame;else throw new Error(`Frame identifier type ${this.activeFrame.type} is not yet supported`);if(t)return t}catch(r){o=r}await _(250),e++}throw new k("InternalWebAgentError",o?o.message:`Failed to find frame with src matching '${n}' on page`)}static async initCDPSession(e,t,n,o=8e3){let r=o===null?1/0:2,i=async()=>{try{let a=await e.newCDPSession(t);return a.on("Target.targetCrashed",l=>{n.error({payload:l},"CDP session crashed, Momentic will likely not function correctly")}),a.on("Inspector.targetCrashed",l=>{n.error({payload:l},"CDP inspector session crashed, Momentic will likely not function correctly")}),await a.send("Accessibility.enable"),await a.send("DOM.enable"),await a.send("Overlay.enable"),a}catch(a){if(r>0)return n.debug({err:a},"Failed to initialize CDP session, re-creating CDP client"),await _(500),r--,i();throw a}};return o===null?i():await it(i(),{milliseconds:o,fallback:()=>{throw new Error(`Failed to initialize session within page load timeout (${t.url()})`)}})}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&(this.logger.debug("Clearing cookies"),await this.context.clearCookies());let t=this.context.pages();for(let n=0;n<t.length;n++){if(e.clearStorage){let o=t[n].url();this.logger.debug(`Clearing local storage for tab ${o}`);try{this.originsVisited.delete(new URL(o).origin)}catch{}try{await t[n].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(r=>{r.forEach(i=>{i.name&&indexedDB.deleteDatabase(i.name)})})},{timeout:1e3})}catch(r){this.logger.debug({err:r},"Failed clearing site data, continuing...")}}n!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[n].url()}`),await t[n].close())}if(this.page=this.context.pages()[0],this.page.isClosed()){this.logger.debug("Page is closed, exiting reset early");return}if(this.cdpClient=await s.initCDPSession(this.context,this.page,this.logger,e.timeout),e.clearStorage)for(let n of this.originsVisited)this.logger.debug({origin:n},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:n,storageTypes:"all"}),this.originsVisited.delete(n);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async toggleHints(e){let t=this.page;e.state==="on"?(await t.addStyleTag({content:Ue.vimiumCss}),await t.addScriptTag({content:Ue.vimiumJs}),await t.evaluate(Vn,{timeout:1e3})):await t.evaluate($n,{timeout:1e3})}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){if(this.browser===null)return;let e=this.browser;this.browser=null,this.contextHandlersCleanup?.();try{this.originsVisited.clear(),await this.page.close(),await this.context.close(),await e.close()}catch(t){throw new Error(`Error cleaning up browser: ${t}`)}finally{this.browser=null}}get closed(){return!this.browser||!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}url(){return this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let i=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:i}}async screenshot(e){let{retries:t=1}=e;try{let n=await this.screenshotHelper({...e,retries:t});if(n.byteLength>5e6)this.logger.error("Page screenshot is greater than 5MB, which may cause performance issues with some AI models");else if(n.length===0)throw new Error("Got empty screenshot");return n}catch(n){if(t>0)return this.logger.debug({err:n},"Failed taking screenshot, retrying..."),await _(500),this.screenshot({...e,retries:t-1});throw n}}async screenshotHelper({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,timeout:i,clearHighlights:a=!1}){a&&await this.removeAllHighlights();let l={fullPage:!1,type:"jpeg",quality:t,scale:n,caret:r?"hide":"initial",path:o,timeout:i??5e3};e&&(l.scale="css");let c;if(l.scale==="css"||l.path)c=await this.page.screenshot(l);else{let m=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});c=Buffer.from(m.data,"base64")}if(!e)return c;if(e){let m;"id"in e?m=(await this.resolveTarget(e)).locator:m=e;let u=await m.boundingBox();if(!u)throw new Error("Attempted to screenshot an element that is not visible on the page");let{x:h,y,width:g,height:f}=u;if(!g||!f)throw new Error("Attempted to screenshot an element with zero width or height");if(h<0||y<0)throw new Error("Attempted to screenshot an element with negative coordinates");h=Math.floor(h),y=Math.floor(y),g=Math.ceil(g),f=Math.ceil(f);try{c=await yi(c).extract({left:h,top:y,width:g,height:f}).toBuffer()}catch(b){throw new Error(`Failed taking element screenshot at coordinates (${h}, ${y}) with size (${g}, ${f}): ${b}`)}}return c}async getViewport(){return this.viewport}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n,networkIdleTimeoutMs:o=0}){this.registerContextHandlers(),n===void 0&&(n=this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3),Rn(e)&&(e=new URL(e,this.baseURL).toString()),n&&(n=Math.min(n,6e4)),o&&(o=Math.min(o,6e4)),this.logger.debug(`Navigating to ${e}`),this.recordUrlVisited(e);let r=Date.now(),i=async()=>{try{await this.page.goto(e,{waitUntil:"domcontentloaded",timeout:n??0})}catch(l){throw new k("ActionFailureError",l.message)}try{await this.page.waitForLoadState("load",{timeout:n??0})}catch(l){this.logger.debug({err:l},"Timeout elapsed waiting for load state, continuing anyways...")}};try{o?await this.wrapPossibleNavigation(i,o):await i(),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-r)}ms`)}catch(l){if(l instanceof Error&&l.message.includes("ERR_ABORTED")){this.logger.error({err:l},"Navigation error, possibly due to user cancellation");return}throw l}let a=this.url();if(Mn.has(a))throw new k("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t)try{await this.exposeRecordingBindings()}catch(l){l instanceof Error&&l.message.includes("already registered")||this.logger.error({err:l},"Failed to install Momentic libraries for action recording")}this.handleAvailableTabsChange(),this.logger.info({url:e,urlAfterNav:a},"Navigation complete")}async type(e,t={}){let{clearContent:n,pressKeysSequentially:o=!1}=t;n&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),o?await this.page.keyboard.type(e):await this.page.keyboard.insertText(e)}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:5e3})}async highlight(e,t){try{let n=await this.resolveTarget(e,!0);return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.debug({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})},{timeout:1e3})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{let r=window;r.momenticIsEligible=m=>{let h=window.getComputedStyle(m,null).getPropertyValue("display");if(h==="none"||h==="contents")return!1;let y=m.getBoundingClientRect();return!(!y.height||!y.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let i=0;for(;!r.momenticIsEligible(n)&&i<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,i++}let a=n.style.getPropertyValue("outline"),l=n.style.getPropertyPriority("outline");n.style.setProperty("outline","5px dashed rgb(255, 0, 153)","important");let c=`momentic${Math.floor(Math.random()*1e7)}`;r[c]=()=>{n.style.removeProperty("outline"),n.style.setProperty("outline",a,l)},r.removeHighlightTimers.push(setTimeout(()=>{r[c](),r.removeHighlightFunctions?.[c]&&delete r.removeHighlightFunctions[c]},2750)),r.removeHighlightFunctions[c]=r[c]},t?.color,{timeout:1e3}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}recordUrlVisited(e){try{this.originsVisited.add(new URL(e).origin)}catch(t){this.logger.warn({err:t},"Failed to record origin visited")}}async wrapPossibleNavigation(e,t){if(t||(t=this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3),t===0)return e();let n=this.url(),o=Date.now(),r=Date.now(),i=new Map,a=new Map,l=g=>{try{let f=Ht(g.request());a.set(f,(a.get(f)??0)+1);let b=g.status();b>=500&&this.logger.warn({request:f,status:b},"Received 500 level response")}catch(f){this.logger.error({err:f},"Failed to process response in wrap navigation listener")}},c=g=>{try{let f=Ht(g);if(!Yn(g,n))return;i.set(f,(i.get(f)??0)+1),r=Date.now()}catch(f){this.logger.error({err:f},"Failed to process request in wrap navigation listener")}};this.pageLoadPromise=null,this.page.on("response",l),this.page.on("request",c);let m=await e(),u=new Set,h=!1;for(;;){if(Date.now()-o>t){h=!0;break}if(Date.now()-r<500){await _(250);continue}let g=!1;u=new Set;for(let f of i.keys())i.get(f)!==a.get(f)&&(g=!0,u.add(f));if(g){await _(250);continue}break}h?this.logger.debug({requests:Array.from(i.keys()).slice(0,10),unfinishedRequests:Array.from(u),responses:Array.from(a.keys()).slice(0,10)},"Timeout elapsed waiting for network stable"):this.logger.debug({url:this.url(),requests:Array.from(i.entries()).slice(0,10)},`Network stable in ${Math.floor(Date.now()-o)}ms`),this.page.off("request",c),this.page.off("response",l),await it(Promise.resolve(this.pageLoadPromise),{milliseconds:8e3,fallback:()=>{this.logger.error("Timed out waiting for new page to load")}});let y=this.url();if(this.recordUrlVisited(y),xn(y,n)){this.logger.debug({startUrl:n,newUrl:y},"Detected same-page url change in wrapPossibleNavigation, waiting for load state");let g;try{g=await this.getUserPageOrFrame()}catch(f){this.logger.debug({err:f},"Could not get frame after url change, defaulting to page instead"),g=this.page}await g.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await g.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}return m}async loadAuthState(e){await this.page.waitForLoadState("domcontentloaded",{timeout:8e3});try{await this.page.waitForLoadState("load",{timeout:8e3})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load event before setting auth state, continuing...")}for(let n of e.cookies)await this.setCookie(n);await this.cdpClient.send("DOMStorage.enable");let t=0;for(let n of e.origins)for(let o of n.localStorage)try{await this.cdpClient.send("DOMStorage.setDOMStorageItem",{storageId:{securityOrigin:new URL(n.origin).origin,isLocalStorage:!0},key:o.name,value:o.value}),t++}catch(r){this.logger.warn({err:r,origin:n},"Failed to set local storage entry");break}this.logger.debug({storageState:e},`Loaded ${e.cookies.length} cookies and ${t} local storage entries`),await this.refresh()}async saveAuthState(){return this.context.storageState()}async getOpenPageUrls(){return(await Gt(this.context,this.logger)).map(t=>t.url)}saveA11yDetailsToCache(e,t){t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()}async saveNodeDetailsToCache(e,t,n,o,r){if(t&&(this.saveA11yDetailsToCache(t,n),t.properties.hidden&&t.properties.hidden!=="false"&&this.logger.warn({serializedForm:t.getSerializedFormWithContext()},"Chose hidden element for action")),!(n.generatedSelectors&&n.generatedSelectors.length>1)){if(o)n.dataMomenticId=o;else{this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}try{let i=await this.fetchHtmlAttributes(e,o);Object.assign(n,i)}catch(i){this.logger.debug({err:i},"Failed to fetch HTML attributes for target")}if(zt.includes(n?.role??""))try{await this.saveElementVisualAttributes(n,r)}catch(i){this.logger.debug({err:i},"Failed to get element screenshot while saving node details")}}}async saveElementVisualAttributes(e,t){if(!t)return;await t.scrollIntoViewIfNeeded({timeout:5e3});let n=await t.boundingBox();if(!n||!n.width||!n.height){e.boundingBox=void 0,e.screenshotUrl=void 0;return}let{x:o=0,y:r=0,width:i=0,height:a=0}=n;if(e.boundingBox&&Math.abs(e.boundingBox.width-i)<1&&Math.abs(e.boundingBox.height-a)<1&&Math.abs((e.boundingBox.x??0)-o)<1&&Math.abs((e.boundingBox.y??0)-r)<1)return;this.logger.debug({oldBox:e.boundingBox,newBox:n},"Updating element screenshot");let l=await this.screenshot({target:t,scale:"css",timeout:5e3});e.boundingBox=n,e.screenshotUrl=await this.storage.uploadScreenshot(l)}async ensureMomenticBrowserScriptsLoaded(e){let t=Date.now();for(;Date.now()-t<8e3;){try{if(await e.evaluate(()=>{let o=window;return!!(o.generateCssSelectors&&o.evaluateCssSelectors&&o.generateHtmlCacheAttributes&&o.ldist)},{timeout:1e3}))return}catch{}this.logger.debug("Waiting for momentic browser scripts to load..."),await _(500)}throw new Error(`Failed to load momentic browser scripts on page ${this.url()}`)}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2||!t.serializedHtml){this.logger.debug("Insufficient data to resolve target using CSS selectors");return}let n;try{n=await e.evaluate(l=>window.evaluateCssSelectors(l),{selectors:t.generatedSelectors,lDistThresholdLax:.5,lDistThresholdStrict:.15,serializedNodeWithContext:t.serializedHtml})}catch(l){this.logger.error({err:l},"Failed to evaluate CSS selectors");return}if(n.result)this.logger.debug(n,"CSS selector evaluation returned an element");else{this.logger.debug(n,"CSS selector evaluation returned no candidate");return}let o=n.result,r=parseInt(o.dataMomenticId),i=this.dataMomenticIdToNodeMap.get(r);if(i){let l=Wt(i,t);if(l<4){this.logger.debug({comparisonScore:l,proposedA11yNode:i.getLogForm()},"Rejecting CSS selector candidate due to a11y mismatch");return}}let a=e.locator(o.workingSelectors[0]);return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(e,i,t,r,a),t.generatedSelectors=Array.from(new Set([...o.workingSelectors??[],...t.generatedSelectors??[]])),{a11yNode:i,displayString:o.serializedElement,locator:a}}async resolveTarget(e,t=!1){this.logger.debug({target:e,skipFetchTree:t},"Resolve target called");let n=await this.getUserPageOrFrame();if(await this.ensureMomenticBrowserScriptsLoaded(n),e.id>0&&!Kt(e)){let o=this.a11yIdToNodeMap.get(e.id);if(!o)throw new k("InternalWebAgentError",`Resolving target failed because id ${e.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);let r=await this.getLocatorFromA11yNode(o);return await this.saveNodeDetailsToCache(n,o,e,o.dataMomenticId,r),{locator:r,a11yNode:o,displayString:o.getNodeOnlySerializedForm()}}try{return await this.resolveTargetHelper({root:n,target:e,cssSelectorOnly:!0,skipFetchTreeWait:!0,skipFetchTree:t})}catch(o){this.logger.debug({err:o},"Could not resolve target without waiting, retrying with waiting")}return this.resolveTargetHelper({root:n,target:e,cssSelectorOnly:!1,skipFetchTreeWait:!1,skipFetchTree:t})}async resolveTargetHelper({root:e,target:t,cssSelectorOnly:n,skipFetchTree:o,skipFetchTreeWait:r}){if(t.id<0&&t.selector){let c=e.locator(t.selector),m;try{m=await jn(c)}catch(u){throw new Error(`'${t.selector}' failed to resolve: ${u}`)}return{locator:c,a11yNode:void 0,displayString:m}}if(!o){let c=(await this.getBrowserState({skipWait:r})).serialize();this.logger.debug({skipFetchTreeWait:r,tree:c},"Got a11y tree before attempting target resolution")}let i=this.a11yIdToNodeMap.get(t.id);if(i&&t.serializedForm&&i.getSerializedFormWithContext()===t.serializedForm){let c=await this.getLocatorFromA11yNode(i);return await this.saveNodeDetailsToCache(e,i,t,i.dataMomenticId,c),this.logger.debug("Resolved target to node with exact same a11y id"),{locator:c,a11yNode:i,displayString:i.getNodeOnlySerializedForm()}}if(t.generatedSelectors){let c=await this.resolveTargetUsingCssSelectors(e,t);if(c)return c;if(n)throw new Error("Could not resolve target with CSS selector only");t.generatedSelectors=void 0}if(t.serializedForm&&t.serializedForm.trim().length<10)this.logger.debug("Refusing to attempt a11y comparison since the saved node is too short");else if(t.serializedForm){let c=1/0,m,u;for(let h of this.a11yIdToNodeMap.values()){let y=h.getSerializedFormWithContext(),g=ci(t.serializedForm,y);g<c?(c=g,m=h,u=void 0):g===c&&(u=h)}if(m&&c<Math.ceil(.1*t.serializedForm.length)&&c<25)if(u&&c!==0)this.logger.debug({equalNodeSerialized:u.getSerializedFormWithContext()},"Multiple nodes with same distance, refusing to resolve using levenshtein distance");else{this.logger.debug({newNodeSerializedForm:m.getSerializedFormWithContext(),distance:c,originalLength:t.serializedForm.length,target:t},"Resolved cached a11y target to new node with pure levenshtein distance");let h=await this.getLocatorFromA11yNode(m);return await this.saveNodeDetailsToCache(e,m,t,m.dataMomenticId,h),{locator:h,a11yNode:m,displayString:m.getNodeOnlySerializedForm()}}else this.logger.debug({closestDistance:c,closestNode:m?.getSerializedFormWithContext()},"No close a11y node found by levenshtein distance")}if(t.nodeOnlySerializedHtml&&t.nodeOnlySerializedHtml.trim().length<10)this.logger.debug("Refusing to attempt html comparison since the saved node is too short");else if(t.nodeOnlySerializedHtml)try{let c=await e.evaluate(Zn,{nodeOnlySerializedHtml:t.nodeOnlySerializedHtml,distanceThreshold:Math.floor(.15*t.nodeOnlySerializedHtml.length)}),m=parseInt(c.dataMomenticId??""),u=this.dataMomenticIdToNodeMap.get(m);if(u){this.logger.debug({result:c,a11yNode:u.getLogForm(),originalTarget:t},"Resolved cached target to new node with pure html levenshtein distance");let h=await this.getLocatorFromA11yNode(u);return await this.saveNodeDetailsToCache(e,u,t,m,h),{locator:h,a11yNode:u,displayString:u.getNodeOnlySerializedForm()}}else this.logger.debug({result:c},"Failed to find a11y node corresponding to html levenshtein comparison result")}catch(c){this.logger.debug({err:c},"Error finding closest HTML node by levenshtein distance")}let a=t.screenshotUrl,l=t.role??"";if(a&&zt.includes(l))try{return await this.resolveTargetWithScreenshot({screenshotUrl:a,oldTarget:t})}catch(c){this.logger.debug({err:c},"Error finding closest element using saved screenshot")}throw this.logger.debug({target:t},"Failed to find any relevant node"),new Error(`Could not find any relevant node given cached target: ${JSON.stringify(t)}`)}async resolveTargetWithScreenshot({screenshotUrl:e,oldTarget:t}){if(!this.enricher)throw new Error("Enricher not available for screenshot resolution");let n=await this.screenshot({scale:"css"}),r=await(await fetch(e)).arrayBuffer(),i=bi(),a=await this.enricher.runTemplateMatching({searchImageBase64String:Buffer.from(r).toString("base64"),pageImageBase64String:n.toString("base64"),id:i});this.logger.debug({id:i,templateMatch:a},"Template matching got successful result");let{target:l,locator:c}=await this.getTargetFromPositionPercentages({percentX:a.x,percentY:a.y}),m=l.boundingBox?.width,u=l.boundingBox?.height;if(!m||!u)throw new Error("Rejecting target from screenshot due to no bounding box");let h=t.boundingBox?.width??0,y=t.boundingBox?.height??0;if(Math.abs(m-h)>50)throw new Error("Rejecting target from screenshot due to width difference");if(Math.abs(u-y)>50)throw new Error("Rejecting target from screenshot due to height difference");return{locator:c,a11yNode:this.a11yIdToNodeMap.get(l.id),displayString:l.nodeOnlySerializedHtml??""}}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let i=(await this.getBrowserState({})).serialize();this.logger.debug({tree:i},"Got a11y tree for x / y resolution")}let n=await this.getUserPageOrFrame(),{target:o}=await this.getTargetFromPositionPercentages(e);if((o.generatedSelectors??[]).length>0)return{locator:n.locator(o.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(o.id),displayString:o.nodeOnlySerializedHtml??o.nodeOnlySerializedForm??"Unknown element"};let r=this.a11yIdToNodeMap.get(o.id);if(r&&r.dataMomenticId)return{locator:n.locator(`[${le}="${r.dataMomenticId}"]`),a11yNode:r,displayString:r.getNodeOnlySerializedForm()};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async saveDownloadToDisk(e,t){this.logger.info("Download detected, saving file to disk");let n=await e,o=await n.path(),r=Jn(n.suggestedFilename()),i=t();await n.saveAs(so(i,r)),ro(o,{force:!0}),setTimeout(()=>{ro(i,{recursive:!0,force:!0})},5*60*1e3);let a=Kn(io(i),r);return this.logger.debug({uri:a,downloadFolder:i},"Saved download to isolated folder"),a}async typeIntoTarget(e,t,n={}){await this.highlightTarget(t);let o=2;for(;o>0;)try{await t.click({force:n.force,timeout:5e3,noWaitAfter:!0});break}catch(i){if(o--,o===0)throw i;this.logger.warn({err:i},"Failed clicking on element for type action")}if(!n.clearContent)return this.type(e,n);let r={force:n.force,timeout:5e3,noWaitAfter:!0};n.pressKeysSequentially?(await t.fill("",r),await t.pressSequentially(e,r)):await t.fill(e,r)}async click(e,t,n={}){await this.highlightTarget(e);let o=this.url(),r=await this.getOpenPageUrls(),i;n.waitForDownload&&(i=(async()=>{try{return await this.page.waitForEvent("download",{timeout:1e4})}catch(c){throw c instanceof hi.TimeoutError?new k("ActionFailureError",`Download did not complete in ${1e4}ms`):c}})());let a=2,l=n.force;for(;a>0;)try{this.logger.debug("Clicking on element with locator"),n.doubleClick?await this.wrapPossibleNavigation(async()=>{await e.dblclick({button:n.rightClick?"right":"left",timeout:5e3,noWaitAfter:!0,force:l})}):await this.wrapPossibleNavigation(async()=>{let c=await e.getAttribute("target");if(await e.click({button:n.rightClick?"right":"left",timeout:5e3,noWaitAfter:!0,force:l}),c==="_blank"){this.logger.debug("Waiting for new page promise due to _blank target");let m=Date.now(),u=this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3;for(;!this.pageLoadPromise&&Date.now()-m<u;)await _(250)}}),this.logger.debug("Click completed on element");break}catch(c){if(a--,a===0)throw c;this.logger.warn({err:c},"Failed clicking on element, retrying with 'disable stability checks' enabled"),l=!0,await _(250)}if(n.waitForUrl&&await this.waitForUrl(o,n.waitForUrl,r,this.userControlledBrowserSettings.pageLoadTimeoutMs),i){if(!t.createIsolatedFolder)throw new k("InternalWebAgentError","Cannot wait for download without a callback to create an isolated folder");return this.logger.info("Waiting for download to start and complete"),{downloadedFile:await it(this.saveDownloadToDisk(i,t.createIsolatedFolder),{milliseconds:1e4,fallback:()=>{throw new k("ActionFailureError",`Download timed out after ${1e4}ms`)}})}}}async waitForUrl(e,t,n,o){let r=o??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3,i=4,a;for(let l=0;l<i;l++){if(a=await this.getOpenPageUrls(),a.length!==n.length)for(let c=a.length-1;c>=0;c--){let m=a[c];if(m!==e&&je(m,this.logger)){await this.switchToPage(m,c);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t,{timeout:Math.max(r/i,500)});break}catch(c){if(l===i-1)throw c}}}async dragAndDrop(e,t,n={}){let o={timeout:1e4,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await _(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,1e4):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let i=Object.assign({timeout:5e3},r);o&&await o.hover(i);let a=await(await this.getUserPageOrFrame()).evaluate(Gn);a||(this.logger.debug("Could not get current mouse position before mouse drag action, defaulting to 0,0"),a={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+a.left,t+a.top,{steps:n}),await _(250),await this.page.mouse.up()}async hover(e,t){await this.highlightTarget(e),await e.hover({timeout:5e3,force:t})}async focus(e){await this.highlightTarget(e),await e.focus({timeout:5e3})}async blur(e){await this.highlightTarget(e),await e.blur({timeout:5e3})}async selectOption(e,t,n=!1){await this.highlightTarget(e);let o={timeout:5e3,force:n,noWaitAfter:!0},r=2;for(;r>0;)try{await e.selectOption(t,o),this.logger.debug(`Selected '${t}' from dropdown`);break}catch(i){if(r--,r===0)throw i;this.logger.debug({err:i},"Failed selecting option, retrying with force enabled"),o.force=!0}}async press(e){await this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))}async refresh(e){let t=e?.loadTimeoutMs??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3,n=async()=>{await this.page.reload({waitUntil:"domcontentloaded",timeout:t});try{await this.page.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.page.url()},"Timeout elapsed waiting for load state during refresh action, continuing anyways...")}};await this.wrapPossibleNavigation(n,e?.networkIdleTimeoutMs)}async getBrowserStateHelper({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger}){let o=await this.getUserPageOrFrame(),r=await this.getViewportOffsetDetails(o),i;this.activeFrame&&(i=(await this.getMatchingFrame(this.activeFrame)).node.frameId,n.debug({iframeId:i},"Resolved iframe id"));let a=await this.getRawA11yTree({root:o,skipWait:e,iframeId:i,logger:n}),l=await this.getDOMTree(r.devicePixelRatio,i),c=await Un({a11yGraph:a,domGraph:l,logger:n,cdpClient:this.cdpClient,filterByViewport:t,viewportDetails:r});if(!c||!c.root)throw new Error("Accessibility tree appears empty");return this.a11yIdToNodeMap=c.a11yIdNodeMap,this.dataMomenticIdToNodeMap=c.dataMomenticIdMap,this.domGraph=l,c}async getBrowserState(e){let{logger:t=this.logger,maxAttempts:n=2}=e,o=0,r=this.url(),i;for(;o<n;){o++;try{return await it(this.getBrowserStateHelper(e),{milliseconds:8e3})}catch(a){i=a instanceof Error?a.message:`${a}`,o<n&&(t.debug({err:a,url:r},"Error getting a11y tree, retrying..."),await _(500))}}throw new k("ActionFailureError",`Getting accessibility tree failed after ${n} attempts. Are you sure this page is working? Error: ${i}`)}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(e){let[t,n,o,r,i]=await e.evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:t,lowerBound:t+r,leftBound:n,rightBound:n+o,width:o,height:r,devicePixelRatio:this.systemDevicePixelRatio??i}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(await this.cdpClient.send("DOMSnapshot.enable"),n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:nt}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await _(500),this.logger.debug({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new k("InternalWebAgentError","Error fetching DOM tree");return Hn({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async getRawA11yTree({root:e,skipWait:t=!1,iframeId:n=void 0,logger:o=this.logger}){let r={value:Date.now()},i=()=>{r.value=Date.now()};try{let{root:a}=await this.cdpClient.send("DOM.getDocument",{depth:-1,pierce:!0})}catch(a){o.debug({err:a},"Failed to request root node while getting a11y tree")}this.cdpClient.addListener("Accessibility.nodesUpdated",i),this.cdpClient.addListener("DOM.characterDataModified",i),this.cdpClient.addListener("DOM.attributeModified",i),this.cdpClient.addListener("DOM.childNodeCountUpdated",i),this.cdpClient.addListener("DOM.documentUpdated",i);try{return await this.getRawA11yTreeHelper({root:e,skipWait:t,iframeId:n,logger:o,lastUpdateRef:r})}finally{this.cdpClient.removeListener("Accessibility.nodesUpdated",i),this.cdpClient.removeListener("DOM.characterDataModified",i),this.cdpClient.removeListener("DOM.attributeModified",i),this.cdpClient.removeListener("DOM.childNodeCountUpdated",i),this.cdpClient.removeListener("DOM.documentUpdated",i)}}async getRawA11yTreeHelper({root:e,skipWait:t,iframeId:n,logger:o,lastUpdateRef:r}){let i=this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3,a=!1;if(!t)try{await e.waitForLoadState("domcontentloaded",{timeout:i}),a=!0}catch(h){o.debug({err:h},"Timed out waiting for domcontentloaded event when getting a11y tree, continuing...")}let l=!1,c=Date.now();for(;!t&&Date.now()-c<i;){if(Date.now()-r.value>=750){l=!0;break}await _(250)}o.debug({duration:Date.now()-c,domContentLoadReceived:a,a11yStableReceived:l,skipWait:t},"A11y wait phase completed"),await e.evaluate(qn);let m;if(n)m=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:n})).node.backendDOMNodeId;else{let{node:h}=await this.cdpClient.send("Accessibility.getRootAXNode");m=h.backendDOMNodeId}let{nodes:u}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:m});if(!u||u.length<=1)throw new k("ActionFailureError","No content in accessibility tree");return{root:u[0],allNodes:u}}async clickUsingVisualCoordinates(e,t){let n=await this.getUserPageOrFrame(),{percentX:o,percentY:r}=e,{width:i,height:a}=await this.getViewportOffsetDetails(n),l=Math.ceil(i*o),c=Math.ceil(a*r),m=this.url(),u=await this.getOpenPageUrls();this.logger.debug({pixelDeltaX:l,pixelDeltaY:c,width:i,height:a},"Executing mouse click with visual coordinates"),await this.wrapPossibleNavigation(async()=>this.page.mouse.click(l,c,{button:t.rightClick?"right":"left",clickCount:t.doubleClick?2:1})),t.waitForUrl&&await this.waitForUrl(m,t.waitForUrl,u,this.userControlledBrowserSettings.pageLoadTimeoutMs)}async dragAndDropUsingVisualCoordinates(e,t,n){let o=await this.getUserPageOrFrame(),{percentX:r,percentY:i}=e,{percentX:a,percentY:l}=t,{width:c,height:m}=await this.getViewportOffsetDetails(o),u=Math.ceil(c*r),h=Math.ceil(m*i),y=Math.ceil(c*a),g=Math.ceil(m*l);await this.page.mouse.move(u,h),await this.page.mouse.down(),await this.page.mouse.move(y,g),await _(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,1e4):500),await this.page.mouse.up()}async hoverUsingVisualCoordinates(e){let t=await this.getUserPageOrFrame(),{percentX:n,percentY:o}=e,{width:r,height:i}=await this.getViewportOffsetDetails(t),a=Math.ceil(r*n),l=Math.ceil(i*o);await this.page.mouse.move(a,l)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,le);if(!r)throw new Error(`Could not find attribute ${le} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.debug({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${le}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async l=>{let c=await this.getLocatorFromBackendID(l);t.doubleClick?await c.dblclick({timeout:5e3}):await c.click({timeout:5e3,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(l){this.logger.error({err:l},"Failed clicking on node"),o=l,n++,await _(500)}let i=e.parent?.children??[];for(let l of i){if(l.id===e.id)continue;let c=!1,m=Wt(l,e);if(e.name&&l.name===e.name?c=!0:m>=5&&(this.logger.debug({similarityScore:m},"Sibling qualified for click redirection through comparison score"),c=!0),!!c)try{return await r(l.backendNodeID),l}catch(u){this.logger.debug({err:u,candidate:l.getLogForm()},"Failed clicking on sibling during click redirection")}}let a=e.parent;for(n=0;n<On;){if(!a||["rootwebarea","main"].includes(a.role.toLowerCase()))throw new k("ActionFailureError",o.message,{cause:o});if(!a.backendNodeID){a=a.parent;continue}try{return await r(a.id),a}catch(c){this.logger.debug({err:c,candidate:a.getLogForm()},"Failed clicking on parent during click redirection"),n++,a=a.parent}}throw new k("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,i=o.nodes,a=i.nodeName||[],l=i.backendNodeId||[],c=r.nodeIndex,m=r.bounds,u=-1;for(let S=0;S<a.length;S++)if(l[S]===e){u=c.indexOf(S);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[h=0,y=0,g=0,f=0]=m[u];h/=n,y/=n,g/=n,f/=n;let b=h+g/2,A=y+f/2;return{centerX:b,centerY:A}}async scroll(e,t,n,o){let r=t==="left"?-1:1,i=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([l,c,m,u])=>window.scrollTo(window.scrollX+(l??window.innerWidth)*m,window.scrollY+(c??window.innerHeight)*u),[e,n,r,i]);else{let a=this.page.viewportSize()||Be;await this.page.mouse.wheel((e??a.width)*r,(n??a.height)*i)}}async scrollUp(e){await this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPossibleNavigation(async()=>this.page.goForward({waitUntil:"domcontentloaded",timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}))}async goBack(){await this.wrapPossibleNavigation(async()=>this.page.goBack({waitUntil:"domcontentloaded",timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}))}async changeActivePage(e,t){this.recordUrlVisited(e.url()),this.page=e,this.cdpClient=await s.initCDPSession(this.context,this.page,this.logger,t??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3)}async createNewTab(e,t){let n=await this.context.newPage();await this.changeActivePage(n,t?.loadTimeoutMs),await this.navigate({url:e,initialNavigation:!0,...t})}async switchToPageByIndex(e,t,n){let o=e.url();if(!je(o,this.logger)){this.logger.error({tabUrl:o},"Refusing to switch to tab with invalid URL");return}this.logger.debug(`Switching to tab ${t} with url ${o}`),await this.changeActivePage(e,n?.loadTimeoutMs);try{let r=async()=>{let i=n?.loadTimeoutMs??8e3;await e.waitForLoadState("domcontentloaded",{timeout:i}),await e.waitForLoadState("load",{timeout:i}),this.logger.debug({url:o},"Timeout elapsed waiting for load state, continuing anyways...")};n?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(r,n.networkIdleTimeoutMs):await r()}catch{this.logger.debug({url:o},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}}async switchToPage(e,t,n){let o=this.context.pages(),r=await Gt(this.context,this.logger);if(t){await this.switchToPageByIndex(o[t],t,n);let i=r[t].url;this.onTabsChange?.(r,i);return}for(let i=0;i<o.length;i++){let a=o[i];if(a.url().includes(e)){await this.switchToPageByIndex(a,i,n);let l=r[i].url;this.onTabsChange?.(r,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async setCookie(e){let t;typeof e=="string"?t=pn(e):t=[e],this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:Pe,method:"turnstile",sitekey:t,pageurl:this.url(),json:1})});if(!n.ok){let i=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},i),new Error(i)}let{request:o}=await n.json(),r=Date.now();for(;Date.now()-r<6e4;){await _(2500);let i=await fetch(`https://2captcha.com/res.php?key=${Pe}&action=get&id=${o}&json=1`,{method:"GET"});if(!i.ok){let l=`Captcha solution API returned error response: ${i.statusText}`;throw this.logger.error({text:await i.text()},l),new Error(l)}if((await i.json()).status===1)break}}async solveCaptcha(){await this.getBrowserState({});let e;for(let a of this.a11yIdToNodeMap.values())if(a.role==="image"&&a.name.toLowerCase().includes("captcha")){if(!a.backendNodeID)continue;e=await this.getLocatorFromBackendID(a.backendNodeID);break}if(!e){let a=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!a.captchas||!a.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:5e3}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:Pe,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let a=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},a),new Error(a)}let{taskId:o}=await n.json(),r=Date.now(),i="";for(;Date.now()-r<6e4;){await _(2500);let a=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:Pe,taskId:o})});if(!a.ok){let c=`Captcha solution API returned error response: ${a.statusText}`;throw this.logger.error({text:await a.text()},c),new Error(c)}let l=await a.json();if(l.errorId){let c=`Captcha solution API returned error ID ${l.errorId}`;throw this.logger.error(c),new Error(c)}if(l.status==="ready"){i=l.solution.text;break}}if(!i)throw new Error("Captcha solution timed out");return i}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=new AbortController;await this.startTreeRefreshCronForRecording(e.signal);let t;try{t=await(await this.getUserPageOrFrame()).evaluate(async()=>{let n=window;if(!n.resolveRecordingTarget){console.error("[Momentic] Missing Momentic recording library functions");return}let o=null;n.targetCaptureClickListener=async i=>(console.log("[Momentic] Target capture listener fired"),i.preventDefault(),o=i.target,!1),document.addEventListener("click",n.targetCaptureClickListener,{capture:!0,once:!0});let r=Date.now();for(;!o&&Date.now()-r<1e4;)await new Promise(i=>setTimeout(i,250));if(!o)throw new Error("Timed out waiting for user to click on an element");return n.resolveRecordingTarget(o)})}catch(n){throw this.logger.error({err:n},"Error recording target click"),new Error(`Error recording click: ${n.message}`)}finally{e.abort()}if(!t)throw new Error("Got no target from recorded click - please make sure you clicked on an interactive element");return this.getTargetFromRecordedClick(t).target}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,i=o.width??0,a=o.height??0,l=r+i,c=o.y??0,m=c+(o.height??0),u=t.bounds,h=u.width??0,y=u.height??0,g=u.x??0,f=g+(u.width??0),b=u.y??0,A=b+(u.height??0);return g<l&&f>r&&b<m&&A>c?Math.abs(i-h)<200&&Math.abs(a-y)<200?!0:(ve({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(ve({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=li();for(let c of n)if(c.attributes?.[le]===e){o=c;break}if(!o)return[];let i=[],a=t.backendIdToNode[o.parentBackendNodeId??-1];for(;a&&(a?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,a,r));)a=t.backendIdToNode[a.parentBackendNodeId??-1];a&&i.push(a);let l=[o];for(;l.length;){let c=l.shift();for(let m of c.children??[]){let u=t.backendIdToNode[m];u&&!u.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,u,r)?i.push(u):u&&l.push(u)}}return i}getTargetFromRecordedClick(e){this.logger.debug(e,"Got recorded target from click");let{htmlAttributes:t,dataMomenticId:n}=e,o=this.dataMomenticIdToNodeMap,r,i=o.get(n);return i?r={id:i.id,dataMomenticId:n,...t}:(this.logger.warn({htmlAttributes:t},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),r={id:-1,dataMomenticId:n,...t}),i&&this.saveA11yDetailsToCache(i,r),{target:r,a11yNode:i}}async exposeRecordingBindings(){let e=({frame:t},n)=>{if(!this.transformer)return;let{type:o,dataMomenticId:r,htmlAttributes:i,selectedValue:a}=n;this.logger.debug(n,`${o} event captured on element`);let l=this.dataMomenticIdToNodeMap,c=this.mostRecentA11yTree,m=t.url(),u,h=l.get(r);h?u={id:h.id,dataMomenticId:r,...i}:(this.logger.debug({url:m,htmlAttributes:i},"Could not find corresponding accessibility node for click, continuing with HTML attributes only"),u={id:-1,dataMomenticId:r,...i}),(async()=>{if(!this.transformer){this.logger.warn("No natural language translation since transformer is not initialized anymore");return}this.logger.debug({target:u,url:m},`Generating description for ${o.toLowerCase()}ed target`);let y=c.serialize();h&&y.length>5e3&&(y=Bn(h.id,y),this.logger.debug({serializedTree:y},"Trimmed a11y tree for description transformation"));try{await this.transformer.recordElementAction({type:o,target:u,browserState:y,url:m,selectedValue:a})}catch(g){this.logger.error({err:g},`Failed to record ${o} action`)}})()};await this.context.exposeBinding("captureElementEvent",({frame:t},n)=>{try{e({frame:t},n)}catch(o){this.logger.error({err:o},"Failed to capture element interaction")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},t)=>{this.transformer&&(this.logger.debug(t,"Captured keypress"),this.transformer.recordKeystroke(t))})}async fetchA11yTreeForRecording(){let e=await this.getBrowserState({skipWait:!0,maxAttempts:1,logger:_t});if(this.mostRecentA11yTree=e,Math.random()<.1){let n=this.mostRecentA11yTree.serialize();this.logger.debug({tree:n.length>4e5?"REDACTED_DUE_TO_SIZE":n},"Refreshed a11y tree during recording")}await(await this.getUserPageOrFrame()).evaluate(n=>{let o=window;o.momenticIdsInA11yTree=new Set(n)},Array.from(this.dataMomenticIdToNodeMap.keys()))}async startTreeRefreshCronForRecording(e){if(await this.fetchA11yTreeForRecording(),e.aborted)return;let t,n=!1,o=0,r=0,i=async()=>{if(!(Date.now()-r<750)&&!n){n=!0;try{await this.fetchA11yTreeForRecording(),o=0}catch(a){if(r=Date.now(),o++,o>=8||a.message.includes("crashed")){clearInterval(t),this.logger.error({err:a},"Fatal errors while refreshing a11y tree during recording, exiting...");return}}finally{n=!1}}};t=setInterval(()=>{!this.transformer||e.aborted||i()},Ln),e.addEventListener("abort",()=>{clearInterval(t),t=void 0})}async startRecording(e,t){this.logger.debug("Starting passive recording mode in Chrome browser"),this.transformer=t,await this.startTreeRefreshCronForRecording(e),e.addEventListener("abort",async()=>{this.transformer=void 0})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value),{timeout:1e3})}getActivePage(){return this.page}async getCondensedHtml(){let e=await this.getUserPageOrFrame();await this.ensureMomenticBrowserScriptsLoaded(e);let t=await e.evaluate(()=>window.getCondensedHtmlTree?.(),{timeout:1e3});if(!t)throw new k("InternalWebAgentError","Empty HTML tree");return mi.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:80})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages(e,{percentX:t,percentY:n}){if(t<0||t>1||n<0||n>1)throw new k("InternalWebAgentError","Invalid percent passed to percentage location");let{width:o,height:r,upperBound:i,leftBound:a,devicePixelRatio:l}=await this.getViewportOffsetDetails(e),c=Math.round(i),m=Math.round(a),u=Math.ceil(o*t),h=Math.ceil(r*n);await this.cdpClient.send("DOM.getDocument",{depth:0});let y;try{y=await this.cdpClient.send("DOM.getNodeForLocation",{x:u+m,y:h+c})}catch(g){throw this.logger.error({err:g,pixelDeltaX:u,pixelDeltaY:h,leftBoundRounded:m,upperBoundRounded:c,devicePixelRatio:l},"Failed to get DOM node from position percents"),new Error("No element was found at the given location")}return y}async highlightFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n;try{n=await this.getDomNodeFromPositionPercentages(t,e)}catch{}return n?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:Wn,backendNodeId:n.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:n?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n=await this.getDomNodeFromPositionPercentages(t,e),o=this.domGraph?.backendIdToNode[n.backendNodeId],r=o?.attributes[le],i=parseInt(r??"");if(!o||!r||isNaN(i))throw new Error("No HTML node was found at the given location");let a=t.locator(`[${le}="${r}"]`);for(let u of this.a11yIdToNodeMap.values()){if(u.backendNodeID!==n.backendNodeId)continue;let h={id:u.id};return await this.saveNodeDetailsToCache(t,u,h,parseInt(r),a),{target:h,locator:a}}let l=this.getDomCandidatesInA11yTree(`${r}`,this.domGraph);for(let u of l){let h=parseInt(u.attributes?.[le]??"");if(isNaN(h))continue;let y=t.locator(`[${le}="${h}"]`),g=this.dataMomenticIdToNodeMap.get(h),f=g?.id;if(!f)continue;let b={id:f};return await this.saveNodeDetailsToCache(t,g,b,parseInt(r),y),this.logger.debug({target:b},"Redirected click on non-accessible element to nearest a11y node"),{target:b,locator:y}}let c=await this.fetchHtmlAttributes(t,i);return{target:{id:-1,dataMomenticId:i,...c},locator:a}}async fetchHtmlAttributes(e,t){let n=await e.evaluate(o=>{let r=window;return r.generateHtmlCacheAttributes?r.generateHtmlCacheAttributes(o):(console.error("[MOMENTIC] generateHtmlCacheAttributes is not defined on the window object"),{})},t);return this.logger.debug(n,"Generated HTML attributes for target"),n}async moveMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.move(a,l,{steps:3})}async clickMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.click(a,l,{button:"left"})}async scrollFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);return await this.page.mouse.wheel(a,l),{deltaX:a,deltaY:l}}canSolveCaptchas(){return!!Pe}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames(),n=[];for(let r of t)if(!r.isDetached())try{let a=await(await r.frameElement()).evaluate(l=>"src"in l?l.getAttribute("src"):null);a&&a!=="about:blank"&&a!==e&&n.push(a)}catch(i){i.message.includes("detached")||this.logger.debug({err:i},"Error fetching frame src url, continuing...")}return Array.from(new Set(n))}async setFileChooserHandler(e){setTimeout(()=>{try{e.cleanup()}catch(t){this.logger.debug({err:t,filePath:e.filePath},"Failed cleaning up file after upload")}},3e4),await this.setFileChooserHandlerHelper(e)}async setFileChooserHandlerHelper({filePath:e}){this.page.once("filechooser",async n=>{this.logger.debug({filePath:e},"File chooser triggered"),await n.setFiles(e,{timeout:1e4})});let t=di(e).toString("base64");await(await this.getUserPageOrFrame()).evaluate(({fileName:n,base64Data:o})=>{let r=window;r.MomenticFile=class{async getFile(){let i=atob(o),a=new Array(i.length);for(let m=0;m<i.length;m++)a[m]=i.charCodeAt(m);let l=new Uint8Array(a),c=new Blob([l]);return new File([c],n)}},r.showOpenFilePicker=async()=>[new r.MomenticFile]},{fileName:io(e),base64Data:t})}};var Ci={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},Ti=Ci;import{z as Ai}from"zod";import Ei from"fetch-retry";var vi=Ei(global.fetch),Q=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await vi(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var $t=class extends Q{constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${Q.API_VERSION}/web-agent/recommend-chunks`,e);return An.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${Q.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return Ai.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${Q.API_VERSION}/web-agent/locate-element`,{...e,disableCache:t.disableCache});return Tn.parse(n)}async getAssertionResult(e,t){let n={...e,disableCache:!!t.disableCache},o=await this.sendRequest(`/${Q.API_VERSION}/web-agent/assertion`,n);return Cn.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${Q.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,screenshot:e.screenshot,disableCache:t.disableCache});return wn.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${Q.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t.disableCache});return En.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${Q.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t.disableCache});return vn.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:!!t.disableCache},o=await this.sendRequest(`/${Q.API_VERSION}/web-agent/text-extraction`,n);return Rt.parse(o)}async getTestResultClassification(e){let t=await this.sendRequest(`/${Q.API_VERSION}/web-agent/result-classification`,e);return xt.parse(t)}};export{$t as APIGenerator,Vt as ChromeBrowser,pe as CommandType,Ti as DEFAULT_CONTROLLER_CONFIG,te as StepType};
