const router = require("express").Router();
const { inventoryController } = require("./controller");
const productsRouter = require("./products/routes");
const stockRouter = require("./stock/routes");
router.use("/products", productsRouter);
router.use("/stock", stockRouter);
router.get("/", inventoryController);

module.exports = router;
