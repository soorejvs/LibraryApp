const express = require("express");
const cors = require("cors");
const Productdata = require("./src/model/ProductData");

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API
app.get('/products', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Productdata.find()
        .then(function (products) {
            res.send(products);
        })
});

app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var product = {
        productCode: req.body.item.productCode,
        productName: req.body.item.productName,
        availability: req.body.item.availability,
        price: req.body.item.price,
        rating: req.body.item.rating,
        imageURL: req.body.item.imageURL
    }
    // var product = {
    //     productCode: req.body.productCode,
    //     productName: req.body.productName,
    //     availability: req.body.availability,
    //     price: req.body.price,
    //     rating: req.body.rating,
    //     imageURL: req.body.imageURL
    // }
    console.log("Hello");
    var products = new Productdata(product);
    products.save();

})

app.listen(3000, () => {
    console.log("Server up in Port 3000 ");
});