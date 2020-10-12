const bodyParser = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const mime = require('mime');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/myDB", {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.get("/",function(req,res){
  res.render("home");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/about",function(req,res){
  res.render("about");
})


app.post("/about",function(req,res){
  res.render("about");
});

app.post("/contact",function(req,res){
  res.render("contact");
});








app.listen(3000,function(req,res){
  console.log("server started at port 3000");
});
