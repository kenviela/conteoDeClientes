const router = require("express").Router();
const {
  newController,
  createController,
  updateController,
} = require("./controller");

router.get("/new", newController);

router.post("/", createController);

router.post("/change", updateController);

module.exports = router;
