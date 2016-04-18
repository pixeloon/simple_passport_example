const express = require("express");
const router = express.Router()

router.get('/login', function(req,res){
  res.render("auth/login")
});

router.post('/login', function(req,res){
  // :(
  res.redirect("/users")
});

router.get('/logout', function(req,res){
  res.redirect('/auth/login')
});


module.exports = router;