import{m as I,Y as G,j as e,t as y,Z as A,f as x,_ as $,$ as T,V as z,p as N,a0 as P,y as V,I as B,T as a,c as n,a as L,u as O,b as U,a1 as Y,a2 as M,B as d}from"./index-a9e6f51d.js";import{G as D}from"./chunk-JARCRF6W-fc8d25f8.js";import{E as Q}from"./Error-cee54459.js";import{H as Z}from"./chunk-7OLJDQMT-45a75cfc.js";import{H as b}from"./chunk-3ASUQ6PA-977454c7.js";function E(t){return A(t,r=>r==="auto"?"auto":`span ${r}/span ${r}`)}var _=I(function(r,o){const{area:l,colSpan:s,colStart:i,colEnd:c,rowEnd:p,rowSpan:h,rowStart:m,...u}=r,g=G({gridArea:l,gridColumn:E(s),gridRow:E(h),gridColumnStart:i,gridColumnEnd:c,gridRowStart:m,gridRowEnd:p});return e.jsx(y.div,{ref:o,__css:g,...u})});_.displayName="GridItem";function q(){const t=x.useRef(!0);return x.useEffect(()=>{t.current=!1},[]),t.current}function J(t){const r=x.useRef();return x.useEffect(()=>{r.current=t},[t]),r.current}var K=y("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),j=$("skeleton-start-color"),w=$("skeleton-end-color"),X=T({from:{opacity:0},to:{opacity:1}}),ee=T({from:{borderColor:j.reference,background:j.reference},to:{borderColor:w.reference,background:w.reference}}),F=I((t,r)=>{const o={...t,fadeDuration:typeof t.fadeDuration=="number"?t.fadeDuration:.4,speed:typeof t.speed=="number"?t.speed:.8},l=z("Skeleton",o),s=q(),{startColor:i="",endColor:c="",isLoaded:p,fadeDuration:h,speed:m,className:u,fitContent:g,...C}=N(o),[v,k]=P("colors",[i,c]),H=J(p),S=V("chakra-skeleton",u),R={...v&&{[j.variable]:v},...k&&{[w.variable]:k}};if(p){const W=s||H?"none":`${X} ${h}s`;return e.jsx(y.div,{ref:r,className:S,__css:{animation:W},...C})}return e.jsx(K,{ref:r,className:S,...C,__css:{width:g?"fit-content":void 0,...l,...R,_dark:{...l._dark,...R},animation:`${m}s linear infinite alternate ${ee}`}})});F.displayName="Skeleton";const f=({source:t})=>e.jsx(_,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",children:e.jsx(B,{className:"imgAnimation",src:t})}),te=({children:t})=>e.jsx(a,{fontWeight:600,letterSpacing:2,fontFamily:"'Anton', sans-serif",fontSize:["45px","55px","65px","70px","75px"],children:t}),re=({children:t})=>e.jsx(a,{mb:["22px"],px:["10px","15px","30px","50px","100px"],fontSize:["18px","18px","20px","22px","25px"],children:t}),oe=({heading:t,description:r,img:o,gender:l,handleSection:s})=>e.jsxs(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",children:[e.jsx(te,{children:t}),e.jsx(re,{children:r}),e.jsxs(D,{onClick:()=>{s()},gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[e.jsx(f,{source:o[0]}),e.jsx(f,{source:o[1]}),e.jsx(f,{source:o[2]}),e.jsx(f,{source:o[3]})]})]});function ne(){return e.jsx(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],children:e.jsx(D,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],mt:3,children:Array(4).fill().map((t,r)=>e.jsx(_,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",width:"280px",height:"320px",children:e.jsx(F,{height:"100%",width:"100%"})},r))})})}function de(){const t=L(),r=O(),{loading:o,error:l,clothData:s}=U(i=>i.home);return Y("(min-width: 420px)"),x.useEffect(()=>{r(M())},[]),e.jsxs(n,{width:"100%",children:[e.jsxs(n,{width:"89%",m:"auto",display:"flex",flexDirection:"column",alignItems:["left","left","left","center"],justifyContent:"center",mt:6,mb:[4,5,7,8,9],textAlign:["left","left","left","center"],children:[e.jsxs(n,{children:[e.jsx(Z,{fontSize:["40px","45px","50px","60px","65px"],fontFamily:"heading",children:"FEEL IT TO GET IT"}),e.jsx(a,{children:"UP TO 70% OFF EVERYTHING!"})]}),e.jsxs(b,{width:["90%","90%","80%","80%","70%"],align:"center",border:"1px solid red",justifyContent:["flex-start","flex-start","flex-start","space-around","space-around"],mt:[3,3,4,4,5],gap:10,children:[e.jsx(d,{width:"35%",bgColor:"black",color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:0,_hover:{bgColor:"black"},children:"Shop"}),e.jsx(d,{width:"35%",bgColor:"black",color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:0,_hover:{bgColor:"black"},children:"Watch"})]})]}),e.jsx(a,{m:"auto",width:"89%",fontSize:"24px",textAlign:"left",fontWeight:"500",marginBottom:2,children:"Featuerd"}),e.jsxs(n,{display:"flex",flexDirection:["column","column","row","row"],alignItems:"flex-start",justifyContent:"space-between",width:"90%",m:"auto",maxHeight:"max-content",children:[e.jsx(n,{background:"url(https://i1.adis.ws/i/boohooamplience/bmm40185_bright%20pink_xl/bright-pink-oversized-cord-shirt?$product_image_main_tablet$) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:e.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Valentine's Day Looks"}),e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Partner Up and Reach those Goals"}),e.jsxs(b,{mt:5,children:[e.jsx(d,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Explore"}),e.jsx(d,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Top 10 Gifts"})]})]})}),e.jsx(n,{background:"url(https://media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom$&fmt=webp%201x,%20//media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom_2x$&fmt=webp%202x) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:e.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Early Access"}),e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Top Selling"}),e.jsx(b,{mt:5,children:e.jsx(d,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Get It First"})})]})})]}),e.jsx(n,{children:s==null?void 0:s.map((i,c)=>o?e.jsx(ne,{}):l?e.jsx(Q,{}):e.jsx(oe,{handleSection:()=>t(`/description/${i.id}`),...i},c))})]})}export{de as default};
