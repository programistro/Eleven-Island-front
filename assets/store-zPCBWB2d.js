import{p as g,g as c}from"./index-DMbPzMn2.js";const h=g((t,s)=>({photos:[],loading:!1,fetchPhotos:async o=>{const n=localStorage.getItem("token"),e=new URLSearchParams;if(o.categoryId&&e.append("categoryId",o.categoryId),o.limit&&e.append("limit",o.limit),(o.page||o.page===1)&&e.append("page",o.page),!n){console.warn("No token available. Cannot fetch photos.");return}t({loading:!0});try{const a=(await c.get(`Product/get-category-product?${e}`,{headers:{Authorization:`Bearer ${n}`}})).data.products[0],i=a.filter(l=>!s().photos.some(d=>d.id===l.id));console.log("products",a),console.log("productFilter",i),t(()=>({photos:a}))}catch(r){console.error("Error fetching photos:",r)}finally{t({loading:!1})}},findeElement:{},findeProduct:async o=>{const n=localStorage.getItem("token");try{const r=(await c.get(`Product/${o}`,{headers:{Authorization:`Bearer ${n}`}})).data;t({findeElement:r})}catch(e){console.error(e)}}}));export{h as u};
