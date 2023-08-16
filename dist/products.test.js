(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>u});const r=require("k6/http");var o=e.n(r);const a=require("k6");class s{static getBaseUrl(){return"http://localhost:3000/api"}}class d{token;access(e,t){let r=o().post(`${s.getBaseUrl()}/login`,JSON.stringify({username:e,password:t}),{headers:{"Content-Type":"application/json",Accept:"application/json"}});this.token=r.json("accessToken"),(0,a.check)(r,{"status deve ser 201":e=>201===e.status})}getToken(){return this.token}}const i=JSON.parse('{"W":{"E":"admin","X":"admin"}}'),n=JSON.parse('{"WL":"Produto teste","vq":10,"u2":"Produto teste"}');class c{idProduto;list(e){let t=o().get(`${s.getBaseUrl()}/products`,{headers:{Authorization:`Bearer ${e}`}});(0,a.check)(t,{"listagem deve retornar 200":e=>e&&200===e.status})}create(e,t,r,d){let i=o().post(`${s.getBaseUrl()}/products`,JSON.stringify({description:t,itemPrice:r,name:d}),{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json",Accept:"application/json"}});this.idProduto=i.json("id"),(0,a.check)(i,{"chamada deve retornar 201":e=>e&&201===e.status})}getProductId(){return this.idProduto}listById(e,t){let r=o().get(`${s.getBaseUrl()}/products/${t}`,{headers:{Authorization:`Bearer ${e}`}});(0,a.check)(r,{"listagem deve retornar 200":e=>e&&200===e.status})}update(e,t,r,d){let i=o().patch(`${s.getBaseUrl()}/products/${idProduto}`,JSON.stringify({description:t,itemPrice:r,name:d}),{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json",Accept:"application/json"}});this.idProduto=i.json("id"),(0,a.check)(i,{"chamada deve retornar 200":e=>e&&200===e.status})}delete(e,t){let r=o().delete(`${s.getBaseUrl()}/products/${t}`,{headers:{Authorization:`Bearer ${e}`}});(0,a.check)(r,{"listagem deve retornar 200":e=>e&&200===e.status})}}function u(){let e=new d,t=new c;(0,a.group)("login and get token",(()=>{e.access(i.W.E,i.W.X)})),(0,a.group)("create product",(()=>{t.create(e.getToken(),n.WL,n.vq,n.u2)})),(0,a.group)("list products",(()=>{t.list(e.getToken())})),(0,a.group)("list products by id",(()=>{t.listById(e.getToken(),t.getProductId())})),(0,a.group)("update product by id",(()=>{t.update(e.getToken(),t.getProductId(),n.WL,n.vq,n.u2)})),(0,a.group)("delete product by id",(()=>{t.listById(e.getToken(),t.getProductId())}))}var p=exports;for(var l in t)p[l]=t[l];t.__esModule&&Object.defineProperty(p,"__esModule",{value:!0})})();