const express = require("express");
const router = express.Router()
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const knex = require("../db/knex")

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
  bcrypt.hash(req.body.user.password, SALT_WORK_FACTOR, (err,hash) => {
    knex('users').insert({
      username: req.body.user.username,
      password: hash
    }).then(()=> {
      // GOOD PLACE FOR A FLASH MESSAGE NOTIFIYING THAT A USER WAS SUCESSFULLY CREATED
      res.redirect("/users");
    }).catch(err => {
      // GOOD PLACE FOR A FLASH MESSAGE WARNING ABOUT DUPLICATE USERNAMES
      res.redirect('/users/new')
    })
  })
});



module.exports = router;