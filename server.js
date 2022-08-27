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

app.post("/",async(request,response)=>{
  let clientsCount=request.body.clientsCount
  let discountEntrance=request.body.discountEntrance
  let valueEntrance=clientsCount*price
  if (discountEntrance) {
      let newPrice = price
      newPrice -= discountEntrance
      valueEntrance = newPrice*clientsCount
  }
  let valueInserted = await db("entries").insert({
    entriesNumber:clientsCount,
    valueEntries:valueEntrance
  })
  let id=valueInserted.shift()
  console.log(valueInserted)
  response.render("response",{valueEntrance,id})
})

app.post("/change",async(request,response)=>{
  /*1.sacar los datos del body getPay e id
    2. usar id para construir el query
    3. sacar de la query el total
    4. hacer respectiva operación
    5. obtener el resultado de operación
    6. actualizar getPays
    7. responder al cliente con el resultado de operación*/ 
  console.log(request.body)
  let valuePay = request.body.getPay
  let id = request.body.id

  let queryResult=await db.select().from("entries").where({id})

  let [entry]=queryResult
  let valueTotal = entry.valueEntries

  let change = valuePay - valueTotal

  await db("entries").update({
    getPays: valuePay
  }).where({id})

  response.render("response", {change,valueEntrance:valueTotal})
})

app.listen(port,()=>{
  console.log("Todo se encuentra bien")
})