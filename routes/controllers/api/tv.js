var rest = require("restler");

var key = process.env.MOVIEDB_KEY;
var param = "?api_key=" + key;
var base = "https://api.themoviedb.org/3/";

function getAllTvs (req, res){
  var sortby = "popular" + "/";
  var api = base + "tv/" + sortby + param;
  console.log("getting dataaaa");
  rest.get(api).on("complete", function(result){
    return res.json(result)
  }).on("error", function(err){
    return res.status(500).json({message: "error", response: err});
  });
}

function getTv(req, res){
  var id = req.params.id;
  var api = base + "tv/" + id + param;
 console.log(api);
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
  var api = base + "tv/" + id + "/credits" + param;
  console.log(api);
  rest.get(api).on("complete", function(res){
    console.log(res);
    callback(null, res);
  }).on("error", function(err){
    console.log(err);
  });
}


module.exports = {
  index: getAllTvs,
  show: getTv
}
