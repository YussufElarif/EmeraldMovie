var express = require('express');
var app = express();
var router = express.Router();

var web = require("./controllers/index");

//API
var login = require("./controllers/api/login");
var logout = require("./controllers/api/logout");
var register = require("./controllers/api/register");

var movie = require("./controllers/api/movie");
var tv = require("./controllers/api/tv");

//Api for loginm registration and logging out
router.route("/api/login")
      .post(login);

router.route("/api/register")
      .post(register);

router.route("/api/logout")
      .post(logout);

//Api for Movie
router.route("/api/movie")
      .get(movie.index);

router.route("/api/movie/:id")
      .get(movie.show);

//Api for TV
router.route("/api/tv")
      .get(tv.index);

router.route("/api/tv/:id")
      .get(tv.show);

//Route for the client side application routing
router.route('*')
      .get(web.index);

module.exports = router;
