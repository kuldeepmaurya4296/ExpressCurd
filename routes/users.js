var mongoose = require("mongoose");

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/productdb").then(function(){
  console.log("connected")
})

var userSchema = mongoose.Schema({
  name:String,
  price: String,
  pic:String
})



module.exports = mongoose.model("user",userSchema);