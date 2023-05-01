var express = require('express');
var router = express.Router();
var userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/product',function(req, res, next){
  userModel.create({
    name: req.body.name,
    price: req.body.price,
    pic: req.body.pic
  }).then(function(created){
    res.send(created)
  })
})

router.get('/read',function(req,res){
  userModel.find().then(function(allproducts){
    res.render("products",{allproducts})
  })
})

router.get('/delete/:id',function(req,res){
  userModel.findOneAndDelete({_id:req.params.id}).then(function(deleteproduct){
    res.render({deleteproduct})
  })
})

module.exports = router;
