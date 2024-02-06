var Nt=Object.defineProperty,Lt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var Ge=(o,e,t)=>e in o?Nt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,L=(o,e)=>{for(var t in e||(e={}))Dt.call(e,t)&&Ge(o,t,e[t]);if(Be)for(var t of Be(e))Mt.call(e,t)&&Ge(o,t,e[t]);return o},B=(o,e)=>Lt(o,Ot(e));var c=(o,e,t)=>new Promise((n,r)=>{var i=d=>{try{s(t.next(d))}catch(p){r(p)}},a=d=>{try{s(t.throw(d))}catch(p){r(p)}},s=d=>d.done?n(d.value):Promise.resolve(d.value).then(i,a);s((t=t.apply(o,e)).next())});import zt from"dedent";import*as l from"zod";import*as M from"zod";var ie=M.object({id:M.number().int(),role:M.string().optional(),name:M.string().optional(),numChildren:M.number().optional(),content:M.string().optional(),pathFromRoot:M.string().optional(),serializedForm:M.string().optional()});function se(o){return o.name||o.role||o.content||o.serializedForm}var H=(y=>(y.AI_ASSERTION="AI_ASSERTION",y.CLICK="CLICK",y.SELECT_OPTION="SELECT_OPTION",y.TYPE="TYPE",y.PRESS="PRESS",y.NAVIGATE="NAVIGATE",y.SCROLL_UP="SCROLL_UP",y.SCROLL_DOWN="SCROLL_DOWN",y.GO_BACK="GO_BACK",y.GO_FORWARD="GO_FORWARD",y.WAIT="WAIT",y.REFRESH="REFRESH",y.TAB="TAB",y.COOKIE="COOKIE",y.HOVER="HOVER",y.CAPTCHA="CAPTCHA",y.SUCCESS="SUCCESS",y))(H||{}),W=l.object({elementDescriptor:l.string(),a11yData:ie.optional()}),T=l.object({thoughts:l.string().optional()}),kt=T.merge(l.object({type:l.literal("NAVIGATE"),url:l.string()})).describe("NAVIGATE <URL> - Go to the specified URL. Only navigate to URLs relevant to the user goal."),_t=T.merge(l.object({target:W.optional(),type:l.literal("SCROLL_UP"),useVision:l.boolean().default(!1)})).describe("SCROLL_UP [id] - Scroll up while hovering over the element with the specified id. If no id is provided, scroll the entire page."),Pt=T.merge(l.object({target:W.optional(),type:l.literal("SCROLL_DOWN"),useVision:l.boolean().default(!1)})).describe("SCROLL_DOWN [id] - Scroll down while hovering over the element with the specified id. If no id is provided, scroll the entire page."),Ut=T.merge(l.object({type:l.literal("WAIT"),delay:l.number()})),Ht=T.merge(l.object({type:l.literal("REFRESH")})),Ft=T.merge(l.object({type:l.literal("GO_BACK")})),Bt=T.merge(l.object({type:l.literal("GO_FORWARD")})),Gt=T.merge(l.object({type:l.literal("CAPTCHA"),useVision:l.boolean().default(!1)})),$t=T.merge(l.object({type:l.literal("CLICK"),target:W,doubleClick:l.boolean().default(!1),rightClick:l.boolean().default(!1),useVision:l.boolean().default(!1)})).describe(zt`CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled, hidden or StaticText elements.
  Only click on elements on the Current Page.
  Only click on elements with the following tag names: button, input, link, image, generic.
  `.replaceAll(`
`," ")),Vt=T.merge(l.object({type:l.literal("HOVER"),target:W,useVision:l.boolean().default(!1)})),jt=T.merge(l.object({type:l.literal("SELECT_OPTION"),target:W,option:l.string()})).describe('SELECT_OPTION <id> "<option>" - select an option from a combobox, listbox, or menu element on the page. Provide the id of the parent combobox, listbox, or menu element in <id>. Provide the name of the option in <option> enclosed by single quotes.'),$e=T.merge(l.object({type:l.literal("AI_ASSERTION"),assertion:l.string(),useVision:l.boolean().default(!1),disableCache:l.boolean().default(!1),cancelOnFailure:l.boolean().default(!1)})),Wt=l.object({clearContent:l.boolean().default(!0),pressKeysSequentially:l.boolean().default(!1)}),Kt=T.merge(l.object({type:l.literal("TYPE"),target:W,value:l.string(),pressEnter:l.boolean().default(!1),useVision:l.boolean().default(!1)})).merge(Wt).describe('TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.'),Xt=T.merge(l.object({type:l.literal("PRESS"),value:l.string()})).describe('PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key.'),Yt=T.merge(l.object({type:l.literal("TAB"),url:l.string()})),qt=T.merge(l.object({type:l.literal("COOKIE"),value:l.string()})),Jt=T.merge(l.object({type:l.literal("SUCCESS"),condition:$e.optional()})).describe("SUCCESS - the user goal has been successfully achieved"),K=l.discriminatedUnion("type",[$t,Kt,Xt,jt,kt,Pt,_t,Jt]),Zt=l.discriminatedUnion("type",[Ft,Bt,Ht,$e,Ut,Yt,qt,Vt,Gt]),Ve=l.discriminatedUnion("type",[...K.options,...Zt.options]),Qt=T.merge(l.object({type:l.literal("FAILURE")})).describe("FAILURE - there are no commands to suggest that could make progress that have not already been tried before"),ge=l.discriminatedUnion("type",[...K.options,Qt]);import*as A from"zod";var _=(n=>(n.AI_ACTION="AI_ACTION",n.PRESET_ACTION="PRESET_ACTION",n.MODULE="MODULE",n))(_||{}),Z=A.object({type:A.literal("AI_ACTION"),text:A.string(),commands:A.array(K).optional()}),Q=A.object({type:A.literal("PRESET_ACTION"),command:Ve}),fe=A.object({type:A.literal("MODULE"),moduleId:A.string().uuid()}),ye=A.union([Z,Q]),be=A.object({type:A.literal("RESOLVED_MODULE"),moduleId:A.string().uuid(),name:A.string(),steps:ye.array()}),je=A.union([Z,Q,fe]),we=A.union([Z,Q,be]);import{distance as $n}from"fastest-levenshtein";import{chromium as Vn,devices as It}from"playwright";import{addExtra as jn}from"playwright-extra";import Wn from"puppeteer-extra-plugin-recaptcha";import Kn from"puppeteer-extra-plugin-stealth";import{z as ee}from"zod";var We=ee.object({thoughts:ee.string(),result:ee.boolean(),relevantElements:ee.array(ee.number()).optional()});import bo from"string-argv";import{z as ne}from"zod";var ae=(s=>(s.AI_PROVIDER="AIProviderError",s.AI_TIMEOUT="AITimeoutError",s.JOB_TIMEOUT="JobTimeoutError",s.ACTION_FAILURE="ActionFailureError",s.ASSERTION_FAILURE="AssertionFailureError",s.WEB_AGENT_PLATFORM="InternalWebAgentError",s.UNKNOWN_PLATFORM="InternalPlatformError",s))(ae||{});var te=class extends Error{constructor(e,t={}){super(e,t),this.name="BrowserExecutionError"}};var le=class extends Error{constructor(e={}){super("Got empty a11y tree",e),this.name="EmptyA11yTreeError"}};var N=class extends Error{constructor(e,t,n={}){var i;let r=!1;for(let a of Object.values(ae))if(t.startsWith(a)){r=!0,e=a;break}r?super(t,n):super(`${e}: ${t}`,n),this.name="TestFailureError",this.stack=(i=this.stack)==null?void 0:i.slice(this.name.length+2),this.reason=e}toString(){return this.message}toJSON(){return{message:this.message}}};var Eo=ne.object({command:ne.string(),thoughts:ne.string()}),vo=ne.string().pipe(ne.coerce.number());var Io=new Set(Object.values(H));var en={AI_ACTION:"AI action",MODULE:"Module",AI_ASSERTION:"AI check",CLICK:"Click",HOVER:"Hover",SELECT_OPTION:"Select",TYPE:"Type",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",CAPTCHA:"Captcha",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",COOKIE:"Set cookie",SUCCESS:"Done"},Ro={AI_ACTION:"Ask AI to plan and execute something on the page.",MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",CLICK:"Click on an element on the page based on a description.",HOVER:"Hover over an element on the page based on a description.",SELECT_OPTION:"Select an option from a dropdown based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up one page.",SCROLL_DOWN:"Scroll down one page.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",CAPTCHA:"Solve captchas on the page. This may take 10-60 seconds.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import*as f from"zod";var Ke=(i=>(i.SUCCESS="SUCCESS",i.FAILED="FAILED",i.RUNNING="RUNNING",i.IDLE="IDLE",i.CANCELLED="CANCELLED",i))(Ke||{}),Xe=(n=>(n.SUCCESS="SUCCESS",n.FAILED="FAILED",n.CANCELLED="CANCELLED",n))(Xe||{}),tn=f.object({beforeUrl:f.string(),beforeScreenshot:f.string().or(f.instanceof(Buffer)),afterUrl:f.string().optional(),afterScreenshot:f.string().or(f.instanceof(Buffer)).optional(),startedAt:f.coerce.date(),finishedAt:f.coerce.date(),viewport:f.object({height:f.number(),width:f.number()}),status:f.nativeEnum(Xe),message:f.string().optional(),elementInteracted:f.string().optional()}),Se=f.object({startedAt:f.coerce.date(),finishedAt:f.coerce.date(),status:f.nativeEnum(Ke),message:f.string().optional(),userAgent:f.string().optional()}),Ce=Q.merge(Se).merge(f.object({results:tn.array()})),Ye=Z.merge(Se).merge(f.object({results:Ce.array()})),nn=fe.merge(Se).merge(f.object({results:f.union([Ye,Ce]).array()})),ce=f.discriminatedUnion("type",[Ye,Ce,nn]);function on(o,e){return o.length<e?o:o.slice(0,e-3)+"[...]"}function Ee(o){var e,t,n;switch(o.type){case"SUCCESS":return(e=o.condition)!=null&&e.assertion?`Check success condition: ${o.condition.assertion}`:"All commands completed";case"NAVIGATE":return`Go to URL: ${on(o.url,30)}`;case"CAPTCHA":return"Solve captchas on the page";case"GO_BACK":return"Go back to the previous page";case"GO_FORWARD":return"Go forward to the next page";case"SCROLL_DOWN":return`Scroll down one page${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"SCROLL_UP":return`Scroll up one page${o.target?` in the container of: ${o.target.elementDescriptor}`:""}`;case"WAIT":return`Wait for ${o.delay} seconds`;case"REFRESH":return"Refresh the page";case"CLICK":return`Click on '${o.target.elementDescriptor}'`;case"TYPE":{let i="";return(t=o.target.a11yData)!=null&&t.serializedForm?i=`in element: ${o.target.a11yData.serializedForm}`:o.target.elementDescriptor.length>0&&(i=`in element: ${o.target.elementDescriptor}`),`Type '${o.value}' ${i}`}case"HOVER":{let i="";return(n=o.target.a11yData)!=null&&n.serializedForm?i=` over element: ${o.target.a11yData.serializedForm}`:o.target.elementDescriptor.length>0&&(i=` over element: ${o.target.elementDescriptor}`),`Hover${i}`}case"PRESS":return`Press '${o.value}'`;case"SELECT_OPTION":return`Select option '${o.option}' in '${o.target.elementDescriptor}'`;case"TAB":return`Switch to tab: ${o.url}`;case"COOKIE":return`Set cookie: ${o.value}`;case"AI_ASSERTION":return`${o.useVision?"Visual assertion":"Assertion"}: '${o.assertion}'`;default:return(i=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(o)}}import*as z from"zod";import*as G from"zod";var qe=G.object({type:G.nativeEnum(_),generatedStep:K.optional(),serializedCommand:G.string().optional(),elementInteracted:G.string().optional()});var X=z.object({goal:z.string(),url:z.string(),browserState:z.string(),history:z.string(),numPrevious:z.number(),lastCommand:qe.or(z.null())});import{parseString as rn}from"set-cookie-parser";function Je(o){let e=rn(o);if(!e.name)throw new Error("Name missing from cookie");if(!e.value)throw new Error("Value missing from cookie");let t;if(e.sameSite){let r=e.sameSite.trim().toLowerCase();if(r==="strict")t="Strict";else if(r==="lax")t="Lax";else if(r==="none")t="None";else throw new Error(`Invalid sameSite setting in cookie: ${r}`)}return!e.path&&e.domain&&(e.path="/"),B(L({},e),{expires:e.expires?e.expires.getTime()/1e3:void 0,sameSite:t})}import{z as O}from"zod";var an="1.0.0",Ze=O.object({run:O.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:O.boolean().optional().describe("Defaults to true")}),jo=O.object({type:O.literal("momentic/fixture"),schemaVersion:O.string(),name:O.string(),description:O.string().optional(),setup:O.object({steps:Ze.array(),timeout:O.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:O.object({steps:Ze.array(),timeout:O.number().optional().describe("Timeout for all steps in seconds")}).optional()}),Wo={type:"momentic/fixture",schemaVersion:an,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as ln}from"zod";var Yo=ln.string().array();import*as P from"zod";var Qe=P.object({thoughts:P.string(),id:P.number().int(),options:P.array(P.string()).optional()});var cn={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},dn={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},ve=class o{constructor(e,t){this.minLogLevel=e,this.logBindings=t}log(e,...t){let n=cn[e],r;Array.isArray(t[0])?(r=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(r=L(L({},t[0]),this.logBindings),t=t.slice(1));let i=dn[e],a=[`${i}[${new Date().toTimeString().slice(0,8)}][${n}]`];if(e!==0&&a.push("\x1B[39m"),a.push(...t),console.log(...a),r&&!Array.isArray(r))for(let[s,d]of Object.entries(r)){let p=d;typeof d=="object"&&(p=JSON.stringify(d,void 0,2),p=p.split(`
`).map((u,h)=>h>0?`  ${u}`:u).join(`
`)),console.log(e===0?`${i}  ${s}:`:`  ${s}:`,p)}else if(r)for(let s of r){let d=s;typeof s=="object"&&(d=JSON.stringify(s,void 0,2),d=d.split(`
`).map((p,u)=>u>0?`  ${p}`:p).join(`
`)),console.log(e===0?`${i}  `:"  ",d)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}info(...e){1<this.minLogLevel||this.log(1,...e)}debug(...e){0<this.minLogLevel||this.log(0,...e)}warn(...e){2<this.minLogLevel||this.log(2,...e)}error(...e){3<this.minLogLevel||this.log(3,...e)}child(e){return new o(this.minLogLevel,L(L({},this.logBindings),e))}flush(){}bindings(){return this.logBindings}},Zo=new ve(1,{});import{z as U}from"zod";var mn=U.object({id:U.string(),createdAt:U.coerce.date(),createdBy:U.string(),organizationId:U.string(),name:U.string(),schemaVersion:U.string(),numSteps:U.number()}),or=U.object({steps:ye.array()}).merge(mn.omit({numSteps:!0}));import*as m from"zod";import{z as b}from"zod";var Ae={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Te={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED"},pn={PASSED:"PASSED",FAILED:"FAILED"},de=b.string().pipe(b.coerce.date()).or(b.date()),un=b.object({id:b.string(),createdAt:de,createdBy:b.string(),organizationId:b.string(),scheduledAt:de.or(b.null()),startedAt:de.or(b.null()),finishedAt:de.or(b.null()),testId:b.string().or(b.null()),status:b.nativeEnum(Te),expectedStatus:b.nativeEnum(pn).or(b.null()),runKey:b.string(),trigger:b.nativeEnum(Ae),attempts:b.number(),test:b.object({name:b.string(),id:b.string()}).or(b.null())}),hn=un.merge(b.object({results:ce.array(),test:b.object({name:b.string(),id:b.string(),baseUrl:b.string()}).or(b.null())}));import{z as I}from"zod";import{z as me}from"zod";var et=me.object({name:me.string(),fixtures:me.array(me.string().describe("Name of the fixture (must be available locally in the fixtures directory).")).optional()});import{isValidCron as gn}from"cron-validator";import{z as k}from"zod";var tt=k.object({availableAsModule:k.boolean().default(!1),disableAICaching:k.boolean().default(!1)}),nt=k.object({cron:k.string().refine(o=>gn(o),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:k.boolean().default(!1),timeZone:k.string().default("America/Los_Angeles"),jobKey:k.string().optional()}),ot=k.object({onSuccess:k.boolean().default(!1),onFailure:k.boolean().default(!0)});var fn=I.string().min(1).max(255).superRefine((o,e)=>{try{Cn(o)}catch(t){return e.addIssue({code:I.ZodIssueCode.custom,message:t.message,fatal:!0}),I.NEVER}}),Y=I.object({id:I.string(),name:fn,baseUrl:I.string(),schemaVersion:I.string(),advanced:tt,retries:I.number(),envSettings:et.array().optional()}),yr=Y.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),yn=I.object({createdAt:I.coerce.date(),updatedAt:I.coerce.date(),schedule:nt,notification:ot,createdBy:I.string(),organizationId:I.string()}),bn=Y.merge(yn).merge(I.object({steps:I.array(we)})),br=Y.merge(I.object({steps:I.array(we)}));var wn=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/,Sn=["modules","fixtures"];function Cn(o){if(o=o.toLowerCase().trim(),o.length===0||o.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(o))throw new Error("Name can only contain alphanumeric characters, dashes, and underscores.");if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(o))throw new Error(`"${o}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(o)||/^\s|\s$/.test(o))throw new Error("Name cannot start or end with a space or dot.");if(o.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(Sn.includes(o))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(o.match(wn))throw new Error("Name cannot be a UUID. Please choose a different name.")}var oe=m.object({disableCache:m.boolean()}),Ir=m.object({error:m.boolean(),reason:m.string(),message:m.string()}),Rr=X.merge(oe),rt=ge,Nr=m.discriminatedUnion("vision",[X.merge(oe).merge(m.object({vision:m.literal(!1)})),X.pick({goal:!0,url:!0}).merge(oe).merge(m.object({screenshot:m.string(),vision:m.literal(!0)}))]),xe=We,Lr=X.pick({browserState:!0,goal:!0}).merge(oe),Ie=Qe,Or=X.pick({goal:!0,url:!0}).merge(oe),it=m.string().array(),Dr=m.object({testPaths:m.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),all:m.boolean().optional()}),Mr=m.object({message:m.string(),queuedTests:m.object({name:m.string(),id:m.string()}).array()});var zr=m.string().array(),kr=m.union([m.object({paths:m.string().array().describe("run specific test paths (e.g. todo-test)")}),m.object({path:m.string().describe("deprecated; present for backcompat")}),m.object({all:m.boolean().describe("run all tests")})]),_r=m.object({tests:m.record(m.string().describe("Test name"),m.string().describe("Test YAML")),modules:m.record(m.string().describe("Module name"),m.string().describe("Module YAML"))}),En=m.object({test:m.string().describe("test YAML"),modules:m.record(m.string().describe("moduleId"),m.string().describe("module YAML"))}),Pr=En.array();var Ur=m.object({testPath:m.string(),testId:m.string()}).partial().merge(m.object({trigger:m.nativeEnum(Ae)}));var Hr=m.object({startedAt:m.coerce.date(),finishedAt:m.coerce.date(),results:ce.array(),status:m.nativeEnum(Te)}).partial(),Fr=m.object({screenshot:m.string()}),Br=m.object({key:m.string()});import{stringify as Yr}from"yaml";import{z as C}from"zod";var ni=C.object({test:C.string().describe("YAML for the test, including metadata and steps"),modules:C.record(C.string(),C.string()).describe("Map of module name to YAML for the module")}),oi=Y.merge(C.object({steps:je.array(),fileType:C.literal("momentic/test")})),ri=be.omit({type:!0}).merge(C.object({schemaVersion:C.string(),fileType:C.literal("momentic/module")})),ii=Y.merge(C.object({steps:C.array(C.record(C.string(),C.unknown()))})),si=C.object({moduleId:C.string().uuid(),name:C.string(),schemaVersion:C.string(),steps:C.array(C.record(C.string(),C.unknown()))});var Re={js:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&H(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&H(t,n,e[n]);return t};var g=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(F=>Object.assign(F,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,F]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&F!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var I=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[Momentic] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=I;\n',css:`/* Reproduced from https://github.com/philc/vimium/blob/master/content_scripts/vimium.css */

/*
 * Many CSS class names in this file use the verbose "vimiumXYZ" as the class name. This is so we
 * don't use the same CSS class names that the page is using, so the page's CSS doesn't mess with
 * the style of our Vimium dialogs.
 *
 * The z-indexes of Vimium elements are very large, because we always want them to show on top. We
 * know that Chrome supports z-index values up to about 2^31. The values we use are large numbers
 * approaching that bound. However, we must leave headroom for link hints. Hint marker z-indexes
 * start at 2140000001.
 */

/*
 * This vimiumReset class can be added to any of our UI elements to give it a clean slate. This is
 * useful in case the page has declared a broad rule like "a { padding: 50px; }" which will mess up
 * our UI. These declarations contain more specifiers than necessary to increase their specificity
 * (precedence).
 */
 .vimiumReset,
 div.vimiumReset,
 span.vimiumReset,
 table.vimiumReset,
 a.vimiumReset,
 a:visited.vimiumReset,
 a:link.vimiumReset,
 a:hover.vimiumReset,
 td.vimiumReset,
 tr.vimiumReset {
   background: none;
   border: none;
   bottom: auto;
   box-shadow: none;
   color: black;
   cursor: auto;
   display: inline;
   float: none;
   font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
   font-size: inherit;
   font-style: normal;
   font-variant: normal;
   font-weight: normal;
   height: auto;
   left: auto;
   letter-spacing: 0;
   line-height: 100%;
   margin: 0;
   max-height: none;
   max-width: none;
   min-height: 0;
   min-width: 0;
   opacity: 1;
   padding: 0;
   position: static;
   right: auto;
   text-align: left;
   text-decoration: none;
   text-indent: 0;
   text-shadow: none;
   text-transform: none;
   top: auto;
   vertical-align: baseline;
   white-space: normal;
   width: auto;
   z-index: 2140000000; /* Vimium's reference z-index value. */
 }
 
 thead.vimiumReset,
 tbody.vimiumReset {
   display: table-header-group;
 }
 
 tbody.vimiumReset {
   display: table-row-group;
 }
 
 /* Linkhints CSS */
 
 div.internalVimiumHintMarker {
   position: absolute;
   display: block;
   top: -1px;
   left: -1px;
   white-space: nowrap;
   overflow: hidden;
   font-size: 11px;
   padding: 1px 3px 0px 3px;
   background: linear-gradient(to bottom, #fff785 0%, #ffc542 100%);
   border: solid 1px #c38a22;
   border-radius: 3px;
   box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
 }
 
 div.internalVimiumHintMarker span {
   color: #302505;
   font-family: Helvetica, Arial, sans-serif;
   font-weight: bold;
   font-size: 11px;
   text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
 }
 
 div.internalVimiumHintMarker > .matchingCharacter {
   color: #d4ac3a;
 }
 
 div > .vimiumActiveHintMarker span {
   color: #a07555 !important;
 }
 
 /* Input hints CSS */
 
 div.internalVimiumInputHint {
   position: absolute;
   display: block;
   background-color: rgba(255, 247, 133, 0.3);
   border: solid 1px #c38a22;
   pointer-events: none;
 }
 
 div.internalVimiumSelectedInputHint {
   background-color: rgba(255, 102, 102, 0.3);
   border: solid 1px #993333 !important;
 }
 
 div.internalVimiumSelectedInputHint span {
   color: white !important;
 }
 
 /* Frame Highlight Marker CSS*/
 div.vimiumHighlightedFrame {
   position: fixed;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   padding: 0px;
   margin: 0px;
   border: 5px solid yellow;
   box-sizing: border-box;
   pointer-events: none;
 }
 
 /* Help Dialog CSS */
 
 iframe.vimiumHelpDialogFrame {
   background-color: rgba(10, 10, 10, 0.6);
   padding: 0px;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   display: block;
   position: fixed;
   border: none;
   z-index: 2139999997; /* Three less than the reference value. */
 }
 
 div#vimiumHelpDialogContainer {
   opacity: 1;
   background-color: white;
   border: 2px solid #b3b3b3;
   border-radius: 6px;
   width: 840px;
   max-width: calc(100% - 100px);
   max-height: calc(100% - 100px);
   margin: 50px auto;
   overflow-y: auto;
   overflow-x: auto;
 }
 
 div#vimiumHelpDialog {
   min-width: 600px;
   padding: 8px 12px;
 }
 
 span#vimiumTitle,
 span#vimiumTitle span,
 span#vimiumTitle * {
   font-size: 20px;
 }
 #vimiumTitle {
   display: block;
   line-height: 130%;
   white-space: nowrap;
 }
 td.vimiumHelpDialogTopButtons {
   width: 100%;
   text-align: right;
 }
 #helpDialogOptionsPage,
 #helpDialogWikiPage {
   font-size: 14px;
   padding-left: 5px;
   padding-right: 5px;
 }
 div.vimiumColumn {
   width: 50%;
   float: left;
   font-size: 11px;
   line-height: 130%;
 }
 
 div.vimiumColumn tr {
   display: table-row;
 }
 
 div.vimiumColumn td {
   display: table-cell;
   font-size: 11px;
   line-height: 130%;
 }
 div.vimiumColumn table,
 div.vimiumColumn td,
 div.vimiumColumn tr {
   padding: 0;
   margin: 0;
 }
 div.vimiumColumn table {
   width: 100%;
   table-layout: auto;
 }
 div.vimiumColumn td {
   vertical-align: top;
   padding: 1px;
 }
 div#vimiumHelpDialog div.vimiumColumn tr > td:first-of-type {
   /* This is the "key" column, e.g. "j", "gg". */
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   font-size: 14px;
   text-align: right;
   white-space: nowrap;
 }
 span.vimiumHelpDialogKey {
   background-color: rgb(243, 243, 243);
   color: rgb(33, 33, 33);
   margin-left: 2px;
   padding-top: 1px;
   padding-bottom: 1px;
   padding-left: 4px;
   padding-right: 4px;
   border-radius: 3px;
   border: solid 1px #ccc;
   border-bottom-color: #bbb;
   box-shadow: inset 0 -1px 0 #bbb;
   font-family: monospace;
   font-size: 11px;
 }
 /* Make the description column as wide as it can be. */
 div#vimiumHelpDialog div.vimiumColumn tr > td:nth-of-type(3) {
   width: 100%;
 }
 div#vimiumHelpDialog div.vimiumDivider {
   display: block;
   height: 1px;
   width: 100%;
   margin: 10px auto;
   background-color: #9a9a9a;
 }
 div#vimiumHelpDialog td.vimiumHelpSectionTitle {
   padding-top: 3px;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   font-size: 16px;
   font-weight: bold;
 }
 div#vimiumHelpDialog td.vimiumHelpDescription {
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   font-size: 14px;
 }
 div#vimiumHelpDialog span.vimiumCopyCommandNameName {
   font-style: italic;
   cursor: pointer;
   font-size: 12px;
 }
 /* Advanced commands are hidden by default until you show them. */
 div#vimiumHelpDialog tr.advanced {
   display: none;
 }
 div#vimiumHelpDialog.showAdvanced tr.advanced {
   display: table-row;
 }
 div#vimiumHelpDialog div.advanced td:nth-of-type(3) {
   color: #555;
 }
 div#vimiumHelpDialog a.closeButton {
   font-family: 'courier new';
   font-weight: bold;
   color: #555;
   text-decoration: none;
   font-size: 24px;
   position: relative;
   top: 3px;
   padding-left: 5px;
   cursor: pointer;
 }
 div#vimiumHelpDialog a {
   text-decoration: underline;
 }
 
 div#vimiumHelpDialog a.closeButton:hover {
   color: black;
   -webkit-user-select: none;
 }
 div#vimiumHelpDialogFooter {
   display: block;
   position: relative;
   margin-bottom: 37px;
 }
 table.helpDialogBottom {
   width: 100%;
 }
 td.helpDialogBottomRight {
   width: 100%;
   float: right;
   text-align: right;
 }
 td.helpDialogBottomRight,
 td.helpDialogBottomLeft {
   padding: 0px;
 }
 div#vimiumHelpDialogFooter * {
   font-size: 10px;
 }
 a#toggleAdvancedCommands,
 span#help-dialog-tip {
   position: relative;
   top: 19px;
   white-space: nowrap;
   font-size: 10px;
 }
 a:link.vimiumHelDialogLink,
 a:visited.vimiumHelDialogLink,
 a:hover.vimiumHelDialogLink,
 a:active.vimiumHelDialogLink,
 a#toggleAdvancedCommands {
   color: #2f508e;
   text-decoration: underline;
   cursor: pointer;
 }
 
 /* Vimium HUD CSS */
 
 div.vimiumHUD {
   display: block;
   position: fixed;
   width: calc(100% - 20px);
   bottom: 8px;
   left: 8px;
   background: #f1f1f1;
   text-align: left;
   border-radius: 4px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
   border: 1px solid #aaa;
   z-index: 2139999999;
 }
 
 iframe.vimiumHUDFrame {
   background-color: transparent;
   padding: 0px;
   overflow: hidden;
   display: block;
   position: fixed;
   width: 20%;
   min-width: 300px;
   height: 58px;
   bottom: -14px;
   right: 20px;
   margin: 0 0 0 -40%;
   border: none;
   z-index: 2139999998; /* Two less than the reference value. */
   opacity: 0;
 }
 
 div.vimiumHUD .vimiumHUDSearchArea {
   display: block;
   padding: 3px;
   background-color: #f1f1f1;
   border-radius: 4px 4px 0 0;
 }
 
 div.vimiumHUD .vimiumHUDSearchAreaInner {
   color: #777;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   font-size: 14px;
   height: 30px;
   margin-bottom: 0;
   padding: 2px 4px;
   border-radius: 3px;
   width: 100%;
   outline: none;
   box-sizing: border-box;
   line-height: 20px;
 }
 
 div.vimiumHUD .hud-find {
   background: #fff;
   border: 1px solid #ccc;
 }
 
 div.vimiumHUD span#hud-find-input,
 div.vimiumHUD span#hud-match-count {
   color: #000;
   display: inline;
   outline: none;
   white-space: nowrap;
   overflow-y: hidden;
 }
 
 div.vimiumHUD span#hud-find-input:before {
   content: '/';
 }
 
 div.vimiumHUD span#hud-match-count {
   color: #aaa;
   font-size: 12px;
 }
 
 div.vimiumHUD span#hud-find-input br {
   display: none;
 }
 
 div.vimiumHUD span#hud-find-input * {
   display: inline;
   white-space: nowrap;
 }
 
 body.vimiumFindMode ::selection {
   background: #ff9632;
 }
 
 /* Vomnibar Frame CSS */
 
 iframe.vomnibarFrame {
   background-color: transparent;
   padding: 0px;
   overflow: hidden;
 
   display: block;
   position: fixed;
   width: calc(80% + 20px); /* same adjustment as in pages/vomnibar.js */
   min-width: 400px;
   height: calc(100% - 70px);
   top: 70px;
   left: 50%;
   margin: 0 0 0 -40%;
   border: none;
   font-family: sans-serif;
   z-index: 2139999998; /* Two less than the reference value. */
 }
 
 div.vimiumFlash {
   box-shadow: 0px 0px 4px 2px #4183c4;
   padding: 1px;
   background-color: transparent;
   position: absolute;
   z-index: 2140000000;
 }
 
 /* UIComponent CSS */
 iframe.vimiumUIComponentHidden {
   display: none;
 }
 
 iframe.vimiumUIComponentVisible {
   display: block;
   color-scheme: light dark;
 }
 
 iframe.vimiumUIComponentReactivated {
   border: 5px solid yellow;
 }
 
 iframe.vimiumNonClickable {
   pointer-events: none;
 }
 
 @media (prefers-color-scheme: dark) {
   /* DarkReader is a popular dark mode browser extension. It can apply an invert filter to the whole
    * page to make the page dark, when used in Filter and Filter+ modes. We want to reverse/invert
    * that filter again for Vimium's UI elements, because Vimium is already dark mode aware. */
   iframe.reverseDarkReaderFilter {
     -webkit-filter: invert(100%) hue-rotate(180deg) !important;
     filter: invert(100%) hue-rotate(180deg) !important;
   }
 
   /* Dark mode CSS for options page and exclusions */
 
   body.vimiumBody {
     background-color: #292a2d;
     color: white;
   }
 
   body.vimiumBody a,
   body.vimiumBody a:visited {
     color: #8ab4f8;
   }
 
   body.vimiumBody textarea,
   body.vimiumBody input {
     background-color: #1d1d1f;
     border-color: #1d1d1f;
     color: #e8eaed;
   }
 
   body.vimiumBody div.example {
     color: #9aa0a6;
   }
 
   body.vimiumBody div#state,
   body.vimiumBody div#footer {
     background-color: #202124;
     border-color: rgba(255, 255, 255, 0.1);
   }
 
   /* Dark Mode CSS for Help Dialog */
 
   div#vimiumHelpDialogContainer {
     border-color: rgba(255, 255, 255, 0.1);
     background-color: #202124;
   }
 
   div#vimiumHelpDialog {
     background-color: #292a2d;
     color: white;
   }
 
   div#vimiumHelpDialog td.vimiumHelpDescription {
     color: #c9cccf;
   }
 
   span#vimiumTitle,
   div#vimiumHelpDialog td.vimiumHelpSectionTitle {
     color: white;
   }
 
   #vimiumTitle > span:first-child {
     color: #8ab4f8 !important;
   }
 
   div#vimiumHelpDialog a {
     color: #8ab4f8;
   }
 
   div#vimiumHelpDialog div.vimiumDivider {
     background-color: rgba(255, 255, 255, 0.1);
   }
 
   span.vimiumHelpDialogKey {
     background-color: #1d1d1f;
     border: solid 1px black;
     box-shadow: none;
     color: white;
   }
 }
 `};var $=(o,e)=>{let{hostname:t,pathname:n}=new URL(o),{hostname:r,pathname:i}=new URL(e);return t!==r||n!==i};import{distance as dt}from"fastest-levenshtein";var st=new Set(["about:blank","chrome-error://chromewebdata/"]),at=2;var An=["focusable","keyshortcuts","controls"],Tn=["textbox","checkbox","combobox","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],xn=["notRendered","notVisible","ariaHiddenSubtree","ariaHiddenElement"],In=80,Rn={paragraph:"p",searchbox:"input"},pt=["paragraph","option","StaticText"],mt={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,maxLevel:void 0,neighbors:void 0},Ne=class{constructor(e){this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value})}getLogForm(){var e,t;return JSON.stringify({id:this.id,name:(e=this.name)!=null?e:"",role:(t=this.role)!=null?t:"",backendNodeId:this.backendNodeID})}isInteresting(){return Tn.includes(this.role)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content}serialize(e=mt){var x,w;let{indentLevel:t,noChildren:n,noProperties:r,noID:i}=Object.assign({},mt,e),a=" ".repeat(t),s=Rn[this.role]||this.role,d=this.name,p=L({},this.properties);s==="heading"&&(p.level&&(s=`h${p.level}`,delete p.level),d==="heading"&&(d=""));let u=!pt.includes(this.role);if(this.role==="StaticText")return`${a}${d}
`;let h=`${a}<${s}`;!i&&u&&(h+=` id="${this.id}"`),d&&(h+=` name="${d}"`),this.content&&(h+=` content="${this.content}"`),Object.keys(this.properties).length>0&&!r&&Object.entries(this.properties).forEach(([g,S])=>{An.includes(g)||(typeof S=="string"?h+=` ${g}="${S}"`:typeof S=="boolean"?S?h+=` ${g}`:h+=` ${g}={false}`:typeof S!="undefined"&&(h+=` ${g}={${JSON.stringify(S)}}`))});let R=e.maxLevel!==void 0&&t/2>=e.maxLevel;if(this.children.length===0||n||R)return h+=` />
`,h;{let g="";for(let y of this.children)g+=y.serialize(B(L({},e),{indentLevel:t+2}));let S=g.trim();S.length<=In&&!S.includes(`
`)?h+=`>${S}</${s}>
`:h+=`>
${g}${a}</${s}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let g=this.parent.children.findIndex(D=>D.id===this.id),S=g>0?(x=this.parent.children[g-1])==null?void 0:x.serialize(B(L({},e),{neighbors:0})):"",y=g<this.parent.children.length-1?(w=this.parent.children[g+1])==null?void 0:w.serialize(B(L({},e),{neighbors:0})):"";return`${S||""}
${h}
${y||""}`}return h}},Le=class{constructor(e,t,n){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=n}serialize(){return this.root?this.root.serialize():""}};function Nn(o){var e,t;return(e=o.name)!=null&&e.value?`"${o.name.value}"`:(t=o.role)!=null&&t.value&&o.role.value!=="none"&&o.role.value!=="generic"?`"${o.role.value}"`:`"${o.nodeId}"`}function ut(o,e,t){var s,d,p,u,h,R,x;if(!e&&o.parentId)throw new Error(`Got no parent for accessibility node ${o.nodeId}: ${JSON.stringify(o)}`);let n=new Ne({id:parseInt(o.nodeId),role:((s=o.role)==null?void 0:s.value)||"",name:((d=o.name)==null?void 0:d.value)||"",content:((p=o.value)==null?void 0:p.value)||"",properties:o.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Nn(o),backendNodeID:o.backendDOMNodeId});(u=o.value)!=null&&u.value&&(n.content=`${(h=o.value)==null?void 0:h.value}`);let r=(R=o.childIds)!=null?R:[];for(let w of r){if(!w)continue;let g=t.get(parseInt(w));if(!g)continue;let S=ut(g,n,t);S.length&&(n.children=n.children.concat(S))}if(n.role==="StaticText"&&(n.children=[]),n.children.length===1&&n.children[0].role==="StaticText"){let w=n.name,g=(x=n.children[0])==null?void 0:x.name;(w===g||!g)&&(n.children=[])}let i=[];for(let w=n.children.length-1;w>=0;w--){let g=n.children[w];if(g.role!=="StaticText"){i.push(g);continue}if(w===0||n.children[w-1].role!=="StaticText"){i.push(g);continue}n.children[w-1].name+=` ${g.name}`}if(n.children=i.reverse(),n.role==="generic"&&n.children.length===1){let w=n.children[0];if(!pt.includes(w.role)&&n.name===w.name)return n.children}if(!n.isInteresting()&&o.parentId)return n.children;for(let w of n.children)w.parent=n;return[n]}function ht(o,e,t,n,r=1){o.id=r,r+=1,e.set(o.id,o),o.dataMomenticId?t.set(o.dataMomenticId,o):o.role!=="StaticText"&&o.role!=="RootWebArea"&&o.role!=="paragraph"&&n.debug({node:o.serialize({neighbors:1,maxLevel:1})},"Node has no data-momentic-id");for(let i of o.children)r=ht(i,e,t,n,r);return r}function gt(o,e){if(!o.root)throw new Error("a11y tree has null root");o.allNodes=o.allNodes.filter(a=>{var d;return a.ignored?!((d=a.ignoredReasons)==null?void 0:d.find(p=>xn.includes(p.name))):!0});let t=new Map;for(let a of o.allNodes)t.set(parseInt(a.nodeId),a);let n=ut(o.root,null,t);if(n.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(n)}`);if(n.length===0)throw new le;let r=new Map,i=new Map;return ht(n[0],r,i,e),new Le(n[0],r,i)}var re=(o,e)=>{e.id=o.id,e.content=o.content,e.name=o.name,e.role=o.role,e.numChildren=o.children.length,e.serializedForm=o.serialize({noID:!0,maxLevel:1,neighbors:1})},Oe=(o,e)=>{var r;let t=1;o.role===e.role&&t++;let n=["name","content"];for(let i of n){if(!((r=o[i])!=null&&r.trim()))continue;let a=dt(o[i],e[i])/Math.min(o[i].length,e[i].length);a===0?t+=2:a<=.1&&t++}if(e.numChildren!==void 0&&(o.children.length===e.numChildren&&e.numChildren>0?t++:(e.numChildren>0&&o.children.length===0||Math.abs(o.children.length-e.numChildren)>2)&&t--),e.serializedForm){let i=o.serialize({noID:!0,maxLevel:1,neighbors:1}),a=dt(i,e.serializedForm)/Math.min(i.length,e.serializedForm.length);a===0?t+=2:a<=.1&&t++}return t};var V={r:147,g:196,b:125,a:.55},ft={showInfo:!1,showRulers:!1,showStyles:!1,showAccessibilityInfo:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:V,paddingColor:V,borderColor:V,marginColor:V,eventTargetColor:V,shapeColor:V,shapeMarginColor:V};var j=(o=1e3)=>new Promise(e=>setTimeout(()=>e(),o));function yt(){cursor=document.createElement("img"),cursor.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDcpIj48cGF0aCBkPSJtNi4xNDggMTguNDczIDEuODYzLTEuMDAzIDEuNjE1LS44MzktMi41NjgtNC44MTZoNC4zMzJsLTExLjM3OS0xMS40MDh2MTYuMDE1bDMuMzE2LTMuMjIxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im02LjQzMSAxNyAxLjc2NS0uOTQxLTIuNzc1LTUuMjAyaDMuNjA0bC04LjAyNS04LjA0M3YxMS4xODhsMi41My0yLjQ0MnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"),cursor.setAttribute("id","selenium_cursor"),cursor.setAttribute("style","position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0"),cursor.style.filter="invert(0%) sepia(6%) saturate(24%) hue-rotate(315deg) brightness(89%) contrast(110%)",document.body.appendChild(cursor),document.onmousemove=function(o){o=o||window.event,document.getElementById("selenium_cursor").style.left=o.pageX+"px",document.getElementById("selenium_cursor").style.top=o.pageY+"px"}}function bt(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function wt(){window.globalHintManager&&window.globalHintManager.reset()}function St(){let o=document.body.getElementsByTagName("*"),e=1;for(let t=0;t<o.length;t++){let n=e.toString();for(;[6].some(i=>n.includes(i.toString()));)e++,n=e.toString();let r=o[t];r==null||r.setAttribute("data-momentic-id",`${e}`),r==null||r.setAttribute("aria-keyshortcuts",`${e}`),e++}}var Ln=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),On=new Set(["script","document"]),Dn=["intercom.io","googletagmanager.com","google-analytics.com","www.gstatic.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms/collect"],Mn=["api.stripe.com","supabase.co"];function De(o){return`${o.resourceType()} ${o.method()} ${o.url()}`}function Ct(o){return o=o.replace(/^www\./,""),o}function Et(o){return Mn.some(e=>o.includes(e))}function vt(o,e){if(!Ln.has(o.resourceType()))return!1;let t=new URL(e),n=new URL(o.url());return Dn.some(r=>n.hostname.includes(r))?!1:On.has(o.resourceType())||o.method()!=="GET"?!0:Ct(n.hostname).includes(Ct(t.hostname))}var _e=jn(Vn);_e.use(Kn());_e.use(Wn({provider:{id:"2captcha",token:process.env.TWO_CAPTCHA_KEY},visualFeedback:!0}));function ze(o){return c(this,null,function*(){yield o.send("Accessibility.enable"),yield o.send("DOM.enable"),yield o.send("Overlay.enable")})}var F=class F{constructor({browser:e,context:t,page:n,baseURL:r,cdpClient:i,logger:a}){this.a11yIdToNodeMap=new Map;this.dataMomenticIdToNodeMap=new Map;this.browser=e,this.context=t,this.page=n,this.baseURL=r,this.cdpClient=i,this.logger=a}static init(i,a,s){return c(this,arguments,function*(e,t,n,r=8e3){let d=yield _e.launch({headless:!0,handleSIGTERM:!1}),p=yield d.newContext({viewport:F.VIEWPORT,deviceScaleFactor:process.platform==="darwin"?2:1,userAgent:It["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles"}),u=yield p.newPage(),h=yield p.newCDPSession(u),R=new F({browser:d,context:p,page:u,baseURL:e,cdpClient:h,logger:t}),x=!1;c(this,null,function*(){try{yield R.navigate(e,!1),yield ze(h)}catch(D){t.error({err:D},"Failed to initialize chrome browser")}finally{x=!0}});let g=()=>c(this,null,function*(){if(n)try{n({viewport:R.viewport,buffer:yield R.screenshot()})}catch(D){t.error({err:D},"Failed to take screenshot")}});g();let S=setInterval(()=>{g()},250),y=Date.now();for(;!x&&Date.now()-y<r;)yield j(250);return clearInterval(S),x||t.warn("Timeout elapsed waiting for browser to initialize - are you sure this page is accessible?"),R})}reset(e){return c(this,null,function*(){this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear();let t=yield this.context.pages();this.page=t[0];for(let n=1;n<t.length;n++)yield t[n].close();e.clearCookies&&(yield this.context.clearCookies()),e.clearStorage&&(yield this.page.evaluate(()=>{localStorage.clear()})),yield this.page.goto(this.baseURL,{waitUntil:"load",timeout:3e3})})}pageSetup(){return c(this,null,function*(){try{yield this.page.evaluate(yt)}catch(e){}})}wait(e){return c(this,null,function*(){yield this.page.waitForTimeout(e)})}toggleHints(e){return c(this,null,function*(){e.state==="on"?(yield this.page.addStyleTag({content:Re.css}),yield this.page.addScriptTag({content:Re.js}),yield this.page.evaluate(bt)):yield this.page.evaluate(wt)})}showHints(){return c(this,null,function*(){yield this.toggleHints({state:"on"});let e=()=>c(this,null,function*(){try{yield this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}});setTimeout(()=>{e()},3e3)})}cleanup(){return c(this,null,function*(){yield this.page.close(),yield this.context.close(),yield this.browser.close()})}get closed(){return this.page.isClosed()||!this.browser.isConnected()}html(){return c(this,null,function*(){return yield this.page.content()})}get url(){return this.page.url()}screenshotWithHints(e=100,t="device",n="/tmp/screenshots/test.jpg"){return c(this,null,function*(){let r=n==null?void 0:n.split("."),i=r==null?void 0:r.slice(0,-1).join("."),a=r==null?void 0:r.slice(-1)[0],s=yield this.screenshot(e,t,n?`${i}-before-hint.${a}`:void 0);yield this.showHints();let d=yield this.screenshot(e,t,n?`${i}-after-hint.${a}`:void 0);return{before:s,after:d}})}screenshot(e=100,t="device",n){return c(this,null,function*(){return this.page.screenshot({fullPage:!1,quality:e,scale:t,type:"jpeg",caret:"initial",path:n})})}get viewport(){let e=this.page.viewportSize();if(!e)throw new Error("failed to get viewport");return e}navigate(e,t=!0){return c(this,null,function*(){this.logger.debug(`Navigating to ${e}`);let n=Date.now(),r=()=>c(this,null,function*(){try{yield this.page.goto(e,{waitUntil:"load",timeout:3e3}),this.logger.debug({url:e},`Got load event in ${Math.floor(Date.now()-n)}ms`)}catch(i){this.logger.warn({url:e},"Timeout elapsed waiting for page to fire load event, continuing anyways...")}});if(t?yield this.wrapPossibleNavigation(r):yield r(),st.has(this.url)&&process.env.NODE_ENV==="production")throw new Error(`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`);this.logger.debug({url:e},"Navigation complete")})}fill(r,i){return c(this,arguments,function*(e,t,n={}){let a=yield this.click(e,{doubleClick:!1,rightClick:!1});return yield this.type(t,n),a})}type(n){return c(this,arguments,function*(e,t={}){let{clearContent:r=!0,pressKeysSequentially:i=!1}=t;r&&(process.platform==="darwin"?yield this.page.keyboard.press("Meta+A"):yield this.page.keyboard.press("Control+A"),yield this.page.keyboard.press("Backspace")),i?yield this.page.keyboard.type(e):yield this.page.keyboard.insertText(e)})}clickByA11yID(n){return c(this,arguments,function*(e,t={}){let r=this.a11yIdToNodeMap.get(e);if(!r)throw new Error(`Could not find DOM node during click: ${e}`);let i=yield this.clickUsingCDP(r,t);return yield this.highlightNode(i),r.serialize({noChildren:!0,noProperties:!0,noID:!0})})}selectOptionByA11yID(e,t){return c(this,null,function*(){let n=this.a11yIdToNodeMap.get(e);if(!n)throw new Error(`Could not find DOM node while selecting option: ${e}`);if(!n.backendNodeID)throw new Error(`Select target missing backend node id: ${n.getLogForm()}`);return yield(yield this.getLocatorFromBackendID(n.backendNodeID)).selectOption(t,{timeout:8e3}),yield this.highlightNode(n),n.serialize({noChildren:!0,noProperties:!0,noID:!0})})}scrollIntoView(e){return c(this,null,function*(){let t=yield this.resolveCachedTargetToID(e),n=this.a11yIdToNodeMap.get(t);if(!n)throw new Error(`Could not find node in DOM with a11y id: ${t}`);if(!n.backendNodeID)throw new Error(`Focus target missing backend node id: ${n.getLogForm()}`);yield(yield this.getLocatorFromBackendID(n.backendNodeID)).scrollIntoViewIfNeeded({timeout:8e3})})}highlight(e){return c(this,null,function*(){try{let t=yield this.resolveCachedTargetToID(e),n=this.a11yIdToNodeMap.get(t);if(!n)throw new Error(`Could not find DOM node during highlight: ${t}`);if(!n.backendNodeID)throw new Error(`Select target missing backend node id: ${n.getLogForm()}`);yield this.highlightNode(n)}catch(t){this.logger.warn({err:t,target:e},"Failed to highlight target")}})}highlightNode(e){return c(this,null,function*(){try{yield this.cdpClient.send("Overlay.highlightNode",{highlightConfig:ft,backendNodeId:e.backendNodeID})}catch(n){this.logger.warn("Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests.")}let t=()=>c(this,null,function*(){try{yield this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:e.backendNodeID})}catch(n){this.logger.debug({err:n},"Failed to remove node highlight")}});setTimeout(()=>{t()},3e3)})}wrapPossibleNavigation(r){return c(this,arguments,function*(e,t=8e3,n=!0){let i=Date.now(),a=this.url,s=Date.now(),d=new Map,p=new Map,u=E=>{var Fe;let v=De(E.request());p.set(v,((Fe=p.get(v))!=null?Fe:0)+1);let J=E.status();J>=500&&this.logger.warn({request:v,status:J},"Received 500 level response")},h=E=>{var J;if(!vt(E,this.url))return;let v=De(E);d.set(v,((J=d.get(v))!=null?J:0)+1),s=Date.now()};this.page.on("response",u),this.page.on("request",h);let R=[];n&&(R=(yield this.context.pages()).map(E=>E.url()));let x=!1,w=e().catch(E=>(x=!0,E instanceof Error?E:new Error(`${E}`)));yield j(250);let g=E=>c(this,null,function*(){let v=yield E;if(v instanceof Error)throw v;return v}),S=new Set,y=!1,Rt=yield c(this,null,function*(){for(;!x&&!(!y&&Date.now()-i>t);){if(yield j(250),y=!1,S=new Set,Date.now()-s<=1250)continue;let E=!1;for(let v of d.keys())d.get(v)!==p.get(v)&&(Et(v)&&(y=!0),E=!0,S.add(v));if(!E)return this.logger.debug({url:this.url,requests:JSON.stringify(Array.from(d.entries()))},`Network idle in ${Math.floor(Date.now()-i)}ms`),!0}return!x&&S.size>0&&this.logger.warn({url:this.url,unfinishedRequests:JSON.stringify(Array.from(S.entries()))},"Timeout elapsed waiting for network idle, continuing anyways..."),!1});if(this.page.off("response",u),this.page.off("request",h),!Rt)return g(w);let He=this.url;if(!x&&$(He,a)){this.logger.debug({startURL:a,newURL:this.url},"Detected url change in wrapPossibleNavigation, waiting for load state");let E=Math.max(t-(Date.now()-i),0);if(E>0)try{yield this.page.waitForLoadState("load",{timeout:E})}catch(v){this.logger.warn({url:this.url},"Timeout elapsed waiting for load state to fire, continuing anyways...")}}if(n){let E=(yield this.context.pages()).map(v=>v.url());if(E.length>R.length)for(let v of E)v!==He&&(yield this.switchToPage(v))}return g(w)})}resolveCachedTargetToID(e){return c(this,null,function*(){if(!se(e)){let s=this.a11yIdToNodeMap.get(e.id);if(!s)throw new Error(`Resolving target failed, fresh value did not exist in node map: ${e.id}`);return re(s,e),e.id}let t=(yield this.getA11yTree()).serialize();this.logger.debug({tree:t},"Refreshed a11y tree before resolving target");let n=this.a11yIdToNodeMap.get(e.id);if(n){let s=Oe(n,e);if(s>=5)return this.logger.debug({target:e,proposedNode:n.getLogForm(),comparisonScore:s},"Resolved cached a11y target to node with exact same id"),re(n,e),e.id}let r=1/0,i=1/0,a;for(let s of this.a11yIdToNodeMap.values()){let d=Oe(s,e);if(d>=5)return this.logger.debug({newNode:s.getLogForm(),target:e,comparisonScore:d},"Resolved cached a11y target to new node with field comparison"),re(s,e),s.id;if(!e.serializedForm)continue;let p=s.serialize({noID:!0,maxLevel:1,neighbors:1});if(Math.abs(p.length-e.serializedForm.length)>15)continue;let u=$n(e.serializedForm,p),h=u/Math.min(e.serializedForm.length,p.length);u<r&&h<.2&&(r=u,i=h,a=s)}if(a&&r<15)return this.logger.debug({newNode:a.getLogForm(),target:e,distance:r,ratio:i},"Resolved cached a11y target to new node with pure levenshtein distance"),re(a,e),a.id;throw new Error(`Could not find any relevant node given cached target: ${JSON.stringify(e)}`)})}click(n){return c(this,arguments,function*(e,t={}){let r=yield this.resolveCachedTargetToID(e);return yield this.wrapPossibleNavigation(()=>this.clickByA11yID(r,t))})}hover(e){return c(this,null,function*(){let t=yield this.resolveCachedTargetToID(e),n=this.a11yIdToNodeMap.get(t);if(!n)throw new Error(`Could not find DOM node for hover: ${t}`);if(!n.backendNodeID)throw new Error(`Hover target missing backend node id: ${n.getLogForm()}`);return yield(yield this.getLocatorFromBackendID(n.backendNodeID)).hover({timeout:8e3}),yield this.highlightNode(n),n.serialize({noChildren:!0,noProperties:!0,noID:!0})})}selectOption(e,t){return c(this,null,function*(){let n=yield this.resolveCachedTargetToID(e);return this.selectOptionByA11yID(n,t)})}press(e){return c(this,null,function*(){yield this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))})}refresh(){return c(this,null,function*(){yield this.page.reload(),yield this.pageSetup()})}getA11yTree(){return c(this,null,function*(){yield ze(this.cdpClient),yield this.page.evaluate(St);let e=null,t=0,n=this.url;for(;!e;)try{let r=yield this.getRawA11yTree();if(!r.root||r.allNodes.length===0)throw new Error("No a11y tree found on page");e=gt(r,this.logger)}catch(r){if(this.logger.error({err:r,url:n},"Error fetching a11y tree"),t===0)yield j(1e3),t++;else throw new Error(`Max retries exceeded fetching a11y tree: ${r}`)}return e.root||this.logger.warn("A11y tree was pruned entirely"),this.a11yIdToNodeMap=e.a11yIdNodeMap,this.dataMomenticIdToNodeMap=e.dataMomenticIdMap,e})}getA11yIdFromDataMomenticId(e){var t;return(t=this.dataMomenticIdToNodeMap.get(e))==null?void 0:t.id}getRawA11yTree(){return c(this,null,function*(){let e=this.page.url(),t=Date.now(),n=()=>{t=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",n);let r=!1,i=()=>{this.logger.info({url:e},"Load event fired on page"),r=!0,t=Date.now()};this.cdpClient.addListener("Accessibility.loadComplete",i);let a=Date.now(),s=!0;for(;Date.now()-a<3e3;){if(yield j(250),!r&&Date.now()-a<1e3){process.env.NODE_ENV!=="production"&&this.logger.debug({url:e},"A11y tree not loaded yet, waiting...");continue}if(Date.now()-t>=1250){s=!1;break}this.logger.debug({url:e},"A11y tree not stable yet, waiting...")}this.logger.debug({duration:Date.now()-a,eventReceived:r,timeoutTriggered:s},"A11y wait phase completed");let{node:d}=yield this.cdpClient.send("Accessibility.getRootAXNode"),{nodes:p}=yield this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:d.backendDOMNodeId});return this.cdpClient.removeListener("Accessibility.loadComplete",i),this.cdpClient.removeListener("Accessibility.nodesUpdated",n),{root:d,allNodes:p}})}clickUsingVisualCoordinates(e){return c(this,null,function*(){let t=yield this.getElementLocation(e);if(!t)throw new Error(`Could not find element location with backend node id: ${e}`);this.logger.debug({location:t},"Executing mouse click"),yield this.page.mouse.click(t.centerX,t.centerY)})}getIDAttributeUsingCDP(e){return c(this,null,function*(){yield this.cdpClient.send("DOM.getDocument",{depth:0});let t=yield this.cdpClient.send("DOM.requestNode",{objectId:e}),r=(yield this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,i=r.findIndex(a=>a==="data-momentic-id");return i===-1?"":r[i+1]||""})}getLocatorFromBackendID(e){return c(this,null,function*(){let t=yield this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);try{let n=yield this.getIDAttributeUsingCDP(t.object.objectId);if(!n)throw new Error("Failed getting data-momentic-id attribute using CDP");return this.page.locator(`[data-momentic-id="${n}"]`)}catch(n){throw this.logger.error({err:n},"Failed to get ID attribute"),n}})}clickUsingCDP(n){return c(this,arguments,function*(e,t={}){let r=0,i=e;for(;r<at;){if(!i||i.role==="RootWebArea")throw new Error(`Attempted to click node with no clickable surrounding elements: ${e.getLogForm()}`);if(i.role==="StaticText"){i=i.parent;continue}let a=i.backendNodeID;if(!a){this.logger.warn({node:i.getLogForm()},"Click candidate had no backend node ID"),i=i.parent;continue}try{let s=yield this.getLocatorFromBackendID(a);return t.doubleClick?yield s.dblclick({timeout:8e3}):yield s.click({timeout:8e3,button:t.rightClick?"right":"left"}),i.id!==e.id&&this.logger.info({oldNode:e.getLogForm(),newNode:i.getLogForm()},"Redirected click successfully to new element"),i}catch(s){this.logger.error({err:s,node:i.getLogForm()},"Failed click or click timed out"),r++,i=i.parent}}throw new Error(`Max click redirection attempts exhausted on original element: ${e.getLogForm()}`)})}getElementLocation(e){return c(this,null,function*(){let t=yield this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),n=yield this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&n===1&&(n=2);let r=t.documents[0],i=r.layout,a=r.nodes,s=a.nodeName||[],d=a.backendNodeId||[],p=i.nodeIndex,u=i.bounds,h=-1;for(let D=0;D<s.length;D++)if(d[D]===e){h=p.indexOf(D);break}if(h===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[R=0,x=0,w=0,g=0]=u[h];R/=n,x/=n,w/=n,g/=n;let S=R+w/2,y=x+g/2;return{centerX:S,centerY:y}})}scrollUp(){return c(this,null,function*(){yield this.page.mouse.wheel(0,-F.VIEWPORT.height)})}scrollDown(){return c(this,null,function*(){yield this.page.mouse.wheel(0,F.VIEWPORT.height)})}goForward(){return c(this,null,function*(){yield this.wrapPossibleNavigation(()=>this.page.goForward({timeout:8e3})),yield this.pageSetup()})}goBack(){return c(this,null,function*(){yield this.wrapPossibleNavigation(()=>this.page.goBack({timeout:8e3})),yield this.pageSetup()})}switchToPage(e){return c(this,null,function*(){let t=yield this.context.pages();for(let n=0;n<t.length;n++){let r=t[n];if(r.url().includes(e)){this.logger.info(`Switching to tab ${n} with url ${r.url()}`),this.page=r,yield r.waitForLoadState("load",{timeout:3e3}),yield this.pageSetup(),this.cdpClient=yield this.context.newCDPSession(r),yield ze(this.cdpClient);return}}throw new Error(`Could not find page with url containing ${e}`)})}setCookie(e){return c(this,null,function*(){let t=Je(e);yield this.context.addCookies([t])})}solveCaptcha(){return c(this,null,function*(){yield this.getA11yTree();let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=yield this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=yield this.page.solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=yield e.screenshot({type:"jpeg",animations:"allow",quality:100}),n=yield fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:process.env.TWO_CAPTCHA_KEY,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!n.ok){let s=`Captcha solver API returned error response: ${n.statusText}`;throw this.logger.error({text:yield n.text()},s),new Error(s)}let{taskId:r}=yield n.json(),i=Date.now(),a="";for(;Date.now()-i<6e4;){yield j(2500);let s=yield fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:process.env.TWO_CAPTCHA_KEY,taskId:r})});if(!s.ok){let p=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:yield s.text()},p),new Error(p)}let d=yield s.json();if(d.errorId){let p=`Captcha solution API returned error ID ${d.errorId}`;throw this.logger.error(p),new Error(p)}if(d.status==="ready"){a=d.solution.text;break}}if(!a)throw new Error("Captcha solution timed out");return a})}};F.USER_AGENT=It["Desktop Chrome"].userAgent,F.VIEWPORT={width:1920,height:1080};var ke=F;var Xn={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},Yn=Xn;import qn from"dedent";import Jn from"diff-lines";var Zn=1e4,Pe=class{constructor({browser:e,config:t,generator:n,logger:r}){this.browser=e,this.generator=n,this.config=t,this.logger=r,this.pendingInstructions=[],this.commandHistory=[]}get history(){return this.commandHistory.filter(e=>e.state==="DONE")}get lastExecutedCommand(){let e=this.history;return e.length===0?null:e[e.length-1]}resetHistory(){this.commandHistory=[],this.pendingInstructions=[]}resetState(){return c(this,null,function*(){this.resetHistory(),yield this.browser.navigate(this.browser.baseURL)})}getBrowserState(){return c(this,null,function*(){let t=yield(yield this.browser.getA11yTree()).serialize();return this.logger.debug({tree:t},"Got a11y tree"),t})}getSerializedHistory(e,t){let n;return this.config.useHistory==="diff"?n=this.getDiffHistory(e,t):n=this.getListHistory(),n}splitUserGoal(e,t,n){return c(this,null,function*(){if(e==="AI_ACTION"&&t.match(/[,!;.]|(?:and)|(?:then)/)&&this.config.useGoalSplitter){let r=yield this.generator.getGranularGoals({goal:t,url:this.browser.url},n);this.pendingInstructions=r.reverse()}else this.pendingInstructions=[t]})}promptToCommand(e,t,n){return c(this,null,function*(){try{return yield this.promptToCommandHelper(e,t,n)}catch(r){throw r instanceof N?r:new N("InternalWebAgentError",r instanceof Error?r.message:`${r}`,{cause:r})}})}promptToCommandHelper(e,t,n){return c(this,null,function*(){if(this.pendingInstructions.length===0){if(!t.trim())throw new Error("Cannot generate commands for empty goal");yield this.splitUserGoal(e,t,n)}let r=this.pendingInstructions[this.pendingInstructions.length-1];this.logger.info({goal:r},"Starting prompt translation");let i=Date.now(),a=this.browser.url,s=yield this.getBrowserState();this.logger.info({duration:Date.now()-i,url:a},"Got browser state");let d=this.commandHistory.length;this.commandHistory.push({state:"PENDING",browserStateBeforeCommand:s,urlBeforeCommand:a,type:e});let p=this.getSerializedHistory(a,s),u=yield this.generator.getProposedCommand({url:a,numPrevious:d,browserState:s,history:p,goal:r,lastCommand:this.lastExecutedCommand},n);if(this.logger.info({type:u.type,thoughts:u.thoughts},"Got proposed command"),u.type==="SUCCESS"){let h=this.pendingInstructions.pop();if(this.logger.info({finishedInstruction:h,remainingInstructions:this.pendingInstructions},"Removing pending instruction due to SUCCESS"),this.pendingInstructions.length!==0)return this.commandHistory=[],this.promptToCommand(e,"",n)}else u.type==="FAILURE"&&(this.logger.info({remainingInstructions:this.pendingInstructions},"Removing pending instructions due to FAILURE"),this.pendingInstructions=[]);return u})}locateElement(e,t,n){return c(this,null,function*(){if(!e)throw new N("InternalWebAgentError","Cannot locate element with empty description");let r=yield this.getBrowserState(),i;if(t){let{before:a,after:s}=yield this.browser.screenshotWithHints();if(i=yield this.generator.getElementLocationWithVision({goal:e,screenshot:a,hintActivatedScreenshot:s},n),i.id>0){let d=this.browser.getA11yIdFromDataMomenticId(i.id);if(!d)throw new N("InternalWebAgentError",`Unable to find corresponding DOM node for id ${i.id}`);i.id=d}}else i=yield this.generator.getElementLocation({browserState:r,goal:e},n);if(i.id<0)throw new N("ActionFailureError",`Unable to locate element: ${i.thoughts?i.thoughts:"please ensure the element is visible and conforms to Accessibility guidelines"}`);return i})}getDiffHistory(e,t){let n=this.history.filter(i=>i.type==="AI_ACTION");if(n.length===0)return"<NONE/>";let r=[`
You have already executed the following commands successfully (most recent listed first)`,"-".repeat(10)];return n.reverse().forEach((i,a)=>{if(r.push(`COMMAND ${n.length-a}${a===0?" (command just executed)":""}: ${i.serializedCommand}`),a===0)if($(i.urlBeforeCommand,e))r.push(`  URL CHANGE: '${i.urlBeforeCommand}' -> '${e}'`);else{let s=Jn(i.browserStateBeforeCommand,t,{n_surrounding:1});s?s.length<Zn?(r.push("PAGE CONTENT CHANGE:"),s.split(`
`).forEach(d=>r.push(`  ${d}`))):r.push("PAGE CONTENT CHANGE: <TOO_LONG_TO_DISPLAY/>"):r.push("PAGE CONTENT CHANGE: <NONE/>")}r.push("-".repeat(10))}),r.push(`STARTING URL: ${this.browser.baseURL}`),r.join(`
`)}getListHistory(){return qn`Here are the commands that you have successfully executed:
    ${this.commandHistory.filter(e=>e.type==="AI_ACTION").map(e=>`- ${e.serializedCommand}`).join(`
`)}`}executeCommand(e,t,n=!1){return c(this,null,function*(){let r=this.commandHistory[this.commandHistory.length-1];if(!n&&(!r||r.state!=="PENDING"))throw new N("InternalWebAgentError","Executing command but there is no pending entry in the history");let i;try{let a=Date.now();i=yield this.executePresetStep(e,t);let s=Date.now()-a;this.logger.debug({result:i,duration:s},"Got execution result")}catch(a){throw a instanceof Error?new te(`Failed to execute command: ${a}`,{cause:a}):new te("Unexpected throw from executing command",{cause:new Error(`${a}`)})}return i.succeedImmediately&&!n&&(this.pendingInstructions.pop(),this.pendingInstructions.length>0&&(i.succeedImmediately=!1)),i.elementInteracted&&"target"in e&&e.target&&!e.target.elementDescriptor&&(e.target.elementDescriptor=i.elementInteracted.trim()),n||(r.generatedStep=e,r.serializedCommand=Ee(e),r.state="DONE"),i})}executeAssertion(e,t){return c(this,null,function*(){let n;if(t.useVision)n={goal:t.assertion,url:e,screenshot:yield this.browser.screenshot(),browserState:"",history:"",numPrevious:-1,lastCommand:null};else{let i=yield this.getBrowserState(),a=this.getSerializedHistory(e,i);n={goal:t.assertion,url:e,browserState:i,history:a,lastCommand:this.lastExecutedCommand,numPrevious:this.commandHistory.length}}let r=yield this.generator.getAssertionResult(n,t.useVision,t.disableCache);if(r.relevantElements&&Promise.all(r.relevantElements.map(i=>this.browser.highlight({id:i}))),!r.result)throw new N("AssertionFailureError",r.thoughts);return{succeedImmediately:!1,thoughts:r.thoughts,urlAfterCommand:e}})}wrapElementTargetingCommand(e,t,n,r,i=!0){return c(this,null,function*(){if(!e.a11yData&&!e.elementDescriptor)throw new N("InternalWebAgentError","Cannot target element with no target data or element descriptor");let a=e.a11yData&&se(e.a11yData);e.a11yData||(e.a11yData=ie.parse(yield this.locateElement(e.elementDescriptor,t,n)),i=!1);try{let s=yield r(e.a11yData);return a?this.logger.debug({target:e},"Successfully used cached target to perform action"):this.logger.debug({target:e},"Successfully generated and used new a11y target information"),s}catch(s){if(i&&e.elementDescriptor)return this.logger.warn({err:s,target:e},"Failed to execute action with cached target, retrying with AI"),e.a11yData=void 0,this.wrapElementTargetingCommand(e,t,n,r,!0);if(s instanceof N)throw s;let d=`Failed to find '${e.elementDescriptor}': ${s instanceof Error?s.message:s}`;throw this.logger.error({err:s,target:e},d),new N("ActionFailureError",d,{cause:s})}})}executePresetStep(e,t){return c(this,null,function*(){try{return yield this.executePresetStepHelper(e,t)}catch(n){throw n instanceof N?n:new N("InternalWebAgentError",n instanceof Error?n.message:`${n}`,{cause:n})}})}executePresetStepHelper(e,t){return c(this,null,function*(){var r;let n=this.browser.url;switch(e.type){case"SUCCESS":return(r=e.condition)!=null&&r.assertion.trim()?this.executeAssertion(n,e.condition):{succeedImmediately:!1,urlAfterCommand:this.browser.url};case"AI_ASSERTION":return this.executeAssertion(n,e);case"NAVIGATE":yield this.browser.navigate(e.url);break;case"CAPTCHA":let i=yield this.browser.solveCaptcha();i&&(yield this.wrapElementTargetingCommand({elementDescriptor:"the captcha image solution input"},e.useVision,t,p=>this.browser.click(p)),yield this.browser.type(i,{clearContent:!0,pressKeysSequentially:!1}));break;case"GO_BACK":yield this.browser.goBack();break;case"GO_FORWARD":yield this.browser.goForward();break;case"SCROLL_DOWN":case"SCROLL_UP":let a;return e.target&&(e.target.elementDescriptor.trim()||e.target.a11yData)&&(a=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,p=>this.browser.hover(p))),e.type==="SCROLL_UP"?yield this.browser.scrollUp():yield this.browser.scrollDown(),{succeedImmediately:!1,urlAfterCommand:n,elementInteracted:a};case"WAIT":yield this.browser.wait(e.delay*1e3);break;case"REFRESH":yield this.browser.refresh();break;case"CLICK":{let p=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,h=>this.browser.click(h,{doubleClick:e.doubleClick,rightClick:e.rightClick})),u={urlAfterCommand:this.browser.url,succeedImmediately:!1,elementInteracted:p};return $(n,u.urlAfterCommand)&&(u.succeedImmediately=!0,u.succeedImmediatelyReason="URL changed"),u}case"SELECT_OPTION":{let p=yield this.wrapElementTargetingCommand(e.target,!1,t,u=>this.browser.selectOption(u,e.option));return{succeedImmediately:!1,urlAfterCommand:this.browser.url,elementInteracted:p}}case"TAB":yield this.browser.switchToPage(e.url);break;case"COOKIE":if(!e.value)break;yield this.browser.setCookie(e.value);break;case"TYPE":{let p=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,h=>this.browser.click(h));yield this.browser.type(e.value,{clearContent:e.clearContent,pressKeysSequentially:e.pressKeysSequentially}),e.pressEnter&&(yield this.browser.press("Enter"));let u={urlAfterCommand:this.browser.url,succeedImmediately:!1,elementInteracted:p};return $(n,u.urlAfterCommand)&&(u.succeedImmediately=!0,u.succeedImmediatelyReason="URL changed"),u}case"HOVER":{let p=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,u=>this.browser.hover(u));return{succeedImmediately:!1,urlAfterCommand:this.browser.url,elementInteracted:p}}case"PRESS":yield this.browser.press(e.value);let s={urlAfterCommand:this.browser.url,succeedImmediately:!1};return $(n,s.urlAfterCommand)&&(s.succeedImmediately=!0,s.succeedImmediatelyReason="URL changed"),s;default:return(p=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(e)}return{succeedImmediately:!1,urlAfterCommand:this.browser.url}})}};import Qn from"fetch-retry";var eo=Qn(global.fetch),q="v1",Ue=class{constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}getElementLocation(e,t){return c(this,null,function*(){let n=yield this.sendRequest(`/${q}/web-agent/locate-element`,{browserState:e.browserState,goal:e.goal,disableCache:t});return Ie.parse(n)})}getElementLocationWithVision(e,t){return c(this,null,function*(){var r,i;let n=yield this.sendRequest(`/${q}/web-agent/visual-locate`,{goal:e.goal,screenshot:(r=e.screenshot)==null?void 0:r.toString("base64"),hintActivatedScreenshot:(i=e.hintActivatedScreenshot)==null?void 0:i.toString("base64"),disableCache:t});return Ie.parse(n)})}getAssertionResult(e,t,n){return c(this,null,function*(){var i;if(t){let a=yield this.sendRequest(`/${q}/web-agent/assertion`,{url:e.url,goal:e.goal,screenshot:(i=e.screenshot)==null?void 0:i.toString("base64"),disableCache:n,vision:!0});return xe.parse(a)}let r=yield this.sendRequest(`/${q}/web-agent/assertion`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:n,vision:!1});return xe.parse(r)})}getProposedCommand(e,t){return c(this,null,function*(){let n=yield this.sendRequest(`/${q}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:t});return rt.parse(n)})}getGranularGoals(e,t){return c(this,null,function*(){let n=yield this.sendRequest(`/${q}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t});return it.parse(n)})}sendRequest(e,t){return c(this,null,function*(){let n=yield eo(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!n.ok)throw new Error(`Request to ${e} failed with status ${n.status}: ${yield n.text()}`);return n.json()})}};export{Ue as APIGenerator,Pe as AgentController,ke as ChromeBrowser,H as CommandType,Yn as DEFAULT_CONTROLLER_CONFIG,_ as StepType};
