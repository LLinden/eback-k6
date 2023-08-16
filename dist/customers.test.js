(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>d});const r=require("k6/http");var s=e.n(r);const o=require("k6");class a{static getBaseUrl(){return"http://localhost:3000/api"}}class n{token;access(e,t){let r=s().post(`${a.getBaseUrl()}/login`,JSON.stringify({username:e,password:t}),{headers:{"Content-Type":"application/json",Accept:"application/json"}});this.token=r.json("accessToken"),(0,o.check)(r,{"status deve ser 201":e=>201===e.status})}getToken(){return this.token}}const i=JSON.parse('{"W":{"E":"admin","X":"admin"}}'),c=JSON.parse('{"Lk":{"id":"cljd3v3y40000etkccx8p7cb7"},"Do":"teste@teste.com.br","BV":"João","CV":"Silva","m7":"999999999"}');class l{idCliente;list(e){let t=s().get(`${a.getBaseUrl()}/customers`,{headers:{Authorization:`Bearer ${e}`}});(0,o.check)(t,{"listagem deve retornar 200":e=>e&&200===e.status})}create(e,t,r,n,i,c){let l=s().post(`${a.getBaseUrl()}/customers`,JSON.stringify({address:{id:t},email:r,firstName:n,lastName:i,phone:c}),{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json",Accept:"application/json"}});this.idCliente=l.json("id"),(0,o.check)(l,{"chamada deve retornar 201":e=>e&&201===e.status})}getCustomerId(){return this.idCliente}}function d(){let e=new n,t=new l;(0,o.group)("login and get token",(()=>{e.access(i.W.E,i.W.X)})),(0,o.group)("create customers",(()=>{t.create(e.getToken(),c.Lk.id,c.Do,c.BV,c.CV,c.m7)})),(0,o.group)("list customers",(()=>{t.list(e.getToken())})),(0,o.group)("list customer by id",(()=>{})),(0,o.group)("update customer by id",(()=>{})),(0,o.group)("delete customer by id",(()=>{}))}var u=exports;for(var p in t)u[p]=t[p];t.__esModule&&Object.defineProperty(u,"__esModule",{value:!0})})();