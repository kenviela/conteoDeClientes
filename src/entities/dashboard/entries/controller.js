const { create, consult, update } = require("./services");
const { calculatePrice, calculateChange } = require("./helpers");

const newController = (request, response) => {
  response.render("dashboard/entries/new");
};

const createController = async (request, response) => {
  let { people, discount } = request.body;
  let price = calculatePrice({ people, discount });

  const id = await create({ people, price, discount });
  response.render("dashboard/entries/response", { price, id });
};

const updateController = async (request, response) => {
  let { pay, id } = request.body;
  let entry = await consult(id);
  let price = entry.price;
  let change = calculateChange({ entry, pay });
  await update({ pay, id });
  response.render("dashboard/entries/response", { change, price });
};
module.exports = { newController, createController, updateController };
