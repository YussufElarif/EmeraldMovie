var rest = require("restler");

var key = process.env.MOVIEDB_KEY;
var param = "/?api_key=" + key;
var base = "https://api.themoviedb.org/3";

function getAllTvs (req, res){
  var sortby = "/" + "popular";
  var api = base + "/tv" + sortby + param;
  console.log("getting dataaaa");
  rest.get(api).on("complete", function(result){
    return res.json(result)
  }).on("error", function(err){
    return res.status(500).json({message: "error", response: err});
  });
}

function getTv(req, res){
 var api = base + "/tv/" + req.params.id + param;

 rest.get(api).on("complete", function(result){
   return res.json(result)
 }).on("error", function(err){
   return res.status(500).json({message: "error", response: err});
 });
}


module.exports = {
  index: getAllTvs,
  show: getTv
}
