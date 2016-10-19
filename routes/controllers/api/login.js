var rest = require("restler");
var jwt = require("jsonwebtoken");
var hash = require("password-hash");
var User = require("../../models/user");

function loginUser(req, res){
  console.log(req.body);
  User.findOne({username: req.body.username}, function(err, user){
      if (err) return res.status(400).json({message: "error", response: err});
      if (!user || !hash.verify(req.body.password, user.password)) return res.status(403).json({message: "incorrect password or username"});

      var token = jwt.sign({data: req.body.username}, process.env.EMERALD_SECRET_SESSION, {expiresIn: 60*60});
      req.session.token = token;
      return res.json({
        message: "success",
        response: {
          token: token,
          user: {
            id: user.id,
            username: user.username
          }
        }
      });
  });
}

module.exports = loginUser
