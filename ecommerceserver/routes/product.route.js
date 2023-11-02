const authJwt = require("../middlewares/authJwt");

module.exports = app => {
const products = require("../controller/product.controller.js");
//access REST API methods(GET,POST,PUT,DELETE)
var router = require("express").Router();
// Create new Products

router.get("/", products.showAll);
// router.get("/",[authJwt.verifyToken],products.showAll);

router.post("/create",products.create)
router.put("/update/:id",products.update)
router.delete("/deleteproduct/:id",products.delete)
router.delete("/deleteAll",products.deleteAll)

app.use("/api/products", router);

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
};