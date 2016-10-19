var express = require('express');
var app = express();
var router = express.Router();

var validation = require("./controllers/validation");

var web = require("./controllers/index");

var login = require("./controllers/api/login");
var logout = require("./controllers/api/logout");
var register = require("./controllers/api/register");

// router.route('/login')
//       .get(login.index)
//       .post(login.post);
//
// router.route('/register')
//       .get(register.index)
//       .post(register.create);

//app.use(validation.auth);
router.route("/api/login")
      .post(login);

router.route("/api/register")
      .post(register);

router.route("/api/logout")
      .post(logout);

router.route('*')
      .get(web.index);

// router.route('/logout')
//       .post(logout.post);

module.exports = router;
