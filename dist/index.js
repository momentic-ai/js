import{v4 as na}from"uuid";import*as d from"zod";import{z as L}from"zod";var tn=L.object({thoughts:L.string(),result:L.boolean(),relevantElements:L.array(L.number()).optional()}),ht=(n=>(n.CONTAINS="CONTAINS",n.STARTS_WITH="STARTS_WITH",n.EQUALS="EQUALS",n))(ht||{});var To=L.object({type:L.literal("ELEMENT_CONTENT"),negated:L.boolean().optional(),operation:L.nativeEnum(ht),value:L.string()}),Co=L.object({type:L.literal("ELEMENT_ATTRIBUTE"),negated:L.boolean().optional(),operation:L.nativeEnum(ht),attr:L.string(),value:L.string()}),gt=(o=>(o.EXISTS="EXISTS",o.VISIBLE="VISIBLE",o.ENABLED="ENABLED",o.EDITABLE="EDITABLE",o))(gt||{}),Eo=L.object({type:L.literal("ELEMENT_EXISTENCE"),negated:L.boolean().optional(),condition:L.nativeEnum(gt)}),nn=L.discriminatedUnion("type",[To,Co,Eo]);var vo=L.object({type:L.literal("CONTENT"),negated:L.boolean().optional(),value:L.string()}),on=L.discriminatedUnion("type",[vo]);import*as C from"zod";var Fe=(i=>(i.AI="AI",i.AI_HEALED="AI_HEALED",i.CLICK_TO_FIND="CLICK_TO_FIND",i.XY_PERCENT="XY_PERCENT",i.RECORDING="RECORDING",i.USER_CSS_SELECTOR="USER_CSS_SELECTOR",i))(Fe||{}),we=C.object({id:C.number().int(),dataMomenticId:C.number().int().optional(),selector:C.string().optional(),generatedSelectors:C.string().array().optional(),role:C.string().optional(),name:C.string().optional(),numChildren:C.number().optional(),content:C.string().optional(),pathFromRoot:C.string().optional(),serializedForm:C.string().optional(),nodeOnlySerializedForm:C.string().optional(),serializedHtml:C.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:C.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned."),screenshotUrl:C.string().url().optional(),boundingBox:C.object({x:C.number().optional(),y:C.number().optional(),width:C.number(),height:C.number()}).describe("css pixel bounding box").optional(),inputDescription:C.string().optional().describe("the description that generated this cache"),targetSource:C.nativeEnum(Fe).optional()});function rn(a){return!!(a.name||a.role||a.content||a.serializedForm||a.serializedHtml||a.screenshotUrl)}var Ao=C.object({percentX:C.number().describe("between 0 and 1"),percentY:C.number()}),xo=C.object({type:C.literal("description"),elementDescriptor:C.string(),a11yData:we.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var G=C.discriminatedUnion("type",[xo,C.object({type:C.literal("coordinates"),percentXYLocation:Ao})]);var ge=(E=>(E.AI_EXTRACT="AI_EXTRACT",E.AI_ASSERTION="AI_ASSERTION",E.AI_WAIT="AI_WAIT",E.AUTH_LOAD="AUTH_LOAD",E.AUTH_SAVE="AUTH_SAVE",E.BLUR="BLUR",E.CAPTCHA="CAPTCHA",E.CLICK="CLICK",E.COOKIE="COOKIE",E.DIALOG="DIALOG",E.DRAG="DRAG",E.ELEMENT_CHECK="ELEMENT_CHECK",E.FILE_UPLOAD="FILE_UPLOAD",E.FOCUS="FOCUS",E.GO_BACK="GO_BACK",E.GO_FORWARD="GO_FORWARD",E.HOVER="HOVER",E.JAVASCRIPT="JAVASCRIPT",E.LOCAL_STORAGE="LOCAL_STORAGE",E.MOUSE_DRAG="MOUSE_DRAG",E.NAVIGATE="NAVIGATE",E.NEW_TAB="NEW_TAB",E.PAGE_CHECK="PAGE_CHECK",E.PRESS="PRESS",E.REFRESH="REFRESH",E.REQUEST="REQUEST",E.SCROLL_DOWN="SCROLL_DOWN",E.SCROLL_UP="SCROLL_UP",E.SCROLL_LEFT="SCROLL_LEFT",E.SCROLL_RIGHT="SCROLL_RIGHT",E.SELECT_OPTION="SELECT_OPTION",E.TAB="TAB",E.TYPE="TYPE",E.VISUAL_DIFF="VISUAL_DIFF",E.WAIT="WAIT",E.SUCCESS="SUCCESS",E))(ge||{}),v=d.object({thoughts:d.string().optional(),id:d.string().uuid().describe("unique identifier to this step, used for step cache")}),te=d.object({useSelector:d.boolean().optional(),useXY:d.boolean().optional(),force:d.boolean().optional(),disableCache:d.boolean().optional().describe("disable element caching for this step"),iframeUrl:d.string().optional().describe("url or url regex for the iframe")}),se=d.object({target:we}).optional(),Qe=d.object({loadTimeout:d.number().int().max(60).optional().describe("Max seconds for the page to load"),networkTimeout:d.number().int().max(60).optional().describe("How many seconds to wait for network idle after navigation")}),Io=v.merge(Qe).merge(d.object({type:d.literal("NAVIGATE"),url:d.string()})),Ze=te.merge(d.object({cache:se})),et=v.merge(Ze.merge(d.object({target:G.optional(),type:d.literal("SCROLL_UP"),deltaY:d.number().optional()}))),tt=v.merge(Ze.merge(d.object({target:G.optional(),type:d.literal("SCROLL_DOWN"),deltaY:d.number().optional()}))),nt=v.merge(Ze.merge(d.object({target:G.optional(),type:d.literal("SCROLL_LEFT"),deltaX:d.number().optional()}))),ot=v.merge(Ze.merge(d.object({target:G.optional(),type:d.literal("SCROLL_RIGHT"),deltaX:d.number().optional()}))),ia=d.discriminatedUnion("type",[et,tt,nt,ot]),No=v.merge(d.object({type:d.literal("DIALOG"),action:d.union([d.literal("ACCEPT"),d.literal("DISMISS")])})),Mo=v.merge(d.object({type:d.literal("WAIT"),delay:d.number()})),Lo=v.merge(Qe).merge(d.object({type:d.literal("REFRESH")})),Oo=v.merge(d.object({type:d.literal("GO_BACK")})),_o=v.merge(d.object({type:d.literal("GO_FORWARD")})),Do=v.extend({type:d.literal("AUTH_SAVE")}),Po=v.extend({type:d.literal("AUTH_LOAD"),storageState:d.string().describe("JSON string auth state")}),an=v.merge(te).extend({type:d.literal("CAPTCHA")}),ko=v.merge(d.object({type:d.literal("JAVASCRIPT"),code:d.string(),fragment:d.boolean().optional(),envKey:d.string().optional(),environment:d.union([d.literal("NODE"),d.literal("BROWSER")]).optional().describe("default NODE"),timeout:d.number().int().max(60).optional().describe("Max seconds for the code to complete")})),ft=v.merge(te).merge(d.object({type:d.literal("CLICK"),target:G,doubleClick:d.boolean().optional(),rightClick:d.boolean().optional(),waitForUrl:d.string().optional().describe("call playwright waitForURL after click"),waitForDownload:d.boolean().optional().describe("wait for a download to occur and return the file downloaded"),cache:se})),yt=v.merge(te).merge(d.object({type:d.literal("DRAG"),fromTarget:G,toTarget:G,hoverSeconds:d.number().optional().describe("Seconds to hover the object before dropping"),cache:d.object({fromTarget:we.optional(),toTarget:we.optional()}).optional()})),St=v.merge(te).merge(d.object({type:d.literal("MOUSE_DRAG"),target:G.optional(),deltaX:d.string().describe("pixels to move horizontally, can be template"),deltaY:d.string().describe("pixels to move vertically, can be template"),steps:d.number().optional(),cache:se})),bt=v.merge(te).merge(d.object({type:d.literal("HOVER"),target:G,cache:se})),wt=v.merge(te).merge(d.object({type:d.literal("FOCUS"),target:G,cache:se})),Tt=v.merge(te).merge(d.object({type:d.literal("BLUR"),target:G,cache:se})),zo=v.extend({type:d.literal("FILE_UPLOAD"),fileSource:d.discriminatedUnion("type",[d.object({type:d.literal("URL"),url:d.string()}).describe("Accessible link to the file, either public http or local file://")])}),Ct=v.merge(te).merge(d.object({type:d.literal("SELECT_OPTION"),target:G,option:d.string(),cache:se})),Et=v.merge(d.object({type:d.literal("AI_ASSERTION"),assertion:d.string(),disableCache:d.boolean().optional(),iframeUrl:d.string().optional()})),Fo=Et.merge(d.object({type:d.literal("AI_WAIT"),timeout:d.number().int().optional().describe("Max seconds to wait for assertion to be true")})),vt=v.merge(te).extend({type:d.literal("ELEMENT_CHECK"),target:G,assertion:nn,cache:se}),Uo=v.extend({type:d.literal("PAGE_CHECK"),assertion:on}),Bo=v.merge(d.object({type:d.literal("AI_EXTRACT"),goal:d.string(),schema:d.string().optional(),envKey:d.string().optional(),disableCache:d.boolean().optional(),iframeUrl:d.string().optional()})),Wo=d.object({clearContent:d.boolean().optional(),pressKeysSequentially:d.boolean().optional(),force:d.boolean().optional()}),At=v.merge(te).merge(Wo).extend({type:d.literal("TYPE"),target:G.optional(),value:d.string(),pressEnter:d.boolean().optional(),cache:se}),Ho=v.merge(d.object({type:d.literal("PRESS"),value:d.string()})),jo=v.merge(Qe).merge(d.object({type:d.literal("TAB"),url:d.string()})),Go=v.merge(Qe).merge(d.object({type:d.literal("NEW_TAB"),url:d.string()})),$o=v.merge(d.object({type:d.literal("COOKIE"),value:d.string()})),Vo=v.merge(d.object({type:d.literal("LOCAL_STORAGE"),key:d.string(),value:d.string()})),qo=v.merge(d.object({type:d.literal("REQUEST"),url:d.string(),method:d.union([d.literal("GET"),d.literal("POST"),d.literal("PUT"),d.literal("DELETE"),d.literal("PATCH")]),headers:d.record(d.string(),d.string()).optional(),params:d.record(d.string(),d.string()).optional(),body:d.string().optional(),timeout:d.number().int().optional().describe("Max seconds to wait for the request to complete")})),Yo=v.merge(d.object({type:d.literal("SUCCESS"),condition:Et.optional()})),Xo=v.merge(d.object({type:d.literal("FAILURE")})),Ko=d.object({data:d.string().describe("s3 url to a jpg"),width:d.number(),height:d.number()}),xt=v.merge(te).merge(d.object({type:d.literal("VISUAL_DIFF"),threshold:d.number().optional().describe("default 0.1"),target:G.optional(),screenshot:Ko.optional(),cache:se})),rt=d.discriminatedUnion("type",[ft,At,Ho,Ct,Io,tt,et,Et,Fo,Yo]),Jo=d.discriminatedUnion("type",[Bo,Po,Do,an,$o,No,yt,vt,zo,Oo,_o,bt,ko,Vo,St,Go,Uo,Lo,qo,nt,ot,jo,xt,Mo,wt,Tt]),Rt=d.discriminatedUnion("type",[...rt.options,...Jo.options]),It=d.discriminatedUnion("type",[...rt.options,Xo]);var K={type:!0,cache:!0},Nt=d.discriminatedUnion("type",[Tt.pick(K),ft.pick(K),yt.pick(K),vt.pick(K),wt.pick(K),bt.pick(K),St.pick(K),et.pick(K),tt.pick(K),nt.pick(K),ot.pick(K),Ct.pick(K),At.pick(K),xt.pick(K)]),Qo=Object.values(ge).filter(a=>Nt.options.some(e=>e.shape.type.safeParse(a).success));Rt.options.forEach(a=>{if("target"in a.shape&&!Qo.includes(a.shape.type.value))throw new Error(`Command ${a.shape.type.value} has a target but no cache`)});var aa=d.discriminatedUnion("type",[Tt,an,ft,yt,wt,bt,St,et,tt,nt,ot,Ct,At,xt,vt]);import{z as ln}from"zod";import{z as sn}from"zod";import{z as Mt}from"zod";var ne=Mt.object({index:Mt.number().optional().describe("global index"),skipped:Mt.boolean().optional()});var oe=(i=>(i.PRESET_ACTION="PRESET_ACTION",i.MODULE="MODULE",i.AI_ACTION="AI_ACTION",i.CONDITIONAL="CONDITIONAL",i.IFRAME="IFRAME",i.SECTION="SECTION",i))(oe||{});var le=ne.extend({type:sn.literal("PRESET_ACTION"),command:Rt,skipped:sn.boolean().optional()});var Le=ne.extend({type:ln.literal("AI_ACTION"),text:ln.string(),steps:le.array().optional()});import{z as D}from"zod";var Zo=D.object({cacheKey:D.string(),cacheExpiryMs:D.number()}),Lt=ne.extend({id:D.string().uuid().describe("ID of the module step itself. Used to 'namespace' step cache entries."),inputs:D.record(D.string()).optional(),cacheConfig:Zo.optional()}),Oe=Lt.extend({type:D.literal("MODULE"),moduleId:D.string().uuid()}),er=D.union([Oe.pick({type:!0,moduleId:!0}),D.record(D.unknown())]),Te=D.object({moduleId:D.string().uuid(),name:D.string(),parameters:D.string().array().nullish(),defaultParameters:D.record(D.string(),D.string()).nullish(),defaultCacheKey:D.string().nullish(),defaultCacheTtl:D.number().nullish()});import{z as B}from"zod";import{z as cn}from"zod";var Ue=ne.extend({type:cn.literal("CONDITIONAL"),skipped:cn.boolean().optional()});import{z as re}from"zod";var tr=re.object({type:re.literal("attr"),name:re.string(),value:re.string()}),nr=re.object({type:re.literal("css"),selector:re.string()}),or=re.object({type:re.literal("url"),url:re.string()}),rr=re.union([tr,or,nr]),Be=ne.extend({type:re.literal("IFRAME"),identifier:rr});import{z as dn}from"zod";var We=ne.extend({type:dn.literal("SECTION"),description:dn.string()});var mn=Te.merge(Lt).extend({type:B.literal("RESOLVED_MODULE"),steps:B.lazy(()=>Z.array())}),Ot=Te.extend({steps:B.lazy(()=>Z.array())}),ir=Be.extend({steps:B.lazy(()=>Ce.array())}),ar=Be.extend({steps:B.lazy(()=>Z.array())}),sr=We.extend({steps:B.lazy(()=>Ce.array())}),lr=We.extend({steps:B.lazy(()=>Z.array())}),cr=Ue.extend({blocks:B.object({assertion:B.lazy(()=>le),steps:B.lazy(()=>Ce.array())}).array(),elseSteps:B.lazy(()=>Ce.array().optional())}),dr=Ue.extend({blocks:B.object({assertion:B.lazy(()=>le),steps:B.lazy(()=>Z.array())}).array(),elseSteps:B.lazy(()=>Z.array().optional())}),Ce=B.discriminatedUnion("type",[le,Le,Oe,cr,ir,sr]),Z=B.discriminatedUnion("type",[le,Le,mn,dr,ar,lr]);import{z as Ee}from"zod";var _t=Ee.object({key:Ee.string(),testId:Ee.string().optional(),moduleId:Ee.string().optional(),organizationId:Ee.string(),value:Nt}),mr=Ee.record(Ee.string(),_t);var He={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&F(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&F(t,n,e[n]);return t};var g=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(I=>Object.assign(I,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,I]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&I!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var H=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[MOMENTIC] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=H;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as Li}from"crypto";import Oi from"dedent";import{distance as _i}from"fastest-levenshtein";import{readFileSync as Di,rmSync as yo}from"fs";import Pi from"js-beautify";import{cloneDeep as ki}from"lodash-es";import{homedir as zi}from"os";import ut from"p-timeout";import{basename as So,join as wo}from"path";import{chromium as Fi,devices as bo}from"playwright";import{errors as Ui}from"playwright";import{addExtra as Bi}from"playwright-extra";import Wi from"puppeteer-extra-plugin-recaptcha";import Hi from"sharp";import Ms from"string-argv";import{v4 as Os}from"uuid";import{z as P}from"zod";import{z as _e}from"zod";var me=(s=>(s.AI_PROVIDER="AIProviderError",s.JOB_TIMEOUT="JobTimeoutError",s.ACTION_FAILURE="ActionFailureError",s.ASSERTION_FAILURE="AssertionFailureError",s.CONFIG_ERROR="UserConfigurationError",s.WEB_AGENT_PLATFORM="InternalWebAgentError",s.UNKNOWN_PLATFORM="InternalPlatformError",s))(me||{});var Dt=_e.object({reason:_e.nativeEnum(me),summary:_e.string()}),un=_e.object({errorMessage:_e.string(),errorStack:_e.string().optional(),classification:Dt.optional()});var W=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let i of Object.values(me))if(t.startsWith(i)){r=!0,e=i;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}},je=class extends Error{decisions;constructor(e,t,n={}){super(e,n),this.decisions=t,this.name="NoElementsFoundError"}};var ks=P.object({command:P.string(),thoughts:P.string()}),zs=P.string().pipe(P.coerce.number());var pn=P.object({phrase:P.string()}),Pt=P.object({result:P.union([P.literal("NOT_FOUND"),P.string(),P.number(),P.array(P.unknown()),P.record(P.unknown(),P.unknown())])}),hn=P.object({thoughts:P.string(),id:P.number().int()});import{z as kt}from"zod";var it=kt.object({width:kt.number().min(200).max(1e4),height:kt.number().min(200).max(1e4)}),gn={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},Bs=Object.keys(gn);var Ge=gn["Desktop Large"];var $s=new Set(Object.values(ge));var pr={AI_ACTION:"AI action",RESOLVED_MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",AUTH_LOAD:"Load auth state",AUTH_SAVE:"Save auth state",ELEMENT_CHECK:"Element check",PAGE_CHECK:"Page check",SUCCESS:"Done"},Vs={AI_ACTION:"Ask AI to plan and execute something on the page.",RESOLVED_MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from an HTML Select <select> element based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",AUTH_LOAD:"Load auth state (cookies, local storage) from the JavaScript object format returned by 'Save auth state' and then refresh the page.",AUTH_SAVE:"Save auth state (cookies, local storage) into a JavaScript object format usable by 'Load auth state'.",ELEMENT_CHECK:"Assert on an element's state using pre-built conditions, including content, visibility, attribute value checks.",PAGE_CHECK:"Assert on the active page's state using pre-built conditions, including URL and content checks.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import{z as I}from"zod";var Xs=I.object({body:I.string(),to:I.string(),from:I.string()}),Ks=I.object({from:I.string().optional(),to:I.string().optional(),timeout:I.number().optional(),beforeDate:I.string().pipe(I.coerce.date()).or(I.date()).optional(),afterDate:I.string().pipe(I.coerce.date()).or(I.date()).optional()}),Js=I.object({inbox:I.string(),afterDate:I.string().pipe(I.coerce.date()).or(I.date()).optional(),timeout:I.number().optional(),trimWhitespace:I.boolean().optional()});var Qs=I.object({result:I.unknown(),variableUpdates:I.record(I.string(),I.unknown()).optional(),error:I.string().optional(),success:I.boolean()});import*as w from"zod";import{cloneDeep as cl}from"lodash-es";import*as _ from"zod";import{z as De}from"zod";var fn="BASE_URL";var tl={[fn]:"https://www.google.com"},yn=De.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),$e=De.object({name:De.string(),variables:De.record(De.string().describe("variable name"),De.string().describe("variable value"))});import*as ve from"zod";var Sn=ve.object({type:ve.nativeEnum(oe),generatedStep:rt.optional(),serializedCommand:ve.string().optional(),elementInteracted:ve.string().optional()});var fe=_.object({goal:_.string(),url:_.string(),browserState:_.string(),history:_.string(),numPrevious:_.number(),lastCommand:Sn.or(_.null()),returnSchema:_.string().optional()}),zt=_.object({env:_.record(_.unknown()),results:_.array(_.unknown()),inputs:_.record(_.unknown()).optional()});var ul=Object.getPrototypeOf(async function(){}).constructor;var bn=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(bn||{}),wn=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(wn||{}),hr=w.object({beforeUrl:w.string(),beforeScreenshot:w.string().optional(),afterUrl:w.string().optional(),afterScreenshot:w.string().optional(),startedAt:w.coerce.date(),finishedAt:w.coerce.date(),viewport:w.object({height:w.number(),width:w.number()}),status:w.nativeEnum(wn),message:w.string().optional(),elementInteracted:w.string().optional()}),Ae=w.object({startedAt:w.coerce.date(),finishedAt:w.coerce.date(),status:w.nativeEnum(bn),message:w.string().optional(),data:w.unknown().optional(),beforeTestContext:zt.optional(),afterTestContext:zt.optional(),failureReason:w.nativeEnum(me).optional(),details:w.unknown().describe("Parse using StepExecutionLogSchema.array() to get type safety. We don't explicitly type it because it's non-critical information.")}),Ft=Ae.merge(le).extend({results:hr.array()}),gr=Ae.merge(Le).extend({results:w.lazy(()=>Ft.array())}),fr=Ae.merge(Oe).extend({moduleName:w.string().optional(),results:w.lazy(()=>xe.array())}),yr=Ae.merge(Ue).extend({assertion:Ft.optional(),results:w.lazy(()=>xe.array()).describe("results for the block actually executed")}),Sr=Ae.merge(Be).extend({results:w.lazy(()=>xe.array())}),br=Ae.merge(We).extend({results:w.lazy(()=>xe.array())}),xe=w.discriminatedUnion("type",[gr,Ft,fr,yr,Sr,br]),El=Ae.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0}),vl=w.object({results:xe.array(),errorMessage:w.string(),errorStack:w.string().optional()});import{parseString as wr,splitCookiesString as Tr}from"set-cookie-parser";import{z as k}from"zod";var Tn=k.object({name:k.string(),value:k.string(),url:k.string().optional(),domain:k.string().optional(),path:k.string().optional(),expires:k.number().default(Date.now()/1e3+60*60*24*365),httpOnly:k.boolean().optional(),secure:k.boolean().default(!0),sameSite:k.union([k.literal("Strict"),k.literal("Lax"),k.literal("None")]).default("None")});function Cn(a){let e=[],t=Tr(a);for(let n of t){let o=wr(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let c=o.sameSite.trim().toLowerCase();if(c==="strict")r="Strict";else if(c==="lax")r="Lax";else if(c==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${c}`)}o.httpOnly===void 0&&(o.httpOnly=!1),!o.path&&o.domain&&(o.path="/");let i=Tn.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(i);let s=[i.name,...Object.keys(i)].map(c=>c.toLowerCase()),l=n.match(/\b(\w+)=([^;]*)/g);if(l)for(let c of l){let[p,h]=c.split("=");if(!p||!h)throw new Error(`Invalid key-value pair in cookie: ${c}`);s.includes(p.toLowerCase())||e.push({...i,name:p,value:h})}}return e}var Cr=k.object({origin:k.string(),localStorage:k.array(k.object({name:k.string(),value:k.string()}))}),Il=k.object({cookies:Tn.array(),origins:Cr.array()});import{z as ue}from"zod";var Ll=ue.object({x:ue.number(),y:ue.number(),correlation:ue.number()}),Ol=ue.object({searchImageBase64String:ue.string(),pageImageBase64String:ue.string(),id:ue.string().uuid(),timeoutMs:ue.number().max(1e4).min(0).optional()});import{z as J}from"zod";var Er=J.object({orgId:J.string(),cacheKeys:J.string().array()}),Pl=J.object({keyParams:Er,clientMetadata:J.string(),lockAcquisitionTimeoutMs:J.number().optional()}),kl=J.object({acquired:J.boolean(),acquiredByMetadata:J.string(),keyPrefix:J.string()}),zl=J.object({keyPrefix:J.string(),result:J.string(),ttlMs:J.number()});var Fl=5*60*1e3;import{z as ie}from"zod";import{z as F}from"zod";import{z as R}from"zod";var vr="modules",Ar="fixtures",xr="environments",Rr="chromium",En=[vr,Ar,xr,Rr];import{isValidCron as Ir}from"cron-validator";import{z as H}from"zod";var vn=1e4,An=6e4,Nr=H.object({pageLoadTimeoutMs:H.number().optional().refine(a=>a===void 0||a<=An&&a>=-1,{message:`Page load timeout must be between 0 and ${An/1e3} seconds`}),smartWaitingTimeoutMs:H.number().optional().refine(a=>a===void 0||a<=vn&&a>=-1,{message:`Smart waiting timeout must be between 0 and ${vn/1e3} seconds`}),extraHeaders:H.record(H.string(),H.string()).optional().describe("HTTP headers to be sent on every request")}),Mr=H.object({disableAICaching:H.boolean().default(!1),viewport:it.optional()}),Ve=Mr.merge(Nr),xn=H.object({cron:H.string().refine(a=>Ir(a),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:H.boolean().default(!1),env:H.string().optional(),timeZone:H.string().default("America/Los_Angeles"),jobKey:H.string().optional()}),Rn=H.object({onSuccess:H.boolean().default(!1),onFailure:H.boolean().default(!0)});var Lr=R.string().min(1).max(255).superRefine((a,e)=>{try{Dr(a)}catch(t){return e.addIssue({code:R.ZodIssueCode.custom,message:t.message,fatal:!0}),R.NEVER}}),Or=R.object({name:R.string(),default:R.boolean().optional(),defaultOnLocal:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:yn.array().optional()}),ye=R.object({id:R.string(),name:Lr,baseUrl:R.preprocess(a=>a===null?"":a,R.union([R.string().url(),R.literal("")])).optional(),schemaVersion:R.string(),advanced:Ve,retries:R.number(),envs:R.array(Or).optional()}),Jl=ye.pick({name:!0,baseUrl:!0,retries:!0}).extend({advanced:Ve}),In=R.object({createdAt:R.coerce.date(),updatedAt:R.coerce.date(),schedule:xn,notification:Rn,createdBy:R.string(),organizationId:R.string()}),Ql=ye.merge(In),Zl=ye.merge(In).merge(R.object({steps:R.array(Z)})),Ut=ye.merge(R.object({steps:R.array(Z)})),ec=ye.extend({steps:R.record(R.string(),R.unknown()).array()}),_r=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function Dr(a){if(a=a.toLowerCase().trim(),a.length===0||a.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(a))throw new Error('Name contains one of the following invalid characters: <>:"/\\|?*');if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(a))throw new Error(`"${a}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(a)||/^\s|\s$/.test(a))throw new Error("Name cannot start or end with a space or dot.");if(a.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(a==="none")throw new Error("Name cannot be 'none'.");if(En.includes(a))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(a.match(_r))throw new Error("Name cannot be a UUID. Please choose a different name.")}var sc=Te.extend({fileType:F.literal("momentic/module"),schemaVersion:F.string(),steps:F.record(F.string(),F.unknown()).array()}),lc=Te.extend({steps:F.array(F.record(F.string(),F.unknown())),schemaVersion:F.string()}),cc=ye.extend({steps:F.array(F.record(F.string(),F.unknown()))}),dc=F.object({test:F.string().describe("YAML for the test, including metadata and steps"),modules:F.record(F.string(),F.string()).describe("Map of module name to YAML for the module")});var Pr="1.0.0",Nn=ie.object({run:ie.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:ie.boolean().optional().describe("Defaults to true")}),gc=ie.object({type:ie.literal("momentic/fixture"),schemaVersion:ie.string(),name:ie.string(),description:ie.string().optional(),setup:ie.object({steps:Nn.array(),timeout:ie.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:ie.object({steps:Nn.array(),timeout:ie.number().optional().describe("Timeout for all steps in seconds")}).optional()}),fc={type:"momentic/fixture",schemaVersion:Pr,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as kr}from"zod";var bc=kr.string().array();import{z as M}from"zod";var Ic=M.array(M.object({id:M.string(),name:M.string(),fullFilePath:M.string(),testPath:M.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:M.string(),lastModified:M.coerce.date(),createdAt:M.coerce.date()}));var Nc=M.object({steps:Z.array()});var Mc=M.object({name:M.string(),baseUrl:M.string().url().optional(),environment:M.string().optional(),viewport:it.optional()}),Lc=Ut.merge(M.object({testPath:M.string()})),Oc=M.object({name:M.string(),steps:M.lazy(()=>Z.array())});var _c=Ot.array(),Dc=M.array(M.object({name:M.string(),moduleId:M.string().uuid(),numSteps:M.number()})),Pc=M.array($e),kc=M.object({defaultEnv:M.string().optional().describe("name of the default env, or undefined to unset")});import*as x from"zod";var Bc=x.object({thoughts:x.string().optional().describe("only provided if a description was provided"),target:we.optional().describe("only provided if a description was provided"),pageState:x.string().optional().describe("serialized a11y tree, only provided if a description was provided"),options:x.array(x.string()).optional().describe("provided for <select> elements only"),screenshot:x.object({data:x.string(),height:x.number().int(),width:x.number().int()}).optional().describe("only provided if returnScreenshot is true")});var Pe=x.object({matched:x.boolean(),reason:x.string().optional().describe("Human understandable description")}),zr=Pe.extend({type:x.literal("A11Y_ID")}),Fr=Pe.extend({type:x.literal("USER_SELECTOR")}),Ur=Pe.extend({type:x.literal("CSS_SELECTOR"),selectors:x.string().array()}),Br=Pe.extend({type:x.literal("A11Y_DISTANCE"),distance:x.number().optional(),closestElement:x.string().optional(),savedElement:x.string().optional()}),Wr=Pe.extend({type:x.literal("HTML_DISTANCE"),distance:x.number().optional(),closestElement:x.string().optional(),savedElement:x.string().optional()}),Hr=Pe.extend({type:x.literal("TEMPLATE_MATCHING"),elementImageUrl:x.string().url()}),Mn=x.discriminatedUnion("type",[zr,Fr,Ur,Br,Wr,Hr]);var jr={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},Gr={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},Bt=class a{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=jr[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=Gr[e],i=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&i.push("\x1B[39m"),i.push(...t),console.log(...i),o&&!Array.isArray(o))for(let[s,l]of Object.entries(o)){let c=l;l instanceof Error?c=l.message:typeof l=="object"&&(c=JSON.stringify(l,void 0,2),c=c.split(`
`).map((p,h)=>h>0?`  ${p}`:p).join(`
`)),console.log(e===0?`${r}  ${s}:`:`  ${s}:`,c)}else if(o)for(let s of o){let l=s;typeof s=="object"&&(l=JSON.stringify(s,void 0,2),l=l.split(`
`).map((c,p)=>p>0?`  ${c}`:c).join(`
`)),console.log(e===0?`${r}  `:"  ",l)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new a(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Hc=new Bt(1,{}),Wt={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>Wt,flush:()=>{},bindings:()=>({})},at={},Re=({logger:a,logKey:e,maxCount:t,intervalMs:n},o,r,...i)=>{let s=at[e];s?clearTimeout(s.timer):(s={count:0,totalCount:0},at[e]=s),s.totalCount++,s.count<t&&(s.count++,a.debug(o,r,...i)),s.timer=setTimeout(()=>{let l=at[e];l?.totalCount!==l?.count&&a.debug({logKey:e,totalCount:l?.totalCount,count:l?.count},`Debug logs were rate-limited for ${e}`),delete at[e]},n)};import{z as V}from"zod";var $r=V.object({id:V.string(),createdAt:V.coerce.date(),createdBy:V.string(),organizationId:V.string(),name:V.string(),schemaVersion:V.string().describe("Schema version for steps"),parameters:V.string().array().nullish().describe("Parameter list"),defaultParameters:V.record(V.string(),V.string()).nullish(),defaultCacheKey:V.string().nullish(),defaultCacheTtl:V.number().nullish(),numSteps:V.number()}),Kc=$r.omit({numSteps:!0}).extend({steps:V.lazy(()=>Ce.array())}),Jc=5*60*1e3;import*as u from"zod";import{z as A}from"zod";var qe={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Ht={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED",RETRYING:"RETRYING",WAITING_FOR_USER:"WAITING_FOR_USER"},Vr={PASSED:"PASSED",FAILED:"FAILED"},Se=A.string().pipe(A.coerce.date()).or(A.date()),jt=A.object({id:A.string(),runKey:A.string(),organizationId:A.string(),createdAt:Se,createdBy:A.string(),scheduledAt:Se.or(A.null()),startedAt:Se.or(A.null()),finishedAt:Se.or(A.null()),status:A.nativeEnum(Ht),expectedStatus:A.nativeEnum(Vr).or(A.null()),trigger:A.nativeEnum(qe),attempts:A.number(),failureReason:A.nativeEnum(me).nullish(),failureDetails:un.nullish(),testId:A.string().or(A.null()),testName:A.string().or(A.null()).optional(),test:A.object({name:A.string(),id:A.string()}).or(A.null()),suiteId:A.string().or(A.null()).optional()}),Gt=jt.merge(A.object({results:xe.array(),test:A.object({name:A.string(),id:A.string(),baseUrl:A.string(),advanced:Ve.optional()}).or(A.null())})),id=A.object({id:A.string(),name:A.string()});var Ie=u.object({disableCache:u.boolean()}),gd=u.object({error:u.boolean(),reason:u.string(),message:u.string()}),fd=fe.merge(Ie),Ln=It,yd=fe.merge(Ie).merge(u.object({screenshot:u.string().optional()})),On=tn,Sd=fe.pick({browserState:!0,goal:!0}).merge(Ie).merge(u.object({screenshot:u.string().optional()})),bd=fe.pick({goal:!0}).merge(Ie).merge(u.object({screenshot:u.string().describe("base64 encoded image"),hintActivatedScreenshot:u.string().describe("base64 encoded image")})),_n=hn,wd=fe.pick({goal:!0,url:!0}).merge(Ie),Dn=u.string().array(),Td=fe.pick({goal:!0,browserState:!0}).merge(Ie),Pn=pn,Cd=fe.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(Ie);var Ed=u.object({testPaths:u.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:u.string().optional(),all:u.boolean().optional(),urlOverride:u.string().optional(),customHeaders:u.record(u.string(),u.string()).optional()}),vd=u.object({message:u.string(),queuedTests:u.object({name:u.string(),id:u.string()}).array(),runIds:u.string().uuid().array()});var Ad=u.string().array(),xd=u.union([u.object({paths:u.string().array().describe("run specific test paths (e.g. todo-test)"),all:u.boolean().describe("run all tests").optional()}),u.object({path:u.string().describe("deprecated; present for backcompat")})]),Rd=u.object({tests:u.record(u.string().describe("Test name"),u.string().describe("Test YAML")),modules:u.record(u.string().describe("Module name"),u.string().describe("Module YAML"))}),qr=u.object({test:u.string().describe("test YAML"),modules:u.record(u.string().describe("moduleId"),u.string().describe("module YAML"))}),Id=qr.array(),Nd=u.object({testId:u.string(),schemaVersion:u.string(),steps:u.array(u.record(u.unknown()))}),Md=u.object({entries:u.array(_t),testId:u.string()}),Ld=u.object({steps:u.array(u.record(u.unknown())),testId:u.string(),schemaVersion:u.string(),organizationId:u.string()});var Od=u.object({testPath:u.string(),testId:u.string(),testName:u.string()}).partial().merge(u.object({trigger:u.nativeEnum(qe)}));var Yr=Gt.pick({id:!0,status:!0,testName:!0,testId:!0,test:!0,failureReason:!0,failureDetails:!0}),_d=Yr.array(),Dd=Gt.pick({startedAt:!0,finishedAt:!0,results:!0,status:!0,failureDetails:!0,failureReason:!0}).partial(),Pd=u.object({screenshot:u.string()}),kd=u.object({key:u.string()}),zd=u.object({orgId:u.string()}),Fd=u.array($e),Ud=u.array($e),Bd=u.record(u.string(),u.union([u.string(),u.boolean()])),Wd=u.object({paths:u.string().array(),env:u.string().optional(),urlOverride:u.string().optional(),customHeaders:u.record(u.string(),u.string()).optional()}),Hd=u.object({suiteRunIds:u.string().array()});import{z as q}from"zod";var Xr=q.object({content:q.string(),ids:q.string().array(),tokenLength:q.number()}),Kr=q.object({chunks:Xr.array(),numRecs:q.number()}),$d=q.object({ids:q.string().array(),score:q.number(),tokenLength:q.number()}),Vd=q.object({description:q.string(),tokenLimit:q.number()}).merge(Kr),kn=q.object({ids:q.number().array()});import{z as j}from"zod";var Jr=j.object({type:j.literal("TARGETING"),name:j.string().optional().describe("Target name for steps with multiple targets"),elementLocationDecisions:Mn.array(),pageState:j.string().optional(),targetSource:j.nativeEnum(Fe).optional()}),Qr=j.object({type:j.literal("AI_LOCATION"),matched:j.boolean(),pageState:j.string().optional(),ragUsed:j.boolean().optional(),thoughts:j.string().optional()}),Zr=j.object({type:j.literal("ASSERTION"),relevantElementsSerialized:j.string().array().optional(),pageState:j.string().optional(),ragUsed:j.boolean().optional()}),Jd=j.discriminatedUnion("type",[Jr,Qr,Zr]);import{z as ce}from"zod";var nm=ce.object({id:ce.string().uuid(),orgId:ce.string(),createdAt:Se,startedAt:Se.or(ce.null()),finishedAt:Se.or(ce.null()),status:ce.nativeEnum(Ht),trigger:ce.nativeEnum(qe),suite:ce.object({id:ce.string(),name:ce.string()}),runs:jt.array()});import{validator as lm}from"@exodus/schemasafe";var zn=a=>{a.extraHeaders&&(a.extraHeaders=Object.fromEntries(Object.entries(a.extraHeaders).filter(([e,t])=>e.trim()&&t.trim())))};import{v4 as ji}from"uuid";var Fn=(a,e)=>{try{let{hostname:t,pathname:n}=new URL(a),{hostname:o,pathname:r}=new URL(e);return t!==o||n!==r}catch{return!1}};var Un=a=>!a.toLowerCase().startsWith("http");function Ye(a,e){try{return!!new URL(a).origin.trim()}catch(t){return e?.error({url:a,err:t},"Invalid URL in check"),!1}}var Bn={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts"],relevantElementAttributes:["name","id","value","type","class","height","width","target","title","href","src","alt","role","headers","scope","checked","required","action","min","max","minlength","maxlength","multiple","pattern","placeholder","accept","data-value","data-testid","data-cy","data-test-id","data-test","data-role","data-type","data-action","data-aria-hidden","data-hidden","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function Wn(a){if(a[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(a.length>10){let l=Math.floor(a.length/8);if((a.match(/[-_:/ ]/g)??[]).length<l)return!0}if((a.match(/[^0-9a-zA-Z.]/g)??[]).length/a.length>.2)return!0;let t=(a.match(/[0-9]/g)??[]).length;if(t/a.length>.3)return!0;let n=(a.toLowerCase().match(/[aeiou]/gi)??[]).length;if((a.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=(a.match(/[A-Z]/g)??[]).length,i=(a.match(/[a-z]/g)??[]).length,s=Math.ceil(a.length*.3);return!!(i&&t&&Math.abs(i-t)<s||i&&r&&Math.abs(i-r)<s)}import{randomUUID as $n}from"crypto";import{distance as Vt}from"fastest-levenshtein";import{cloneDeep as Vn}from"lodash-es";import ei from"p-timeout";var Hn=new Set(["about:blank","chrome-error://chromewebdata/"]),jn=3,ae="data-momentic-id",Gn=500,$t=["button","image","generic","graphics-symbol","tab","link","menuitem","group"];var ti=["focusable","keyshortcuts","controls","live","relevant","orientation"],ni=["selected","readonly","modal","required","invalid"],oi=["id","name","role","content"],ri=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","image","svgroot","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],ii=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree","activeAriaModalDialog"],ai=["menulistpopup","statictext","inlinetextbox"],si=80,lt=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],li=["cite"],ci={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"],separator:["hr"]},qn={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},qt=class a{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;domNode;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){this.domNode=e.domNode,this.tagName=e.domNode.tagName||void 0;let t=e.domNode.attributes.id;this.name=this.name||e.domNode.attributes.name||(t&&!Wn(t)?t:""),this.role=this.role||(e.domNode.attributes.role??""),hi(this.properties,e.domNode)}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return ri.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=qn){let t=Object.assign({},qn,e),{indentLevel:n,noChildren:o,noProperties:r,noID:i,noContent:s}=t,l=Vn(this.properties),c=" ".repeat(n),p=this.role||"",h=this.tagName??"unknown",m=this.name;p==="heading"&&m==="heading"&&(m="");let g=lt.includes(this.role)||li.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${c}${m}
`;let f=`${c}<${h}`;if(!i&&!g&&(f+=` id="${this.id}"`),p&&p!=="generic"&&p!==h&&!(ci[p]??[]).includes(h)&&(f+=` role=${JSON.stringify(p)}`),m&&(f+=` name=${JSON.stringify(m)}`),this.content&&!s&&(f+=` content=${JSON.stringify(this.content)}`),Object.keys(l).length>0&&!r&&Object.entries(l).forEach(([S,T])=>{if(!ti.includes(S)){if(ni.includes(S)&&(!T||T==="false"))return;if(S==="value"&&s&&(l.type==="text"||this.role==="textbox"))return;if(S==="type"&&T===h)return;typeof T=="string"?f+=` ${S}="${T}"`:typeof T=="boolean"?T?f+=` ${S}`:f+=` ${S}={false}`:typeof T<"u"&&(f+=` ${S}={${JSON.stringify(T)}}`)}}),h==="::before"||h==="::after"){let S="";for(let T of this.children)S+=T.serialize({...e,indentLevel:n,neighbors:0});return S}let y=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||y)f+=` />
`;else{let S="";for(let b of this.children)S+=b.serialize({...e,indentLevel:n+2,neighbors:0});let T=S.trim();T.length<=si&&!T.includes(`
`)?f+=`>${T}</${h}>
`:f+=`>
${S}${c}</${h}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let S=this.parent.children.findIndex(N=>N.id===this.id),T=S>0?this.parent.children[S-1]?.serialize({...e,neighbors:0}):"",b=S<this.parent.children.length-1?this.parent.children[S+1]?.serialize({...e,neighbors:0}):"";return`${T||""}
${f}
${b||""}`}return f}shallowClone(){let e=new a({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=Vn(this.properties),e}},Yt=class a{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,i=!1){let s=e.has(r.id)||r.id===t?.id,l=r.shallowClone(),c=r.children,p=!1,h=[];for(let m of c){let g=n(m,s||p);g&&(h.push(g),g.parent=l,p=!0)}if(l.children=h,s||p)return l;if(lt.includes(r.role)&&i)return l}let o=n(t);return new a(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function di(a){return a.name?.value?`"${a.name.value}"`:a.role?.value&&a.role.value!=="none"&&a.role.value!=="generic"?`"${a.role.value}"`:`"${a.nodeId}"`}function mi(a,e,t,n){return a.bounds.x===null||a.bounds.y===null||a.bounds.height===null||a.bounds.width===null||a.bounds.width===0||a.bounds.height===0?!0:a.bounds.x+a.bounds.width<e.leftBound||a.bounds.x>e.rightBound?(Re({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:a,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):a.bounds.y+a.bounds.height<e.upperBound||a.bounds.y>e.lowerBound?(Re({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:a,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):a.computedStyles.display==="none"?(t.debug({domNode:a},"Filtering out node since it has display none"),!1):!0}async function Yn({node:a,parent:e,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:s,viewportDetails:l}){if(!e&&a.parentId)throw new Error(`Got no parent for accessibility node ${a.nodeId}: ${JSON.stringify(a)}`);let c=(b,N={})=>{},p=a.backendDOMNodeId,h=ai.includes((a.role?.value).toLowerCase());if(!h&&p===void 0)return c("Filtering out node since it doesn't exist in the DOM"),[];let m=p?t.backendIdToNode[p]:void 0;if(!h&&!m)try{let b=await ei(o.send("DOM.describeNode",{backendNodeId:p}),{milliseconds:500,fallback:()=>{r.debug("Timeout getting node from CDP while processing a11y tree")}});if(b&&b.node.nodeName.toLowerCase()==="slot"&&b.node.distributedNodes?.length)r.debug({redirectedDomNode:m,parentAXNode:e?.getNodeOnlySerializedForm(),originalAXNode:a,cdpResult:b},"Redirected to assigned slot");else return c("Filtering out node since it doesn't exist in the DOM",{cdpResult:b}),[]}catch(b){return c("Filtering out node since it doesn't exist in the DOM",{err:b}),[]}if(m&&e&&s&&l&&a.backendDOMNodeId&&!mi(m,l,r,i))return m&&(m.momenticIgnored=!0),[];let g=a.name?.value?typeof a.name.value=="string"?a.name.value:`${a.name.value}`:"",f=a.value?.value?typeof a.value.value=="string"?a.value.value:`${a.value.value}`:"";if(g==="momentic_cursor"||g.includes("chakra"))return m&&(m.momenticIgnored=!0),[];let y=new qt({domNode:m,id:parseInt(a.nodeId),role:a.role?.value||"",name:g,content:f,properties:a.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+di(a),backendNodeID:a.backendDOMNodeId,ignoredByCDP:a.ignored});for(let b of a.childIds??[]){if(!b)continue;let N=n.get(parseInt(b));if(!N)continue;let O=await Yn({node:N,parent:y,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:s,viewportDetails:l});O.length&&(y.children=y.children.concat(O))}if(y.role==="StaticText"&&(y.children=[]),y.children.length===1&&y.children[0].role==="StaticText"){let b=y.name,N=y.children[0]?.name;(b===N||!N)&&(y.children=[])}let S=[];for(let b=y.children.length-1;b>=0;b--){let N=y.children[b];if(N.role!=="StaticText"){S.push(N);continue}if(b===0||y.children[b-1].role!=="StaticText"){S.push(N);continue}y.children[b-1].name+=` ${N.name}`}if(y.children=S.reverse(),y.role==="generic"&&y.children.length===1){let b=y.children[0];if(y.name&&!lt.includes(b.role)&&y.name===b.name)return m&&(m.momenticIgnored=!0),y.children}if(!y.isInteresting()&&a.parentId)return m&&(m.momenticIgnored=!0),y.children;for(let b of y.children)b.parent=y;return[y]}function Xn({node:a,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){a.id=r,r+=1,e.set(a.id,a),a.dataMomenticId?t.set(a.dataMomenticId,a):lt.includes(a.role)||Re({logger:n,logKey:o,maxCount:5,intervalMs:3e3},{node:a.serialize({neighbors:1,maxLevel:1}),role:a.role,logKey:o},"Node has no data-momentic-id");for(let i of a.children)r=Xn({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}async function Kn({a11yGraph:a,domGraph:e,logger:t,cdpClient:n,filterByViewport:o,viewportDetails:r}){if(!a.root)throw new Error("A11y tree has no root");let i=$n();a.allNodes=a.allNodes.filter(h=>h.ignored?!h.ignoredReasons?.find(g=>ii.includes(g.name)):!0);let s=new Map;for(let h of a.allNodes)s.set(parseInt(h.nodeId),h);let l=await Yn({node:a.root,domGraph:e,parent:null,inputNodeMap:s,cdpClient:n,logger:t,callId:$n(),filterByViewport:o,viewportDetails:r});if(l.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(l)}`);if(l.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let c=new Map,p=new Map;return Xn({node:l[0],a11yIdNodeMap:c,dataMomenticIdMap:p,logger:t,callId:i}),new Yt(l[0],c,p)}var Xt=(a,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=a[o];if(typeof r!="string"||!r.trim()||e[o]===void 0)continue;let i=Vt(r,e[o])/Math.min(r.length,e[o].length);i===0?t+=2:i<=.1&&t++}if(e.numChildren!==void 0&&(a.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=a.getNodeOnlySerializedForm(),r=Vt(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.1&&t++}if(e.serializedForm){let o=a.serialize({noID:!0,maxLevel:1,neighbors:1}),r=Vt(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.1&&t++}return t},ui=["href","src"];function pi(a,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return ui.includes(a)&&e.length>60?e.slice(0,50)+"...":a==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function hi(a,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{Bn.relevantElementAttributes.includes(t)&&!oi.includes(t)&&!a[t]&&!t.startsWith("aria")&&t!=="class"&&(a[t]=pi(t,n))})}function Jn(a,e,t=4e3){let n=[],o=Math.floor(t/2),r=`id="${a}"`,i=0,s=e.indexOf(r,i);for(;s!==-1;){let l=Math.max(i,s-o),c=Math.min(e.length,s+o),p=e.slice(l,c);n.push(p),i=c,s=e.indexOf(r,i)}return n.join(`
...
`)}var Ne={r:147,g:196,b:125,a:.55},Qn={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:Ne,paddingColor:Ne,borderColor:Ne,marginColor:Ne,eventTargetColor:Ne,shapeColor:Ne,shapeMarginColor:Ne,showInfo:!0,showAccessibilityInfo:!0};var ct=["display","opacity","visibility","height","max-height","overflow"];function Zn({snapshot:a,devicePixelRatio:e,pageFrameId:t}){let n=a.strings,o=a.documents,r=o[0];t&&(r=o.find(l=>n[l.frameId]===t));let i={};return{root:gi(r,n,e,i),backendIdToNode:i}}function gi(a,e,t,n){let o=a.layout,r={};o.nodeIndex.forEach((f,y)=>{r[f]=y});let i=o.styles,s=o.bounds??[],l=a.nodes,c=l.backendNodeId??[],p=l.attributes??[],h=l.parentIndex??[],m=l.nodeName??[],g=l.inputChecked??{index:[]};for(let f=0;f<c.length;f++){let y=c[f],S=p[f]??[],T=h[f]&&h[f]>=0?h[f]:null,b=r[f],N;b?N=s[b]??[]:N=[];let O={backendNodeId:y,bounds:{x:N[0]??null,y:N[1]??null,width:N[2]??null,height:N[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:T?c[T]:null,tagName:m[f]!==void 0?e[m[f]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};O.parentBackendNodeId&&n[O.parentBackendNodeId].children.push(y);for(let Y of Object.keys(O.bounds)){let Q=Y;O.bounds[Q]!==null&&(O.bounds[Q]/=t)}let de=i[f]??[];for(let Y=0;Y<de.length&&!(Y>=ct.length);Y++){let Q=de[Y];if(!Q||isNaN(Q))continue;let he=e[Q];if(!he)continue;let X=ct[Y];O.computedStyles[X]=he}for(let Y=0;Y<S.length;Y+=2){let Q=S[Y],he=S[Y+1];if(!Q||!he)continue;let X=e[Q],ze=e[he];!X||!ze||(O.attributes[X]=ze)}g.index.includes(f)&&(O.attributes.checked="true"),n[O.backendNodeId]=O}return n[c[0]]}async function Ke(a){return a.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var z=(a=1e3)=>new Promise(e=>setTimeout(()=>e(),a));function eo(){return window.lastCursorPos}function to(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function no(){window.globalHintManager&&window.globalHintManager.reset()}function oo(){let a={addIdsToElement:(e,t)=>{let n="getElementsByTagName"in e?e.getElementsByTagName("*"):e.querySelectorAll("*"),o=t;for(let r=0;r<n.length;r++){let i=n[r];i&&(i.setAttribute("data-momentic-id",`${o}`),i.setAttribute("aria-keyshortcuts",`${o}`),o++,i.shadowRoot&&(o=a.addIdsToElement(i.shadowRoot,o)))}return o}};return a.addIdsToElement(document.body,1)}async function Je(a,e){let t=Date.now();for(;Date.now()-t<8e3;){try{if(await a.evaluate(()=>{let o=window;return!!(o.generateCssSelectors&&o.evaluateCssSelectors&&o.generateHtmlCacheAttributes&&o.ldist)},{timeout:1e3}))return}catch{}e.debug("Waiting for momentic browser scripts to load..."),await z(500)}throw new Error(`Failed to load momentic browser scripts on page ${a.url()}`)}var ro=`(function () {
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
})()`;var io=({nodeOnlySerializedHtml:a})=>{let e=window;if(!e.ldist||!e.serializeElementOnlyWithText||!e.getAllElements)return{error:"Momentic core libraries not found"};let t=e.getAllElements(),n,o,r=1/0,i;for(let s of t){let l=e.serializeElementOnlyWithText(s),c=e.ldist(a,l);c<r?(r=c,o=l,n=s.getAttribute("data-momentic-id")??void 0,i=void 0):c===r&&(i=l)}return i?{error:`[MOMENTIC] Multiple HTML elements with same distance (${r}) found:
      ${i}
      ==================
      ${o}
      `}:{dataMomenticId:n,closestDistance:r,closestNodeSerialized:o}};var fi=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),yi=new Set(["script","document"]),Si=["cdn.doubleverify.com","securepubads.g.doubleclick.net","pagead2.googlesyndication.com","googleads.g.doubleclick.net","static.criteo.net","intercom.io","googletagmanager.com","google-analytics.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","px.ads.linkedin.com","www.clarity.ms","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms","app.posthog.com","soraban.com","rs.fullstory.com","api2.amplitude.com"],bi=["youtube.com/api/stats","play.google.com/log","youtube.com/youtubei/v1/log_event","retool.com/api/ddMetric","google.com/xjs/_/js"];function Kt(a){return`${a.resourceType()} ${a.method()} ${a.url()}`}function ao(a){return a=a.replace(/^www\./,""),a}function so(a,e){if(!fi.has(a.resourceType()))return!1;let t,n,o;try{t=new URL(e),o=a.url(),n=new URL(o)}catch{return!0}return!n.hostname.trim()||Si.some(r=>n.hostname.includes(r))||bi.some(r=>o.includes(r))?!1:yi.has(a.resourceType())||a.method()!=="GET"?!0:ao(n.hostname).includes(ao(t.hostname))}import Wu from"nodejs-file-downloader";import{tmpdir as wi}from"os";import Gu from"p-timeout";import Jt,{basename as Vu,dirname as qu}from"path";var Ti="file://",Xu=Jt.join(wi(),"momentic","downloads");var Ku=50*1024*1024;function lo(a,e){return`${Ti}${a}/${e}`}function co(a){let e=Jt.extname(a),t=Jt.basename(a,e);return a=(t.length>100?t.slice(t.length-100):t)+e,a=a.trim().replaceAll(" ","_"),a}async function uo({locator:a,logger:e}){let[t,n]=await a.evaluate(r=>[r.tagName.toLowerCase(),r.getAttribute("class")??""]);if(t!=="input"||!n.toLowerCase().includes("chakra"))return a;let o=await a.boundingBox({timeout:1e3});if(o===null)return e.warn({elementDisplayString:await Ke(a)},"Attempting to click on element with no bounding box"),a;if(o.width!==1||o.height!==1)return a;try{await Je(a.page(),e);let r=await a.evaluate(s=>{let l=window;if(!l.CssSelectorGenerator)return{error:"[Momentic] Missing CSS selector libraries"};let c=s.parentElement;return c?l.CssSelectorGenerator.getCssSelector(c,{}):{error:"Input click target has no parent for redirection"}});if(typeof r=="object")throw new Error(r.error);let i=a.page().locator(r);return await i.waitFor({state:"attached",timeout:1e3}),e.info(`Redirected click to parent element with selector: ${r}`),i}catch(r){return e.error({err:r},"Failed finding parent label for Chakra element"),a}}var Gi=wo(zi(),"momentic","chromium"),ke=process.env.TWO_CAPTCHA_KEY,pt=Bi(Fi);pt.use(Wi({provider:{id:"2captcha",token:ke},visualFeedback:!0}));async function Qt(a,e){let t,n;for(let o=0;o<4;o++)try{return t=a.pages(),(await Promise.all(t.map(async r=>({title:await r.title(),url:r.url()})))).filter(r=>Ye(r.url,e))}catch(r){n=r,await z(500)}throw new Error(`Failed to get tab titles after all retries: ${n?.message}`)}async function $i({context:a,localMode:e,browserSettings:t,logger:n}){t.extraHeaders&&await a.setExtraHTTPHeaders(t.extraHeaders),await a.grantPermissions(["clipboard-read","clipboard-write","microphone","camera"]);let o=[a.addInitScript({content:He.cssGeneratorLibJs}),a.addInitScript({content:He.htmlUtilsLibJs})];e&&o.push(a.addInitScript({content:ro})),a.on("close",()=>{n.debug("Context was closed")}),await Promise.all(o)}var Zt=class a{contextHandlersCleanup;browser;context;page;systemDevicePixelRatio;userControlledBrowserSettings;pageLoadPromise=null;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;enricher;storage;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;viewport;onTabsChange=void 0;constructor({storage:e,enricher:t,browser:n,context:o,page:r,baseUrl:i,logger:s,localMode:l,cdpClient:c,userBrowserSettings:p,viewport:h,onTabsChange:m}){zn(p),this.storage=e,this.enricher=t,this.browser=n,this.context=o,this.cdpClient=c,this.page=r,this.baseURL=i,this.logger=s,this.userControlledBrowserSettings=p,this.localMode=!!l,this.viewport=h||Ge,this.onTabsChange=m}static USER_AGENT=bo["Desktop Chrome"].userAgent;static async init({baseUrl:e,logger:t,storage:n,enricher:o,userBrowserSettings:r,browserArgs:i,contextArgs:s,onClose:l,waitForLoad:c=!0,localMode:p,localAppUrl:h,extensionPath:m,skipPageSetup:g,timeout:f,browserbaseConnectUrl:y,onTabsChange:S}){process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY="1";let T={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...i??{}},b={viewport:Ge,userAgent:bo["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...s??{}},N=null,O,de;if(p)O=await pt.launchPersistentContext(Gi,{...T,...b,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${h}`,`--load-extension=${m}`,"--test-type=browser","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"],baseURL:e}),de=O.pages()[0],l&&de.on("close",()=>{l()});else if(y){N=await pt.connectOverCDP(y);let X=N.contexts()[0];if(!X)throw new Error("Failed to get browserbase default context");let ze=X.pages()[0];if(!ze)throw new Error("Failed to get browserbase default page");O=X,de=ze}else{N=await pt.launch({...T,args:["--disable-dev-shm-usage","--no-first-run","--renderer-process-limit=3","--disable-site-isolation-for-policy","--disable-site-isolation-trials","--autoplay-policy=user-gesture-required","--disable-add-to-shelf","--disable-desktop-notifications","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]});let X={...b,baseURL:e};O=await N.newContext(X),t.debug({contextArgs:X},"Browser initialization context args"),de=await O.newPage()}await $i({context:O,logger:t,localMode:!!p,browserSettings:r});let Y=await a.initCDPSession(O,de,t,f),Q=new a({browser:N,context:O,page:de,baseUrl:e,logger:t,storage:n,enricher:o,localMode:p,userBrowserSettings:r,cdpClient:Y,viewport:b.viewport||Ge,onTabsChange:S});Q.systemDevicePixelRatio=b.deviceScaleFactor;let he=async()=>{try{await Q.navigate({url:e,initialNavigation:!g,loadTimeoutMs:f})}catch(X){if(t.error({err:X},"Failed to initialize Chrome browser"),c)throw X}};return c?await he():he(),Q}registerContextHandlers(){if(this.contextHandlersCleanup)return;let e=t=>this.handleNewPageEvent(t);this.context.on("page",e),this.contextHandlersCleanup=()=>{this.context.off("page",e)}}async handleAvailableTabsChange(){try{let e=await Qt(this.context,this.logger),t=this.page.url();this.onTabsChange?.(e,t)}catch(e){this.logger.error({err:e},"Error sending available tabs to frontend")}}async handlePageErrorEvent(e){}handlePageClosedEvent(e){if(!this.browser||!this.browser.isConnected())return;(async()=>{try{if(this.page!==e){this.logger.info({url:e.url()},"Detected background page was closed"),this.handleAvailableTabsChange();return}this.logger.info({url:e.url()},"Detected active page was closed, switching to another tab");let n=this.context.pages();for(let o=n.length-1;o>=0;o--){let r=n[o];if(!(!r||r.isClosed()||!Ye(r.url()))){this.logger.info(`Automatically switching to tab ${o} after close: ${r.url()}`),await this.switchToPageByIndex(r,o);break}}}catch(n){this.logger.warn({err:n},"Error in page close event handler")}})()}handleNewPageEvent(e){try{this.handleNewPageEventHelper(e),this.handleAvailableTabsChange()}catch(t){this.logger.warn({err:t},"Error handling new page open, continuing....")}}handleNewPageEventHelper(e){e.on("close",n=>this.handlePageClosedEvent(n)),e.on("pageerror",n=>this.handlePageErrorEvent(n));let t=e.url().trim();if(!t){this.logger.debug("Not waiting for blank url that is likely triggered by a download link");return}this.logger.debug({url:t},"Detected new page after action, waiting for load to complete"),this.recordUrlVisited(t),this.pageLoadPromise=(async()=>{await e.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await e.waitForLoadState("load",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}finally{this.pageLoadPromise=null}})()}async getLocatorFromCdpFrame(e,t){let n=this.page;for(let s of t)n=n.frameLocator(`iframe[src=${JSON.stringify(s)}]`);let o=this.getAttributeFromStringArray(e.attributes??[],"src");if(!o)throw new Error(`Got iframe without src attribute: ${JSON.stringify(e)}`);let r=n.locator(`iframe[src=${JSON.stringify(o)}]`),i=await(await r.evaluateHandle(s=>s)).asElement().contentFrame();if(!i)throw new Error(`Got null frame from locator: ${r}`);await i.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await i.waitForLoadState("load",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3})}catch(s){this.logger.error({err:s,frameSrc:o},"Timeout elapsed waiting for frame to fully load, continuing anyways...")}return i}async getMatchingFrame(e){if(e.type!=="url")throw new Error("Only url frame identifiers are supported now");let t=e.url,o=[{node:(await this.cdpClient.send("DOM.getDocument",{pierce:!0,depth:-1})).root,srcChain:[]}],r=[];for(;o.length>0;){let i=o.pop(),s=i.node,l=i.srcChain;if(s.nodeName.toLowerCase()==="iframe"){let c=this.getAttributeFromStringArray(s.attributes??[],"src");if(!c)continue;t.startsWith("/")&&t.endsWith("/")?new RegExp(t.slice(1,-1)).test(c)&&r.push({node:s,frame:await this.getLocatorFromCdpFrame(s,l)}):t.trim()===c.trim()&&r.push({node:s,frame:await this.getLocatorFromCdpFrame(s,l)}),l=[...l,c]}for(let c of s.children??[])o.push({node:c,srcChain:l});s.contentDocument&&o.push({node:s.contentDocument,srcChain:l})}if(r.length===1)return r[0];throw r.length>1?new Error(`Found multiple frames with src matching '${t}'. Please use a more specific selector.`):new Error(`Failed to find frame with src matching: ${t}`)}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="",o;for(;e<3;){try{if(this.activeFrame.type==="url")n=this.activeFrame.url,t=(await this.getMatchingFrame(this.activeFrame)).frame;else throw new Error(`Frame identifier type ${this.activeFrame.type} is not yet supported`);if(t)return t}catch(r){o=r}await z(250),e++}throw new W("InternalWebAgentError",o?o.message:`Failed to find frame with src matching '${n}' on page`)}static async initCDPSession(e,t,n,o=8e3){let r=2,i=async()=>{try{let l=await e.newCDPSession(t);return l.on("Target.targetCrashed",c=>{n.error({payload:c},"CDP session crashed, Momentic will likely not function correctly")}),l.on("Inspector.targetCrashed",c=>{n.error({payload:c},"CDP inspector session crashed, Momentic will likely not function correctly")}),await l.send("Accessibility.enable"),await l.send("DOM.enable"),await l.send("Overlay.enable"),l}catch(l){if(r>0)return n.debug({err:l},"Failed to initialize CDP session, re-creating CDP client"),await z(500),r--,i();throw l}};return await ut(i(),{milliseconds:o,fallback:()=>{throw new Error(`Failed to initialize session within page load timeout (${t.url()})`)}})}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&(this.logger.debug("Clearing cookies"),await this.context.clearCookies());let t=this.context.pages();for(let n=0;n<t.length;n++){if(e.clearStorage){let o=t[n].url();this.logger.debug(`Clearing local storage for tab ${o}`);try{this.originsVisited.delete(new URL(o).origin)}catch{}try{await t[n].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(r=>{r.forEach(i=>{i.name&&indexedDB.deleteDatabase(i.name)})})},{timeout:1e3})}catch(r){this.logger.debug({err:r},"Failed clearing site data, continuing...")}}n!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[n].url()}`),await t[n].close())}if(this.page=this.context.pages()[0],this.page.isClosed()){this.logger.debug("Page is closed, exiting reset early");return}if(this.cdpClient=await a.initCDPSession(this.context,this.page,this.logger,e.timeout),e.clearStorage)for(let n of this.originsVisited)this.logger.debug({origin:n},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:n,storageTypes:"all"}),this.originsVisited.delete(n);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async toggleHints(e){let t=this.page;e.state==="on"?(await t.addStyleTag({content:He.vimiumCss}),await t.addScriptTag({content:He.vimiumJs}),await t.evaluate(to,{timeout:1e3})):await t.evaluate(no,{timeout:1e3})}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){if(!this.browser)return;let e=this.browser;this.browser=null,this.contextHandlersCleanup?.();try{this.originsVisited.clear(),await this.page.close(),await this.context.close(),await e.close()}catch(t){throw new Error(`Error cleaning up browser: ${t}`)}finally{this.browser=null}}get closed(){return!this.browser||!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}url(){return this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let i=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:i}}async screenshot(e){let{retries:t=1}=e;try{let n=await this.screenshotHelper({...e,retries:t});if(n.byteLength>5e6)this.logger.error("Page screenshot is greater than 5MB, which may cause performance issues with some AI models");else if(n.length===0)throw new Error("Got empty screenshot");return n}catch(n){if(t>0)return this.logger.debug({err:n},"Failed taking screenshot, retrying..."),await z(500),this.screenshot({...e,retries:t-1});throw n}}async screenshotHelper({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,timeout:i,clearHighlights:s=!1}){s&&await this.removeAllHighlights();let l={fullPage:!1,type:"jpeg",quality:t,scale:n,caret:r?"hide":"initial",path:o,timeout:i??4e3};e&&(l.scale="css");let c;if(l.scale==="css"||l.path)c=await this.page.screenshot(l);else{let p=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});c=Buffer.from(p.data,"base64")}if(!e)return c;if(e){let p;"id"in e?p=(await this.resolveTarget(null,e)).locator:p=e;let h=await p.boundingBox();if(!h)throw new Error("Attempted to screenshot an element that is not visible on the page");let{x:m,y:g,width:f,height:y}=h;if(!f||!y)throw new Error("Attempted to screenshot an element with zero width or height");if(m<0||g<0)throw new Error("Attempted to screenshot an element with negative coordinates");m=Math.floor(m),g=Math.floor(g),f=Math.ceil(f),y=Math.ceil(y);try{c=await Hi(c).extract({left:m,top:g,width:f,height:y}).toBuffer()}catch(S){throw new Error(`Failed taking element screenshot at coordinates (${m}, ${g}) with size (${f}, ${y}): ${S}`)}}return c}async getViewport(){return this.viewport}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n,networkIdleTimeoutMs:o=0}){this.registerContextHandlers();let r=n??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3;Un(e)&&(e=new URL(e,this.baseURL).toString()),this.logger.debug(`Navigating to ${e}`),this.recordUrlVisited(e);let i=Date.now(),s=async()=>{try{await this.page.goto(e,{timeout:r,waitUntil:"domcontentloaded"})}catch(c){throw new W("ActionFailureError",c.message)}try{await this.page.waitForLoadState("load",{timeout:r})}catch(c){this.logger.debug({err:c},"Timeout elapsed waiting for load state, continuing anyways...")}};try{await this.wrapPossibleNavigation(s,o),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-i)}ms`)}catch(c){if(c instanceof Error&&c.message.includes("ERR_ABORTED")){this.logger.error({err:c},"Navigation error, possibly due to user cancellation");return}throw c}let l=this.url();if(Hn.has(l))throw new W("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t)try{await this.exposeRecordingBindings()}catch(c){c instanceof Error&&c.message.includes("already registered")||this.logger.error({err:c},"Failed to install Momentic libraries for action recording")}this.handleAvailableTabsChange(),this.logger.info({url:e,urlAfterNav:l},"Navigation complete")}async type(e,t={}){let{clearContent:n,pressKeysSequentially:o=!1}=t;n&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),o?await this.page.keyboard.type(e):await this.page.keyboard.insertText(e)}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:4e3})}async highlight(e,t){try{let n=await this.resolveTarget(null,e,{skipFetchTree:!0});return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.debug({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})},{timeout:1e3})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{let r=window;r.momenticIsEligible=p=>{let m=window.getComputedStyle(p,null).getPropertyValue("display");if(m==="none"||m==="contents")return!1;let g=p.getBoundingClientRect();return!(!g.height||!g.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let i=0;for(;!r.momenticIsEligible(n)&&i<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,i++}let s=n.style.getPropertyValue("outline"),l=n.style.getPropertyPriority("outline");n.style.setProperty("outline","5px dashed rgb(255, 0, 153)","important");let c=`momentic${Math.floor(Math.random()*1e7)}`;r[c]=()=>{n.style.removeProperty("outline"),n.style.setProperty("outline",s,l)},r.removeHighlightTimers.push(setTimeout(()=>{r[c](),r.removeHighlightFunctions?.[c]&&delete r.removeHighlightFunctions[c]},2750)),r.removeHighlightFunctions[c]=r[c]},t?.color,{timeout:1e3}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}recordUrlVisited(e){try{this.originsVisited.add(new URL(e).origin)}catch(t){this.logger.warn({err:t},"Failed to record origin visited")}}async wrapPossibleNavigation(e,t){if(t||(t=this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3),t===0)return e();let n=this.url(),o=Date.now(),r=Date.now(),i=new Map,s=new Map,l=f=>{try{let y=Kt(f.request());s.set(y,(s.get(y)??0)+1);let S=f.status();S>=500&&this.logger.warn({request:y,status:S},"Received 500 level response")}catch(y){this.logger.error({err:y},"Failed to process response in wrap navigation listener")}},c=f=>{try{let y=Kt(f);if(!so(f,n))return;i.set(y,(i.get(y)??0)+1),r=Date.now()}catch(y){this.logger.error({err:y},"Failed to process request in wrap navigation listener")}};this.pageLoadPromise=null,this.page.on("response",l),this.page.on("request",c);let p=await e(),h=new Set,m=!1;for(;;){if(Date.now()-o>t){m=!0;break}if(Date.now()-r<500){await z(250);continue}let f=!1;h=new Set;for(let y of i.keys())i.get(y)!==s.get(y)&&(f=!0,h.add(y));if(f){await z(250);continue}break}m?this.logger.debug({requests:Array.from(i.keys()).slice(0,10),unfinishedRequests:Array.from(h),responses:Array.from(s.keys()).slice(0,10)},"Timeout elapsed waiting for network stable"):this.logger.debug({url:this.url(),requests:Array.from(i.entries()).slice(0,10)},`Network stable in ${Math.floor(Date.now()-o)}ms`),this.page.off("request",c),this.page.off("response",l),await ut(Promise.resolve(this.pageLoadPromise),{milliseconds:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3,fallback:()=>{this.logger.error("Timed out waiting for new page to load")}});let g=this.url();if(this.recordUrlVisited(g),Fn(g,n)){this.logger.debug({startUrl:n,newUrl:g},"Detected same-page url change in wrapPossibleNavigation, waiting for load state");let f;try{f=await this.getUserPageOrFrame()}catch(y){this.logger.debug({err:y},"Could not get frame after url change, defaulting to page instead"),f=this.page}await f.waitForLoadState("domcontentloaded",{timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3});try{await f.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}return p}async loadAuthState(e){let t=this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3;await this.page.waitForLoadState("domcontentloaded",{timeout:t});try{await this.page.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load event before setting auth state, continuing...")}for(let o of e.cookies)await this.setCookie(o);await this.cdpClient.send("DOMStorage.enable");let n=0;for(let o of e.origins??[])for(let r of o.localStorage)try{await this.cdpClient.send("DOMStorage.setDOMStorageItem",{storageId:{securityOrigin:new URL(o.origin).origin,isLocalStorage:!0},key:r.name,value:r.value}),n++}catch(i){this.logger.warn({err:i,origin:o},"Failed to set local storage entry");break}this.logger.debug({storageState:e},`Loaded ${e.cookies.length} cookies and ${n} local storage entries`),await this.refresh()}async saveAuthState(){return this.context.storageState()}async getOpenPageUrls(){return(await Qt(this.context,this.logger)).map(t=>t.url)}saveA11yDetailsToCache(e,t){t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()}async saveNodeDetailsToCache(e,t,n,o,r){if(t&&(this.saveA11yDetailsToCache(t,n),t.properties.hidden&&t.properties.hidden!=="false"&&this.logger.warn({serializedForm:t.getSerializedFormWithContext()},"Chose hidden element for action")),!(n.generatedSelectors&&n.generatedSelectors.length>1)){if(o)n.dataMomenticId=o;else{this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}try{let i=await this.fetchHtmlAttributes(e,o);Object.assign(n,i)}catch(i){this.logger.debug({err:i},"Failed to fetch HTML attributes for target")}if($t.includes(n?.role??""))try{await this.saveElementVisualAttributes(n,r)}catch(i){this.logger.debug({err:i},"Failed to get element screenshot while saving node details")}}}async saveElementVisualAttributes(e,t){if(!t)return;await t.scrollIntoViewIfNeeded({timeout:4e3});let n=await t.boundingBox();if(!n||!n.width||!n.height){e.boundingBox=void 0,e.screenshotUrl=void 0;return}let{x:o=0,y:r=0,width:i=0,height:s=0}=n;if(e.boundingBox&&Math.abs(e.boundingBox.width-i)<1&&Math.abs(e.boundingBox.height-s)<1&&Math.abs((e.boundingBox.x??0)-o)<1&&Math.abs((e.boundingBox.y??0)-r)<1)return;this.logger.debug({oldBox:e.boundingBox,newBox:n},"Updating element screenshot");let l=await this.screenshot({target:t,scale:"css",timeout:4e3});e.boundingBox=n,e.screenshotUrl=await this.storage.uploadScreenshot(l)}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2||!t.serializedHtml)throw new Error("Insufficient data to resolve target using CSS selectors");let n;try{n=await e.evaluate(l=>window.evaluateCssSelectors(l),{selectors:t.generatedSelectors,lDistThresholdLax:.5,lDistThresholdStrict:.15,serializedNodeWithContext:t.serializedHtml})}catch(l){throw new Error(`Failed to evaluate CSS selectors in browser: ${l}`)}if(n.result)this.logger.debug(n,"CSS selector evaluation returned an element");else throw new Error("CSS selector evaluation returned no eligible elements");let o=n.result,r=parseInt(o.dataMomenticId),i=this.dataMomenticIdToNodeMap.get(r);if(i&&Xt(i,t)<4){let c="Rejecting best CSS selector candidate due to low similarity score";throw new Error(c)}let s=e.locator(o.workingSelectors[0]);return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(e,i,t,r,s),t.generatedSelectors=Array.from(new Set([...o.workingSelectors??[],...t.generatedSelectors??[]])),{a11yNode:i,displayString:o.serializedElement,locator:s,decisions:[{type:"CSS_SELECTOR",matched:!0,reason:`${o.workingSelectors.length} CSS selectors matched the following element: ${o.serializedElement}`,selectors:o.workingSelectors}]}}async resolveTarget(e,t,n={}){let{skipFetchTree:o=!1,targetName:r}=n;this.logger.debug({target:t,skipFetchTree:o},"Resolve target called");let i=await this.getUserPageOrFrame();if(await Je(i,this.logger),t.id>0&&!rn(t)){let l=this.a11yIdToNodeMap.get(t.id);if(!l)throw new W("InternalWebAgentError",`Resolving target failed because id ${t.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);let c=await this.getLocatorFromA11yNode(l);return await this.saveNodeDetailsToCache(i,l,t,l.dataMomenticId,c),{locator:c,a11yNode:l,displayString:l.getNodeOnlySerializedForm(),decisions:[]}}let s;try{s=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!0,skipFetchTreeWait:!0,skipFetchTree:o})}catch(l){this.logger.debug({err:l},"Could not resolve target without waiting, retrying with waiting")}return s=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!1,skipFetchTreeWait:!1,skipFetchTree:o}),e?.details?.push({type:"TARGETING",name:r,elementLocationDecisions:s.decisions,pageState:s.pageState,targetSource:t.targetSource}),s}async resolveTargetHelper({root:e,target:t,cssSelectorOnly:n,skipFetchTree:o,skipFetchTreeWait:r}){let i=[];if(t.id<0&&t.selector){let m=e.locator(t.selector),g;try{g=await Ke(m)}catch(f){throw new je(`'${t.selector}' failed to resolve: ${f}`,[{type:"USER_SELECTOR",matched:!1}])}return i.push({type:"USER_SELECTOR",matched:!0,reason:`The user-provided CSS selector ${t.selector} matched an element on the page.`}),{locator:m,a11yNode:void 0,pageState:void 0,displayString:g,decisions:i}}let s;o||(s=(await this.getBrowserState({skipWait:r})).serialize(),this.logger.debug({skipFetchTreeWait:r,tree:s},"Got a11y tree before attempting target resolution"));let l=this.a11yIdToNodeMap.get(t.id),c=l?.getNodeOnlySerializedForm();if(l&&t.serializedForm&&c===t.serializedForm){let m=await this.getLocatorFromA11yNode(l);return await this.saveNodeDetailsToCache(e,l,t,l.dataMomenticId,m),i.push({type:"A11Y_ID",matched:!0,reason:`An element with the same Chrome-internal accessibility node ID matched the saved content exactly: ${c}.`}),{locator:m,a11yNode:l,displayString:c,decisions:i,pageState:s}}if(t.generatedSelectors){let m,g;try{m=await this.resolveTargetUsingCssSelectors(e,t)}catch(f){g=f}if(m)return{...m,pageState:s,decisions:[...i,...m.decisions]};if(n)throw new Error("Could not resolve target with CSS selector only");i.push({type:"CSS_SELECTOR",matched:!1,reason:g?.message,selectors:ki(t.generatedSelectors)}),t.generatedSelectors=void 0}if(t.serializedForm&&t.serializedForm.trim().length<10){let m="Refusing to attempt accessibility node comparison since the saved node is too short.";i.push({type:"A11Y_DISTANCE",matched:!1,reason:m,savedElement:t.serializedForm})}else if(t.serializedForm){let m=1/0,g,f;for(let S of this.a11yIdToNodeMap.values()){let T=S.getSerializedFormWithContext(),b=_i(t.serializedForm,T);b<m?(m=b,g=S,f=void 0):b===m&&(f=S)}let y=Math.ceil(.1*t.serializedForm.length);if(g&&m<y&&m<25)if(f){let S=Oi`
          Multiple accessibility nodes have the same string distance - refusing to pick between them:
          Candidate 1:
            ${g.getSerializedFormWithContext()}
          =====================
          Candidate 2:
            ${f.getSerializedFormWithContext()}`;i.push({type:"A11Y_DISTANCE",matched:!1,reason:S,distance:m,closestElement:g.getNodeOnlySerializedForm(),savedElement:t.serializedForm})}else{let S=await this.getLocatorFromA11yNode(g);return await this.saveNodeDetailsToCache(e,g,t,g.dataMomenticId,S),i.push({type:"A11Y_DISTANCE",matched:!0,reason:`Found an accessibility node on the page within ${y} distance of the saved element.`,distance:m,closestElement:g.getSerializedFormWithContext()}),{locator:S,pageState:s,a11yNode:g,displayString:g.getNodeOnlySerializedForm(),decisions:i}}else i.push({type:"A11Y_DISTANCE",matched:!1,reason:`Closest accessibility node is still too far away (${m} > ${y}) to be considered a match.`,distance:m,closestElement:g?.getSerializedFormWithContext(),savedElement:t.serializedForm})}if(t.nodeOnlySerializedHtml&&t.nodeOnlySerializedHtml.trim().length<10){let m="Refusing to attempt HTML comparison since the saved element is too short.";i.push({type:"HTML_DISTANCE",matched:!1,reason:m})}else if(t.nodeOnlySerializedHtml){let m=await e.content();m.length>5e5&&(m=m.slice(5e5)+"...");try{let g=await e.evaluate(io,{nodeOnlySerializedHtml:t.nodeOnlySerializedHtml}),f=Math.floor(.15*t.nodeOnlySerializedHtml.length);if(g.closestDistance&&g.closestDistance>=f){let y=`Closest HTML candidate still has too far distance (${g.closestDistance}) from threshold (${f})`;i.push({type:"HTML_DISTANCE",matched:!1,reason:y,distance:g.closestDistance,closestElement:g.closestNodeSerialized})}else{if(g.error)throw new Error(g.error);if(g.dataMomenticId){let y=parseInt(g.dataMomenticId),S=this.dataMomenticIdToNodeMap.get(y),T;S?T=await this.getLocatorFromA11yNode(S):T=e.locator(`[${ae}="${y}"]`);let b=g.closestNodeSerialized??await Ke(T);return await this.saveNodeDetailsToCache(e,S,t,y,T),i.push({type:"HTML_DISTANCE",matched:!0,reason:`Found an element on the page within ${f} string comparison distance of the saved element.`,distance:g.closestDistance,closestElement:b,savedElement:t.nodeOnlySerializedHtml}),this.logger.debug({result:g,originalTarget:t,displayString:b},"Resolved cached target to new node with pure html levenshtein distance"),{locator:T,a11yNode:S,displayString:b,decisions:i,pageState:m}}else throw new Error(`Got invalid HTML evaluation result: ${JSON.stringify(g)}`)}}catch(g){this.logger.error({err:g},"Error finding closest HTML node by levenshtein distance"),i.push({type:"HTML_DISTANCE",matched:!1,reason:`Error finding closest HTML node by string distance: ${g}`})}}let p=t.screenshotUrl,h=t.role??"";if(p&&$t.includes(h))try{let m=await this.resolveTargetWithScreenshot({screenshotUrl:p,oldTarget:t});return{...m,decisions:[...i,...m.decisions],pageState:s}}catch(m){i.push({type:"TEMPLATE_MATCHING",matched:!1,reason:`Error finding closest element using saved screenshot: ${m}`,elementImageUrl:p}),this.logger.error({err:m},"Error finding closest element using saved screenshot")}throw this.logger.debug({target:t,decisions:i},"Failed to find any relevant node"),new je(`Could not find any relevant node given cached target: ${JSON.stringify(t)}`,i)}async resolveTargetWithScreenshot({screenshotUrl:e,oldTarget:t}){let n;if(!this.enricher)throw new Error("Enricher not available for screenshot resolution");let o=await this.screenshot({scale:"css"}),i=await(await fetch(e)).arrayBuffer(),s=ji(),l=await this.enricher.runTemplateMatching({searchImageBase64String:Buffer.from(i).toString("base64"),pageImageBase64String:o.toString("base64"),id:s});this.logger.debug({id:s,templateMatch:l},"Template matching got successful result");let{target:c,locator:p}=await this.getTargetFromPositionPercentages({percentX:l.x,percentY:l.y}),h=c.boundingBox?.width,m=c.boundingBox?.height;if(!h||!m)throw n="Rejecting target from screenshot due to no bounding box",new Error(n);let g=t.boundingBox?.width??0,f=t.boundingBox?.height??0;if(Math.abs(h-g)>50)throw n=`Rejecting target from screenshot due to width difference (${h-g})`,new Error(n);if(Math.abs(m-f)>50)throw n=`Rejecting target from screenshot due to height difference (${m-f})`,new Error(n);return{locator:p,a11yNode:this.a11yIdToNodeMap.get(c.id),displayString:c.nodeOnlySerializedHtml??"",decisions:[{type:"TEMPLATE_MATCHING",matched:!0,reason:"Found element using screenshot",elementImageUrl:e}]}}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let i=(await this.getBrowserState({})).serialize();this.logger.debug({tree:i},"Got a11y tree for x / y resolution")}let n=await this.getUserPageOrFrame(),{target:o}=await this.getTargetFromPositionPercentages(e);if((o.generatedSelectors??[]).length>0)return{locator:n.locator(o.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(o.id),displayString:o.nodeOnlySerializedHtml??o.nodeOnlySerializedForm??"Unknown element",decisions:[]};let r=this.a11yIdToNodeMap.get(o.id);if(r&&r.dataMomenticId)return{locator:n.locator(`[${ae}="${r.dataMomenticId}"]`),a11yNode:r,displayString:r.getNodeOnlySerializedForm(),decisions:[]};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async saveDownloadToDisk(e,t){this.logger.info("Download detected, saving file to disk");let n=await e,o=await n.path(),r=co(n.suggestedFilename()),i=t();await n.saveAs(wo(i,r)),yo(o,{force:!0}),setTimeout(()=>{yo(i,{recursive:!0,force:!0})},5*60*1e3);let s=lo(So(i),r);return this.logger.debug({uri:s,downloadFolder:i},"Saved download to isolated folder"),s}async typeIntoTarget(e,t,n={}){await this.highlightTarget(t);let o=2;for(;o>0;)try{await t.click({force:n.force,timeout:4e3,noWaitAfter:!0});break}catch(i){if(o--,o===0)throw i;this.logger.warn({err:i},"Failed clicking on element for type action")}if(!n.clearContent)return this.type(e,n);let r={force:n.force,timeout:4e3,noWaitAfter:!0};n.pressKeysSequentially?(await t.fill("",r),await t.pressSequentially(e,r)):await t.fill(e,r)}async click(e,t,n={}){e=await uo({locator:e,logger:this.logger}),await this.highlightTarget(e);let o=this.url(),r=await this.getOpenPageUrls(),i;n.waitForDownload&&(i=(async()=>{try{return await this.page.waitForEvent("download",{timeout:1e4})}catch(c){throw c instanceof Ui.TimeoutError?new W("ActionFailureError",`Download did not complete in ${1e4}ms`):c}})());let s=2,l=n.force;for(;s>0;)try{this.logger.debug("Clicking on element with locator"),n.doubleClick?await this.wrapPossibleNavigation(async()=>{await e.dblclick({button:n.rightClick?"right":"left",timeout:4e3,noWaitAfter:!0,force:l})}):await this.wrapPossibleNavigation(async()=>{let c=await e.getAttribute("target");if(await e.click({button:n.rightClick?"right":"left",timeout:4e3,noWaitAfter:!0,force:l}),c==="_blank"){this.logger.debug("Waiting for new page promise due to _blank target");let p=Date.now(),h=this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3;for(;!this.pageLoadPromise&&Date.now()-p<h;)await z(250)}}),this.logger.debug("Click completed on element");break}catch(c){if(s--,s===0)throw c;this.logger.warn({err:c},"Failed clicking on element, retrying with 'disable stability checks' enabled"),l=!0,await z(250)}if(n.waitForUrl&&await this.waitForUrl(o,n.waitForUrl,r,this.userControlledBrowserSettings.pageLoadTimeoutMs),i){if(!t.createIsolatedFolder)throw new W("InternalWebAgentError","Cannot wait for download without a callback to create an isolated folder");return this.logger.info("Waiting for download to start and complete"),{downloadedFile:await ut(this.saveDownloadToDisk(i,t.createIsolatedFolder),{milliseconds:1e4,fallback:()=>{throw new W("ActionFailureError",`Download timed out after ${1e4}ms`)}})}}}async waitForUrl(e,t,n,o){let r=o??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3,i=4,s;for(let l=0;l<i;l++){if(s=await this.getOpenPageUrls(),s.length!==n.length)for(let c=s.length-1;c>=0;c--){let p=s[c];if(p!==e&&Ye(p,this.logger)){await this.switchToPage(p,c);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t,{timeout:Math.max(r/i,500)});break}catch(c){if(l===i-1)throw c}}}async dragAndDrop(e,t,n={}){let o={timeout:8e3,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await z(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let i=Object.assign({timeout:4e3},r);o&&await o.hover(i);let s=await(await this.getUserPageOrFrame()).evaluate(eo);s||(this.logger.debug("Could not get current mouse position before mouse drag action, defaulting to 0,0"),s={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+s.left,t+s.top,{steps:n}),await z(250),await this.page.mouse.up()}async hover(e,t){await this.highlightTarget(e),await e.hover({timeout:4e3,force:t})}async focus(e){await this.highlightTarget(e),await e.focus({timeout:4e3})}async blur(e){await this.highlightTarget(e),await e.blur({timeout:4e3})}async selectOption(e,t,n=!1){await this.highlightTarget(e);let o={timeout:4e3,force:n,noWaitAfter:!0},r=2;for(;r>0;)try{await e.selectOption(t,o),this.logger.debug(`Selected '${t}' from dropdown`);break}catch(i){if(r--,r===0)throw i;this.logger.debug({err:i},"Failed selecting option, retrying with force enabled"),o.force=!0}}async press(e){await this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))}async refresh(e){let t=e?.loadTimeoutMs??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3,n=async()=>{await this.page.reload({waitUntil:"domcontentloaded",timeout:t});try{await this.page.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.page.url()},"Timeout elapsed waiting for load state during refresh action, continuing anyways...")}};await this.wrapPossibleNavigation(n,e?.networkIdleTimeoutMs)}async getBrowserStateHelper({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger}){let o=await this.getUserPageOrFrame(),r=await this.getViewportOffsetDetails(o),i;this.activeFrame&&(i=(await this.getMatchingFrame(this.activeFrame)).node.frameId,n.debug({iframeId:i},"Resolved iframe id"));let s=await this.getRawA11yTree({root:o,skipWait:e,iframeId:i,logger:n}),l=await this.getDOMTree(r.devicePixelRatio,i),c=await Kn({a11yGraph:s,domGraph:l,logger:n,cdpClient:this.cdpClient,filterByViewport:t,viewportDetails:r});if(!c||!c.root)throw new Error("Accessibility tree appears empty");return this.a11yIdToNodeMap=c.a11yIdNodeMap,this.dataMomenticIdToNodeMap=c.dataMomenticIdMap,this.domGraph=l,c}async getBrowserState(e){let{logger:t=this.logger,maxAttempts:n=2}=e,o=0,r=this.url(),i;for(;o<n;){o++;try{return await ut(this.getBrowserStateHelper(e),{milliseconds:8e3})}catch(s){i=s instanceof Error?s.message:`${s}`,o<n&&(t.debug({err:s,url:r},"Error getting a11y tree, retrying..."),await z(500))}}throw new W("ActionFailureError",`Getting accessibility tree failed after ${n} attempts. Are you sure this page is working? Error: ${i}`)}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(e){let[t,n,o,r,i]=await e.evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:t,lowerBound:t+r,leftBound:n,rightBound:n+o,width:o,height:r,devicePixelRatio:this.systemDevicePixelRatio??i}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(await this.cdpClient.send("DOMSnapshot.enable"),n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:ct}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await z(500),this.logger.debug({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new W("InternalWebAgentError","Error fetching DOM tree");return Zn({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async getRawA11yTree({root:e,skipWait:t=!1,iframeId:n=void 0,logger:o=this.logger}){let r={value:Date.now()},i=()=>{r.value=Date.now()};try{let{root:s}=await this.cdpClient.send("DOM.getDocument",{depth:-1,pierce:!0})}catch(s){o.debug({err:s},"Failed to request root node while getting a11y tree")}this.cdpClient.addListener("Accessibility.nodesUpdated",i),this.cdpClient.addListener("DOM.characterDataModified",i),this.cdpClient.addListener("DOM.attributeModified",i),this.cdpClient.addListener("DOM.childNodeCountUpdated",i),this.cdpClient.addListener("DOM.documentUpdated",i);try{return await this.getRawA11yTreeHelper({root:e,skipWait:t,iframeId:n,logger:o,lastUpdateRef:r})}finally{this.cdpClient.removeListener("Accessibility.nodesUpdated",i),this.cdpClient.removeListener("DOM.characterDataModified",i),this.cdpClient.removeListener("DOM.attributeModified",i),this.cdpClient.removeListener("DOM.childNodeCountUpdated",i),this.cdpClient.removeListener("DOM.documentUpdated",i)}}async getRawA11yTreeHelper({root:e,skipWait:t,iframeId:n,logger:o,lastUpdateRef:r}){let i=this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3,s=!1;if(!t)try{await e.waitForLoadState("domcontentloaded",{timeout:i}),s=!0}catch(m){o.debug({err:m},"Timed out waiting for domcontentloaded event when getting a11y tree, continuing...")}let l=!1,c=Date.now();for(;!t&&Date.now()-c<i;){if(Date.now()-r.value>=750){l=!0;break}await z(250)}o.debug({duration:Date.now()-c,domContentLoadReceived:s,a11yStableReceived:l,skipWait:t},"A11y wait phase completed"),await e.evaluate(oo);let p;if(n)p=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:n})).node.backendDOMNodeId;else{let{node:m}=await this.cdpClient.send("Accessibility.getRootAXNode");p=m.backendDOMNodeId}let{nodes:h}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:p});if(!h||h.length<=1)throw new W("ActionFailureError","No content in accessibility tree");return{root:h[0],allNodes:h}}async clickUsingVisualCoordinates(e,t){let n=await this.getUserPageOrFrame(),{percentX:o,percentY:r}=e,{width:i,height:s}=await this.getViewportOffsetDetails(n),l=Math.ceil(i*o),c=Math.ceil(s*r),p=this.url(),h=await this.getOpenPageUrls();this.logger.debug({pixelDeltaX:l,pixelDeltaY:c,width:i,height:s},"Executing mouse click with visual coordinates"),await this.wrapPossibleNavigation(async()=>this.page.mouse.click(l,c,{button:t.rightClick?"right":"left",clickCount:t.doubleClick?2:1})),t.waitForUrl&&await this.waitForUrl(p,t.waitForUrl,h,this.userControlledBrowserSettings.pageLoadTimeoutMs)}async dragAndDropUsingVisualCoordinates(e,t,n){let o=await this.getUserPageOrFrame(),{percentX:r,percentY:i}=e,{percentX:s,percentY:l}=t,{width:c,height:p}=await this.getViewportOffsetDetails(o),h=Math.ceil(c*r),m=Math.ceil(p*i),g=Math.ceil(c*s),f=Math.ceil(p*l);await this.page.mouse.move(h,m),await this.page.mouse.down(),await this.page.mouse.move(g,f),await z(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async hoverUsingVisualCoordinates(e){let t=await this.getUserPageOrFrame(),{percentX:n,percentY:o}=e,{width:r,height:i}=await this.getViewportOffsetDetails(t),s=Math.ceil(r*n),l=Math.ceil(i*o);await this.page.mouse.move(s,l)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,ae);if(!r)throw new Error(`Could not find attribute ${ae} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.debug({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${ae}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async l=>{let c=await this.getLocatorFromBackendID(l);t.doubleClick?await c.dblclick({timeout:4e3}):await c.click({timeout:4e3,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(l){this.logger.error({err:l},"Failed clicking on node"),o=l,n++,await z(500)}let i=e.parent?.children??[];for(let l of i){if(l.id===e.id)continue;let c=!1,p=Xt(l,e);if(e.name&&l.name===e.name?c=!0:p>=5&&(this.logger.debug({similarityScore:p},"Sibling qualified for click redirection through comparison score"),c=!0),!!c)try{return await r(l.backendNodeID),l}catch(h){this.logger.debug({err:h,candidate:l.getLogForm()},"Failed clicking on sibling during click redirection")}}let s=e.parent;for(n=0;n<jn;){if(!s||["rootwebarea","main"].includes(s.role.toLowerCase()))throw new W("ActionFailureError",o.message,{cause:o});if(!s.backendNodeID){s=s.parent;continue}try{return await r(s.id),s}catch(c){this.logger.debug({err:c,candidate:s.getLogForm()},"Failed clicking on parent during click redirection"),n++,s=s.parent}}throw new W("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,i=o.nodes,s=i.nodeName||[],l=i.backendNodeId||[],c=r.nodeIndex,p=r.bounds,h=-1;for(let b=0;b<s.length;b++)if(l[b]===e){h=c.indexOf(b);break}if(h===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[m=0,g=0,f=0,y=0]=p[h];m/=n,g/=n,f/=n,y/=n;let S=m+f/2,T=g+y/2;return{centerX:S,centerY:T}}async scroll(e,t,n,o){let r=t==="left"?-1:1,i=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([l,c,p,h])=>window.scrollTo(window.scrollX+(l??window.innerWidth)*p,window.scrollY+(c??window.innerHeight)*h),[e,n,r,i]);else{let s=this.page.viewportSize()||Ge;await this.page.mouse.wheel((e??s.width)*r,(n??s.height)*i)}}async scrollUp(e){await this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPossibleNavigation(async()=>this.page.goForward({waitUntil:"domcontentloaded",timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}))}async goBack(){await this.wrapPossibleNavigation(async()=>this.page.goBack({waitUntil:"domcontentloaded",timeout:this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}))}async changeActivePage(e,t){this.recordUrlVisited(e.url()),this.page=e,this.cdpClient=await a.initCDPSession(this.context,this.page,this.logger,t??this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3)}async createNewTab(e,t){let n=await this.context.newPage();await this.changeActivePage(n,t?.loadTimeoutMs),await this.navigate({url:e,initialNavigation:!0,...t})}async switchToPageByIndex(e,t,n){let o=e.url();if(!Ye(o,this.logger)){this.logger.error({tabUrl:o},"Refusing to switch to tab with invalid URL");return}this.logger.debug(`Switching to tab ${t} with url ${o}`),await this.changeActivePage(e,n?.loadTimeoutMs);try{let r=async()=>{let i=n?.loadTimeoutMs??8e3;await e.waitForLoadState("domcontentloaded",{timeout:i}),await e.waitForLoadState("load",{timeout:i}),this.logger.debug({url:o},"Timeout elapsed waiting for load state, continuing anyways...")};await this.wrapPossibleNavigation(r,n?.networkIdleTimeoutMs)}catch{this.logger.debug({url:o},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}}async switchToPage(e,t,n){let o=this.context.pages(),r=await Qt(this.context,this.logger);if(t){await this.switchToPageByIndex(o[t],t,n);let i=r[t].url;this.onTabsChange?.(r,i);return}for(let i=0;i<o.length;i++){let s=o[i];if(s.url().includes(e)){await this.switchToPageByIndex(s,i,n);let l=r[i].url;this.onTabsChange?.(r,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async setCookie(e){let t;typeof e=="string"?t=Cn(e):t=[e],this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:ke,method:"turnstile",sitekey:t,pageurl:this.url(),json:1})});if(!n.ok){let i=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},i),new Error(i)}let{request:o}=await n.json(),r=Date.now();for(;Date.now()-r<6e4;){await z(2500);let i=await fetch(`https://2captcha.com/res.php?key=${ke}&action=get&id=${o}&json=1`,{method:"GET"});if(!i.ok){let l=`Captcha solution API returned error response: ${i.statusText}`;throw this.logger.error({text:await i.text()},l),new Error(l)}if((await i.json()).status===1)break}}async solveCaptcha(){await this.getBrowserState({});let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=await this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:4e3}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:ke,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{taskId:o}=await n.json(),r=Date.now(),i="";for(;Date.now()-r<6e4;){await z(2500);let s=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:ke,taskId:o})});if(!s.ok){let c=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},c),new Error(c)}let l=await s.json();if(l.errorId){let c=`Captcha solution API returned error ID ${l.errorId}`;throw this.logger.error(c),new Error(c)}if(l.status==="ready"){i=l.solution.text;break}}if(!i)throw new Error("Captcha solution timed out");return i}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=new AbortController;await this.startTreeRefreshCronForRecording(e.signal);let t;try{t=await(await this.getUserPageOrFrame()).evaluate(async()=>{let n=window;if(!n.resolveRecordingTarget){console.error("[Momentic] Missing Momentic recording library functions");return}let o=null;n.targetCaptureClickListener=async i=>(console.log("[Momentic] Target capture listener fired"),i.preventDefault(),o=i.target,!1),document.addEventListener("click",n.targetCaptureClickListener,{capture:!0,once:!0});let r=Date.now();for(;!o&&Date.now()-r<1e4;)await new Promise(i=>setTimeout(i,250));if(!o)throw new Error("Timed out waiting for user to click on an element");return n.resolveRecordingTarget(o)})}catch(n){throw this.logger.error({err:n},"Error recording target click"),new Error(`Error recording click: ${n.message}`)}finally{e.abort()}if(!t)throw new Error("Got no target from recorded click - please make sure you clicked on an interactive element");return this.getTargetFromRecordedClick(t).target}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,i=o.width??0,s=o.height??0,l=r+i,c=o.y??0,p=c+(o.height??0),h=t.bounds,m=h.width??0,g=h.height??0,f=h.x??0,y=f+(h.width??0),S=h.y??0,T=S+(h.height??0);return f<l&&y>r&&S<p&&T>c?Math.abs(i-m)<200&&Math.abs(s-g)<200?!0:(Re({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(Re({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=Li();for(let c of n)if(c.attributes?.[ae]===e){o=c;break}if(!o)return[];let i=[],s=t.backendIdToNode[o.parentBackendNodeId??-1];for(;s&&(s?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,s,r));)s=t.backendIdToNode[s.parentBackendNodeId??-1];s&&i.push(s);let l=[o];for(;l.length;){let c=l.shift();for(let p of c.children??[]){let h=t.backendIdToNode[p];h&&!h.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,h,r)?i.push(h):h&&l.push(h)}}return i}getTargetFromRecordedClick(e){this.logger.debug(e,"Got recorded target from click");let{htmlAttributes:t,dataMomenticId:n}=e,r=this.dataMomenticIdToNodeMap.get(n),i={id:r?.id??-1,dataMomenticId:n,targetSource:"CLICK_TO_FIND",...t};return r?this.saveA11yDetailsToCache(r,i):this.logger.warn({htmlAttributes:t},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),{target:i,a11yNode:r}}async exposeRecordingBindings(){let e=({frame:t},n)=>{if(!this.transformer)return;let{type:o,dataMomenticId:r,htmlAttributes:i,selectedValue:s}=n;this.logger.debug(n,`${o} event captured on element`);let l=this.dataMomenticIdToNodeMap,c=this.mostRecentA11yTree,p=t.url(),h=l.get(r),m={id:h?.id??-1,dataMomenticId:r,targetSource:"RECORDING",...i};h||this.logger.debug({url:p,htmlAttributes:i},"Could not find corresponding accessibility node for click, continuing with HTML attributes only"),(async()=>{if(!this.transformer){this.logger.warn("No natural language translation since transformer is not initialized anymore");return}this.logger.debug({target:m,url:p},`Generating description for ${o.toLowerCase()}ed target`);let g=c.serialize();h&&g.length>5e3&&(g=Jn(h.id,g),this.logger.debug({serializedTree:g},"Trimmed a11y tree for description transformation"));try{await this.transformer.recordElementAction({type:o,target:m,browserState:g,url:p,selectedValue:s})}catch(f){this.logger.error({err:f},`Failed to record ${o} action`)}})()};await this.context.exposeBinding("captureElementEvent",({frame:t},n)=>{try{e({frame:t},n)}catch(o){this.logger.error({err:o},"Failed to capture element interaction")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},t)=>{this.transformer&&(this.logger.debug(t,"Captured keypress"),this.transformer.recordKeystroke(t))})}async fetchA11yTreeForRecording(){let e=await this.getBrowserState({skipWait:!0,maxAttempts:1,logger:Wt});if(this.mostRecentA11yTree=e,Math.random()<.1){let n=this.mostRecentA11yTree.serialize();this.logger.debug({tree:n.length>4e5?"REDACTED_DUE_TO_SIZE":n},"Refreshed a11y tree during recording")}await(await this.getUserPageOrFrame()).evaluate(n=>{let o=window;o.momenticIdsInA11yTree=new Set(n)},Array.from(this.dataMomenticIdToNodeMap.keys()))}async startTreeRefreshCronForRecording(e){if(await this.fetchA11yTreeForRecording(),e.aborted)return;let t,n=!1,o=0,r=0,i=async()=>{if(!(Date.now()-r<750)&&!n){n=!0;try{await this.fetchA11yTreeForRecording(),o=0}catch(s){if(r=Date.now(),o++,o>=8||s.message.includes("crashed")){clearInterval(t),this.logger.error({err:s},"Fatal errors while refreshing a11y tree during recording, exiting...");return}}finally{n=!1}}};t=setInterval(()=>{!this.transformer||e.aborted||i()},Gn),e.addEventListener("abort",()=>{clearInterval(t),t=void 0})}async startRecording(e,t){this.logger.debug("Starting passive recording mode in Chrome browser"),this.transformer=t,await this.startTreeRefreshCronForRecording(e),e.addEventListener("abort",async()=>{this.transformer=void 0})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value),{timeout:1e3})}getActivePage(){return this.page}async getCondensedHtml(){let e=await this.getUserPageOrFrame();await Je(e,this.logger);let t=await e.evaluate(()=>window.getCondensedHtmlTree?.(),{timeout:1e3});if(!t)throw new W("InternalWebAgentError","Empty HTML tree");return Pi.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:80})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages(e,{percentX:t,percentY:n}){if(t<0||t>1||n<0||n>1)throw new W("InternalWebAgentError","Invalid percent passed to percentage location");let{width:o,height:r,upperBound:i,leftBound:s,devicePixelRatio:l}=await this.getViewportOffsetDetails(e),c=Math.round(i),p=Math.round(s),h=Math.ceil(o*t),m=Math.ceil(r*n);await this.cdpClient.send("DOM.getDocument",{depth:0});let g;try{g=await this.cdpClient.send("DOM.getNodeForLocation",{x:h+p,y:m+c})}catch(f){throw this.logger.error({err:f,pixelDeltaX:h,pixelDeltaY:m,leftBoundRounded:p,upperBoundRounded:c,devicePixelRatio:l},"Failed to get DOM node from position percents"),new Error("No element was found at the given location")}return g}async highlightFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n;try{n=await this.getDomNodeFromPositionPercentages(t,e)}catch{}return n?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:Qn,backendNodeId:n.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:n?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n=await this.getDomNodeFromPositionPercentages(t,e),o=this.domGraph?.backendIdToNode[n.backendNodeId],r=o?.attributes[ae],i=parseInt(r??"");if(!o||!r||isNaN(i))throw new Error("No HTML node was found at the given location");let s=t.locator(`[${ae}="${r}"]`);for(let h of this.a11yIdToNodeMap.values()){if(h.backendNodeID!==n.backendNodeId)continue;let m={id:h.id,targetSource:"XY_PERCENT"};return await this.saveNodeDetailsToCache(t,h,m,parseInt(r),s),{target:m,locator:s}}let l=this.getDomCandidatesInA11yTree(`${r}`,this.domGraph);for(let h of l){let m=parseInt(h.attributes?.[ae]??"");if(isNaN(m))continue;let g=t.locator(`[${ae}="${m}"]`),f=this.dataMomenticIdToNodeMap.get(m),y=f?.id;if(!y)continue;let S={id:y,targetSource:"XY_PERCENT"};return await this.saveNodeDetailsToCache(t,f,S,parseInt(r),g),this.logger.debug({target:S},"Redirected click on non-accessible element to nearest a11y node"),{target:S,locator:g}}let c=await this.fetchHtmlAttributes(t,i);return{target:{id:-1,dataMomenticId:i,targetSource:"XY_PERCENT",...c},locator:s}}async fetchHtmlAttributes(e,t){let n=await e.evaluate(o=>{let r=window;return r.generateHtmlCacheAttributes?r.generateHtmlCacheAttributes(o):(console.error("[MOMENTIC] generateHtmlCacheAttributes is not defined on the window object"),{})},t);return this.logger.debug(n,"Generated HTML attributes for target"),n}async moveMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,s=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.move(s,l,{steps:3})}async clickMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,s=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.click(s,l,{button:"left"})}async scrollFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,s=Math.ceil(r*e),l=Math.ceil(i*t);return await this.page.mouse.wheel(s,l),{deltaX:s,deltaY:l}}canSolveCaptchas(){return!!ke}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames(),n=[];for(let r of t)if(!r.isDetached())try{let s=await(await r.frameElement()).evaluate(l=>"src"in l?l.getAttribute("src"):null);s&&s!=="about:blank"&&s!==e&&n.push(s)}catch(i){let s=i.message;["detached","browser has been closed"].some(l=>s.includes(l))||this.logger.debug({err:i},"Error fetching frame src url, continuing...")}return Array.from(new Set(n))}async setFileChooserHandler(e){setTimeout(()=>{try{e.cleanup()}catch(t){this.logger.debug({err:t,filePath:e.filePath},"Failed cleaning up file after upload")}},3e4),await this.setFileChooserHandlerHelper(e)}async setFileChooserHandlerHelper({filePath:e}){this.page.once("filechooser",async n=>{this.logger.debug({filePath:e},"File chooser triggered"),await n.setFiles(e,{timeout:8e3})});let t=Di(e).toString("base64");await(await this.getUserPageOrFrame()).evaluate(({fileName:n,base64Data:o})=>{let r=window;r.MomenticFile=class{async getFile(){let i=atob(o),s=new Array(i.length);for(let p=0;p<i.length;p++)s[p]=i.charCodeAt(p);let l=new Uint8Array(s),c=new Blob([l]);return new File([c],n)}},r.showOpenFilePicker=async()=>[new r.MomenticFile]},{fileName:So(e),base64Data:t})}getSerializedFormFromA11yId(e){return this.a11yIdToNodeMap.get(e)?.getNodeOnlySerializedForm()}};var Vi={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},qi=Vi;import{z as Ki}from"zod";import Yi from"fetch-retry";var Xi=Yi(global.fetch),ee=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await Xi(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var en=class extends ee{constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${ee.API_VERSION}/web-agent/recommend-chunks`,e);return kn.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${ee.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return Ki.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${ee.API_VERSION}/web-agent/locate-element`,{...e,disableCache:t.disableCache});return _n.parse(n)}async getAssertionResult(e,t){let n={...e,disableCache:!!t.disableCache},o=await this.sendRequest(`/${ee.API_VERSION}/web-agent/assertion`,n);return On.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${ee.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,screenshot:e.screenshot,disableCache:t.disableCache});return Ln.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${ee.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t.disableCache});return Dn.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${ee.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t.disableCache});return Pn.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:!!t.disableCache},o=await this.sendRequest(`/${ee.API_VERSION}/web-agent/text-extraction`,n);return Pt.parse(o)}async getTestResultClassification(e){let t=await this.sendRequest(`/${ee.API_VERSION}/web-agent/result-classification`,e);return Dt.parse(t)}};export{en as APIGenerator,Zt as ChromeBrowser,ge as CommandType,qi as DEFAULT_CONTROLLER_CONFIG,oe as StepType};
