import http from 'k6/http';

import { group, sleep } from 'k6';
import Login from '../requests/login.request';
import dataUser from '../data/usuarios.json';
import data from '../data/produto.json';
import Products from '../requests/products.request';

// export const options = {
//   // target = número de VUs
//   stages: [
//     {duration: '5s', target: 1},
//   ],
//   thresholds: {
//     http_req_duration: ['p(99) < 1000']
//   }
// }

export default function () {

let login = new Login()
let products = new Products()

  group('login and get token', () => {
    login.access(dataUser.usuarioOK.user, dataUser.usuarioOK.pass)
  })

  group('create product', () => {
    products.create(login.getToken(), data.description, data.itemPrice, data.name)
  })

  group('list products', () => {
    products.list(login.getToken())
  })

  group('list products by id', () => {
    products.listById(login.getToken(), products.getProductId())
  })

  group('update product by id', () => {
    products.update(login.getToken(), products.getProductId(), data.description, data.itemPrice, data.name)
  })

  group('delete product by id', () => {
    products.listById(login.getToken(), products.getProductId())
  })

}