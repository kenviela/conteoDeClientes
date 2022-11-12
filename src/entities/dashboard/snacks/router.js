const router = require("express").Router();
const { newController } = require("./controller");

router.get("/new", newController);

module.exports = router;
