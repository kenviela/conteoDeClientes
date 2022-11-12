const { request, response } = require("express");
const { create, getAll, getById, update } = require("./services");

const productsController = async (request, response) => {
  let products = await getAll();
  response.render("dashboard/inventory/products", { products });
};

const newController = (request, response) => {
  response.render("dashboard/inventory/products/new");
};
const createController = async (request, response) => {
  const { name, price } = request.body;
  await create({ name, price });
  response.redirect("/dashboard/inventory/products");
};

const editController = async (request, response) => {
  const { id } = request.params;
  const product = await getById(id);
  response.render("dashboard/inventory/products/edit", product);
};

const updateController = async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;
  await update({ id, name, price });
  response.redirect("/dashboard/inventory/products");
};

const getAllController = async (request, response) => {
  let products = await getAll();
  response.json({ products });
};
module.exports = {
  productsController,
  newController,
  createController,
  editController,
  updateController,
  getAllController,
};
