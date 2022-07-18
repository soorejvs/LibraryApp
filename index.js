const express = require("express");
const BookData = require("./src/model/BookData");
const cors = require("cors");
const jwt = require('jsonwebtoken')
var app = new express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

username='Admin'
password='123456'
//const path=require('path');
//app.user(express.static(/dist/front-end));

app.post('/login', (req, res) => {
    let userData = req.body
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
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
