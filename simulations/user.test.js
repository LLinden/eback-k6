import http from 'k6/http';

import { group, sleep } from 'k6';
import Login from '../requests/login.request';
import data from '../data/usuarios.json';


export default function () {

let login = new Login()

  group('login and get token', () => {
    login.access(data.usuarioOK.user, data.usuarioOK.pass)
  })

  group('list users', () => {
    
  })

}