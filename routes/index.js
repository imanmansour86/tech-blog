const router = require("express").Router();

const homeRoutes = require("./blog-routes");

router.use("/", homeRoutes);

module.exports = router;
