const { getAll, create } = require("./services");
const { getById } = require("../products/services");
const { request, response } = require("express");

const stockController = async (request, response) => {
  const stock = await getAll();
  response.render("dashboard/inventory/stock", { stock });
};

const newController = async (request, response) => {
  const { idProduct } = request.params;
  let product = await getById(idProduct);
  console.log(product);
  response.render("dashboard/inventory/stock/new", { product });
};

const createController = async (request, response) => {
  const { idProduct } = request.params;
  const { amount } = request.body;
  await create({ idProduct, amount });
  response.redirect("/dashboard/inventory/stock");
};
module.exports = { stockController, newController, createController };
