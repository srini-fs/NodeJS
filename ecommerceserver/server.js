const express = require('express');
const cors = require('cors');
const logger = require("./logger/loggerservice.js");

const app = express(); // to access REST API
app.use(express.json());

// To access the API URL
app.get("/", (req, res) => {
    logger.log("info", "This is an info message");
    res.json({ message: "Welcome"});
});



// Setting up port for listening requests
require("./routes/product.route.js")(app) // for accessing product routes
require("./routes/cart.route.js")(app) // for accessing cart routes
require("./routes/auth.routes.js")(app) // for accessing auth routes

module.exports = app => {
const products = require("../controller/product.controller.js");
const carts = require("../controller/cart.controller.js");
//access REST API methods(GET,POST,PUT,DELETE)
var router = require("express").Router();
// Create new Products & Carts
router.get("/", products.showAll);
app.use("/api/products", router);
app.use("/api/carts", router);
};

app.use((req, res, next) => {
    // Log an info message for each incoming request
    logger.info(`Received a ${req.method} request for ${req.url}`);
    next();
});

// app.get("/error, (")


//Handle errors using the logger
app.use((err, req, res, next) => {
    // Log the error message at the error level
    logger.error(err.message);
    res.status(500).send();
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


const db = require("./model");


db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Cannot connect to database!:", err);
        process.exit();
    })


/*
    const express = require('express')
    const app = express()
    const router = express.Router()

    // a middleware sub-stack shows request info for any type of HTTP

    router.use('/user/:id', (req, res)) */