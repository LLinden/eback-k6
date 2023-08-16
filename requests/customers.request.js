import { check } from "k6";
import http from "k6/http";
import Utils from "../utils/utils";

export default class Customers {
  idCliente

  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/customers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }

  create(token, idEndereco, email, primeiroNome, sobreNome, telefone) {
    let response = http.post(
      `${Utils.getBaseUrl()}/customers`,
      JSON.stringify({
        address: {
          id: idEndereco,
        },
        email: email,
        firstName: primeiroNome,
        lastName: sobreNome,
        phone: telefone,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    this.idCliente = response.json('id')
    check(response, {
      "chamada deve retornar 201": (r) => r && r.status === 201,
    });
  }

  getCustomerId() {
    return this.idCliente
  }

  listById(token, idCliente) {
    let response = http.get(`${Utils.getBaseUrl()}/customers/${idCliente}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }

  update(token, idCliente, idEndereco, email, primeiroNome, sobreNome, telefone) {
    let response = http.patch(
      `${Utils.getBaseUrl()}/customers/${idCliente}`,
      JSON.stringify({
        address: {
          id: idEndereco,
        },
        email: email,
        firstName: primeiroNome,
        lastName: sobreNome,
        phone: telefone,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    this.idCliente = response.json('id')
    check(response, {
      "chamada deve retornar 200": (r) => r && r.status === 200,
    });
  }

  delete(token, idCliente) {
    let response = http.delete(`${Utils.getBaseUrl()}/customers/${idCliente}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }
}
