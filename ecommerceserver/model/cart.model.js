module.exports = mongoose => {
    var schema =  mongoose.Schema(
        {
            productID: [
                {type: mongoose.Schema.Types.ObjectId, ref: 'product'}
              ],
            quantity: Number,
            totalPrice: Number
        }
    );
// schema for table creation
    schema.method("toJSON", function(){
        const {__v, _id, ...object } = this.toObject(); // id is the primary key, v and object are default paramaters of mongodb
        object.id = _id;
        return object;
    });

    const Cart = mongoose.model("cart", schema); // product is the collection name
    return Cart;
};