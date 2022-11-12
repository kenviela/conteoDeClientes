const db = require("../../../../databases/index");

const create = ({ name, price }) => {
  return db("products").insert({
    name,
    price,
  });
};

const getAll = () => {
  return db("products").select();
};

const getById = (id) => {
  return db("products").select().where({ id }).first();
};

const update = ({ id, name, price }) => {
  return db("products")
    .update({
      name,
      price,
    })
    .where({ id });
};

module.exports = { create, getAll, getById, update };
