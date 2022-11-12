const router = require("express").Router();
const entriesRouter = require("./entries/routes");
const inventoryRouter = require("./inventory/routes");
const snacksRouter = require("./snacks/router");
const { dashboardController } = require("./controller");

router.use("/entries", entriesRouter);
router.use("/inventory", inventoryRouter);
router.use("/snacks", snacksRouter);
router.get("/", dashboardController);

module.exports = router;
