import{v4 as Sa}from"uuid";import*as c from"zod";import{z as _}from"zod";var cn=_.object({thoughts:_.string(),result:_.boolean(),relevantElements:_.array(_.number()).optional()}),_t=(n=>(n.CONTAINS="CONTAINS",n.STARTS_WITH="STARTS_WITH",n.EQUALS="EQUALS",n))(_t||{});var Oo=_.object({type:_.literal("ELEMENT_CONTENT"),negated:_.boolean().optional(),operation:_.nativeEnum(_t),value:_.string()}),_o=_.object({type:_.literal("ELEMENT_ATTRIBUTE"),negated:_.boolean().optional(),operation:_.nativeEnum(_t),attr:_.string(),value:_.string()}),Pt=(o=>(o.EXISTS="EXISTS",o.VISIBLE="VISIBLE",o.ENABLED="ENABLED",o.EDITABLE="EDITABLE",o))(Pt||{}),Po=_.object({type:_.literal("ELEMENT_EXISTENCE"),negated:_.boolean().optional(),condition:_.nativeEnum(Pt)}),dn=_.discriminatedUnion("type",[Oo,_o,Po]);var Do=_.object({type:_.literal("CONTENT"),negated:_.boolean().optional(),value:_.string()}),mn=_.discriminatedUnion("type",[Do]);import*as C from"zod";var je=(i=>(i.AI="AI",i.AI_HEALED="AI_HEALED",i.CLICK_TO_FIND="CLICK_TO_FIND",i.XY_PERCENT="XY_PERCENT",i.RECORDING="RECORDING",i.USER_CSS_SELECTOR="USER_CSS_SELECTOR",i))(je||{}),Ce=C.object({id:C.number().int(),dataMomenticId:C.number().int().optional(),selector:C.string().optional(),generatedSelectors:C.string().array().optional(),role:C.string().optional(),name:C.string().optional(),numChildren:C.number().optional(),content:C.string().optional(),pathFromRoot:C.string().optional(),serializedForm:C.string().optional(),nodeOnlySerializedForm:C.string().optional(),serializedHtml:C.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:C.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned."),screenshotUrl:C.string().url().optional(),boundingBox:C.object({x:C.number().optional(),y:C.number().optional(),width:C.number(),height:C.number()}).describe("css pixel bounding box").optional(),inputDescription:C.string().optional().describe("the description that generated this cache"),targetSource:C.nativeEnum(je).optional(),targetUpdateTime:C.string().optional()});function un(s){return!!(s.name||s.role||s.content||s.serializedForm||s.serializedHtml||s.screenshotUrl)}var ko=C.object({percentX:C.number().describe("between 0 and 1"),percentY:C.number()}),zo=C.object({type:C.literal("description"),elementDescriptor:C.string(),a11yData:Ce.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var G=C.discriminatedUnion("type",[zo,C.object({type:C.literal("coordinates"),percentXYLocation:ko})]);var ce=(E=>(E.AI_EXTRACT="AI_EXTRACT",E.AI_ASSERTION="AI_ASSERTION",E.AI_WAIT="AI_WAIT",E.AUTH_LOAD="AUTH_LOAD",E.AUTH_SAVE="AUTH_SAVE",E.BLUR="BLUR",E.CAPTCHA="CAPTCHA",E.CLICK="CLICK",E.COOKIE="COOKIE",E.DIALOG="DIALOG",E.DRAG="DRAG",E.ELEMENT_CHECK="ELEMENT_CHECK",E.FILE_UPLOAD="FILE_UPLOAD",E.FOCUS="FOCUS",E.GO_BACK="GO_BACK",E.GO_FORWARD="GO_FORWARD",E.HOVER="HOVER",E.JAVASCRIPT="JAVASCRIPT",E.LOCAL_STORAGE="LOCAL_STORAGE",E.MOUSE_DRAG="MOUSE_DRAG",E.NAVIGATE="NAVIGATE",E.NEW_TAB="NEW_TAB",E.PAGE_CHECK="PAGE_CHECK",E.PRESS="PRESS",E.REFRESH="REFRESH",E.REQUEST="REQUEST",E.SCROLL_DOWN="SCROLL_DOWN",E.SCROLL_UP="SCROLL_UP",E.SCROLL_LEFT="SCROLL_LEFT",E.SCROLL_RIGHT="SCROLL_RIGHT",E.SELECT_OPTION="SELECT_OPTION",E.TAB="TAB",E.TYPE="TYPE",E.VISUAL_DIFF="VISUAL_DIFF",E.WAIT="WAIT",E.WAIT_FOR_URL="WAIT_FOR_URL",E.SUCCESS="SUCCESS",E))(ce||{}),v=c.object({thoughts:c.string().optional(),id:c.string().uuid().describe("unique identifier to this step, used for step cache")}),te=c.object({useSelector:c.boolean().optional(),useXY:c.boolean().optional(),force:c.boolean().optional(),disableCache:c.boolean().optional().describe("disable element caching for this step"),iframeUrl:c.string().optional().describe("url or url regex for the iframe")}),de=c.object({target:Ce}).optional(),yt=c.object({loadTimeout:c.number().int().max(60).optional().describe("Max seconds for the page to load")}),Uo=v.merge(yt).merge(c.object({type:c.literal("NAVIGATE"),url:c.string()})),St=te.merge(c.object({cache:de})),Me=v.merge(St.merge(c.object({target:G.optional(),type:c.literal("SCROLL_UP"),deltaY:c.number().optional()}))),Le=v.merge(St.merge(c.object({target:G.optional(),type:c.literal("SCROLL_DOWN"),deltaY:c.number().optional()}))),Oe=v.merge(St.merge(c.object({target:G.optional(),type:c.literal("SCROLL_LEFT"),deltaX:c.number().optional()}))),_e=v.merge(St.merge(c.object({target:G.optional(),type:c.literal("SCROLL_RIGHT"),deltaX:c.number().optional()}))),Ta=c.discriminatedUnion("type",[Me,Le,Oe,_e]),Bo=v.merge(c.object({type:c.literal("DIALOG"),action:c.union([c.literal("ACCEPT"),c.literal("DISMISS")])})),Wo=v.merge(c.object({type:c.literal("WAIT"),delay:c.number()})),Ho=v.merge(c.object({type:c.literal("WAIT_FOR_URL"),url:c.string(),timeout:c.number().int().optional().describe("Max seconds to wait for the URL to match")})),jo=v.merge(yt).merge(c.object({type:c.literal("REFRESH")})),Go=v.merge(c.object({type:c.literal("GO_BACK")})),$o=v.merge(c.object({type:c.literal("GO_FORWARD")})),Vo=v.extend({type:c.literal("AUTH_SAVE")}),qo=v.extend({type:c.literal("AUTH_LOAD"),storageState:c.string().describe("JSON string auth state")}),Dt=v.merge(te).extend({type:c.literal("CAPTCHA")}),Ko=v.merge(c.object({type:c.literal("JAVASCRIPT"),code:c.string(),fragment:c.boolean().optional(),envKey:c.string().optional(),environment:c.union([c.literal("NODE"),c.literal("BROWSER")]).optional().describe("default NODE"),timeout:c.number().int().max(60).optional().describe("Max seconds for the code to complete")})),Ge=v.merge(te).merge(c.object({type:c.literal("CLICK"),target:G,doubleClick:c.boolean().optional(),rightClick:c.boolean().optional(),waitForUrl:c.string().optional().describe("Wait for the click to trigger a page load or new tab that matches the provided URL or URL glob (e.g. https://google.com/**/*)."),waitForDownload:c.boolean().optional().describe("Wait for the click to trigger a file download and for the file download to complete."),cache:de})),$e=v.merge(te).merge(c.object({type:c.literal("DRAG"),fromTarget:G,toTarget:G,hoverSeconds:c.number().optional().describe("Seconds to hover the object before dropping"),cache:c.object({fromTarget:Ce.optional(),toTarget:Ce.optional()}).optional()})),Ve=v.merge(te).merge(c.object({type:c.literal("MOUSE_DRAG"),target:G.optional(),deltaX:c.string().describe("pixels to move horizontally, can be template"),deltaY:c.string().describe("pixels to move vertically, can be template"),steps:c.number().optional(),cache:de})),qe=v.merge(te).merge(c.object({type:c.literal("HOVER"),target:G,cache:de})),Ke=v.merge(te).merge(c.object({type:c.literal("FOCUS"),target:G,cache:de})),Ye=v.merge(te).merge(c.object({type:c.literal("BLUR"),target:G,cache:de})),Yo=v.extend({type:c.literal("FILE_UPLOAD"),fileSource:c.discriminatedUnion("type",[c.object({type:c.literal("URL"),url:c.string()}).describe("Accessible link to the file, either public http or local file://")])}),Xe=v.merge(te).merge(c.object({type:c.literal("SELECT_OPTION"),target:G,option:c.string(),cache:de})),kt=v.merge(c.object({type:c.literal("AI_ASSERTION"),assertion:c.string(),disableCache:c.boolean().optional(),iframeUrl:c.string().optional(),timeout:c.number().int().optional().describe("Max seconds to wait for assertion to be true")})),Xo=kt.extend({type:c.literal("AI_WAIT")});var zt=60,Je=v.merge(te).extend({type:c.literal("ELEMENT_CHECK"),target:G,assertion:dn,cache:de,timeout:c.number().int().min(0).max(zt).optional().describe("max seconds to wait for the assertion to be true")}),Jo=v.extend({type:c.literal("PAGE_CHECK"),assertion:mn,timeout:c.number().int().min(0).max(zt).optional().describe("max seconds to wait for the assertion to be true")}),Qo=v.merge(c.object({type:c.literal("AI_EXTRACT"),goal:c.string(),schema:c.string().optional(),envKey:c.string().optional(),disableCache:c.boolean().optional(),iframeUrl:c.string().optional()})),Zo=c.object({clearContent:c.boolean().optional(),pressKeysSequentially:c.boolean().optional(),force:c.boolean().optional(),pressEnter:c.boolean().optional()}),Qe=v.merge(te).merge(Zo).extend({type:c.literal("TYPE"),target:G.optional(),value:c.string(),cache:de}),er=v.merge(c.object({type:c.literal("PRESS"),value:c.string()})),tr=v.merge(yt).merge(c.object({type:c.literal("TAB"),url:c.string()})),nr=v.merge(yt).merge(c.object({type:c.literal("NEW_TAB"),url:c.string()})),or=v.merge(c.object({type:c.literal("COOKIE"),value:c.string()})),rr=v.merge(c.object({type:c.literal("LOCAL_STORAGE"),key:c.string(),value:c.string()})),ir=v.merge(c.object({type:c.literal("REQUEST"),url:c.string(),method:c.union([c.literal("GET"),c.literal("POST"),c.literal("PUT"),c.literal("DELETE"),c.literal("PATCH")]),headers:c.record(c.string(),c.string()).optional(),params:c.record(c.string(),c.string()).optional(),body:c.string().optional(),timeout:c.number().int().optional().describe("Max seconds to wait for the request to complete")})),ar=v.merge(c.object({type:c.literal("SUCCESS"),condition:kt.optional()})),sr=v.merge(c.object({type:c.literal("FAILURE")})),lr=c.object({data:c.string().describe("s3 url to a jpg"),width:c.number(),height:c.number()}),Ze=v.merge(te).merge(c.object({type:c.literal("VISUAL_DIFF"),threshold:c.number().optional().describe("default 0.1"),target:G.optional(),screenshot:lr.optional(),cache:de})),bt=c.discriminatedUnion("type",[Ge,Qe,er,Xe,Uo,Le,Me,kt,ar]),cr=c.discriminatedUnion("type",[Xo,Qo,qo,Vo,Dt,or,Bo,$e,Je,Yo,Go,$o,qe,Ko,rr,Ve,nr,Jo,jo,ir,Oe,_e,tr,Ze,Wo,Ke,Ye,Ho]),wt=c.discriminatedUnion("type",[...bt.options,...cr.options]),Ft=c.discriminatedUnion("type",[...bt.options,sr]);import{z as dr}from"zod";var Ra=dr.discriminatedUnion("type",[Ye,Dt,Ge,$e,Ke,qe,Ve,Me,Le,Oe,_e,Xe,Qe,Ze,Je]);import{z as mr}from"zod";var Q={type:!0,cache:!0},Ut=mr.discriminatedUnion("type",[Ye.pick(Q),Ge.pick(Q),$e.pick(Q),Je.pick(Q),Ke.pick(Q),qe.pick(Q),Ve.pick(Q),Me.pick(Q),Le.pick(Q),Oe.pick(Q),_e.pick(Q),Xe.pick(Q),Qe.pick(Q),Ze.pick(Q)]),ur=Object.values(ce).filter(s=>Ut.options.some(e=>e.shape.type.safeParse(s).success));wt.options.forEach(s=>{if("target"in s.shape&&!ur.includes(s.shape.type.value))throw new Error(`Command ${s.shape.type.value} has a target but no cache`)});import{z as hn}from"zod";import{z as pn}from"zod";import{z as et}from"zod";var ne=et.object({index:et.number().optional().describe("global index within a test (in-order traversal)"),id:et.string().optional(),skipped:et.boolean().optional(),envKey:et.string().optional().describe("key in the environment to save the result of this step to")});var oe=(i=>(i.PRESET_ACTION="PRESET_ACTION",i.MODULE="MODULE",i.AI_ACTION="AI_ACTION",i.CONDITIONAL="CONDITIONAL",i.IFRAME="IFRAME",i.SECTION="SECTION",i))(oe||{});var me=ne.extend({type:pn.literal("PRESET_ACTION"),command:wt,skipped:pn.boolean().optional()});var Pe=ne.extend({type:hn.literal("AI_ACTION"),text:hn.string(),steps:me.array().optional()});import{z as P}from"zod";var pr=P.object({cacheKey:P.string(),cacheExpiryMs:P.number()}),Bt=ne.extend({id:P.string().uuid().describe("ID of the module step itself. Used to 'namespace' step cache entries."),inputs:P.record(P.string()).optional(),cacheConfig:pr.optional()}),De=Bt.extend({type:P.literal("MODULE"),moduleId:P.string().uuid()}),hr=P.union([De.pick({type:!0,moduleId:!0}),P.record(P.unknown())]),Ee=P.object({moduleId:P.string().uuid(),name:P.string(),description:P.string().nullish(),enabled:P.boolean().nullish(),parameters:P.string().array().nullish(),defaultParameters:P.record(P.string(),P.string()).nullish(),defaultCacheKey:P.string().nullish(),defaultCacheTtl:P.number().nullish()});import{z as j}from"zod";import{z as gn}from"zod";var tt=ne.extend({type:gn.literal("CONDITIONAL"),skipped:gn.boolean().optional()});import{z as re}from"zod";var gr=re.object({type:re.literal("attr"),name:re.string(),value:re.string()}),fr=re.object({type:re.literal("css"),selector:re.string()}),yr=re.object({type:re.literal("url"),url:re.string()}),Sr=re.union([gr,yr,fr]),nt=ne.extend({type:re.literal("IFRAME"),identifier:Sr});import{z as ie}from"zod";var fn=(n=>(n.ALWAYS="ALWAYS",n.ON_FAILURE="ON_FAILURE",n.ON_ACTION_FAILURE="ON_ACTION_FAILURE",n))(fn||{});var br=ie.discriminatedUnion("type",[ie.object({type:ie.literal("NAVIGATE_URL"),url:ie.string().url()}),ie.object({type:ie.literal("GO_TO_SECTION_START")})]),wr=ie.object({trigger:ie.nativeEnum(fn).optional(),attempts:ie.number().int().optional(),restartBehavior:br}),ot=ne.extend({type:ie.literal("SECTION"),description:ie.string().describe("user provided goal of what the section should accomplish"),plan:ie.string().array().optional(),autohealingConfig:wr.optional()});var yn=Ee.merge(Bt).extend({type:j.literal("RESOLVED_MODULE"),steps:j.lazy(()=>U.array())}),Wt=Ee.extend({steps:j.lazy(()=>U.array())}),Tr=nt.extend({steps:j.lazy(()=>ve.array())}),Cr=nt.extend({steps:j.lazy(()=>U.array())}),Er=ot.extend({steps:j.lazy(()=>ve.array())}),vr=ot.extend({steps:j.lazy(()=>U.array())}),xr=tt.extend({blocks:j.object({assertion:j.lazy(()=>me),steps:j.lazy(()=>ve.array())}).array(),elseSteps:j.lazy(()=>ve.array().optional())}),Ar=tt.extend({blocks:j.object({assertion:j.lazy(()=>me),steps:j.lazy(()=>U.array())}).array(),elseSteps:j.lazy(()=>U.array().optional())}),ve=j.discriminatedUnion("type",[me,Pe,De,xr,Tr,Er]),U=j.discriminatedUnion("type",[me,Pe,yn,Ar,Cr,vr]);import{z as xe}from"zod";var Ht=xe.object({key:xe.string(),testId:xe.string().optional(),moduleId:xe.string().optional(),organizationId:xe.string(),value:Ut}),Rr=xe.record(xe.string(),Ht);var rt={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&F(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&F(t,n,e[n]);return t};var g=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(I=>Object.assign(I,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,I]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&I!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var H=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[MOMENTIC] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=H;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
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

// src/html/add-ids.ts
function addAddIdsScript() {
  const customWindow = window;
  if (customWindow.addIdsToElement) {
    return;
  }
  customWindow.addIdsToElement = (rootElement, startIndex) => {
    const allElements = "getElementsByTagName" in rootElement ? rootElement.getElementsByTagName("*") : rootElement.querySelectorAll("*");
    let currentId = startIndex;
    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      if (!element) {
        continue;
      }
      element.setAttribute("data-momentic-id", \`\${currentId}\`);
      element.setAttribute("aria-keyshortcuts", \`\${currentId}\`);
      currentId++;
      if (element.shadowRoot) {
        currentId = customWindow.addIdsToElement(
          element.shadowRoot,
          currentId
        );
      }
    }
    return currentId;
  };
}

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
    "data-ved",
    "aria-controls"
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
    "aria-hidden",
    "aria-valuenow",
    "aria-valuemin",
    "aria-valuemax"
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
    "*aria-controls*",
    // auto-generated by many frameworks like mui and radix
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
var maxTextLineLength = 4e3;
var maxAttrValLength = 200;
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
  const attributesWithNoLengthLimit = ["value"];
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
    if (!attributesWithNoLengthLimit.includes(attr) && attrVal.length > maxAttrValLength) {
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
        if (attrVal.startsWith(":") && attrVal.endsWith(":")) {
          element.removeAttribute(attr);
          continue;
        }
        if ([/aria-.*/].some((re) => attr.match(re))) {
          continue;
        }
        if (!((_e = customWindow.momenticConstants) == null ? void 0 : _e.relevantElementAttributes.includes(
          attr
        ))) {
          element.removeAttribute(attr);
          continue;
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
    if (textContent.length > maxTextLineLength) {
      textContent = textContent.slice(0, maxTextLineLength) + "[...]";
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
  customWindow.pressListener = (event) => __async(this, null, function* () {
    var _a, _b;
    if (!customWindow.captureKeystroke) {
      return;
    } else if (customWindow.isRecordingActive && !(yield customWindow.isRecordingActive())) {
      return;
    }
    console.debug("[MOMENTIC] Window press listener fired");
    yield customWindow.captureKeystroke({
      key: event.key,
      url: window.location.href,
      dataMomenticId: (_b = (_a = event.target) == null ? void 0 : _a.getAttribute(
        "data-momentic-id"
      )) != null ? _b : void 0
    });
  });
  document.addEventListener("keydown", customWindow.pressListener, {
    capture: true
  });
}
function addClickListener() {
  const customWindow = window;
  if (customWindow.clickListener) {
    return;
  }
  customWindow.clickListener = (event) => __async(this, null, function* () {
    const customWindow2 = window;
    if (!customWindow2.captureElementEvent || !customWindow2.generateHtmlCacheAttributes || !customWindow2.resolveRecordingTarget) {
      return;
    } else if (customWindow2.isRecordingActive && !(yield customWindow2.isRecordingActive())) {
      return;
    }
    const element = event.target;
    console.debug("[MOMENTIC] Window click listener fired");
    if (event.button !== 0) {
      console.debug("[MOMENTIC] Ignoring click event with non-primary button");
      return;
    }
    if (element.tagName.toLowerCase() === "select") {
      console.debug("[MOMENTIC] Ignoring click on select element");
      return;
    }
    let parent = element.parentElement;
    let attempts = 0;
    while (parent && attempts < 10) {
      attempts++;
      if (parent.tagName.toLowerCase() === "select") {
        console.debug("[MOMENTIC] Ignoring click on child of select element");
        return;
      }
      parent = parent.parentElement;
    }
    if (event.detail === 0) {
      console.debug(
        "[MOMENTIC] Ignoring click event likely triggered by Enter key"
      );
      return;
    }
    const recordingTarget = customWindow2.resolveRecordingTarget(element);
    yield customWindow2.captureElementEvent(__spreadValues({
      type: "CLICK"
    }, recordingTarget));
  });
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
  customWindow.selectListener = (event) => __async(this, null, function* () {
    const customWindow2 = window;
    if (!customWindow2.captureElementEvent) {
      return;
    } else if (!customWindow2.generateHtmlCacheAttributes) {
      console.error("[MOMENTIC] Missing generateHtmlCacheAttributes function");
      return;
    } else if (customWindow2.isRecordingActive && !(yield customWindow2.isRecordingActive())) {
      return;
    }
    console.debug("[MOMENTIC] Window select listener fired");
  });
}
function addRecordingListeners() {
  addRecordingTargetResolver();
  addClickListener();
  addSelectListener();
  addPressListener();
}

// src/html/registration.ts
function registerAllMomenticListeners() {
  addAddIdsScript();
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
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as qi}from"crypto";import Ki from"dedent";import{distance as Yi}from"fastest-levenshtein";import{existsSync as Io,readFileSync as Xi,rmSync as No}from"fs";import Ji from"js-beautify";import{cloneDeep as Qi}from"lodash-es";import{homedir as Zi}from"os";import Lt from"p-timeout";import{basename as Mo,join as Lo}from"path";import{chromium as ea,devices as ta}from"playwright";import{errors as na}from"playwright";import{addExtra as oa}from"playwright-extra";import ra from"puppeteer-extra-plugin-recaptcha";import ia from"sharp";import{z as Tt}from"zod";var el=Tt.object({testId:Tt.string(),orgId:Tt.string(),runId:Tt.string(),steps:U.array()});import fc from"string-argv";import{v4 as Sc}from"uuid";import{z as w}from"zod";import*as $ from"zod";var Nr=$.object({url:$.string(),lineNumber:$.number(),columnNumber:$.number()}),Mr=$.object({timestamp:$.number(),text:$.string(),type:$.string(),tabIndex:$.number(),args:$.unknown().array().optional(),url:$.string().optional(),location:Nr.optional()}),Sn=$.object({logsPerPage:Mr.array().array()});import{z as A}from"zod";import{isValidCron as Lr}from"cron-validator";import{z as B}from"zod";import{z as jt}from"zod";var Ct=jt.object({width:jt.number().min(200).max(1e4),height:jt.number().min(200).max(1e4)}),bn={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},il=Object.keys(bn);var it=bn["Desktop Large"];var wn=1e4,Tn=6e4,Or=B.object({pageLoadTimeoutMs:B.number().optional().refine(s=>s===void 0||s<=Tn&&s>=-1,{message:`Page load timeout must be between 0 and ${Tn/1e3} seconds`}),smartWaitingTimeoutMs:B.number().optional().refine(s=>s===void 0||s<=wn&&s>=-1,{message:`Smart waiting timeout must be between 0 and ${wn/1e3} seconds`}),extraHeaders:B.record(B.string(),B.string()).optional().describe("HTTP headers to be sent on every request"),userAgent:B.string().optional()}),_r=B.object({disableAICaching:B.boolean().default(!1),viewport:Ct.optional()}),at=_r.merge(Or),Cn=B.object({cron:B.string().refine(s=>Lr(s),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:B.boolean().default(!1),env:B.string().optional(),timeZone:B.string().default("America/Los_Angeles"),jobKey:B.string().optional()}),En=B.object({onSuccess:B.boolean().default(!1),onFailure:B.boolean().default(!0)});import*as x from"zod";import{cloneDeep as yl}from"lodash-es";import*as O from"zod";import{z as ke}from"zod";var vn="BASE_URL";var ul={[vn]:"https://www.google.com"},xn=ke.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),st=ke.object({name:ke.string(),variables:ke.record(ke.string().describe("variable name"),ke.string().describe("variable value"))});var Pr=O.object({type:O.nativeEnum(oe),generatedStep:bt.optional(),serializedCommand:O.string().optional(),elementInteracted:O.string().optional()}),we=O.object({goal:O.string(),url:O.string(),browserState:O.string(),history:O.string(),numPrevious:O.number(),lastCommand:Pr.or(O.null()),returnSchema:O.string().optional()}),Gt=O.object({env:O.record(O.unknown()),results:O.array(O.unknown()),inputs:O.record(O.unknown()).optional()});var Tl=Object.getPrototypeOf(async function(){}).constructor;import{z as ze}from"zod";var ge=(a=>(a.AI_PROVIDER="AIProviderError",a.ACTION_FAILURE="ActionFailureError",a.ASSERTION_FAILURE="AssertionFailureError",a.CONFIG_ERROR="UserConfigurationError",a.JOB_TIMEOUT="JobTimeoutError",a.WEB_AGENT_PLATFORM="InternalWebAgentError",a.UNKNOWN_PLATFORM="InternalPlatformError",a))(ge||{});var $t=ze.object({reason:ze.nativeEnum(ge),summary:ze.string()}),An=ze.object({errorMessage:ze.string(),errorStack:ze.string().optional(),classification:$t.optional()});var Rn=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(Rn||{}),In=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(In||{}),Nn=x.object({beforeUrl:x.string().optional(),afterUrl:x.string().optional(),beforeScreenshot:x.string().optional(),afterScreenshot:x.string().optional(),startedAt:x.coerce.date(),finishedAt:x.coerce.date()}),Dr=Nn.extend({viewport:x.object({height:x.number(),width:x.number()}),status:x.nativeEnum(In),message:x.string().optional(),elementInteracted:x.string().optional()}),Ae=Nn.extend({status:x.nativeEnum(Rn),message:x.string().optional(),data:x.unknown().optional(),beforeTestContext:Gt.optional(),afterTestContext:Gt.optional(),failureReason:x.nativeEnum(ge).optional(),details:x.unknown().describe("Parse using StepExecutionLogSchema.array() to get type safety. We don't explicitly type it because it's non-critical information.")}),Vt=Ae.merge(me).extend({results:Dr.array()}),kr=Ae.merge(Pe).extend({results:x.lazy(()=>Vt.array())}),zr=Ae.merge(De).extend({moduleName:x.string().optional(),results:x.lazy(()=>ue.array())}),Fr=Ae.merge(tt).extend({assertion:Vt.optional(),results:x.lazy(()=>ue.array()).describe("results for the block actually executed")}),Ur=Ae.merge(nt).extend({results:x.lazy(()=>ue.array())}),Br=Ae.merge(ot).extend({results:x.lazy(()=>ue.array()),healingAttempts:x.lazy(()=>ue.array().array()).optional()}),ue=x.discriminatedUnion("type",[kr,Vt,zr,Fr,Ur,Br]),Pl=Ae.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0}),Dl=x.object({results:ue.array(),errorMessage:x.string(),errorStack:x.string().optional()});var lt={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Et=(a=>(a.PENDING="PENDING",a.RUNNING="RUNNING",a.PASSED="PASSED",a.FAILED="FAILED",a.CANCELLED="CANCELLED",a.RETRYING="RETRYING",a.WAITING_FOR_USER="WAITING_FOR_USER",a))(Et||{}),fe=A.string().pipe(A.coerce.date()).or(A.date()),ct=A.object({id:A.string(),runKey:A.string(),organizationId:A.string(),createdAt:fe,createdBy:A.string(),flake:A.boolean().nullish(),scheduledAt:fe.or(A.null()),startedAt:fe.or(A.null()),updatedAt:fe.nullish(),finishedAt:fe.or(A.null()),resolvedBaseUrl:A.string().nullish(),status:A.unknown().transform(s=>A.nativeEnum(Et).parse(s)),trigger:A.nativeEnum(lt),attempts:A.number(),failureReason:A.nativeEnum(ge).nullish(),failureDetails:An.nullish(),testId:A.string().or(A.null()),testName:A.string().or(A.null()).optional(),test:A.object({name:A.string(),id:A.string()}).or(A.null()),suiteId:A.string().or(A.null()).optional()}),Mn=ct.pick({id:!0,status:!0,testName:!0,failureReason:!0,failureDetails:!0,createdAt:!0,startedAt:!0,finishedAt:!0,test:!0}),Hl=ct.omit({failureReason:!0,failureDetails:!0}),qt=ct.merge(A.object({results:ue.array(),debugData:Sn.optional().catch(void 0),test:A.object({name:A.string(),id:A.string(),baseUrl:A.string().nullish(),advanced:at.optional()}).or(A.null())})),jl=A.object({id:A.string(),name:A.string()});import{z as W}from"zod";import*as R from"zod";var ql=R.object({thoughts:R.string().optional().describe("only provided if a description was provided"),target:Ce.optional().describe("only provided if a description was provided"),pageState:R.string().optional().describe("serialized a11y tree, only provided if a description was provided"),options:R.array(R.string()).optional().describe("provided for <select> elements only"),screenshot:R.object({data:R.string(),height:R.number().int(),width:R.number().int()}).optional().describe("only provided if returnScreenshot is true")});var Fe=R.object({matched:R.boolean(),reason:R.string().optional().describe("Human understandable description")}),Wr=Fe.extend({type:R.literal("A11Y_ID")}),Hr=Fe.extend({type:R.literal("USER_SELECTOR")}),jr=Fe.extend({type:R.literal("CSS_SELECTOR"),selectors:R.string().array()}),Gr=Fe.extend({type:R.literal("A11Y_DISTANCE"),distance:R.number().optional(),closestElement:R.string().optional(),savedElement:R.string().optional()}),$r=Fe.extend({type:R.literal("HTML_DISTANCE"),distance:R.number().optional(),closestElement:R.string().optional(),savedElement:R.string().optional()}),Vr=Fe.extend({type:R.literal("TEMPLATE_MATCHING"),elementImageUrl:R.string().url()}),Ln=R.discriminatedUnion("type",[Wr,Hr,jr,Gr,$r,Vr]);var qr=W.object({type:W.literal("TARGETING"),name:W.string().optional().describe("Target name for steps with multiple targets"),elementLocationDecisions:Ln.array(),pageState:W.string().optional(),targetSource:W.nativeEnum(je).optional(),targetUpdateTime:W.string().optional()}),Kr=W.object({type:W.literal("AI_LOCATION"),matched:W.boolean(),pageState:W.string().optional(),ragUsed:W.boolean().optional(),thoughts:W.string().optional()}),Yr=W.object({type:W.literal("ASSERTION"),relevantElementsSerialized:W.string().array().optional(),pageState:W.string().optional(),ragUsed:W.boolean().optional()}),Ql=W.discriminatedUnion("type",[qr,Kr,Yr]);import{z as se}from"zod";var On=se.object({id:se.string().uuid(),orgId:se.string(),createdAt:fe,startedAt:fe.or(se.null()),finishedAt:fe.or(se.null()),status:se.string().transform(s=>se.nativeEnum(Et).parse(s)),trigger:se.nativeEnum(lt),suite:se.object({id:se.string(),name:se.string()}).nullish(),runs:ct.array()}),nc=On.pick({id:!0,createdAt:!0,startedAt:!0,finishedAt:!0,status:!0,trigger:!0,suite:!0}),_n=On.extend({runs:Mn.array()});var H=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let i of Object.values(ge))if(t.startsWith(i)){r=!0,e=i;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}},Re=class extends Error{decisions;constructor(e,t,n={}){super(e,n),this.decisions=t,this.name="NoElementsFoundError"}toString(){return`${this.message}
Decisions:
${this.decisions.map(e=>e.toString()).join(`
`)}`}};var vc=w.object({command:w.string(),thoughts:w.string()}),xc=w.string().pipe(w.coerce.number());var Pn=w.object({phrase:w.string()}),Kt=w.object({result:w.union([w.literal("NOT_FOUND"),w.string(),w.number(),w.array(w.unknown()),w.record(w.unknown(),w.unknown())])}),Dn=w.object({thoughts:w.string(),id:w.number().int()}),Ac=w.object({results:w.array(ue),goal:w.string(),errorMessage:w.string()}),Xr=w.discriminatedUnion("op",[w.object({op:w.literal("replace"),path:w.string(),value:w.string()}),w.object({op:w.literal("add"),path:w.string(),value:w.string()}),w.object({op:w.literal("remove"),path:w.string()})]),Rc=w.object({thoughts:w.string(),patches:Xr.array()}),Jr=w.discriminatedUnion("op",[w.object({op:w.literal("replace"),path:w.string(),value:U}),w.object({op:w.literal("add"),path:w.string(),value:U}),w.object({op:w.literal("remove"),path:w.string()})]),kn=w.object({patches:Jr.array(),thoughts:w.string()});var Oc=new Set(Object.values(ce));var Qr={AI_ACTION:"AI action",RESOLVED_MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",AUTH_LOAD:"Load auth state",AUTH_SAVE:"Save auth state",ELEMENT_CHECK:"Element check",PAGE_CHECK:"Page check",WAIT_FOR_URL:"Wait for URL",SUCCESS:"Done"},_c={AI_ACTION:"Ask AI to plan and execute something on the page.",RESOLVED_MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page, retrying until a configurable timeout.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from an HTML Select <select> element based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",AUTH_LOAD:"Load auth state (cookies, local storage) from the JavaScript object format returned by 'Save auth state' and then refresh the page.",AUTH_SAVE:"Save auth state (cookies, local storage) into a JavaScript object format usable by 'Load auth state'.",ELEMENT_CHECK:"Assert on an element's state using pre-built conditions, including content, visibility, attribute value checks.",PAGE_CHECK:"Assert on the active page's state using pre-built conditions, including URL and content checks.",WAIT_FOR_URL:"Wait for the active page's URL to match a specific URL or glob pattern. If a new tab is opened, this command will wait for the new tab's URL to match instead.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import{z as N}from"zod";var kc=N.object({body:N.string(),to:N.string(),from:N.string()}),zc=N.object({from:N.string().optional(),to:N.string().optional(),timeout:N.number().optional(),beforeDate:N.string().pipe(N.coerce.date()).or(N.date()).optional(),afterDate:N.string().pipe(N.coerce.date()).or(N.date()).optional()}),Fc=N.object({inbox:N.string(),afterDate:N.string().pipe(N.coerce.date()).or(N.date()).optional(),timeout:N.number().optional(),trimWhitespace:N.boolean().optional()});var Uc=N.object({result:N.unknown(),variableUpdates:N.record(N.string(),N.unknown()).optional(),error:N.string().optional(),success:N.boolean()});import{parseString as Zr,splitCookiesString as ei}from"set-cookie-parser";import{z as k}from"zod";var zn=k.object({name:k.string(),value:k.string(),url:k.string().optional(),domain:k.string().optional(),path:k.string().optional(),expires:k.number().default(Date.now()/1e3+60*60*24*365),httpOnly:k.boolean().optional(),secure:k.boolean().default(!0),sameSite:k.union([k.literal("Strict"),k.literal("Lax"),k.literal("None")]).default("None")});function Fn(s){let e=[],t=ei(s);for(let n of t){let o=Zr(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let d=o.sameSite.trim().toLowerCase();if(d==="strict")r="Strict";else if(d==="lax")r="Lax";else if(d==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${d}`)}o.httpOnly===void 0&&(o.httpOnly=!1),!o.path&&o.domain&&(o.path="/");let i=zn.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(i);let a=[i.name,...Object.keys(i)].map(d=>d.toLowerCase()),l=n.match(/\b(\w+)=([^;]*)/g);if(l)for(let d of l){let[h,u]=d.split("=");if(!h||!u)throw new Error(`Invalid key-value pair in cookie: ${d}`);a.includes(h.toLowerCase())||e.push({...i,name:h,value:u})}}return e}var ti=k.object({origin:k.string(),localStorage:k.array(k.object({name:k.string(),value:k.string()}))}),jc=k.object({cookies:zn.array(),origins:ti.array()});import{z as ye}from"zod";var Vc=ye.object({x:ye.number(),y:ye.number(),correlation:ye.number()}),qc=ye.object({searchImageBase64String:ye.string(),pageImageBase64String:ye.string(),id:ye.string().uuid(),timeoutMs:ye.number().max(1e4).min(0).optional()});import{z as Z}from"zod";var ni=Z.object({orgId:Z.string(),cacheKeys:Z.string().array()}),Xc=Z.object({keyParams:ni,clientMetadata:Z.string(),lockAcquisitionTimeoutMs:Z.number().optional()}),Jc=Z.object({acquired:Z.boolean(),acquiredByMetadata:Z.string(),keyPrefix:Z.string()}),Qc=Z.object({keyPrefix:Z.string(),result:Z.string(),ttlMs:Z.number()});var Zc=5*60*1e3;import{z as ae}from"zod";import{z}from"zod";import{z as I}from"zod";var oi="modules",ri="fixtures",ii="environments",ai="chromium",Un=[oi,ri,ii,ai];var si=I.string().min(1).max(255).superRefine((s,e)=>{try{di(s)}catch(t){return e.addIssue({code:I.ZodIssueCode.custom,message:t.message,fatal:!0}),I.NEVER}}),li=I.object({name:I.string(),default:I.boolean().optional(),defaultOnLocal:I.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:I.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:xn.array().optional()}),Te=I.object({id:I.string(),name:si,baseUrl:I.preprocess(s=>s===null?"":s,I.union([I.string().url(),I.literal("")])).optional(),schemaVersion:I.string(),advanced:at,retries:I.number(),envs:I.array(li).optional()}),ld=Te.pick({name:!0,baseUrl:!0,retries:!0}).extend({advanced:at}),Bn=I.object({createdAt:I.coerce.date(),updatedAt:I.coerce.date(),schedule:Cn,notification:En,createdBy:I.string(),organizationId:I.string()}),cd=Te.merge(Bn),dd=Te.merge(Bn).merge(I.object({steps:I.array(U)})),Yt=Te.merge(I.object({steps:I.array(U)})),md=Te.extend({steps:I.record(I.string(),I.unknown()).array()}),ci=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function di(s){if(s=s.toLowerCase().trim(),s.length===0||s.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(s))throw new Error('Name contains one of the following invalid characters: <>:"/\\|?*');if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(s))throw new Error(`"${s}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(s)||/^\s|\s$/.test(s))throw new Error("Name cannot start or end with a space or dot.");if(s.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(s==="none")throw new Error("Name cannot be 'none'.");if(Un.includes(s))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(s.match(ci))throw new Error("Name cannot be a UUID. Please choose a different name.")}var Sd=Ee.extend({fileType:z.literal("momentic/module"),schemaVersion:z.string(),steps:z.record(z.string(),z.unknown()).array()}),bd=Ee.extend({steps:z.array(z.record(z.string(),z.unknown())),schemaVersion:z.string()}),wd=Te.extend({steps:z.array(z.record(z.string(),z.unknown()))}),Td=z.object({test:z.string().describe("YAML for the test, including metadata and steps"),modules:z.record(z.string(),z.string()).describe("Map of module name to YAML for the module")});var mi="1.0.0",Wn=ae.object({run:ae.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:ae.boolean().optional().describe("Defaults to true")}),Ad=ae.object({type:ae.literal("momentic/fixture"),schemaVersion:ae.string(),name:ae.string(),description:ae.string().optional(),setup:ae.object({steps:Wn.array(),timeout:ae.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:ae.object({steps:Wn.array(),timeout:ae.number().optional().describe("Timeout for all steps in seconds")}).optional()}),Rd={type:"momentic/fixture",schemaVersion:mi,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as ui}from"zod";var Md=ui.string().array();import{z as M}from"zod";var Fd=M.array(M.object({id:M.string(),name:M.string(),fullPathSegments:M.string().array(),testPath:M.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:M.string(),lastModified:M.coerce.date(),createdAt:M.coerce.date()}));var Ud=M.object({steps:U.array()});var Bd=M.object({name:M.string(),baseUrl:M.string().url().optional(),environment:M.string().optional(),viewport:Ct.optional()}),Wd=Yt.merge(M.object({testPath:M.string()})),Hd=M.object({name:M.string(),description:M.string(),enabled:M.boolean(),steps:M.lazy(()=>U.array())});var jd=Wt.array(),Gd=M.array(M.object({name:M.string(),moduleId:M.string().uuid()})),$d=M.array(st),Vd=M.object({defaultEnv:M.string().optional().describe("name of the default env, or undefined to unset")});var pi={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},hi={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},Xt=class s{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=pi[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=hi[e],i=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&i.push("\x1B[39m"),i.push(...t),console.log(...i),o&&!Array.isArray(o))for(let[a,l]of Object.entries(o)){let d=l;l instanceof Error?d=l.message:typeof l=="object"&&(d=JSON.stringify(l,void 0,2),d=d.split(`
`).map((h,u)=>u>0?`  ${h}`:h).join(`
`)),console.log(e===0?`${r}  ${a}:`:`  ${a}:`,d)}else if(o)for(let a of o){let l=a;typeof a=="object"&&(l=JSON.stringify(a,void 0,2),l=l.split(`
`).map((d,h)=>h>0?`  ${d}`:d).join(`
`)),console.log(e===0?`${r}  `:"  ",l)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new s(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Kd=new Xt(1,{});var vt={},Ue=({logger:s,logKey:e,maxCount:t,intervalMs:n},o,r,...i)=>{let a=vt[e];a?clearTimeout(a.timer):(a={count:0,totalCount:0},vt[e]=a),a.totalCount++,a.count<t&&(a.count++,s.debug(o,r,...i)),a.timer=setTimeout(()=>{let l=vt[e];l?.totalCount!==l?.count&&s.debug({logKey:e,totalCount:l?.totalCount,count:l?.count},`Debug logs were rate-limited for ${e}`),delete vt[e]},n)};import{z as V}from"zod";var gi=V.object({id:V.string(),createdAt:V.coerce.date(),createdBy:V.string(),organizationId:V.string(),name:V.string(),description:V.string().nullish(),enabled:V.boolean(),schemaVersion:V.string().describe("Schema version for steps"),parameters:V.string().array().nullish().describe("Parameter list"),defaultParameters:V.record(V.string(),V.string()).nullish(),defaultCacheKey:V.string().nullish(),defaultCacheTtl:V.number().nullish()}),nm=gi.extend({steps:V.lazy(()=>ve.array())}),om=5*60*1e3;import*as p from"zod";var Ie=p.object({disableCache:p.boolean()}),fm=p.object({error:p.boolean(),reason:p.string(),message:p.string()}),ym=we.merge(Ie),Hn=Ft,Sm=we.merge(Ie).merge(p.object({screenshot:p.string().optional()})),jn=cn,bm=we.pick({browserState:!0,goal:!0}).merge(Ie).merge(p.object({screenshot:p.string().optional()})),wm=we.pick({goal:!0}).merge(Ie).merge(p.object({screenshot:p.string().describe("base64 encoded image"),hintActivatedScreenshot:p.string().describe("base64 encoded image")})),Gn=Dn,Tm=we.pick({goal:!0,url:!0}).merge(Ie),$n=p.string().array(),Cm=we.pick({goal:!0,browserState:!0}).merge(Ie),Vn=Pn,Em=we.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(Ie);var vm=p.object({testPaths:p.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:p.string().optional(),all:p.boolean().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),xm=p.object({message:p.string(),queuedTests:p.object({name:p.string(),id:p.string()}).array(),runIds:p.string().uuid().array()});var Am=p.string().array(),Rm=p.union([p.object({paths:p.string().array().describe("run specific test paths (e.g. todo-test)"),all:p.boolean().describe("run all tests").optional()}),p.object({path:p.string().describe("deprecated; present for backcompat")})]),Im=p.object({tests:p.record(p.string().describe("Test name"),p.string().describe("Test YAML")),modules:p.record(p.string().describe("Module name"),p.string().describe("Module YAML"))}),fi=p.object({test:p.string().describe("test YAML"),modules:p.record(p.string().describe("moduleId"),p.string().describe("module YAML"))}),Nm=fi.array(),Mm=p.object({testId:p.string(),schemaVersion:p.string(),steps:p.array(p.record(p.unknown()))}),Lm=p.object({entries:p.array(Ht),testId:p.string()}),Om=p.object({steps:p.array(p.record(p.unknown())),testId:p.string(),schemaVersion:p.string(),organizationId:p.string()});var _m=p.object({testId:p.string(),testName:p.string(),resolvedBaseUrl:p.string().optional(),trigger:p.nativeEnum(lt)}),Pm=p.object({id:p.string()}),yi=qt.pick({id:!0,status:!0,testName:!0,testId:!0,test:!0,failureReason:!0,failureDetails:!0}),Dm=yi.array(),km=qt.pick({startedAt:!0,finishedAt:!0,results:!0,status:!0,failureDetails:!0,failureReason:!0,debugData:!0,resolvedBaseUrl:!0,flake:!0}).partial(),zm=p.object({screenshot:p.string()}),Fm=p.object({key:p.string()}),Um=p.object({orgId:p.string()}),Bm=p.array(st),Wm=p.array(st),Hm=p.record(p.string(),p.union([p.string(),p.boolean()])),jm=p.object({paths:p.string().array(),env:p.string().optional(),urlOverride:p.string().optional(),customHeaders:p.record(p.string(),p.string()).optional()}),Gm=p.object({suiteRunIds:p.string().array()});var $m=_n.array();import{z as q}from"zod";var Si=q.object({content:q.string(),ids:q.string().array(),tokenLength:q.number()}),bi=q.object({chunks:Si.array(),numRecs:q.number()}),Km=q.object({ids:q.string().array(),score:q.number(),tokenLength:q.number()}),Ym=q.object({description:q.string(),tokenLimit:q.number()}).merge(bi),qn=q.object({ids:q.number().array()});import{validator as nu}from"@exodus/schemasafe";var Kn=s=>{s.extraHeaders&&(s.extraHeaders=Object.fromEntries(Object.entries(s.extraHeaders).filter(([e,t])=>e.trim()&&t.trim())))};import{z as Be}from"zod";var pu=Be.object({goal:Be.string(),completionType:Be.string().describe("type of completion these keywords will be used for")}),Yn=Be.object({keywords:Be.array(Be.string())});import{v4 as aa}from"uuid";var Xn=s=>!s.toLowerCase().startsWith("http");function dt(s,e){try{return!!new URL(s).origin.trim()}catch(t){return e?.error({url:s,err:t},"Invalid URL in check"),!1}}var Jn={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts","data-ved","aria-controls"],relevantElementAttributes:["name","id","value","type","class","height","width","target","title","href","src","alt","role","headers","scope","checked","required","action","min","max","minlength","maxlength","multiple","pattern","placeholder","accept","data-value","data-testid","data-cy","data-test-id","data-test","data-role","data-type","data-action","data-aria-hidden","data-hidden","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden","aria-valuenow","aria-valuemin","aria-valuemax"]};function Qn(s){if(s[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(s.length>10){let u=Math.floor(s.length/8);if((s.match(/[-_:/ ]/g)??[]).length<u)return!0}if((s.match(/[^0-9a-zA-Z.]/g)??[]).length/s.length>.2)return!0;let t=(s.match(/[0-9]/g)??[]).length;if(t/s.length>.3)return!0;let n=(s.toLowerCase().match(/[aeiou]/gi)??[]).length;if((s.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=new Set(["a","e","i","o","u","y"]),i=0,a=0;for(let u of s.toLowerCase())u>="a"&&u<="z"&&!r.has(u)?(a++,a>i&&(i=a)):a=0;if(i>4)return!0;let l=(s.match(/[A-Z]/g)??[]).length,d=(s.match(/[a-z]/g)??[]).length,h=Math.ceil(s.length*.3);return!!(d&&t&&Math.abs(d-t)<h||d&&l&&Math.abs(d-l)<h)}import{randomUUID as no}from"crypto";import{distance as Zt}from"fastest-levenshtein";import{cloneDeep as oo}from"lodash-es";import wi from"p-timeout";var Zn=new Set(["about:blank","chrome-error://chromewebdata/"]),eo=3,le="data-momentic-id",to=1e3,Jt=["button","image","generic","graphics-symbol","tab","link","menuitem","group"],Qt=1e4,mt=500;var Ti=["focusable","keyshortcuts","controls","live","relevant","orientation"],Ci=["selected","readonly","modal","required","invalid"],Ei=["id","name","role","content"],vi=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","image","svgroot","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],xi=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree","activeAriaModalDialog"],Ai=["menulistpopup","statictext","inlinetextbox"],Ri=80,xt=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],Ii=["cite"],Ni={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"],separator:["hr"]},ro={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},en=class s{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;domNode;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){this.domNode=e.domNode,this.tagName=e.domNode.tagName||void 0;let t=e.domNode.attributes.id;this.name=this.name||e.domNode.attributes.name||(t&&!Qn(t)?t:""),this.role=this.role||(e.domNode.attributes.role??""),Pi(this.properties,e.domNode)}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return vi.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=ro){let t=Object.assign({},ro,e),{indentLevel:n,noChildren:o,noProperties:r,noID:i,noContent:a}=t,l=oo(this.properties),d=" ".repeat(n),h=this.role||"",u=this.tagName??"unknown",m=this.name;h==="heading"&&m==="heading"&&(m="");let g=xt.includes(this.role)||Ii.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${d}${m}
`;let f=`${d}<${u}`;if(!i&&!g&&(f+=` id="${this.id}"`),h&&h!=="generic"&&h!==u&&!(Ni[h]??[]).includes(u)&&(f+=` role=${JSON.stringify(h)}`),m&&(f+=` name=${JSON.stringify(m)}`),this.content&&!a&&(f+=` content=${JSON.stringify(this.content)}`),Object.keys(l).length>0&&!r&&Object.entries(l).forEach(([y,T])=>{if(!Ti.includes(y)){if(Ci.includes(y)&&(!T||T==="false"))return;if(y==="value"&&a&&(l.type==="text"||this.role==="textbox"))return;if(y==="editable"&&T==="plaintext")return;if(y==="type"&&T===u)return;typeof T=="string"?f+=` ${y}="${T}"`:typeof T=="boolean"?T?f+=` ${y}`:f+=` ${y}={false}`:typeof T<"u"&&(f+=` ${y}={${JSON.stringify(T)}}`)}}),u==="::before"||u==="::after"){let y="";for(let T of this.children)y+=T.serialize({...e,indentLevel:n,neighbors:0});return y}let S=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||S)f+=` />
`;else{let y="";for(let b of this.children)y+=b.serialize({...e,indentLevel:n+2,neighbors:0});let T=y.trim();T.length<=Ri&&!T.includes(`
`)?f+=`>${T}</${u}>
`:f+=`>
${y}${d}</${u}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let y=this.parent.children.findIndex(L=>L.id===this.id),T=y>0?this.parent.children[y-1]?.serialize({...e,neighbors:0}):"",b=y<this.parent.children.length-1?this.parent.children[y+1]?.serialize({...e,neighbors:0}):"";return`${T||""}
${f}
${b||""}`}return f}shallowClone(){let e=new s({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=oo(this.properties),e}},tn=class s{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,i=!1){let a=e.has(r.id)||r.id===t?.id,l=r.shallowClone(),d=r.children,h=!1,u=[];for(let m of d){let g=n(m,a||h);g&&(u.push(g),g.parent=l,h=!0)}if(l.children=u,a||h)return l;if(xt.includes(r.role)&&i)return l}let o=n(t);return new s(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function Mi(s){return s.name?.value?`"${s.name.value}"`:s.role?.value&&s.role.value!=="none"&&s.role.value!=="generic"?`"${s.role.value}"`:`"${s.nodeId}"`}function Li(s,e,t,n){return s.bounds.x===null||s.bounds.y===null||s.bounds.height===null||s.bounds.width===null||s.bounds.width===0||s.bounds.height===0?!0:s.bounds.x+s.bounds.width<e.leftBound||s.bounds.x>e.rightBound?(Ue({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):s.bounds.y+s.bounds.height<e.upperBound||s.bounds.y>e.lowerBound?(Ue({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:s,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):s.computedStyles.display==="none"?(t.debug({domNode:s},"Filtering out node since it has display none"),!1):!0}async function io({node:s,parent:e,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l}){if(!e&&s.parentId)throw new Error(`Got no parent for accessibility node ${s.nodeId}: ${JSON.stringify(s)}`);let d=(b,L={})=>{},h=s.backendDOMNodeId,u=Ai.includes((s.role?.value).toLowerCase());if(!u&&h===void 0)return d("Filtering out node since it doesn't exist in the DOM"),[];let m=h?t.backendIdToNode[h]:void 0;if(!u&&!m)try{let b=await wi(o.send("DOM.describeNode",{backendNodeId:h}),{milliseconds:500,fallback:()=>{r.debug("Timeout getting node from CDP while processing a11y tree")}});if(b&&b.node.nodeName.toLowerCase()==="slot"&&b.node.distributedNodes?.length)r.debug({redirectedDomNode:m,parentAXNode:e?.getNodeOnlySerializedForm(),originalAXNode:s,cdpResult:b},"Redirected to assigned slot");else return d("Filtering out node since it doesn't exist in the DOM",{cdpResult:b}),[]}catch(b){return d("Filtering out node since it doesn't exist in the DOM",{err:b}),[]}if(m&&e&&a&&l&&s.backendDOMNodeId&&!Li(m,l,r,i))return m&&(m.momenticIgnored=!0),[];let g=s.name?.value?typeof s.name.value=="string"?s.name.value:`${s.name.value}`:"",f=s.value?.value?typeof s.value.value=="string"?s.value.value:`${s.value.value}`:"";if(g==="momentic_cursor"||g.includes("chakra"))return m&&(m.momenticIgnored=!0),[];let S=new en({domNode:m,id:parseInt(s.nodeId),role:s.role?.value||"",name:g,content:f,properties:s.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Mi(s),backendNodeID:s.backendDOMNodeId,ignoredByCDP:s.ignored});for(let b of s.childIds??[]){if(!b)continue;let L=n.get(parseInt(b));if(!L)continue;let D=await io({node:L,parent:S,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:a,viewportDetails:l});D.length&&(S.children=S.children.concat(D))}if(S.role==="StaticText"&&(S.children=[]),S.children.length===1&&S.children[0].role==="StaticText"){let b=S.name,L=S.children[0]?.name;(b===L||!L)&&(S.children=[])}let y=[];for(let b=S.children.length-1;b>=0;b--){let L=S.children[b];if(L.role!=="StaticText"){y.push(L);continue}if(b===0||S.children[b-1].role!=="StaticText"){y.push(L);continue}S.children[b-1].name+=` ${L.name}`}if(S.children=y.reverse(),S.role==="generic"&&S.children.length===1){let b=S.children[0];if(S.name&&!xt.includes(b.role)&&S.name===b.name)return m&&(m.momenticIgnored=!0),S.children}if(!S.isInteresting()&&s.parentId)return m&&(m.momenticIgnored=!0),S.children;for(let b of S.children)b.parent=S;return[S]}function ao({node:s,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){s.id=r,r+=1,e.set(s.id,s),s.dataMomenticId?t.set(s.dataMomenticId,s):xt.includes(s.role);for(let i of s.children)r=ao({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}async function so({a11yGraph:s,domGraph:e,logger:t,cdpClient:n,filterByViewport:o,viewportDetails:r}){if(!s.root)throw new Error("A11y tree has no root");let i=no();s.allNodes=s.allNodes.filter(u=>u.ignored?!u.ignoredReasons?.find(g=>xi.includes(g.name)):!0);let a=new Map;for(let u of s.allNodes)a.set(parseInt(u.nodeId),u);let l=await io({node:s.root,domGraph:e,parent:null,inputNodeMap:a,cdpClient:n,logger:t,callId:no(),filterByViewport:o,viewportDetails:r});if(l.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(l)}`);if(l.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let d=new Map,h=new Map;return ao({node:l[0],a11yIdNodeMap:d,dataMomenticIdMap:h,logger:t,callId:i}),new tn(l[0],d,h)}var nn=(s,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=s[o];if(typeof r!="string"||!r.trim()||e[o]===void 0)continue;let i=Zt(r,e[o])/Math.min(r.length,e[o].length);i===0?t+=2:i<=.1&&t++}if(e.numChildren!==void 0&&(s.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=s.getNodeOnlySerializedForm(),r=Zt(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.1&&t++}if(e.serializedForm){let o=s.serialize({noID:!0,maxLevel:1,neighbors:1}),r=Zt(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.1&&t++}return t},Oi=["href","src"];function _i(s,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return Oi.includes(s)&&e.length>60?e.slice(0,50)+"...":s==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function Pi(s,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{Jn.relevantElementAttributes.includes(t)&&!Ei.includes(t)&&!s[t]&&!t.startsWith("aria")&&t!=="class"&&(s[t]=_i(t,n))})}function lo(s,e,t=4e3){let n=[],o=Math.floor(t/2),r=`id="${s}"`,i=0,a=e.indexOf(r,i);for(;a!==-1;){let l=Math.max(i,a-o),d=Math.min(e.length,a+o),h=e.slice(l,d);n.push(h),i=d,a=e.indexOf(r,i)}return n.join(`
...
`)}var Ne={r:147,g:196,b:125,a:.55},co={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:Ne,paddingColor:Ne,borderColor:Ne,marginColor:Ne,eventTargetColor:Ne,shapeColor:Ne,shapeMarginColor:Ne,showInfo:!0,showAccessibilityInfo:!0};var At=["display","opacity","visibility","height","max-height","overflow"];function mo({snapshot:s,devicePixelRatio:e,pageFrameId:t}){let n=s.strings,o=s.documents,r=o[0];t&&(r=o.find(l=>n[l.frameId]===t));let i={};return{root:Di(r,n,e,i),backendIdToNode:i}}function Di(s,e,t,n){let o=s.layout,r={};o.nodeIndex.forEach((f,S)=>{r[f]=S});let i=o.styles,a=o.bounds??[],l=s.nodes,d=l.backendNodeId??[],h=l.attributes??[],u=l.parentIndex??[],m=l.nodeName??[],g=l.inputChecked??{index:[]};for(let f=0;f<d.length;f++){let S=d[f],y=h[f]??[],T=u[f]&&u[f]>=0?u[f]:null,b=r[f],L;b?L=a[b]??[]:L=[];let D={backendNodeId:S,bounds:{x:L[0]??null,y:L[1]??null,width:L[2]??null,height:L[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:T?d[T]:null,tagName:m[f]!==void 0?e[m[f]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};D.parentBackendNodeId&&n[D.parentBackendNodeId].children.push(S);for(let X of Object.keys(D.bounds)){let ee=X;D.bounds[ee]!==null&&(D.bounds[ee]/=t)}let he=i[f]??[];for(let X=0;X<he.length&&!(X>=At.length);X++){let ee=he[X];if(!ee||isNaN(ee))continue;let be=e[ee];if(!be)continue;let J=At[X];D.computedStyles[J]=be}for(let X=0;X<y.length;X+=2){let ee=y[X],be=y[X+1];if(!ee||!be)continue;let J=e[ee],He=e[be];!J||!He||(D.attributes[J]=He)}g.index.includes(f)&&(D.attributes.checked="true"),n[D.backendNodeId]=D}return n[d[0]]}async function ht(s){return s.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var F=(s=1e3)=>new Promise(e=>setTimeout(()=>e(),s));function uo(){return window.lastCursorPos}function po(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function ho(){window.globalHintManager&&window.globalHintManager.reset()}async function gt(s,e){let t=Date.now();for(;Date.now()-t<8e3;){try{if(await s.evaluate(()=>{let o=window;return!!(o.generateCssSelectors&&o.evaluateCssSelectors&&o.generateHtmlCacheAttributes&&o.ldist)},{timeout:1e3}))return}catch{}e.debug("Waiting for momentic browser scripts to load..."),await F(500)}throw new Error(`Failed to load momentic browser scripts on page ${s.url()}`)}var go=`(function () {
  if (document.__customCookieSetterApplied__) {
    return;
  }
  document.__customCookieSetterApplied__ = true;
  console.debug("[MOMENTIC] Applying cookie interceptor")

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
})()`;var fo=({nodeOnlySerializedHtml:s})=>{let e=window;if(!e.ldist||!e.serializeElementOnlyWithText||!e.getAllElements)return{error:"Momentic core libraries not found"};let t=e.getAllElements(),n,o,r=1/0,i;for(let a of t){let l=e.serializeElementOnlyWithText(a),d=e.ldist(s,l);d<r?(r=d,o=l,n=a.getAttribute("data-momentic-id")??void 0,i=void 0):d===r&&(i=l)}return i?{error:`[MOMENTIC] Multiple HTML elements with same distance (${r}) found:
      ${i}
      ==================
      ${o}
      `}:{dataMomenticId:n,closestDistance:r,closestNodeSerialized:o}};import Pp from"nodejs-file-downloader";import{tmpdir as ki}from"os";import zp from"p-timeout";import on,{basename as Up,dirname as Bp}from"path";var zi="file://",Hp=on.join(ki(),"momentic","downloads");var jp=50*1024*1024;function yo(s,e){return`${zi}${s}/${e}`}function So(s){let e=on.extname(s),t=on.basename(s,e);return s=(t.length>100?t.slice(t.length-100):t)+e,s=s.trim().replaceAll(" ","_"),s}async function bo({locator:s,logger:e}){let[t,n]=await s.evaluate(r=>[r.tagName.toLowerCase(),r.getAttribute("class")??""]);if(t!=="input"||!n.toLowerCase().includes("chakra"))return;let o=await s.boundingBox({timeout:2e3});if(o===null){e.warn({elementDisplayString:await ht(s)},"Attempting to click on element with no bounding box");return}if(!(o.width!==1||o.height!==1))try{await gt(s.page(),e);let r=await s.evaluate(a=>{let l=window;if(!l.CssSelectorGenerator)return{type:"error",error:"[MOMENTIC] Missing CSS selector libraries"};let d=a.parentElement;if(!d)return{type:"error",error:"Input click target has no parent for redirection"};let h=l.CssSelectorGenerator.getCssSelector(d,{}),u=a.getBoundingClientRect(),m=d.getBoundingClientRect(),g={x:Math.min(Math.max(1,u.left-m.left),m.width-1),y:Math.min(Math.max(1,u.top-m.top),m.height-1)};return{type:"result",selector:h,relativePoint:g,serializedForm:d.outerHTML.slice(0,500)}});if(r.type==="error")throw new Error(r.error);let i=s.page().locator(r.selector);return await i.waitFor({state:"attached",timeout:2e3}),e.info(r,`Redirected click to parent element with selector: ${r.selector}`),{locator:i,relativePoint:r.relativePoint}}catch(r){e.error({err:r},"Failed finding parent label for Chakra element");return}}var To=["date","datetime-local","month","time","week"],wo={date:/^\d{4}-\d{2}-\d{2}$/,"datetime-local":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,month:/^\d{4}-\d{2}$/,time:/^\d{2}:\d{2}$/,week:/^\d{4}-W\d{2}$/};async function Co(s,e,t,n){let o=(await s.evaluate(()=>document.activeElement?.getAttribute("type"))??"").toLowerCase();return wo[o]&&(wo[o].test(e)&&n.warn(`Detected datetime input (${e}) in normalized format - this may fail to fill correctly as it is not how the user would input the value`),t.pressKeysSequentially=!0,t.clearContent=!1,n.debug("Transforming datetime input to use sequential key presses")),!1}async function Eo(s,e,t,n,o){try{await Fi(s,e,t,n)}catch(r){o.error({err:r,tabIndex:e},"Error handling new console log")}}async function Fi(s,e,t,n){let o=n.text();o.length>mt&&(o=o.slice(0,mt)+"...(TRUNCATED)");let r=[];for(let i of n.args())try{let a=await i.jsonValue(),l=JSON.stringify(a);l.length>mt?r.push(l.slice(0,mt)+"...(TRUNCATED)"):(typeof a!="object"||Object.keys(a).length>0)&&r.push(a)}catch{}rn(s,t,e,{url:s.url(),location:n.location(),type:n.type(),text:n.text(),args:r})}function rn(s,e,t,n){let o=Date.now(),r=e.logsPerPage;if(r.length<=t||r[t]===void 0){r[t]=[];for(let i=0;i<t;i++)r[i]===void 0&&(r[i]=[])}r[t].length>Qt&&(r[t]=r[t].slice(Math.floor(Qt/2)),r[t]?.push({url:s.url(),timestamp:o,type:"warning",text:"[MOMENTIC] Truncated console logs due to buffer overflow",tabIndex:t})),r[t].push({...n,tabIndex:t,timestamp:o})}function vo(){return async s=>{let{fragment:e,code:t,context:n}=s,{env:o,results:r,inputs:i}=n||{},a=Object.getPrototypeOf(async function(){}).constructor;return{result:await Promise.resolve(new a("env","results","inputs",e?`return ${t}`:t)(o,r,i))}}}var sa=Lo(Zi(),"momentic","chromium"),We=process.env.TWO_CAPTCHA_KEY,Ot=oa(ea);Ot.use(ra({provider:{id:"2captcha",token:We},visualFeedback:!0}));async function an(s,e){let t,n;for(let o=0;o<4;o++)try{return t=s.pages(),(await Promise.all(t.map(async r=>({title:await r.title(),url:r.url()})))).filter(r=>dt(r.url,e))}catch(r){n=r,await F(500)}throw new Error(`Failed to get tab titles after all retries: ${n?.message}`)}var sn=class s{static USER_AGENT=ta["Desktop Chrome"].userAgent;contextInitialized=!1;browser;context;page;systemDevicePixelRatio;userControlledBrowserSettings;pageLoadPromise=null;lastTabChangeEventTimeout=void 0;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;debugData={logsPerPage:[]};enricher;storage;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;viewport;onTabsChange=void 0;constructor({storage:e,enricher:t,browser:n,context:o,page:r,baseUrl:i,logger:a,localMode:l,cdpClient:d,userBrowserSettings:h,viewport:u,onTabsChange:m,systemDevicePixelRatio:g}){Kn(h),this.storage=e,this.enricher=t,this.browser=n,this.context=o,this.cdpClient=d,this.page=r,this.baseURL=i,this.logger=a,this.userControlledBrowserSettings=h,this.localMode=!!l,this.viewport=u||it,this.onTabsChange=m,this.systemDevicePixelRatio=g}async initializeContext(){if(this.contextInitialized)return;this.userControlledBrowserSettings.extraHeaders&&await this.context.setExtraHTTPHeaders(this.userControlledBrowserSettings.extraHeaders),await this.context.grantPermissions(["clipboard-read","clipboard-write","microphone","camera"]);let e=[this.context.addInitScript({content:rt.cssGeneratorLibJs}),this.context.addInitScript({content:rt.htmlUtilsLibJs}),this.context.addInitScript({content:"window._MOMENTIC_BROWSER = true;"})];this.localMode&&e.push(this.context.addInitScript({content:go}));let t=n=>this.handleNewPageEvent(n);this.context.on("page",t),await this.handleNewPageEventHelper(this.page),this.context.on("close",()=>{this.logger.debug("Chrome browser context was closed"),this.context.off("page",t)}),await Promise.all(e),this.contextInitialized=!0}static async init({baseUrl:e,logger:t,storage:n,enricher:o,userBrowserSettings:r,browserArgs:i,contextArgs:a,onClose:l,waitForLoad:d=!0,localMode:h,localAppUrl:u,extensionPath:m,skipPageSetup:g,timeout:f,browserbaseConnectUrl:S,onTabsChange:y}){process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY="1";let T={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...i??{}},b={viewport:it,userAgent:r.userAgent??s.USER_AGENT,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...a??{}},L=null,D,he;if(h)D=await Ot.launchPersistentContext(sa,{...T,...b,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${u}`,`--load-extension=${m}`,"--test-type=browser","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"],baseURL:e}),he=D.pages()[0],l&&he.on("close",()=>{l()});else if(S){L=await Ot.connectOverCDP(S);let J=L.contexts()[0];if(!J)throw new Error("Failed to get browserbase default context");let He=J.pages()[0];if(!He)throw new Error("Failed to get browserbase default page");D=J,he=He}else{L=await Ot.launch({...T,args:["--disable-dev-shm-usage","--no-first-run","--renderer-process-limit=4","--disable-site-isolation-for-policy","--disable-site-isolation-trials","--autoplay-policy=user-gesture-required","--disable-add-to-shelf","--disable-desktop-notifications","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]});let J={...b,baseURL:e};D=await L.newContext(J),t.debug({contextArgs:J},"Browser initialization context args"),he=await D.newPage()}let X=await s.initCDPSession(D,he,t,f),ee=new s({browser:L,context:D,page:he,baseUrl:e,logger:t,storage:n,enricher:o,localMode:h,userBrowserSettings:r,cdpClient:X,viewport:b.viewport||it,onTabsChange:y,systemDevicePixelRatio:b.deviceScaleFactor});await ee.initializeContext();let be=async()=>{try{await ee.navigate({url:e,initialNavigation:!g,loadTimeoutMs:f})}catch(J){if(t.error({err:J},"Failed to initialize Chrome browser"),d)throw J}};return d?await be():be(),ee}async handleAvailableTabsChangeHelper(){try{let e=await an(this.context,this.logger),t=this.page.url();this.onTabsChange?.(e,t)}catch(e){this.logger.error({err:e},"Error sending available tabs to frontend")}}async handleAvailableTabsChange(){clearTimeout(this.lastTabChangeEventTimeout),this.lastTabChangeEventTimeout=setTimeout(()=>this.handleAvailableTabsChangeHelper(),1500)}async handlePageErrorEvent(e){}handlePageClosedEvent(e){if(!this.browser||!this.browser.isConnected())return;let t=async()=>{try{if(this.page!==e){this.logger.info({url:e.url()},"Detected background page was closed"),this.handleAvailableTabsChange();return}this.logger.info({url:e.url()},"Detected active page was closed, switching to another tab");let n=this.context.pages();for(let o=n.length-1;o>=0;o--){let r=n[o];if(!(!r||r.isClosed()||!dt(r.url()))){this.logger.info(`Automatically switching to tab ${o} after close: ${r.url()}`),await this.switchToPageByIndex(r,o);break}}}catch(n){this.logger.warn({err:n},"Error in page close event handler")}};this.pageLoadPromise=t()}async handleNewPageEvent(e){let t=e.url();if(!(!t.trim()||t==="about:blank"))try{this.logger.debug({url:t},"Detected new page event, registering handlers and waiting for load to complete"),await this.handleNewPageEventHelper(e)}catch(n){this.logger.warn({err:n},"Error handling new page open, continuing....")}}async handleNewPageEventHelper(e){e.on("close",o=>this.handlePageClosedEvent(o)),e.on("pageerror",async o=>this.handlePageErrorEvent(o)),e.on("framenavigated",async o=>{o===e.mainFrame()&&await this.handleFrameNavigationEvent(o)});let t=this.context.pages().indexOf(e);e.on("console",o=>{Eo(e,t,this.debugData,o,this.logger)});let n=this.pageLoadPromise;this.pageLoadPromise=(async()=>{try{await Promise.resolve(n),await this.waitForPageOrFrameLoad(e),this.handleAvailableTabsChange()}catch(o){this.logger.error({err:o},"Failed to wait for new page to load")}finally{this.pageLoadPromise=null}})()}async handleFrameNavigationEvent(e){let t=e.url();if(!t||t==="about:blank")return;let n=this.pageLoadPromise;this.pageLoadPromise=(async()=>{try{await Promise.resolve(n),await this.waitForPageOrFrameLoad(e),this.handleAvailableTabsChange()}catch(o){this.logger.error({err:o},"Failed to wait for frame navigation to finish")}finally{this.pageLoadPromise=null}})()}async getLocatorFromCdpFrame(e,t){let n=this.page;for(let a of t)n=n.frameLocator(`iframe[src=${JSON.stringify(a)}]`);let o=this.getAttributeFromStringArray(e.attributes??[],"src");if(!o)throw new Error(`Got iframe without src attribute: ${JSON.stringify(e)}`);let r=n.locator(`iframe[src=${JSON.stringify(o)}]`),i=await(await r.evaluateHandle(a=>a)).asElement().contentFrame();if(!i)throw new Error(`Got null frame from locator: ${r}`);return await this.waitForPageOrFrameLoad(i),i}async getMatchingFrame(e){if(e.type!=="url")throw new Error("Only url frame identifiers are supported now");let t=e.url,o=[{node:(await this.cdpClient.send("DOM.getDocument",{pierce:!0,depth:-1})).root,srcChain:[]}],r=[];for(;o.length>0;){let i=o.pop(),a=i.node,l=i.srcChain;if(a.nodeName.toLowerCase()==="iframe"){let d=this.getAttributeFromStringArray(a.attributes??[],"src");if(!d)continue;t.startsWith("/")&&t.endsWith("/")?new RegExp(t.slice(1,-1)).test(d)&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}):t.trim()===d.trim()&&r.push({node:a,frame:await this.getLocatorFromCdpFrame(a,l)}),l=[...l,d]}for(let d of a.children??[])o.push({node:d,srcChain:l});a.contentDocument&&o.push({node:a.contentDocument,srcChain:l})}if(r.length===1)return r[0];throw r.length>1?new Error(`Found multiple frames with src matching '${t}'. Please use a more specific selector.`):new Error(`Failed to find frame with src matching: ${t}`)}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="",o;for(;e<3;){try{if(this.activeFrame.type==="url")n=this.activeFrame.url,t=(await this.getMatchingFrame(this.activeFrame)).frame;else throw new Error(`Frame identifier type ${this.activeFrame.type} is not yet supported`);if(t)return t}catch(r){o=r}await F(250),e++}throw new H("InternalWebAgentError",o?o.message:`Failed to find frame with src matching '${n}' on page`)}static async initCDPSession(e,t,n,o=8e3){let r=2,i=async()=>{try{let l=await e.newCDPSession(t);return l.on("Target.targetCrashed",d=>{n.error({payload:d},"CDP session crashed, Momentic will likely not function correctly")}),l.on("Inspector.targetCrashed",d=>{n.error({payload:d},"CDP inspector session crashed, Momentic will likely not function correctly")}),await l.send("Accessibility.enable"),await l.send("DOM.enable"),await l.send("Overlay.enable"),l}catch(l){if(r>0)return n.debug({err:l},"Failed to initialize CDP session, re-creating CDP client"),await F(500),r--,i();throw l}};return await Lt(i(),{milliseconds:o,fallback:()=>{throw new Error(`Failed to initialize session within page load timeout (${t.url()})`)}})}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.debugData.logsPerPage=[],this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&await this.context.clearCookies();let t=this.context.pages();for(let r=0;r<t.length;r++){if(e.clearStorage){let i=t[r].url();try{this.originsVisited.delete(new URL(i).origin)}catch{}try{await t[r].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(a=>{a.forEach(l=>{l.name&&indexedDB.deleteDatabase(l.name)})})},{timeout:1e3})}catch(a){this.logger.debug({err:a},"Failed clearing site data, continuing...")}}r!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[r].url()}`),await t[r].close())}if(this.page=this.context.pages()[0],this.page.isClosed()){this.logger.debug("Page is closed, exiting reset early");return}let n=await s.initCDPSession(this.context,this.page,this.logger,e.timeout),o=this.cdpClient;this.cdpClient=n;try{await o.detach()}catch{}if(e.clearStorage)for(let r of this.originsVisited)this.logger.debug({origin:r},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:r,storageTypes:"all"}),this.originsVisited.delete(r);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async toggleHints(e){let t=this.page;e.state==="on"?(await t.addStyleTag({content:rt.vimiumCss}),await t.addScriptTag({content:rt.vimiumJs}),await t.evaluate(po,{timeout:1e3})):await t.evaluate(ho,{timeout:1e3})}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){if(!this.browser)return;let e=this.browser;this.browser=null;try{this.originsVisited.clear(),await this.page.close(),await this.context.close(),await e.close()}catch(t){throw new Error(`Error cleaning up browser: ${t}`)}finally{this.browser=null}}get closed(){return!this.browser||!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}url(){return this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let i=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:i}}async screenshot(e){let{retries:t=1}=e;try{let n=await this.screenshotHelper({...e,retries:t});if(n.byteLength>5e6)this.logger.error("Page screenshot is greater than 5MB, which may cause performance issues with some AI models");else if(n.length===0)throw new Error("Got empty screenshot");return n}catch(n){if(t>0)return this.logger.debug({err:n},"Failed taking screenshot, retrying..."),await F(500),this.screenshot({...e,retries:t-1});throw n}}async screenshotHelper({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,timeout:i,clearHighlights:a=!1}){a&&await this.removeAllHighlights();let l={fullPage:!1,type:"jpeg",quality:t,scale:n,caret:r?"hide":"initial",path:o,timeout:i??4e3};e&&(l.scale="css");let d;if(l.scale==="css"||l.path)d=await this.page.screenshot(l);else{let h=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});d=Buffer.from(h.data,"base64")}if(!e)return d;if(e){let h;"id"in e?h=(await this.resolveTarget(null,e)).locator:h=e;let u=await h.boundingBox();if(!u)throw new Error("Attempted to screenshot an element that is not visible on the page");let{x:m,y:g,width:f,height:S}=u;if(!f||!S)throw new Error("Attempted to screenshot an element with zero width or height");if(m<0||g<0)throw new Error("Attempted to screenshot an element with negative coordinates");m=Math.floor(m),g=Math.floor(g),f=Math.ceil(f),S=Math.ceil(S);try{d=await ia(d).extract({left:m,top:g,width:f,height:S}).toBuffer()}catch(y){throw new Error(`Failed taking element screenshot at coordinates (${m}, ${g}) with size (${f}, ${S}): ${y}`)}}return d}async getViewport(){return this.viewport}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n=this.pageLoadTimeout}){Xn(e)&&(e=new URL(e,this.baseURL).toString());let o=Date.now();this.logger.debug(`Navigating to ${e}`);try{t||await this.waitForDOMStability();try{await this.page.goto(e,{timeout:n,waitUntil:"domcontentloaded"})}catch(i){throw new H("ActionFailureError",i.message)}await this.waitForPageOrFrameLoad(this.page),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-o)}ms`)}catch(i){if(i instanceof Error&&i.message.includes("ERR_ABORTED")){this.logger.error({err:i},"Navigation error, possibly due to user cancellation");return}throw i}let r=this.url();if(Zn.has(r))throw new H("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t)try{await this.exposeRecordingBindings()}catch(i){i instanceof Error&&i.message.includes("already registered")||this.logger.error({err:i},"Failed to install Momentic libraries for action recording")}}async type(e,t={},n=!1){await this.directTypeHelper(e,t,n)}async directTypeHelper(e,t={},n=!1){let o=await this.getUserPageOrFrame();if(!await Co(o,e,t,this.logger)){if(n){let r=Date.now(),i=!1;for(;Date.now()-r<this.smartWaitingTimeout;){let a=await o.evaluate(()=>document.activeElement&&document.activeElement.tagName.toLowerCase());if(a&&a!=="body"){i=!0;break}await F(250)}i||this.logger.warn("No active element found to type into, attempting anyways")}t.clearContent&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),t.pressKeysSequentially?await this.page.keyboard.type(e,{delay:100}):(await this.page.waitForTimeout(25),await this.page.keyboard.insertText(e)),t.pressEnter&&await this.page.keyboard.press("Enter")}}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:4e3})}async highlight(e,t){try{let n=await this.resolveTarget(null,e,{skipFetchTree:!0});return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.debug({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];for(;t.length;){let n=t.pop();clearTimeout(n)}Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})},{timeout:1e3})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{let r=window;r.momenticIsEligible=h=>{let m=window.getComputedStyle(h,null).getPropertyValue("display");if(m==="none"||m==="contents")return!1;let g=h.getBoundingClientRect();return!(!g.height||!g.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let i=0;for(;!r.momenticIsEligible(n)&&i<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,i++}let a=n.style.getPropertyValue("outline"),l=n.style.getPropertyPriority("outline");n.style.setProperty("outline","5px dashed rgb(255, 0, 153)","important");let d=`momentic${Math.floor(Math.random()*1e7)}`;r[d]=()=>{n.style.removeProperty("outline"),n.style.setProperty("outline",a,l)},r.removeHighlightTimers.push(setTimeout(()=>{r[d](),r.removeHighlightFunctions?.[d]&&delete r.removeHighlightFunctions[d]},5e3)),r.removeHighlightFunctions[d]=r[d]},t?.color,{timeout:1e3}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}recordUrlVisited(e){try{this.originsVisited.add(new URL(e).origin)}catch(t){this.logger.warn({err:t},"Failed to record origin visited")}}async wrapPageLoad(e){return await Promise.resolve(this.pageLoadPromise),await e()}async loadAuthState(e){await this.waitForPageOrFrameLoad(this.page);let t=[];for(let o of e.cookies){let r=await this.setCookie(o);t=t.concat(r)}this.logger.info({cookiesSet:t},"Loaded cookies"),await this.cdpClient.send("DOMStorage.enable");let n=0;for(let o of e.origins??[])for(let r of o.localStorage)try{await this.cdpClient.send("DOMStorage.setDOMStorageItem",{storageId:{securityOrigin:new URL(o.origin).origin,isLocalStorage:!0},key:r.name,value:r.value}),n++}catch(i){this.logger.warn({err:i,origin:o},"Failed to set local storage entry");break}this.logger.debug({storageState:e},`Loaded ${e.cookies.length} cookies and ${n} local storage entries`),await this.refresh()}async saveAuthState(){return this.context.storageState()}async getOpenPageUrls(){return(await an(this.context,this.logger)).map(t=>t.url)}saveA11yDetailsToCache(e,t){t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()}async saveNodeDetailsToCache(e,t,n,o,r){if(t&&(this.saveA11yDetailsToCache(t,n),t.properties.hidden&&t.properties.hidden!=="false"&&this.logger.warn({serializedForm:t.getSerializedFormWithContext()},"Chose hidden element for action")),!(n.generatedSelectors&&n.generatedSelectors.length>1)){if(o)n.dataMomenticId=o;else{this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}try{let i=await this.fetchHtmlAttributes(e,o);Object.assign(n,i)}catch(i){this.logger.debug({err:i},"Failed to fetch HTML attributes for target")}if(Jt.includes(n?.role??""))try{await this.saveElementVisualAttributes(n,r)}catch(i){this.logger.debug({err:i},"Failed to get element screenshot while saving node details")}}}async saveElementVisualAttributes(e,t){if(!t)return;await t.scrollIntoViewIfNeeded({timeout:4e3});let n=await t.boundingBox();if(!n||!n.width||!n.height){e.boundingBox=void 0,e.screenshotUrl=void 0;return}let{x:o=0,y:r=0,width:i=0,height:a=0}=n;if(e.boundingBox&&Math.abs(e.boundingBox.width-i)<1&&Math.abs(e.boundingBox.height-a)<1&&Math.abs((e.boundingBox.x??0)-o)<1&&Math.abs((e.boundingBox.y??0)-r)<1)return;this.logger.debug({oldBox:e.boundingBox,newBox:n},"Updating element screenshot");let l=await this.screenshot({target:t,scale:"css",timeout:4e3});e.boundingBox=n,e.screenshotUrl=await this.storage.uploadScreenshot(l)}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2||!t.serializedHtml)throw new Error("Insufficient data to resolve target using CSS selectors");let n;try{n=await e.evaluate(l=>window.evaluateCssSelectors(l),{selectors:t.generatedSelectors,lDistThresholdLax:.5,lDistThresholdStrict:.1,serializedNodeWithContext:t.serializedHtml})}catch(l){throw new Error(`Failed to evaluate CSS selectors in browser: ${l}`)}if(n.result)this.logger.debug(n,"CSS selector evaluation returned an element");else throw new Error("CSS selector evaluation returned no eligible elements");let o=n.result,r=parseInt(o.dataMomenticId),i=this.dataMomenticIdToNodeMap.get(r);if(t.nodeOnlySerializedForm&&i){let l=nn(i,t);if(l<4){let d=`Rejecting best CSS selector candidate due to low similarity score (${l})`;throw new Error(d)}}let a=e.locator(o.workingSelectors[0]);return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(e,i,t,r,a),t.generatedSelectors=Array.from(new Set([...o.workingSelectors??[],...t.generatedSelectors??[]])),{a11yNode:i,displayString:o.serializedElement,locator:a,decisions:[{type:"CSS_SELECTOR",matched:!0,reason:`${o.workingSelectors.length} CSS selectors matched the following element: ${o.serializedElement}`,selectors:o.workingSelectors}]}}async resolveTarget(e,t,n={}){let{skipFetchTree:o=!1,targetName:r}=n;this.logger.debug({target:t,skipFetchTree:o},"Resolve target called");let i=await this.getUserPageOrFrame();if(await gt(i,this.logger),t.id>0&&!un(t)){let m=this.a11yIdToNodeMap.get(t.id);if(!m)throw new H("InternalWebAgentError",`Resolving target failed because id ${t.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);let g=await this.getLocatorFromA11yNode(m);return await this.saveNodeDetailsToCache(i,m,t,m.dataMomenticId,g),{locator:g,a11yNode:m,displayString:m.getNodeOnlySerializedForm(),decisions:[]}}let a=Date.now(),l,d=0,h=this.smartWaitingTimeout,u;for(;!l||l-a<h;){d++;try{l=Date.now(),u=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!0,skipFetchTreeWait:!0,skipFetchTree:o}),this.logger.debug(`Resolution succeeded through CSS selectors only (attempt ${d})`);break}catch(m){this.logger.debug({err:m,decisions:m instanceof Re?m.decisions:[]},`Could not resolve target through CSS selectors only (x${d})`),await F(500)}}return u||(this.logger.debug("Waiting for page stability and retrying all target matching methods"),u=await this.resolveTargetHelper({root:i,target:t,cssSelectorOnly:!1,skipFetchTreeWait:!1,skipFetchTree:o})),e?.details?.push({type:"TARGETING",name:r,elementLocationDecisions:u.decisions,pageState:u.pageState,targetSource:t.targetSource,targetUpdateTime:t.targetUpdateTime}),u}async resolveTargetHelper({root:e,target:t,cssSelectorOnly:n,skipFetchTree:o,skipFetchTreeWait:r}){let i=[];if(t.id<0&&t.selector){let m=e.locator(t.selector),g;try{g=await ht(m)}catch(f){throw new Re(`'${t.selector}' failed to resolve: ${f}`,[{type:"USER_SELECTOR",matched:!1}])}return i.push({type:"USER_SELECTOR",matched:!0,reason:`The user-provided CSS selector ${t.selector} matched an element on the page.`}),{locator:m,a11yNode:void 0,pageState:void 0,displayString:g,decisions:i}}let a;o||(a=(await this.getBrowserState({skipWait:r})).serialize(),this.logger.debug({skipFetchTreeWait:r,tree:a},"Got a11y tree before attempting target resolution"));let l=this.a11yIdToNodeMap.get(t.id),d=l?.getNodeOnlySerializedForm();if(l&&t.serializedForm&&d===t.serializedForm){let m=await this.getLocatorFromA11yNode(l);return await this.saveNodeDetailsToCache(e,l,t,l.dataMomenticId,m),i.push({type:"A11Y_ID",matched:!0,reason:`An element with the same Chrome-internal accessibility node ID matched the saved content exactly: ${d}.`}),{locator:m,a11yNode:l,displayString:d,decisions:i,pageState:a}}if(t.generatedSelectors){let m,g;try{m=await this.resolveTargetUsingCssSelectors(e,t)}catch(f){g=f}if(m)return{...m,pageState:a,decisions:[...i,...m.decisions]};if(n)throw new Re("Could not resolve target with CSS selector only",i);i.push({type:"CSS_SELECTOR",matched:!1,reason:g?.message,selectors:Qi(t.generatedSelectors)}),t.generatedSelectors=void 0}if(t.serializedForm&&t.serializedForm.trim().length<10){let m="Refusing to attempt accessibility node comparison since the saved node is too short.";i.push({type:"A11Y_DISTANCE",matched:!1,reason:m,savedElement:t.serializedForm})}else if(t.serializedForm){let m=1/0,g,f;for(let y of this.a11yIdToNodeMap.values()){let T=y.getSerializedFormWithContext(),b=Yi(t.serializedForm,T);b<m?(m=b,g=y,f=void 0):b===m&&(f=y)}let S=Math.ceil(.1*t.serializedForm.length);if(g&&m<S&&m<25)if(f){let y=Ki`
          Multiple accessibility nodes have the same string distance - refusing to pick between them:
          Candidate 1:
            ${g.getSerializedFormWithContext()}
          =====================
          Candidate 2:
            ${f.getSerializedFormWithContext()}`;i.push({type:"A11Y_DISTANCE",matched:!1,reason:y,distance:m,closestElement:g.getNodeOnlySerializedForm(),savedElement:t.serializedForm})}else{let y=await this.getLocatorFromA11yNode(g);return await this.saveNodeDetailsToCache(e,g,t,g.dataMomenticId,y),i.push({type:"A11Y_DISTANCE",matched:!0,reason:`Found an accessibility node on the page within ${S} distance of the saved element.`,distance:m,closestElement:g.getSerializedFormWithContext()}),{locator:y,pageState:a,a11yNode:g,displayString:g.getNodeOnlySerializedForm(),decisions:i}}else i.push({type:"A11Y_DISTANCE",matched:!1,reason:`Closest accessibility node is still too far away (${m} > ${S}) to be considered a match.`,distance:m,closestElement:g?.getSerializedFormWithContext(),savedElement:t.serializedForm})}if(t.nodeOnlySerializedHtml&&t.nodeOnlySerializedHtml.trim().length<10){let m="Refusing to attempt HTML comparison since the saved element is too short.";i.push({type:"HTML_DISTANCE",matched:!1,reason:m})}else if(t.nodeOnlySerializedHtml){let m=await e.content();m.length>5e5&&(m=m.slice(5e5)+"...");try{let g=await e.evaluate(fo,{nodeOnlySerializedHtml:t.nodeOnlySerializedHtml}),f=Math.floor(.1*t.nodeOnlySerializedHtml.length);if(g.closestDistance&&g.closestDistance>=f){let S=`Closest HTML candidate still has too far distance (${g.closestDistance}) from threshold (${f})`;i.push({type:"HTML_DISTANCE",matched:!1,reason:S,distance:g.closestDistance,closestElement:g.closestNodeSerialized})}else{if(g.error)throw new Error(g.error);if(g.dataMomenticId){let S=parseInt(g.dataMomenticId),y=this.dataMomenticIdToNodeMap.get(S),T;y?T=await this.getLocatorFromA11yNode(y):T=e.locator(`[${le}="${S}"]`);let b=g.closestNodeSerialized??await ht(T);return await this.saveNodeDetailsToCache(e,y,t,S,T),i.push({type:"HTML_DISTANCE",matched:!0,reason:`Found an element on the page within ${f} string comparison distance of the saved element.`,distance:g.closestDistance,closestElement:b,savedElement:t.nodeOnlySerializedHtml}),this.logger.debug({result:g,originalTarget:t,displayString:b},"Resolved cached target to new node with pure html levenshtein distance"),{locator:T,a11yNode:y,displayString:b,decisions:i,pageState:m}}else throw new Error(`Got invalid HTML evaluation result: ${JSON.stringify(g)}`)}}catch(g){this.logger.debug({err:g},"Failed to find closest HTML node using levenshtein distance"),i.push({type:"HTML_DISTANCE",matched:!1,reason:`Error finding closest HTML node by string distance: ${g}`})}}let h=t.screenshotUrl,u=t.role??"";if(h&&Jt.includes(u))try{let m=await this.resolveTargetWithScreenshot({screenshotUrl:h,oldTarget:t});return{...m,decisions:[...i,...m.decisions],pageState:a}}catch(m){i.push({type:"TEMPLATE_MATCHING",matched:!1,reason:`Error finding closest element using saved screenshot: ${m}`,elementImageUrl:h}),this.logger.error({err:m},"Error finding closest element using saved screenshot")}throw this.logger.debug({target:t,decisions:i},"Failed to find any relevant node"),new Re(`Could not find any relevant node given cached target: ${JSON.stringify(t)}`,i)}async resolveTargetWithScreenshot({screenshotUrl:e,oldTarget:t}){let n;if(!this.enricher)throw new Error("Enricher not available for screenshot resolution");let o=await this.screenshot({scale:"css"}),i=await(await fetch(e)).arrayBuffer(),a=aa(),l=await this.enricher.runTemplateMatching({searchImageBase64String:Buffer.from(i).toString("base64"),pageImageBase64String:o.toString("base64"),id:a});this.logger.debug({id:a,templateMatch:l},"Template matching got successful result");let{target:d,locator:h}=await this.getTargetFromPositionPercentages({percentX:l.x,percentY:l.y}),u=d.boundingBox?.width,m=d.boundingBox?.height;if(!u||!m)throw n="Rejecting target from screenshot due to no bounding box",new Error(n);let g=t.boundingBox?.width??0,f=t.boundingBox?.height??0;if(Math.abs(u-g)>50)throw n=`Rejecting target from screenshot due to width difference (${u-g})`,new Error(n);if(Math.abs(m-f)>50)throw n=`Rejecting target from screenshot due to height difference (${m-f})`,new Error(n);return{locator:h,a11yNode:this.a11yIdToNodeMap.get(d.id),displayString:d.nodeOnlySerializedHtml??"",decisions:[{type:"TEMPLATE_MATCHING",matched:!0,reason:"Found element using screenshot",elementImageUrl:e}]}}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let i=(await this.getBrowserState({})).serialize();this.logger.debug({tree:i},"Got a11y tree for x / y resolution")}let n=await this.getUserPageOrFrame(),{target:o}=await this.getTargetFromPositionPercentages(e);if((o.generatedSelectors??[]).length>0)return{locator:n.locator(o.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(o.id),displayString:o.nodeOnlySerializedHtml??o.nodeOnlySerializedForm??"Unknown element",decisions:[]};let r=this.a11yIdToNodeMap.get(o.id);if(r&&r.dataMomenticId)return{locator:n.locator(`[${le}="${r.dataMomenticId}"]`),a11yNode:r,displayString:r.getNodeOnlySerializedForm(),decisions:[]};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async saveDownloadToDisk(e,t){this.logger.info("Download detected, saving file to disk");let n=await e,o=await n.path(),r=So(n.suggestedFilename()),i=t();await n.saveAs(Lo(i,r)),No(o,{force:!0}),setTimeout(()=>{No(i,{recursive:!0,force:!0})},5*60*1e3);let a=yo(Mo(i),r);return this.logger.debug({uri:a,downloadFolder:i},"Saved download to isolated folder"),a}async typeIntoTarget(e,t,n={}){await this.highlightTarget(t);let o=2,r=n.force,i=await t.getAttribute("type",{timeout:1e3})??"",a=To.some(l=>l===i.toLowerCase());for(;o>0;)try{await t.click({timeout:4e3,force:r,position:a?{x:1,y:1}:void 0});break}catch(l){if(o--,o===0)throw l;this.logger.warn({err:l},"Failed clicking on element for type action, retrying with force enabled"),r=!0}return this.directTypeHelper(e,n)}async click(e,t,n={}){let o,r=await bo({locator:e,logger:this.logger});r&&(e=r.locator,o=r.relativePoint),await this.highlightTarget(e);let i=this.url(),a=await this.getOpenPageUrls(),l;n.waitForDownload&&(l=(async()=>{try{return await this.page.waitForEvent("download",{timeout:1e4})}catch(u){throw u instanceof na.TimeoutError?new H("ActionFailureError",`Download did not complete in ${1e4}ms`):u}})());let d=2,h=n.force;for(;d>0;)try{if(this.logger.debug("Clicking on element with locator"),n.doubleClick)await e.dblclick({button:n.rightClick?"right":"left",timeout:4e3,position:o,force:h});else{let u=await e.getAttribute("target");if(await e.click({button:n.rightClick?"right":"left",timeout:4e3,position:o,force:h}),u==="_blank"){this.logger.debug("Waiting for new page promise due to _blank target");let m=Date.now(),g=this.pageLoadTimeout;for(;!this.pageLoadPromise&&Date.now()-m<g;)await F(250)}}this.logger.debug("Click completed on element");break}catch(u){if(d--,d===0)throw u;this.logger.warn({err:u},"Failed clicking on element, retrying with 'disable stability checks' enabled"),h=!0,await F(250)}if(n.waitForUrl&&await this.waitForUrl(i,n.waitForUrl,a),l){if(!t.createIsolatedFolder)throw new H("InternalWebAgentError","Cannot wait for download without a callback to create an isolated folder");return this.logger.info("Waiting for download to start and complete"),{downloadedFile:await Lt(this.saveDownloadToDisk(l,t.createIsolatedFolder),{milliseconds:1e4,fallback:()=>{throw new H("ActionFailureError",`Download timed out after ${1e4}ms`)}})}}}async waitForUrl(e,t,n,o){let r=o??this.pageLoadTimeout,i=4;n||(n=await this.getOpenPageUrls());let a;for(let l=0;l<i;l++){if(a=await this.getOpenPageUrls(),a.length!==n.length)for(let d=a.length-1;d>=0;d--){let h=a[d];if(h!==e&&dt(h,this.logger)){await this.switchToPage(h,d);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t,{timeout:Math.max(r/i,500),waitUntil:"domcontentloaded"});break}catch{if(l===i-1)throw new Error(`The browser did not navigate to '${t}' in the allocated timeout of ${r}ms. Current tabs:
${a.join(`
`)}`);continue}}try{await this.waitForPageOrFrameLoad(this.page)}catch(l){this.logger.debug({err:l},"Failed waiting for page load after URL change, continuing...")}}async dragAndDrop(e,t,n={}){let o={timeout:8e3,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await F(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let i=Object.assign({timeout:4e3},r);o&&await o.hover(i);let a=await(await this.getUserPageOrFrame()).evaluate(uo);a||(this.logger.debug("Could not get current mouse position before mouse drag action, defaulting to 0,0"),a={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+a.left,t+a.top,{steps:n}),await F(250),await this.page.mouse.up()}async hover(e,t){await this.highlightTarget(e),await e.hover({timeout:4e3,force:t})}async focus(e){await this.highlightTarget(e),await e.focus({timeout:4e3})}async blur(e){await this.highlightTarget(e),await e.blur({timeout:4e3})}async selectOption(e,t,n=!1){await this.highlightTarget(e);let o={timeout:4e3,force:n},r=2;for(;r>0;)try{await e.selectOption(t,o),this.logger.debug(`Selected '${t}' from dropdown`);break}catch(i){if(r--,r===0)throw i;this.logger.debug({err:i},"Failed selecting option, retrying with force enabled"),o.force=!0}}async press(e){await this.page.keyboard.press(e)}async refresh(e){let t=e?.loadTimeoutMs??this.pageLoadTimeout,n=async()=>{await this.page.reload({waitUntil:"domcontentloaded",timeout:t}),await this.waitForPageOrFrameLoad(this.page)};await this.wrapPageLoad(n)}async getBrowserStateHelper({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger}){await Promise.resolve(this.pageLoadPromise);let o=await this.getUserPageOrFrame(),r=await this.getViewportOffsetDetails(o),i;this.activeFrame&&(i=(await this.getMatchingFrame(this.activeFrame)).node.frameId,n.debug({iframeId:i},"Resolved iframe id"));let a=await this.getRawA11yTree({root:o,skipWait:e,iframeId:i,logger:n}),l=await this.getDOMTree(r.devicePixelRatio,i),d=await so({a11yGraph:a,domGraph:l,logger:n,cdpClient:this.cdpClient,filterByViewport:t,viewportDetails:r});if(!d||!d.root)throw new Error("Accessibility tree appears empty");return this.a11yIdToNodeMap=d.a11yIdNodeMap,this.dataMomenticIdToNodeMap=d.dataMomenticIdMap,this.domGraph=l,d}async getBrowserState(e){let{logger:t=this.logger,maxAttempts:n=2}=e,o=0,r;for(;o<n;){o++;try{return await Lt(this.getBrowserStateHelper(e),{milliseconds:this.pageLoadTimeout})}catch(i){r=i instanceof Error?i.message:`${i}`,o<n&&t.debug({err:i,url:this.url()},"Error getting a11y tree, retrying...")}}throw new H("ActionFailureError",`Getting page content failed after ${n} attempts. Are you sure this page is working? Error: ${r}`)}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(e){let[t,n,o,r,i]=await e.evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:t,lowerBound:t+r,leftBound:n,rightBound:n+o,width:o,height:r,devicePixelRatio:this.systemDevicePixelRatio??i}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(await this.cdpClient.send("DOMSnapshot.enable"),n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:At}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await F(500),this.logger.debug({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new H("InternalWebAgentError","Error fetching DOM tree");return mo({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async waitForDOMStability(e){let{logger:t=this.logger}=e??{};try{let{root:r}=await this.cdpClient.send("DOM.getDocument",{depth:-1,pierce:!0})}catch(r){t.debug({err:r},"Failed to request root node while getting a11y tree")}let n={value:Date.now()},o=()=>{n.value=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",o),this.cdpClient.addListener("DOM.characterDataModified",o),this.cdpClient.addListener("DOM.attributeModified",o),this.cdpClient.addListener("DOM.childNodeCountUpdated",o),this.cdpClient.addListener("DOM.documentUpdated",o),this.cdpClient.addListener("Page.frameDetached",o),this.cdpClient.addListener("Page.frameStartedLoading",o),this.cdpClient.addListener("Page.frameRequestedNavigation",o);try{await this.waitForDOMStabilityHelper(n,t)}finally{this.cdpClient.removeListener("Accessibility.nodesUpdated",o),this.cdpClient.removeListener("DOM.characterDataModified",o),this.cdpClient.removeListener("DOM.attributeModified",o),this.cdpClient.removeListener("DOM.childNodeCountUpdated",o),this.cdpClient.removeListener("DOM.documentUpdated",o),this.cdpClient.removeListener("Page.frameDetached",o),this.cdpClient.removeListener("Page.frameStartedLoading",o),this.cdpClient.removeListener("Page.frameRequestedNavigation",o)}}async waitForDOMStabilityHelper(e,t=this.logger){let n=!1,o=Date.now(),r=this.smartWaitingTimeout,i;for(;Date.now()-o<r;){if(await F(500),i)try{let{data:a}=await this.cdpClient.send("Page.captureScreenshot",{optimizeForSpeed:!0,quality:25,format:"jpeg"});if(a!==i){i=a;continue}}catch{}else try{let{data:a}=await this.cdpClient.send("Page.captureScreenshot",{optimizeForSpeed:!0,quality:25,format:"jpeg"});i=a}catch{}if(!(Date.now()-e.value<750)){n=!0;break}}t.debug({duration:Date.now()-o,a11yStableReceived:n},"A11y wait phase completed")}async getRawA11yTree({root:e,skipWait:t=!1,iframeId:n=void 0,logger:o=this.logger}){t||await this.waitForDOMStability({logger:o}),await e.evaluate("window.addIdsToElement(document.body, 1)");let r;if(n)r=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:n})).node.backendDOMNodeId;else{let{node:a}=await this.cdpClient.send("Accessibility.getRootAXNode");r=a.backendDOMNodeId}let{nodes:i}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:r});if(!i||i.length<=1)throw new H("ActionFailureError","The page has no content. Are you sure it is working properly?");return{root:i[0],allNodes:i}}async clickUsingVisualCoordinates(e,t){let n=await this.getUserPageOrFrame(),{percentX:o,percentY:r}=e,{width:i,height:a}=await this.getViewportOffsetDetails(n),l=Math.ceil(i*o),d=Math.ceil(a*r),h=this.url(),u=await this.getOpenPageUrls();this.logger.debug({pixelDeltaX:l,pixelDeltaY:d,width:i,height:a},"Executing mouse click with visual coordinates"),await this.wrapPageLoad(async()=>this.page.mouse.click(l,d,{button:t.rightClick?"right":"left",clickCount:t.doubleClick?2:1})),t.waitForUrl&&await this.waitForUrl(h,t.waitForUrl,u)}async dragAndDropUsingVisualCoordinates(e,t,n){let o=await this.getUserPageOrFrame(),{percentX:r,percentY:i}=e,{percentX:a,percentY:l}=t,{width:d,height:h}=await this.getViewportOffsetDetails(o),u=Math.ceil(d*r),m=Math.ceil(h*i),g=Math.ceil(d*a),f=Math.ceil(h*l);await this.page.mouse.move(u,m),await this.page.mouse.down(),await this.page.mouse.move(g,f),await F(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,8e3):500),await this.page.mouse.up()}async hoverUsingVisualCoordinates(e){let t=await this.getUserPageOrFrame(),{percentX:n,percentY:o}=e,{width:r,height:i}=await this.getViewportOffsetDetails(t),a=Math.ceil(r*n),l=Math.ceil(i*o);await this.page.mouse.move(a,l)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,le);if(!r)throw new Error(`Could not find attribute ${le} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.debug({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${le}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async l=>{let d=await this.getLocatorFromBackendID(l);t.doubleClick?await d.dblclick({timeout:4e3}):await d.click({timeout:4e3,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(l){this.logger.error({err:l},"Failed clicking on node"),o=l,n++,await F(500)}let i=e.parent?.children??[];for(let l of i){if(l.id===e.id)continue;let d=!1,h=nn(l,e);if(e.name&&l.name===e.name?d=!0:h>=5&&(this.logger.debug({similarityScore:h},"Sibling qualified for click redirection through comparison score"),d=!0),!!d)try{return await r(l.backendNodeID),l}catch(u){this.logger.debug({err:u,candidate:l.getLogForm()},"Failed clicking on sibling during click redirection")}}let a=e.parent;for(n=0;n<eo;){if(!a||["rootwebarea","main"].includes(a.role.toLowerCase()))throw new H("ActionFailureError",o.message,{cause:o});if(!a.backendNodeID){a=a.parent;continue}try{return await r(a.id),a}catch(d){this.logger.debug({err:d,candidate:a.getLogForm()},"Failed clicking on parent during click redirection"),n++,a=a.parent}}throw new H("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,i=o.nodes,a=i.nodeName||[],l=i.backendNodeId||[],d=r.nodeIndex,h=r.bounds,u=-1;for(let b=0;b<a.length;b++)if(l[b]===e){u=d.indexOf(b);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[m=0,g=0,f=0,S=0]=h[u];m/=n,g/=n,f/=n,S/=n;let y=m+f/2,T=g+S/2;return{centerX:y,centerY:T}}async scroll(e,t,n,o){let r=t==="left"?-1:1,i=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([l,d,h,u])=>window.scrollTo(window.scrollX+(l??window.innerWidth)*h,window.scrollY+(d??window.innerHeight)*u),[e,n,r,i]);else{let a=this.page.viewportSize()||it;await this.page.mouse.wheel((e??a.width)*r,(n??a.height)*i)}}async scrollUp(e){return this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPageLoad(async()=>await this.page.goForward({waitUntil:"domcontentloaded",timeout:this.pageLoadTimeout}))}async goBack(){await this.wrapPageLoad(async()=>this.page.goBack({waitUntil:"domcontentloaded",timeout:this.pageLoadTimeout}))}async changeActivePage(e,t){this.recordUrlVisited(e.url()),this.page=e;let n=await s.initCDPSession(this.context,this.page,this.logger,t??this.pageLoadTimeout),o=this.cdpClient;this.cdpClient=n;try{await o.detach()}catch{}}async createNewTab(e,t){let n=await this.context.newPage();await this.changeActivePage(n,t?.loadTimeoutMs),await this.navigate({url:e,initialNavigation:!0,...t})}async switchToPageByIndex(e,t,n){let o=e.url();if(!dt(o,this.logger)){this.logger.error({tabUrl:o},"Refusing to switch to tab with invalid URL");return}this.logger.debug(`Switching to tab ${t} with url ${o}`),await this.changeActivePage(e,n?.loadTimeoutMs),await this.waitForPageOrFrameLoad(e)}async switchToPage(e,t,n){await this.wrapPageLoad(async()=>this.switchToPageHelper(e,t,n))}async switchToPageHelper(e,t,n){let o=this.context.pages(),r=await an(this.context,this.logger);if(t){await this.switchToPageByIndex(o[t],t,n);let i=r[t].url;this.onTabsChange?.(r,i);return}for(let i=0;i<o.length;i++){let a=o[i];if(a.url().includes(e)){await this.switchToPageByIndex(a,i,n);let l=r[i].url;this.onTabsChange?.(r,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async setCookie(e){let t;return typeof e=="string"?t=Fn(e):t=[e],await this.context.addCookies(t),t}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:We,method:"turnstile",sitekey:t,pageurl:this.url(),json:1})});if(!n.ok){let i=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},i),new Error(i)}let{request:o}=await n.json(),r=Date.now();for(;Date.now()-r<6e4;){await F(2500);let i=await fetch(`https://2captcha.com/res.php?key=${We}&action=get&id=${o}&json=1`,{method:"GET"});if(!i.ok){let l=`Captcha solution API returned error response: ${i.statusText}`;throw this.logger.error({text:await i.text()},l),new Error(l)}if((await i.json()).status===1)break}}async solveCaptcha(){await this.getBrowserState({});let e;for(let a of this.a11yIdToNodeMap.values())if(a.role==="image"&&a.name.toLowerCase().includes("captcha")){if(!a.backendNodeID)continue;e=await this.getLocatorFromBackendID(a.backendNodeID);break}if(!e){let a=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!a.captchas||!a.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:4e3}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:We,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let a=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},a),new Error(a)}let{taskId:o}=await n.json(),r=Date.now(),i="";for(;Date.now()-r<6e4;){await F(2500);let a=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:We,taskId:o})});if(!a.ok){let d=`Captcha solution API returned error response: ${a.statusText}`;throw this.logger.error({text:await a.text()},d),new Error(d)}let l=await a.json();if(l.errorId){let d=`Captcha solution API returned error ID ${l.errorId}`;throw this.logger.error(d),new Error(d)}if(l.status==="ready"){i=l.solution.text;break}}if(!i)throw new Error("Captcha solution timed out");return i}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=new AbortController;await this.startTreeRefreshCronForRecording(e.signal);let t;try{if(t=await(await this.getUserPageOrFrame()).evaluate(async()=>{let n=window;if(!n.resolveRecordingTarget){console.error("[MOMENTIC] Missing Momentic recording library functions");return}let o=null;n.targetCaptureClickListener=async i=>(console.debug("[MOMENTIC] Target capture listener fired"),i.preventDefault(),i.stopImmediatePropagation(),o=i.target,!1),document.addEventListener("mousedown",n.targetCaptureClickListener,{capture:!0,once:!0});let r=Date.now();for(;!o&&Date.now()-r<1e4;)await new Promise(i=>setTimeout(i,250));if(!o)throw new Error("Timed out waiting for user to click on an element");return n.resolveRecordingTarget(o)}),t?.error)throw new Error(t.error);if(t?.target)t.warnings.length&&this.logger.warn({result:t},"Got warnings while capturing target from click");else throw new Error("No target captured from click")}catch(n){throw this.logger.error({err:n},"Error recording target click"),new Error(`Error recording click: ${n.message}`)}finally{e.abort()}if(!t)throw new Error("Got no target from recorded click - please make sure you clicked on an interactive element");return this.getTargetFromRecordedClick(t.target).target}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,i=o.width??0,a=o.height??0,l=r+i,d=o.y??0,h=d+(o.height??0),u=t.bounds,m=u.width??0,g=u.height??0,f=u.x??0,S=f+(u.width??0),y=u.y??0,T=y+(u.height??0);return f<l&&S>r&&y<h&&T>d?Math.abs(i-m)<200&&Math.abs(a-g)<200?!0:(Ue({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(Ue({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=qi();for(let d of n)if(d.attributes?.[le]===e){o=d;break}if(!o)return[];let i=[],a=t.backendIdToNode[o.parentBackendNodeId??-1];for(;a&&(a?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,a,r));)a=t.backendIdToNode[a.parentBackendNodeId??-1];a&&i.push(a);let l=[o];for(;l.length;){let d=l.shift();for(let h of d.children??[]){let u=t.backendIdToNode[h];u&&!u.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,u,r)?i.push(u):u&&l.push(u)}}return i}getTargetFromRecordedClick(e){this.logger.debug(e,"Got HTML target attributes from click recording");let{htmlAttributes:t,dataMomenticId:n}=e,r=this.dataMomenticIdToNodeMap.get(n),i={id:r?.id??-1,dataMomenticId:n,targetSource:"CLICK_TO_FIND",targetUpdateTime:new Date().toUTCString(),...t};return r?this.saveA11yDetailsToCache(r,i):this.logger.warn({htmlAttributes:t},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),{target:i,a11yNode:r}}async exposeRecordingBindings(){let e=({frame:t},n)=>{if(!this.transformer)return;let{type:o,target:r,error:i,warnings:a,selectedValue:l}=n,d=t.url();if(this.logger.debug({url:d,...n},`${o} event captured on element`),i){this.logger.error({error:i,warnings:a},"Error while capturing passive element interaction");return}else if(r)a.length&&this.logger.warn({warnings:a},`Warnings while capturing passive element interaction of type ${o}`);else{this.logger.error({event:n},"No target found in passive element interaction event");return}let{dataMomenticId:h,htmlAttributes:u}=r,m=this.dataMomenticIdToNodeMap,g=this.mostRecentA11yTree,f=m.get(h),S={id:f?.id??-1,dataMomenticId:h,targetSource:"RECORDING",targetUpdateTime:new Date().toUTCString(),...u};f?this.saveA11yDetailsToCache(f,S):this.logger.debug({url:d,htmlAttributes:u},"Could not find corresponding accessibility node for click, continuing with HTML attributes only"),(async()=>{if(!this.transformer){this.logger.warn("No natural language translation since transformer is not initialized anymore");return}this.logger.debug({target:r,url:d},`Generating description for ${o.toLowerCase()}ed target`);let y=g?.serialize();f&&y&&y.length>5e3&&(y=lo(f.id,y),this.logger.debug({serializedTree:y},"Trimmed a11y tree for description transformation"));try{await this.transformer.recordElementAction({type:o,target:S,browserState:y,url:d,selectedValue:l})}catch(T){this.logger.error({err:T},`Failed to record ${o} action`)}})()};await this.context.exposeBinding("isRecordingActive",()=>!!this.transformer),await this.context.exposeBinding("captureElementEvent",({frame:t},n)=>{try{e({frame:t},n)}catch(o){this.logger.error({err:o},"Failed to capture element interaction")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},t)=>{this.transformer&&this.transformer.recordKeystroke(t)})}async fetchA11yTreeForRecording(){let e=await this.getBrowserState({skipWait:!0,maxAttempts:1});if(this.mostRecentA11yTree=e,Math.random()<.1){let n=this.mostRecentA11yTree.serialize();this.logger.debug({tree:n.length>4e5?"REDACTED_DUE_TO_SIZE":n},"Refreshed a11y tree during recording")}await(await this.getUserPageOrFrame()).evaluate(n=>{let o=window;o.momenticIdsInA11yTree=new Set(n)},Array.from(this.dataMomenticIdToNodeMap.keys()))}async startTreeRefreshCronForRecording(e){if(await this.fetchA11yTreeForRecording(),e.aborted)return;let t,n=!1,o=0,r=0,i=async()=>{if(!(Date.now()-r<=1e3)&&!n){n=!0;try{await this.fetchA11yTreeForRecording(),o=0}catch(a){if(r=Date.now(),o++,o>=8||a.message.includes("crashed")){clearInterval(t),this.logger.error({err:a},"Fatal errors while refreshing a11y tree during recording, exiting...");return}}finally{n=!1}}};t=setInterval(()=>{!this.transformer||e.aborted||i()},to),e.addEventListener("abort",()=>{clearInterval(t),t=void 0})}async startRecording(e,t){this.logger.debug("Starting passive recording mode in Chrome browser"),await this.startTreeRefreshCronForRecording(e),this.transformer=t,e.addEventListener("abort",async()=>{this.transformer=void 0})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value),{timeout:1e3})}getActivePage(){return this.page}async waitForPageOrFrameLoad(e){let t=this.pageLoadTimeout;await e.waitForLoadState("domcontentloaded",{timeout:t});try{await e.waitForLoadState("load",{timeout:t})}catch(n){this.logger.warn({err:n},"Timeout elapsed waiting for current frame to load, continuing...")}this.recordUrlVisited(e.url())}async getCondensedHtml(){return this.wrapPageLoad(async()=>this.getCondensedHtmlHelper())}async getCondensedHtmlHelper(){await this.waitForDOMStability();let e=await this.getUserPageOrFrame();await gt(e,this.logger);let{result:t,error:n}=await e.evaluate(()=>window.getCondensedHtmlTree(),{timeout:1e3});if(n)throw new Error(`Failed to process page HTML: ${n}`);if(!t)throw new H("InternalWebAgentError","Got empty HTML tree - are you sure the page is fully loaded?");return Ji.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:100})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async evaluateFunctionInPage(e,t){return this.page.evaluate(t,e)}async evaluateCodeInPage({code:e,fragment:t,context:n,timeoutMs:o=2e3}){let r=vo(),i={code:e,fragment:t,context:n},{result:a}=await Lt(this.page.evaluate(r,i),{milliseconds:o,fallback:()=>{throw new H("ActionFailureError",`Code evaluation in browser exceeded the allowed timeout of ${o/1e3} seconds`)}});return a}async getDomNodeFromPositionPercentages(e,{percentX:t,percentY:n}){if(t<0||t>1||n<0||n>1)throw new H("InternalWebAgentError","Invalid percent passed to percentage location");let{width:o,height:r,upperBound:i,leftBound:a,devicePixelRatio:l}=await this.getViewportOffsetDetails(e),d=Math.round(i),h=Math.round(a),u=Math.ceil(o*t),m=Math.ceil(r*n);await this.cdpClient.send("DOM.getDocument",{depth:0});let g;try{g=await this.cdpClient.send("DOM.getNodeForLocation",{x:u+h,y:m+d})}catch(f){throw this.logger.error({err:f,pixelDeltaX:u,pixelDeltaY:m,leftBoundRounded:h,upperBoundRounded:d,devicePixelRatio:l},"Failed to get DOM node from position percents"),new Error("No element was found at the given location")}return g}async highlightFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n;try{n=await this.getDomNodeFromPositionPercentages(t,e)}catch{}return n?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:co,backendNodeId:n.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:n?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getUserPageOrFrame(),n=await this.getDomNodeFromPositionPercentages(t,e),o=this.domGraph?.backendIdToNode[n.backendNodeId],r=o?.attributes[le],i=parseInt(r??"");if(!o||!r||isNaN(i))throw new Error("No HTML node was found at the given location");let a=t.locator(`[${le}="${r}"]`);for(let u of this.a11yIdToNodeMap.values()){if(u.backendNodeID!==n.backendNodeId)continue;let m={id:u.id,targetSource:"XY_PERCENT",targetUpdateTime:new Date().toUTCString()};return await this.saveNodeDetailsToCache(t,u,m,parseInt(r),a),{target:m,locator:a}}let l=this.getDomCandidatesInA11yTree(`${r}`,this.domGraph);for(let u of l){let m=parseInt(u.attributes?.[le]??"");if(isNaN(m))continue;let g=t.locator(`[${le}="${m}"]`),f=this.dataMomenticIdToNodeMap.get(m),S=f?.id;if(!S)continue;let y={id:S,targetSource:"XY_PERCENT",targetUpdateTime:new Date().toUTCString()};return await this.saveNodeDetailsToCache(t,f,y,parseInt(r),g),this.logger.debug({target:y},"Redirected click on non-accessible element to nearest a11y node"),{target:y,locator:g}}let d=await this.fetchHtmlAttributes(t,i);return{target:{id:-1,dataMomenticId:i,targetSource:"XY_PERCENT",targetUpdateTime:new Date().toUTCString(),...d},locator:a}}async fetchHtmlAttributes(e,t){let n=await e.evaluate(o=>{let r=window;return r.generateHtmlCacheAttributes?r.generateHtmlCacheAttributes(o):{warnings:[],error:"generateHtmlCacheAttributes is not defined"}},t);if("error"in n)throw new Error(n.error);if(n.attributes)n.warnings.length&&this.logger.warn(n,"Got warnings while generating HTML attributes for target");else return this.logger.warn(n,"Got no generated HTML attributes for target"),{};return this.logger.debug(n.attributes,"Generated HTML attributes for target"),n.attributes}async moveMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.move(a,l,{steps:3})}async clickMouseFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);await this.page.mouse.click(a,l,{button:"left"})}async scrollFromPositionPercentages(e,t){let n=await this.getUserPageOrFrame(),o;try{o=await this.getViewportOffsetDetails(n)}catch{return}let{width:r,height:i}=o,a=Math.ceil(r*e),l=Math.ceil(i*t);return await this.page.mouse.wheel(a,l),{deltaX:a,deltaY:l}}canSolveCaptchas(){return!!We}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames(),n=[];for(let r of t)if(!r.isDetached())try{let a=await(await r.frameElement()).evaluate(l=>"src"in l?l.getAttribute("src"):null);a&&a!=="about:blank"&&a!==e&&n.push(a)}catch(i){let a=i.message;["detached","browser has been closed"].some(l=>a.includes(l))||this.logger.debug({err:i},"Error fetching frame src url, continuing...")}return Array.from(new Set(n))}async setFileChooserHandler(e){setTimeout(()=>{try{e.cleanup()}catch(t){this.logger.debug({err:t,filePath:e.filePath},"Failed cleaning up file after upload")}},3e4),await this.setFileChooserHandlerHelper(e)}logToUserConsole(e,t,n,...o){let r=this.context.pages().indexOf(e);r=r===-1?0:r,rn(e,this.debugData,r,{type:t,text:`[MOMENTIC] ${n}`,args:o})}async setFileChooserHandlerHelper({filePath:e}){if(!Io(e)){let n=`File chooser triggered after the source file ${e} has been cleaned up, ignoring...`;this.logger.error(n),this.logToUserConsole(this.page,"error",n);return}this.page.once("filechooser",async n=>{this.logger.debug({filePath:e},"File chooser triggered");try{if(!Io(e))throw new Error(`File chooser triggered after the source file ${e} has been cleaned up, ignoring...`);await n.setFiles(e,{timeout:8e3})}catch(o){this.logger.error({err:o},"Error handling file chooser"),this.logToUserConsole(this.page,"error",o.message)}});let t=Xi(e).toString("base64");await(await this.getUserPageOrFrame()).evaluate(({fileName:n,base64Data:o})=>{let r=window;r.MomenticFile=class{async getFile(){let i=atob(o),a=new Array(i.length);for(let h=0;h<i.length;h++)a[h]=i.charCodeAt(h);let l=new Uint8Array(a),d=new Blob([l]);return new File([d],n)}},r.showOpenFilePicker=async()=>[new r.MomenticFile]},{fileName:Mo(e),base64Data:t})}getSerializedFormFromA11yId(e){return this.a11yIdToNodeMap.get(e)?.getNodeOnlySerializedForm()}get smartWaitingTimeout(){return this.userControlledBrowserSettings.smartWaitingTimeoutMs??3e3}get pageLoadTimeout(){return this.userControlledBrowserSettings.pageLoadTimeoutMs??8e3}retrieveAndClearConsoleLogs(){let e=this.debugData.logsPerPage;return this.debugData.logsPerPage=[],e}};var la={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},ca=la;import{z as ua}from"zod";import da from"fetch-retry";var ma=da(global.fetch),Y=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await ma(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var ln=class extends Y{constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${Y.API_VERSION}/web-agent/recommend-chunks`,e);return qn.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${Y.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return ua.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/locate-element`,{...e,disableCache:t.disableCache});return Gn.parse(n)}async getAssertionResult(e,t){let n={...e,disableCache:!!t.disableCache},o=await this.sendRequest(`/${Y.API_VERSION}/web-agent/assertion`,n);return jn.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,screenshot:e.screenshot,disableCache:t.disableCache});return Hn.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t.disableCache});return $n.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t.disableCache});return Vn.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:!!t.disableCache},o=await this.sendRequest(`/${Y.API_VERSION}/web-agent/text-extraction`,n);return Kt.parse(o)}async getTestResultClassification(e){let t=await this.sendRequest(`/${Y.API_VERSION}/web-agent/result-classification`,e);return $t.parse(t)}async getExtractedKeywords(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/extract-keywords`,{goal:e,disableCache:t.disableCache});return Yn.parse(n)}async getAutohealingProposal(e,t){let n=await this.sendRequest(`/${Y.API_VERSION}/web-agent/autoheal-section`,e);return kn.parse(n)}};export{ln as APIGenerator,sn as ChromeBrowser,ce as CommandType,ca as DEFAULT_CONTROLLER_CONFIG,oe as StepType};
