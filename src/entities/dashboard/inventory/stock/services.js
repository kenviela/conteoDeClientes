const db = require("../../../../databases/index");

const getAll = () => {
  return db("products")
    .leftJoin("stock", "products.id", "=", "stock.idProduct")
    .select(["products.name as name", "products.id as idProduct"])
    .sum({ amount: "stock.amount" })
    .groupBy("idProduct");
};

const create = ({ idProduct, amount }) => {
  return db("stock").insert({
    amount,
    idProduct,
  });
};

module.exports = { getAll, create };
