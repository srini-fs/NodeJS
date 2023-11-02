module.exports = app => {
    const carts = require("../controller/cart.controller.js");
    //access REST API methods(GET,POST,PUT,DELETE)
    var router = require("express").Router();
    // Create new Products
    router.get("/", carts.showAll);
    app.use("/api/carts", router);
    };