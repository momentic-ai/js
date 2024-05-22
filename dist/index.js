import _n from"dedent";import{v4 as kn}from"uuid";import*as a from"zod";import*as z from"zod";var ae=z.object({id:z.number().int(),selector:z.string().optional(),generatedSelectors:z.string().array().optional(),role:z.string().optional(),name:z.string().optional(),numChildren:z.number().optional(),content:z.string().optional(),pathFromRoot:z.string().optional(),serializedForm:z.string().optional(),nodeOnlySerializedForm:z.string().optional(),serializedHtml:z.string().optional().describe("pruned html including 1 neighbor and 1 layer of children. value for text inputs pruned."),nodeOnlySerializedHtml:z.string().optional().describe("outerHtml of the element without any children. value for text inputs pruned.")});function bt(i){return!!(i.name||i.role||i.content||i.serializedForm)}var X=(E=>(E.AI_EXTRACT="AI_EXTRACT",E.AI_ASSERTION="AI_ASSERTION",E.AI_WAIT="AI_WAIT",E.BLUR="BLUR",E.CAPTCHA="CAPTCHA",E.CLICK="CLICK",E.COOKIE="COOKIE",E.DIALOG="DIALOG",E.DRAG="DRAG",E.FILE_UPLOAD="FILE_UPLOAD",E.FOCUS="FOCUS",E.GO_BACK="GO_BACK",E.GO_FORWARD="GO_FORWARD",E.HOVER="HOVER",E.JAVASCRIPT="JAVASCRIPT",E.LOCAL_STORAGE="LOCAL_STORAGE",E.MOUSE_DRAG="MOUSE_DRAG",E.NAVIGATE="NAVIGATE",E.NEW_TAB="NEW_TAB",E.PRESS="PRESS",E.REFRESH="REFRESH",E.REQUEST="REQUEST",E.SCROLL_DOWN="SCROLL_DOWN",E.SCROLL_UP="SCROLL_UP",E.SCROLL_LEFT="SCROLL_LEFT",E.SCROLL_RIGHT="SCROLL_RIGHT",E.SELECT_OPTION="SELECT_OPTION",E.TAB="TAB",E.TYPE="TYPE",E.VISUAL_DIFF="VISUAL_DIFF",E.WAIT="WAIT",E.SUCCESS="SUCCESS",E))(X||{}),zn=a.object({percentX:a.number(),percentY:a.number()}),P=a.object({elementDescriptor:a.string(),percentXYLocation:zn.optional(),a11yData:ae.optional().describe("DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field")});var A=a.object({thoughts:a.string().optional(),id:a.string().default(()=>kn()).describe("unique identifier to this step, used for step cache")}),q=a.object({useVision:a.boolean().default(!1),filterByViewport:a.boolean().default(!1),useSelector:a.boolean().default(!1),useXY:a.boolean().default(!1),disableCache:a.boolean().default(!1).describe("disable element caching for this step"),iframeUrl:a.string().optional().describe("url or url regex for the iframe")}),Z=a.object({target:ae}).optional(),Ae=a.object({loadTimeout:a.number().int().max(60).optional().describe("Max seconds for the page to load"),networkTimeout:a.number().int().max(60).optional().describe("How many seconds to wait for network idle after navigation")}),Dn=A.merge(Ae).merge(a.object({type:a.literal("NAVIGATE"),url:a.string()})).describe("NAVIGATE <URL> - Go to the specified fully qualified URL. Only navigate to URLs relevant to the user goal."),Ie=q.merge(a.object({cache:Z})),He=A.merge(Ie.merge(a.object({target:P.optional(),type:a.literal("SCROLL_UP"),deltaY:a.number().optional()}))).describe("SCROLL_UP [id] - Scroll up one entire page height. Optionally, provide an id to focus the element with the specified id before scrolling."),$e=A.merge(Ie.merge(a.object({target:P.optional(),type:a.literal("SCROLL_DOWN"),deltaY:a.number().optional()}))).describe("SCROLL_DOWN [id] - Scroll down by one entire page height. Optionally, provide an id to focus the element with the specified id before scrolling."),je=A.merge(Ie.merge(a.object({target:P.optional(),type:a.literal("SCROLL_LEFT"),deltaX:a.number().optional()}))).describe("SCROLL_LEFT [id] - Scroll to the left by one page width. Optionally, provide an id to focus the element with the specified id before scrolling."),Ge=A.merge(Ie.merge(a.object({target:P.optional(),type:a.literal("SCROLL_RIGHT"),deltaX:a.number().optional()}))).describe("SCROLL_RIGHT [id] - Scroll to the right by one page width. Optionally, provide an id to focus the element with the specified id before scrolling."),Lr=a.discriminatedUnion("type",[He,$e,je,Ge]),Pn=A.merge(a.object({type:a.literal("DIALOG"),action:a.union([a.literal("ACCEPT"),a.literal("DISMISS")])})),Fn=A.merge(a.object({type:a.literal("WAIT"),delay:a.number()})),Un=A.merge(Ae).merge(a.object({type:a.literal("REFRESH")})),Wn=A.merge(a.object({type:a.literal("GO_BACK")})),Bn=A.merge(a.object({type:a.literal("GO_FORWARD")})),Hn=A.merge(q).merge(a.object({type:a.literal("CAPTCHA")})),$n=A.merge(a.object({type:a.literal("JAVASCRIPT"),code:a.string(),fragment:a.boolean().default(!1),envKey:a.string().optional(),environment:a.union([a.literal("NODE"),a.literal("BROWSER")]).default("NODE"),timeout:a.number().int().max(60).optional().describe("Max seconds for the code to complete")})),St=A.merge(q).merge(a.object({type:a.literal("CLICK"),target:P,doubleClick:a.boolean().default(!1),rightClick:a.boolean().default(!1),waitForUrl:a.string().optional().describe("call playwright waitForURL after click"),force:a.boolean().default(!1),cache:Z})).describe(_n`CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled or hidden elements.
  Only click on elements on the Current Page.
  You should try to click on relevant elements with the following tag names: button, input, link, image.
  As a last resort, you may click on relevant generic elements.
  `.replaceAll(`
`," ")),wt=A.merge(q).merge(a.object({type:a.literal("DRAG"),fromTarget:P,toTarget:P,force:a.boolean().default(!1),hoverSeconds:a.number().optional().describe("Seconds to hover the object before dropping"),cache:a.object({fromTarget:ae.optional(),toTarget:ae.optional()}).optional()})),vt=A.merge(q).merge(a.object({type:a.literal("MOUSE_DRAG"),target:P.optional(),force:a.boolean().default(!1),deltaX:a.string().describe("pixels to move horizontally, can be template"),deltaY:a.string().describe("pixels to move vertically, can be template"),steps:a.number().default(1),cache:Z})),Tt=A.merge(q).merge(a.object({type:a.literal("HOVER"),target:P,force:a.boolean().default(!1),cache:Z})),Ct=A.merge(q).merge(a.object({type:a.literal("FOCUS"),target:P,cache:Z})),Et=A.merge(q).merge(a.object({type:a.literal("BLUR"),target:P,cache:Z})),jn=A.merge(a.object({type:a.literal("FILE_UPLOAD"),fileSource:a.discriminatedUnion("type",[a.object({type:a.literal("URL"),url:a.string()}).describe("Publicly accessible link to the file")])})),At=A.merge(q.omit({useVision:!0})).merge(a.object({type:a.literal("SELECT_OPTION"),target:P,filterByViewport:a.boolean().default(!1),useSelector:a.boolean().default(!1),option:a.string(),cache:Z})).describe(`SELECT_OPTION <id> "<option>" - select an option from a dropdown-type element on the page. Provide the "id" of the dropdown element in the <id> argument and the "name" of the option to be selected in the <option> argument enclosed by single quotes. ONLY use this command to interact with combobox, listbox, or menu elements. For other element types, use CLICK. For example, to select Option 2 from <combobox id="24">
  <menuitem name="Option 1" />
  <menuitem id="26" name="Option 2" />
</combobox>, output SELECT_OPTION 24 'Option 2'`),Ve=A.merge(a.object({type:a.literal("AI_ASSERTION"),assertion:a.string(),useVision:a.boolean().default(!1),filterByViewport:a.boolean().default(!1),cancelOnFailure:a.boolean().default(!1),disableCache:a.boolean().default(!1).describe("disable AI caching for this step"),iframeUrl:a.string().optional().describe("url or url regex for the iframe")})).describe('ASSERT "phrase" <use-vision> - make an assertion about the state of the page. If <use-vision> is set to false, the state must be verifiable through the HTML on the page. Else, it must be verifiable through a screenshot of the page. This commands runs instantaneously.'),Gn=Ve.merge(a.object({type:a.literal("AI_WAIT"),timeout:a.number().int().optional().describe("Max seconds to wait for assertion to be true")})).describe('WAIT_UNTIL "phrase" <use-vision> <timeout> - Wait for up to <timeout> seconds until the phrase is true. This command accepts the same options as ASSERT.'),Vn=A.merge(a.object({type:a.literal("AI_EXTRACT"),goal:a.string(),schema:a.string().optional(),envKey:a.string().optional(),disableCache:a.boolean().default(!1).describe("disable AI caching for this step")})),qn=a.object({clearContent:a.boolean().default(!0),pressKeysSequentially:a.boolean().default(!1),force:a.boolean().default(!1)}),It=A.merge(q).merge(a.object({type:a.literal("TYPE"),target:P.optional(),value:a.string(),pressEnter:a.boolean().default(!1),cache:Z})).merge(qn).describe('TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.'),Yn=A.merge(a.object({type:a.literal("PRESS"),value:a.string()})).describe('PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key. Do not provide key codes; only use key names supported by the Playwright press method.'),Xn=A.merge(Ae).merge(a.object({type:a.literal("TAB"),url:a.string()})),Kn=A.merge(Ae).merge(a.object({type:a.literal("NEW_TAB"),url:a.string()})),Jn=A.merge(a.object({type:a.literal("COOKIE"),value:a.string()})),Qn=A.merge(a.object({type:a.literal("LOCAL_STORAGE"),key:a.string(),value:a.string()})),Zn=A.merge(a.object({type:a.literal("REQUEST"),url:a.string(),method:a.union([a.literal("GET"),a.literal("POST"),a.literal("PUT"),a.literal("DELETE"),a.literal("PATCH")]),headers:a.record(a.string(),a.string()).optional(),params:a.record(a.string(),a.string()).optional(),body:a.string().optional(),timeout:a.number().int().optional().describe("Max seconds to wait for the request to complete")})),eo=A.merge(a.object({type:a.literal("SUCCESS"),condition:Ve.optional()})).describe("SUCCESS - the user goal has been successfully achieved"),to=A.merge(a.object({type:a.literal("FAILURE")})).describe("FAILURE - there are no commands to suggest that could make progress that have not already been tried before"),no=a.object({data:a.string().describe("s3 url to a jpg"),width:a.number(),height:a.number()}),xt=A.merge(q).merge(a.object({type:a.literal("VISUAL_DIFF"),threshold:a.number().default(.1),target:P.optional(),screenshot:no.optional(),cache:Z})),se=a.discriminatedUnion("type",[St,It,Yn,At,Dn,$e,He,Ve,Gn,eo]);se.options.forEach(i=>{if(!i.description)throw new Error("All UserEditableAICommandSchema options must have a description")});var oo=a.discriminatedUnion("type",[Hn,Jn,Pn,wt,Vn,jn,Wn,Bn,Tt,$n,Qn,vt,Kn,Un,Zn,je,Ge,Xn,xt,Fn,Ct,Et]),qe=a.discriminatedUnion("type",[...se.options,...oo.options]),Ye=a.discriminatedUnion("type",[...se.options,to]);var B={type:!0,cache:!0},Xe=a.discriminatedUnion("type",[St.pick(B),wt.pick(B),vt.pick(B),Tt.pick(B),Ct.pick(B),Et.pick(B),He.pick(B),$e.pick(B),je.pick(B),Ge.pick(B),At.pick(B),It.pick(B),xt.pick(B)]),Rt=Object.values(X).filter(i=>Xe.options.some(e=>e.shape.type.safeParse(i).success));qe.options.forEach(i=>{if("target"in i.shape&&!Rt.includes(i.shape.type.value))throw new Error(`Command ${i.shape.type.value} has a target but no cache`)});import{cloneDeep as zr,unset as Dr}from"lodash-es";import{v4 as Nt}from"uuid";import*as S from"zod";var le=(n=>(n.AI_ACTION="AI_ACTION",n.PRESET_ACTION="PRESET_ACTION",n.MODULE="MODULE",n))(le||{}),fe=S.object({type:S.literal("AI_ACTION"),text:S.string(),commands:S.array(se).optional(),skipped:S.boolean().optional()}),ye=S.object({type:S.literal("PRESET_ACTION"),command:qe,skipped:S.boolean().optional()}),Ke=S.object({id:S.string().describe("ID of the module step itself. Used to 'namespace' step cache entries.").default(()=>Nt()),type:S.literal("MODULE"),moduleId:S.string().uuid(),inputs:S.record(S.string()).optional(),skipped:S.boolean().optional()}),be=S.union([fe,ye]),xe=S.object({moduleId:S.string().uuid(),name:S.string(),parameters:S.string().array().optional(),steps:be.array(),skipped:S.boolean().optional()}),ro=xe.merge(S.object({type:S.literal("RESOLVED_MODULE"),inputs:S.record(S.string()).optional().describe("input params from test"),id:S.string().default(()=>Nt()).describe("id for the module step itself")})),Re=S.union([fe,ye,Ke]),Se=S.union([fe,ye,ro]);var Je=S.object({key:S.string(),testId:S.string().optional(),moduleId:S.string().optional(),organizationId:S.string(),value:Xe}),io=S.record(Je);var we={vimiumJs:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&H(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&H(t,n,e[n]);return t};var g=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(F=>Object.assign(F,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,F]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&F!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var I=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[Momentic] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=I;\n',vimiumCss:'.vimiumReset,a.vimiumReset,a:hover.vimiumReset,a:link.vimiumReset,a:visited.vimiumReset,div.vimiumReset,span.vimiumReset,table.vimiumReset,td.vimiumReset,tr.vimiumReset{background:none;border:none;bottom:auto;box-shadow:none;color:#000;cursor:auto;display:inline;float:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:inherit;font-style:normal;font-variant:normal;font-weight:400;height:auto;left:auto;letter-spacing:0;line-height:100%;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;white-space:normal;width:auto;z-index:2140000000}tbody.vimiumReset,thead.vimiumReset{display:table-header-group}tbody.vimiumReset{display:table-row-group}div.internalVimiumHintMarker{background:linear-gradient(180deg,#fff785 0,#ffc542);border:1px solid #c38a22;border-radius:3px;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);display:block;font-size:11px;left:-1px;overflow:hidden;padding:1px 3px 0;position:absolute;top:-1px;white-space:nowrap}div.internalVimiumHintMarker span{color:#302505;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;text-shadow:0 1px 0 hsla(0,0%,100%,.6)}div.internalVimiumHintMarker>.matchingCharacter{color:#d4ac3a}div>.vimiumActiveHintMarker span{color:#a07555!important}div.internalVimiumInputHint{background-color:rgba(255,247,133,.3);border:1px solid #c38a22;display:block;pointer-events:none;position:absolute}div.internalVimiumSelectedInputHint{background-color:hsla(0,100%,70%,.3);border:1px solid #933!important}div.internalVimiumSelectedInputHint span{color:#fff!important}div.vimiumHighlightedFrame{border:5px solid #ff0;box-sizing:border-box;margin:0;pointer-events:none}div.vimiumHighlightedFrame,iframe.vimiumHelpDialogFrame{height:100%;left:0;padding:0;position:fixed;top:0;width:100%}iframe.vimiumHelpDialogFrame{background-color:hsla(0,0%,4%,.6);border:none;display:block;z-index:2139999997}div#vimiumHelpDialogContainer{background-color:#fff;border:2px solid #b3b3b3;border-radius:6px;margin:50px auto;max-height:calc(100% - 100px);max-width:calc(100% - 100px);opacity:1;overflow-x:auto;overflow-y:auto;width:840px}div#vimiumHelpDialog{min-width:600px;padding:8px 12px}span#vimiumTitle,span#vimiumTitle *,span#vimiumTitle span{font-size:20px}#vimiumTitle{display:block;line-height:130%;white-space:nowrap}td.vimiumHelpDialogTopButtons{text-align:right;width:100%}#helpDialogOptionsPage,#helpDialogWikiPage{font-size:14px;padding-left:5px;padding-right:5px}div.vimiumColumn{float:left;font-size:11px;line-height:130%;width:50%}div.vimiumColumn tr{display:table-row}div.vimiumColumn td{display:table-cell;font-size:11px;line-height:130%}div.vimiumColumn table,div.vimiumColumn td,div.vimiumColumn tr{margin:0;padding:0}div.vimiumColumn table{table-layout:auto;width:100%}div.vimiumColumn td{padding:1px;vertical-align:top}div#vimiumHelpDialog div.vimiumColumn tr>td:first-of-type{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;text-align:right;white-space:nowrap}span.vimiumHelpDialogKey{background-color:#f3f3f3;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb;color:#212121;font-family:monospace;font-size:11px;margin-left:2px;padding:1px 4px}div#vimiumHelpDialog div.vimiumColumn tr>td:nth-of-type(3){width:100%}div#vimiumHelpDialog div.vimiumDivider{background-color:#9a9a9a;display:block;height:1px;margin:10px auto;width:100%}div#vimiumHelpDialog td.vimiumHelpSectionTitle{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;padding-top:3px}div#vimiumHelpDialog td.vimiumHelpDescription{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}div#vimiumHelpDialog span.vimiumCopyCommandNameName{cursor:pointer;font-size:12px;font-style:italic}div#vimiumHelpDialog tr.advanced{display:none}div#vimiumHelpDialog.showAdvanced tr.advanced{display:table-row}div#vimiumHelpDialog div.advanced td:nth-of-type(3){color:#555}div#vimiumHelpDialog a.closeButton{color:#555;cursor:pointer;font-family:courier new;font-size:24px;font-weight:700;padding-left:5px;position:relative;text-decoration:none;top:3px}div#vimiumHelpDialog a{text-decoration:underline}div#vimiumHelpDialog a.closeButton:hover{color:#000;-webkit-user-select:none}div#vimiumHelpDialogFooter{display:block;margin-bottom:37px;position:relative}table.helpDialogBottom{width:100%}td.helpDialogBottomRight{float:right;text-align:right;width:100%}td.helpDialogBottomLeft,td.helpDialogBottomRight{padding:0}div#vimiumHelpDialogFooter *{font-size:10px}a#toggleAdvancedCommands,span#help-dialog-tip{font-size:10px;position:relative;top:19px;white-space:nowrap}a#toggleAdvancedCommands,a:active.vimiumHelDialogLink,a:hover.vimiumHelDialogLink,a:link.vimiumHelDialogLink,a:visited.vimiumHelDialogLink{color:#2f508e;cursor:pointer;text-decoration:underline}div.vimiumHUD{background:#f1f1f1;border:1px solid #aaa;border-radius:4px;bottom:8px;box-shadow:0 2px 10px rgba(0,0,0,.8);display:block;left:8px;position:fixed;text-align:left;width:calc(100% - 20px);z-index:2139999999}iframe.vimiumHUDFrame{background-color:transparent;border:none;bottom:-14px;display:block;height:58px;margin:0 0 0 -40%;min-width:300px;opacity:0;overflow:hidden;padding:0;position:fixed;right:20px;width:20%;z-index:2139999998}div.vimiumHUD .vimiumHUDSearchArea{background-color:#f1f1f1;border-radius:4px 4px 0 0;display:block;padding:3px}div.vimiumHUD .vimiumHUDSearchAreaInner{border-radius:3px;box-sizing:border-box;color:#777;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;height:30px;line-height:20px;margin-bottom:0;outline:none;padding:2px 4px;width:100%}div.vimiumHUD .hud-find{background:#fff;border:1px solid #ccc}div.vimiumHUD span#hud-find-input,div.vimiumHUD span#hud-match-count{color:#000;display:inline;outline:none;overflow-y:hidden;white-space:nowrap}div.vimiumHUD span#hud-find-input:before{content:"/"}div.vimiumHUD span#hud-match-count{color:#aaa;font-size:12px}div.vimiumHUD span#hud-find-input br{display:none}div.vimiumHUD span#hud-find-input *{display:inline;white-space:nowrap}body.vimiumFindMode ::selection{background:#ff9632}iframe.vomnibarFrame{background-color:transparent;border:none;display:block;font-family:sans-serif;height:calc(100% - 70px);left:50%;margin:0 0 0 -40%;min-width:400px;overflow:hidden;padding:0;position:fixed;top:70px;width:calc(80% + 20px);z-index:2139999998}div.vimiumFlash{background-color:transparent;box-shadow:0 0 4px 2px #4183c4;padding:1px;position:absolute;z-index:2140000000}iframe.vimiumUIComponentHidden{display:none}iframe.vimiumUIComponentVisible{color-scheme:light dark;display:block}iframe.vimiumUIComponentReactivated{border:5px solid #ff0}iframe.vimiumNonClickable{pointer-events:none}@media (prefers-color-scheme:dark){iframe.reverseDarkReaderFilter{-webkit-filter:invert(100%) hue-rotate(180deg)!important;filter:invert(100%) hue-rotate(180deg)!important}body.vimiumBody{background-color:#292a2d;color:#fff}body.vimiumBody a,body.vimiumBody a:visited{color:#8ab4f8}body.vimiumBody input,body.vimiumBody textarea{background-color:#1d1d1f;border-color:#1d1d1f;color:#e8eaed}body.vimiumBody div.example{color:#9aa0a6}body.vimiumBody div#footer,body.vimiumBody div#state,div#vimiumHelpDialogContainer{background-color:#202124;border-color:hsla(0,0%,100%,.1)}div#vimiumHelpDialog{background-color:#292a2d;color:#fff}div#vimiumHelpDialog td.vimiumHelpDescription{color:#c9cccf}div#vimiumHelpDialog td.vimiumHelpSectionTitle,span#vimiumTitle{color:#fff}#vimiumTitle>span:first-child{color:#8ab4f8!important}div#vimiumHelpDialog a{color:#8ab4f8}div#vimiumHelpDialog div.vimiumDivider{background-color:hsla(0,0%,100%,.1)}span.vimiumHelpDialogKey{background-color:#1d1d1f;border:1px solid #000;box-shadow:none;color:#fff}}',htmlUtilsLibJs:`var __defProp = Object.defineProperty;
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
`,cssGeneratorLibJs:'// Taken from https://cdn.jsdelivr.net/npm/css-selector-generator@3.6.7/build/index.min.js\n!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return t&&t instanceof Element}t.r(e),t.d(e,{default:()=>K,getCssSelector:()=>J});const r={NONE:"",DESCENDANT:" ",CHILD:" > "},o={id:"id",class:"class",tag:"tag",attribute:"attribute",nthchild:"nthchild",nthoftype:"nthoftype"},i="CssSelectorGenerator";function c(t="unknown problem",...e){console.warn(`${i}: ${t}`,...e)}const u={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function a(t){return["string","function"].includes(typeof t)||s(t)}function l(t){return Array.isArray(t)?t.filter(a):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||c("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element\'s real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&c("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function m(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function p(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function h(t){return[].concat(...t)}function g(t){const e=t.map((t=>{if(s(t))return e=>t.test(e);if("function"==typeof t)return e=>{const n=t(e);return"boolean"!=typeof n?(c("pattern matcher function invalid","Provided pattern matching function does not return boolean. It\'s result will be ignored.",t),!1):n};if("string"==typeof t){const e=new RegExp("^"+t.replace(/[|\\\\{}()[\\]^$+?.]/g,"\\\\$&").replace(/\\*/g,".+")+"$");return t=>e.test(t)}return c("pattern matcher invalid","Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",t),()=>!1}));return t=>e.some((e=>e(t)))}function b(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function y(t,e){e=null!=e?e:function(t){return t.ownerDocument.querySelector(":root")}(t);const r=[];let o=t;for(;n(o)&&o!==e;)r.push(o),o=o.parentElement;return r}function N(t,e){return p(t.map((t=>y(t,e))))}const S=", ",E=new RegExp(["^$","\\\\s"].join("|")),w=new RegExp(["^$"].join("|")),I=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild],v=g(["class","id","ng-*"]);function C({name:t}){return`[${t}]`}function T({name:t,value:e}){return`[${t}=\'${e}\']`}function O({nodeName:t,nodeValue:e}){return{name:V(t),value:V(e)}}function x(t){const e=Array.from(t.attributes).filter((e=>function({nodeName:t},e){const n=e.tagName.toLowerCase();return!(["input","option"].includes(n)&&"value"===t||v(t))}(e,t))).map(O);return[...e.map(C),...e.map(T)]}function j(t){return(t.getAttribute("class")||"").trim().split(/\\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function A(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!E.test(e)&&b([t],n,r)?[n]:[]}function $(t){const e=t.parentNode;if(e){const r=Array.from(e.childNodes).filter(n).indexOf(t);if(r>-1)return[`:nth-child(${r+1})`]}return[]}function D(t){return[V(t.tagName.toLowerCase())]}function R(t){const e=[...new Set(h(t.map(D)))];return 0===e.length||e.length>1?[]:[e[0]]}function P(t){const e=R([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)),o=r.indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function _(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){return Array.from(function*(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){let n=0,r=L(1);for(;r.length<=t.length&&n<e;){n+=1;const e=r.map((e=>t[e]));yield e,r=k(r,t.length-1)}}(t,{maxResults:e}))}function k(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const M=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&\'()\\[\\]{|}<>*+,./;=?@^`~\\\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\\\${M} `:F.test(t)?`\\\\${t}`:escape(t).replace(/%/g,"\\\\"))).join("")}(t)}const Y={tag:R,id:function(t){return 0===t.length||t.length>1?[]:A(t[0])},class:function(t){return p(t.map(j))},attribute:function(t){return p(t.map(x))},nthchild:function(t){return p(t.map($))},nthoftype:function(t){return p(t.map(P))}},q={tag:D,id:A,class:j,attribute:x,nthchild:$,nthoftype:P};function B(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function G(t={}){const e=[...I];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function H(t,e,n="",o){const i=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+r.DESCENDANT+t)),...t.map((t=>e+r.CHILD+t))]}(t,e)}(function(t,e,n){const r=function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,c=g(n),u=g(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),s=function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(r,c,u),a=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(s,u);return e[n]=o?_(a,{maxResults:i}):a.map((t=>[t])),e}),{})}(t,n),o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?_(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),function(t={}){let e=[];return Object.entries(t).forEach((([t,n])=>{e=n.flatMap((n=>0===e.length?[{[t]:n}]:e.map((e=>Object.assign(Object.assign({},e),{[t]:n})))))})),e}(n).map(G)}(e,t))).filter((t=>t.length>0))}(r,n),i=h(o);return[...new Set(i)]}(t,o.root,o),n);for(const e of i)if(b(t,e,o.root))return e;return null}function W(t){return{value:t,include:!1}}function U({selectors:t,operator:e}){let n=[...I];t[o.tag]&&t[o.nthoftype]&&(n=n.filter((t=>t!==o.tag)));let r="";return n.forEach((e=>{(t[e]||[]).forEach((({value:t,include:e})=>{e&&(r+=t)}))})),e+r}function z(t){return[":root",...y(t).reverse().map((t=>{const e=function(t,e,n=r.NONE){const o={};return e.forEach((e=>{Reflect.set(o,e,function(t,e){return q[e](t)}(t,e).map(W))})),{element:t,operator:n,selectors:o}}(t,[o.nthchild],r.CHILD);return e.selectors.nthchild.forEach((t=>{t.include=!0})),e})).map(U)].join("")}function J(t,e={}){const r=function(t){(t instanceof NodeList||t instanceof HTMLCollection)&&(t=Array.from(t));const e=(Array.isArray(t)?t:[t]).filter(n);return[...new Set(e)]}(t),i=function(t,e={}){const n=Object.assign(Object.assign({},u),e);return{selectors:(r=n.selectors,Array.isArray(r)?r.filter((t=>{return e=o,n=t,Object.values(e).includes(n);var e,n})):[]),whitelist:l(n.whitelist),blacklist:l(n.blacklist),root:d(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:m(n.maxCombinations),maxCandidates:m(n.maxCandidates)};var r}(r[0],e);let c="",s=i.root;function a(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...N(t,e).map((t=>[t]))];for(const t of o){const e=H(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,c,i)}let f=a();for(;f;){const{foundElements:t,selector:e}=f;if(b(r,e,i.root))return e;s=t[0],c=e,f=a()}return r.length>1?r.map((t=>J(t,i))).join(S):function(t){return t.map(z).join(S)}(r)}const K=J;return e})()));'};import{randomUUID as mr}from"crypto";import{distance as Ln}from"fastest-levenshtein";import{rmSync as pr}from"fs";import hr from"js-beautify";import{homedir as gr}from"os";import{join as fr}from"path";import{chromium as yr,devices as Mn}from"playwright";import{addExtra as br}from"playwright-extra";import Sr from"puppeteer-extra-plugin-recaptcha";import wr from"puppeteer-extra-plugin-stealth";import{z as ve}from"zod";var Ot=ve.object({thoughts:ve.string(),result:ve.boolean(),relevantElements:ve.array(ve.number()).optional()});import Kr from"string-argv";import{v4 as Qr}from"uuid";import{z as M}from"zod";var Ne=(c=>(c.AI_PROVIDER="AIProviderError",c.AI_TIMEOUT="AITimeoutError",c.JOB_TIMEOUT="JobTimeoutError",c.ACTION_FAILURE="ActionFailureError",c.ASSERTION_FAILURE="AssertionFailureError",c.CONFIG_ERROR="UserConfigurationError",c.WEB_AGENT_PLATFORM="InternalWebAgentError",c.UNKNOWN_PLATFORM="InternalPlatformError",c))(Ne||{});var H=class extends Error{reason;emitToUser;constructor(e,t,n={},o=!1){let r=!1;for(let l of Object.values(Ne))if(t.startsWith(l)){r=!0,e=l;break}r?super(t,n):super(`${e}${t?`: ${t}`:""}`,n),this.name="TestFailureError",this.stack=this.stack?.slice(this.name.length+2),this.reason=e,this.emitToUser=o}toString(){return this.message}toJSON(){return{message:this.message}}};var ni=M.object({command:M.string(),thoughts:M.string()}),oi=M.string().pipe(M.coerce.number());var Lt=M.object({phrase:M.string()}),Qe=M.object({result:M.union([M.literal("NOT_FOUND"),M.string(),M.number(),M.array(M.unknown()),M.record(M.unknown(),M.unknown())])});import{z as Ze}from"zod";var Oe=Ze.object({width:Ze.number().min(200).max(1e4),height:Ze.number().min(200).max(1e4)}),Mt={"Desktop Large":{width:1920,height:1080},"Desktop Small":{width:1280,height:800},iPad:{width:768,height:1024},"Pixel 8":{width:448,height:998},"iPhone 15":{width:393,height:852}},ai=Object.keys(Mt);var et=Mt["Desktop Large"];var di=new Set(Object.values(X));var so={AI_ACTION:"AI action",MODULE:"Module",AI_ASSERTION:"AI check",AI_WAIT:"AI wait",AI_EXTRACT:"AI extract",CLICK:"Click",TYPE:"Type",JAVASCRIPT:"JavaScript",SELECT_OPTION:"Select",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",SCROLL_LEFT:"Scroll left",SCROLL_RIGHT:"Scroll right",HOVER:"Hover",BLUR:"Blur",FILE_UPLOAD:"File upload",FOCUS:"Focus",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",NEW_TAB:"New tab",COOKIE:"Cookie",LOCAL_STORAGE:"Local storage",REQUEST:"Request",CAPTCHA:"CAPTCHA",DRAG:"Drag & drop",VISUAL_DIFF:"Visual diff",DIALOG:"Dialog",MOUSE_DRAG:"Mouse drag",SUCCESS:"Done"},ui={AI_ACTION:"Ask AI to plan and execute something on the page.",MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",AI_WAIT:"Wait until AI considers a condition to be true.",CLICK:"Click on an element on the page based on a description.",DIALOG:"Specify how native browser dialogs should be handled.",AI_EXTRACT:"Ask AI to extract data from the page based on a description.",HOVER:"Hover over an element on the page based on a description.",FILE_UPLOAD:"Automatically upload a file when the next file chooser is activated.",FOCUS:"Focus an element on the page based on a description.",BLUR:"Remove focus from an element on the page based on a description.",SELECT_OPTION:"Select an option from a dropdown based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up by a specified height.",SCROLL_DOWN:"Scroll down by a specified height.",SCROLL_LEFT:"Scroll left by a specified width.",SCROLL_RIGHT:"Scroll right by a specified width.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",NEW_TAB:"Create and switch to a new tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",LOCAL_STORAGE:"Set a local storage value that will persist throughout the browser session",CAPTCHA:"Solve CAPTCHAs on the page. This feature is only available on Momentic Cloud and may take up to 60 seconds. Disabling CAPTCHAs in non-production environments is strongly advised.",REQUEST:"Make an API request to a URL.",JAVASCRIPT:"Run JavaScript code in an isolated context.",DRAG:"Click and drag an element to another location.",VISUAL_DIFF:"Compare a screenshot of the page or a specific element to a baseline image.",MOUSE_DRAG:"Click and drag the mouse by a specified distance.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import*as C from"zod";import{cloneDeep as Ti}from"lodash-es";import*as N from"zod";import{z as me}from"zod";var _t=(t=>(t.PROD="production",t.DEV="development",t))(_t||{}),hi=Object.values(_t),kt="BASE_URL";var gi={[kt]:"https://www.google.com"},zt=me.string().describe("Name of the fixture (must be available locally in the fixtures directory)."),Te=me.object({name:me.string(),variables:me.record(me.string().describe("variable name"),me.string().describe("variable value"))});import*as ce from"zod";var Dt=ce.object({type:ce.nativeEnum(le),generatedStep:se.optional(),serializedCommand:ce.string().optional(),elementInteracted:ce.string().optional()});var ee=N.object({goal:N.string(),url:N.string(),browserState:N.string(),history:N.string(),numPrevious:N.number(),lastCommand:Dt.or(N.null()),returnSchema:N.string().optional()}),tt=N.object({env:N.record(N.unknown()),results:N.array(N.unknown()),inputs:N.record(N.unknown()).optional()});var Ai=Object.getPrototypeOf(async function(){}).constructor;var Pt=(r=>(r.SUCCESS="SUCCESS",r.FAILED="FAILED",r.RUNNING="RUNNING",r.IDLE="IDLE",r.CANCELLED="CANCELLED",r))(Pt||{}),Ft=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(Ft||{}),lo=C.object({beforeUrl:C.string(),beforeScreenshot:C.string().optional(),afterUrl:C.string().optional(),afterScreenshot:C.string().optional(),startedAt:C.coerce.date(),finishedAt:C.coerce.date(),viewport:C.object({height:C.number(),width:C.number()}),status:C.nativeEnum(Ft),message:C.string().optional(),elementInteracted:C.string().optional()}),Le=C.object({startedAt:C.coerce.date(),finishedAt:C.coerce.date(),status:C.nativeEnum(Pt),message:C.string().optional(),data:C.unknown().optional(),userAgent:C.string().optional(),beforeTestContext:tt.optional(),afterTestContext:tt.optional()}),nt=ye.merge(Le).merge(C.object({results:lo.array()})),Ut=fe.merge(Le).merge(C.object({results:nt.array()})),co=Ke.merge(Le).merge(C.object({moduleName:C.string().optional(),results:C.union([Ut,nt]).array()})),Me=C.discriminatedUnion("type",[Ut,nt,co]),Ni=Le.pick({startedAt:!0,finishedAt:!0,status:!0,message:!0,data:!0});import{parseString as uo,splitCookiesString as mo}from"set-cookie-parser";import{z as $}from"zod";var po=$.object({name:$.string(),value:$.string(),url:$.string().optional(),domain:$.string().optional(),path:$.string().optional(),expires:$.number().default(Date.now()/1e3+60*60*24*365),httpOnly:$.boolean().default(!1),secure:$.boolean().default(!0),sameSite:$.union([$.literal("Strict"),$.literal("Lax"),$.literal("None")]).default("None")});function Wt(i){let e=[],t=mo(i);for(let n of t){let o=uo(n);if(!o.name)throw new Error("Name missing from cookie");if(!o.value)throw new Error("Value missing from cookie");let r;if(o.sameSite){let d=o.sameSite.trim().toLowerCase();if(d==="strict")r="Strict";else if(d==="lax")r="Lax";else if(d==="none")r="None";else throw new Error(`Invalid sameSite setting in cookie: ${d}`)}!o.path&&o.domain&&(o.path="/");let l=po.parse({...o,expires:o.expires?o.expires.getTime()/1e3:void 0,sameSite:r});e.push(l);let s=[l.name,...Object.keys(l)].map(d=>d.toLowerCase()),c=n.match(/\b(\w+)=([^;]*)/g);if(c)for(let d of c){let[m,u]=d.split("=");if(!m||!u)throw new Error(`Invalid key-value pair in cookie: ${d}`);s.includes(m.toLowerCase())||e.push({...l,name:m,value:u})}}return e}import{z as G}from"zod";var go="1.0.0",Bt=G.object({run:G.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:G.boolean().optional().describe("Defaults to true")}),Wi=G.object({type:G.literal("momentic/fixture"),schemaVersion:G.string(),name:G.string(),description:G.string().optional(),setup:G.object({steps:Bt.array(),timeout:G.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:G.object({steps:Bt.array(),timeout:G.number().optional().describe("Timeout for all steps in seconds")}).optional()}),Bi={type:"momentic/fixture",schemaVersion:go,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as fo}from"zod";var ji=fo.string().array();import{z as x}from"zod";import{z as I}from"zod";var yo="modules",bo="fixtures",So="environments",wo="chromium",Ht=[yo,bo,So,wo],ot="momentic-frame",Vi=`${ot}-0`;import{isValidCron as vo}from"cron-validator";import{z as F}from"zod";var To=F.object({pageLoadTimeoutMs:F.number().max(6e4).min(1e3).optional(),autoWaitForNetworkIdle:F.boolean().optional()}),_e=To.merge(F.object({disableAICaching:F.boolean().default(!1),viewport:Oe.optional()})),$t=F.object({cron:F.string().refine(i=>vo(i),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:F.boolean().default(!1),env:F.string().optional(),timeZone:F.string().default("America/Los_Angeles"),jobKey:F.string().optional()}),jt=F.object({onSuccess:F.boolean().default(!1),onFailure:F.boolean().default(!0)});var Co=I.string().min(1).max(255).superRefine((i,e)=>{try{Ro(i)}catch(t){return e.addIssue({code:I.ZodIssueCode.custom,message:t.message,fatal:!0}),I.NEVER}}),Eo=I.object({name:I.string(),default:I.boolean().optional(),defaultOnLocal:I.boolean().optional().describe("DEPRECATED: migrated to default instead"),defaultOnCloud:I.boolean().optional().describe("DEPRECATED: migrated to default instead"),fixtures:zt.array().optional()}),oe=I.object({id:I.string(),name:Co,baseUrl:I.preprocess(i=>i===null?"":i,I.union([I.string().url(),I.literal("")])).optional(),schemaVersion:I.string(),advanced:_e,retries:I.number(),envs:I.array(Eo).optional()}),oa=oe.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),Ao=I.object({createdAt:I.coerce.date(),updatedAt:I.coerce.date(),schedule:$t,notification:jt,createdBy:I.string(),organizationId:I.string()}),Io=oe.merge(Ao).merge(I.object({steps:I.array(Se)})),Gt=oe.merge(I.object({steps:I.array(Se)})),ra=oe.merge(I.object({steps:Re.array()})),xo=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;function Ro(i){if(i=i.toLowerCase().trim(),i.length===0||i.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(i))throw new Error("Name can only contain alphanumeric characters, spaces, dashes, and underscores.");if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(i))throw new Error(`"${i}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(i)||/^\s|\s$/.test(i))throw new Error("Name cannot start or end with a space or dot.");if(i.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(i==="none")throw new Error("Name cannot be 'none'.");if(Ht.includes(i))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(i.match(xo))throw new Error("Name cannot be a UUID. Please choose a different name.")}import{stringify as da}from"yaml";import{z as R}from"zod";var ga=R.object({test:R.string().describe("YAML for the test, including metadata and steps"),modules:R.record(R.string(),R.string()).describe("Map of module name to YAML for the module")}),fa=oe.merge(R.object({steps:Re.array(),fileType:R.literal("momentic/test")})),Vt=xe.merge(R.object({schemaVersion:R.string(),fileType:R.literal("momentic/module")})),ya=oe.merge(R.object({steps:R.array(R.record(R.string(),R.unknown()))})),ba=R.object({moduleId:R.string().uuid(),name:R.string(),schemaVersion:R.string(),steps:R.array(R.record(R.string(),R.unknown())),parameters:R.string().array().optional()});var Ia=x.array(x.object({id:x.string(),name:x.string(),fullFilePath:x.string(),testPath:x.string().describe("path relative to the root test directory, i.e. my-folder/my-test.yaml"),fileName:x.string(),lastModified:x.coerce.date(),createdAt:x.coerce.date()}));var xa=x.object({steps:Se.array()});var Ra=x.object({name:x.string(),baseUrl:x.string().url().optional(),environment:x.string().optional(),viewport:Oe.optional()}),Na=Gt.merge(x.object({testPath:x.string()})),Oa=x.object({name:x.string(),steps:be.array()});var La=x.array(Vt),Ma=x.array(x.object({name:x.string(),moduleId:x.string().uuid(),numSteps:x.number()})),_a=x.array(Te),ka=x.object({defaultEnv:x.string().optional().describe("name of the default env, or undefined to unset")});import*as _ from"zod";var qt=_.object({thoughts:_.string(),id:_.number().int(),conflicts:_.number().int().array().optional()});var Ua=_.object({thoughts:_.string().optional().describe("only provided if a description was provided"),target:ae.optional().describe("only provided if a description was provided"),conflictingElements:_.string().array().optional().describe("serialized html of conflicting elements"),options:_.array(_.string()).optional().describe("provided for <select> elements only"),screenshot:_.object({data:_.string(),height:_.number().int(),width:_.number().int()}).optional().describe("only provided if returnScreenshot is true")});var No={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},Oo={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},rt=class i{minLogLevel;logBindings;constructor(e,t){this.minLogLevel=e,this.logBindings=t}logWithLevel(e,...t){let n=No[e],o;Array.isArray(t[0])?(o=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(o={...t[0],...this.logBindings},t=t.slice(1));let r=Oo[e],l=[`${r}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&l.push("\x1B[39m"),l.push(...t),console.log(...l),o&&!Array.isArray(o))for(let[s,c]of Object.entries(o)){let d=c;c instanceof Error?d=c.message:typeof c=="object"&&(d=JSON.stringify(c,void 0,2),d=d.split(`
`).map((m,u)=>u>0?`  ${m}`:m).join(`
`)),console.log(e===0?`${r}  ${s}:`:`  ${s}:`,d)}else if(o)for(let s of o){let c=s;typeof s=="object"&&(c=JSON.stringify(s,void 0,2),c=c.split(`
`).map((d,m)=>m>0?`  ${d}`:d).join(`
`)),console.log(e===0?`${r}  `:"  ",c)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}log(...e){this.info(...e)}info(...e){1<this.minLogLevel||this.logWithLevel(1,...e)}debug(...e){0<this.minLogLevel||this.logWithLevel(0,...e)}warn(...e){2<this.minLogLevel||this.logWithLevel(2,...e)}error(...e){3<this.minLogLevel||this.logWithLevel(3,...e)}child(e){return new i(this.minLogLevel,{...this.logBindings,...e})}flush(){}bindings(){return this.logBindings}},Ba=new rt(1,{}),ze={info:()=>{},error:()=>{},debug:()=>{},warn:()=>{},child:()=>ze,flush:()=>{},bindings:()=>({})},ke={},de=({logger:i,logKey:e,maxCount:t,intervalMs:n},o,r,...l)=>{let s=ke[e];s?clearTimeout(s.timer):(s={count:0,totalCount:0},ke[e]=s),s.totalCount++,s.count<t&&(s.count++,i.debug(o,r,...l)),s.timer=setTimeout(()=>{let c=ke[e];c?.totalCount!==c?.count&&i.debug({logKey:e,totalCount:c?.totalCount,count:c?.count},`Debug logs were rate-limited for ${e}`),delete ke[e]},n)};import{z as Y}from"zod";var Lo=Y.object({id:Y.string(),createdAt:Y.coerce.date(),createdBy:Y.string(),organizationId:Y.string(),name:Y.string(),schemaVersion:Y.string().describe("Schema version for steps"),parameters:Y.string().array().or(Y.null()).describe("Parameter list"),numSteps:Y.number()}),Ga=Y.object({steps:be.array()}).merge(Lo.omit({numSteps:!0}));import*as p from"zod";import{z as T}from"zod";var it={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},at={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED",WAITING_FOR_USER:"WAITING_FOR_USER"},Mo={PASSED:"PASSED",FAILED:"FAILED"},De=T.string().pipe(T.coerce.date()).or(T.date()),_o=T.object({id:T.string(),createdAt:De,createdBy:T.string(),organizationId:T.string(),scheduledAt:De.or(T.null()),startedAt:De.or(T.null()),finishedAt:De.or(T.null()),testId:T.string().or(T.null()),status:T.nativeEnum(at),expectedStatus:T.nativeEnum(Mo).or(T.null()),runKey:T.string(),trigger:T.nativeEnum(it),attempts:T.number(),test:T.object({name:T.string(),id:T.string()}).or(T.null()),suiteId:T.string().or(T.null()).optional(),testName:T.string().or(T.null()).optional()}),ko=_o.merge(T.object({results:Me.array(),test:T.object({name:T.string(),id:T.string(),baseUrl:T.string(),advanced:_e.optional()}).or(T.null())})),Qa=T.object({id:T.string(),name:T.string()});var re=p.object({disableCache:p.boolean()}),ds=p.object({error:p.boolean(),reason:p.string(),message:p.string()}),us=ee.merge(re),Yt=Ye,ms=p.discriminatedUnion("vision",[ee.merge(re).merge(p.object({vision:p.literal(!1)})),ee.pick({goal:!0,url:!0}).merge(re).merge(p.object({screenshot:p.string(),vision:p.literal(!0)}))]),st=Ot,ps=ee.pick({browserState:!0,goal:!0}).merge(re),hs=ee.pick({goal:!0}).merge(re).merge(p.object({screenshot:p.string().describe("base64 encoded image"),hintActivatedScreenshot:p.string().describe("base64 encoded image")})),lt=qt,gs=ee.pick({goal:!0,url:!0}).merge(re),Xt=p.string().array(),fs=ee.pick({goal:!0,browserState:!0}).merge(re),Kt=Lt,ys=ee.pick({goal:!0,browserState:!0,returnSchema:!0}).merge(re);var bs=p.object({testPaths:p.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),env:p.string().optional(),all:p.boolean().optional(),urlOverride:p.string().optional()}),Ss=p.object({message:p.string(),queuedTests:p.object({name:p.string(),id:p.string()}).array()});var ws=p.string().array(),vs=p.union([p.object({paths:p.string().array().describe("run specific test paths (e.g. todo-test)"),all:p.boolean().describe("run all tests").optional()}),p.object({path:p.string().describe("deprecated; present for backcompat")})]),Ts=p.object({tests:p.record(p.string().describe("Test name"),p.string().describe("Test YAML")),modules:p.record(p.string().describe("Module name"),p.string().describe("Module YAML"))}),zo=p.object({test:p.string().describe("test YAML"),modules:p.record(p.string().describe("moduleId"),p.string().describe("module YAML"))}),Cs=zo.array(),Es=p.object({testId:p.string(),schemaVersion:p.string(),steps:p.array(p.record(p.unknown()))}),As=p.object({entries:p.array(Je),testId:p.string()}),Is=p.object({steps:p.array(p.record(p.unknown())),testId:p.string(),schemaVersion:p.string(),organizationId:p.string()});var xs=p.object({testPath:p.string(),testId:p.string(),testName:p.string()}).partial().merge(p.object({trigger:p.nativeEnum(it)}));var Rs=p.object({startedAt:p.coerce.date(),finishedAt:p.coerce.date(),results:Me.array(),status:p.nativeEnum(at)}).partial(),Ns=p.object({screenshot:p.string()}),Os=p.object({key:p.string()}),Ls=p.object({orgId:p.string()}),Ms=p.array(Te),_s=p.array(Te),ks=p.record(p.string(),p.union([p.string(),p.boolean()]));import{z as D}from"zod";var Do=D.object({content:D.string(),ids:D.string().array(),tokenLength:D.number()}),Po=D.object({chunks:Do.array(),numRecs:D.number()}),Ps=D.object({ids:D.string().array(),score:D.number(),tokenLength:D.number()}),Fs=D.object({description:D.string(),tokenLimit:D.number()}).merge(Po),Jt=D.object({ids:D.number().array()});import{validator as Ks}from"@exodus/schemasafe";var Qt=(i,e)=>{let{hostname:t,pathname:n}=new URL(i),{hostname:o,pathname:r}=new URL(e);return t!==o||n!==r};var Zt=i=>!i.toLowerCase().startsWith("http");var en={bannedClassSubstrings:["relative","flex","center","justify","auto","sticky","absolute","top","right","left","bottom","items-center"],bannedElementTagNames:["html","head","title","meta","iframe","script","style","path","svg","br","::marker","noscript"],bannedElementAttributes:["data-momentic-id","aria-keyshortcuts"],relevantElementAttributes:["name","id","value","type","class","height","width","placeholder","target","title","href","src","alt","role","headers","scope","checked","required","action","data-value","data-testid","data-handleid","data-handlepos","aria-label","aria-role","aria-selected","aria-disabled","aria-hidden"]};function tn(i){if(i[0]?.match(/[0-9a-zA-Z]/)===null)return!0;if(i.length>10){let c=Math.floor(i.length/8);if((i.match(/[-_:/ ]/g)??[]).length<c)return!0}if((i.match(/[^0-9a-zA-Z.]/g)??[]).length/i.length>.2)return!0;let t=(i.match(/[0-9]/g)??[]).length;if(t/i.length>.3)return!0;let n=(i.toLowerCase().match(/[aeiou]/gi)??[]).length;if((i.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)??[]).length/n>5)return!0;let r=(i.match(/[A-Z]/g)??[]).length,l=(i.match(/[a-z]/g)??[]).length,s=Math.ceil(i.length*.3);return!!(l&&t&&Math.abs(l-t)<s||l&&r&&Math.abs(l-r)<s)}import{randomUUID as an}from"crypto";import{distance as dt}from"fastest-levenshtein";import{cloneDeep as sn}from"lodash-es";var nn=new Set(["about:blank","chrome-error://chromewebdata/"]),on=3,V="data-momentic-id",ct=500;var Fo=["focusable","keyshortcuts","controls","live","relevant"],Uo=["selected","readonly","modal","required"],Wo=["textbox","checkbox","combobox","table","caption","columnheader","rowheader","gridcell","row","rowgroup","cell","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],Bo=["notRendered","notVisible","ariaHiddenElement","ariaHiddenSubtree"],Ho=["menulistpopup","statictext","inlinetextbox"],$o=80,Pe=["StaticText","ListMarker","RootWebArea","LineBreak","emphasis","::before","::after"],jo=["cite"],Go={LabelText:["label"],listitem:["li"],image:["img","svg"],link:["a"],RootWebArea:["#document"],paragraph:["p"],LineBreak:["br"]},ln={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,noContent:!1,maxLevel:void 0,neighbors:void 0},ut=class i{id;role;name;tagName;content;properties;dataMomenticId;pathFromRoot;parent;children;backendNodeID;ignoredByCDP;constructor(e){if(this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,this.ignoredByCDP=e.ignoredByCDP,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value}),e.domNode){Ko(this.properties,e.domNode);let t=e.domNode.attributes.id;this.tagName=e.domNode.tagName||void 0,this.name=this.name||e.domNode.attributes.name||(t&&!tn(t)?t:"")}}getSerializedFormWithContext(){return this.serialize({noID:!0,maxLevel:1,neighbors:1})}getNodeOnlySerializedForm(){return this.serialize({noID:!0,noChildren:!0,noContent:!0})}getLogForm(){return JSON.stringify({id:this.id,name:this.name??"",role:this.role??"",backendNodeId:this.backendNodeID})}isInteresting(){return Wo.includes(this.role.toLowerCase())||!this.properties.hidden&&(this.properties.focusable||this.properties.settable)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content||Object.keys(this.properties).some(e=>e.startsWith("data"))}serialize(e=ln){let t=Object.assign({},ln,e),{indentLevel:n,noChildren:o,noProperties:r,noID:l,noContent:s}=t,c=sn(this.properties),d=" ".repeat(n),m=this.role||(c.role?`${c.role}`:"");delete c.role;let u=this.tagName??"unknown",b=this.name;m==="heading"&&b==="heading"&&(b="");let f=Pe.includes(this.role)||jo.includes(this.tagName||"");if(this.role==="StaticText"||this.role==="ListMarker")return`${d}${b}
`;let h=`${d}<${u}`;if(!l&&!f&&(h+=` id="${this.id}"`),m&&m!=="generic"&&m!==u&&!(Go[m]??[]).includes(u)&&(h+=` role=${JSON.stringify(m)}`),b&&(h+=` name=${JSON.stringify(b)}`),this.content&&!s&&(h+=` content=${JSON.stringify(this.content)}`),Object.keys(c).length>0&&!r&&Object.entries(c).forEach(([y,w])=>{if(!Fo.includes(y)){if(Uo.includes(y)&&!w)return;if(y==="value"&&s&&c.type==="text")return;typeof w=="string"?h+=` ${y}="${w}"`:typeof w=="boolean"?w?h+=` ${y}`:h+=` ${y}={false}`:typeof w<"u"&&(h+=` ${y}={${JSON.stringify(w)}}`)}}),u==="::before"||u==="::after"){let y="";for(let w of this.children)y+=w.serialize({...e,indentLevel:n,neighbors:0});return y}let g=e.maxLevel!==void 0&&n/2>=e.maxLevel;if(this.children.length===0||o||g)h+=` />
`;else{let y="";for(let v of this.children)y+=v.serialize({...e,indentLevel:n+2,neighbors:0});let w=y.trim();w.length<=$o&&!w.includes(`
`)?h+=`>${w}</${u}>
`:h+=`>
${y}${d}</${u}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let y=this.parent.children.findIndex(O=>O.id===this.id),w=y>0?this.parent.children[y-1]?.serialize({...e,neighbors:0}):"",v=y<this.parent.children.length-1?this.parent.children[y+1]?.serialize({...e,neighbors:0}):"";return`${w||""}
${h}
${v||""}`}return h}shallowClone(){let e=new i({id:this.id,role:this.role,name:this.name,content:this.content,properties:[],pathFromRoot:this.pathFromRoot,children:[],backendNodeID:this.backendNodeID,ignoredByCDP:this.ignoredByCDP});return e.tagName=this.tagName,e.dataMomenticId=this.dataMomenticId,e.properties=sn(this.properties),e}},mt=class i{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}pruneUsingRelevantIds(e){let t=this.root;if(!t)throw new Error("Cannot prune a11y tree with no root");function n(r,l=!1){let s=e.has(r.id)||r.id===t?.id,c=r.shallowClone(),d=r.children,m=!1,u=[];for(let b of d){let f=n(b,s||m);f&&(u.push(f),f.parent=c,m=!0)}if(c.children=u,s||m)return c;if(Pe.includes(r.role)&&l)return c}let o=n(t);return new i(o,this.a11yIdNodeMap,this.dataMomenticIdMap)}};function Vo(i){return i.name?.value?`"${i.name.value}"`:i.role?.value&&i.role.value!=="none"&&i.role.value!=="generic"?`"${i.role.value}"`:`"${i.nodeId}"`}function qo(i,e,t,n){return i.bounds.x===null||i.bounds.y===null||i.bounds.height===null||i.bounds.width===null||i.bounds.width===0||i.bounds.height===0?!0:i.bounds.x+i.bounds.width<e.leftBound||i.bounds.x>e.rightBound?(de({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:i,logKey:n},"Filtering out node since it is not in the viewport horizontally"),!1):i.bounds.y+i.bounds.height<e.upperBound||i.bounds.y>e.lowerBound?(de({logger:t,logKey:n,maxCount:5,intervalMs:3e3},{domNode:i,logKey:n},"Filtering out node since it is not in the viewport vertically"),!1):i.computedStyles.display==="none"?(t.debug({domNode:i},"Filtering out node since it has display none"),!1):!0}function cn({node:i,parent:e,domGraph:t,inputNodeMap:n,logger:o,callId:r,filterByViewport:l,viewportDetails:s}){if(!e&&i.parentId)throw new Error(`Got no parent for accessibility node ${i.nodeId}: ${JSON.stringify(i)}`);let c=i.backendDOMNodeId!==void 0?t.backendIdToNode[i.backendDOMNodeId]:void 0;if(!c&&!Ho.includes((i.role?.value).toLowerCase()))return[];if(c&&e&&l&&s&&i.backendDOMNodeId&&!qo(c,s,o,r))return c&&(c.momenticIgnored=!0),[];let d=i.name?.value?typeof i.name.value=="string"?i.name.value:`${i.name.value}`:"",m=i.value?.value?typeof i.value.value=="string"?i.value.value:`${i.value.value}`:"";if(d==="momentic_cursor"||d.includes("chakra"))return c&&(c.momenticIgnored=!0),[];let u=new ut({domNode:c,id:parseInt(i.nodeId),role:i.role?.value||"",name:d,content:m,properties:i.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Vo(i),backendNodeID:i.backendDOMNodeId,ignoredByCDP:i.ignored}),b=i.childIds??[];for(let g of b){if(!g)continue;let y=n.get(parseInt(g));if(!y)continue;let w=cn({node:y,parent:u,domGraph:t,inputNodeMap:n,logger:o,callId:r,filterByViewport:l,viewportDetails:s});w.length&&(u.children=u.children.concat(w))}if(u.role==="StaticText"&&(u.children=[]),u.children.length===1&&u.children[0].role==="StaticText"){let g=u.name,y=u.children[0]?.name;(g===y||!y)&&(u.children=[])}let f=[];for(let g=u.children.length-1;g>=0;g--){let y=u.children[g];if(y.role!=="StaticText"){f.push(y);continue}if(g===0||u.children[g-1].role!=="StaticText"){f.push(y);continue}u.children[g-1].name+=` ${y.name}`}if(u.children=f.reverse(),u.role==="generic"&&u.children.length===1){let g=u.children[0];if(u.name&&!Pe.includes(g.role)&&u.name===g.name)return c&&(c.momenticIgnored=!0),u.children}if(!u.isInteresting()&&i.parentId)return c&&(c.momenticIgnored=!0),u.children;for(let g of u.children)g.parent=u;return[u]}function dn({node:i,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r=1}){i.id=r,r+=1,e.set(i.id,i),i.dataMomenticId?t.set(i.dataMomenticId,i):Pe.includes(i.role)||de({logger:n,logKey:o,maxCount:5,intervalMs:3e3},{node:i.serialize({neighbors:1,maxLevel:1}),role:i.role,logKey:o},"Node has no data-momentic-id");for(let l of i.children)r=dn({node:l,a11yIdNodeMap:e,dataMomenticIdMap:t,logger:n,callId:o,startId:r});return r}function un({a11yGraph:i,domGraph:e,logger:t,filterByViewport:n,viewportDetails:o}){if(!i.root)throw new Error("A11y tree has no root");let r=an();i.allNodes=i.allNodes.filter(m=>m.ignored?!m.ignoredReasons?.find(b=>Bo.includes(b.name)):!0);let l=new Map;for(let m of i.allNodes)l.set(parseInt(m.nodeId),m);let s=cn({node:i.root,domGraph:e,parent:null,inputNodeMap:l,logger:t,callId:an(),filterByViewport:n,viewportDetails:o});if(s.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(s)}`);if(s.length===0)throw new Error("There are no accessible elements on this page or frame. Are you sure this website loads properly?");let c=new Map,d=new Map;return dn({node:s[0],a11yIdNodeMap:c,dataMomenticIdMap:d,logger:t,callId:r}),new mt(s[0],c,d)}var pt=(i,e)=>{let t=1,n=["name","role","content"];for(let o of n){let r=i[o];if(typeof r!="string"||!r.trim())continue;let l=dt(r,e[o])/Math.min(r.length,e[o].length);l===0?t+=2:l<=.15&&t++}if(e.numChildren!==void 0&&(i.children.length===e.numChildren&&e.numChildren>0?t++:t--),e.nodeOnlySerializedForm){let o=i.getNodeOnlySerializedForm(),r=dt(o,e.nodeOnlySerializedForm)/Math.min(o.length,e.nodeOnlySerializedForm.length);r===0?t+=2:r<=.15&&t++}if(e.serializedForm){let o=i.serialize({noID:!0,maxLevel:1,neighbors:1}),r=dt(o,e.serializedForm)/Math.min(o.length,e.serializedForm.length);r===0?t+=2:r<=.15&&t++}return t},Yo=["href","src"];function Xo(i,e){if(e==="true")return!0;if(e==="false")return!1;try{let t=parseInt(e);if(!isNaN(t))return t}catch{}return Yo.includes(i)&&e.length>60?e.slice(0,50)+"...":i==="src"&&e.includes("base64")?e.slice(0,e.indexOf("base64")+6)+"...":e}function Ko(i,e){e&&Object.entries(e.attributes).forEach(([t,n])=>{en.relevantElementAttributes.includes(t)&&!i[t]&&!t.startsWith("aria")&&t!=="class"&&(i[t]=Xo(t,n))})}var ue={r:147,g:196,b:125,a:.55},Ue={showRulers:!1,showStyles:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:ue,paddingColor:ue,borderColor:ue,marginColor:ue,eventTargetColor:ue,shapeColor:ue,shapeMarginColor:ue,showInfo:!0,showAccessibilityInfo:!0};var Fe=["display","opacity","visibility","height","max-height","overflow"];function mn({snapshot:i,devicePixelRatio:e,pageFrameId:t}){let n=i.strings,o=i.documents,r=o[0];t&&(r=o.find(v=>n[v.frameId]===t));let l={},s=r.layout,c={};s.nodeIndex.forEach((v,O)=>{c[v]=O});let d=s.styles,m=s.bounds??[],u=r.nodes,b=u.backendNodeId??[],f=u.attributes??[],h=u.parentIndex??[],g=u.nodeName??[],y=u.inputChecked??{index:[]};for(let v=0;v<b.length;v++){let O=b[v],K=f[v]??[],he=h[v]&&h[v]>=0?h[v]:null,ie=c[v],J;ie?J=m[ie]??[]:J=[];let W={backendNodeId:O,bounds:{x:J[0]??null,y:J[1]??null,width:J[2]??null,height:J[3]??null},computedStyles:{},attributes:{},parentBackendNodeId:he?b[he]:null,tagName:g[v]!==void 0?n[g[v]]?.toLowerCase():void 0,children:[],momenticIgnored:void 0};W.parentBackendNodeId&&l[W.parentBackendNodeId].children.push(O);for(let j of Object.keys(W.bounds)){let Q=j;W.bounds[Q]!==null&&(W.bounds[Q]/=e)}let Be=d[v]??[];for(let j=0;j<Be.length&&!(j>=Fe.length);j++){let Q=Be[j];if(!Q||isNaN(Q))continue;let ge=n[Q];if(!ge)continue;let Ee=Fe[j];W.computedStyles[Ee]=ge}for(let j=0;j<K.length;j+=2){let Q=K[j],ge=K[j+1];if(!Q||!ge)continue;let Ee=n[Q],yt=n[ge];!Ee||!yt||(W.attributes[Ee]=yt)}y.index.includes(v)&&(W.attributes.checked="true"),l[W.backendNodeId]=W}return{root:l[b[0]],backendIdToNode:l}}async function pn(i){return i.evaluate(e=>{let t=Array.from(e.attributes).reduce((n,o)=>{let r=`${n} ${o.name}="${o.value}"`;return r.length<=50?r:n},"");return`<${e.tagName.toLowerCase()}${t.length>0?t+" ":""}/>`},void 0,{timeout:750})}var L=(i=1e3)=>new Promise(e=>setTimeout(()=>e(),i));var hn=`
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
`;function gn(){return window.lastCursorPos}function fn(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function yn(){window.globalHintManager&&window.globalHintManager.reset()}function bn(){let i=document.body.getElementsByTagName("*"),e=1;for(let t=0;t<i.length;t++){let n=e.toString();for(;[6].some(r=>n.includes(r.toString()));)e++,n=e.toString();let o=i[t];o?.setAttribute("data-momentic-id",`${e}`),o?.setAttribute("aria-keyshortcuts",`${e}`),e++}}var Jo=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),Qo=new Set(["script","document"]),Zo=["cdn.doubleverify.com","securepubads.g.doubleclick.net","pagead2.googlesyndication.com","googleads.g.doubleclick.net","static.criteo.net","intercom.io","googletagmanager.com","google-analytics.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","px.ads.linkedin.com","www.clarity.ms","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms","app.posthog.com","soraban.com","rs.fullstory.com","api2.amplitude.com"],er=["youtube.com/api/stats","play.google.com/log","youtube.com/youtubei/v1/log_event","retool.com/api/ddMetric"],tr=[];async function wn(i){for(let e of tr)await i.route(e,t=>t.abort())}function ht(i){return`${i.resourceType()} ${i.method()} ${i.url()}`}function Sn(i){return i=i.replace(/^www\./,""),i}function vn(i,e){if(!Jo.has(i.resourceType()))return!1;let t=new URL(e),n=i.url(),o=new URL(n);return Zo.some(r=>o.hostname.includes(r))||er.some(r=>n.includes(r))?!1:Qo.has(i.resourceType())||i.method()!=="GET"?!0:Sn(o.hostname).includes(Sn(t.hostname))}var Tn=`(function () {
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
})()`;var Cn=i=>{let e;for(let n of i){let o=document.querySelectorAll(n);if(!o.length){let l=`[MOMENTIC] Could not find element in document ${document.title} with selector: ${n}`;throw console.error(l),new Error(l)}if(o.length>1){let l=`[MOMENTIC] Found multiple elements with selector: ${n}`;throw console.error(l),new Error(l)}let r=o[0];if(e&&e.getAttribute("data-momentic-id")!==r?.getAttribute("data-momentic-id")){let l="[MOMENTIC] Rejecting selector combination because of mismatch";throw console.error(l),new Error(l)}e=r}let t=e.getAttribute("data-momentic-id");if(!t){let n=`[MOMENTIC] Selector resolved to element with no data-momentic-id: ${e.outerHTML}`;throw console.error(n),new Error(n)}return{momenticId:t}};var En=i=>{let e=window,t=document.querySelector(`[data-momentic-id="${i}"]`);if(!t)throw new Error(`[MOMENTIC] Could not find element with data-momentic-id: ${i}`);if(!e.serializeElementWithContext)throw new Error("[MOMENTIC] Momentic core libraries not found");return e.serializeElementWithContext(t)},An=({serializedHtml:i,distanceThreshold:e})=>{let t=window;if(!t.ldist||!t.serializeElementOnlyWithText)throw new Error("[MOMENTIC] Momentic core libraries not found");let n=document.body.getElementsByTagName("*"),o,r,l=1/0,s;for(let c of n){let d=t.serializeElementOnlyWithText(c);if(Math.abs(d.length-i.length)>e)continue;let m=t.ldist(i,d);m<l?(l=m,r=d,o=c.getAttribute("data-momentic-id")??void 0,s=void 0):m===l&&(s=d)}if(s&&l!==0)throw new Error(`[MOMENTIC] Multiple HTML elements with same distance (${l}) found:
      ${s}
      ==================
      ${r}
      `);if(l>e)throw new Error(`Closest HTML candidate still has too far distance (${l}) from threshold (${e})
      Closest node: ${r}
      Target node: ${i}
      `);return{dataMomenticId:o,closestDistance:l}};var vr=fr(gr(),"momentic","chromium"),pe=process.env.TWO_CAPTCHA_KEY,We=br(yr);We.use(wr());We.use(Sr({provider:{id:"2captcha",token:pe},visualFeedback:!0}));var gt=class i{browser;context;page;systemDevicePixelRatio;networkSettings;a11yIdToNodeMap=new Map;dataMomenticIdToNodeMap=new Map;mostRecentA11yTree;domGraph=void 0;cdpClient;logger;localMode;activeFrame;transformer;baseURL;originsVisited=new Set;constructor({browser:e,context:t,page:n,baseUrl:o,logger:r,localMode:l,cdpClient:s,networkSettings:c}){this.browser=e,this.context=t,this.cdpClient=s,this.page=n,this.baseURL=o,this.originsVisited.add(new URL(o).origin),this.logger=r,this.networkSettings=c,this.localMode=!!l}static USER_AGENT=Mn["Desktop Chrome"].userAgent;static async init({baseUrl:e,logger:t,networkSettings:n,browserArgs:o,contextArgs:r,onBrowserUpdateDuringLoad:l,onClose:s,waitForLoad:c=!0,localMode:d,localAppUrl:m,extensionPath:u,skipPageSetup:b,timeout:f}){let h={headless:!0,handleSIGTERM:!1,chromiumSandbox:!1,...o??{}},g={viewport:et,userAgent:Mn["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles",...r??{}},y=null,w,v;d?(w=await We.launchPersistentContext(vr,{...h,...g,ignoreDefaultArgs:["--enable-automation","--enable-strict-mixed-content-checking"],ignoreHTTPSErrors:!0,bypassCSP:!0,args:["--allow-insecure-localhost","--disable-site-isolation-for-policy","--disable-site-isolation-trials",`--unsafely-treat-insecure-origin-as-secure=${m}`,`--load-extension=${u}`,"--test-type=browser"],baseURL:e}),v=w.pages()[0],s&&v.on("close",()=>{s()})):(y=await We.launch(h),w=await y.newContext({deviceScaleFactor:process.env.NODE_ENV==="development"?2:1,...g,baseURL:e}),v=await w.newPage()),await wn(w),await i.addBrowserPageInitScripts(w,!!d);let O=new i({browser:y,context:w,page:v,baseUrl:e,logger:t,localMode:d,networkSettings:n,cdpClient:await w.newCDPSession(v)});O.systemDevicePixelRatio=g.deviceScaleFactor;let K=!1,he=async()=>{try{await O.navigate({url:e,initialNavigation:!b,loadTimeoutMs:f})}catch(ie){if(t.error({err:ie},"Failed to initialize chrome browser"),c)throw ie}finally{K=!0}};if(c?await he():he(),l){let ie=async()=>{try{l({viewport:await O.getViewport(),buffer:await O.screenshot({}),iframeSrcUrls:await O.getFrameSrcUrls()})}catch{}},J=setInterval(()=>{if(Date.now()-W<(f??8e3*2))ie();else{clearInterval(J);return}},400),W=Date.now();for(;!K&&Date.now()-W<(f??8e3*2);)await L(250);clearInterval(J)}return O}async getUserPageOrFrame(){if(!this.activeFrame)return this.page;let e=0,t,n="";for(;e<5;){try{if(this.activeFrame.type==="name"?(n=this.activeFrame.name,t=this.page.frame(n)):(n=this.activeFrame.url,n.startsWith("/")&&n.endsWith("/")?t=await(await this.page.evaluateHandle(o=>{let r=new RegExp(o.slice(1,-1));return Array.from(document.querySelectorAll("iframe")).find(l=>r.test(l.src))},n)).asElement()?.contentFrame():t=await(await this.page.$(`iframe[src="${n}"]`))?.contentFrame()),t)return t}catch{}await L(100),e++}throw new H("InternalWebAgentError",`Failed to find frame '${n}' on page ${this.page.url()}`)}async initCDPSession(e){e===void 0&&(e=this.networkSettings.pageLoadTimeoutMs??3e3);let t=!1,n=e===null?1/0:2,o=async()=>{try{this.cdpClient=await this.context.newCDPSession(this.page),await this.cdpClient.send("Accessibility.enable"),await this.cdpClient.send("DOM.enable"),await this.cdpClient.send("Overlay.enable"),t=!0}catch(r){if(n>0)return this.logger.warn({err:r},"Failed to initialize CDP session, re-creating CDP client"),await L(250),n--,o();throw r}};return e===null?await o():await Promise.race([o(),L(e)]),t}setLogger(e){this.logger=e}ping(){if(this.closed)throw new Error("Page has been closed");if(this.browser&&!this.browser.isConnected())throw new Error("Browser is not connected")}setActiveFrame(e){e?this.activeFrame=e:this.activeFrame=void 0}async reset(e){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear(),e.clearCookies&&(this.logger.debug("Clearing cookies"),await this.context.clearCookies());let t=this.localMode?[await this.getUserPageOrFrame()]:this.context.pages();for(let n=0;n<t.length;n++){if(e.clearStorage){let o=t[n].url();this.logger.debug(`Clearing local storage for tab ${o}`),this.originsVisited.delete(new URL(o).origin);try{await t[n].evaluate(async()=>{window.localStorage.clear(),window.sessionStorage.clear(),await indexedDB.databases().then(r=>{r.forEach(l=>{l.name&&indexedDB.deleteDatabase(l.name)})})})}catch(r){this.logger.debug({err:r},"Failed clearing site data, continuing...")}}n!==0&&!this.localMode&&(this.logger.debug(`Closing tab ${t[n].url()}`),await t[n].close())}if(this.page=this.context.pages()[0],this.page.isClosed())this.logger.warn("Page is closed, exiting reset early");else if(!await this.initCDPSession(e.timeout))this.logger.warn("Skipping clearing local storage because CDP session failed to initialize");else if(e.clearStorage)for(let o of this.originsVisited)this.logger.debug({origin:o},"Clearing data using CDP"),await this.cdpClient.send("Storage.clearDataForOrigin",{origin:o,storageTypes:"all"}),this.originsVisited.delete(o);await this.navigate({url:e.url??this.baseURL,initialNavigation:!0,loadTimeoutMs:e.timeout})}async wait(e){await L(e)}async toggleHints(e){let t=await this.getUserPageOrFrame();e.state==="on"?(await t.addStyleTag({content:we.vimiumCss}),await t.addScriptTag({content:we.vimiumJs}),await t.evaluate(fn)):await t.evaluate(yn)}async showHints(){await this.toggleHints({state:"on"});let e=async()=>{try{await this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}};setTimeout(()=>{e()},3e3)}async cleanup(){this.originsVisited.clear(),await this.page.close(),await this.context.close(),this.browser&&await this.browser.close()}get closed(){return this.page.isClosed()||!!this.browser&&!this.browser.isConnected()}async html(){return(await this.getUserPageOrFrame()).content()}async url(){return this.localMode?(await this.getUserPageOrFrame()).url():this.page.url()}async screenshotWithHints(e){let t=e.saveToDiskPath?.split("."),n=t?.slice(0,-1).join("."),o=t?.slice(-1)[0],r=Buffer.from("");await this.showHints();let l=await this.screenshot({...e,saveToDiskPath:e.saveToDiskPath?`${n}-after-hint.${o}`:void 0});return{before:r,after:l}}async screenshot({target:e,quality:t,scale:n="device",saveToDiskPath:o,hideCaret:r,retries:l=1,timeout:s,clearHighlights:c=!1}){c&&await this.removeAllHighlights();let d={fullPage:!1,quality:t,scale:n,type:"jpeg",caret:r?"hide":"initial",path:o,timeout:s??2500};try{if(e){let m=await this.resolveTarget(e);return await m.locator.waitFor({state:"visible",timeout:s??2500}),m.locator.screenshot({...d,animations:"disabled"})}else if(!this.localMode||!this.activeFrame){if(d.scale==="css")return this.page.screenshot(d);{let m=await this.cdpClient.send("Page.captureScreenshot",{format:"jpeg",quality:t,fromSurface:!0,optimizeForSpeed:!0});return Buffer.from(m.data,"base64")}}else{if(this.activeFrame.type==="name")return this.page.locator(`iframe[name="${this.activeFrame.name}"]`).screenshot(d);throw new Error("Unexpected root frame mode")}}catch(m){if(this.logger.warn({err:m},"Failed taking screenshot, continuing..."),l>0)return await L(250),this.screenshot({target:e,quality:t,scale:n,saveToDiskPath:o,hideCaret:r,retries:l-1,timeout:s,clearHighlights:c});throw m}}async getViewport(){let e=this.activeFrame;if(this.localMode&&e&&e.type==="name"){let n=await this.page.locator(`iframe[name="${e.name}"]`).boundingBox();if(!n)throw new Error(`Failed to get bounding box for frame: ${this.activeFrame}`);return n}let t=this.page.viewportSize();if(!t)throw new Error("failed to get viewport");return t}static async addBrowserPageInitScripts(e,t){let n=[e.addInitScript({content:we.cssGeneratorLibJs}),e.addInitScript({content:we.htmlUtilsLibJs})];t?n.push(e.addInitScript({content:Tn})):n.push(e.addInitScript({content:hn})),await Promise.all(n)}async navigate({url:e,initialNavigation:t=!1,loadTimeoutMs:n,networkIdleTimeoutMs:o=0}){n===void 0&&(n=this.networkSettings.pageLoadTimeoutMs??8e3),Zt(e)&&(e=new URL(e,this.baseURL).toString()),n&&(n=Math.min(n,6e4)),o&&(o=Math.min(o,6e4)),this.logger.debug(`Navigating to ${e}`),this.originsVisited.add(new URL(e).origin),t&&await this.initCDPSession(n);let r=Date.now(),l=await this.getUserPageOrFrame(),s=async()=>{await l.goto(e,{waitUntil:"domcontentloaded",timeout:n??0});try{await l.waitForLoadState("load",{timeout:n??0})}catch(d){this.logger.warn({err:d},"Timeout elapsed waiting for load state, continuing anyways...")}};try{o?await this.wrapPossibleNavigation(s,o):await s(),this.logger.debug({url:e},`Navigation complete in ${Math.floor(Date.now()-r)}ms`)}catch(d){if(d instanceof Error&&d.message.includes("ERR_ABORTED")){this.logger.error({err:d},"Navigation error, possibly due to user cancellation");return}throw d}let c=await this.url();if(nn.has(c)&&process.env.NODE_ENV==="production")throw new H("ActionFailureError",`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`,{},!0);if(t){await this.attachNavigationHandler(this.page.mainFrame());try{await this.exposeRecordingBindings()}catch(d){d instanceof Error&&d.message.includes("already registered")||this.logger.error({err:d},"Failed to expose recording bindings during navigation")}}this.logger.info({url:e,urlAfterNav:c},"Navigation complete")}async type(e,t={}){this.logger.info({text:e},"Entering text with keyboard");let{clearContent:n=!0,pressKeysSequentially:o=!1}=t;n&&(process.platform==="darwin"?await this.page.keyboard.press("Meta+A"):await this.page.keyboard.press("Control+A"),await this.page.keyboard.press("Backspace")),o?await this.page.keyboard.type(e):await this.page.keyboard.insertText(e)}async scrollIntoView(e){await e.scrollIntoViewIfNeeded({timeout:2500})}async highlight(e,t){try{let n=await this.resolveTarget(e,!0);return await this.highlightTarget(n.locator,t),!0}catch(n){return this.logger.warn({err:n,target:e},"Failed to highlight target"),!1}}async removeAllHighlights(){await(await this.getUserPageOrFrame()).evaluate(()=>{let e=window,t=e.removeHighlightTimers||[];console.log(`[MOMENTIC] Clearing ${t.length} highlights on request`),t.forEach(n=>{clearTimeout(n)}),Object.values(e.removeHighlightFunctions??{}).forEach(n=>{n()})})}async highlightTarget(e,t){try{return await this.removeAllHighlights(),await e.evaluate((n,o)=>{try{console.log("[MOMENTIC] Adding highlight for",n);let r=window;r.momenticIsEligible=w=>{let O=window.getComputedStyle(w,null).getPropertyValue("display");if(O==="none"||O==="contents")return!1;let K=w.getBoundingClientRect();return!(!K.height||!K.width)},r.removeHighlightTimers=r.removeHighlightTimers||[],r.removeHighlightFunctions=r.removeHighlightFunctions||{};let l=!1,s=0;for(;!r.momenticIsEligible(n)&&s<3;){if(!n.parentElement)throw new Error("No eligible non-empty parent found for highlighting");n=n.parentElement,s++,l=!0}l&&console.log("[MOMENTIC] Redirected highlight to parent",n);let c=n.style.getPropertyValue("outline"),d=n.style.getPropertyPriority("outline"),m=n.style.getPropertyValue("background-color"),u=n.style.getPropertyPriority("background-color"),b=n.style.getPropertyValue("opacity"),f=n.style.getPropertyPriority("opacity");if(c.includes("blue")&&c.includes("solid")&&c.includes("3px")){console.log("[MOMENTIC] Already highlighted",n);return}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.setProperty("outline","3px solid deepskyblue","important"):n.style.setProperty("outline","3px solid royalblue","important");let h="rgba(255, 255, 128, 0.5)",g=window.getComputedStyle(n,null).getPropertyValue("background-color");g&&!g.includes("255, 255, 255")&&!g.includes("0, 0, 0")&&(h=`rgba(${g.match(/\d+/g).map(Number).slice(0,3).map(O=>255-O).join(", ")}, 0.5)`),n.style.setProperty("background-color",o??h,"important"),n.style.setProperty("opacity","100","important");let y=`momentic${Math.floor(Math.random()*1e7)}`;r[y]=()=>{console.log("[MOMENTIC] Clearing highlight for",n);try{n.style.removeProperty("outline"),n.style.setProperty("outline",c,d),n.style.removeProperty("background-color"),n.style.setProperty("backgroundColor",m,u),n.style.removeProperty("opacity"),n.style.setProperty("opacity",b,f)}catch(w){console.error(`Failed to remove highlight: ${w}`)}},r.removeHighlightTimers.push(setTimeout(()=>{r.removeHighlightFunctions?.[y]&&(delete r.removeHighlightFunctions[y],r[y]())},2750)),r.removeHighlightFunctions[y]=r[y]}catch(r){throw console.error(r),r}},t?.color,{timeout:2500}),!0}catch(n){return this.logger.debug({err:n},"Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests."),!1}}async wrapPossibleNavigation(e,t=3e3){if(this.networkSettings.autoWaitForNetworkIdle===!1)return e();let n=await this.url(),o=Date.now(),r=new Map,l=new Map,s=h=>{let g=ht(h.request());l.set(g,(l.get(g)??0)+1);let y=h.status();y>=500&&this.logger.warn({request:g,status:y},"Received 500 level response")},c=h=>{let g=ht(h);vn(h,n)&&(r.set(g,(r.get(g)??0)+1),o=Date.now())};this.page.on("response",s),this.page.on("request",c),await this.page.waitForTimeout(0);let d=Date.now(),m=await e();for(;;){if(Date.now()-d>2e3){this.logger.warn("Timeout elapsed waiting for network stable");break}if(Date.now()-o>750){this.logger.debug(`Network stable in ${Date.now()-d}ms`);break}await L(250)}let u=Date.now(),b=new Set;for(;;){if(Date.now()-u>t){this.logger.warn({requests:Array.from(b).slice(0,10)},"Timeout elapsed waiting for requests to complete");break}let h=!1;b=new Set;for(let g of r.keys())r.get(g)!==l.get(g)&&(h=!0,b.add(g));if(!h){this.logger.debug({url:await this.url(),requests:Array.from(r.entries()).slice(0,10)},`Network idle in ${Math.floor(Date.now()-u)}ms`);break}await L(250)}this.page.off("request",c),this.page.off("response",s);let f=await this.url();if(this.originsVisited.add(new URL(f).origin),Qt(f,n)){this.logger.debug({startUrl:n,newUrl:f},"Detected url change in wrapPossibleNavigation, waiting for load state");let h=await this.getUserPageOrFrame();await h.waitForLoadState("domcontentloaded",{timeout:this.networkSettings.pageLoadTimeoutMs??8e3});try{await h.waitForLoadState("load",{timeout:t})}catch{this.logger.warn({url:await this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}return m}getOpenPages(){return this.context.pages().map(e=>e.url())}async saveNodeDetailsToCache(e,t,n){if(e&&(t.id=e.id,t.content=e.content,t.name=e.name,t.role=e.role,t.numChildren=e.children.length,t.serializedForm=e.getSerializedFormWithContext(),t.nodeOnlySerializedForm=e.getNodeOnlySerializedForm()),t.generatedSelectors&&t.generatedSelectors.length>1)return;if(!n){this.logger.debug("No data-momentic-id found for target, skipping HTML attribute generation");return}let o=await this.getUserPageOrFrame();try{let r=await this.fetchHtmlAttributes(n,o);Object.assign(t,r)}catch(r){this.logger.error({err:r},"Failed to fetch HTML attributes for target")}}async ensureMomenticBrowserScriptsLoaded(){let e=Date.now();for(;Date.now()-e<8e3;)try{await(await this.getUserPageOrFrame()).evaluate(()=>{let t=window;if(!(t.generateCssSelectors&&t.generateHtmlCacheAttributes&&t.ldist))throw new Error("Not loaded yet")},{timeout:2500});return}catch(t){this.logger.debug({err:t},"Waiting for momentic browser scripts to load..."),await L(250)}throw new Error(`Failed to load momentic browser scripts on page ${await this.url()}`)}async resolveSelectorCombinationInPage(e){if(e.length)try{return await(await this.getUserPageOrFrame()).evaluate(Cn,e)}catch(t){this.logger.debug(`Error checking CSS selector combination: ${t}`);return}}async resolveTargetUsingCssSelectors(e,t){if(!t.generatedSelectors||t.generatedSelectors.length<2)return;let n,o,r,l=[];for(let s=0;s<t.generatedSelectors.length;s++)for(let c=0;c<t.generatedSelectors.length;c++){let d=t.generatedSelectors[s],m=t.generatedSelectors[c];d!==m&&l.push([d,m])}for(let s of l){let c=await this.resolveSelectorCombinationInPage(s);if(!c)continue;let{momenticId:d}=c,m=parseInt(d);if(!t.serializedHtml)continue;let u=await e.evaluate(En,m);if(!u)continue;let b=Ln(u,t.serializedHtml)/Math.max(u.length,t.serializedHtml.length);if(b>.2){this.logger.debug({target:t,candidateSerializedHtml:u,levenshteinRatio:b,combo:s},"Rejecting CSS selector due to html ldist");continue}n={a11yNode:void 0,locator:e.locator(s[0]),displayString:u},o=m,r=s;let f=this.dataMomenticIdToNodeMap.get(m);if(!f){this.logger.debug({target:t,proposedNode:n.displayString,selectors:s},"Matched CSS selector successfully using html-only comparison");break}let h=pt(f,t);if(h<6){n=void 0,o=void 0,r=void 0,this.logger.debug({target:t,proposedNode:f.getNodeOnlySerializedForm(),comparisonScore:h,combo:s},"Rejecting CSS selector due to a11y score");continue}else n.a11yNode=f;this.logger.debug({target:t,proposedNode:n.displayString,comparisonScore:h,selectors:s},"Matched CSS selector successfully using html + a11y comparison");break}if(n)return t.generatedSelectors=void 0,await this.saveNodeDetailsToCache(n.a11yNode,t,o),t.generatedSelectors=Array.from(new Set([...r??[],...t.generatedSelectors??[]])),n}async resolveTarget(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target called"),await this.ensureMomenticBrowserScriptsLoaded(),e.id>0&&!bt(e)){let o=this.a11yIdToNodeMap.get(e.id);if(!o)throw new H("InternalWebAgentError",`Resolving target failed because id ${e.id} does not exist on the page. This generally indicates an incorrect element was targeted.`);return await this.saveNodeDetailsToCache(o,e,o.dataMomenticId),{locator:await this.getLocatorFromA11yNode(o),a11yNode:o,displayString:o.getNodeOnlySerializedForm()}}let n=await this.getUserPageOrFrame();if(e.id<0&&e.selector){let o=n.locator(e.selector),r;try{r=await pn(o)}catch(l){throw new Error(`'${e.selector}' failed to resolve: ${l}`)}return{locator:o,a11yNode:void 0,displayString:r}}if(!t){let o=(await this.getA11yTree({skipWait:!0})).serialize();this.logger.debug({tree:o},"Got a11y tree for css resolution")}if(e.generatedSelectors){let o=await this.resolveTargetUsingCssSelectors(n,e);if(o)return o;e.generatedSelectors=void 0}if(!t){let o=(await this.getA11yTree({skipWait:!1})).serialize();this.logger.debug({tree:o},"Got a11y tree for a11y resolution")}if(e.serializedForm){let o=1/0,r,l;for(let s of this.a11yIdToNodeMap.values()){let c=s.getSerializedFormWithContext(),d=Ln(e.serializedForm,c);d<o?(o=d,r=s,l=void 0):d===o&&(l=s)}if(r&&o<Math.ceil(.15*e.serializedForm.length)&&o<50)if(l&&o!==0)this.logger.debug({equalNodeSerialized:l.getSerializedFormWithContext()},"Multiple nodes with same distance, refusing to resolve using levenshtein distance");else return this.logger.debug({newNodeSerializedForm:r.getSerializedFormWithContext(),distance:o,originalLength:e.serializedForm.length,target:e},"Resolved cached a11y target to new node with pure levenshtein distance"),await this.saveNodeDetailsToCache(r,e,r.dataMomenticId),{a11yNode:r,locator:await this.getLocatorFromA11yNode(r),displayString:r.getNodeOnlySerializedForm()};else this.logger.debug({closestDistance:o,closestNode:r?.getLogForm()},"No close a11y node found by levenshtein distance")}if(e.nodeOnlySerializedHtml)try{let o=await n.evaluate(An,{serializedHtml:e.nodeOnlySerializedHtml,distanceThreshold:Math.ceil(.2*e.nodeOnlySerializedHtml.length)}),r=parseInt(o.dataMomenticId??""),l=this.dataMomenticIdToNodeMap.get(r);if(l)return this.logger.debug({result:o,a11yNode:l.getLogForm(),target:e},"Resolved cached a11y target to new node with pure html levenshtein distance"),await this.saveNodeDetailsToCache(l,e,r),{a11yNode:l,locator:await this.getLocatorFromA11yNode(l),displayString:l.getNodeOnlySerializedForm()};this.logger.debug({result:o},"Failed to find a11y node corresponding to html levenshtein comparison result")}catch(o){this.logger.debug({err:o},"Error finding closest HTML node by levenshtein distance")}throw this.logger.debug({target:e},"Failed to find any relevant node"),new Error(`Could not find any relevant node given cached target: ${JSON.stringify(e)}`)}async resolveTargetWithXY(e,t=!1){if(this.logger.debug({target:e,skipFetchTree:t},"Resolve target through x / y positioning called"),!t){let r=(await this.getA11yTree({})).serialize();this.logger.debug({tree:r},"Got a11y tree for x / y resolution")}let n=await this.getTargetFromPositionPercentages(e);if((n.generatedSelectors??[]).length>0)return{locator:(await this.getUserPageOrFrame()).locator(n.generatedSelectors[0]),a11yNode:this.a11yIdToNodeMap.get(n.id),displayString:n.nodeOnlySerializedHtml??n.nodeOnlySerializedForm??"Unknown element"};let o=this.a11yIdToNodeMap.get(n.id);if(o&&o.dataMomenticId)return{locator:(await this.getUserPageOrFrame()).locator(`[${V}="${o.dataMomenticId}"]`),a11yNode:o,displayString:o.getNodeOnlySerializedForm()};throw new Error("Could not resolve target with x / y through either raw HTML or the accessibility tree")}async typeIntoTarget(e,t,n={}){let o=2;for(;o>0;)try{await t.click({force:n.force,timeout:2500});break}catch(r){if(o--,o===0)throw r;this.logger.warn({err:r},"Failed clicking on element for typing")}this.highlightTarget(t),await this.type(e,n)}async click(e,t={}){this.highlightTarget(e);let n=await this.url(),o=this.getOpenPages(),r=2;for(;r>0;)try{t.doubleClick?await this.wrapPossibleNavigation(async()=>{await e.dblclick({button:t.rightClick?"right":"left",force:t.force,timeout:2500})}):await this.wrapPossibleNavigation(async()=>e.click({button:t.rightClick?"right":"left",force:t.force,timeout:2500})),this.logger.info("Click completed on element");break}catch(s){if(r--,r===0)throw s;this.logger.warn({err:s},"Failed clicking on element, retrying")}let l;if(t.waitForUrl){let c=this.networkSettings.pageLoadTimeoutMs??8e3;for(let d=0;d<4;d++){if(l=this.getOpenPages(),l.length!==o.length)for(let m=l.length-1;m>=0;m--){let u=l[m];if(u!==n){await this.switchToPage(u,m);break}}try{await(await this.getUserPageOrFrame()).waitForURL(t.waitForUrl,{timeout:Math.min(c/4,500)});break}catch(m){if(d===3)throw m}}}}async dragAndDrop(e,t,n={}){let o={timeout:5e3,force:n.force};await e.hover(o),await this.page.mouse.down(),await t.hover(o),await L(n.hoverSeconds?Math.min(n.hoverSeconds*1e3,5e3):500),await this.page.mouse.up()}async mouseDrag(e,t,n,o,r={}){let l=Object.assign({timeout:2500},r);o&&await o.hover(l);let s=await(await this.getUserPageOrFrame()).evaluate(gn);s||(this.logger.warn("Could not get current mouse position before mouse drag action, defaulting to 0,0"),s={left:0,top:0}),await this.page.mouse.down(),await this.page.mouse.move(e+s.left,t+s.top,{steps:n}),await L(250),await this.page.mouse.up()}async hover(e){this.highlightTarget(e),await e.hover({timeout:2500})}async focus(e){this.highlightTarget(e),await e.focus({timeout:2500})}async blur(e){this.highlightTarget(e),await e.blur({timeout:2500})}async selectOption(e,t){this.highlightTarget(e);let n={timeout:2500,force:!1},o=2;for(;o>0;)try{await e.selectOption(t,n),this.logger.info(`Selected '${t}' from dropdown`);break}catch(r){if(o--,o===0)throw r;this.logger.warn({err:r},"Failed selecting option, retrying with force enabled"),n.force=!0}}async press(e){this.localMode&&this.activeFrame&&(await(await this.getUserPageOrFrame()).evaluate(()=>{let n=document.activeElement;return n&&n.tagName.toLowerCase()!=="body"})||(this.logger.warn(`No element on the page is currently focused, clicking on <body> before pressing ${e}`),await(await this.getUserPageOrFrame()).locator("body").click())),await this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))}async refresh(e){if(this.localMode&&this.activeFrame){let n=(await this.getUserPageOrFrame()).url();await this.navigate({url:n,loadTimeoutMs:e?.loadTimeoutMs,networkIdleTimeoutMs:e?.networkIdleTimeoutMs})}else{let t=async()=>this.page.reload({timeout:e?.loadTimeoutMs??this.networkSettings.pageLoadTimeoutMs??8e3});e?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(t,e.networkIdleTimeoutMs):await t()}}async getActiveFrameCdpId(){if(!this.activeFrame)return;let e;this.activeFrame.type==="name"?e=`document.querySelector("iframe[name='${this.activeFrame.name}']")`:this.activeFrame.url.startsWith("/")&&this.activeFrame.url.endsWith("/")?e=`Array.from(document.querySelectorAll("iframe")).find(iframe => ${this.activeFrame.url}.test(iframe.src))`:e=`document.querySelector("iframe[src='${this.activeFrame.url}']")`;let{result:t,exceptionDetails:n}=await this.cdpClient.send("Runtime.evaluate",{expression:e});if(n)throw new Error(`Could not find frame with expression ${e}: ${n.exception?.description}`);let o=t.objectId;if(!o)throw new Error(`Could not find frame with expression ${e}`);try{return{pageFrameId:(await this.cdpClient.send("DOM.describeNode",{objectId:o})).node.frameId}}catch(r){throw new Error(`Error resolving iframe: ${r}`)}}async getA11yTree({skipWait:e=!1,filterByViewport:t=!1,logger:n=this.logger,maxAttempts:o=2}){let r=null,l=0,s=await this.url(),c;for(;!r&&l<o;){let d=async()=>{let m=await this.getViewportOffsetDetails(),u=await this.getActiveFrameCdpId(),b=await this.getRawA11yTree({skipWait:e,iframeId:u?.pageFrameId,logger:n}),f=await this.getDOMTree(m.devicePixelRatio,u?.pageFrameId);if(r=un({a11yGraph:b,domGraph:f,logger:n,filterByViewport:t,viewportDetails:m}),!r||!r.root)throw new Error("Accessibility tree appears empty");this.a11yIdToNodeMap=r.a11yIdNodeMap,this.dataMomenticIdToNodeMap=r.dataMomenticIdMap,this.domGraph=f};try{l++,await Promise.race([d(),L(2500)])}catch(m){c=m instanceof Error?m.message:`${m}`,l<o&&(n.warn({err:m,url:s},"Error getting a11y tree, retrying..."),await L(1e3))}}if(!r)throw new H("ActionFailureError",`Getting accessibility tree failed after ${o} attempts: ${c}`);return r}getA11yIdFromDataMomenticId(e){return this.dataMomenticIdToNodeMap.get(e)?.id}async getViewportOffsetDetails(){let[e,t,n,o,r]=await(await this.getUserPageOrFrame()).evaluate(()=>[window.scrollY,window.scrollX,window.screen.width,window.screen.height,window.devicePixelRatio]);return{upperBound:e,lowerBound:e+o,leftBound:t,rightBound:t+n,width:n,height:o,devicePixelRatio:this.systemDevicePixelRatio??r}}async getDOMTree(e,t){let n,o=0;for(;!n&&o<3;)try{if(n=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:Fe}),!n||!n.documents.length)throw new Error("Got empty DOM tree")}catch(r){await L(250),this.logger.error({err:r},"Error fetching DOM tree"),o++}if(!n||!n.documents.length)throw new H("InternalWebAgentError","Error fetching DOM tree");return mn({snapshot:n,devicePixelRatio:e,pageFrameId:t})}async getRawA11yTree({skipWait:e=!1,iframeId:t=void 0,logger:n=this.logger}){let o=await this.url(),r=Date.now(),l=()=>{r=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",l);let s=!1,c=()=>{n.debug({url:o},"Accessibility load event fired on page"),s=!0,r=Date.now()};this.cdpClient.addListener("Accessibility.loadComplete",c);let d=Date.now(),m=!e;for(;!e&&Date.now()-d<3e3;)if(await L(250),!(!s&&Date.now()-d<1e3)&&Date.now()-r>=750){m=!1;break}n.debug({duration:Date.now()-d,eventReceived:s,timeoutTriggered:m,skipWait:e},"A11y wait phase completed"),await(await this.getUserPageOrFrame()).evaluate(bn);let u;if(t)u=(await this.cdpClient.send("Accessibility.getRootAXNode",{frameId:t})).node.backendDOMNodeId;else{let{node:f}=await this.cdpClient.send("Accessibility.getRootAXNode");u=f.backendDOMNodeId}let{nodes:b}=await this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:u});if(this.cdpClient.removeListener("Accessibility.loadComplete",c),this.cdpClient.removeListener("Accessibility.nodesUpdated",l),!b||b.length<=1)throw new H("ActionFailureError","No content in accessibility tree");return{root:b[0],allNodes:b}}async clickUsingVisualCoordinates(e){let t=await this.getElementLocation(e);if(!t)throw new Error(`Could not find element location with backend node id: ${e}`);this.logger.debug({location:t},"Executing mouse click"),await this.page.mouse.click(t.centerX,t.centerY)}getAttributeFromStringArray(e,t){let n=e.findIndex(o=>o===t);if(!(n===-1||!e[n+1]))return e[n+1]}async getIDAttributeUsingCDP(e){await this.cdpClient.send("DOM.getDocument",{depth:0});let t=await this.cdpClient.send("DOM.requestNode",{objectId:e}),o=(await this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,r=this.getAttributeFromStringArray(o,V);if(!r)throw new Error(`Could not find attribute ${V} for object ${e}`);return r}async getLocatorFromA11yNode(e){if(!e.backendNodeID)throw new Error(`Node with a11y id ${e.id} has no backend node ID`);return this.getLocatorFromBackendID(e.backendNodeID)}async getLocatorFromBackendID(e){let t=await this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);let n;try{n=await this.getIDAttributeUsingCDP(t.object.objectId)}catch(o){throw this.logger.error({err:o,object:JSON.stringify(t.object)},"Failed to get ID attribute"),o}return(await this.getUserPageOrFrame()).locator(`[${V}="${n}"]`)}async clickUsingCDP(e,t={}){let n=0,o,r=async c=>{let d=await this.getLocatorFromBackendID(c);t.doubleClick?await d.dblclick({timeout:2500}):await d.click({timeout:2500,button:t.rightClick?"right":"left",force:t.force})};for(;n<2;)try{return await r(e.backendNodeID),e}catch(c){this.logger.error({err:c},"Failed clicking on node"),o=c,n++,await L(1e3)}let l=e.parent?.children??[];for(let c of l){if(c.id===e.id)continue;let d=!1,m=pt(c,e);if(e.name&&c.name===e.name?d=!0:m>=5&&(this.logger.debug({similarityScore:m},"Sibling qualified for click redirection through comparison score"),d=!0),!!d)try{return await r(c.backendNodeID),c}catch(u){this.logger.debug({err:u,candidate:c.getLogForm()},"Failed clicking on sibling during click redirection")}}let s=e.parent;for(n=0;n<on;){if(!s||["rootwebarea","main"].includes(s.role.toLowerCase()))throw new H("ActionFailureError",o.message,{cause:o});if(!s.backendNodeID){s=s.parent;continue}try{return await r(s.id),s}catch(d){this.logger.debug({err:d,candidate:s.getLogForm()},"Failed clicking on parent during click redirection"),n++,s=s.parent}}throw new H("ActionFailureError",`Max click attempts exhausted on element ${e.getLogForm()}: ${o.message}`,{cause:o})}async getElementLocation(e){let t=await this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=await this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let o=t.documents[0],r=o.layout,l=o.nodes,s=l.nodeName||[],c=l.backendNodeId||[],d=r.nodeIndex,m=r.bounds,u=-1;for(let v=0;v<s.length;v++)if(c[v]===e){u=d.indexOf(v);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[b=0,f=0,h=0,g=0]=m[u];b/=n,f/=n,h/=n,g/=n;let y=b+h/2,w=f+g/2;return{centerX:y,centerY:w}}async scroll(e,t,n,o){let r=t==="left"?-1:1,l=o==="up"?-1:1;if(this.activeFrame)await(await this.getUserPageOrFrame()).evaluate(([c,d,m,u])=>window.scrollTo(window.scrollX+(c??window.innerWidth)*m,window.scrollY+(d??window.innerHeight)*u),[e,n,r,l]);else{let s=this.page.viewportSize()||et;await this.page.mouse.wheel((e??s.width)*r,(n??s.height)*l)}}async scrollUp(e){await this.scroll(0,null,e??null,"up")}async scrollDown(e){await this.scroll(0,null,e??null,"down")}async scrollLeft(e){await this.scroll(e??null,"left",0,null)}async scrollRight(e){await this.scroll(e??null,"right",0,null)}async goForward(){let e=this.activeFrame;await this.wrapPossibleNavigation(async()=>this.localMode&&e&&e.type==="name"?(await this.getUserPageOrFrame()).evaluate(t=>{let n=t().contentWindow;n?n.history.forward():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${e.name}"]`)):this.page.goForward({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async goBack(){let e=this.activeFrame;await this.wrapPossibleNavigation(async()=>this.localMode&&e&&e.type==="name"?(await this.getUserPageOrFrame()).evaluate(t=>{let n=t().contentWindow;n?n.history.back():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${e.name}"]`)):this.page.goBack({waitUntil:"domcontentloaded",timeout:this.networkSettings.pageLoadTimeoutMs??8e3}))}async createNewTab(e,t){let n=await this.context.newPage();this.page=n,await this.navigate({url:e,initialNavigation:!0,...t}),this.originsVisited.add(new URL(e).origin)}async switchToPage(e,t,n){let o=async(l,s)=>{let c=l.url();this.logger.info(`Switching to tab ${s} with url ${c}`),this.originsVisited.add(new URL(c).origin),this.page=l,await this.initCDPSession(n?.loadTimeoutMs),await this.attachNavigationHandler(this.page.mainFrame());try{let d=async()=>{let m=n?.loadTimeoutMs??8e3;await l.waitForLoadState("domcontentloaded",{timeout:m});try{await l.waitForLoadState("load",{timeout:m})}catch{this.logger.warn({url:c},"Timeout elapsed waiting for load state, continuing anyways...")}};n?.networkIdleTimeoutMs?await this.wrapPossibleNavigation(d,n.networkIdleTimeoutMs):await d()}catch{this.logger.warn({url:c},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}},r=this.context.pages();if(t){await o(r[t],t);return}for(let l=0;l<r.length;l++){let s=r[l];if(s.url().includes(e)){await o(s,l);return}}throw new Error(`Could not find page with url containing ${e}`)}async frameNavigationHandler(e){if(!!e.parentFrame()===this.localMode)try{let t=new URL(e.url()).origin;if(!t||t==="about:blank"||this.originsVisited.has(t)||t==="null")return;this.logger.debug(`Adding ${t} to visited set`),this.originsVisited.add(t)}catch(t){this.logger.debug({err:t},"Failed to add run page setup handler")}}async attachNavigationHandler(e){await this.frameNavigationHandler(e),this.page.off("framenavigated",t=>this.frameNavigationHandler(t)),this.page.on("framenavigated",t=>this.frameNavigationHandler(t))}async setCookie(e){let t=Wt(e);this.logger.debug({cookieSettings:t},"Adding cookies to session"),await this.context.addCookies(t)}async setLocalStorage(e,t){await(await this.getUserPageOrFrame()).evaluate(([o,r])=>{o&&localStorage.setItem(o,r||"")},[e,t])}async solveCloudflareTurnstile(){let t=(await this.getUserPageOrFrame()).locator(".cf-turnstile").locator("iframe").getAttribute("data-sitekey"),n=await fetch("https://2captcha.com/in.php",{method:"POST",body:JSON.stringify({key:pe,method:"turnstile",sitekey:t,pageurl:await this.url(),json:1})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{request:o}=await n.json(),r=Date.now(),l="";for(;Date.now()-r<6e4;){await L(2500);let s=await fetch(`https://2captcha.com/res.php?key=${pe}&action=get&id=${o}&json=1`,{method:"GET"});if(!s.ok){let d=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},d),new Error(d)}let c=await s.json();if(c.status===1){l=c.request;break}}}async solveCaptcha(){await this.getA11yTree({});let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=await this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=await(await this.getUserPageOrFrame()).solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=await e.screenshot({type:"jpeg",animations:"allow",caret:"hide",quality:100,timeout:2500}),n=await fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:pe,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:await n.text()},s),new Error(s)}let{taskId:o}=await n.json(),r=Date.now(),l="";for(;Date.now()-r<6e4;){await L(2500);let s=await fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:pe,taskId:o})});if(!s.ok){let d=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:await s.text()},d),new Error(d)}let c=await s.json();if(c.errorId){let d=`Captcha solution API returned error ID ${c.errorId}`;throw this.logger.error(d),new Error(d)}if(c.status==="ready"){l=c.solution.text;break}}if(!l)throw new Error("Captcha solution timed out");return l}getActiveFrame(){return this.activeFrame}async captureTargetFromClick(){let e=await this.getA11yTree({skipWait:!0});this.mostRecentA11yTree=e,this.logger.debug({tree:this.mostRecentA11yTree},"Refreshed a11y tree before target capture");let t=!1,n=setInterval(()=>{(async()=>{if(!t){t=!0;try{this.mostRecentA11yTree=await this.getA11yTree({skipWait:!0,maxAttempts:1,logger:ze}),Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(c){this.logger.error({err:c},"Failed to get a11y tree in target capture click handler")}finally{t=!1}}})()},ct),o=[];try{o=await(await this.getUserPageOrFrame()).evaluate(async()=>{let s=window,c=null;s.targetCaptureClickListener=async u=>{console.log("[Momentic] Target capture listener fired",u.target),u.preventDefault(),c=u.target},document.addEventListener("click",s.targetCaptureClickListener,{capture:!0,once:!0});let d=15e3;for(;!c&&d>0;)await new Promise(u=>setTimeout(u,100)),d-=100;if(!c)throw new Error("Timed out waiting for user to click on an element");let m=c;return[m.getAttribute(V),m.parentElement?.getAttribute(V),m.parentElement?.parentElement?.getAttribute(V)].filter(u=>!!u)})}catch(s){throw new Error(`Failed to capture: ${s.message}`)}finally{clearInterval(n)}if(!o.length)throw new Error("Selected element did not have Momentic handlers attached - if it appeared recently, please wait for the page to stabilize before clicking");let r;for(let s of o)if(r=this.getA11yIdFromDataMomenticId(parseInt(s)),r)break;if(!r)throw new Error("Selected element is not interactive - please try a neighboring or parent element instead");let l={id:r};return await this.resolveTarget(l,!0),l}areDomNodeBoundingBoxesSimilar(e,t,n){if(!t.bounds)return this.logger.debug({candidate:t},"Filtering out click candidate since it has no bounding box"),!1;let o=e.bounds,r=o.x??0,l=o.width??0,s=o.height??0,c=r+l,d=o.y??0,m=d+(o.height??0),u=t.bounds,b=u.width??0,f=u.height??0,h=u.x??0,g=h+(u.width??0),y=u.y??0,w=y+(u.height??0);return h<c&&g>r&&y<m&&w>d?Math.abs(l-b)<200&&Math.abs(s-f)<200?!0:(de({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t,originalNode:e},"Filtering out click candidate since it has a significantly different area"),!1):(de({logger:this.logger,logKey:n,maxCount:5,intervalMs:3e3},{candidate:t},"Filtering out click candidate since it does not intersect with the original node"),!1)}getDomCandidatesInA11yTree(e,t){let n=Object.values(t.backendIdToNode),o,r=mr();for(let d of n)if(d.attributes?.[V]===e){o=d;break}if(!o)return[];let l=[],s=t.backendIdToNode[o.parentBackendNodeId??-1];for(;s&&(s?.momenticIgnored||!this.areDomNodeBoundingBoxesSimilar(o,s,r));)s=t.backendIdToNode[s.parentBackendNodeId??-1];s&&l.push(s);let c=[o];for(;c.length;){let d=c.shift();for(let m of d.children??[]){let u=t.backendIdToNode[m];u&&!u.momenticIgnored&&this.areDomNodeBoundingBoxesSimilar(o,u,r)?l.push(u):u&&c.push(u)}}return l}async exposeRecordingBindings(){let e=({frame:t},n,o)=>{if(!this.transformer)return;this.logger.info({dataMomenticId:n,htmlAttributes:o},"Click captured on element");let r=this.domGraph,l=this.dataMomenticIdToNodeMap,s=this.mostRecentA11yTree,c=t.url(),d,m,u=l.get(n),b=[];if(u)d={id:u.id,...o};else{b=this.getDomCandidatesInA11yTree(`${n}`,r);for(let f of b){let h=parseInt(f.attributes?.[V]??"");if(isNaN(h))continue;let g=l.get(h);if(!g){this.logger.warn({candidate:f},"Candidate DOM node doesn't exist in the a11y tree");continue}u=g,m=g.id,d={id:m,...o},this.logger.debug({newNode:u?.getLogForm()},"Redirected click on non-accessible element to nearest a11y node");break}}(!u||!d)&&(this.logger.warn({url:c,htmlAttributes:o,a11yIntersectionNodes:b},"Could not find corresponding accessibility node for click. Continuing with HTML attributes only"),d={id:-1,...o}),(async()=>{if(!this.transformer){this.logger.debug("No click translation since transformer is not initialized anymore");return}this.logger.info({target:d,url:c},"Generating description for clicked target");let f=s.serialize();if(u){let h=f.indexOf(`id="${u.id}"`);f=f.slice(0,h+1e3),f.length>3e4&&(f=s.pruneUsingRelevantIds(new Set([u.id])).serialize())}try{await this.transformer.recordClick({target:d,browserState:f,url:c})}catch(h){this.logger.error({err:h},"Failed capturing click in transformer")}})()};await this.context.exposeBinding("captureClick",({frame:t},n,o)=>{try{e({frame:t},n,o)}catch(r){this.logger.error({err:r},"Failed to capture click in captureClick handler")}},{handle:!1}),await this.context.exposeBinding("captureKeystroke",async({},{key:t,url:n})=>{this.transformer&&(this.logger.info({key:t},"Captured keypress"),this.transformer.recordKeystroke(t,n))})}async startRecording(e,t){this.logger.info("Starting passive recording mode in Chrome browser"),this.transformer=t;let n=await this.getA11yTree({skipWait:!0});this.mostRecentA11yTree=n;let o,r=[async()=>{this.transformer=void 0}];(()=>{if(o)return;let s=!1,c=async()=>{if(!s){s=!0;try{let d=await this.getA11yTree({skipWait:!0,maxAttempts:1,logger:ze});this.mostRecentA11yTree=d,Math.random()<.1&&this.logger.debug({tree:this.mostRecentA11yTree.serialize()},"Refreshed a11y tree during recording")}catch(d){this.logger.warn({err:d},"Failed to get a11y tree in frame navigation listener")}s=!1}};o=setInterval(()=>{!this.transformer||e.aborted||c()},ct),r.push(async()=>{clearInterval(o),o=void 0})})(),e.addEventListener("abort",async()=>{for(let s of r)try{await s()}catch(c){this.logger.warn({err:c},"Recording cleanup function failed, continuing...")}})}async getSelectOptions(e){return await e.evaluate(n=>Array.from(n.querySelectorAll("option")).map(r=>r.value))}async getCondensedHtml(){let e=await this.getUserPageOrFrame();await this.ensureMomenticBrowserScriptsLoaded();let t=await e.evaluate(()=>window.getCondensedHtmlTree?.());if(!t)throw new H("InternalWebAgentError","Empty HTML tree");return hr.html(t,{indent_size:1,indent_with_tabs:!1,preserve_newlines:!1,wrap_line_length:80})}async registerDialogHandler(e){let t=async n=>e==="ACCEPT"?n.accept():n.dismiss();this.page.once("dialog",t)}async executePageFunction(e,t){return(await this.getUserPageOrFrame()).evaluate(e,t)}async getDomNodeFromPositionPercentages({percentX:e,percentY:t}){if(e<0||e>1||t<0||t>1)throw new H("InternalWebAgentError","Invalid percent passed to percentage location");let{width:n,height:o,upperBound:r,leftBound:l}=await this.getViewportOffsetDetails(),s=Math.ceil(n*e),c=Math.ceil(o*t);await this.cdpClient.send("DOM.getDocument",{depth:0});let d;try{d=await this.cdpClient.send("DOM.getNodeForLocation",{x:s+l,y:c+r})}catch{throw new Error("No element was found at the given location")}return d}async highlightFromPositionPercentages(e){let t;try{t=await this.getDomNodeFromPositionPercentages(e)}catch{}return t?(await this.cdpClient.send("Overlay.highlightNode",{highlightConfig:Ue,backendNodeId:t.backendNodeId}),async()=>{try{await this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:t?.backendNodeId})}catch{}}):async()=>{}}async clearAllCdpHighlights(){try{await this.cdpClient.send("Overlay.hideHighlight")}catch{}}async getTargetFromPositionPercentages(e){let t=await this.getDomNodeFromPositionPercentages(e),n=this.domGraph?.backendIdToNode[t.backendNodeId],o=n?.attributes[V],r=parseInt(o??"");if(!n||!o||isNaN(r))throw new Error("No HTML node was found at the given location");for(let d of this.a11yIdToNodeMap.values()){if(d.backendNodeID!==t.backendNodeId)continue;let m={id:d.id};return await this.saveNodeDetailsToCache(d,m,parseInt(o)),m}let l=this.getDomCandidatesInA11yTree(`${o}`,this.domGraph);for(let d of l){let m=parseInt(d.attributes?.[V]??"");if(isNaN(m))continue;let u=this.dataMomenticIdToNodeMap.get(m),b=u?.id;if(!b)continue;let f={id:b};return await this.saveNodeDetailsToCache(u,f,parseInt(o)),this.logger.debug({target:f},"Redirected click on non-accessible element to nearest a11y node"),f}return{id:-1,...await this.fetchHtmlAttributes(r)}}async fetchHtmlAttributes(e,t){t=t??await this.getUserPageOrFrame();let n=await t.evaluate(o=>{let r=window;if(!r.generateHtmlCacheAttributes)throw new Error("generateHtmlCacheAttributes is not defined on the window object");return r.generateHtmlCacheAttributes(o)},e);return this.logger.debug(n,"Generated HTML attributes for target"),n}async toggleInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:{showInfo:!0,showAccessibilityInfo:!0,contentColor:{r:147,g:196,b:125,a:.55}}})}async moveMouseFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:o,height:r}=n,l=Math.ceil(o*e),s=Math.ceil(r*t);await this.page.mouse.move(l,s,{steps:3})}async scrollFromPositionPercentages(e,t){let n;try{n=await this.getViewportOffsetDetails()}catch{return}let{width:o,height:r}=n,l=Math.ceil(o*e),s=Math.ceil(r*t);return await this.page.mouse.wheel(l,s),{deltaX:l,deltaY:s}}async startInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"searchForNode",highlightConfig:Ue})}async stopInspectMode(){await this.cdpClient.send("Overlay.setInspectMode",{mode:"none",highlightConfig:Ue}),await this.clearAllCdpHighlights()}canSolveCaptchas(){return!!pe}async getFrameSrcUrls(){let e=this.page.url(),t=this.page.frames().filter(r=>!r.name().startsWith(ot)),n=(await Promise.all(t.map(async r=>{try{return(await r.frameElement()).getAttribute("src")}catch{return null}}))).filter(r=>r!==null&&r!=="about:blank"&&r!==e);return Array.from(new Set(n))}setFileChooserHandler(e){this.page.once("filechooser",async t=>{await t.setFiles(e),setTimeout(()=>{try{pr(e,{force:!0})}catch(n){this.logger.warn({err:n,filePath:e},"Failed cleaning up file after upload")}},3e4)})}};var Tr={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},Cr=Tr;import{z as Ir}from"zod";import Er from"fetch-retry";var Ar=Er(global.fetch),U=class{static API_VERSION="v1";baseURL;apiKey;constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}async sendRequest(e,t){let n=await Ar(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${await n.text()}`);return n.json()}};var ft=class extends U{constructor(e){super(e)}async getRecommendedChunks(e){let t=await this.sendRequest(`/${U.API_VERSION}/web-agent/recommend-chunks`,e);return Jt.parse(t)}async getScreenshotFromS3(e){let t=await this.sendRequest(`/${U.API_VERSION}/s3/visual-diff-screenshot`,{url:e});return Ir.string().parse(t)}async getElementLocation(e,t){let n=await this.sendRequest(`/${U.API_VERSION}/web-agent/locate-element`,{browserState:e.browserState,goal:e.goal,disableCache:t});return lt.parse(n)}async getElementLocationWithVision(e,t){let n=await this.sendRequest(`/${U.API_VERSION}/web-agent/visual-locate`,{goal:e.goal,screenshot:e.screenshot?.toString("base64"),hintActivatedScreenshot:e.hintActivatedScreenshot?.toString("base64"),disableCache:t});return lt.parse(n)}async getAssertionResult(e,t,n){if(t){let r=await this.sendRequest(`/${U.API_VERSION}/web-agent/assertion`,{url:e.url,goal:e.goal,screenshot:e.screenshot?.toString("base64"),disableCache:n,vision:!0});return st.parse(r)}let o=await this.sendRequest(`/${U.API_VERSION}/web-agent/assertion`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:n,vision:!1});return st.parse(o)}async getProposedCommand(e,t){let n=await this.sendRequest(`/${U.API_VERSION}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:t});return Yt.parse(n)}async getGranularGoals(e,t){let n=await this.sendRequest(`/${U.API_VERSION}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t});return Xt.parse(n)}async getReverseMappedDescription(e,t){let n=await this.sendRequest(`/${U.API_VERSION}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t});return Kt.parse(n)}async getTextExtraction(e,t){let n={goal:e.goal,browserState:e.browserState,returnSchema:e.returnSchema,disableCache:t},o=await this.sendRequest(`/${U.API_VERSION}/web-agent/text-extraction`,n);return Qe.parse(o)}};export{ft as APIGenerator,gt as ChromeBrowser,X as CommandType,Cr as DEFAULT_CONTROLLER_CONFIG,le as StepType};
