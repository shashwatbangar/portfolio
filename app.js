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

const emailSchema = {
  name : String,
  email : String,
  subject: String,
  message: String
  }

const Email = mongoose.model("Email",emailSchema);

app.get("/",function(req,res){
  res.render("home");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/about",function(req,res){
  res.render("about");
})


app.post("/home",function(req,res){
  const email = new Email({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
});

email.save();
res.redirect("home");

});


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
