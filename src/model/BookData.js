const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/Library").then(()=>{console.log('Database Connected')});
mongoose.connect(`mongodb+srv://soorej:Un6cp@cluster0.zy0kvtv.mongodb.net/test`)


const Schema = mongoose.Schema;

var BooksSchema = new Schema({
    BookCode : String ,
    BookName : String ,
    Author : String ,
    ISBNNo : String 
    });

var BookData = mongoose.model('Book', BooksSchema);
module.exports = BookData ;