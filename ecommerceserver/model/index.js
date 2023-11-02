const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //enable promise object db and node

const db = {}; //database connections properties to establish with db
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model.js")(mongoose);
db.carts = require("./cart.model.js")(mongoose);

module.exports = db;