var jwt = require("jsonwebtoken");

function authCheck(req, res, next) {
    //This function checks if the user is logged in and has a session for private pages
    var token = req.session.token;
    if (token){
        jwt.verify(token,process.env.PROGRAMEET_SECRET_SESSION, function (err){
            if (err){
                res.redirect('/login');
            } else {
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}

function apiCheck(req, res, next) {
    var token = req.session.token || req.headers['x-access-token'];
    if (token){
        jwt.verify(token, process.env.PROGRAMEET_SECRET_SESSION, function (err, decoded){
            if (err){
                return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).send({
            success:false,
            message:"No token provided"
        });
    }
}

module.exports = {
  auth: authCheck,
  api: apiCheck
}
