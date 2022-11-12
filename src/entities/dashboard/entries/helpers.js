const { GENERAL_PRICE } = require("../../../constants");

const calculatePrice = ({ people, discount }) => {
  let price = GENERAL_PRICE;
  if (discount) {
    price = price - discount;
  }
  price = people * price;
  return price;
};

const calculateChange = ({ entry, pay }) => {
  let price = entry.price;
  let change = pay - price;
  return change;
};
module.exports = { calculatePrice, calculateChange };
