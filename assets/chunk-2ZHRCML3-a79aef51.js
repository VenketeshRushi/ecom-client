import{k as N,l as d,m as R,o as b,t as g,d as y,j as p,p as E}from"./index-bef580fc.js";import{g as j}from"./chunk-ZHMYA64R-56136528.js";import{c as G}from"./chunk-PULVB27S-73499c20.js";var[z,C]=N({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),L=d(function(s,l){const e=R("Input",s),{children:a,className:r,...I}=b(s),m=g("chakra-input__group",r),t={},h=j(a),i=e.field;h.forEach(n=>{var o,u;e&&(i&&n.type.id==="InputLeftElement"&&(t.paddingStart=(o=i.height)!=null?o:i.h),i&&n.type.id==="InputRightElement"&&(t.paddingEnd=(u=i.height)!=null?u:i.h),n.type.id==="InputRightAddon"&&(t.borderEndRadius=0),n.type.id==="InputLeftAddon"&&(t.borderStartRadius=0))});const S=h.map(n=>{var o,u;const v=G({size:((o=n.props)==null?void 0:o.size)||s.size,variant:((u=n.props)==null?void 0:u.variant)||s.variant});return n.type.id!=="Input"?y.cloneElement(n,v):y.cloneElement(n,Object.assign(v,t,n.props))});return p.jsx(E.div,{className:m,ref:l,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...e.group},"data-group":!0,...I,children:p.jsx(z,{value:e,children:S})})});L.displayName="InputGroup";var k=E("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=d(function(s,l){var e,a;const{placement:r="left",...I}=s,m=C(),t=m.field,i={[r==="left"?"insetStart":"insetEnd"]:"0",width:(e=t==null?void 0:t.height)!=null?e:t==null?void 0:t.h,height:(a=t==null?void 0:t.height)!=null?a:t==null?void 0:t.h,fontSize:t==null?void 0:t.fontSize,...m.element};return p.jsx(k,{ref:l,__css:i,...I})});c.id="InputElement";c.displayName="InputElement";var _=d(function(s,l){const{className:e,...a}=s,r=g("chakra-input__left-element",e);return p.jsx(c,{ref:l,placement:"left",className:r,...a})});_.id="InputLeftElement";_.displayName="InputLeftElement";var x=d(function(s,l){const{className:e,...a}=s,r=g("chakra-input__right-element",e);return p.jsx(c,{ref:l,placement:"right",className:r,...a})});x.id="InputRightElement";x.displayName="InputRightElement";export{L as I,x as a,_ as b};