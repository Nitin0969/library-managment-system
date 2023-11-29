const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Book_name:{type:String,required:true},
    Book_Code:{type:Number,required:true},
    Author_name:{type:String,required:true},
    Publisher_name:{type:String,required:true},
    Price:{type:Number}
})
// moongose library import hua fir schema bna and fir collection bna in mongodb
// const user is schema and make a collection in mongodb so we exports module using mongoose
// Moongoose model create a collections in mongodb with g3users and with model name user


module.exports = mongoose.model("Library",User)