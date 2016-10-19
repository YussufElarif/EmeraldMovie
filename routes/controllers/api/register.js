var jwt = require("jsonwebtoken");
var User = require("../../models/user");
var hash = require("password-hash");

function registerUser(req, res){
  var password = hash.generate(req.body.password);
  User.create({username: req.body.username, password: password}, function(err, user){
    if (!user || err) return res.status(500).json({message: "error", response: err});
      var token = jwt.sign({data: req.body.username}, process.env.EMERALD_SECRET_SESSION, {expiresIn: 60*60});
      req.session.token = token;
      res.json({
        message: "success",
        response: {
          token: token,
          user: {
            id: user.id,
            username: user.username
          }
        }
      })
  });
}

module.exports = registerUser;
