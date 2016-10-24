var rest = require("restler");
var async = require("async");

var key = process.env.MOVIEDB_KEY;
var param = "?api_key=" + key;
var base = "https://api.themoviedb.org/3/";

function getAllMovies (req, res){
  var sortby = "popular" + "/";
  var api = base + "movie/" + sortby + param;
  console.log("getting dataaaa");
  rest.get(api).on("complete", function(result){
    return res.json(result)
  }).on("error", function(err){
    return res.status(500).json({message: "error", response: err});
  });
}

function getMovie(req, res){
 var id = req.params.id;
 var api = base + "movie/" + id + param;
 console.log("the api = ", api);
 rest.get(api).on("complete", function(result){
   getActors(result.id, function(err, resp){
     if (err) return res.send(403).json({message: "error", response: err});
     result.cast = resp;
     return res.json(result);
   });
 }).on("error", function(err){
   return res.status(500).json({message: "error", response: err});
 });
}

function getActors(id, callback){
  var api = base + "movie/" + id + "/credits" + param;
  console.log(api);
  rest.get(api).on("complete", function(res){
    console.log(res);
    callback(null, res);
  }).on("error", function(err){
    console.log(err);
  });
}
module.exports = {
  index: getAllMovies,
  show: getMovie
}
