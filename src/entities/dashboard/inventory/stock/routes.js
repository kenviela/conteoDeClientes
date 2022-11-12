const router = require("express").Router();
const {
  stockController,
  newController,
  createController,
} = require("./controller");

router.get("/", stockController);
router.get("/:idProduct", newController);
router.post("/:idProduct", createController);
module.exports = router;
