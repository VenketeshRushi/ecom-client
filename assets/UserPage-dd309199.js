import{t as S,j as e,v as y,w,aJ as le,h as p,E as W,G as U,aK as ie,y as ce,J as de,aE as ue,q as O,z as R,aL as xe,o as he,aF as pe,aM as fe,a as K,aN as D,B as V,s as G,R as me,Q as J,T as x,d as b,W as N,c as q,K as be,M as je,L as ye,N as ge,O as ve,P as Ce,a2 as P,i as I,k as Se,a7 as Y,D as E,I as we,F as v}from"./index-497f9636.js";import{C as ke}from"./chunk-5MKCW436-38fc25eb.js";import{u as Te,A as Pe}from"./chunk-V7PAE35Z-5b17c8c4.js";import{M as _e,B as z,a as Ne}from"./chunk-TAPFVM6M-f6e7dffd.js";import{H as Ae}from"./chunk-7OLJDQMT-27b571bb.js";import{G as L}from"./chunk-JARCRF6W-e4ac8ff7.js";import{F as _}from"./chunk-7COXQURZ-b53a6ca3.js";import{u as Ee}from"./chunk-7D6N5TE5-2c5ce548.js";import{E as De}from"./Error-a29f86dc.js";import{L as Ie}from"./Loading-61d335ad.js";import{A as Me,a as Fe,b as Be,c as ze,d as Re}from"./chunk-UIZMWHSN-53d74b2c.js";import{d as Le}from"./dateFormatorFunction-b8d8a4b9.js";import{u as He}from"./index-5421c9fd.js";import"./index-8d968404.js";var We={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},Q=S(function(t,n){const{placement:a="bottom-end",className:r,...l}=t,c=Te(),i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...We[a],...c.badge};return e.jsx(y.div,{ref:n,...l,className:w("chakra-avatar__badge",r),__css:i})});Q.displayName="AvatarBadge";var Ue=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<s.rangeCount;a++)n.push(s.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||n.forEach(function(r){s.addRange(r)}),t&&t.focus()}},Oe=Ue,$={"text/plain":"Text","text/html":"Url",default:"Text"},Ve="Copy to clipboard: #{key}, Enter";function Ye(s){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,t)}function $e(s,t){var n,a,r,l,c,o,i=!1;t||(t={}),n=t.debug||!1;try{r=Oe(),l=document.createRange(),c=document.getSelection(),o=document.createElement("span"),o.textContent=s,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(h){if(h.stopPropagation(),t.format)if(h.preventDefault(),typeof h.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=$[t.format]||$.default;window.clipboardData.setData(u,s)}else h.clipboardData.clearData(),h.clipboardData.setData(t.format,s);t.onCopy&&(h.preventDefault(),t.onCopy(h.clipboardData))}),document.body.appendChild(o),l.selectNodeContents(o),c.addRange(l);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");i=!0}catch(h){n&&console.error("unable to copy using execCommand: ",h),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",s),t.onCopy&&t.onCopy(window.clipboardData),i=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),a=Ye("message"in t?t.message:Ve),window.prompt(a,s)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(l):c.removeAllRanges()),o&&document.body.removeChild(o),r()}return i}var Ke=$e;const Ge=le(Ke);function Je(s,t={}){const[n,a]=p.useState(!1),[r,l]=p.useState(s);p.useEffect(()=>l(s),[s]);const{timeout:c=1500,...o}=typeof t=="number"?{timeout:t}:t,i=p.useCallback(()=>{const d=Ge(r,o);a(d)},[r,o]);return p.useEffect(()=>{let d=null;return n&&(d=window.setTimeout(()=>{a(!1)},c)),()=>{d&&window.clearTimeout(d)}},[c,n]),{value:r,setValue:l,onCopy:i,hasCopied:n}}var X=S(function(t,n){const{children:a,placeholder:r,className:l,...c}=t;return e.jsxs(y.select,{...c,ref:n,className:w("chakra-select",l),children:[r&&e.jsx("option",{value:"",children:r}),a]})});X.displayName="SelectField";function qe(s,t){const n={},a={};for(const[r,l]of Object.entries(s))t.includes(r)?n[r]=l:a[r]=l;return[n,a]}var H=S((s,t)=>{var n;const a=W("Select",s),{rootProps:r,placeholder:l,icon:c,color:o,height:i,h:d,minH:h,minHeight:u,iconColor:f,iconSize:g,...C}=U(s),[k,A]=qe(C,de),T=ie(A),m={width:"100%",height:"fit-content",position:"relative",color:o},j={paddingEnd:"2rem",...a.field,_focus:{zIndex:"unset",...(n=a.field)==null?void 0:n._focus}};return e.jsxs(y.div,{className:"chakra-select__wrapper",__css:m,...k,...r,children:[e.jsx(X,{ref:t,height:d??i,minH:h??u,placeholder:l,...T,__css:j,children:s.children}),e.jsx(Z,{"data-disabled":ce(T.disabled),...(f||o)&&{color:f||o},__css:a.icon,...g&&{fontSize:g},children:c})]})});H.displayName="Select";var Qe=s=>e.jsx("svg",{viewBox:"0 0 24 24",...s,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),Xe=y("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Z=s=>{const{children:t=e.jsx(Qe,{}),...n}=s,a=p.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e.jsx(Xe,{...n,className:"chakra-select__icon-wrapper",children:p.isValidElement(t)?a:null})};Z.displayName="SelectIcon";var ee=S(function(t,n){const a=W("Switch",t),{spacing:r="0.5rem",children:l,...c}=U(t),{getIndicatorProps:o,getInputProps:i,getCheckboxProps:d,getRootProps:h,getLabelProps:u}=Ee(c),f=p.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...a.container}),[a.container]),g=p.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...a.track}),[a.track]),C=p.useMemo(()=>({userSelect:"none",marginStart:r,...a.label}),[r,a.label]);return e.jsxs(y.label,{...h(),className:w("chakra-switch",t.className),__css:f,children:[e.jsx("input",{className:"chakra-switch__input",...i({},n)}),e.jsx(y.span,{...d(),className:"chakra-switch__track",__css:g,children:e.jsx(y.span,{__css:a.thumb,className:"chakra-switch__thumb",...o()})}),l&&e.jsx(y.span,{className:"chakra-switch__label",...u(),__css:C,children:l})]})});ee.displayName="Switch";var[Ze,et,tt,st]=ue();function nt(s){var t;const{defaultIndex:n,onChange:a,index:r,isManual:l,isLazy:c,lazyBehavior:o="unmount",orientation:i="horizontal",direction:d="ltr",...h}=s,[u,f]=p.useState(n??0),[g,C]=He({defaultValue:n??0,value:r,onChange:a});p.useEffect(()=>{r!=null&&f(r)},[r]);const k=tt(),A=p.useId();return{id:`tabs-${(t=s.id)!=null?t:A}`,selectedIndex:g,focusedIndex:u,setSelectedIndex:C,setFocusedIndex:f,isManual:l,isLazy:c,lazyBehavior:o,orientation:i,descendants:k,direction:d,htmlProps:h}}var[at,F]=O({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function rt(s){const{focusedIndex:t,orientation:n,direction:a}=F(),r=et(),l=p.useCallback(c=>{const o=()=>{var m;const j=r.nextEnabled(t);j&&((m=j.node)==null||m.focus())},i=()=>{var m;const j=r.prevEnabled(t);j&&((m=j.node)==null||m.focus())},d=()=>{var m;const j=r.firstEnabled();j&&((m=j.node)==null||m.focus())},h=()=>{var m;const j=r.lastEnabled();j&&((m=j.node)==null||m.focus())},u=n==="horizontal",f=n==="vertical",g=c.key,C=a==="ltr"?"ArrowLeft":"ArrowRight",k=a==="ltr"?"ArrowRight":"ArrowLeft",T={[C]:()=>u&&i(),[k]:()=>u&&o(),ArrowDown:()=>f&&o(),ArrowUp:()=>f&&i(),Home:d,End:h}[g];T&&(c.preventDefault(),T(c))},[r,t,n,a]);return{...s,role:"tablist","aria-orientation":n,onKeyDown:R(s.onKeyDown,l)}}function ot(s){const{isDisabled:t=!1,isFocusable:n=!1,...a}=s,{setSelectedIndex:r,isManual:l,id:c,setFocusedIndex:o,selectedIndex:i}=F(),{index:d,register:h}=st({disabled:t&&!n}),u=d===i,f=()=>{r(d)},g=()=>{o(d),!l&&!(t&&n)&&r(d)},C=xe({...a,ref:he(h,s.ref),isDisabled:t,isFocusable:n,onClick:R(s.onClick,f)}),k="button";return{...C,id:te(c,d),role:"tab",tabIndex:u?0:-1,type:k,"aria-selected":u,"aria-controls":se(c,d),onFocus:t?void 0:R(s.onFocus,g)}}var[lt,it]=O({});function ct(s){const t=F(),{id:n,selectedIndex:a}=t,l=pe(s.children).map((c,o)=>p.createElement(lt,{key:o,value:{isSelected:o===a,id:se(n,o),tabId:te(n,o),selectedIndex:a}},c));return{...s,children:l}}function dt(s){const{children:t,...n}=s,{isLazy:a,lazyBehavior:r}=F(),{isSelected:l,id:c,tabId:o}=it(),i=p.useRef(!1);l&&(i.current=!0);const d=fe({wasSelected:i.current,isSelected:l,enabled:a,mode:r});return{tabIndex:0,...n,children:d?t:null,role:"tabpanel","aria-labelledby":o,hidden:!l,id:c}}function te(s,t){return`${s}--tab-${t}`}function se(s,t){return`${s}--tabpanel-${t}`}var[ut,B]=O({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),ne=S(function(t,n){const a=W("Tabs",t),{children:r,className:l,...c}=U(t),{htmlProps:o,descendants:i,...d}=nt(c),h=p.useMemo(()=>d,[d]),{isFitted:u,...f}=o;return e.jsx(Ze,{value:i,children:e.jsx(at,{value:h,children:e.jsx(ut,{value:a,children:e.jsx(y.div,{className:w("chakra-tabs",l),ref:n,...f,__css:a.root,children:r})})})})});ne.displayName="Tabs";var ae=S(function(t,n){const a=rt({...t,ref:n}),l={display:"flex",...B().tablist};return e.jsx(y.div,{...a,className:w("chakra-tabs__tablist",t.className),__css:l})});ae.displayName="TabList";var M=S(function(t,n){const a=dt({...t,ref:n}),r=B();return e.jsx(y.div,{outline:"0",...a,className:w("chakra-tabs__tab-panel",t.className),__css:r.tabpanel})});M.displayName="TabPanel";var re=S(function(t,n){const a=ct(t),r=B();return e.jsx(y.div,{...a,width:"100%",ref:n,className:w("chakra-tabs__tab-panels",t.className),__css:r.tabpanels})});re.displayName="TabPanels";var oe=S(function(t,n){const a=B(),r=ot({...t,ref:n}),l={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...a.tab};return e.jsx(y.button,{...r,className:w("chakra-tabs__tab",t.className),__css:l})});oe.displayName="Tab";function xt(){const s="https://apple.com/cook",{hasCopied:t,onCopy:n}=Je(s),a=K(),r=p.useRef(null);p.useEffect(()=>{t&&(r.current.focus(),r.current.select())});const l=()=>{G(a,"This functionality is under development","success")};return e.jsx(D,{py:8,px:5,spacing:3,children:e.jsx(V,{w:"full",variant:"outline",onClick:l,children:"Update Profile"})})}const ht=[{id:1,name:"Total Orders Placed",value:32,color:"yellow"},{id:2,name:"Ongoing Deliveries",value:6,color:"green"},{id:3,name:"Products Favorited",value:10,color:"cadet"}];function pt(){const{colorMode:s,toggleColorMode:t}=me();return e.jsxs(D,{as:"ul",spacing:0,listStyleType:"none",children:[e.jsxs(J,{w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{fontWeight:"bold",children:s==="dark"?"Dark Mode":"Light Mode"}),e.jsx("div",{className:"checkbox-wrapper-25",children:e.jsx("input",{type:"checkbox",checked:s==="dark",onChange:t})})]}),ht.map(n=>e.jsxs(b,{as:"li",w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{color:N("brand.dark","brand.light"),children:n.name}),e.jsx(x,{color:`brand.${n.color}`,fontWeight:"bold",children:n.value})]},n.id))]})}function ft(){const[s,t]=p.useState(null),n=q(d=>d.auth.user)||"Test",{isOpen:a,onOpen:r,onClose:l}=be(),c=p.useRef(null),o=()=>{c.current.click()},i=d=>{const h=["image/png","image/jpeg","image/jpg"],u=d.target.files[0];if(u&&h.includes(u.type)){let f=new FileReader;return f.onloadend=()=>t(f.result),f.readAsDataURL(u)}r()};return e.jsxs(D,{spacing:3,py:5,borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(Pe,{size:"2xl",name:n.firstName,cursor:"pointer",onClick:o,src:s&&s,children:e.jsx(Q,{bg:"brand.blue",boxSize:"1em",children:e.jsx("svg",{width:"0.4em",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"})})})}),e.jsx("input",{hidden:!0,type:"file",ref:c,onChange:i}),e.jsxs(je,{isOpen:a,onClose:l,children:[e.jsx(ye,{}),e.jsxs(_e,{children:[e.jsx(ge,{children:"Something went wrong"}),e.jsx(ve,{}),e.jsxs(Ce,{children:[e.jsx(x,{children:"File not supported!"}),e.jsxs(J,{mt:1,children:[e.jsx(x,{color:"brand.cadet",fontSize:"sm",children:"Supported types:"}),e.jsx(z,{colorScheme:"green",children:"PNG"}),e.jsx(z,{colorScheme:"green",children:"JPG"}),e.jsx(z,{colorScheme:"green",children:"JPEG"})]})]}),e.jsx(Ne,{children:e.jsx(V,{onClick:l,children:"Close"})})]})]}),e.jsxs(D,{spacing:1,children:[e.jsx(Ae,{as:"h3",fontSize:"xl",color:N("brand.dark","brand.light"),children:"Venketesh Rushi"}),e.jsx(x,{color:N("brand.gray","brand.light"),fontSize:"sm",children:"Pune, India"})]})]})}function mt(){return e.jsxs(b,{as:"aside",flex:1,mr:{base:0,md:5},mb:{base:5,md:0},rounded:"md",borderWidth:1,borderColor:"brand.light",style:{transform:"translateY(-100px)"},bg:N("gray.50","gray.800"),children:[e.jsx(ft,{}),e.jsx(pt,{}),e.jsx(xt,{})]})}function bt(){return e.jsxs(L,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:6,children:[e.jsxs(P,{id:"firstName",children:[e.jsx(_,{children:"First Name"}),e.jsx(I,{focusBorderColor:"brand.blue",type:"text",placeholder:"Enter Your First Name"})]}),e.jsxs(P,{id:"lastName",children:[e.jsx(_,{children:"Last Name"}),e.jsx(I,{focusBorderColor:"brand.blue",type:"text",placeholder:"Enter Your Last Name"})]}),e.jsxs(P,{id:"phoneNumber",children:[e.jsx(_,{children:"Phone Number"}),e.jsx(I,{focusBorderColor:"brand.blue",type:"tel",placeholder:"Enter Your Phone Number"})]}),e.jsxs(P,{id:"emailAddress",children:[e.jsx(_,{children:"Email Address"}),e.jsx(I,{focusBorderColor:"brand.blue",type:"email",placeholder:"Enter Your Email"})]}),e.jsxs(P,{id:"city",children:[e.jsx(_,{children:"City"}),e.jsxs(H,{focusBorderColor:"brand.blue",placeholder:"Select city",children:[e.jsx("option",{value:"pune",selected:!0,children:"Pune"}),e.jsx("option",{value:"mumbai",children:"Mumbai"}),e.jsx("option",{value:"delhi",children:"New Delhi"}),e.jsx("option",{value:"bangalore",children:"Bangalore"}),e.jsx("option",{value:"chennai",children:"Chennai"}),e.jsx("option",{value:"kolkata",children:"Kolkata"}),e.jsx("option",{value:"hyderabad",children:"Hyderabad"})]})]}),e.jsxs(P,{id:"country",children:[e.jsx(_,{children:"Country"}),e.jsx(H,{focusBorderColor:"brand.blue",placeholder:"Select country",children:e.jsx("option",{value:"india",selected:!0,children:"India"})})]})]})}function jt(){const s=K(),t=()=>{G(s,"This functionality is under development","success")};return e.jsx(b,{mt:5,py:5,px:8,borderTopWidth:1,borderColor:"brand.light",children:e.jsx(V,{color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:t,children:"Update"})})}function yt(){return e.jsxs(P,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(_,{htmlFor:"notificationEmails",mb:0,cursor:"pointer",userSelect:"none",children:"Receive notification emails"}),e.jsx(ee,{id:"notificationEmails"})]})}const gt=({date:s,time:t,children:n})=>e.jsxs(Me,{width:"100%",children:[e.jsx("h2",{children:e.jsxs(Fe,{children:[e.jsxs(b,{flex:"1",textAlign:"left",children:["Order on ",s," at ",t]}),e.jsx(Be,{})]})}),e.jsx(ze,{pb:4,children:n})]});function vt(){const[s,t]=p.useState(!1),[n,a]=p.useState(!1),[r,l]=p.useState([]),c=q(i=>i.auth.token);p.useEffect(()=>{o()},[]);async function o(){try{t(!0);let{data:i}=await Se.get("/order/getorders",{headers:{Authorization:`Bearer ${c}`}});l(i),t(!1)}catch(i){console.log(i),t(!1),a(!0)}}return r.length===0?e.jsx(b,{children:e.jsx(Y,{h:"40vh",children:e.jsx(x,{fontSize:"20px",children:"Your orders will be displayed here."})})}):s?e.jsx(Ie,{}):n?e.jsx(De,{}):e.jsx(Re,{allowMultiple:!0,width:"100%",children:r==null?void 0:r.map(i=>{const{date:d,time:h}=Le(i.createdAt);return e.jsxs(gt,{date:d,time:h,children:[" ",e.jsx(b,{children:e.jsxs(L,{templateColumns:["100%","100%","100%","50% 50%","50% 50%"],gap:["20px","20px","4%","2%","4%"],children:[" ",e.jsxs(b,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Ordered Items"}),e.jsx(E,{mb:"20px"}),i.cartProducts.map(u=>e.jsxs(L,{templateColumns:"100px 60%",p:"5px",children:[e.jsx(b,{w:"100px",overflow:"hidden",children:e.jsx(we,{src:u.img[0]})}),e.jsx(Y,{children:e.jsxs(b,{textAlign:"left",px:"20px",w:"100%",children:[e.jsx(x,{fontWeight:600,children:u.title}),e.jsxs(x,{children:["Price: ₹ ",u.price]}),e.jsxs(x,{children:["Quantity: ",u.quantity]})]})})]},u.price))]}),i.ShippingDetails.map(u=>e.jsxs(b,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Shipping Address"}),e.jsx(E,{mb:"20px"}),e.jsxs(v,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Full Name"}),e.jsx(x,{children:u.name})]}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Email"}),e.jsx(x,{children:u.email})]}),e.jsx(E,{my:"10px"}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Address"}),e.jsx(x,{children:u.addressLine})]}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"City"}),e.jsx(x,{children:u.locality})]}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"State"}),e.jsx(x,{children:u.state})]}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Country"}),e.jsx(x,{children:u.country})]}),e.jsx(E,{my:"10px"})]})]})),e.jsxs(b,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Summary"}),e.jsx(E,{}),e.jsxs(v,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Quantity"}),e.jsx(x,{children:i.quantity})]}),e.jsxs(v,{justifyContent:"space-between",children:[e.jsx(x,{children:"Total"}),e.jsx(x,{children:i.total})]})]})]})]})},i.id)]})})})}function Ct(){return e.jsx(D,{overflowY:"auto",minH:"355px",maxH:"455px",children:e.jsx(vt,{})})}function St(){const s=["Account Settings","Orders Placed","Notifications"];return e.jsxs(b,{as:"main",flex:3,d:"flex",flexDir:"column",justifyContent:"space-between",pt:5,rounded:"md",borderWidth:1,borderColor:"gray.200",style:{transform:"translateY(-100px)"},bg:N("gray.50","gray.800"),children:[e.jsxs(ne,{children:[e.jsx(ae,{px:5,children:s.map(t=>e.jsx(oe,{mx:3,px:0,py:3,fontWeight:"semibold",color:"brand.cadet",borderBottomWidth:1,_active:{bg:"transparent"},_selected:{color:N("brand.dark","white"),borderColor:"brand.blue"},children:t},t))}),e.jsxs(re,{px:3,mt:5,children:[e.jsx(M,{children:e.jsx(bt,{})}),e.jsx(M,{children:e.jsx(Ct,{})}),e.jsx(M,{children:e.jsx(yt,{})})]})]}),e.jsx(jt,{})]})}function Rt(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{marginTop:["70px","70px","70px","70px","70px"]}),e.jsxs(ke,{display:{base:"block",md:"flex"},maxW:"container.xl",py:10,children:[e.jsx(mt,{}),e.jsx(St,{})]}),e.jsx(b,{marginTop:["-90px","-90px","-70px","-70px","-70px"]})]})}export{Rt as default};
