const db = require("../../../databases/index");
const create = async ({ people, price, discount }) => {
  let valueInserted = await db("entries").insert({
    people,
    price,
    discount,
  });
  let id = valueInserted.shift();
  return id;
};

const consult = async (id) => {
  let queryResult = await db.select().from("entries").where({ id });
  let [entry] = queryResult;
  return entry;
};

const update = async ({ pay, id }) => {
  await db("entries")
    .update({
      pay,
    })
    .where({ id });
};
module.exports = { create, consult, update };
