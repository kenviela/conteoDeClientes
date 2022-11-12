//Donde se va a pintar
const snacksContainer = document.getElementById("snacksContainer");
// Que elementos vamos a pintar
// const select = document.createElement("select");
// const option = document.createElement("option");
// option.value = 2;
// option.innerText = "gaseosa";

// const label = document.createElement("label");
// const input = document.createElement("input");

const createOption = (value, text) => {
  const option = document.createElement("option");
  option.value = value;
  option.innerText = text;
  return option;
};

//función que reciba array de objetos
//iterar el array
//crear option por cada elemento del array
//crear un select
//insertar las option en el select
//return el select
const createSelect = (products) => {
  const select = document.createElement("select");
  for (let product = 0; product < products.length; product++) {
    const element = products[product];
    const id = element.id;
    const name = element.name;
    const option = createOption(id, name);
    select.appendChild(option);
  }
  return select;
};
//select.appendChild(option);

const createAmountInput = () => {
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.setAttribute("for", "amount");
  label.innerHTML = "cantidad";
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "amount");
  div.appendChild(label);
  div.appendChild(input);
  return div;
};
//crear una funcion que genere un label
//genere input desabilitado y aplicarle un valor recibido por parametro
//devolver los elementos

const createPriceIndicator = (value, index) => {
  const classIndex = "priceIndicator" + index;
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.setAttribute("for", "total");
  label.innerHTML = "Total";
  const input = document.createElement("input");
  input.setAttribute("disabled", "disabled");
  input.setAttribute("name", "total");
  input.setAttribute("value", value);
  input.setAttribute("class", classIndex);
  div.appendChild(label);
  div.appendChild(input);
  return div;
};

//agrupar el select, amountInput y priceIndicator
//retornar div que contenga los tres elementos
//definir el scope para la interactividad de los objetos
const createPriceRow = (products, index) => {
  let price = 0;
  let priceProduct = 0;
  let amountProducts = 0;
  const calculatePrice = ({ newPriceProduct, newAmountProducts }) => {
    priceProduct = newPriceProduct || priceProduct;
    amountProducts = newAmountProducts || amountProducts;
    price = priceProduct * amountProducts;
    const priceIndicatorInput = document.getElementsByClassName(
      "priceIndicator" + index
    )[0];
    priceIndicatorInput.setAttribute("value", price);
  };
  const div = document.createElement("div");
  const select = createSelect(products);
  select.addEventListener("change", (event) => {
    const id = event.target.value;
    const product = products.find((Product) => {
      return Product.id == id;
    });
    calculatePrice({ newPriceProduct: product.price });
  });
  const AmountInput = createAmountInput();
  AmountInput.addEventListener("change", (event) => {
    const amount = event.target.value;
    calculatePrice({ newAmountProducts: amount });
  });
  const priceIndicator = createPriceIndicator(price, index);
  div.appendChild(select);
  div.appendChild(AmountInput);
  div.appendChild(priceIndicator);
  return div;
};
//Como se van a pintar los elementos
//Que pasará después de usar los elementos
//test
(async () => {
  const response = await fetch("/dashboard/inventory/products/get-all");
  const data = await response.json();
  console.log(data);
  const products = data.products;
  const priceRow = createPriceRow(products, 0);
  const rowOne = createPriceRow(products, 1);
  const rowTwo = createPriceRow(products, 2);
  snacksContainer.appendChild(priceRow);
  snacksContainer.appendChild(rowOne);
  snacksContainer.appendChild(rowTwo);
})();
