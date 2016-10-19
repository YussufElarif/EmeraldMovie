var jwt = require("jsonwebtoken");

function apiCheck(req, res, next) {
  var token = req.session.token || req.headers['x-access-token'];
  if (token){
    jwt.verify(token, process.env.EMERALD_SECRET_SESSION, function (err, decoded){
      if (err){
        return res.status(403).send({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
        message: "error",
        response: "No token provided"
    });
  }
}
module.exports = apiCheck;
