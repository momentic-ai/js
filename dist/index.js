import{v4 as Dn}from"uuid";import*as c from"zod";import*as N from"zod";var le=N.object({id:N.number().int(),selector:N.string().optional(),generatedSelectors:N.string().array().optional(),role:N.string().optional(),name:N.string().optional(),numChildren:N.number().optional(),content:N.string().optional(),pathFromRoot:N.string().optional(),serializedForm:N.string().optional(),nodeOnlySerializedForm:N.string().optional(),serializedHtml:N.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:N.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned."),screenshotUrl:N.string().url().optional(),boundingBox:N.object({x:N.number().optional(),y:N.number().optional(),width:N.number(),height:N.number()}).describe("css pixel bounding box").optional()});function St(l){return!!(l.name||l.role||l.content||l.serializedForm||l.serializedHtml||l.screenshotUrl)}var oe=(A=>(A.AI_EXTRACT="AI_EXTRACT",A.AI_ASSERTION="AI_ASSERTION",A.AI_WAIT="AI_WAIT",A.BLUR="BLUR",A.CAPTCHA="CAPTCHA",A.CLICK="CLICK",A.COOKIE="COOKIE",A.DIALOG="DIALOG",A.DRAG="DRAG",A.FILE_UPLOAD="FILE_UPLOAD",A.FOCUS="FOCUS",A.GO_BACK="GO_BACK",A.GO_FORWARD="GO_FORWARD",A.HOVER="HOVER",A.JAVASCRIPT="JAVASCRIPT",A.LOCAL_STORAGE="LOCAL_STORAGE",A.MOUSE_DRAG="MOUSE_DRAG",A.NAVIGATE="NAVIGATE",A.NEW_TAB="NEW_TAB",A.PRESS="PRESS",A.REFRESH="REFRESH",A.REQUEST="REQUEST",A.SCROLL_DOWN="SCROLL_DOWN",A.SCROLL_UP="SCROLL_UP",A.SCROLL_LEFT="SCROLL_LEFT",A.SCROLL_RIGHT="SCROLL_RIGHT",A.SELECT_OPTION="SELECT_OPTION",A.TAB="TAB",A.TYPE="TYPE",A.VISUAL_DIFF="VISUAL_DIFF",A.WAIT="WAIT",A.SUCCESS="SUCCESS",A))(oe||{}),Pn=c.object({percentX:c.number().describe("between 0 and 1"),percentY:c.number()}),zn=c.object({type:c.literal("description"),elementDescriptor:c.string(),a11yData:le.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var F=c.discriminatedUnion("type",[zn,c.object({type:c.literal("coordinates"),percentXYLocation:Pn})]);var x=c.object({thoughts:c.string().optional(),id:c.string().uuid().default(()=>Dn()).describe("unique identifier to this step, used for step cache")}),X=c.object({filterByViewport:c.boolean().default(!1),useSelector:c.boolean().default(!1),useXY:c.boolean().default(!1),disableCache:c.boolean().default(!1).describe("disable element caching for this step"),iframeUrl:c.string().optional().describe("url or url regex for the iframe")}),Q=c.object({target:le}).optional(),Ae=c.object({loadTimeout:c.number().int().max(60).optional().describe("Max seconds for the page to load"),networkTimeout:c.number().int().max(60).optional().describe("How many seconds to wait for network idle after navigation")}),Fn=x.merge(Ae).merge(c.object({type:c.literal("NAVIGATE"),url:c.string()})),xe=X.merge(c.object({cache:Q})),He=x.merge(xe.merge(c.object({target:F.optional(),type:c.literal("SCROLL_UP"),deltaY:c.number().optional()}))),je=x.merge(xe.merge(c.object({target:F.optional(),type:c.literal("SCROLL_DOWN"),deltaY:c.number().optional()}))),Ge=x.merge(xe.merge(c.object({target:F.optional(),type:c.literal("SCROLL_LEFT"),deltaX:c.number().optional()}))),Ve=x.merge(xe.merge(c.object({target:F.optional(),type:c.literal("SCROLL_RIGHT"),deltaX:c.number().optional()}))),kr=c.discriminatedUnion("type",[He,je,Ge,Ve]),Un=x.merge(c.object({type:c.literal("DIALOG"),action:c.union([c.literal("ACCEPT"),c.literal("DISMISS")])})),Bn=x.merge(c.object({type:c.literal("WAIT"),delay:c.number()})),Wn=x.merge(Ae).merge(c.object({type:c.literal("REFRESH")})),Hn=x.merge(c.object({type:c.literal("GO_BACK")})),jn=x.merge(c.object({type:c.literal("GO_FORWARD")})),Gn=x.merge(X).merge(c.object({type:c.literal("CAPTCHA")})),Vn=x.merge(c.object({type:c.literal("JAVASCRIPT"),code:c.string(),fragment:c.boolean().default(!1),envKey:c.string().optional(),environment:c.union([c.literal("NODE"),c.literal("BROWSER")]).default("NODE"),timeout:c.number().int().max(60).optional().describe("Max seconds for the code to complete")})),Tt=x.merge(X).merge(c.object({type:c.literal("CLICK"),target:F,doubleClick:c.boolean().default(!1),rightClick:c.boolean().default(!1),waitForUrl:c.string().optional().describe("call playwright waitForURL after click"),force:c.boolean().default(!1),cache:Q})),vt=x.merge(X).merge(c.object({type:c.literal("DRAG"),fromTarget:F,toTarget:F,force:c.boolean().default(!1),hoverSeconds:c.number().optional().describe("Seconds to hover the object before dropping"),cache:c.object({fromTarget:le.optional(),toTarget:le.optional()}).optional()})),Ct=x.merge(X).merge(c.object({type:c.literal("MOUSE_DRAG"),target:F.optional(),force:c.boolean().default(!1),deltaX:c.string().describe("pixels to move horizontally, can be template"),deltaY:c.string().describe("pixels to move vertically, can be template"),steps:c.number().default(1),cache:Q})),Et=x.merge(X).merge(c.object({type:c.literal("HOVER"),target:F,force:c.boolean().default(!1),cache:Q})),At=x.merge(X).merge(c.object({type:c.literal("FOCUS"),target:F,cache:Q})),xt=x.merge(X).merge(c.object({type:c.literal("BLUR"),target:F,cache:Q})),$n=x.merge(c.object({type:c.literal("FILE_UPLOAD"),fileSource:c.discriminatedUnion("type",[c.object({type:c.literal("URL"),url:c.string()}).describe("Publicly accessible link to the file")])})),Rt=x.merge(X).merge(c.object({type:c.literal("SELECT_OPTION"),target:F,filterByViewport:c.boolean().default(!1),useSelector:c.boolean().default(!1),option:c.string(),cache:Q})),$e=x.merge(c.object({type:c.literal("AI_ASSERTION"),assertion:c.string(),filterByViewport:c.boolean().default(!1),cancelOnFailure:c.boolean().default(!1),disableCache:c.boolean().default(!1).describe("disable AI caching for this step"),iframeUrl:c.string().optional().describe("url or url regex for the iframe")})),qn=$e.merge(c.object({type:c.literal("AI_WAIT"),timeout:c.number().int().optional().describe("Max seconds to wait for assertion to be true")})),Yn=x.merge(c.object({type:c.literal("AI_EXTRACT"),goal:c.string(),schema:c.string().optional(),envKey:c.string().optional(),disableCache:c.boolean().default(!1).describe("disable AI caching for this step")})),Xn=c.object({clearContent:c.boolean().default(!0),pressKeysSequentially:c.boolean().default(!1),force:c.boolean().default(!1)}),It=x.merge(X).merge(c.object({type:c.literal("TYPE"),target:F.optional(),value:c.string(),pressEnter:c.boolean().default(!1),cache:Q})).merge(Xn),Kn=x.merge(c.object({type:c.literal("PRESS"),value:c.string()})),Jn=x.merge(Ae).merge(c.object({type:c.literal("TAB"),url:c.string()})),Qn=x.merge(Ae).merge(c.object({type:c.literal("NEW_TAB"),url:c.string()})),Zn=x.merge(c.object({type:c.literal("COOKIE"),value:c.string()})),eo=x.merge(c.object({type:c.literal("LOCAL_STORAGE"),key:c.string(),value:c.string()})),to=x.merge(c.object({type:c.literal("REQUEST"),url:c.string(),method:c.union([c.literal("GET"),c.literal("POST"),c.literal("PUT"),c.literal("DELETE"),c.literal("PATCH")]),headers:c.record(c.string(),c.string()).optional(),params:c.record(c.string(),c.string()).optional(),body:c.string().optional(),timeout:c.number().int().optional().describe("Max seconds to wait for the request to complete")})),no=x.merge(c.object({type:c.literal("SUCCESS"),condition:$e.optional()})),oo=x.merge(c.object({type:c.literal("FAILURE")})),ro=c.object({data:c.string().describe("s3 url to a jpg"),width:c.number(),height:c.number()}),Nt=x.merge(X).merge(c.object({type:c.literal("VISUAL_DIFF"),threshold:c.number().default(.1),target:F.optional(),screenshot:ro.optional(),cache:Q})),he=c.discriminatedUnion("type",[Tt,It,Kn,Rt,Fn,je,He,$e,qn,no]),io=c.discriminatedUnion("type",[Gn,Zn,Un,vt,Yn,$n,Hn,jn,Et,Vn,eo,Ct,Qn,Wn,to,Ge,Ve,Jn,Nt,Bn,At,xt]),qe=c.discriminatedUnion("type",[...he.options,...io.options]),Ye=c.discriminatedUnion("type",[...he.options,oo]);var j={type:!0,cache:!0},Xe=c.discriminatedUnion("type",[Tt.pick(j),vt.pick(j),Ct.pick(j),Et.pick(j),At.pick(j),xt.pick(j),He.pick(j),je.pick(j),Ge.pick(j),Ve.pick(j),Rt.pick(j),It.pick(j),Nt.pick(j)]),so=Object.values(oe).filter(l=>Xe.options.some(e=>e.shape.type.safeParse(l).success));qe.options.forEach(l=>{if("target"in l.shape&&!so.includes(l.shape.type.value))throw new Error(`Command ${l.shape.type.value} has a target but no cache`)});import*as S from"zod";var ge=(n=>(n.AI_ACTION="AI_ACTION",n.PRESET_ACTION="PRESET_ACTION",n.MODULE="MODULE",n))(ge||{}),Re=S.object({type:S.literal("PRESET_ACTION"),command:qe,skipped:S.boolean().optional()}),Ie=S.object({type:S.literal("AI_ACTION"),text:S.string(),commands:S.array(he).optional(),skipped:S.boolean().optional()}),Ne=S.object({id:S.string().uuid().describe("ID of the module step itself. Used to 'namespace' step cache entries."),type:S.literal("MODULE"),moduleId:S.string().uuid(),inputs:S.record(S.string()).optional(),skipped:S.boolean().optional()}),zr=S.union([Ne.pick({type:!0,moduleId:!0}),S.record(S.unknown())]),Me=S.object({moduleId:S.string().uuid(),name:S.string(),parameters:S.string().array().nullish()}),Mt=Me.extend({steps:S.lazy(()=>re.array())}),ao=Me.extend({type:S.literal("RESOLVED_MODULE"),id:S.string().uuid().describe("id for the module step itself"),steps:S.lazy(()=>re.array()),inputs:S.record(S.string()).optional().describe("input params from test"),skipped:S.boolean().optional()}),Ot=S.discriminatedUnion("type",[Re,Ie,Ne]),re=S.discriminatedUnion("type",[Re,Ie,ao]);var Ke=S.object({key:S.string(),testId:S.string().optional(),moduleId:S.string().optional(),organizationId:S.string(),value:Xe}),lo=S.record(Ke);var Se={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&H(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&H(t,n,e[n]);return t};var g=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(F=>Object.assign(F,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,F]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&F!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var I=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[Momentic] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=I;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
    throw new Error(
      \`[MOMENTIC] Could not find element with data-momentic-id: \${dataMomenticId}\`
    );
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
      throw new Error(
        \`[MOMENTIC] Momentic libraries missing from page when finding elements in the DOM\`
      );
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
    console.log("[Momentic] Window click listener fired");
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
addFindElementInBodyOrShadowDomScript();
addBrowserLdistScript();
addMomenticSelectorGeneratorLib();
addTrackCursorScript();
addCssGenerationScript();
addHtmlTreeSerializationFunctions();
addElementSerializationScripts();
addGenerateHtmlCacheAttributesScript();
addRecordingListeners();
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as mr}from"crypto";import{distance as Ln}from"fastest-levenshtein";import{readFileSync as pr,rmSync as hr}from"fs";import gr from"js-beautify";import{homedir as fr}from"os";import gt from"p-timeout";import{basename as yr,join as br}from"path";import{chromium as wr,devices as _n}from"playwright";import{addExtra as Sr}from"playwright-extra";import Tr from"puppeteer-extra-plugin-recaptcha";import vr from"sharp";import{z as Te}from"zod";var Lt=Te.object({thoughts:Te.string(),result:Te.boolean(),relevantElements:Te.array(Te.number()).optional()});import Xr from"string-argv";import{v4 as Jr}from"uuid";import{z as k}from"zod";import{z as fe}from"zod";var Z=(s=>(s.AI_PROVIDER="AIProviderError",s.JOB_TIMEOUT="JobTimeoutError",s.ACTION_FAILURE="ActionFailureError",s.ASSERTION_FAILURE="AssertionFailureError",s.CONFIG_ERROR="UserConfigurationError",s.WEB_AGENT_PLATFORM="InternalWebAgentError",s.UNKNOWN_PLATFORM="InternalPlatformError",s))(Z||{});var Je=fe.object({reason:fe.nativeEnum(Z),summary:fe.string()}),_t=fe.object({errorMessage:fe.string(),errorStack:fe.string().optional(),classification:Je.optional()});var G=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let i of Object.values(Z))if(t.startsWith(i)){r=!0,e=i;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}};var ti=k.object({command:k.string(),thoughts:k.string()}),ni=k.string().pipe(k.coerce.number());var kt=k.object({phrase:k.string()}),Qe=k.object({result:k.union([k.literal("NOT_FOUND"),k.string(),k.number(),k.array(k.unknown()),k.record(k.unknown(),k.unknown())])});import{z as Ze}from"zod";var Oe=Ze.object({width:Ze.number().min(200).max(1e4),height:Ze.number().min(200).max(1e4)}),Dt={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},ii=Object.keys(Dt);var et=Dt["Desktop Large"];var ci=new Set(Object.values(oe));var uo={AI_ACTION:"AI action",RESOLVED_MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",SUCCESS:"Done"},di={AI_ACTION:"Ask AI to plan and execute something on the page.",RESOLVED_MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from a dropdown based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import*as T from"zod";import{cloneDeep as Ti}from"lodash-es";import*as M from"zod";import{z as ye}from"zod";var Pt=(t=>(t.PROD="production",t.DEV="development",t))(Pt||{}),pi=Object.values(Pt),zt="BASE_URL";var hi={[zt]:"https://www.google.com"},Ft=ye.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),ve=ye.object({name:ye.string(),variables:ye.record(ye.string().describe("variable name"),ye.string().describe("variable value"))});import*as ce from"zod";var Ut=ce.object({type:ce.nativeEnum(ge),generatedStep:he.optional(),serializedCommand:ce.string().optional(),elementInteracted:ce.string().optional()});var ie=M.object({goal:M.string(),url:M.string(),browserState:M.string(),history:M.string(),numPrevious:M.number(),lastCommand:Ut.or(M.null()),returnSchema:M.string().optional()}),tt=M.object({env:M.record(M.unknown()),results:M.array(M.unknown()),inputs:M.record(M.unknown()).optional()});var Ei=Object.getPrototypeOf(async function(){}).constructor;var Bt=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(Bt||{}),Wt=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(Wt||{}),mo=T.object({beforeUrl:T.string(),beforeScreenshot:T.string().optional(),afterUrl:T.string().optional(),afterScreenshot:T.string().optional(),startedAt:T.coerce.date(),finishedAt:T.coerce.date(),viewport:T.object({height:T.number(),width:T.number()}),status:T.nativeEnum(Wt),message:T.string().optional(),elementInteracted:T.string().optional()}),Le=T.object({startedAt:T.coerce.date(),finishedAt:T.coerce.date(),status:T.nativeEnum(Bt),message:T.string().optional(),data:T.unknown().optional(),userAgent:T.string().optional(),beforeTestContext:tt.optional(),afterTestContext:tt.optional(),failureReason:T.nativeEnum(Z).optional()}),nt=Re.merge(Le).merge(T.object({results:mo.array()})),Ht=Ie.merge(Le).merge(T.object({results:nt.array()})),po=Ne.merge(Le).merge(T.object({moduleName:T.string().optional(),results:T.union([Ht,nt]).array()})),ot=T.discriminatedUnion("type",[Ht,nt,po]),Ni=Le.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0}),Mi=T.object({results:ot.array(),errorMessage:T.string(),errorStack:T.string().optional()});import{parseString as ho,splitCookiesString as go}from"set-cookie-parser";import{z as V}from"zod";var fo=V.object({name:V.string(),value:V.string(),url:V.string().optional(),domain:V.string().optional(),path:V.string().optional(),expires:V.number().default(Date.now()/1e3+60*60*24*365),httpOnly:V.boolean().default(!1),secure:V.boolean().default(!0),sameSite:V.union([V.literal("Strict"),V.literal("Lax"),V.literal("None")]).default("None")});function jt(l){let e=[],t=go(l);for(let n of t){let o=ho(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let d=o.sameSite.trim().toLowerCase();if(d==="strict")r="Strict";else if(d==="lax")r="Lax";else if(d==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${d}`)}!o.path&&o.domain&&(o.path="/");let i=fo.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(i);let s=[i.name,...Object.keys(i)].map(d=>d.toLowerCase()),a=n.match(/\b(\w+)=([^;]*)/g);if(a)for(let d of a){let[m,u]=d.split("=");if(!m||!u)throw new Error(`Invalid key-value pair in cookie: ${d}`);s.includes(m.toLowerCase())||e.push({...i,name:m,value:u})}}return e}import{z as ee}from"zod";var Pi=ee.object({x:ee.number(),y:ee.number(),correlation:ee.number()}),zi=ee.object({searchImageBase64String:ee.string(),pageImageBase64String:ee.string(),id:ee.string().uuid(),timeoutMs:ee.number().max(1e4).min(0).optional()});import{z as Y}from"zod";import{z as B}from"zod";import{z as R}from"zod";var yo="modules",bo="fixtures",wo="environments",So="chromium",Gt=[yo,bo,wo,So];import{isValidCron as To}from"cron-validator";import{z as U}from"zod";var vo=U.object({pageLoadTimeoutMs:U.number().max(6e4).min(1e3).optional(),autoWaitForNetworkIdle:U.boolean().optional()}),_e=vo.merge(U.object({disableAICaching:U.boolean().default(!1),viewport:Oe.optional()})),Vt=U.object({cron:U.string().refine(l=>To(l),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:U.boolean().default(!1),env:U.string().optional(),timeZone:U.string().default("America/Los_Angeles"),jobKey:U.string().optional()}),$t=U.object({onSuccess:U.boolean().default(!1),onFailure:U.boolean().default(!0)});var Co=R.string().min(1).max(255).superRefine((l,e)=>{try{xo(l)}catch(t){return e.addIssue({code:R.ZodIssueCode.custom,message:t.message,fatal:!0}),R.NEVER}}),Eo=R.object({name:R.string(),default:R.boolean().optional(),defaultOnLocal:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:R.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:Ft.array().optional()}),se=R.object({id:R.string(),name:Co,baseUrl:R.preprocess(l=>l===null?"":l,R.union([R.string().url(),R.literal("")])).optional(),schemaVersion:R.string(),advanced:_e,retries:R.number(),envs:R.array(Eo).optional()}),Ki=se.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),qt=R.object({createdAt:R.coerce.date(),updatedAt:R.coerce.date(),schedule:Vt,notification:$t,createdBy:R.string(),organizationId:R.string()}),Ji=se.merge(qt),Qi=se.merge(qt).merge(R.object({steps:R.array(re)})),ke=se.merge(R.object({steps:R.array(re)})),Zi=se.extend({steps:R.record(R.string(),R.unknown()).array()}),Ao=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function xo(l){if(l=l.toLowerCase().trim(),l.length===0||l.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(l))throw new Error("Name can only contain alphanumeric characters, spaces, dashes, and underscores.");if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(l))throw new Error(`"${l}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(l)||/^\s|\s$/.test(l))throw new Error("Name cannot start or end with a space or dot.");if(l.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(l==="none")throw new Error("Name cannot be 'none'.");if(Gt.includes(l))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(l.match(Ao))throw new Error("Name cannot be a UUID. Please choose a different name.")}var ss=Me.extend({steps:B.array(B.record(B.string(),B.unknown())),schemaVersion:B.string()}),as=se.extend({steps:B.array(B.record(B.string(),B.unknown()))}),ls=B.object({test:B.string().describe("YAML for the test, including metadata and steps"),modules:B.record(B.string(),B.string()).describe("Map of module name to YAML for the module")});var Ro="1.0.0",Yt=Y.object({run:Y.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:Y.boolean().optional().describe("Defaults to true")}),ps=Y.object({type:Y.literal("momentic/fixture"),schemaVersion:Y.string(),name:Y.string(),description:Y.string().optional(),setup:Y.object({steps:Yt.array(),timeout:Y.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:Y.object({steps:Yt.array(),timeout:Y.number().optional().describe("Timeout for all steps in seconds")}).optional()}),hs={type:"momentic/fixture",schemaVersion:Ro,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as Io}from"zod";var ys=Io.string().array();import{z as I}from"zod";var xs=I.array(I.object({id:I.string(),name:I.string(),fullFilePath:I.string(),testPath:I.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:I.string(),lastModified:I.coerce.date(),createdAt:I.coerce.date()}));var Rs=I.object({steps:re.array()});var Is=I.object({name:I.string(),baseUrl:I.string().url().optional(),environment:I.string().optional(),viewport:Oe.optional()}),Ns=ke.merge(I.object({testPath:I.string()})),Ms=I.object({name:I.string(),steps:I.lazy(()=>re.array())});var Os=Mt.array(),Ls=I.array(I.object({name:I.string(),moduleId:I.string().uuid(),numSteps:I.number()})),_s=I.array(ve),ks=I.object({defaultEnv:I.string().optional().describe("name of the default env, or undefined to unset")});import*as D from"zod";var Xt=D.object({thoughts:D.string(),id:D.number().int(),conflicts:D.number().int().array().optional()});var Us=D.object({thoughts:D.string().optional().describe("only provided if a description was provided"),target:le.optional().describe("only provided if a description was provided"),conflictingElements:D.string().array().optional().describe("serialized html of conflicting elements"),options:D.array(D.string()).optional().describe("provided for <select> elements only"),screenshot:D.object({data:D.string(),height:D.number().int(),width:D.number().int()}).optional().describe("only provided if returnScreenshot is true")});var No={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},Mo={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},rt=class l{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=No[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=Mo[e],i=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&i.push("\x1B[39m"),i.push(...t),console.log(...i),o&&!Array.isArray(o))for(let[s,a]of Object.entries(o)){let d=a;a instanceof Error?d=a.message:typeof a=="object"&&(d=JSON.stringify(a,void 0,2),d=d.split(`
`).map((m,u)=>u>0?`  ${m}`:m).join(`
`)),console.log(e===0?`${r}  ${s}:`:`  ${s}:`,d)}else if(o)for(let s of o){let a=s;typeof s=="object"&&(a=JSON.stringify(s,void 0,2),a=a.split(`
`).map((d,m)=>m>0?`  ${d}`:d).join(`
`)),console.log(e===0?`${r}  `:"  ",a)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new l(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Ws=new rt(1,{}),Pe={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>Pe,flush:()=>{},bindings:()=>({})},De={},te=({logger:l,logKey:e,maxCount:t,intervalMs:n},o,r,...i)=>{let s=De[e];s?clearTimeout(s.timer):(s={count:0,totalCount:0},De[e]=s),s.totalCount++,s.count<t&&(s.count++,l.debug(o,r,...i)),s.timer=setTimeout(()=>{let a=De[e];a?.totalCount!==a?.count&&l.debug({logKey:e,totalCount:a?.totalCount,count:a?.count},`Debug logs were rate-limited for ${e}`),delete De[e]},n)};import{z as K}from"zod";var Oo=K.object({id:K.string(),createdAt:K.coerce.date(),createdBy:K.string(),organizationId:K.string(),name:K.string(),schemaVersion:K.string().describe("Schema version for steps"),parameters:K.string().array().nullish().describe("Parameter list"),numSteps:K.number()}),qs=Oo.omit({numSteps:!0}).extend({steps:K.lazy(()=>Ot.array())});import*as p from"zod";import{z as v}from"zod";var it={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Lo={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED",RETRYING:"RETRYING",WAITING_FOR_USER:"WAITING_FOR_USER"},_o={PASSED:"PASSED",FAILED:"FAILED"},ze=v.string().pipe(v.coerce.date()).or(v.date()),ko=v.object({id:v.string(),runKey:v.string(),organizationId:v.string(),createdAt:ze,createdBy:v.string(),scheduledAt:ze.or(v.null()),startedAt:ze.or(v.null()),finishedAt:ze.or(v.null()),status:v.nativeEnum(Lo),expectedStatus:v.nativeEnum(_o).or(v.null()),trigger:v.nativeEnum(it),attempts:v.number(),failureReason:v.nativeEnum(Z).nullish(),failureDetails:_t.nullish(),testId:v.string().or(v.null()),testName:v.string().or(v.null()).optional(),test:v.object({name:v.string(),id:v.string()}).or(v.null()),suiteId:v.string().or(v.null()).optional()}),st=ko.merge(v.object({results:ot.array(),test:v.object({name:v.string(),id:v.string(),baseUrl:v.string(),advanced:_e.optional()}).or(v.null())})),ta=v.object({id:v.string(),name:v.string()});var de=p.object({disableCache:p.boolean()}),ma=p.object({error:p.boolean(),reason:p.string(),message:p.string()}),pa=ie.merge(de),Kt=Ye,ha=ie.merge(de).merge(p.object({screenshot:p.string().optional()})),Jt=Lt,ga=ie.pick({browserState:!0,goal:!0}).merge(de).merge(p.object({screenshot:p.string().optional()})),fa=ie.pick({goal:!0}).merge(de).merge(p.object({screenshot:p.string().describe("base64 encoded image"),hintActivatedScreenshot:p.string().describe("base64 encoded image")})),Qt=Xt,ya=ie.pick({goal:!0,url:!0}).merge(de),Zt=p.string().array(),ba=ie.pick({goal:!0,browserState:!0}).merge(de),en=kt,wa=ie.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(de);var Sa=p.object({testPaths:p.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:p.string().optional(),all:p.boolean().optional(),urlOverride:p.string().optional()}),Ta=p.object({message:p.string(),queuedTests:p.object({name:p.string(),id:p.string()}).array(),runIds:p.string().uuid().array()}),va=ke.merge(p.object({steps:p.array(p.record(p.unknown()))})),Ca=p.string().array(),Ea=p.union([p.object({paths:p.string().array().describe("run specific test paths (e.g. todo-test)"),all:p.boolean().describe("run all tests").optional()}),p.object({path:p.string().describe("deprecated; present for backcompat")})]),Aa=p.object({tests:p.record(p.string().describe("Test name"),p.string().describe("Test YAML")),modules:p.record(p.string().describe("Module name"),p.string().describe("Module YAML"))}),Do=p.object({test:p.string().describe("test YAML"),modules:p.record(p.string().describe("moduleId"),p.string().describe("module YAML"))}),xa=Do.array(),Ra=p.object({testId:p.string(),schemaVersion:p.string(),steps:p.array(p.record(p.unknown()))}),Ia=p.object({entries:p.array(Ke),testId:p.string()}),Na=p.object({steps:p.array(p.record(p.unknown())),testId:p.string(),schemaVersion:p.string(),organizationId:p.string()});var Ma=p.object({testPath:p.string(),testId:p.string(),testName:p.string()}).partial().merge(p.object({trigger:p.nativeEnum(it)}));var Po=st.pick({id:!0,status:!0,testName:!0,testId:!0,test:!0,failureReason:!0,failureDetails:!0}),Oa=Po.array(),La=st.pick({startedAt:!0,finishedAt:!0,results:!0,status:!0,failureDetails:!0,failureReason:!0}).partial(),_a=p.object({screenshot:p.string()}),ka=p.object({key:p.string()}),Da=p.object({orgId:p.string()}),Pa=p.array(ve),za=p.array(ve),Fa=p.record(p.string(),p.union([p.string(),p.boolean()]));import{z}from"zod";var zo=z.object({content:z.string(),ids:z.string().array(),tokenLength:z.number()}),Fo=z.object({chunks:zo.array(),numRecs:z.number()}),Wa=z.object({ids:z.string().array(),score:z.number(),tokenLength:z.number()}),Ha=z.object({description:z.string(),tokenLimit:z.number()}).merge(Fo),tn=z.object({ids:z.number().array()});import{validator as Xa}from"@exodus/schemasafe";import{v4 as kn}from"uuid";var nn=(l,e)=>{let{hostname:t,pathname:n}=new URL(l),{hostname:o,pathname:r}=new URL(e);return t!==o||n!==r};var on=l=>!l.toLowerCase().startsWith("http");var rn={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts"],relevantElementAttributes:["name","id","value","type","class","height","width","placeholder","target","title","href","src","alt","role","headers","scope","checked","required","action","data-value","data-testid","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function sn(l){if(l[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(l.length>10){let a=Math.floor(l.length/8);if((l.match(/[-_:/ ]/g)??[]).length<a)return!0}if((l.match(/[^0-9a-zA-Z.]/g)??[]).length/l.length>.2)return!0;let t=(l.match(/[0-9]/g)??[]).length;if(t/l.length>.3)return!0;let n=(l.toLowerCase().match(/[aeiou]/gi)??[]).length;if((l.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=(l.match(/[A-Z]/g)??[]).length,i=(l.match(/[a-z]/g)??[]).length,s=Math.ceil(l.length*.3);return!!(i&&t&&Math.abs(i-t)<s||i&&r&&Math.abs(i-r)<s)}import{randomUUID as dn}from"crypto";import{distance as ct}from"fastest-levenshtein";import{cloneDeep as un}from"lodash-es";var an=new Set(["about:blank","chrome-error://chromewebdata/"]),ln=3,W="data-momentic-id",at=500,lt=["button","image","generic","graphics-symbol","tab","link","menuitem","group"];var Uo=["focusable","keyshortcuts","controls","live","relevant"],Bo=["selected","readonly","modal","required"],Wo=["id","name","role","content"],Ho=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","image","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],jo=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree"],Go=["menulistpopup","statictext","inlinetextbox"],Vo=80,Fe=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],$o=["cite"],qo={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"]},mn={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},dt=class l{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;domNode;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){this.domNode=e.domNode,this.tagName=e.domNode.tagName||void 0;let t=e.domNode.attributes.id;this.name=this.name||e.domNode.attributes.name||(t&&!sn(t)?t:""),this.role=this.role||(e.domNode.attributes.role??""),Qo(this.properties,e.domNode)}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return Ho.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=mn){let t=Object.assign({},mn,e),{indentLevel:n,noChildren:o,noProperties:r,noID:i,noContent:s}=t,a=un(this.properties),d=" ".repeat(n),m=this.role||"",u=this.tagName??"unknown",f=this.name;m==="heading"&&f==="heading"&&(f="");let b=Fe.includes(this.role)||$o.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${d}${f}
`;let g=`${d}<${u}`;if(!i&&!b&&(g+=` id="${this.id}"`),m&&m!=="generic"&&m!==u&&!(qo[m]??[]).includes(u)&&(g+=` role=${JSON.stringify(m)}`),f&&(g+=` name=${JSON.stringify(f)}`),this.content&&!s&&(g+=` content=${JSON.stringify(this.content)}`),Object.keys(a).length>0&&!r&&Object.entries(a).forEach(([y,C])=>{if(!Uo.includes(y)){if(Bo.includes(y)&&!C)return;if(y==="value"&&s&&a.type==="text")return;typeof C=="string"?g+=` ${y}="${C}"`:typeof C=="boolean"?C?g+=` ${y}`:g+=` ${y}={false}`:typeof C<"u"&&(g+=` ${y}={${JSON.stringify(C)}}`)}}),u==="::before"||u==="::after"){let y="";for(let C of this.children)y+=C.serialize({...e,indentLevel:n,neighbors:0});return y}let h=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||h)g+=` />
`;else{let y="";for(let w of this.children)y+=w.serialize({...e,indentLevel:n+2,neighbors:0});let C=y.trim();C.length<=Vo&&!C.includes(`
`)?g+=`>${C}</${u}>
`:g+=`>
${y}${d}</${u}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let y=this.parent.children.findIndex(E=>E.id===this.id),C=y>0?this.parent.children[y-1]?.serialize({...e,neighbors:0}):"",w=y<this.parent.children.length-1?this.parent.children[y+1]?.serialize({...e,neighbors:0}):"";return`${C||""}
${g}
${w||""}`}return g}shallowClone(){let e=new l({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=un(this.properties),e}},ut=class l{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,i=!1){let s=e.has(r.id)||r.id===t?.id,a=r.shallowClone(),d=r.children,m=!1,u=[];for(let f of d){let b=n(f,s||m);b&&(u.push(b),b.parent=a,m=!0)}if(a.children=u,s||m)return a;if(Fe.includes(r.role)&&i)return a}let o=n(t);return new l(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function Yo(l){return l.name?.value?`"${l.name.value}"`:l.role?.value&&l.role.value!=="none"&&l.role.value!=="generic"?`"${l.role.value}"`:`"${l.nodeId}"`}function Xo(l,e,t,n){return l.bounds.x===null||l.bounds.y===null||l.bounds.height===null||l.bounds.width===null||l.bounds.width===0||l.bounds.height===0?!0:l.bounds.x+l.bounds.width<e.leftBound||l.bounds.x>e.rightBound?(te({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:l,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):l.bounds.y+l.bounds.height<e.upperBound||l.bounds.y>e.lowerBound?(te({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:l,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):l.computedStyles.display==="none"?(t.debug({domNode:l},"Filtering out node since it has display none"),!1):!0}async function pn({node:l,parent:e,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:s,viewportDetails:a}){if(!e&&l.parentId)throw new Error(`Got no parent for accessibility node ${l.nodeId}: ${JSON.stringify(l)}`);let d=(w,E={})=>{te({logger:r,logKey:i,maxCount:5,intervalMs:3e3},{axNode:l,logKey:i,parentMomenticId:e?.dataMomenticId,parentForm:e?.getNodeOnlySerializedForm(),...E},w)},m=l.backendDOMNodeId,u=Go.includes((l.role?.value).toLowerCase());if(!u&&m===void 0)return d("Filtering out node since it doesn't exist in the DOM"),[];let f=m?t.backendIdToNode[m]:void 0;if(!u&&!f)try{let w=await o.send("DOM.describeNode",{backendNodeId:m});if(w.node.nodeName.toLowerCase()==="slot"&&w.node.distributedNodes?.length)r.debug({redirectedDomNode:f,parentAXNode:e?.getNodeOnlySerializedForm(),originalAXNode:l,cdpResult:w},"Redirected to assigned slot");else return d("Filtering out node since it doesn't exist in the DOM",{cdpResult:w}),[]}catch(w){return d("Filtering out node since it doesn't exist in the DOM",{err:w}),[]}if(f&&e&&s&&a&&l.backendDOMNodeId&&!Xo(f,a,r,i))return f&&(f.momenticIgnored=!0),[];let b=l.name?.value?typeof l.name.value=="string"?l.name.value:`${l.name.value}`:"",g=l.value?.value?typeof l.value.value=="string"?l.value.value:`${l.value.value}`:"";if(b==="momentic_cursor"||b.includes("chakra"))return f&&(f.momenticIgnored=!0),[];let h=new dt({domNode:f,id:parseInt(l.nodeId),role:l.role?.value||"",name:b,content:g,properties:l.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Yo(l),backendNodeID:l.backendDOMNodeId,ignoredByCDP:l.ignored});for(let w of l.childIds??[]){if(!w)continue;let E=n.get(parseInt(w));if(!E)continue;let L=await pn({node:E,parent:h,domGraph:t,inputNodeMap:n,cdpClient:o,logger:r,callId:i,filterByViewport:s,viewportDetails:a});L.length&&(h.children=h.children.concat(L))}if(h.role==="StaticText"&&(h.children=[]),h.children.length===1&&h.children[0].role==="StaticText"){let w=h.name,E=h.children[0]?.name;(w===E||!E)&&(h.children=[])}let y=[];for(let w=h.children.length-1;w>=0;w--){let E=h.children[w];if(E.role!=="StaticText"){y.push(E);continue}if(w===0||h.children[w-1].role!=="StaticText"){y.push(E);continue}h.children[w-1].name+=` ${E.name}`}if(h.children=y.reverse(),h.role==="generic"&&h.children.length===1){let w=h.children[0];if(h.name&&!Fe.includes(w.role)&&h.name===w.name)return f&&(f.momenticIgnored=!0),h.children}if(!h.isInteresting()&&l.parentId)return f&&(f.momenticIgnored=!0),h.children;for(let w of h.children)w.parent=h;return[h]}function hn({node:l,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){l.id=r,r+=1,e.set(l.id,l),l.dataMomenticId?t.set(l.dataMomenticId,l):Fe.includes(l.role)||te({logger:n,logKey:o,maxCount:5,intervalMs:3e3},{node:l.serialize({neighbors:1,maxLevel:1}),role:l.role,logKey:o},"Node has no data-momentic-id");for(let i of l.children)r=hn({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}async function gn({a11yGraph:l,domGraph:e,logger:t,cdpClient:n,filterByViewport:o,viewportDetails:r}){if(!l.root)throw new Error("A11y tree has no root");let i=dn();l.allNodes=l.allNodes.filter(u=>u.ignored?!u.ignoredReasons?.find(b=>jo.includes(b.name)):!0);let s=new Map;for(let u of l.allNodes)s.set(parseInt(u.nodeId),u);let a=await pn({node:l.root,domGraph:e,parent:null,inputNodeMap:s,cdpClient:n,logger:t,callId:dn(),filterByViewport:o,viewportDetails:r});if(a.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(a)}`);if(a.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let d=new Map,m=new Map;return hn({node:a[0],a11yIdNodeMap:d,dataMomenticIdMap:m,logger:t,callId:i}),new ut(a[0],d,m)}var mt=(l,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=l[o];if(typeof r!="string"||!r.trim())continue;let i=ct(r,e[o])/Math.min(r.length,e[o].length);i===0?t+=2:i<=.15&&t++}if(e.numChildren!==void 0&&(l.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=l.getNodeOnlySerializedForm(),r=ct(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.15&&t++}if(e.serializedForm){let o=l.serialize({noID:!0,maxLevel:1,neighbors:1}),r=ct(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.15&&t++}return t},Ko=["href","src"];function Jo(l,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return Ko.includes(l)&&e.length>60?e.slice(0,50)+"...":l==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function Qo(l,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{rn.relevantElementAttributes.includes(t)&&!Wo.includes(t)&&!l[t]&&!t.startsWith("aria")&&t!=="class"&&(l[t]=Jo(t,n))})}var ue={r:147,g:196,b:125,a:.55},Be={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:ue,paddingColor:ue,borderColor:ue,marginColor:ue,eventTargetColor:ue,shapeColor:ue,shapeMarginColor:ue,showInfo:!0,showAccessibilityInfo:!0};var Ue=["display","opacity","visibility","height","max-height","overflow"];function fn({snapshot:l,devicePixelRatio:e,pageFrameId:t}){let n=l.strings,o=l.documents,r=o[0];t&&(r=o.find(a=>n[a.frameId]===t));let i={};return{root:Zo(r,n,e,i),backendIdToNode:i}}function Zo(l,e,t,n){let o=l.layout,r={};o.nodeIndex.forEach((g,h)=>{r[g]=h});let i=o.styles,s=o.bounds??[],a=l.nodes,d=a.backendNodeId??[],m=a.attributes??[],u=a.parentIndex??[],f=a.nodeName??[],b=a.inputChecked??{index:[]};for(let g=0;g<d.length;g++){let h=d[g],y=m[g]??[],C=u[g]&&u[g]>=0?u[g]:null,w=r[g],E;w?E=s[w]??[]:E=[];let L={backendNodeId:h,bounds:{x:E[0]??null,y:E[1]??null,width:E[2]??null,height:E[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:C?d[C]:null,tagName:f[g]!==void 0?e[f[g]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};L.parentBackendNodeId&&n[L.parentBackendNodeId].children.push(h);for(let _ of Object.keys(L.bounds)){let q=_;L.bounds[q]!==null&&(L.bounds[q]/=t)}let Ee=i[g]??[];for(let _=0;_<Ee.length&&!(_>=Ue.length);_++){let q=Ee[_];if(!q||isNaN(q))continue;let ne=e[q];if(!ne)continue;let J=Ue[_];L.computedStyles[J]=ne}for(let _=0;_<y.length;_+=2){let q=y[_],ne=y[_+1];if(!q||!ne)continue;let J=e[q],we=e[ne];!J||!we||(L.attributes[J]=we)}b.index.includes(g)&&(L.attributes.checked="true"),n[L.backendNodeId]=L}return n[d[0]]}async function yn(l){return l.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var O=(l=1e3)=>new Promise(e=>setTimeout(()=>e(),l));var bn=`
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
`;function wn(){return window.lastCursorPos}function Sn(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function Tn(){window.globalHintManager&&window.globalHintManager.reset()}function vn(){let l={addIdsToElement:(e,t)=>{let n="getElementsByTagName"in e?e.getElementsByTagName("*"):e.querySelectorAll("*"),o=t;for(let r=0;r<n.length;r++){let i=n[r];i&&(i.setAttribute("data-momentic-id",`${o}`),i.setAttribute("aria-keyshortcuts",`${o}`),o++,i.shadowRoot&&(o=l.addIdsToElement(i.shadowRoot,o)))}return o}};return l.addIdsToElement(document.body,1)}var er=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),tr=new Set(["script","document"]),nr=["cdn.doubleverify.com","securepubads.g.doubleclick.net","pagead2.googlesyndication.com","googleads.g.doubleclick.net","static.criteo.net","intercom.io","googletagmanager.com","google-analytics.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","px.ads.linkedin.com","www.clarity.ms","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms","app.posthog.com","soraban.com","rs.fullstory.com","api2.amplitude.com"],or=["youtube.com/api/stats","play.google.com/log","youtube.com/youtubei/v1/log_event","retool.com/api/ddMetric"];function pt(l){return`${l.resourceType()} ${l.method()} ${l.url()}`}function Cn(l){return l=l.replace(/^www\./,""),l}function En(l,e){if(!er.has(l.resourceType()))return!1;let t=new URL(e),n=l.url(),o=new URL(n);return nr.some(r=>o.hostname.includes(r))||or.some(r=>n.includes(r))?!1:tr.has(l.resourceType())||l.method()!=="GET"?!0:Cn(o.hostname).includes(Cn(t.hostname))}var An=`(function () {
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
})()`;var xn=l=>{let e;for(let n of l){let o=document.querySelectorAll(n);if(!o.length){let i=`[MOMENTIC] Could not find element in document ${document.title} with selector: ${n}`;throw console.error(i),new Error(i)}if(o.length>1){let i=`[MOMENTIC] Found multiple elements with selector: ${n}`;throw console.error(i),new Error(i)}let r=o[0];if(e&&e.getAttribute("data-momentic-id")!==r?.getAttribute("data-momentic-id")){let i="[MOMENTIC] Rejecting selector combination because of mismatch";throw console.error(i),new Error(i)}e=r}let t=e.getAttribute("data-momentic-id");if(!t){let n=`[MOMENTIC] Selector resolved to element with no data-momentic-id: ${e.outerHTML}`;throw console.error(n),new Error(n)}return{momenticId:t}};var Rn=l=>{let e=window,t=e.findElementInBodyOrShadowDom?.(l);if(!t)throw new Error(`[MOMENTIC] Could not find element with data-momentic-id: ${l}`);if(!e.serializeElementWithContext)throw new Error("[MOMENTIC] Momentic core libraries not found");return e.serializeElementWithContext(t)},In=({serializedHtml:l,distanceThreshold:e})=>{let t=window;if(!t.ldist||!t.serializeElementOnlyWithText||!t.getAllElements)throw new Error("[MOMENTIC] Momentic core libraries not found when finding closest elements");let n=t.getAllElements(),o,r,i=1/0,s;for(let a of n){let d=t.serializeElementOnlyWithText(a);if(Math.abs(d.length-l.length)>e)continue;let m=t.ldist(l,d);m<i?(i=m,r=d,o=a.getAttribute("data-momentic-id")??void 0,s=void 0):m===i&&(s=d)}if(s&&i!==0)throw new Error(`[MOMENTIC] Multiple HTML elements with same distance (${i}) found:
      ${s}
      ==================
      ${r}
      `);if(i>e)throw new Error(`Closest HTML candidate still has too far distance (${i}) from threshold (${e})
      Closest node: ${r}
      Target node: ${l}
      `);return{dataMomenticId:o,closestDistance:i}};var Cr=br(fr(),"momentic","chromium"),be=process.env.TWO_CAPTCHA_KEY,ft=Sr(wr);ft.use(Tr({provider:{id:"2captcha",token:be},visualFeedback:!0}));async function Er(l,e){await l.grantPermissions(["clipboard-read","clipboard-write","microphone","camera"]);let t=[l.addInitScript({content:Se.cssGeneratorLibJs}),l.addInitScript({content:Se.htmlUtilsLibJs})];e?t.push(l.addInitScript({content:An})):t.push(l.addInitScript({content:bn})),await Promise.all(t)}var yt=class l{browser;context;page;systemDevicePixelRatio;networkSettings;pageLoadPromise=null;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;enricher;storage;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;constructor({storage:e,enricher:t,browser:n,context:o,page:r,baseUrl:i,logger:s,localMode:a,cdpClient:d,networkSettings:m}){this.storage=e,this.enricher=t,this.browser=n,this.context=o,this.cdpClient=d,this.page=r,this.baseURL=i,this.originsVisited.add(new URL(i).origin),this.logger=s,this.networkSettings=m,this.localMode=!!a}static USER_AGENT=_n["Desktop Chrome"].userAgent;static async init({baseUrl:e,logger:t,storage:n,enricher:o,networkSettings:r,browserArgs:i,contextArgs:s,onBrowserUpdateDuringLoad:a,onClose:d,waitForLoad:m=!0,localMode:u,localAppUrl:f,extensionPath:b,skipPageSetup:g,timeout:h}){process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY="1";let y={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...i??{}},C={viewport:et,userAgent:_n["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...s??{}},w=null,E,L;u?(E=await ft.launchPersistentContext(Cr,{...y,...C,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${f}`,`--load-extension=${b}`,"--test-type=browser","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"],baseURL:e}),L=E.pages()[0],d&&L.on("close",()=>{d()})):(w=await ft.launch({...y,args:["--disable-dev-shm-usage","--no-first-run","--renderer-process-limit=3","--autoplay-policy=user-gesture-required","--disable-add-to-shelf","--disable-desktop-notifications","--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]}),E=await w.newContext({deviceScaleFactor:process.env.NODE_ENV==="development"?2:1,...C,baseURL:e}),L=await E.newPage()),await Er(E,!!u);let Ee=await l.initCDPSession(E,L,t,h),_=new l({browser:w,context:E,page:L,baseUrl:e,logger:t,storage:n,enricher:o,localMode:u,networkSettings:r,cdpClient:Ee});_.systemDevicePixelRatio=C.deviceScaleFactor;let q=!1,ne=async()=>{try{await _.navigate({url:e,initialNavigation:!g,loadTimeoutMs:h})}catch(J){if(t.error({err:J},"Failed to initialize Chrome browser"),m)throw J}finally{q=!0}};if(m?await ne():ne(),a){let J=async()=>{try{a({viewport:await _.getViewport(),buffer:await _.screenshot({}),iframeSrcUrls:await _.getFrameSrcUrls()})}catch{}},we=setInterval(()=>{if(Date.now()-wt<(h??8e3*2))J();else{clearInterval(we);return}},400),wt=Date.now();for(;!q&&Date.now()-wt<(h??8e3*2);)await O(250);clearInterval(we)}return _}async getLocatorFromCdpFrame(e,t){let n=this.page;for(let s of t)n=n.frameLocator(`[src=${JSON.stringify(s)}]`);let o=this.getAttributeFromStringArray(e.attributes??[],"src");if(!o)throw new Error(`Got iframe without src attribute: ${JSON.stringify(e)}`);let r=n.locator(`[src=${JSON.stringify(o)}]`),i=await(await r.evaluateHandle(s=>s)).asElement().contentFrame();if(!i)throw new Error(`Got null frame from locator: ${r}`);await i.waitForLoadState("domcontentloaded",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3});try{await i.waitForLoadState("load",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3})}catch(s){this.logger.error({err:s,frameSrc:o},"Timeout elapsed waiting for frame to fully load, continuing anyways...")}return i}async getMatchingFrame(e){if(e.type!=="url")throw new Error("Only url frame identifiers are supported now");let t=e.url,o=[{node:(await this.cdpClient.send("DOM.getDocument",{pierce:!0,depth:-1})).root,srcChain:[]}];for(;o.length>0;){let r=o.pop(),i=r.node,s=r.srcChain;if(i.nodeName.toLowerCase()==="iframe"){let a=this.getAttributeFromStringArray(i.attributes??[],"src");if(!a)continue;if(t.startsWith("/")&&t.endsWith("/")){if(new RegExp(t.slice(1,-1)).test(a))return{node:i,frame:await this.getLocatorFromCdpFrame(i,s)}}else if(t.trim()===a.trim())return{node:i,frame:await this.getLocatorFromCdpFrame(i,s)};s=[...s,a]}for(let a of i.children??[])o.push({node:a,srcChain:s});i.contentDocument&&o.push({node:i.contentDocument,srcChain:s})}throw new Error(`Failed to find frame with src matching: ${t}`)}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="",o;for(;e<3;){try{if(this.activeFrame.type==="name"?(n=this.activeFrame.name,t=this.page.frame(n)):(n=this.activeFrame.url,t=(await this.getMatchingFrame(this.activeFrame)).frame),t)return t}catch(r){o=r}await O(250),e++}throw new G("InternalWebAgentError",o?o.message:`Failed to find frame with src matching '${n}' on page`)}static async initCDPSession(e,t,n,o){o===void 0&&(o=2e3);let r=o===null?1/0:2,i=async()=>{try{let s=await e.newCDPSession(t);return s.on("Target.targetCrashed",a=>{n.error({payload:a},"CDP session crashed, Momentic will likely not function correctly")}),s.on("Inspector.targetCrashed",a=>{n.error({payload:a},"CDP inspector session crashed, Momentic will likely not function correctly")}),await s.send("Accessibility.enable"),await s.send("DOM.enable"),await s.send("Overlay.enable"),s}catch(s){if(r>0)return n.debug({err:s},"Failed to initialize CDP session, re-creating CDP client"),await O(500),r--,i();throw s}};return o===null?i():await gt(i(),{milliseconds:o??8e3})}setLogger(e){this.logger=e}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&(this.logger.debug("Clearing cookies"),await this.context.clearCookies());let t=this.context.pages();for(let n=0;n<t.length;n++){if(e.clearStorage){let o=t[n].url();this.logger.debug(`Clearing local storage for tab ${o}`),this.originsVisited.delete(new URL(o).origin);try{await t[n].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(r=>{r.forEach(i=>{i.name&&indexedDB.deleteDatabase(i.name)})})},{timeout:1e3})}catch(r){this.logger.debug({err:r},"Failed clearing site data, continuing...")}}n!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[n].url()}`),await t[n].close())}if(this.page=this.context.pages()[0],this.page.isClosed()){this.logger.debug("Page is closed, exiting reset early");return}if(this.cdpClient=await l.initCDPSession(this.context,this.page,this.logger,e.timeout),e.clearStorage)for(let n of this.originsVisited)this.logger.debug({origin:n},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:n,storageTypes:"all"}),this.originsVisited.delete(n);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async wait(e){await O(e)}async toggleHints(e){let t=this.page;e.state==="on"?(await t.addStyleTag({content:Se.vimiumCss}),await t.addScriptTag({content:Se.vimiumJs}),await t.evaluate(Sn,{timeout:1e3})):await t.evaluate(Tn,{timeout:1e3})}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){if(this.browser!==null){this.originsVisited.clear();try{await this.page.close()}catch{}try{await this.context.close()}catch{}try{await this.browser?.close()}catch{}this.browser=null}}get closed(){return this.page.isClosed()||!!this.browser&&!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}url(){return this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let i=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:i}}async screenshot(e){let{retries:t=1}=e;try{let n=await this.screenshotHelper({...e,retries:t});if(n.byteLength>5e6)this.logger.error("Page screenshot is greater than 5MB, which may cause performance issues with some AI models");else if(n.length===0)throw new Error("Got empty screenshot");return n}catch(n){if(t>0)return this.logger.debug({err:n},"Failed taking screenshot, retrying..."),await O(500),this.screenshot({...e,retries:t-1});throw n}}async screenshotHelper({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,timeout:i,clearHighlights:s=!1}){s&&await this.removeAllHighlights();let a={fullPage:!1,type:"jpeg",quality:t,scale:n,caret:r?"hide":"initial",path:o,timeout:i??5e3};e&&(a.scale="css");let d;if(a.scale==="css"||a.path)d=await this.page.screenshot(a);else{let m=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});d=Buffer.from(m.data,"base64")}if(!e)return d;if(e){let m;"id"in e?m=(await this.resolveTarget(e)).locator:m=e;let u=await m.boundingBox();if(!u)throw new Error("Attempted to screenshot an element that is not visible on the page");let{x:f,y:b,width:g,height:h}=u;if(!g||!h)throw new Error("Attempted to screenshot an element with zero width or height");if(f<0||b<0)throw new Error("Attempted to screenshot an element with negative coordinates");f=Math.floor(f),b=Math.floor(b),g=Math.ceil(g),h=Math.ceil(h);try{d=await vr(d).extract({left:f,top:b,width:g,height:h}).toBuffer()}catch(y){throw new Error(`Failed taking element screenshot at coordinates (${f}, ${b}) with size (${g}, ${h}): ${y}`)}}return d}async getViewport(){let e=this.activeFrame;if(this.localMode&&e&&e.type==="name"){let n=await this.page.locator(`iframe[name="${e.name}"]`).boundingBox();if(!n)throw new Error(`Failed to get bounding box for frame: ${this.activeFrame}`);return n}let t=this.page.viewportSize();if(!t)throw new Error("failed to get viewport");return t}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n,networkIdleTimeoutMs:o=0}){n===void 0&&(n=this.networkSettings.pageLoadTimeoutMs??8e3),on(e)&&(e=new URL(e,this.baseURL).toString()),n&&(n=Math.min(n,6e4)),o&&(o=Math.min(o,6e4)),this.logger.debug(`Navigating to ${e}`),this.originsVisited.add(new URL(e).origin);let r=Date.now(),i=async()=>{await this.page.goto(e,{waitUntil:"domcontentloaded",timeout:n??0});try{await this.page.waitForLoadState("load",{timeout:n??0})}catch(a){this.logger.debug({err:a},"Timeout elapsed waiting for load state, continuing anyways...")}};try{o?await this.wrapPossibleNavigation(i,o):await i(),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-r)}ms`)}catch(a){if(a instanceof Error&&a.message.includes("ERR_ABORTED")){this.logger.error({err:a},"Navigation error, possibly due to user cancellation");return}throw a}let s=this.url();if(an.has(s)&&process.env.NODE_ENV==="production")throw new G("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t)try{await this.exposeRecordingBindings()}catch(a){a instanceof Error&&a.message.includes("already registered")||this.logger.error({err:a},"Failed to install Momentic libraries for action recording")}this.logger.debug({url:e,urlAfterNav:s},"Navigation complete")}async type(e,t={}){this.logger.debug({text:e},"Entering text with keyboard");let{clearContent:n=!0,pressKeysSequentially:o=!1}=t;n&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),o?await this.page.keyboard.type(e):await this.page.keyboard.insertText(e)}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:5e3})}async highlight(e,t){try{let n=await this.resolveTarget(e,!0);return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.debug({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})},{timeout:1e3})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{let r=window;r.momenticIsEligible=y=>{let w=window.getComputedStyle(y,null).getPropertyValue("display");if(w==="none"||w==="contents")return!1;let E=y.getBoundingClientRect();return!(!E.height||!E.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let i=0;for(;!r.momenticIsEligible(n)&&i<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,i++}let s=n.style.getPropertyValue("outline"),a=n.style.getPropertyPriority("outline"),d=n.style.getPropertyValue("background-color"),m=n.style.getPropertyPriority("background-color"),u=n.style.getPropertyValue("opacity"),f=n.style.getPropertyPriority("opacity");if(s.includes("blue")&&s.includes("solid")&&s.includes("3px"))return;window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.setProperty("outline","3px solid deepskyblue","important"):n.style.setProperty("outline","3px solid royalblue","important");let b="rgba(255, 255, 128, 0.5)",g=window.getComputedStyle(n,null).getPropertyValue("background-color");g&&!g.includes("255, 255, 255")&&!g.includes("0, 0, 0")&&(b=`rgba(${g.match(/\d+/g).map(Number).slice(0,3).map(w=>255-w).join(", ")}, 0.5)`),n.style.setProperty("background-color",o??b,"important"),n.style.setProperty("opacity","100","important");let h=`momentic${Math.floor(Math.random()*1e7)}`;r[h]=()=>{n.style.removeProperty("outline"),n.style.setProperty("outline",s,a),n.style.removeProperty("background-color"),n.style.setProperty("backgroundColor",d,m),n.style.removeProperty("opacity"),n.style.setProperty("opacity",u,f)},r.removeHighlightTimers.push(setTimeout(()=>{r.removeHighlightFunctions?.[h]&&(delete r.removeHighlightFunctions[h],r[h]())},2750)),r.removeHighlightFunctions[h]=r[h]},t?.color,{timeout:1e3}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}async wrapPossibleNavigation(e,t=2e3){if(this.networkSettings.autoWaitForNetworkIdle===!1)return e();let n=this.url(),o=Date.now(),r=new Map,i=new Map,s=h=>{let y=pt(h.request());i.set(y,(i.get(y)??0)+1);let C=h.status();C>=500&&this.logger.warn({request:y,status:C},"Received 500 level response")},a=h=>{let y=pt(h);En(h,n)&&(r.set(y,(r.get(y)??0)+1),o=Date.now())},d=h=>{let y=h.url();this.logger.debug({url:y},"Detected new page after action, waiting for load to complete"),this.originsVisited.add(new URL(y).origin),this.pageLoadPromise=(async()=>{await h.waitForLoadState("domcontentloaded",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3});try{await h.waitForLoadState("load",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}finally{this.pageLoadPromise=null}})()};this.pageLoadPromise=null,this.context.on("page",d),this.page.on("response",s),this.page.on("request",a),await this.page.waitForTimeout(0);let m=Date.now(),u=await e();for(;;){if(Date.now()-m>2e3){this.logger.debug({requests:Array.from(r.keys()).slice(0,10)},"Timeout elapsed waiting for network stable");break}if(Date.now()-o>500){this.logger.debug({requests:Array.from(r.keys()).slice(0,10)},`Network stable in ${Date.now()-m}ms`);break}await O(250)}let f=Date.now(),b=new Set;for(;;){if(Date.now()-f>t){this.logger.debug({requests:Array.from(b).slice(0,10)},"Timeout elapsed waiting for requests to complete");break}let h=!1;b=new Set;for(let y of r.keys())r.get(y)!==i.get(y)&&(h=!0,b.add(y));if(!h){this.logger.debug({url:this.url(),requests:Array.from(r.entries()).slice(0,10)},`Network idle in ${Math.floor(Date.now()-f)}ms`);break}await O(250)}this.page.off("request",a),this.page.off("response",s),this.context.off("page",d),await gt(Promise.resolve(this.pageLoadPromise),{milliseconds:5e3,fallback:()=>{this.logger.error("Timed out waiting for new page to load")}}),r.size>0&&await O(500);let g=this.url();if(this.originsVisited.add(new URL(g).origin),nn(g,n)){this.logger.debug({startUrl:n,newUrl:g},"Detected same-page url change in wrapPossibleNavigation, waiting for load state");let h;try{h=await this.getUserPageOrFrame()}catch(y){this.logger.debug({err:y},"Could not get frame after url change, defaulting to page instead"),h=this.page}await h.waitForLoadState("domcontentloaded",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3});try{await h.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}return u}getOpenPages(){return this.context.pages().map(e=>e.url())}async saveNodeDetailsToCache(e,t,n,o){if(e&&(t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()),t.generatedSelectors&&t.generatedSelectors.length>1)return;if(!n){this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}let r=await this.getUserPageOrFrame();try{let i=await this.fetchHtmlAttributes(n,r);Object.assign(t,i)}catch(i){this.logger.debug({err:i},"Failed to fetch HTML attributes for target")}if(lt.includes(t?.role??""))try{await this.saveElementVisualAttributes(t,o)}catch(i){this.logger.debug({err:i},"Failed to get element screenshot while saving node details")}}async saveElementVisualAttributes(e,t){if(!t)return;await t.scrollIntoViewIfNeeded({timeout:5e3});let n=await t.boundingBox();if(!n||!n.width||!n.height){e.boundingBox=void 0,e.screenshotUrl=void 0;return}let{x:o=0,y:r=0,width:i=0,height:s=0}=n;if(e.boundingBox&&Math.abs(e.boundingBox.width-i)<1&&Math.abs(e.boundingBox.height-s)<1&&Math.abs((e.boundingBox.x??0)-o)<1&&Math.abs((e.boundingBox.y??0)-r)<1)return;this.logger.debug({oldBox:e.boundingBox,newBox:n},"Updating element screenshot");let a=await this.screenshot({target:t,scale:"css",timeout:5e3});e.boundingBox=n,e.screenshotUrl=await this.storage.uploadScreenshot(a)}async ensureMomenticBrowserScriptsLoaded(){let e=Date.now();for(;Date.now()-e<8e3;)try{await(await this.getUserPageOrFrame()).evaluate(()=>{let t=window;if(!(t.generateCssSelectors&&t.generateHtmlCacheAttributes&&t.ldist))throw new Error("Not loaded yet")},{timeout:1e3});return}catch(t){this.logger.debug({err:t},"Waiting for momentic browser scripts to load..."),await O(500)}throw new Error(`Failed to load momentic browser scripts on page ${this.url()}`)}async resolveSelectorCombinationInPage(e){if(e.length)try{return await(await this.getUserPageOrFrame()).evaluate(xn,e)}catch(t){t.message.includes("Could not find element in document")||this.logger.debug(`Error checking CSS selector combination: ${t}`);return}}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2)return;let n,o,r,i=[];for(let a=0;a<t.generatedSelectors.length;a++)for(let d=0;d<t.generatedSelectors.length;d++){let m=t.generatedSelectors[a],u=t.generatedSelectors[d];m!==u&&i.push([m,u])}let s=kn();for(let a of i){let d=await this.resolveSelectorCombinationInPage(a);if(!d)continue;let{momenticId:m}=d,u=parseInt(m);if(!t.serializedHtml)continue;let f=await e.evaluate(Rn,u);if(!f)continue;let b=Ln(f,t.serializedHtml)/Math.max(f.length,t.serializedHtml.length);if(b>.15){this.logger.debug({target:t,candidateSerializedHtml:f,levenshteinRatio:b,combo:a},"Rejecting CSS selector due to html ldist");continue}n={a11yNode:void 0,locator:e.locator(a[0]),displayString:f},o=u,r=a;let g=this.dataMomenticIdToNodeMap.get(u);if(!g){this.logger.debug({target:t,proposedNode:n.displayString,selectors:a},"Matched CSS selector successfully using html-only comparison");break}let h=mt(g,t);if(h<6){n=void 0,o=void 0,r=void 0,te({logger:this.logger,logKey:s,maxCount:5,intervalMs:3e3},{target:t,proposedNode:g.getNodeOnlySerializedForm(),comparisonScore:h,combo:a},"Rejecting CSS selector due to a11y score");continue}else n.a11yNode=g;this.logger.debug({target:t,proposedNode:n.displayString,comparisonScore:h,selectors:a},"Matched CSS selector successfully using html + a11y comparison");break}if(n)return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(n.a11yNode,t,o,n.locator),t.generatedSelectors=Array.from(new Set([...r??[],...t.generatedSelectors??[]])),n}async resolveTarget(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target called"),await this.ensureMomenticBrowserScriptsLoaded(),e.id>0&&!St(e)){let i=this.a11yIdToNodeMap.get(e.id);if(!i)throw new G("InternalWebAgentError",`Resolving target failed because id ${e.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);let s=await this.getLocatorFromA11yNode(i);return await this.saveNodeDetailsToCache(i,e,i.dataMomenticId,s),{locator:s,a11yNode:i,displayString:i.getNodeOnlySerializedForm()}}let n=await this.getUserPageOrFrame();if(e.id<0&&e.selector){let i=n.locator(e.selector),s;try{s=await yn(i)}catch(a){throw new Error(`'${e.selector}' failed to resolve: ${a}`)}return{locator:i,a11yNode:void 0,displayString:s}}if(!t){let i=(await this.getBrowserState({skipWait:!0})).serialize();this.logger.debug({tree:i},"Got a11y tree for css resolution")}if(e.generatedSelectors){let i=await this.resolveTargetUsingCssSelectors(n,e);if(i)return i;e.generatedSelectors=void 0}if(!t){let i=(await this.getBrowserState({skipWait:!1})).serialize();this.logger.debug({tree:i},"Got a11y tree for a11y resolution")}if(e.serializedForm){let i=1/0,s,a;for(let d of this.a11yIdToNodeMap.values()){let m=d.getSerializedFormWithContext(),u=Ln(e.serializedForm,m);u<i?(i=u,s=d,a=void 0):u===i&&(a=d)}if(s&&i<Math.ceil(.15*e.serializedForm.length)&&i<50)if(a&&i!==0)this.logger.debug({equalNodeSerialized:a.getSerializedFormWithContext()},"Multiple nodes with same distance, refusing to resolve using levenshtein distance");else{this.logger.debug({newNodeSerializedForm:s.getSerializedFormWithContext(),distance:i,originalLength:e.serializedForm.length,target:e},"Resolved cached a11y target to new node with pure levenshtein distance");let d=await this.getLocatorFromA11yNode(s);return await this.saveNodeDetailsToCache(s,e,s.dataMomenticId,d),{locator:d,a11yNode:s,displayString:s.getNodeOnlySerializedForm()}}else this.logger.debug({closestDistance:i,closestNode:s?.getLogForm()},"No close a11y node found by levenshtein distance")}if(e.nodeOnlySerializedHtml)try{let i=await n.evaluate(In,{serializedHtml:e.nodeOnlySerializedHtml,distanceThreshold:Math.ceil(.15*e.nodeOnlySerializedHtml.length)}),s=parseInt(i.dataMomenticId??""),a=this.dataMomenticIdToNodeMap.get(s);if(a){this.logger.debug({result:i,a11yNode:a.getLogForm(),target:e},"Resolved cached target to new node with pure html levenshtein distance");let d=await this.getLocatorFromA11yNode(a);return await this.saveNodeDetailsToCache(a,e,s,d),{locator:d,a11yNode:a,displayString:a.getNodeOnlySerializedForm()}}else this.logger.debug({result:i},"Failed to find a11y node corresponding to html levenshtein comparison result")}catch(i){this.logger.debug({err:i},"Error finding closest HTML node by levenshtein distance")}let o=e.screenshotUrl,r=e.role??"";if(o&&lt.includes(r))try{return await this.resolveTargetWithScreenshot({screenshotUrl:o,oldTarget:e})}catch(i){this.logger.debug({err:i},"Error finding closest element using saved screenshot")}throw this.logger.debug({target:e},"Failed to find any relevant node"),new Error(`Could not find any relevant node given cached target: ${JSON.stringify(e)}`)}async resolveTargetWithScreenshot({screenshotUrl:e,oldTarget:t}){if(!this.enricher)throw new Error("Enricher not available for screenshot resolution");let n=await this.screenshot({scale:"css"}),r=await(await fetch(e)).arrayBuffer(),i=kn(),s=await this.enricher.runTemplateMatching({searchImageBase64String:Buffer.from(r).toString("base64"),pageImageBase64String:n.toString("base64"),id:i});this.logger.debug({id:i,templateMatch:s},"Template matching result");let{target:a,locator:d}=await this.getTargetFromPositionPercentages({percentX:s.x,percentY:s.y}),m=a.boundingBox?.width,u=a.boundingBox?.height;if(!m||!u)throw new Error("Rejecting target from screenshot due to no bounding box");let f=t.boundingBox?.width??0,b=t.boundingBox?.height??0;if(Math.abs(m-f)>50)throw new Error("Rejecting target from screenshot due to width difference");if(Math.abs(u-b)>50)throw new Error("Rejecting target from screenshot due to height difference");return{locator:d,a11yNode:this.a11yIdToNodeMap.get(a.id),displayString:a.nodeOnlySerializedHtml??""}}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let r=(await this.getBrowserState({})).serialize();this.logger.debug({tree:r},"Got a11y tree for x / y resolution")}let{target:n}=await this.getTargetFromPositionPercentages(e);if((n.generatedSelectors??[]).length>0)return{locator:(await this.getUserPageOrFrame()).locator(n.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(n.id),displayString:n.nodeOnlySerializedHtml??n.nodeOnlySerializedForm??"Unknown element"};let o=this.a11yIdToNodeMap.get(n.id);if(o&&o.dataMomenticId)return{locator:(await this.getUserPageOrFrame()).locator(`[${W}="${o.dataMomenticId}"]`),a11yNode:o,displayString:o.getNodeOnlySerializedForm()};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async typeIntoTarget(e,t,n={}){let o=2;for(;o>0;)try{await t.click({force:n.force,timeout:5e3});break}catch(r){if(o--,o===0)throw r;this.logger.warn({err:r},"Failed clicking on element for type action")}this.highlightTarget(t),await this.type(e,n)}async click(e,t={}){this.highlightTarget(e);let n=this.url(),o=this.getOpenPages(),r=2,i=t.force;for(;r>0;)try{this.logger.debug("Clicking on element with locator"),t.doubleClick?await this.wrapPossibleNavigation(async()=>{await e.dblclick({button:t.rightClick?"right":"left",timeout:5e3,force:i})}):await this.wrapPossibleNavigation(async()=>{let s=await e.getAttribute("target");if(await e.click({button:t.rightClick?"right":"left",timeout:5e3,force:i}),s==="_blank"){let a=Date.now();for(;!this.pageLoadPromise&&Date.now()-a<2e3;)await O(500)}}),this.logger.debug("Click completed on element");break}catch(s){if(r--,r===0)throw s;this.logger.warn({err:s},"Failed clicking on element, retrying with 'disable stability checks' enabled"),i=!0,await O(250)}t.waitForUrl&&await this.waitForUrl(n,t.waitForUrl,o,this.networkSettings.pageLoadTimeoutMs)}async waitForUrl(e,t,n,o=8e3){let i;for(let s=0;s<4;s++){if(i=this.getOpenPages(),i.length!==n.length)for(let a=i.length-1;a>=0;a--){let d=i[a];if(d!==e){await this.switchToPage(d,a);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t,{timeout:Math.min(o/4,500)});break}catch(a){if(s===3)throw a}}}async dragAndDrop(e,t,n={}){let o={timeout:1e4,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await O(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,1e4):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let i=Object.assign({timeout:5e3},r);o&&await o.hover(i);let s=await(await this.getUserPageOrFrame()).evaluate(wn);s||(this.logger.debug("Could not get current mouse position before mouse drag action, defaulting to 0,0"),s={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+s.left,t+s.top,{steps:n}),await O(250),await this.page.mouse.up()}async hover(e,t){this.highlightTarget(e),await e.hover({timeout:5e3,force:t})}async focus(e){this.highlightTarget(e),await e.focus({timeout:5e3})}async blur(e){this.highlightTarget(e),await e.blur({timeout:5e3})}async selectOption(e,t){this.highlightTarget(e);let n={timeout:5e3,force:!1},o=2;for(;o>0;)try{await e.selectOption(t,n),this.logger.debug(`Selected '${t}' from dropdown`);break}catch(r){if(o--,o===0)throw r;this.logger.debug({err:r},"Failed selecting option, retrying with force enabled"),n.force=!0}}async press(e){await this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))}async refresh(e){let t=e?.loadTimeoutMs??this.networkSettings.pageLoadTimeoutMs??8e3,n=async()=>{await this.page.reload({waitUntil:"domcontentloaded",timeout:t});try{await this.page.waitForLoadState("load",{timeout:t})}catch{this.logger.debug({url:this.page.url()},"Timeout elapsed waiting for load state during refresh action, continuing anyways...")}};await this.wrapPossibleNavigation(n,e?.networkIdleTimeoutMs)}async getBrowserStateHelper({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger}){let o=await this.getViewportOffsetDetails(),r;this.activeFrame&&(r=(await this.getMatchingFrame(this.activeFrame)).node.frameId);let i=await this.getRawA11yTree({skipWait:e,iframeId:r,logger:n}),s=await this.getDOMTree(o.devicePixelRatio,r),a=await gn({a11yGraph:i,domGraph:s,logger:n,cdpClient:this.cdpClient,filterByViewport:t,viewportDetails:o});if(!a||!a.root)throw new Error("Accessibility tree appears empty");return this.a11yIdToNodeMap=a.a11yIdNodeMap,this.dataMomenticIdToNodeMap=a.dataMomenticIdMap,this.domGraph=s,a}async getBrowserState(e){let{logger:t=this.logger,maxAttempts:n=2}=e,o=0,r=this.url(),i;for(;o<n;){o++;try{return await gt(this.getBrowserStateHelper(e),{milliseconds:5e3})}catch(s){i=s instanceof Error?s.message:`${s}`,o<n&&(t.debug({err:s,url:r},"Error getting a11y tree, retrying..."),await O(500))}}throw new G("ActionFailureError",`Getting accessibility tree failed after ${n} attempts: ${i}`)}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(){let[e,t,n,o,r]=await(await this.getUserPageOrFrame()).evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:e,lowerBound:e+o,leftBound:t,rightBound:t+n,width:n,height:o,devicePixelRatio:this.systemDevicePixelRatio??r}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(await this.cdpClient.send("DOMSnapshot.enable"),n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:Ue}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await O(250),this.logger.debug({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new G("InternalWebAgentError","Error fetching DOM tree");return fn({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async getRawA11yTree({skipWait:e=!1,iframeId:t=void 0,logger:n=this.logger}){let o=!1;if(!e)try{await(await this.getUserPageOrFrame()).waitForLoadState("domcontentloaded",{timeout:3e3}),o=!0}catch(u){n.debug({err:u},"Failed waiting for domcontentloaded event when getting a11y tree")}let r=Date.now(),i=()=>{r=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",i),this.cdpClient.addListener("DOM.childNodeInserted",i);let s=Date.now(),a=!1;for(;!e&&Date.now()-s<3e3;)if(Date.now()-r>=500){a=!0;break}n.debug({duration:Date.now()-s,domContentLoadReceived:o,a11yStableReceived:a,skipWait:e},"A11y wait phase completed"),await(await this.getUserPageOrFrame()).evaluate(vn);let d;if(t)d=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:t})).node.backendDOMNodeId;else{let{node:u}=await this.cdpClient.send("Accessibility.getRootAXNode");d=u.backendDOMNodeId}let{nodes:m}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:d});if(this.cdpClient.removeListener("Accessibility.nodesUpdated",i),this.cdpClient.removeListener("DOM.childNodeInserted",i),!m||m.length<=1)throw new G("ActionFailureError","No content in accessibility tree");return{root:m[0],allNodes:m}}async clickUsingVisualCoordinates(e,t){let{percentX:n,percentY:o}=e,{width:r,height:i}=await this.getViewportOffsetDetails(),s=Math.ceil(r*n),a=Math.ceil(i*o),d=this.url(),m=this.getOpenPages();this.logger.debug({pixelDeltaX:s,pixelDeltaY:a,width:r,height:i},"Executing mouse click with visual coordinates"),await this.wrapPossibleNavigation(async()=>this.page.mouse.click(s,a,{button:t.rightClick?"right":"left",clickCount:t.doubleClick?2:1})),t.waitForUrl&&await this.waitForUrl(d,t.waitForUrl,m,this.networkSettings.pageLoadTimeoutMs)}async dragAndDropUsingVisualCoordinates(e,t,n){let{percentX:o,percentY:r}=e,{percentX:i,percentY:s}=t,{width:a,height:d}=await this.getViewportOffsetDetails(),m=Math.ceil(a*o),u=Math.ceil(d*r),f=Math.ceil(a*i),b=Math.ceil(d*s);await this.page.mouse.move(m,u),await this.page.mouse.down(),await this.page.mouse.move(f,b),await O(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,1e4):500),await this.page.mouse.up()}async hoverUsingVisualCoordinates(e){let{percentX:t,percentY:n}=e,{width:o,height:r}=await this.getViewportOffsetDetails(),i=Math.ceil(o*t),s=Math.ceil(r*n);await this.page.mouse.move(i,s)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,W);if(!r)throw new Error(`Could not find attribute ${W} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.debug({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${W}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async a=>{let d=await this.getLocatorFromBackendID(a);t.doubleClick?await d.dblclick({timeout:5e3}):await d.click({timeout:5e3,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(a){this.logger.error({err:a},"Failed clicking on node"),o=a,n++,await O(500)}let i=e.parent?.children??[];for(let a of i){if(a.id===e.id)continue;let d=!1,m=mt(a,e);if(e.name&&a.name===e.name?d=!0:m>=5&&(this.logger.debug({similarityScore:m},"Sibling qualified for click redirection through comparison score"),d=!0),!!d)try{return await r(a.backendNodeID),a}catch(u){this.logger.debug({err:u,candidate:a.getLogForm()},"Failed clicking on sibling during click redirection")}}let s=e.parent;for(n=0;n<ln;){if(!s||["rootwebarea","main"].includes(s.role.toLowerCase()))throw new G("ActionFailureError",o.message,{cause:o});if(!s.backendNodeID){s=s.parent;continue}try{return await r(s.id),s}catch(d){this.logger.debug({err:d,candidate:s.getLogForm()},"Failed clicking on parent during click redirection"),n++,s=s.parent}}throw new G("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,i=o.nodes,s=i.nodeName||[],a=i.backendNodeId||[],d=r.nodeIndex,m=r.bounds,u=-1;for(let w=0;w<s.length;w++)if(a[w]===e){u=d.indexOf(w);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[f=0,b=0,g=0,h=0]=m[u];f/=n,b/=n,g/=n,h/=n;let y=f+g/2,C=b+h/2;return{centerX:y,centerY:C}}async scroll(e,t,n,o){let r=t==="left"?-1:1,i=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([a,d,m,u])=>window.scrollTo(window.scrollX+(a??window.innerWidth)*m,window.scrollY+(d??window.innerHeight)*u),[e,n,r,i]);else{let s=this.page.viewportSize()||et;await this.page.mouse.wheel((e??s.width)*r,(n??s.height)*i)}}async scrollUp(e){await this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){await this.wrapPossibleNavigation(async()=>this.page.goForward({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async goBack(){await this.wrapPossibleNavigation(async()=>this.page.goBack({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async changeActivePage(e,t){this.originsVisited.add(new URL(e.url()).origin),this.page=e,this.cdpClient=await l.initCDPSession(this.context,this.page,this.logger,t??this.networkSettings.pageLoadTimeoutMs)}async createNewTab(e,t){let n=await this.context.newPage();await this.changeActivePage(n,t?.loadTimeoutMs),await this.navigate({url:e,initialNavigation:!0,...t})}async switchToPageByIndex(e,t,n){let o=e.url();this.logger.debug(`Switching to tab ${t} with url ${o}`),await this.changeActivePage(e,n?.loadTimeoutMs);try{let r=async()=>{let i=n?.loadTimeoutMs??8e3;await e.waitForLoadState("domcontentloaded",{timeout:i}),await e.waitForLoadState("load",{timeout:i}),this.logger.debug({url:o},"Timeout elapsed waiting for load state, continuing anyways...")};n?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(r,n.networkIdleTimeoutMs):await r()}catch{this.logger.debug({url:o},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}}async switchToPage(e,t,n){let o=this.context.pages();if(t){await this.switchToPageByIndex(o[t],t,n);return}for(let r=0;r<o.length;r++){let i=o[r];if(i.url().includes(e)){await this.switchToPageByIndex(i,r,n);return}}throw new Error(`Could not find page with url containing ${e}`)}async setCookie(e){let t=jt(e);this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:be,method:"turnstile",sitekey:t,pageurl:this.url(),json:1})});if(!n.ok){let i=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},i),new Error(i)}let{request:o}=await n.json(),r=Date.now();for(;Date.now()-r<6e4;){await O(2500);let i=await fetch(`https://2captcha.com/res.php?key=${be}&action=get&id=${o}&json=1`,{method:"GET"});if(!i.ok){let a=`Captcha solution API returned error response: ${i.statusText}`;throw this.logger.error({text:await i.text()},a),new Error(a)}if((await i.json()).status===1)break}}async solveCaptcha(){await this.getBrowserState({});let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=await this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:5e3}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:be,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{taskId:o}=await n.json(),r=Date.now(),i="";for(;Date.now()-r<6e4;){await O(2500);let s=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:be,taskId:o})});if(!s.ok){let d=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},d),new Error(d)}let a=await s.json();if(a.errorId){let d=`Captcha solution API returned error ID ${a.errorId}`;throw this.logger.error(d),new Error(d)}if(a.status==="ready"){i=a.solution.text;break}}if(!i)throw new Error("Captcha solution timed out");return i}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=await this.getBrowserState({skipWait:!0});this.mostRecentA11yTree=e,this.logger.debug({tree:this.mostRecentA11yTree},"Refreshed a11y tree before target capture");let t=!1,n=setInterval(()=>{(async()=>{if(!t){t=!0;try{this.mostRecentA11yTree=await this.getBrowserState({skipWait:!0,maxAttempts:1,logger:Pe}),Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(a){this.logger.debug({err:a},"Failed to get a11y tree in target capture click handler")}finally{t=!1}}})()},at),o=[];try{o=await(await this.getUserPageOrFrame()).evaluate(async()=>{let s=window,a=null;s.targetCaptureClickListener=async u=>{console.log("[Momentic] Target capture listener fired"),u.preventDefault(),a=u.target},document.addEventListener("click",s.targetCaptureClickListener,{capture:!0,once:!0});let d=15e3;for(;!a&&d>0;)await new Promise(u=>setTimeout(u,100)),d-=100;if(!a)throw new Error("Timed out waiting for user to click on an element");let m=a;return[m.getAttribute(W),m.parentElement?.getAttribute(W),m.parentElement?.parentElement?.getAttribute(W)].filter(u=>!!u)})}catch(s){throw new Error(`Failed to capture: ${s.message}`)}finally{clearInterval(n)}if(!o.length)throw new Error("Selected element did not have Momentic handlers attached - if it appeared recently, please wait for the page to stabilize before clicking");let r;for(let s of o)if(r=this.getA11yIdFromDataMomenticId(parseInt(s)),r)break;if(!r)throw new Error("Selected element is not interactive - please try a neighboring or parent element instead");let i={id:r};return await this.resolveTarget(i,!0),i}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,i=o.width??0,s=o.height??0,a=r+i,d=o.y??0,m=d+(o.height??0),u=t.bounds,f=u.width??0,b=u.height??0,g=u.x??0,h=g+(u.width??0),y=u.y??0,C=y+(u.height??0);return g<a&&h>r&&y<m&&C>d?Math.abs(i-f)<200&&Math.abs(s-b)<200?!0:(te({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(te({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=mr();for(let d of n)if(d.attributes?.[W]===e){o=d;break}if(!o)return[];let i=[],s=t.backendIdToNode[o.parentBackendNodeId??-1];for(;s&&(s?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,s,r));)s=t.backendIdToNode[s.parentBackendNodeId??-1];s&&i.push(s);let a=[o];for(;a.length;){let d=a.shift();for(let m of d.children??[]){let u=t.backendIdToNode[m];u&&!u.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,u,r)?i.push(u):u&&a.push(u)}}return i}async exposeRecordingBindings(){let e=({frame:t},n,o)=>{if(!this.transformer)return;this.logger.debug({dataMomenticId:n,htmlAttributes:o},"Click captured on element");let r=this.domGraph,i=this.dataMomenticIdToNodeMap,s=this.mostRecentA11yTree,a=t.url(),d,m,u=i.get(n),f=[];if(u)d={id:u.id,...o};else{f=this.getDomCandidatesInA11yTree(`${n}`,r);for(let b of f){let g=parseInt(b.attributes?.[W]??"");if(isNaN(g))continue;let h=i.get(g);if(!h){this.logger.debug({candidate:b},"Candidate DOM node doesn't exist in the a11y tree");continue}u=h,m=h.id,d={id:m,...o},this.logger.debug({newNode:u?.getLogForm()},"Redirected click on non-accessible element to nearest a11y node");break}}(!u||!d)&&(this.logger.debug({url:a,htmlAttributes:o,a11yIntersectionNodes:f},"Could not find corresponding accessibility node for click, continuing with HTML attributes only"),d={id:-1,...o}),(async()=>{if(!this.transformer){this.logger.debug("No click translation since transformer is not initialized anymore");return}this.logger.debug({target:d,url:a},"Generating description for clicked target");let b=s.serialize();if(u){let g=b.indexOf(`id="${u.id}"`);b=b.slice(0,g+1e3),b.length>3e4&&(b=s.pruneUsingRelevantIds(new Set([u.id])).serialize())}try{await this.transformer.recordClick({target:d,browserState:b,url:a})}catch(g){this.logger.error({err:g,location:"transformer"},"Failed to record click action")}})()};await this.context.exposeBinding("captureClick",({frame:t},n,o)=>{try{e({frame:t},n,o)}catch(r){this.logger.error({err:r},"Failed to capture click action")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},{key:t,url:n})=>{this.transformer&&(this.logger.debug({key:t},"Captured keypress"),this.transformer.recordKeystroke(t,n))})}async startRecording(e,t){this.logger.debug("Starting passive recording mode in Chrome browser"),this.transformer=t;let n=await this.getBrowserState({skipWait:!0});this.mostRecentA11yTree=n;let o,r=[async()=>{this.transformer=void 0}];(()=>{if(o)return;let s=!1,a=async()=>{if(!s){s=!0;try{let d=await this.getBrowserState({skipWait:!0,maxAttempts:1,logger:Pe});this.mostRecentA11yTree=d,Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(d){this.logger.debug({err:d},"Failed to get a11y tree in frame navigation listener")}s=!1}};o=setInterval(()=>{!this.transformer||e.aborted||a()},at),r.push(async()=>{clearInterval(o),o=void 0})})(),e.addEventListener("abort",async()=>{for(let s of r)try{await s()}catch(a){this.logger.debug({err:a},"Recording cleanup function failed, continuing...")}})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value),{timeout:1e3})}async getCondensedHtml(){let e=await this.getUserPageOrFrame();await this.ensureMomenticBrowserScriptsLoaded();let t=await e.evaluate(()=>window.getCondensedHtmlTree?.(),{timeout:1e3});if(!t)throw new G("InternalWebAgentError","Empty HTML tree");return gr.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:80})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages({percentX:e,percentY:t}){if(e<0||e>1||t<0||t>1)throw new G("InternalWebAgentError","Invalid percent passed to percentage location");let{width:n,height:o,upperBound:r,leftBound:i}=await this.getViewportOffsetDetails(),s=Math.ceil(n*e),a=Math.ceil(o*t);await this.cdpClient.send("DOM.getDocument",{depth:0});let d;try{d=await this.cdpClient.send("DOM.getNodeForLocation",{x:s+i,y:a+r})}catch{throw new Error("No element was found at the given location")}return d}async highlightFromPositionPercentages(e){let t;try{t=await this.getDomNodeFromPositionPercentages(e)}catch{}return t?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:Be,backendNodeId:t.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:t?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getDomNodeFromPositionPercentages(e),n=this.domGraph?.backendIdToNode[t.backendNodeId],o=n?.attributes[W],r=parseInt(o??"");if(!n||!o||isNaN(r))throw new Error("No HTML node was found at the given location");let i=await this.getUserPageOrFrame(),s=i.locator(`[${W}="${o}"]`);for(let u of this.a11yIdToNodeMap.values()){if(u.backendNodeID!==t.backendNodeId)continue;let f={id:u.id};return await this.saveNodeDetailsToCache(u,f,parseInt(o),s),{target:f,locator:s}}let a=this.getDomCandidatesInA11yTree(`${o}`,this.domGraph);for(let u of a){let f=parseInt(u.attributes?.[W]??"");if(isNaN(f))continue;let b=i.locator(`[${W}="${f}"]`),g=this.dataMomenticIdToNodeMap.get(f),h=g?.id;if(!h)continue;let y={id:h};return await this.saveNodeDetailsToCache(g,y,parseInt(o),b),this.logger.debug({target:y},"Redirected click on non-accessible element to nearest a11y node"),{target:y,locator:b}}return{target:{id:-1,...await this.fetchHtmlAttributes(r)},locator:s}}async fetchHtmlAttributes(e,t){t=t??await this.getUserPageOrFrame();let n=await t.evaluate(o=>{let r=window;if(!r.generateHtmlCacheAttributes)throw new Error("generateHtmlCacheAttributes is not defined on the window object");return r.generateHtmlCacheAttributes(o)},e);return this.logger.debug(n,"Generated HTML attributes for target"),n}async toggleInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:{showInfo:!0,showAccessibilityInfo:!0,contentColor:{r:147,g:196,b:125,a:.55}}})}async moveMouseFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:o,height:r}=n,i=Math.ceil(o*e),s=Math.ceil(r*t);await this.page.mouse.move(i,s,{steps:3})}async scrollFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:o,height:r}=n,i=Math.ceil(o*e),s=Math.ceil(r*t);return await this.page.mouse.wheel(i,s),{deltaX:i,deltaY:s}}async startInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:Be})}async stopInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"none",highlightConfig:Be}),await this.clearAllCdpHighlights()}canSolveCaptchas(){return!!be}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames(),n=(await Promise.all(t.map(async r=>{try{return(await r.frameElement()).evaluate(a=>"src"in a?a.getAttribute("src"):null)}catch{return null}}))).filter(r=>r!==null&&r!=="about:blank"&&r!==e);return Array.from(new Set(n))}async setFileChooserHandler(e){this.page.once("filechooser",async n=>{this.logger.debug({filePath:e},"File chooser triggered"),await n.setFiles(e,{timeout:1e4})});let t=pr(e).toString("base64");await(await this.getUserPageOrFrame()).evaluate(({fileName:n,base64Data:o})=>{let r=window;r.MomenticFile=class{async getFile(){let i=atob(o),s=new Array(i.length);for(let m=0;m<i.length;m++)s[m]=i.charCodeAt(m);let a=new Uint8Array(s),d=new Blob([a]);return new File([d],n)}},r.showOpenFilePicker=async()=>[new r.MomenticFile]},{fileName:yr(e),base64Data:t}),setTimeout(()=>{try{hr(e,{force:!0})}catch(n){this.logger.debug({err:n,filePath:e},"Failed cleaning up file after upload")}},3e4)}};var Ar={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},xr=Ar;import{z as Nr}from"zod";import Rr from"fetch-retry";var Ir=Rr(global.fetch),$=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await Ir(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var bt=class extends ${constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${$.API_VERSION}/web-agent/recommend-chunks`,e);return tn.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${$.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return Nr.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/locate-element`,{...e,disableCache:t});return Qt.parse(n)}async getAssertionResult(e,t){let n={...e,disableCache:t},o=await this.sendRequest(`/${$.API_VERSION}/web-agent/assertion`,n);return Jt.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,screenshot:e.screenshot,disableCache:t});return Kt.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t});return Zt.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${$.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t});return en.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:t},o=await this.sendRequest(`/${$.API_VERSION}/web-agent/text-extraction`,n);return Qe.parse(o)}async getTestResultClassification(e){let t=await this.sendRequest(`/${$.API_VERSION}/web-agent/result-classification`,e);return Je.parse(t)}};export{bt as APIGenerator,yt as ChromeBrowser,oe as CommandType,xr as DEFAULT_CONTROLLER_CONFIG,ge as StepType};
