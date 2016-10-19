var jwt = require("jsonwebtoken");
var User = require("../models/user");
var React = require("react");
var hash = require("password-hash");
var path = require("path");

function registerGet(req, res){
  res.render("register.html", {
    title: "Register"
  });
}

function registerUser(req, res){
  var password = hash.generate(req.body.password);
  console.log(req.body);
  User.create({username: req.body.username, password: password}, function(err, user){
    if (err) return res.status(500).send(err);
      jwt.sign({data: req.body.username}, process.env.PROGRAMEET_SECRET_SESSION, {expiresIn: 60*60});
      res.redirect("/");
  });
}

module.exports = {
  index: registerGet,
  create: registerUser
}
