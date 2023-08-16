import { check } from "k6";
import http from "k6/http";
import Utils from "../utils/utils";

export default class Products {
  idProduto;

  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }

  create(token, descricao, preco, nome) {
    let response = http.post(
      `${Utils.getBaseUrl()}/products`,
      JSON.stringify({
        description: descricao,
        itemPrice: preco,
        name: nome,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    this.idProduto = response.json("id");
    check(response, {
      "chamada deve retornar 201": (r) => r && r.status === 201,
    });
  }

  getProductId() {
    return this.idProduto;
  }

  listById(token, idProduto) {
    let response = http.get(`${Utils.getBaseUrl()}/products/${idProduto}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }

  update(token, descricao, preco, nome) {
    let response = http.patch(
      `${Utils.getBaseUrl()}/products/${idProduto}`,
      JSON.stringify({
        description: descricao,
        itemPrice: preco,
        name: nome,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    this.idProduto = response.json("id");
    check(response, {
      "chamada deve retornar 200": (r) => r && r.status === 200,
    });
  }

  delete(token, idProduto) {
    let response = http.delete(`${Utils.getBaseUrl()}/products/${idProduto}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "listagem deve retornar 200": (r) => r && r.status === 200,
    });
  }
}
