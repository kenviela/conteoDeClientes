const router = require("express").Router();
const {
  productsController,
  newController,
  createController,
  editController,
  updateController,
  getAllController,
} = require("./controller");

router.get("/", productsController);
router.get("/new", newController);
router.get("/:id/edit", editController);
router.get("/get-all", getAllController);
router.post("/", createController);
router.put("/:id", updateController);
module.exports = router;
