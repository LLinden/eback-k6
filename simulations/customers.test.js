import http from 'k6/http';

import { group, sleep } from 'k6';
import Login from '../requests/login.request';
import dataUser from '../data/usuarios.json';
import data from '../data/cliente.json';
import Customers from '../requests/customers.request';

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
let customers = new Customers()

  group('login and get token', () => {
    login.access(dataUser.usuarioOK.user, dataUser.usuarioOK.pass)
  })

  group('create customers', () => {
    customers.create(login.getToken(), data.address.id, data.email, data.firstName, data.lastName, data.phone)
  })

  group('list customers', () => {
    customers.list(login.getToken())
  })

  group('list customer by id', () => {
    
  })

  group('update customer by id', () => {
    
  })

  group('delete customer by id', () => {
    
  })

}