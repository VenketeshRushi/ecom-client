import{v as _,w as o,aB as g,ab as T,j as e,x as n,y as b,h as u,c as p,m as N,L as w,V as j}from"./index-74bf4fc5.js";import{E as S}from"./Error-9cde64de.js";var[k,x]=_({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),f=o((a,t)=>{const s=g("Table",a),{className:l,layout:i,...c}=T(a);return e.jsx(k,{value:s,children:e.jsx(n.table,{ref:t,__css:{tableLayout:i,...s.table},className:b("chakra-table",l),...c})})});f.displayName="Table";var E=o((a,t)=>{const s=x();return e.jsx(n.thead,{...a,ref:t,__css:s.thead})}),y=o((a,t)=>{const s=x();return e.jsx(n.tr,{...a,ref:t,__css:s.tr})}),A=o((a,t)=>{var s;const{overflow:l,overflowX:i,className:c,...m}=a;return e.jsx(n.div,{ref:t,className:b("chakra-table__container",c),...m,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(s=l??i)!=null?s:"auto",overflowY:"hidden",maxWidth:"100%"}})}),C=o((a,t)=>{const s=x();return e.jsx(n.tbody,{...a,ref:t,__css:s.tbody})}),d=o(({isNumeric:a,...t},s)=>{const l=x();return e.jsx(n.td,{...t,ref:s,__css:l.td,"data-is-numeric":a})}),h=o(({isNumeric:a,...t},s)=>{const l=x();return e.jsx(n.th,{...t,ref:s,__css:l.th,"data-is-numeric":a})});function P(){const[a,t]=u.useState([]),[s,l]=u.useState(!0),[i,c]=u.useState(null),m=p(r=>r.auth.token);u.useEffect(()=>{v()},[]);async function v(){try{let r=await N("/admin/getusers",{headers:{Authorization:`Bearer ${m}`}});console.log(r),t(r.data),l(!1)}catch(r){console.error(r),c(r),l(!1)}}return e.jsxs(A,{children:[s&&e.jsx(w,{})," ",i&&e.jsx(S,{}),!s&&!i&&e.jsxs(f,{variant:"striped",bg:j("white","gray.900"),borderColor:j("gray.200","gray.700"),children:[e.jsx(E,{children:e.jsxs(y,{children:[e.jsx(h,{children:"ID"}),e.jsx(h,{children:"Email"}),e.jsx(h,{children:"First Name"}),e.jsx(h,{children:"Last Name"}),e.jsx(h,{children:"Is Admin"})]})}),e.jsx(C,{children:a.map(r=>e.jsxs(y,{children:[e.jsx(d,{children:r.id}),e.jsx(d,{children:r.email}),e.jsx(d,{children:r.firstName?r.firstName:"NA"}),e.jsx(d,{children:r.lastName?r.lastName:"NA"}),e.jsx(d,{children:r.isAdmin?"Yes":"No"})]},r.id))})]})]})}export{P as default};