const { getAll } = require("../inventory/products/services");

const newController = async (request, response) => {
  const products = await getAll();
  response.render("dashboard/snacks/new");
};

module.exports = { newController };
