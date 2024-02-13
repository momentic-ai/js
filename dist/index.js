var Ot=Object.defineProperty,Dt=Object.defineProperties;var Mt=Object.getOwnPropertyDescriptors;var Ge=Object.getOwnPropertySymbols;var zt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var $e=(r,e,t)=>e in r?Ot(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,L=(r,e)=>{for(var t in e||(e={}))zt.call(e,t)&&$e(r,t,e[t]);if(Ge)for(var t of Ge(e))Pt.call(e,t)&&$e(r,t,e[t]);return r},j=(r,e)=>Dt(r,Mt(e));var l=(r,e,t)=>new Promise((o,n)=>{var i=m=>{try{s(t.next(m))}catch(p){n(p)}},a=m=>{try{s(t.throw(m))}catch(p){n(p)}},s=m=>m.done?o(m.value):Promise.resolve(m.value).then(i,a);s((t=t.apply(r,e)).next())});import kt from"dedent";import*as c from"zod";import*as M from"zod";var de=M.object({id:M.number().int(),role:M.string().optional(),name:M.string().optional(),numChildren:M.number().optional(),content:M.string().optional(),pathFromRoot:M.string().optional(),serializedForm:M.string().optional()});function me(r){return r.name||r.role||r.content||r.serializedForm}var B=(y=>(y.AI_ASSERTION="AI_ASSERTION",y.CLICK="CLICK",y.SELECT_OPTION="SELECT_OPTION",y.TYPE="TYPE",y.PRESS="PRESS",y.NAVIGATE="NAVIGATE",y.SCROLL_UP="SCROLL_UP",y.SCROLL_DOWN="SCROLL_DOWN",y.GO_BACK="GO_BACK",y.GO_FORWARD="GO_FORWARD",y.WAIT="WAIT",y.REFRESH="REFRESH",y.TAB="TAB",y.COOKIE="COOKIE",y.HOVER="HOVER",y.CAPTCHA="CAPTCHA",y.SUCCESS="SUCCESS",y))(B||{}),Z=c.object({elementDescriptor:c.string(),a11yData:de.optional()}),I=c.object({thoughts:c.string().optional()}),_t=I.merge(c.object({type:c.literal("NAVIGATE"),url:c.string()})).describe("NAVIGATE <URL> - Go to the specified URL. Only navigate to URLs relevant to the user goal."),Ut=I.merge(c.object({target:Z.optional(),type:c.literal("SCROLL_UP"),useVision:c.boolean().default(!1),deltaY:c.number().optional()})).describe("SCROLL_UP [id] - Scroll up while hovering over the element with the specified id. If no id is provided, scroll the entire page."),Ft=I.merge(c.object({target:Z.optional(),type:c.literal("SCROLL_DOWN"),useVision:c.boolean().default(!1),deltaY:c.number().optional()})).describe("SCROLL_DOWN [id] - Scroll down while hovering over the element with the specified id. If no id is provided, scroll the entire page."),Ht=I.merge(c.object({type:c.literal("WAIT"),delay:c.number()})),Bt=I.merge(c.object({type:c.literal("REFRESH")})),Gt=I.merge(c.object({type:c.literal("GO_BACK")})),$t=I.merge(c.object({type:c.literal("GO_FORWARD")})),jt=I.merge(c.object({type:c.literal("CAPTCHA"),useVision:c.boolean().default(!1)})),Vt=I.merge(c.object({type:c.literal("CLICK"),target:Z,doubleClick:c.boolean().default(!1),rightClick:c.boolean().default(!1),useVision:c.boolean().default(!1)})).describe(kt`CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled, hidden or StaticText elements.
  Only click on elements on the Current Page.
  Only click on elements with the following tag names: button, input, link, image, generic.
  `.replaceAll(`
`," ")),Wt=I.merge(c.object({type:c.literal("HOVER"),target:Z,useVision:c.boolean().default(!1)})),Kt=I.merge(c.object({type:c.literal("SELECT_OPTION"),target:Z,option:c.string()})).describe('SELECT_OPTION <id> "<option>" - select an option from a combobox, listbox, or menu element on the page. Provide the id of the parent combobox, listbox, or menu element in <id>. Do NOT provide the id of the option: instead, provide the name of the option in <option> enclosed by single quotes.'),je=I.merge(c.object({type:c.literal("AI_ASSERTION"),assertion:c.string(),useVision:c.boolean().default(!1),disableCache:c.boolean().default(!1),cancelOnFailure:c.boolean().default(!1)})),Xt=c.object({clearContent:c.boolean().default(!0),pressKeysSequentially:c.boolean().default(!1)}),qt=I.merge(c.object({type:c.literal("TYPE"),target:Z,value:c.string(),pressEnter:c.boolean().default(!1),useVision:c.boolean().default(!1)})).merge(Xt).describe('TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.'),Yt=I.merge(c.object({type:c.literal("PRESS"),value:c.string()})).describe('PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key.'),Jt=I.merge(c.object({type:c.literal("TAB"),url:c.string()})),Zt=I.merge(c.object({type:c.literal("COOKIE"),value:c.string()})),Qt=I.merge(c.object({type:c.literal("SUCCESS"),condition:je.optional()})).describe("SUCCESS - the user goal has been successfully achieved"),Q=c.discriminatedUnion("type",[Vt,qt,Yt,Kt,_t,Ft,Ut,Qt]),eo=c.discriminatedUnion("type",[Gt,$t,Bt,je,Ht,Jt,Zt,Wt,jt]),Ve=c.discriminatedUnion("type",[...Q.options,...eo.options]),to=I.merge(c.object({type:c.literal("FAILURE")})).describe("FAILURE - there are no commands to suggest that could make progress that have not already been tried before"),ve=c.discriminatedUnion("type",[...Q.options,to]);import*as A from"zod";var _=(o=>(o.AI_ACTION="AI_ACTION",o.PRESET_ACTION="PRESET_ACTION",o.MODULE="MODULE",o))(_||{}),oe=A.object({type:A.literal("AI_ACTION"),text:A.string(),commands:A.array(Q).optional()}),ne=A.object({type:A.literal("PRESET_ACTION"),command:Ve}),Ce=A.object({type:A.literal("MODULE"),moduleId:A.string().uuid()}),re=A.union([oe,ne]),Ee=A.object({type:A.literal("RESOLVED_MODULE"),moduleId:A.string().uuid(),name:A.string(),steps:re.array()}),pe=A.union([oe,ne,Ce]),ie=A.union([oe,ne,Ee]);import{distance as Ko}from"fastest-levenshtein";import{chromium as Xo,devices as Lt}from"playwright";import{addExtra as qo}from"playwright-extra";import Yo from"puppeteer-extra-plugin-recaptcha";import Jo from"puppeteer-extra-plugin-stealth";import{z as se}from"zod";var We=se.object({thoughts:se.string(),result:se.boolean(),relevantElements:se.array(se.number()).optional()});import Cn from"string-argv";import{z as V}from"zod";var ue=(s=>(s.AI_PROVIDER="AIProviderError",s.AI_TIMEOUT="AITimeoutError",s.JOB_TIMEOUT="JobTimeoutError",s.ACTION_FAILURE="ActionFailureError",s.ASSERTION_FAILURE="AssertionFailureError",s.WEB_AGENT_PLATFORM="InternalWebAgentError",s.UNKNOWN_PLATFORM="InternalPlatformError",s))(ue||{});var ae=class extends Error{constructor(e,t={}){super(e,t),this.name="BrowserExecutionError"}};var he=class extends Error{constructor(e={}){super("Got empty a11y tree",e),this.name="EmptyA11yTreeError"}};var O=class extends Error{constructor(e,t,o={}){var i;let n=!1;for(let a of Object.values(ue))if(t.startsWith(a)){n=!0,e=a;break}n?super(t,o):super(`${e}: ${t}`,o),this.name="TestFailureError",this.stack=(i=this.stack)==null?void 0:i.slice(this.name.length+2),this.reason=e}toString(){return this.message}toJSON(){return{message:this.message}}};var xn=V.object({command:V.string(),thoughts:V.string()}),In=V.string().pipe(V.coerce.number());var Ke=V.object({phrase:V.string()});var On=new Set(Object.values(B));var oo={AI_ACTION:"AI action",MODULE:"Module",AI_ASSERTION:"AI check",CLICK:"Click",HOVER:"Hover",SELECT_OPTION:"Select",TYPE:"Type",PRESS:"Press",NAVIGATE:"Navigate",SCROLL_UP:"Scroll up",SCROLL_DOWN:"Scroll down",CAPTCHA:"Captcha",GO_BACK:"Go back",GO_FORWARD:"Go forward",WAIT:"Wait",REFRESH:"Refresh",TAB:"Switch tab",COOKIE:"Set cookie",SUCCESS:"Done"},Dn={AI_ACTION:"Ask AI to plan and execute something on the page.",MODULE:"A list of steps that can be reused in multiple tests.",AI_ASSERTION:"Ask AI whether something is true on the page.",CLICK:"Click on an element on the page based on a description.",HOVER:"Hover over an element on the page based on a description.",SELECT_OPTION:"Select an option from a dropdown based on a description.",TYPE:"Type the specified text into an element.",PRESS:"Press the specified keys using the keyboard. (e.g. Ctrl+A)",NAVIGATE:"Navigate to the specified URL.",SCROLL_UP:"Scroll up one page.",SCROLL_DOWN:"Scroll down one page.",GO_BACK:"Go back in browser history.",GO_FORWARD:"Go forward in browser history.",WAIT:"Wait for the specified number of seconds.",REFRESH:"Refresh the page. This will not clear cookies or session data.",TAB:"Switch to different tab in the browser.",COOKIE:"Set a cookie that will persist throughout the browser session",CAPTCHA:"Solve captchas on the page. This may take 10-60 seconds.",SUCCESS:"Indicate the entire AI action has succeeded, optionally based on a condition."};import*as g from"zod";var Xe=(i=>(i.SUCCESS="SUCCESS",i.FAILED="FAILED",i.RUNNING="RUNNING",i.IDLE="IDLE",i.CANCELLED="CANCELLED",i))(Xe||{}),qe=(o=>(o.SUCCESS="SUCCESS",o.FAILED="FAILED",o.CANCELLED="CANCELLED",o))(qe||{}),no=g.object({beforeUrl:g.string(),beforeScreenshot:g.string().or(g.instanceof(Buffer)),afterUrl:g.string().optional(),afterScreenshot:g.string().or(g.instanceof(Buffer)).optional(),startedAt:g.coerce.date(),finishedAt:g.coerce.date(),viewport:g.object({height:g.number(),width:g.number()}),status:g.nativeEnum(qe),message:g.string().optional(),elementInteracted:g.string().optional()}),Te=g.object({startedAt:g.coerce.date(),finishedAt:g.coerce.date(),status:g.nativeEnum(Xe),message:g.string().optional(),userAgent:g.string().optional()}),Ae=ne.merge(Te).merge(g.object({results:no.array()})),Ye=oe.merge(Te).merge(g.object({results:Ae.array()})),ro=Ce.merge(Te).merge(g.object({results:g.union([Ye,Ae]).array()})),ge=g.discriminatedUnion("type",[Ye,Ae,ro]);function io(r,e){return r.length<e?r:r.slice(0,e-3)+"[...]"}function xe(r){var e,t,o;switch(r.type){case"SUCCESS":return(e=r.condition)!=null&&e.assertion?`Check success condition: ${r.condition.assertion}`:"All commands completed";case"NAVIGATE":return`Go to URL: ${io(r.url,30)}`;case"CAPTCHA":return"Solve captchas on the page";case"GO_BACK":return"Go back to the previous page";case"GO_FORWARD":return"Go forward to the next page";case"SCROLL_DOWN":return`Scroll down one page${r.target?` in the container of: ${r.target.elementDescriptor}`:""}`;case"SCROLL_UP":return`Scroll up one page${r.target?` in the container of: ${r.target.elementDescriptor}`:""}`;case"WAIT":return`Wait for ${r.delay} seconds`;case"REFRESH":return"Refresh the page";case"CLICK":return`Click on '${r.target.elementDescriptor}'`;case"TYPE":{let i="";return(t=r.target.a11yData)!=null&&t.serializedForm?i=`in element: ${r.target.a11yData.serializedForm}`:r.target.elementDescriptor.length>0&&(i=`in element: ${r.target.elementDescriptor}`),`Type '${r.value}' ${i}`}case"HOVER":{let i="";return(o=r.target.a11yData)!=null&&o.serializedForm?i=` over element: ${r.target.a11yData.serializedForm}`:r.target.elementDescriptor.length>0&&(i=` over element: ${r.target.elementDescriptor}`),`Hover${i}`}case"PRESS":return`Press '${r.value}'`;case"SELECT_OPTION":return`Select option '${r.option}' in '${r.target.elementDescriptor}'`;case"TAB":return`Switch to tab: ${r.url}`;case"COOKIE":return`Set cookie: ${r.value}`;case"AI_ASSERTION":return`${r.useVision?"Visual assertion":"Assertion"}: '${r.assertion}'`;default:return(i=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(r)}}import*as z from"zod";import*as W from"zod";var Je=W.object({type:W.nativeEnum(_),generatedStep:Q.optional(),serializedCommand:W.string().optional(),elementInteracted:W.string().optional()});var G=z.object({goal:z.string(),url:z.string(),browserState:z.string(),history:z.string(),numPrevious:z.number(),lastCommand:Je.or(z.null())});import{parseString as so}from"set-cookie-parser";function Ze(r){let e=so(r);if(!e.name)throw new Error("Name missing from cookie");if(!e.value)throw new Error("Value missing from cookie");let t;if(e.sameSite){let n=e.sameSite.trim().toLowerCase();if(n==="strict")t="Strict";else if(n==="lax")t="Lax";else if(n==="none")t="None";else throw new Error(`Invalid sameSite setting in cookie: ${n}`)}return!e.path&&e.domain&&(e.path="/"),j(L({},e),{expires:e.expires?e.expires.getTime()/1e3:void 0,sameSite:t})}import{z as D}from"zod";var lo="1.0.0",Qe=D.object({run:D.string().describe("Run a single command in the shell. The working directory will be set to where the CLI was invoked from."),waitForCompletion:D.boolean().optional().describe("Defaults to true")}),qn=D.object({type:D.literal("momentic/fixture"),schemaVersion:D.string(),name:D.string(),description:D.string().optional(),setup:D.object({steps:Qe.array(),timeout:D.number().optional().describe("Timeout for all steps in seconds")}).optional(),teardown:D.object({steps:Qe.array(),timeout:D.number().optional().describe("Timeout for all steps in seconds")}).optional()}),Yn={type:"momentic/fixture",schemaVersion:lo,name:"example",description:"An example fixture",setup:{steps:[{run:"./scripts/seed_db.sh",waitForCompletion:!0},{run:"npm run start",waitForCompletion:!1}],timeout:30},teardown:{steps:[{run:"./scripts/shutdown_db.sh"}]}};import{z as co}from"zod";var Qn=co.string().array();import{z as N}from"zod";import{z as R}from"zod";import{z as fe}from"zod";var et=fe.object({name:fe.string(),fixtures:fe.array(fe.string().describe("Name of the fixture (must be available locally in the fixtures directory).")).optional()});import{isValidCron as mo}from"cron-validator";import{z as P}from"zod";var tt=P.object({availableAsModule:P.boolean().default(!1),disableAICaching:P.boolean().default(!1)}),ot=P.object({cron:P.string().refine(r=>mo(r),{message:"Invalid cron expression."}).default("0 0 */1 * *"),enabled:P.boolean().default(!1),timeZone:P.string().default("America/Los_Angeles"),jobKey:P.string().optional()}),nt=P.object({onSuccess:P.boolean().default(!1),onFailure:P.boolean().default(!0)});var po=R.string().min(1).max(255).superRefine((r,e)=>{try{bo(r)}catch(t){return e.addIssue({code:R.ZodIssueCode.custom,message:t.message,fatal:!0}),R.NEVER}}),K=R.object({id:R.string(),name:po,baseUrl:R.string(),schemaVersion:R.string(),advanced:tt,retries:R.number(),envSettings:et.array().optional()}),dr=K.pick({name:!0,baseUrl:!0,retries:!0,advanced:!0}),uo=R.object({createdAt:R.coerce.date(),updatedAt:R.coerce.date(),schedule:ot,notification:nt,createdBy:R.string(),organizationId:R.string()}),ho=K.merge(uo).merge(R.object({steps:R.array(ie)})),go=K.merge(R.object({steps:R.array(ie)})),mr=K.merge(R.object({steps:pe.array()}));var fo=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/,yo=["modules","fixtures"];function bo(r){if(r=r.toLowerCase().trim(),r.length===0||r.length>255)throw new Error("Name must be between 1 and 255 characters long");if(/[<>:"\/\\|?*\x00]/.test(r))throw new Error("Name can only contain alphanumeric characters, dashes, and underscores.");if(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(r))throw new Error(`"${r}" is a reserved name on Windows and cannot be used as a filename.`);if(/^\.+$/.test(r)||/^\s|\s$/.test(r))throw new Error("Name cannot start or end with a space or dot.");if(r.endsWith(".yaml"))throw new Error('Name cannot end with ".yaml".');if(yo.includes(r))throw new Error("'modules' is a reserved folder name in Momentic. Please choose a different name.");if(r.match(fo))throw new Error("Name cannot be a UUID. Please choose a different name.")}var wo="momentic-frame",fr=`${wo}-0`,yr=N.array(N.object({path:N.string(),lastModified:N.date(),createdAt:N.date()})),br=N.object({name:N.string(),steps:ie.array()}),wr=N.object({name:N.string(),baseUrl:N.string().url()});var Sr=N.object({name:N.string(),steps:re.array()}),vr=N.array(N.object({name:N.string(),moduleId:N.string().uuid(),numSteps:N.number()}));import*as U from"zod";var rt=U.object({thoughts:U.string(),id:U.number().int(),options:U.array(U.string()).optional()});var So={0:"DEBUG",1:"INFO",2:"WARN",3:"ERROR"},vo={0:"\x1B[90m",1:"\x1B[32m",2:"\x1B[33m",3:"\x1B[31m"},Ie=class r{constructor(e,t){this.minLogLevel=e,this.logBindings=t}log(e,...t){let o=So[e],n;Array.isArray(t[0])?(n=t[0],t=t.slice(1)):typeof t[0]=="object"&&!(t[0]instanceof Error)&&(n=L(L({},t[0]),this.logBindings),t=t.slice(1));let i=vo[e],a=[`${i}[${new Date().toTimeString().slice(0,8)}][${o}]`];if(e!==0&&a.push("\x1B[39m"),a.push(...t),console.log(...a),n&&!Array.isArray(n))for(let[s,m]of Object.entries(n)){let p=m;m instanceof Error?p=m.message:typeof m=="object"&&(p=JSON.stringify(m,void 0,2),p=p.split(`
`).map((h,u)=>u>0?`  ${h}`:h).join(`
`)),console.log(e===0?`${i}  ${s}:`:`  ${s}:`,p)}else if(n)for(let s of n){let m=s;typeof s=="object"&&(m=JSON.stringify(s,void 0,2),m=m.split(`
`).map((p,h)=>h>0?`  ${p}`:p).join(`
`)),console.log(e===0?`${i}  `:"  ",m)}e===0&&process.stdout.write("\x1B[39m")}setMinLevel(e){this.minLogLevel=e}info(...e){1<this.minLogLevel||this.log(1,...e)}debug(...e){0<this.minLogLevel||this.log(0,...e)}warn(...e){2<this.minLogLevel||this.log(2,...e)}error(...e){3<this.minLogLevel||this.log(3,...e)}child(e){return new r(this.minLogLevel,L(L({},this.logBindings),e))}flush(){}bindings(){return this.logBindings}},Tr=new Ie(1,{});import{z as F}from"zod";var Co=F.object({id:F.string(),createdAt:F.coerce.date(),createdBy:F.string(),organizationId:F.string(),name:F.string(),schemaVersion:F.string(),numSteps:F.number()}),Nr=F.object({steps:re.array()}).merge(Co.omit({numSteps:!0}));import*as d from"zod";import{z as w}from"zod";var Re={WEBHOOK:"WEBHOOK",CRON:"CRON",MANUAL:"MANUAL",CLI:"CLI"},Ne={PENDING:"PENDING",RUNNING:"RUNNING",PASSED:"PASSED",FAILED:"FAILED",CANCELLED:"CANCELLED"},Eo={PASSED:"PASSED",FAILED:"FAILED"},ye=w.string().pipe(w.coerce.date()).or(w.date()),To=w.object({id:w.string(),createdAt:ye,createdBy:w.string(),organizationId:w.string(),scheduledAt:ye.or(w.null()),startedAt:ye.or(w.null()),finishedAt:ye.or(w.null()),testId:w.string().or(w.null()),status:w.nativeEnum(Ne),expectedStatus:w.nativeEnum(Eo).or(w.null()),runKey:w.string(),trigger:w.nativeEnum(Re),attempts:w.number(),test:w.object({name:w.string(),id:w.string()}).or(w.null())}),Ao=To.merge(w.object({results:ge.array(),test:w.object({name:w.string(),id:w.string(),baseUrl:w.string()}).or(w.null())}));var X=d.object({disableCache:d.boolean()}),Gr=d.object({error:d.boolean(),reason:d.string(),message:d.string()}),$r=G.merge(X),it=ve,jr=d.discriminatedUnion("vision",[G.merge(X).merge(d.object({vision:d.literal(!1)})),G.pick({goal:!0,url:!0}).merge(X).merge(d.object({screenshot:d.string(),vision:d.literal(!0)}))]),Le=We,Vr=G.pick({browserState:!0,goal:!0}).merge(X),Wr=G.pick({goal:!0}).merge(X).merge(d.object({screenshot:d.string().describe("base64 encoded image"),hintActivatedScreenshot:d.string().describe("base64 encoded image")})),Oe=rt,Kr=G.pick({goal:!0,url:!0}).merge(X),st=d.string().array(),Xr=G.pick({goal:!0,browserState:!0}).merge(X),at=Ke,qr=d.object({testPaths:d.string().array().describe("can be either hyphenated, lowercase test names or UUIDs"),all:d.boolean().optional()}),Yr=d.object({message:d.string(),queuedTests:d.object({name:d.string(),id:d.string()}).array()});var Jr=d.string().array(),Zr=d.union([d.object({paths:d.string().array().describe("run specific test paths (e.g. todo-test)")}),d.object({path:d.string().describe("deprecated; present for backcompat")}),d.object({all:d.boolean().describe("run all tests")})]),Qr=d.object({tests:d.record(d.string().describe("Test name"),d.string().describe("Test YAML")),modules:d.record(d.string().describe("Module name"),d.string().describe("Module YAML"))}),xo=d.object({test:d.string().describe("test YAML"),modules:d.record(d.string().describe("moduleId"),d.string().describe("module YAML"))}),ei=xo.array();var ti=d.object({testPath:d.string(),testId:d.string()}).partial().merge(d.object({trigger:d.nativeEnum(Re)}));var oi=d.object({startedAt:d.coerce.date(),finishedAt:d.coerce.date(),results:ge.array(),status:d.nativeEnum(Ne)}).partial(),ni=d.object({screenshot:d.string()}),ri=d.object({key:d.string()}),ii=d.object({orgId:d.string()});import{stringify as ui}from"yaml";import{z as v}from"zod";var Si=v.object({test:v.string().describe("YAML for the test, including metadata and steps"),modules:v.record(v.string(),v.string()).describe("Map of module name to YAML for the module")}),vi=K.merge(v.object({steps:pe.array(),fileType:v.literal("momentic/test")})),Ci=Ee.omit({type:!0}).merge(v.object({schemaVersion:v.string(),fileType:v.literal("momentic/module")})),Ei=K.merge(v.object({steps:v.array(v.record(v.string(),v.unknown()))})),Ti=v.object({moduleId:v.string().uuid(),name:v.string(),schemaVersion:v.string(),steps:v.array(v.record(v.string(),v.unknown()))});var De={js:'var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&H(t,n,e[n]);if(P)for(var n of P(e))B.call(e,n)&&H(t,n,e[n]);return t};var g=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);var _=(t,e,n)=>new Promise((o,r)=>{var i=s=>{try{d(n.next(s))}catch(l){r(l)}},a=s=>{try{d(n.throw(s))}catch(l){r(l)}},d=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);d((n=n.apply(t,e)).next())});var E=t=>function(e){return e&&e.isTrusted?t.apply(this,arguments):!0};globalThis.forTrusted==null&&(globalThis.forTrusted=E);var k={create(t,e,n,o){return{bottom:o,top:e,left:t,right:n,width:n-t,height:o-e}},copy(t){return{bottom:t.bottom,top:t.top,left:t.left,right:t.right,width:t.width,height:t.height}},translate(t,e,n){return e==null&&(e=0),n==null&&(n=0),{bottom:t.bottom+n,top:t.top+n,left:t.left+e,right:t.right+e,width:t.width,height:t.height}},subtract(t,e){return e=this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)),e.width<0||e.height<0?[k.copy(t)]:[this.create(t.left,t.top,e.left,e.top),this.create(e.left,t.top,e.right,e.top),this.create(e.right,t.top,t.right,e.top),this.create(t.left,e.top,e.left,e.bottom),this.create(e.right,e.top,t.right,e.bottom),this.create(t.left,e.bottom,e.left,t.bottom),this.create(e.left,e.bottom,e.right,t.bottom),this.create(e.right,e.bottom,t.right,t.bottom)].filter(o=>o.height>0&&o.width>0)},intersects(t,e){return t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom},intersectsStrict(t,e){return t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom},equals(t,e){for(let n of["top","bottom","left","right","width","height"])if(t[n]!==e[n])return!1;return!0},intersect(t,e){return this.create(Math.max(t.left,e.left),Math.max(t.top,e.top),Math.min(t.right,e.right),Math.min(t.bottom,e.bottom))}};var N={_browserInfoLoaded:!0,_firefoxVersion:null,_isFirefox:!1,isFirefox(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._isFirefox},firefoxVersion(){if(!this._browserInfoLoaded)throw Error("browserInfo has not yet loaded.");return this._firefoxVersion},isString(t){return typeof t=="string"||t instanceof String}};var f={isReady(){return document.readyState!=="loading"},documentReady:function(){let t=document.readyState!=="loading",e=[];if(!t){let n;globalThis.addEventListener("DOMContentLoaded",n=E(function(){globalThis.removeEventListener("DOMContentLoaded",n,!0),t=!0;for(let o of e)o();e=null}),!0)}return function(n){if(t)return n();e.push(n)}}(),documentComplete:function(){let t=document.readyState==="complete",e=[];if(!t){let n;globalThis.addEventListener("load",n=E(function(o){if(o.target===document){globalThis.removeEventListener("load",n,!0),t=!0;for(let r of e)r();e=null}}),!0)}return function(n){t?n():e.push(n)}}(),createElement(t){let e=document.createElement(t);return e instanceof HTMLElement?(this.createElement=n=>document.createElement(n),e):(this.createElement=n=>document.createElementNS("http://www.w3.org/1999/xhtml",n),this.createElement(t))},addElementsToPage(t,e){let n=this.createElement("div");e.id!=null&&(n.id=e.id),e.className!=null&&(n.className=e.className);for(let o of t)n.appendChild(o);return document.body.appendChild(n),n},removeElement(t){return t.parentNode.removeChild(t)},isTopFrame(){return globalThis.top===globalThis.self},makeXPath(t){let e=[];for(let n of t)e.push(".//"+n,".//xhtml:"+n);return e.join(" | ")},evaluateXPath(t,e){let n=document.webkitIsFullScreen?document.webkitFullscreenElement:document.documentElement,o=function(r){return r==="xhtml"?"http://www.w3.org/1999/xhtml":null};return document.evaluate(t,n,o,e,null)},getVisibleClientRect(t,e){let n;e==null&&(e=!1);let o=(()=>{let i=[];for(n of t.getClientRects())i.push(k.copy(n));return i})(),r=function(){let i=window.getComputedStyle(t,null),a=i.getPropertyValue("display").indexOf("inline")===0&&i.getPropertyValue("font-size")==="0px";return r=()=>a,a};for(n of o){let i;if((n.width===0||n.height===0)&&e)for(let a of Array.from(t.children)){i=window.getComputedStyle(a,null);let d=i.getPropertyValue("position");if(i.getPropertyValue("float")==="none"&&!["absolute","fixed"].includes(d)&&!(n.height===0&&r()&&i.getPropertyValue("display").indexOf("inline")===0))continue;let s=this.getVisibleClientRect(a,!0);if(!(s===null||s.width<3||s.height<3))return s}else{if(n=this.cropRectToVisible(n),n===null||n.width<3||n.height<3||(i=window.getComputedStyle(t,null),i.getPropertyValue("visibility")!=="visible"))continue;return n}}return null},cropRectToVisible(t){let e=k.create(Math.max(t.left,0),Math.max(t.top,0),t.right,t.bottom);return e.top>=window.innerHeight-4||e.left>=window.innerWidth-4?null:e},getClientRectsForAreas(t,e){let n=[];for(let o of e){let r,i,a,d,s=o.coords.split(",").map(p=>parseInt(p,10)),l=o.shape.toLowerCase();if(["rect","rectangle"].includes(l))s.length==4&&([r,a,i,d]=s);else if(["circle","circ"].includes(l)){if(s.length==3){let[p,w,v]=s,u=v/Math.sqrt(2);r=p-u,i=p+u,a=w-u,d=w+u}}else l==="default"?s.length==2&&([r,a,i,d]=[0,0,t.width,t.height]):s.length>=4&&([r,a,i,d]=s);let c=k.translate(k.create(r,a,i,d),t.left,t.top);c=this.cropRectToVisible(c),c&&!isNaN(c.top)&&!isNaN(c.left)&&!isNaN(c.width)&&!isNaN(c.height)&&n.push({element:o,rect:c})}return n},isSelectable(t){if(!(t instanceof Element))return!1;let e=["button","checkbox","color","file","hidden","image","radio","reset","submit"];return t.nodeName.toLowerCase()==="input"&&e.indexOf(t.type)===-1||t.nodeName.toLowerCase()==="textarea"||t.isContentEditable},isEditable(t){return this.isSelectable(t)||(t.nodeName!=null?t.nodeName.toLowerCase():void 0)==="select"},isEmbed(t){let e=t.nodeName!=null?t.nodeName.toLowerCase():null;return["embed","object"].includes(e)},isFocusable(t){return t&&(this.isEditable(t)||this.isEmbed(t))},isDOMDescendant(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=n.parentNode}return!1},isSelected(t){let e=document.getSelection();if(t.isContentEditable){let n=e.anchorNode;return n&&this.isDOMDescendant(t,n)}else if(f.getSelectionType(e)==="Range"&&e.isCollapsed){let n=e.anchorNode.childNodes[e.anchorOffset];return t===n}else return!1},simulateSelect(t){if(t===document.activeElement&&f.isEditable(document.activeElement))return handlerStack.bubbleEvent("click",{target:t});if(t.focus(),t.tagName.toLowerCase()!=="textarea"||t.value.indexOf(`\n`)<0)try{if(t.selectionStart===0&&t.selectionEnd===0)return t.setSelectionRange(t.value.length,t.value.length)}catch(e){}},simulateClick(t,e){e==null&&(e={});let n=["mouseover","mousedown","mouseup","click"],o=[];for(let r of n){let i=this.simulateMouseEvent(r,t,e);o.push(i)}return o},simulateMouseEvent(t,e,n){if(n==null&&(n={}),t==="mouseout"){if(e==null&&(e=this.lastHoveredElement),this.lastHoveredElement=void 0,e==null)return}else t==="mouseover"&&(this.simulateMouseEvent("mouseout",void 0,n),this.lastHoveredElement=e);let o=new MouseEvent(t,{bubbles:!0,cancelable:!0,composed:!0,view:window,detail:1,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,metaKey:n.metaKey});return e.dispatchEvent(o)},simulateClickDefaultAction(t,e){let n;if(e==null&&(e={}),(t.tagName!=null?t.tagName.toLowerCase():void 0)!=="a"||!t.href)return;let{ctrlKey:o,shiftKey:r,metaKey:i,altKey:a}=e;KeyboardUtils.platform==="Mac"?n=i===!0&&o===!1:n=i===!1&&o===!0,n?chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:r===!0}):r===!0&&i===!1&&o===!1&&a===!1?chrome.runtime.sendMessage({handler:"openUrlInNewWindow",url:t.href}):t.target==="_blank"&&chrome.runtime.sendMessage({handler:"openUrlInNewTab",url:t.href,active:!0})},simulateHover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseover",t,e)},simulateUnhover(t,e){return e==null&&(e={}),this.simulateMouseEvent("mouseout",t,e)},addFlashRect(t){let e=this.createElement("div");return e.classList.add("vimiumReset"),e.classList.add("vimiumFlash"),e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",document.documentElement.appendChild(e),e},getViewportTopLeft(){let t=document.documentElement,e=getComputedStyle(t),n=t.getBoundingClientRect();if(e.position==="static"&&!/content|paint|strict/.test(e.contain||"")){let o=parseInt(e.marginTop),r=parseInt(e.marginLeft);return{top:-n.top+o,left:-n.left+r}}else{let o,r;return N.isFirefox()?(r=parseInt(e.borderTopWidth),o=parseInt(e.borderLeftWidth)):{clientTop:r,clientLeft:o}=t,{top:-n.top-r,left:-n.left-o}}},suppressPropagation(t){t.stopImmediatePropagation()},suppressEvent(t){t.preventDefault(),this.suppressPropagation(t)},consumeKeyup:function(){let t=null;return function(e,n=null,o){if(!e.repeat){t!=null&&handlerStack.remove(t);let{code:r}=e;t=handlerStack.push({_name:"dom_utils/consumeKeyup",keyup(i){return i.code!==r||(this.remove(),o?f.suppressPropagation(i):f.suppressEvent(i)),handlerStack.continueBubbling},blur(i){return i.target===window&&this.remove(),handlerStack.continueBubbling}})}return typeof n=="function"&&n(),o?(f.suppressPropagation(e),handlerStack.suppressPropagation):(f.suppressEvent(e),handlerStack.suppressEvent)}}(),getSelectionType(t){return t==null&&(t=document.getSelection()),t.type?t.type:t.rangeCount===0?"None":t.isCollapsed?"Caret":"Range"},getElementWithFocus(t,e){let n,o=n=t.getRangeAt(0);f.getSelectionType(t)==="Range"&&(o=n.cloneRange(),o.collapse(e)),n=o.startContainer,n.nodeType===1&&(n=n.childNodes[o.startOffset]);let r=n;for(;r&&r.nodeType!==1;)r=r.previousSibling;return n=r||(n!=null?n.parentNode:void 0),n},getSelectionFocusElement(){let t=window.getSelection(),e=t.focusNode;return e==null?null:(e===t.anchorNode&&t.focusOffset===t.anchorOffset&&(e=e.childNodes[t.focusOffset]||e),e.nodeType!==Node.ELEMENT_NODE?e.parentElement:e)},getContainingElement(t){return(typeof t.getDestinationInsertionPoints=="function"?t.getDestinationInsertionPoints()[0]:void 0)||t.parentElement},windowIsTooSmall(){return window.innerWidth<3||window.innerHeight<3},injectUserCss(){let t=document.createElement("style");t.type="text/css",t.textContent=Settings.get("userDefinedLinkHintCss"),document.head.appendChild(t)}};var O={MAX_CONTENT_LENGTH:1e3,MAX_ATTRIBUTE_LENGTH:500,MAX_NUM_DATA_ATTRIBUTES:10,commonAttributes:["id","className","title","aria-label","aria-labelledby"],attributeNamesMapping:new Map([["a",["href","title","rel","target"]],["label",["for"]],["input",["type","name","placeholder","checked","maximumLength"]],["textarea",["placeholder","maximumLength"]],["button",["type"]],["select",["name","multiple"]],["div",["role"]],["iframe",["src"]],["img",["src","alt"]]]),describe(t){var r,i;let e={};this.addAttributes(t,this.commonAttributes,e);let n=((i=(r=t.tagName).toLowerCase)==null?void 0:i.call(r))||"";this.attributeNamesMapping.has(n)&&this.addAttributes(t,this.attributeNamesMapping.get(n),e),this.addDataAttrs(t,e);let o=this.getContent(t);return this.additionalHandling(t,D({tag:n,attributes:e},o&&{content:o}))},getContent(t){var n,o;let e=((o=(n=t.tagName).toLowerCase)==null?void 0:o.call(n))||"";return["input","textarea"].includes(e)?t.value:["div","iframe","img","body"].includes(e)?null:(["a","button","select","label"].includes(e),t.innerText)},additionalHandling(t,e){var o,r;if((((r=(o=t.tagName).toLowerCase)==null?void 0:r.call(o))||"")=="label"&&t.hasAttribute("for")){let i=t.getAttribute("for"),a=document.getElementById(i);a&&(e.target=this.describe(a))}return e},addAttributes(t,e,n){n||(n={});for(let o of e)t.hasAttribute(o)&&(n[o]=t.getAttribute(o).substring(0,this.MAX_ATTRIBUTE_LENGTH));return n},addDataAttrs(t,e){let n=0;for(let o in t.dataset)if(e[`data-${o}`]=t.dataset[o].substring(0,this.MAX_ATTRIBUTE_LENGTH),n++,n>this.MAX_NUM_DATA_ATTRIBUTES)return e;return e}};var x=null,C=()=>G()||document.scrollingElement||document.body,W=function(t){return t?t<0?-1:1:0},U={x:{axisName:"scrollLeft",max:"scrollWidth",viewSize:"clientWidth"},y:{axisName:"scrollTop",max:"scrollHeight",viewSize:"clientHeight"}},X=function(t,e,n){if(N.isString(n)){let o=n;return o==="viewSize"&&t===C()?e==="x"?window.innerWidth:window.innerHeight:t[U[e][o]]}else return n},V=function(t,e,n){let o=U[e].axisName,r=t[o];if(t.scrollBy){let i={behavior:"instant"};i[e==="x"?"left":"top"]=n,t.scrollBy(i)}else t[o]+=n;return t[o]!==r},q=function(t,e){let n=window.getComputedStyle(t);return!(n.getPropertyValue(`overflow-${e}`)==="hidden"||["hidden","collapse"].includes(n.getPropertyValue("visibility"))||n.getPropertyValue("display")==="none")},T=function(t,e,n,o){let r=o*X(t,e,n)||-1;return r=W(r),V(t,e,r)&&V(t,e,-r)},$=function(t,e,n,o){return e==null&&(e="y"),n==null&&(n=1),o==null&&(o=1),T(t,e,n,o)&&q(t,e)},j=function(t=null){let e;if(!t){let n=C();if(T(n,"y",1,1)||T(n,"y",-1,1))return n;t=document.body||C()}if(T(t,"y",1,1)||T(t,"y",-1,1))return t;{let n=Array.from(t.children).map(o=>({element:o,rect:f.getVisibleClientRect(o)})).filter(o=>o.rect);n.map(o=>o.area=o.rect.width*o.rect.height);for(e of n.sort((o,r)=>r.area-o.area)){let o=j(e.element);if(o)return o}return null}},L={init(){x=null},isScrollableElement(t){return x||(x=C()&&j()||C()),t!==x&&$(t)}},G=function(){let t=J[window.location.host];if(t)return document.querySelector(t)},J={"twitter.com":"div.permalink-container div.permalink[role=main]","reddit.com":"#overlayScrollContainer","new.reddit.com":"#overlayScrollContainer","www.reddit.com":"#overlayScrollContainer","web.telegram.org":".MessageList"};window.Scroller=L;var A=function(){let t=null;return f.documentReady(()=>t=document.hasFocus()),globalThis.addEventListener("focus",E(function(e){return e.target===window&&(t=!0),!0}),!0),globalThis.addEventListener("blur",E(function(e){return e.target===window&&(t=!1),!0}),!0),()=>t}();Object.assign(globalThis,{windowIsFocused:A});var R=class{constructor(e){g(this,"element");g(this,"image");g(this,"rect");g(this,"linkText");g(this,"showLinkText");g(this,"reason");g(this,"secondClassCitizen");g(this,"possibleFalsePositive");Object.seal(this),e&&Object.assign(this,e)}},M={getLocalHintsForElement(t){var p,w,v;let e=((w=(p=t.tagName).toLowerCase)==null?void 0:w.call(p))||"",n=!1,o=!1,r=!1,i=[],a=[],d=null;if(e==="img"){let u=t.getAttribute("usemap");if(u){let h=t.getClientRects();u=u.replace(/^#/,"").replace(\'"\',\'\\\\"\');let m=document.querySelector(`map[name="${u}"]`);if(m&&h.length>0){n=!0;let y=m.getElementsByTagName("area"),S=f.getClientRectsForAreas(h[0],y);S=S.map(F=>Object.assign(F,{image:t})),a.push(...S)}}}let s=t.getAttribute("aria-disabled");if(s&&["","true"].includes(s.toLowerCase()))return[];if(this.checkForAngularJs||(this.checkForAngularJs=function(){if(document.getElementsByClassName("ng-scope").length===0)return()=>!1;{let h=[];for(let m of["","data-","x-"])for(let y of["-",":","_"])h.push(`${m}ng${y}click`);return function(m){for(let y of h)if(m.hasAttribute(y))return!0;return!1}}}()),n||(n=this.checkForAngularJs(t)),t.hasAttribute("onclick"))n=!0;else{let u=t.getAttribute("role"),h=["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"];if(u!=null&&h.includes(u.toLowerCase()))n=!0;else{let m=t.getAttribute("contentEditable");m!=null&&["","contenteditable","true","plaintext-only"].includes(m.toLowerCase())&&(n=!0)}}if(!n&&t.hasAttribute("jsaction")){let u=t.getAttribute("jsaction").split(";");for(let h of u){let m=h.trim().split(":");if(m.length>=1&&m.length<=2){let[y,S,F]=m.length===1?["click",...m[0].trim().split("."),"_"]:[m[0],...m[1].trim().split("."),"_"];n||(n=y==="click"&&S!=="none"&&F!=="_")}}}switch(e){case"a":n=!0;break;case"textarea":n||(n=!t.disabled&&!t.readOnly);break;case"input":n||(n=!(((v=t.getAttribute("type"))==null?void 0:v.toLowerCase())=="hidden"||t.disabled||t.readOnly&&f.isSelectable(t)));break;case"button":case"select":n||(n=!t.disabled);break;case"object":case"embed":n=!0;break;case"label":n||(n=t.control!=null&&!t.control.disabled&&this.getLocalHintsForElement(t.control).length===0);break;case"body":n||(n=t===document.body&&!A()&&window.innerWidth>3&&window.innerHeight>3&&(document.body!=null?document.body.tagName.toLowerCase():void 0)!=="frameset"?d="Frame.":void 0),n||(n=t===document.body&&A()&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"img":n||(n=["zoom-in","zoom-out"].includes(t.style.cursor));break;case"div":case"ol":case"ul":n||(n=t.clientHeight<t.scrollHeight&&L.isScrollableElement(t)?d="Scroll.":void 0);break;case"details":n=!0,d="Open.";break}let l=t.getAttribute("class");!n&&(l!=null&&l.toLowerCase().includes("button"))&&(n=!0,r=!0);let c=t.getAttribute("tabindex"),b=c?parseInt(c):-1;if(!n&&!(b<0)&&!isNaN(b)&&(n=!0,o=!0),n)if(a.length>0){let u=a.map(h=>new R({element:h.element,image:t,rect:h.rect,secondClassCitizen:o,possibleFalsePositive:r,reason:d}));i.push(...u)}else{let u=f.getVisibleClientRect(t,!0);if(u!==null){let h=new R({element:t,rect:u,secondClassCitizen:o,possibleFalsePositive:r,reason:d});i.push(h)}}return i},getElementFromPoint(t,e,n,o){n==null&&(n=document),o==null&&(o=[]);let r=n.elementsFromPoint?n.elementsFromPoint(t,e)[0]:n.elementFromPoint(t,e);return o.includes(r)?r:(o.push(r),r&&r.shadowRoot?M.getElementFromPoint(t,e,r.shadowRoot,o):r)},getLocalHints(t){if(!document.body)return[];let e=(s,l)=>{l==null&&(l=[]);for(let c of Array.from(s.querySelectorAll("*")))l.push(c),c.shadowRoot&&e(c.shadowRoot,l);return l},n=e(document.body),o=[];for(let s of Array.from(n))if(!t||s.href){let l=this.getLocalHintsForElement(s);o.push(...l)}o=o.reverse();let r=[1,2,3];o=o.filter((s,l)=>{if(!s.possibleFalsePositive)return!0;let b=Math.max(0,l-6);for(;b<l;){let p=o[b].element;for(let w of r)if(p=p==null?void 0:p.parentElement,p===s.element)return!1;b+=1}return!0});let i=o.filter(s=>{if(s.secondClassCitizen)return!1;let l=s.rect,c=M.getElementFromPoint(l.left+l.width*.5,l.top+l.height*.5);if(c&&(s.element.contains(c)||c.contains(s.element))||s.element.localName=="area"&&c==s.image)return!0;let p=[l.top+.1,l.bottom-.1],w=[l.left+.1,l.right-.1];for(let v of p)for(let u of w){let h=M.getElementFromPoint(u,v);if(h&&(s.element.contains(h)||h.contains(s.element)))return!0}});i.reverse();let{top:a,left:d}=f.getViewportTopLeft();for(let s of i)s.rect.top+=a,s.rect.left+=d;return i}};var I=class{constructor(){this.hints=null;this.hintMarkers=null;this.markersDiv=null;this.enrichedMarkers=null}reset(){this.removeMarkers(),this.hints=null,this.hintMarkers=null,this.markersDiv=null}capture(){return _(this,null,function*(){this.reset(),this.createMarkers(),this.displayMarkers()})}createMarkers(){this.hints=M.getLocalHints(),this.hintMarkers=new Map,this.hints.forEach((e,n)=>{var i,a;let o=f.createElement("div"),r=(a=(i=e.element.attributes["data-momentic-id"])==null?void 0:i.value)!=null?a:void 0;if(!r){console.warn(`[Momentic] No data-momentic-id found for interactive element ${e.element.outerHTML}`);return}o.style.left=e.rect.left+"px",o.style.top=e.rect.top+"px",o.style.zIndex=214e7+n,o.className="vimiumReset internalVimiumHintMarker vimiumHintMarker",Z(o,r),this.hintMarkers.set(r,{hint:e,marker:o})})}enrichMarkers(){if(this.hintMarkers){this.enrichedMarkers=[];for(let[e,n]of this.hintMarkers)this.enrichedMarkers.push(Object.assign(O.describe(n.hint.element),{hintString:e}))}}displayMarkers(){this.hintMarkers&&(this.markersDiv||(this.markersDiv=f.addElementsToPage(Array.from(this.hintMarkers.values()).map(e=>e.marker),{id:"vimiumHintMarkerContainer",className:"vimiumReset"})))}removeMarkers(){this.markersDiv&&(f.removeElement(this.markersDiv),this.markersDiv=null)}toggleMarkers(){this.markersDiv?this.removeMarkers():this.displayMarkers()}},Z=(t,e)=>{for(let n of e){let o=document.createElement("span");o.className="vimiumReset",o.textContent=n,t.appendChild(o)}};window.HintManager=I;\n',css:`/* Reproduced from https://github.com/philc/vimium/blob/master/content_scripts/vimium.css */

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
 `};var q=(r,e)=>{let{hostname:t,pathname:o}=new URL(r),{hostname:n,pathname:i}=new URL(e);return t!==n||o!==i};import{distance as pt}from"fastest-levenshtein";var lt=new Set(["about:blank","chrome-error://chromewebdata/"]),ct=2;var Ro=["focusable","keyshortcuts","controls"],No=["textbox","checkbox","combobox","button","link","list","listitem","tablist","tabpanel","tab","searchbox","menu","menubar","form","dialog","alertdialog","banner","navigation","main","menuitem","menuitemcheckbox","menuitemradio","option","radio","progressbar","switch"],Lo=["notRendered","notVisible","ariaHiddenSubtree","ariaHiddenElement"],Oo=80,Do={paragraph:"p",searchbox:"input"},ht=["paragraph","option","StaticText"],ut={indentLevel:0,noID:!1,noChildren:!1,noProperties:!1,maxLevel:void 0,neighbors:void 0},Me=class{constructor(e){this.id=e.id,this.role=e.role,this.name=e.name,this.content=e.content,this.properties={},this.pathFromRoot=e.pathFromRoot,this.children=e.children,this.backendNodeID=e.backendNodeID,e.properties&&e.properties.forEach(t=>{t.name==="keyshortcuts"?this.dataMomenticId=parseInt(t.value.value):this.properties[t.name]=t.value.value})}getLogForm(){var e,t;return JSON.stringify({id:this.id,name:(e=this.name)!=null?e:"",role:(t=this.role)!=null?t:"",backendNodeId:this.backendNodeID})}isInteresting(){return No.includes(this.role)||this.children.some(e=>e.role==="StaticText")?!0:!!this.name.trim()||!!this.content}serialize(e=ut){var E,b;let{indentLevel:t,noChildren:o,noProperties:n,noID:i}=Object.assign({},ut,e),a=" ".repeat(t),s=Do[this.role]||this.role,m=this.name,p=L({},this.properties);s==="heading"&&(p.level&&(s=`h${p.level}`,delete p.level),m==="heading"&&(m=""));let h=!ht.includes(this.role);if(this.role==="StaticText")return`${a}${m}
`;let u=`${a}<${s}`;!i&&h&&(u+=` id="${this.id}"`),m&&(u+=` name="${m}"`),this.content&&(u+=` content="${this.content}"`),Object.keys(this.properties).length>0&&!n&&Object.entries(this.properties).forEach(([f,S])=>{Ro.includes(f)||(typeof S=="string"?u+=` ${f}="${S}"`:typeof S=="boolean"?S?u+=` ${f}`:u+=` ${f}={false}`:typeof S!="undefined"&&(u+=` ${f}={${JSON.stringify(S)}}`))});let x=e.maxLevel!==void 0&&t/2>=e.maxLevel;if(this.children.length===0||o||x)u+=` />
`;else{let f="";for(let y of this.children)f+=y.serialize(j(L({},e),{indentLevel:t+2}));let S=f.trim();S.length<=Oo&&!S.includes(`
`)?u+=`>${S}</${s}>
`:u+=`>
${f}${a}</${s}>
`}if(e.neighbors!==void 0&&e.neighbors>0&&this.parent){let f=this.parent.children.findIndex(k=>k.id===this.id),S=f>0?(E=this.parent.children[f-1])==null?void 0:E.serialize(j(L({},e),{neighbors:0})):"",y=f<this.parent.children.length-1?(b=this.parent.children[f+1])==null?void 0:b.serialize(j(L({},e),{neighbors:0})):"";return`${S||""}
${u}
${y||""}`}return u}},ze=class{constructor(e,t,o){this.root=e;this.a11yIdNodeMap=t;this.dataMomenticIdMap=o}serialize(){return this.root?this.root.serialize():""}};function Mo(r){var e,t;return(e=r.name)!=null&&e.value?`"${r.name.value}"`:(t=r.role)!=null&&t.value&&r.role.value!=="none"&&r.role.value!=="generic"?`"${r.role.value}"`:`"${r.nodeId}"`}function gt(r,e,t){var s,m,p,h,u,x,E;if(!e&&r.parentId)throw new Error(`Got no parent for accessibility node ${r.nodeId}: ${JSON.stringify(r)}`);let o=new Me({id:parseInt(r.nodeId),role:((s=r.role)==null?void 0:s.value)||"",name:((m=r.name)==null?void 0:m.value)||"",content:((p=r.value)==null?void 0:p.value)||"",properties:r.properties,children:[],pathFromRoot:(e?`${e.pathFromRoot} `:"")+Mo(r),backendNodeID:r.backendDOMNodeId});(h=r.value)!=null&&h.value&&(o.content=`${(u=r.value)==null?void 0:u.value}`);let n=(x=r.childIds)!=null?x:[];for(let b of n){if(!b)continue;let f=t.get(parseInt(b));if(!f)continue;let S=gt(f,o,t);S.length&&(o.children=o.children.concat(S))}if(o.role==="StaticText"&&(o.children=[]),o.children.length===1&&o.children[0].role==="StaticText"){let b=o.name,f=(E=o.children[0])==null?void 0:E.name;(b===f||!f)&&(o.children=[])}let i=[];for(let b=o.children.length-1;b>=0;b--){let f=o.children[b];if(f.role!=="StaticText"){i.push(f);continue}if(b===0||o.children[b-1].role!=="StaticText"){i.push(f);continue}o.children[b-1].name+=` ${f.name}`}if(o.children=i.reverse(),o.role==="generic"&&o.children.length===1){let b=o.children[0];if(!ht.includes(b.role)&&o.name===b.name)return o.children}if(!o.isInteresting()&&r.parentId)return o.children;for(let b of o.children)b.parent=o;return[o]}function ft(r,e,t,o,n=1){r.id=n,n+=1,e.set(r.id,r),r.dataMomenticId?t.set(r.dataMomenticId,r):r.role!=="StaticText"&&r.role!=="RootWebArea"&&r.role!=="paragraph"&&o.debug({node:r.serialize({neighbors:1,maxLevel:1})},"Node has no data-momentic-id");for(let i of r.children)n=ft(i,e,t,o,n);return n}function yt(r,e){if(!r.root)throw new Error("a11y tree has null root");r.allNodes=r.allNodes.filter(a=>{var m;return a.ignored?!((m=a.ignoredReasons)==null?void 0:m.find(p=>Lo.includes(p.name))):!0});let t=new Map;for(let a of r.allNodes)t.set(parseInt(a.nodeId),a);let o=gt(r.root,null,t);if(o.length>1)throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(o)}`);if(o.length===0)throw new he;let n=new Map,i=new Map;return ft(o[0],n,i,e),new ze(o[0],n,i)}var le=(r,e)=>{e.id=r.id,e.content=r.content,e.name=r.name,e.role=r.role,e.numChildren=r.children.length,e.serializedForm=r.serialize({noID:!0,maxLevel:1,neighbors:1})},Pe=(r,e)=>{var n;let t=1;r.role===e.role&&t++;let o=["name","content"];for(let i of o){if(!((n=r[i])!=null&&n.trim()))continue;let a=pt(r[i],e[i])/Math.min(r[i].length,e[i].length);a===0?t+=2:a<=.1&&t++}if(e.numChildren!==void 0&&(r.children.length===e.numChildren&&e.numChildren>0?t++:(e.numChildren>0&&r.children.length===0||Math.abs(r.children.length-e.numChildren)>2)&&t--),e.serializedForm){let i=r.serialize({noID:!0,maxLevel:1,neighbors:1}),a=pt(i,e.serializedForm)/Math.min(i.length,e.serializedForm.length);a===0?t+=2:a<=.1&&t++}return t};var Y={r:147,g:196,b:125,a:.55},bt={showInfo:!1,showRulers:!1,showStyles:!1,showAccessibilityInfo:!1,showExtensionLines:!1,contrastAlgorithm:"aa",contentColor:Y,paddingColor:Y,borderColor:Y,marginColor:Y,eventTargetColor:Y,shapeColor:Y,shapeMarginColor:Y};var H=(r=1e3)=>new Promise(e=>setTimeout(()=>e(),r));function wt(){cursor=document.createElement("img"),cursor.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDcpIj48cGF0aCBkPSJtNi4xNDggMTguNDczIDEuODYzLTEuMDAzIDEuNjE1LS44MzktMi41NjgtNC44MTZoNC4zMzJsLTExLjM3OS0xMS40MDh2MTYuMDE1bDMuMzE2LTMuMjIxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im02LjQzMSAxNyAxLjc2NS0uOTQxLTIuNzc1LTUuMjAyaDMuNjA0bC04LjAyNS04LjA0M3YxMS4xODhsMi41My0yLjQ0MnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"),cursor.setAttribute("id","selenium_cursor"),cursor.setAttribute("style","position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0"),cursor.style.filter="invert(0%) sepia(6%) saturate(24%) hue-rotate(315deg) brightness(89%) contrast(110%)",document.body.appendChild(cursor),document.onmousemove=function(r){r=r||window.event,document.getElementById("selenium_cursor").style.left=r.pageX+"px",document.getElementById("selenium_cursor").style.top=r.pageY+"px"}}function St(){window.globalHintManager||(window.globalHintManager=new window.HintManager),window.globalHintManager.capture()}function vt(){window.globalHintManager&&window.globalHintManager.reset()}function Ct(){let r=document.body.getElementsByTagName("*"),e=1;for(let t=0;t<r.length;t++){let o=e.toString();for(;[6].some(i=>o.includes(i.toString()));)e++,o=e.toString();let n=r[t];n==null||n.setAttribute("data-momentic-id",`${e}`),n==null||n.setAttribute("aria-keyshortcuts",`${e}`),e++}}var zo=new Set(["document","script","XMLHttpRequest","fetch","xhr"]),Po=new Set(["script","document"]),ko=["intercom.io","googletagmanager.com","google-analytics.com","www.gstatic.com","gstatic.com","apis.google.com","sentry.io","newrelic.com","p.retool.com","m.stripe.com","m.stripe.network","js.stripe.com","assets.trybento.co","udon.trybento.co","cdn.lr-in-prod.com","r.lr-in-prod.com","content.product-usage.assembledhq.com","data.product-usage.assembledhq.com","static.zdassets.com","o.clarity.ms/collect"],_o=["api.stripe.com","supabase.co"];function ke(r){return`${r.resourceType()} ${r.method()} ${r.url()}`}function Et(r){return r=r.replace(/^www\./,""),r}function Tt(r){return _o.some(e=>r.includes(e))}function At(r,e){if(!zo.has(r.resourceType()))return!1;let t=new URL(e),o=new URL(r.url());return ko.some(n=>o.hostname.includes(n))?!1:Po.has(r.resourceType())||r.method()!=="GET"?!0:Et(o.hostname).includes(Et(t.hostname))}var Ue=qo(Xo);Ue.use(Jo());Ue.use(Yo({provider:{id:"2captcha",token:process.env.TWO_CAPTCHA_KEY},visualFeedback:!0}));var $=class ${constructor({browser:e,context:t,page:o,baseUrl:n,cdpClient:i,logger:a,localMode:s}){this.a11yIdToNodeMap=new Map;this.dataMomenticIdToNodeMap=new Map;this.browser=e,this.context=t,this.page=o,this.baseURL=n,this.cdpClient=i,this.logger=a,this.localMode=!!s}static init(m){return l(this,arguments,function*({baseUrl:e,logger:t,browserArgs:o,contextArgs:n,sendScreenshotsDuringLoad:i,localMode:a,timeout:s=8e3}){let p=yield Ue.launch(L({headless:!0,handleSIGTERM:!1},o!=null?o:{})),h=yield p.newContext(L({viewport:$.VIEWPORT,deviceScaleFactor:process.platform==="darwin"?2:1,userAgent:Lt["Desktop Chrome"].userAgent,geolocation:{latitude:37.7749,longitude:-122.4194},locale:"en-US",timezoneId:"America/Los_Angeles"},n!=null?n:{})),u=yield h.newPage(),x=yield h.newCDPSession(u),E=new $({browser:p,context:h,page:u,baseUrl:e,cdpClient:x,logger:t,localMode:a}),b=!1;l(this,null,function*(){try{yield E.navigate({url:e,wrapPossibleNavigation:!1,initialNavigation:!0})}catch(ee){t.error({err:ee},"Failed to initialize chrome browser")}finally{b=!0}});let S=()=>l(this,null,function*(){if(i)try{i({viewport:yield E.viewport(),buffer:yield E.screenshot()})}catch(ee){t.error({err:ee},"Failed to take screenshot")}});S();let y=setInterval(()=>{S()},250),k=Date.now();for(;!b&&Date.now()-k<s;)yield H(250);return clearInterval(y),b||t.warn("Timeout elapsed waiting for browser to initialize - are you sure this page is accessible?"),E})}getUserPageOrFrame(){return l(this,null,function*(){if(this.localMode&&this.activeFrame){let e=yield this.page.frame(this.activeFrame);if(!e)throw new Error(`Failed to get non-existent frame: ${this.activeFrame}`);return e}return this.page})}initCDPSession(e=2){return l(this,null,function*(){try{yield this.cdpClient.send("Accessibility.enable"),yield this.cdpClient.send("DOM.enable"),yield this.cdpClient.send("Overlay.enable")}catch(t){if(e>0)return this.logger.error({err:t},"Failed to initialize CDP session, re-creating CDP client"),this.cdpClient=yield this.context.newCDPSession(this.page),yield H(250),this.initCDPSession(e-1)}})}setLogger(e){this.logger=e}registerLocalRequestInterceptors(e){return l(this,null,function*(){yield e.route("**/*",t=>l(this,null,function*(){let o;try{o=yield t.fetch()}catch(i){this.closed||this.logger.warn({err:i},"Network request failed");return}let n=o.headers();delete n["content-security-policy"],delete n["x-frame-options"],delete n["x-xss-protection"],yield t.fulfill({headers:n,response:o})}))})}ping(){if(!this.browser.isConnected())throw new Error("Browser is not connected");if(this.closed)throw new Error("Page has been closed")}setActiveFrame(e){this.activeFrame=e}reset(e){return l(this,null,function*(){var o;this.a11yIdToNodeMap.clear(),this.dataMomenticIdToNodeMap.clear();let t=yield this.context.pages();this.page=t[0];for(let n=1;n<t.length;n++)yield t[n].close();e.clearCookies&&(yield this.context.clearCookies()),e.clearStorage&&(yield(yield this.getUserPageOrFrame()).evaluate(()=>{localStorage.clear()})),yield this.navigate({url:(o=e.url)!=null?o:this.baseURL,wrapPossibleNavigation:!1,initialNavigation:!0})})}pageSetup(){return l(this,null,function*(){try{this.localMode||(yield this.page.evaluate(wt))}catch(e){}})}wait(e){return l(this,null,function*(){yield H(e)})}toggleHints(e){return l(this,null,function*(){let t=yield this.getUserPageOrFrame();e.state==="on"?(yield t.addStyleTag({content:De.css}),yield t.addScriptTag({content:De.js}),yield t.evaluate(St)):yield t.evaluate(vt)})}showHints(){return l(this,null,function*(){yield this.toggleHints({state:"on"});let e=()=>l(this,null,function*(){try{yield this.toggleHints({state:"off"})}catch(t){this.logger.debug({err:t},"Failed to remove vision hints")}});setTimeout(()=>{e()},3e3)})}cleanup(){return l(this,null,function*(){yield this.page.close(),yield this.context.close(),yield this.browser.close()})}get closed(){return this.page.isClosed()||!this.browser.isConnected()}html(){return l(this,null,function*(){return(yield this.getUserPageOrFrame()).content()})}url(){return l(this,null,function*(){return(yield this.getUserPageOrFrame()).url()})}screenshotWithHints(e=100,t="device",o="/tmp/screenshots/test.jpg"){return l(this,null,function*(){let n=o==null?void 0:o.split("."),i=n==null?void 0:n.slice(0,-1).join("."),a=n==null?void 0:n.slice(-1)[0],s=yield this.screenshot(e,t,o?`${i}-before-hint.${a}`:void 0);yield this.showHints();let m=yield this.screenshot(e,t,o?`${i}-after-hint.${a}`:void 0);return{before:s,after:m}})}screenshot(e=100,t="device",o){return l(this,null,function*(){let n={fullPage:!1,quality:e,scale:t,type:"jpeg",caret:"initial",path:o};return!this.localMode||!this.activeFrame?this.page.screenshot(n):Buffer.from("")})}viewport(){return l(this,null,function*(){if(this.localMode&&this.activeFrame){let t=yield this.page.locator(`iframe[name="${this.activeFrame}"]`).boundingBox();if(!t)throw new Error(`Failed to get bounding box for frame: ${this.activeFrame}`);return t}let e=this.page.viewportSize();if(!e)throw new Error("failed to get viewport");return e})}navigate(n){return l(this,arguments,function*({url:e,wrapPossibleNavigation:t=!0,initialNavigation:o=!1}){this.logger.debug(`Navigating to ${e}`),o&&this.localMode&&(yield this.registerLocalRequestInterceptors(this.context));let i=Date.now(),a=()=>l(this,null,function*(){try{yield(yield this.getUserPageOrFrame()).goto(e,{waitUntil:"load",timeout:3e3}),this.logger.debug({url:e},`Got load event in ${Math.floor(Date.now()-i)}ms`)}catch(m){this.logger.warn({url:e},"Timeout elapsed waiting for page to fire load event, continuing anyways...")}finally{yield this.initCDPSession()}});t?yield this.wrapPossibleNavigation(a):yield a();let s=yield this.url();if(lt.has(s)&&process.env.NODE_ENV==="production")throw new Error(`${e} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`);yield this.pageSetup(),this.logger.info({url:e},"Navigation complete")})}fill(n,i){return l(this,arguments,function*(e,t,o={}){let a=yield this.click(e,{doubleClick:!1,rightClick:!1});return yield this.type(t,o),a})}type(o){return l(this,arguments,function*(e,t={}){let{clearContent:n=!0,pressKeysSequentially:i=!1}=t;n&&(process.platform==="darwin"?yield this.page.keyboard.press("Meta+A"):yield this.page.keyboard.press("Control+A"),yield this.page.keyboard.press("Backspace")),i?yield this.page.keyboard.type(e):yield this.page.keyboard.insertText(e)})}clickByA11yID(o){return l(this,arguments,function*(e,t={}){let n=this.a11yIdToNodeMap.get(e);if(!n)throw new Error(`Could not find DOM node during click: ${e}`);let i=yield this.clickUsingCDP(n,t);return yield this.highlightNode(i),n.serialize({noChildren:!0,noProperties:!0,noID:!0})})}selectOptionByA11yID(e,t){return l(this,null,function*(){let o=this.a11yIdToNodeMap.get(e);if(!o)throw new Error(`Could not find DOM node while selecting option: ${e}`);if(!o.backendNodeID)throw new Error(`Select target missing backend node id: ${o.getLogForm()}`);return yield(yield this.getLocatorFromBackendID(o.backendNodeID)).selectOption(t,{timeout:8e3}),yield this.highlightNode(o),o.serialize({noChildren:!0,noProperties:!0,noID:!0})})}scrollIntoView(e){return l(this,null,function*(){let t=yield this.resolveCachedTargetToID(e),o=this.a11yIdToNodeMap.get(t);if(!o)throw new Error(`Could not find node in DOM with a11y id: ${t}`);if(!o.backendNodeID)throw new Error(`Focus target missing backend node id: ${o.getLogForm()}`);yield(yield this.getLocatorFromBackendID(o.backendNodeID)).scrollIntoViewIfNeeded({timeout:8e3})})}highlight(e){return l(this,null,function*(){try{let t=yield this.resolveCachedTargetToID(e),o=this.a11yIdToNodeMap.get(t);if(!o)throw new Error(`Could not find DOM node during highlight: ${t}`);if(!o.backendNodeID)throw new Error(`Select target missing backend node id: ${o.getLogForm()}`);yield this.highlightNode(o)}catch(t){this.logger.warn({err:t,target:e},"Failed to highlight target")}})}highlightNode(e){return l(this,null,function*(){try{yield this.cdpClient.send("Overlay.highlightNode",{highlightConfig:bt,backendNodeId:e.backendNodeID})}catch(o){this.logger.warn("Failed to add node highlight, a page navigation likely occurred. This is non-fatal for tests.")}let t=()=>l(this,null,function*(){try{yield this.cdpClient.send("Overlay.hideHighlight",{backendNodeId:e.backendNodeID})}catch(o){this.logger.debug({err:o},"Failed to remove node highlight")}});setTimeout(()=>{t()},3e3)})}wrapPossibleNavigation(n){return l(this,arguments,function*(e,t=8e3,o=!0){let i=Date.now(),a=yield this.url(),s=Date.now(),m=new Map,p=new Map,h=C=>{var Be;let T=ke(C.request());p.set(T,((Be=p.get(T))!=null?Be:0)+1);let te=C.status();te>=500&&this.logger.warn({request:T,status:te},"Received 500 level response")},u=C=>{var te;if(!At(C,a))return;let T=ke(C);m.set(T,((te=m.get(T))!=null?te:0)+1),s=Date.now()};this.page.on("response",h),this.page.on("request",u);let x=[];o&&(x=(yield this.context.pages()).map(C=>C.url()));let E=!1,b=e().catch(C=>(E=!0,C instanceof Error?C:new Error(`${C}`)));yield H(250);let f=C=>l(this,null,function*(){let T=yield C;if(T instanceof Error)throw T;return T}),S=new Set,y=!1,ee=yield l(this,null,function*(){for(;!E&&!(!y&&Date.now()-i>t);){if(yield H(250),y=!1,S=new Set,Date.now()-s<=1250)continue;let C=!1;for(let T of m.keys())m.get(T)!==p.get(T)&&(Tt(T)&&(y=!0),C=!0,S.add(T));if(!C)return this.logger.debug({url:this.url,requests:JSON.stringify(Array.from(m.entries()))},`Network idle in ${Math.floor(Date.now()-i)}ms`),!0}return!E&&S.size>0&&this.logger.warn({url:this.url,unfinishedRequests:JSON.stringify(Array.from(S.entries()))},"Timeout elapsed waiting for network idle, continuing anyways..."),!1});if(this.page.off("response",h),this.page.off("request",u),!ee)return f(b);let Se=yield this.url();if(!E&&q(Se,a)){this.logger.debug({startUrl:a,newUrl:Se},"Detected url change in wrapPossibleNavigation, waiting for load state");let C=Math.max(t-(Date.now()-i),0);if(C>0)try{yield(yield this.getUserPageOrFrame()).waitForLoadState("load",{timeout:C})}catch(T){this.logger.warn({url:yield this.url()},"Timeout elapsed waiting for load state, continuing anyways...")}}if(o){let C=(yield this.context.pages()).map(T=>T.url());if(C.length>x.length)for(let T of C)T!==Se&&(yield this.switchToPage(T))}return f(b)})}resolveCachedTargetToID(e){return l(this,null,function*(){if(!me(e)){let s=this.a11yIdToNodeMap.get(e.id);if(!s)throw new Error(`Resolving target failed, fresh value did not exist in node map: ${e.id}`);return le(s,e),e.id}let t=(yield this.getA11yTree()).serialize();this.logger.debug({tree:t},"Refreshed a11y tree before resolving target");let o=this.a11yIdToNodeMap.get(e.id);if(o){let s=Pe(o,e);if(s>=5)return this.logger.debug({target:e,proposedNode:o.getLogForm(),comparisonScore:s},"Resolved cached a11y target to node with exact same id"),le(o,e),e.id}let n=1/0,i=1/0,a;for(let s of this.a11yIdToNodeMap.values()){let m=Pe(s,e);if(m>=5)return this.logger.debug({newNode:s.getLogForm(),target:e,comparisonScore:m},"Resolved cached a11y target to new node with field comparison"),le(s,e),s.id;if(!e.serializedForm)continue;let p=s.serialize({noID:!0,maxLevel:1,neighbors:1});if(Math.abs(p.length-e.serializedForm.length)>15)continue;let h=Ko(e.serializedForm,p),u=h/Math.min(e.serializedForm.length,p.length);h<n&&u<.2&&(n=h,i=u,a=s)}if(a&&n<15)return this.logger.debug({newNode:a.getLogForm(),target:e,distance:n,ratio:i},"Resolved cached a11y target to new node with pure levenshtein distance"),le(a,e),a.id;throw new Error(`Could not find any relevant node given cached target: ${JSON.stringify(e)}`)})}click(o){return l(this,arguments,function*(e,t={}){let n=yield this.resolveCachedTargetToID(e);return yield this.wrapPossibleNavigation(()=>this.clickByA11yID(n,t))})}hover(e){return l(this,null,function*(){let t=yield this.resolveCachedTargetToID(e),o=this.a11yIdToNodeMap.get(t);if(!o)throw new Error(`Could not find DOM node for hover: ${t}`);if(!o.backendNodeID)throw new Error(`Hover target missing backend node id: ${o.getLogForm()}`);return yield(yield this.getLocatorFromBackendID(o.backendNodeID)).hover({timeout:8e3}),yield this.highlightNode(o),o.serialize({noChildren:!0,noProperties:!0,noID:!0})})}selectOption(e,t){return l(this,null,function*(){let o=yield this.resolveCachedTargetToID(e);return this.selectOptionByA11yID(o,t)})}press(e){return l(this,null,function*(){yield this.wrapPossibleNavigation(()=>this.page.keyboard.press(e))})}refresh(){return l(this,null,function*(){if(this.localMode&&this.activeFrame){let t=(yield this.getUserPageOrFrame()).url();yield this.navigate({url:t,wrapPossibleNavigation:!0})}else yield this.page.reload(),yield this.pageSetup()})}getA11yTree(){return l(this,null,function*(){yield this.initCDPSession();let e=null,t=0,o=this.url;for(;!e;)try{let n=yield this.getRawA11yTree();if(!n.root||n.allNodes.length===0)throw new Error("No a11y tree found on page");e=yt(n,this.logger)}catch(n){if(this.logger.error({err:n,url:o},"Error fetching a11y tree"),t===0)yield H(1e3),t++;else throw new Error(`Max retries exceeded fetching a11y tree: ${n}`)}return e.root||this.logger.warn("A11y tree was pruned entirely"),this.a11yIdToNodeMap=e.a11yIdNodeMap,this.dataMomenticIdToNodeMap=e.dataMomenticIdMap,e})}getA11yIdFromDataMomenticId(e){var t;return(t=this.dataMomenticIdToNodeMap.get(e))==null?void 0:t.id}getRawA11yTree(){return l(this,null,function*(){let e=yield this.url(),t=Date.now(),o=()=>{t=Date.now()};this.cdpClient.addListener("Accessibility.nodesUpdated",o);let n=!1,i=()=>{this.logger.info({url:e},"Load event fired on page"),n=!0,t=Date.now()};this.cdpClient.addListener("Accessibility.loadComplete",i);let a=Date.now(),s=!0;for(;Date.now()-a<3e3;){if(yield H(250),!n&&Date.now()-a<1e3){process.env.NODE_ENV!=="production"&&this.logger.debug({url:e},"A11y tree not loaded yet, waiting...");continue}if(Date.now()-t>=1250){s=!1;break}this.logger.debug({url:e},"A11y tree not stable yet, waiting...")}this.logger.debug({duration:Date.now()-a,eventReceived:n,timeoutTriggered:s},"A11y wait phase completed"),yield(yield this.getUserPageOrFrame()).evaluate(Ct);let m;if(this.localMode&&this.activeFrame){let{result:{objectId:h}}=yield this.cdpClient.send("Runtime.evaluate",{expression:`document.querySelector("#${this.activeFrame}")`}),u=yield this.cdpClient.send("DOM.describeNode",{objectId:h}),{nodes:x}=yield this.cdpClient.send("Accessibility.getFullAXTree",{frameId:u.node.frameId}),E=x[0];if(!E)throw new Error("No contents found in main page viewer. Are you sure a page is loaded?");m=E}else({node:m}=yield this.cdpClient.send("Accessibility.getRootAXNode"));let{nodes:p}=yield this.cdpClient.send("Accessibility.queryAXTree",{backendNodeId:m.backendDOMNodeId});return this.cdpClient.removeListener("Accessibility.loadComplete",i),this.cdpClient.removeListener("Accessibility.nodesUpdated",o),{root:m,allNodes:p}})}clickUsingVisualCoordinates(e){return l(this,null,function*(){let t=yield this.getElementLocation(e);if(!t)throw new Error(`Could not find element location with backend node id: ${e}`);this.logger.debug({location:t},"Executing mouse click"),yield this.page.mouse.click(t.centerX,t.centerY)})}getIDAttributeUsingCDP(e){return l(this,null,function*(){yield this.cdpClient.send("DOM.getDocument",{depth:0});let t=yield this.cdpClient.send("DOM.requestNode",{objectId:e}),n=(yield this.cdpClient.send("DOM.getAttributes",{nodeId:t.nodeId})).attributes,i=n.findIndex(a=>a==="data-momentic-id");return i===-1?"":n[i+1]||""})}getLocatorFromBackendID(e){return l(this,null,function*(){let t=yield this.cdpClient.send("DOM.resolveNode",{backendNodeId:e});if(!t||!t.object.objectId)throw new Error(`Could not resolve backend node ${e}`);try{let o=yield this.getIDAttributeUsingCDP(t.object.objectId);if(!o)throw new Error("Failed getting data-momentic-id attribute using CDP");return(yield this.getUserPageOrFrame()).locator(`[data-momentic-id="${o}"]`)}catch(o){throw this.logger.error({err:o},"Failed to get ID attribute"),o}})}clickUsingCDP(o){return l(this,arguments,function*(e,t={}){let n=0,i=e;for(;n<ct;){if(!i||i.role==="RootWebArea")throw new Error(`Attempted to click node with no clickable surrounding elements: ${e.getLogForm()}`);if(i.role==="StaticText"){i=i.parent;continue}let a=i.backendNodeID;if(!a){this.logger.warn({node:i.getLogForm()},"Click candidate had no backend node ID"),i=i.parent;continue}try{let s=yield this.getLocatorFromBackendID(a);return t.doubleClick?yield s.dblclick({timeout:8e3}):yield s.click({timeout:8e3,button:t.rightClick?"right":"left"}),i.id!==e.id&&this.logger.info({oldNode:e.getLogForm(),newNode:i.getLogForm()},"Redirected click successfully to new element"),i}catch(s){this.logger.error({err:s,node:i.getLogForm()},"Failed click or click timed out"),n++,i=i.parent}}throw new Error(`Max click redirection attempts exhausted on original element: ${e.getLogForm()}`)})}getElementLocation(e){return l(this,null,function*(){let t=yield this.cdpClient.send("DOMSnapshot.captureSnapshot",{computedStyles:[],includeDOMRects:!0,includePaintOrder:!0}),o=yield this.page.evaluate(()=>window.devicePixelRatio);process.platform==="darwin"&&o===1&&(o=2);let n=t.documents[0],i=n.layout,a=n.nodes,s=a.nodeName||[],m=a.backendNodeId||[],p=i.nodeIndex,h=i.bounds,u=-1;for(let k=0;k<s.length;k++)if(m[k]===e){u=p.indexOf(k);break}if(u===-1)throw new Error(`Could not find any backend node with ID ${e}`);let[x=0,E=0,b=0,f=0]=h[u];x/=o,E/=o,b/=o,f/=o;let S=x+b/2,y=E+f/2;return{centerX:S,centerY:y}})}scrollUp(e){return l(this,null,function*(){yield this.page.mouse.wheel(0,-(e!=null?e:$.VIEWPORT.height))})}scrollDown(e){return l(this,null,function*(){yield this.page.mouse.wheel(0,e!=null?e:$.VIEWPORT.height)})}goForward(){return l(this,null,function*(){yield this.wrapPossibleNavigation(()=>l(this,null,function*(){return this.localMode&&this.activeFrame?(yield this.getUserPageOrFrame()).evaluate(e=>{let t=e().contentWindow;t?t.history.forward():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${this.activeFrame}"]`)):this.page.goForward({timeout:8e3})})),yield this.pageSetup()})}goBack(){return l(this,null,function*(){yield this.wrapPossibleNavigation(()=>l(this,null,function*(){return this.localMode&&this.activeFrame?(yield this.getUserPageOrFrame()).evaluate(e=>{let t=e().contentWindow;t?t.history.back():console.error("Failed to get content window for frame")},()=>document.querySelector(`iframe[name="${this.activeFrame}"]`)):this.page.goBack({timeout:8e3})})),yield this.pageSetup()})}switchToPage(e){return l(this,null,function*(){let t=yield this.context.pages();for(let o=0;o<t.length;o++){let n=t[o];if(n.url().includes(e)){this.logger.info(`Switching to tab ${o} with url ${n.url()}`),this.page=n;try{yield n.waitForLoadState("load",{timeout:3e3})}catch(i){this.logger.warn({url:yield this.url()},"Timeout elapsed waiting for load state during tab switch, continuing anyways...")}yield this.pageSetup(),yield this.initCDPSession();return}}throw new Error(`Could not find page with url containing ${e}`)})}setCookie(e){return l(this,null,function*(){let t=Ze(e);yield this.context.addCookies([t])})}solveCaptcha(){return l(this,null,function*(){yield this.getA11yTree();let e;for(let s of this.a11yIdToNodeMap.values())if(s.role==="image"&&s.name.toLowerCase().includes("captcha")){if(!s.backendNodeID)continue;e=yield this.getLocatorFromBackendID(s.backendNodeID);break}if(!e){let s=yield(yield this.getUserPageOrFrame()).solveRecaptchas();if(!s.captchas||!s.captchas.length)throw new Error("No captchas found on the page");return}let t=yield e.screenshot({type:"jpeg",animations:"allow",quality:100}),o=yield fetch("https://api.2captcha.com/createTask",{method:"POST",body:JSON.stringify({clientKey:process.env.TWO_CAPTCHA_KEY,task:{type:"ImageToTextTask",body:t.toString("base64"),case:!0},languagePool:"en"})});if(!o.ok){let s=`Captcha solver API returned error response: ${o.statusText}`;throw this.logger.error({text:yield o.text()},s),new Error(s)}let{taskId:n}=yield o.json(),i=Date.now(),a="";for(;Date.now()-i<6e4;){yield H(2500);let s=yield fetch("https://api.2captcha.com/getTaskResult",{method:"POST",body:JSON.stringify({clientKey:process.env.TWO_CAPTCHA_KEY,taskId:n})});if(!s.ok){let p=`Captcha solution API returned error response: ${s.statusText}`;throw this.logger.error({text:yield s.text()},p),new Error(p)}let m=yield s.json();if(m.errorId){let p=`Captcha solution API returned error ID ${m.errorId}`;throw this.logger.error(p),new Error(p)}if(m.status==="ready"){a=m.solution.text;break}}if(!a)throw new Error("Captcha solution timed out");return a})}};$.USER_AGENT=Lt["Desktop Chrome"].userAgent,$.VIEWPORT={width:1920,height:1080};var _e=$;var Zo={type:"a11y",version:"1.0.0",useHistory:"diff",useGoalSplitter:!0},Qo=Zo;import en from"dedent";import tn from"diff-lines";var on=1e4,Fe=class{constructor({browser:e,config:t,generator:o,logger:n}){this.closed=!1;this.browser=e,this.generator=o,this.config=t,this.logger=n,this.pendingInstructions=[],this.commandHistory=[]}get history(){return this.commandHistory.filter(e=>e.state==="DONE")}get lastExecutedCommand(){let e=this.history;return e.length===0?null:e[e.length-1]}setOpen(){this.closed=!1}isClosed(){return this.closed}setLogger(e){this.logger=e}resetHistory(){this.commandHistory=[],this.pendingInstructions=[]}resetState(e){return l(this,null,function*(){this.resetHistory(),this.closed=!0,yield this.browser.reset(e)})}getBrowserState(){return l(this,null,function*(){let t=yield(yield this.browser.getA11yTree()).serialize();return this.logger.debug({tree:t},"Got a11y tree"),t})}getSerializedHistory(e,t){let o;return this.config.useHistory==="diff"?o=this.getDiffHistory(e,t):o=this.getListHistory(),o}splitUserGoal(e,t,o){return l(this,null,function*(){if(e==="AI_ACTION"&&t.match(/[,!;.]|(?:and)|(?:then)/)&&this.config.useGoalSplitter){let n=yield this.generator.getGranularGoals({goal:t,url:yield this.browser.url()},o);this.pendingInstructions=n.reverse()}else this.pendingInstructions=[t]})}promptToCommand(e,t,o){return l(this,null,function*(){try{return yield this.promptToCommandHelper(e,t,o)}catch(n){throw n instanceof O?n:new O("InternalWebAgentError",n instanceof Error?n.message:`${n}`,{cause:n})}})}promptToCommandHelper(e,t,o){return l(this,null,function*(){if(this.pendingInstructions.length===0){if(!t.trim())throw new Error("Cannot generate commands for empty goal");yield this.splitUserGoal(e,t,o)}let n=this.pendingInstructions[this.pendingInstructions.length-1];this.logger.info({goal:n},"Starting prompt translation");let i=Date.now(),a=yield this.browser.url(),s=yield this.getBrowserState();this.logger.info({duration:Date.now()-i,url:a},"Got browser state");let m=this.commandHistory.length;this.commandHistory.push({state:"PENDING",browserStateBeforeCommand:s,urlBeforeCommand:a,type:e});let p=this.getSerializedHistory(a,s),h={url:a,numPrevious:m,browserState:s,history:p,goal:n,lastCommand:this.lastExecutedCommand},u=yield this.generator.getProposedCommand(h,o);if(this.logger.info({type:u.type,thoughts:u.thoughts},"Got proposed command"),u.type==="SUCCESS"){let x=this.pendingInstructions.pop();if(this.logger.info({finishedInstruction:x,remainingInstructions:this.pendingInstructions},"Removing pending instruction due to SUCCESS"),this.pendingInstructions.length!==0)return this.commandHistory=[],this.promptToCommand(e,"",o)}else u.type==="FAILURE"&&(this.logger.info({remainingInstructions:this.pendingInstructions},"Removing pending instructions due to FAILURE"),this.pendingInstructions=[]);return{context:h,command:u}})}locateElement(e,t,o){return l(this,null,function*(){if(!e)throw new O("InternalWebAgentError","Cannot locate element with empty description");let n=yield this.getBrowserState(),i;if(t){let{before:a,after:s}=yield this.browser.screenshotWithHints();if(i=yield this.generator.getElementLocationWithVision({goal:e,screenshot:a,hintActivatedScreenshot:s},o),i.id>0){let m=this.browser.getA11yIdFromDataMomenticId(i.id);if(!m)throw new O("InternalWebAgentError",`Unable to find corresponding DOM node for id ${i.id}`);i.id=m}}else i=yield this.generator.getElementLocation({browserState:n,goal:e},o);if(i.id<0)throw new O("ActionFailureError",`Unable to locate element: ${i.thoughts?i.thoughts:"please ensure the element is visible and conforms to Accessibility guidelines"}`);return i})}getDiffHistory(e,t){let o=this.history.filter(i=>i.type==="AI_ACTION");if(o.length===0)return"<NONE/>";let n=[`
You have already executed the following commands successfully (most recent listed first)`,"-".repeat(10)];return o.reverse().forEach((i,a)=>{if(n.push(`COMMAND ${o.length-a}${a===0?" (command just executed)":""}: ${i.serializedCommand}`),a===0)if(q(i.urlBeforeCommand,e))n.push(`  URL CHANGE: '${i.urlBeforeCommand}' -> '${e}'`);else{let s=tn(i.browserStateBeforeCommand,t,{n_surrounding:1});s?s.length<on?(n.push("PAGE CONTENT CHANGE:"),s.split(`
`).forEach(m=>n.push(`  ${m}`))):n.push("PAGE CONTENT CHANGE: <TOO_LONG_TO_DISPLAY/>"):n.push("PAGE CONTENT CHANGE: <NONE/>")}n.push("-".repeat(10))}),n.push(`STARTING URL: ${this.browser.baseURL}`),n.join(`
`)}getListHistory(){return en`Here are the commands that you have successfully executed:
    ${this.commandHistory.filter(e=>e.type==="AI_ACTION").map(e=>`- ${e.serializedCommand}`).join(`
`)}`}executeCommand(e,t,o=!1){return l(this,null,function*(){let n=this.commandHistory[this.commandHistory.length-1];if(!o&&(!n||n.state!=="PENDING"))throw new O("InternalWebAgentError","Executing command but there is no pending entry in the history");if(this.closed)throw new Error("Attempting to execute command on a closed controller");let i;try{let a=Date.now();i=yield this.executePresetStep(e,t);let s=Date.now()-a;this.logger.debug({result:i,duration:s},"Got execution result")}catch(a){throw a instanceof Error?new ae(`Failed to execute command: ${a}`,{cause:a}):new ae("Unexpected throw from executing command",{cause:new Error(`${a}`)})}return i.succeedImmediately&&!o&&(this.pendingInstructions.pop(),this.pendingInstructions.length>0&&(i.succeedImmediately=!1)),i.elementInteracted&&"target"in e&&e.target&&!e.target.elementDescriptor&&(e.target.elementDescriptor=i.elementInteracted.trim()),o||(n.generatedStep=e,n.serializedCommand=xe(e),n.state="DONE"),i})}executeAssertion(e){return l(this,null,function*(){let t=yield this.getBrowserState(),o=yield this.browser.url(),n;if(e.useVision)n={goal:e.assertion,url:o,screenshot:yield this.browser.screenshot(),browserState:"",history:"",numPrevious:-1,lastCommand:null};else{let a=this.getSerializedHistory(o,t);n={goal:e.assertion,url:o,browserState:t,history:a,lastCommand:this.lastExecutedCommand,numPrevious:this.commandHistory.length}}let i=yield this.generator.getAssertionResult(n,e.useVision,e.disableCache);if(i.relevantElements&&Promise.all(i.relevantElements.map(a=>this.browser.highlight({id:a}))),!i.result)throw new O("AssertionFailureError",i.thoughts);return{succeedImmediately:!1,thoughts:i.thoughts,urlAfterCommand:o}})}wrapElementTargetingCommand(e,t,o,n,i=!0){return l(this,null,function*(){if(!e.a11yData&&!e.elementDescriptor)throw new O("InternalWebAgentError","Cannot target element with no target data or element descriptor");let a=e.a11yData&&me(e.a11yData);e.a11yData||(this.logger.debug("No cached locator data for target, prompting AI for fresh location"),e.a11yData=de.parse(yield this.locateElement(e.elementDescriptor,t,o)),i=!1);try{let s=yield n(e.a11yData);return a?this.logger.debug({target:e},"Successfully used cached target to perform action"):this.logger.debug({target:e},"Successfully generated and used new a11y target information"),s}catch(s){if(i&&e.elementDescriptor)return this.logger.warn({err:s,target:e},"Failed to execute action with cached target, retrying with AI"),e.a11yData=void 0,this.wrapElementTargetingCommand(e,t,o,n,!0);if(s instanceof O)throw s;let m=`Failed to find ${e.elementDescriptor?`${e.elementDescriptor}`:"element"}: ${s instanceof Error?s.message:s}`;throw this.logger.error({err:s,target:e},m),new O("ActionFailureError",m,{cause:s})}})}executePresetStep(e,t){return l(this,null,function*(){try{return yield this.executePresetStepHelper(e,t)}catch(o){throw o instanceof O?o:new O("InternalWebAgentError",o instanceof Error?o.message:`${o}`,{cause:o})}})}executePresetStepHelper(e,t){return l(this,null,function*(){var o;switch(e.type){case"SUCCESS":return(o=e.condition)!=null&&o.assertion.trim()?this.executeAssertion(e.condition):{succeedImmediately:!1,urlAfterCommand:yield this.browser.url()};case"AI_ASSERTION":return this.executeAssertion(e);case"NAVIGATE":yield this.browser.navigate({url:e.url});break;case"CAPTCHA":let n=yield this.browser.solveCaptcha();n&&(yield this.wrapElementTargetingCommand({elementDescriptor:"the captcha image solution input"},e.useVision,t,p=>this.browser.click(p)),yield this.browser.type(n,{clearContent:!0,pressKeysSequentially:!1}));break;case"GO_BACK":yield this.browser.goBack();break;case"GO_FORWARD":yield this.browser.goForward();break;case"SCROLL_DOWN":case"SCROLL_UP":let i;return e.target&&(e.target.elementDescriptor.trim()||e.target.a11yData)&&(i=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,p=>this.browser.hover(p))),e.type==="SCROLL_UP"?yield this.browser.scrollUp(e.deltaY):yield this.browser.scrollDown(e.deltaY),{succeedImmediately:!1,urlAfterCommand:yield this.browser.url(),elementInteracted:i};case"WAIT":yield this.browser.wait(e.delay*1e3);break;case"REFRESH":yield this.browser.refresh();break;case"CLICK":{let p=yield this.browser.url(),h=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,x=>this.browser.click(x,{doubleClick:e.doubleClick,rightClick:e.rightClick})),u={urlAfterCommand:yield this.browser.url(),succeedImmediately:!1,elementInteracted:h};return q(p,u.urlAfterCommand)&&(u.succeedImmediately=!0,u.succeedImmediatelyReason="URL changed"),u}case"SELECT_OPTION":{let p=yield this.wrapElementTargetingCommand(e.target,!1,t,h=>this.browser.selectOption(h,e.option));return{succeedImmediately:!1,urlAfterCommand:yield this.browser.url(),elementInteracted:p}}case"TAB":yield this.browser.switchToPage(e.url);break;case"COOKIE":if(!e.value)break;yield this.browser.setCookie(e.value);break;case"TYPE":{let p=yield this.browser.url(),h=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,x=>this.browser.click(x));yield this.browser.type(e.value,{clearContent:e.clearContent,pressKeysSequentially:e.pressKeysSequentially}),e.pressEnter&&(yield this.browser.press("Enter"));let u={urlAfterCommand:yield this.browser.url(),succeedImmediately:!1,elementInteracted:h};return q(p,u.urlAfterCommand)&&(u.succeedImmediately=!0,u.succeedImmediatelyReason="URL changed"),u}case"HOVER":{let p=yield this.wrapElementTargetingCommand(e.target,e.useVision,t,h=>this.browser.hover(h));return{succeedImmediately:!1,urlAfterCommand:yield this.browser.url(),elementInteracted:p}}case"PRESS":let a=yield this.browser.url();yield this.browser.press(e.value);let s={urlAfterCommand:yield this.browser.url(),succeedImmediately:!1};return q(a,s.urlAfterCommand)&&(s.succeedImmediately=!0,s.succeedImmediatelyReason="URL changed"),s;default:return(p=>{throw"If Typescript complains about the line below, you missed a case or break in the switch above"})(e)}return{succeedImmediately:!1,urlAfterCommand:yield this.browser.url()}})}getReverseMappedTarget(e,t,o){return l(this,null,function*(){return(yield this.generator.getReverseMappedDescription({browserState:e.browserState,goal:`${t}`},o)).phrase})}};import nn from"fetch-retry";var rn=nn(global.fetch),J="v1",He=class{constructor(e){this.baseURL=e.baseURL,this.apiKey=e.apiKey}getElementLocation(e,t){return l(this,null,function*(){let o=yield this.sendRequest(`/${J}/web-agent/locate-element`,{browserState:e.browserState,goal:e.goal,disableCache:t});return Oe.parse(o)})}getElementLocationWithVision(e,t){return l(this,null,function*(){var n,i;let o=yield this.sendRequest(`/${J}/web-agent/visual-locate`,{goal:e.goal,screenshot:(n=e.screenshot)==null?void 0:n.toString("base64"),hintActivatedScreenshot:(i=e.hintActivatedScreenshot)==null?void 0:i.toString("base64"),disableCache:t});return Oe.parse(o)})}getAssertionResult(e,t,o){return l(this,null,function*(){var i;if(t){let a=yield this.sendRequest(`/${J}/web-agent/assertion`,{url:e.url,goal:e.goal,screenshot:(i=e.screenshot)==null?void 0:i.toString("base64"),disableCache:o,vision:!0});return Le.parse(a)}let n=yield this.sendRequest(`/${J}/web-agent/assertion`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:o,vision:!1});return Le.parse(n)})}getProposedCommand(e,t){return l(this,null,function*(){let o=yield this.sendRequest(`/${J}/web-agent/next-command`,{url:e.url,browserState:e.browserState,goal:e.goal,history:e.history,numPrevious:e.numPrevious,lastCommand:e.lastCommand,disableCache:t});return it.parse(o)})}getGranularGoals(e,t){return l(this,null,function*(){let o=yield this.sendRequest(`/${J}/web-agent/split-goal`,{url:e.url,goal:e.goal,disableCache:t});return st.parse(o)})}getReverseMappedDescription(e,t){return l(this,null,function*(){let o=yield this.sendRequest(`/${J}/web-agent/reverse-mapped-description`,{goal:e.goal,browserState:e.browserState,disableCache:t});return at.parse(o)})}sendRequest(e,t){return l(this,null,function*(){let o=yield rn(`${this.baseURL}${e}`,{retries:1,retryDelay:1e3,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(!o.ok)throw new Error(`Request to ${e} failed with status ${o.status}: ${yield o.text()}`);return o.json()})}};export{He as APIGenerator,Fe as AgentController,_e as ChromeBrowser,B as CommandType,Qo as DEFAULT_CONTROLLER_CONFIG,_ as StepType};
