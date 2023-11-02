const db = require("../model");
const Carts = db.carts;

//MongoDb table manipulation commands: 
//products.save({id:1,title:'m1,price:3000})
//products.remove()  - remove all
//products.find({title:'MI}) - fetch all records with 'MI'
//products.find({title:'MI}).then().catch()
//Retreive all products from the database.

exports.showAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" }}
    // Products.find(condition)
    Carts.find({})
    .then(data => {
        res.send(data);
    })
    .catch( err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving Products."
        });
    });

    
};