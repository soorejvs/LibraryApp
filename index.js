const express = require("express");
const BookData = require("./src/model/BookData");
const cors = require("cors");
//const jwt = require('jsonwebtoken')
var app = new express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//username='admin'
//password='123456'
//const path=require('path');
//app.user(express.static(/dist/front-end));

// API
app.get('/books', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    BookData.find()
        .then(function (books) {
            res.send(books);
        })
});

app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var bookdetail = {
        Code: req.body.Books.bookcode,
        Name: req.body.Books.BookName,
        BookAuthor: req.body.Books.Author,
        BookISBNNo: req.body.Books.ISBNNO
        
    }
    console.log("Hello");
    var bookdetail = new BookData(bookdetail);
    bookdetail.save();

})

app.listen(3000, () => {
    console.log("Server up in Port 3000 ");
});