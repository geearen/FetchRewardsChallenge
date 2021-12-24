/* External Modules */
const express = require("express");
const methodOverride = require("method-override")

require("dotenv").config();

/* Module Instance */
const app = express();

/* Port */
const PORT = process.env.PORT || 7000;

/* Internal Modules */
// const controllers = require("./controllers");

/* App Config */
app.set("view engine", "ejs");

/* Middleware */
app.use(methodOverride('_method'));

/* Home Page */
app.get('/', function(req, res){
  const context = {}
  return res.render("home", context)
});

/* Port Binding */
app.listen(PORT, () =>{
  console.log(`Fetch Reward Challeng is on port ${PORT}`)
});