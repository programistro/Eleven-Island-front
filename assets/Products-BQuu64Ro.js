import{r as l,j as e,h as H,i as $}from"./index-DMbPzMn2.js";import{B as z,S as Z}from"./SendEmail-Bk2smbpf.js";import{u as O}from"./store-zPCBWB2d.js";import{C as P}from"./CloasModal-DFrSFvne.js";const Q="data:image/svg+xml,%3csvg%20width='9'%20height='5'%20viewBox='0%200%209%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%201L4.5%204L1%201'%20stroke='%23262626'%20stroke-linecap='square'%20stroke-linejoin='round'/%3e%3c/svg%3e",D="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20fill='%23262626'/%3e%3cpath%20d='M15%207L8.75%2013L5%2010.2727'%20stroke='white'%20stroke-width='2'%20stroke-linecap='square'%20stroke-linejoin='round'/%3e%3c/svg%3e";function j({resetValue:n=!1,title:i="",value:t=[],colors:a=!1,phone:m=!1,open:v,toggle:k,onClick:C=()=>{}}){var b,y;const[r,w]=l.useState(i==="Размер"?{label:"Размер",value:"*"}:{value:((b=t==null?void 0:t[0])==null?void 0:b.value)||"",label:((y=t==null?void 0:t[0])==null?void 0:y.label)||""});if(l.useEffect(()=>{var c,d;n&&w({value:((c=t==null?void 0:t[0])==null?void 0:c.value)||"",label:((d=t==null?void 0:t[0])==null?void 0:d.label)||""})},[n]),l.useEffect(()=>{r&&(r.value==="*"?C(["XS","S","M","L","XL"]):C(r.value))},[r]),!m)return e.jsxs("div",{className:"custom-select",children:[e.jsxs("button",{onClick:k,className:"flex items-center gap-[7px]",children:[r.value?r.label:i," ",e.jsx("img",{src:Q,alt:"StrelkaBottom"})]}),v&&e.jsx("ul",{className:`${i=="Сортировать по"&&"right-0"} customUl p-[20px] bg-white text-black w-[250px] flex flex-col gap-[15px]`,children:t&&(t==null?void 0:t.map(c=>e.jsxs("li",{onClick:()=>{w(c),k()},className:"cursor-pointer flex gap-[10px] items-center",children:[e.jsx("div",{className:"check-box-custom",children:r.value==c.value?e.jsx("img",{src:D,alt:"CheckTrue"}):""}),c.label]},c.value)))})]});if(m)return e.jsxs("div",{className:"phone-select-filter",children:[e.jsx("h1",{children:i}),e.jsx("ul",{className:`${i=="Размер"?"phone-size-filter-ul":"flex-col"}  pt-[15px] bg-white text-black w-[250px] flex  gap-[15px]`,children:t&&(t==null?void 0:t.map(c=>e.jsxs("li",{onClick:()=>{w(c)},className:"cursor-pointer flex gap-[10px] items-center",children:[e.jsx("div",{className:"check-box-custom",children:r.value==c.value?e.jsx("img",{src:D,alt:"CheckTrue"}):""}),a?a.map(d=>e.jsx("div",{style:{width:"15px",borderRadius:"50%",background:d}},d)):c.label]},c.value)))})]})}const U="data:image/svg+xml,%3csvg%20width='14'%20height='11'%20viewBox='0%200%2014%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.97569%208.35714H1M13%208.35714H12.9933M12.9933%202.64286H8.99556M1.00666%202.64286H1M8.95133%206.21429C10.0492%206.21429%2010.9392%207.17368%2010.9392%208.35714C10.9392%209.54061%2010.0492%2010.5%208.95133%2010.5C7.85347%2010.5%206.96348%209.54061%206.96348%208.35714C6.96348%207.17368%207.85347%206.21429%208.95133%206.21429ZM4.97567%200.5C6.07353%200.5%206.96352%201.45939%206.96352%202.64286C6.96352%203.82632%206.07353%204.78571%204.97567%204.78571C3.87782%204.78571%202.98783%203.82632%202.98783%202.64286C2.98783%201.45939%203.87782%200.5%204.97567%200.5Z'%20stroke='%23262626'%20stroke-linecap='round'/%3e%3c/svg%3e";function V({modalStateFilter:n,setModalStateFilter:i,componentDiv:t}){const[a,m]=l.useState(!1);return l.useEffect(()=>{a&&m(!1)},[a]),e.jsx("div",{className:"boxModalBasket",style:{zIndex:n?1e6:-999,opacity:n?1:0},children:e.jsxs("div",{className:"componentModalFilter",children:[e.jsxs("div",{className:"componentModalHeaderFilter",children:[e.jsx("button",{onClick:()=>i(!1),children:e.jsx("img",{src:P,alt:"CloasModal"})}),e.jsx("h1",{children:"Фильтр"}),e.jsx("button",{onClick:()=>m(!0),children:"Сбросить"})]}),e.jsx("div",{className:"FilterBox",children:t(a)})]})})}function Y({modalStateReset:n,element:i}){const{setModalStateReset:t}=H();return e.jsx("div",{className:"boxModalBasket",style:{zIndex:n?"1":-99999,opacity:n?1:0,position:"absolute",background:"transparent",justifyContent:"end",paddingTop:"125px",paddingRight:"19px"},children:e.jsxs("div",{className:"componentModalReset",children:[e.jsxs("div",{className:"componentModalHeaderReset",children:[e.jsx("div",{}),e.jsx("button",{onClick:()=>t(!1),children:e.jsx("img",{src:P,alt:"CloasModal"})})]}),e.jsx("div",{className:"ResetBox",children:i})]})})}const q=n=>{const[i,t]=l.useState(window.matchMedia(n).matches);return l.useEffect(()=>{const a=window.matchMedia(n),m=()=>t(a.matches);return a.addEventListener("change",m),()=>a.removeEventListener("change",m)},[n]),i};function se(){const{photos:n,fetchPhotos:i}=O(),[t,a]=l.useState(""),{modalStateFilter:m,setModalStateFilter:v}=$(),{setModalStateReset:k,modalStateReset:C}=H(),[r,w]=l.useState(null),[b,y]=l.useState([]),[c,d]=l.useState(1),[u,g]=l.useState([]),[x,M]=l.useState({reset:!0}),[S,L]=l.useState(),B=[{label:"Все размеры",value:"*"},{label:"XS",value:"XS"},{label:"S",value:"S"},{label:"M",value:"M"},{label:"L",value:"L"},{label:"XL",value:"XL"}],[N,I]=l.useState(!1),T=async()=>{await i({page:c||1,limit:50,categoryId:x==null?void 0:x.categoryId})},F=[{label:"По убыванию цены",value:"1"},{label:"По возрастанию цены",value:"2"}],X=async()=>{};l.useEffect(()=>{X()},[]);const R=q("(min-width: 1020px)"),E=s=>{w(r===s?null:s)};return l.useEffect(()=>{T()},[c,t,x,S]),l.useEffect(()=>{n.length>0&&g(s=>[...s,...n.filter(o=>!s.some(h=>h.id===o.id)).map(o=>{var h,f;return{...o,jobpositions:(f=(h=o.jobpositions)==null?void 0:h.filter(p=>p.end_date))==null?void 0:f.sort((p,_)=>{const A=parseInt(p.end_date.replace(/-/g,""),10);return parseInt(_.end_date.replace(/-/g,""),10)-A})}})])},[n]),l.useEffect(()=>{const s=()=>{const o=window.innerHeight+window.scrollY,h=document.documentElement.offsetHeight-100;o>=h&&!N&&(I(!0),d(f=>f+1))};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[N]),l.useEffect(()=>{N&&(async()=>{await i({categoryId:x==null?void 0:x.categoryId,limit:50,page:c}),I(!1)})()},[c,N]),l.useEffect(()=>{g(t==="*"||!t?n:s=>s.filter(o=>{var h;return(h=o.attributes)==null?void 0:h.some(f=>f.productAttributeId===2&&f.attributeValues.some(p=>Array.isArray(t)?t.includes(p.name):p.name===t))}))},[t,n]),console.log("selectedSizes",t),console.log("===================================="),console.log(n),console.log("===================================="),l.useEffect(()=>{if(console.log("Sorting triggered with stemsSort:",S),console.log("Data before sorting:",u),u&&u.length>0){const s=[...u];S==="1"?s.sort((o,h)=>h.price-o.price):S==="2"&&s.sort((o,h)=>o.price-h.price),g(s),console.log("Data after sorting:",s)}},[S]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"filterBar",children:[e.jsx("h1",{children:"Каталог"}),e.jsxs("div",{children:[" ",R?e.jsxs("div",{className:"filterProbucts",children:[e.jsx(j,{onClick:s=>{d(0),g([]),M({...x,categoryId:s})},title:"Тип продукции",open:r==="type",toggle:()=>E("type"),value:b}),e.jsx(j,{onClick:s=>{a(s),d(0),M({...x,reset:!x.reset})},title:"Размер",value:B,open:r==="size",toggle:()=>E("size")})]}):e.jsxs("button",{onClick:()=>v(!0),className:"btn-filter-phone",children:[e.jsx("img",{src:U,alt:"iconFilter"}),"Фильтр"]}),R?e.jsx("div",{className:"max-w-auto",children:e.jsx(j,{onClick:s=>{d(0),L(s)},title:"Сортировать по",value:F,open:r==="sort",toggle:()=>E("sort")})}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k(!0),className:"btn-filter-phone",children:"Сортировать по"}),e.jsx(Y,{element:e.jsx(j,{onClick:s=>{d(0),L(s)},title:"Сортировать по",value:F,phone:!0}),modalStateReset:C})]})]})]}),e.jsxs("div",{className:"contentProducts",children:[e.jsx(z,{arrDataImg:u==null?void 0:u.filter((s,o)=>o<8)}),e.jsx(Z,{}),e.jsx(z,{arrDataImg:u==null?void 0:u.filter((s,o)=>o>8)})]}),e.jsx(V,{modalStateFilter:m,setModalStateFilter:v,componentDiv:s=>e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:o=>{d(0),g([]),M({...x,categoryId:o})},resetValue:s,title:"Тип продукции",phone:!0,value:b}),e.jsx(j,{onClick:o=>{a(o),d(0),M({...x,reset:!x.reset})},resetValue:s,title:"Размер",value:B,phone:!0})]})})]})}export{se as default};
