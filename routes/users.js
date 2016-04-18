const express = require("express");
const router = express.Router()

// GET /users INDEX
router.get('/', function(req,res){
  res.render("users/index");
});

// GET /users/new NEW
router.get('/new', function(req,res){
  res.render("users/new");
});

// POST /users CREATE
router.post('/', function(req,res){
  res.redirect("/users");
});



module.exports = router;