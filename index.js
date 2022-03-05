const entrancePrice = 10000;
let clientsCount = document.getElementById("clientsCount")
let discountCheckbox = document.getElementById("discountCheckbox")
let getPay = document.getElementById("getPay")
let changeButton = document.getElementById("changeButton")
let totalButton = document.getElementById("totalButton")
let totalDisplay = document.getElementById("totalDisplay")
let totalChange = document.getElementById("totalChange")
let discountContainer = document.getElementById("discountContainer")
let discountLabel = document.createElement("label")
discountLabel.setAttribute("for","discount")
discountLabel.innerHTML = "Descuento:"
let discountInput = document.createElement("input")
discountInput.setAttribute("type","text")
discountInput.setAttribute("id","discount")
discountInput.setAttribute("name","discount")

function getTotalValue(){
  let total = 0; 
  let discountTotal=0; 
  let valueInput = discountInput.value;
  let clientsNumber = clientsCount.value;
  if(discountInput.value){
    discountTotal = entrancePrice-valueInput;
    total = clientsNumber * discountTotal;
    return total
  }
  total = clientsNumber * entrancePrice;
  return total;
}
totalButton.addEventListener("click",function(){
  totalDisplay.innerHTML = getTotalValue()
})

function generateChange(){
  let change = 0;
  let total = getTotalValue();
  let payment= getPay.value;
  change = payment - total;
  return change;
}
changeButton.addEventListener("click", function(){
  totalChange.innerHTML = generateChange()
})

discountCheckbox.addEventListener("change",function(){
  if(this.checked){
    discountContainer.appendChild(discountLabel)
    discountContainer.appendChild(discountInput)
  }
  else{
    discountContainer.innerHTML = "";
  }
})


