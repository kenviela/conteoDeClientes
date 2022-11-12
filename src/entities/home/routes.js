const router = require("express").Router();
const dashboardRouter = require("../dashboard/routes");
const { homeController } = require("./controller");
const loginRouter = require("../login/routes");
router.use("/dashboard", dashboardRouter);
router.use("/login", loginRouter);
router.get("/", homeController);
module.exports = router;
