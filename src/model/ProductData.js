const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ProductDBFeb");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    /*productCode: String,
    productName: String,
    availability: Number,
    price: Number,
    rating: Number,
    imageURL: String*/
    ProdCode : String,
    Product : String,
    Avaiable : String,
    Price : Number,
    Rating : Number,

});

var Productdata = mongoose.model('Products', ProductSchema);
module.exports = Productdata;