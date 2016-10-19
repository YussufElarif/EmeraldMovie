var jwt = require("jsonwebtoken");
var User = require("../models/user");
var hash = require("password-hash");

function loginGet(req, res){
  // res.render("login.html", {
  //   title: "Login"
  // });
  console.log("login page");
}

function loginUser(req, res){
  // User.findOne({username: req.body.username}, function(err, user){
  //     if (err) return res.status(400).send(err);
  //     if (!hash.verify(req.body.password, user.password)) return res.send("incorrect password");
  //
  //     var token = jwt.sign({data: req.body.username}, process.env.PROGRAMEET_SECRET_SESSION, {expiresIn: 60*60});
  //     req.session.token = token;
  //     req.user = user.username;
  //     return res.redirect("/");
  // });
  console.log("login user")
}

module.exports = {
  index: loginGet,
  post: loginUser
}

//node-sass -w app/sass/ -o build/c
