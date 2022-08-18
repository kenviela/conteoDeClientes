const express = require("express")
const knex = require("knex") 
const app =express()
const port=8000
const price =10000

const db = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'swimming_pool'
  }
}) 

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded());

app.set("view engine", "pug");

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/",(request,response)=>{
  response.render("main",{price})
})

app.post("/",(request,response)=>{
  let clientsCount=request.body.clientsCount
  let discountEntrance=request.body.discountEntrance
  let valueEntrance=clientsCount*price
  if (discountEntrance) {
      let newPrice = price
      newPrice -= discountEntrance
      valueEntrance = newPrice*clientsCount
  }
  response.render("response",{valueEntrance})
})

app.post("/change",(request,response)=>{
  console.log(request.body)
  let valuePay = request.body.getPay
  let valueTotal = request.body.valueEntrance
  let change = valuePay - valueTotal
  response.render("response", {change,valueEntrance:valueTotal})
})

app.listen(port,()=>{
  console.log("Todo se encuentra bien")
})