require("dotenv").load()

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("cookie-session");
const morgan = require("morgan");
const flash = require("connect-flash")
const routes = require("./routes/index")
app.set("view engine", "jade");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true})) // user[username] works!
app.use(methodOverride('_method')) //?_method=WHATEVER
app.use(session({
  secret: process.env.SECRET
}))
app.use(flash())

app.get('/', function(req,res){
  res.redirect('/auth/login');
});

// ADD SOME MORE MIDDLEWARE

app.use('/users', routes.users)
app.use('/auth', routes.auth)

app.get('*', function(req,res){
  res.render("error")
});

app.listen(3000, () => {
  console.log("Server starting on port 3000")
})