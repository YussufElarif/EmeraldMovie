var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _favourites = [];

var Favourite = merge(EventEmitter.prototype, {
  getAllFavourites: function(){
    console.log("get all tv");
    return _favourites;
  },
  getAllFavouritesById: function(movie, type){
    console.log(_favourites);
  }
});

module.exports = Favourite;

AppDispatcher.register(handleAction);

function handleAction(payload){
  console.log("test favourite store");
  if (ACTION_CONSTANT.MOVIE.FAVOURITE.ONE === payload.action){
    favouriteOne(payload.id, payload.user.id, payload.type);
  } else if (ACTION_CONSTANT.FAVOURITE.LOAD.ALL === payload.action){
    allFavourite(payload.id);
  } else if (ACTION_CONSTANT.FAVOURITE.LOAD.ONE === payload.action){
    oneFavourite(payload.id, payload.user, payload.type);
  }
}

function favouriteOne(movie, user, type){
  console.log(movie, user);
  axios.post("/api/favourite", {user_id: user, movie_id: movie, type: type}).then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
}

function allFavourite(id){
  axios.get("/api/favourite/" + id).then(function(res){
    console.log(res);
    _favourites = res.data.response;
    Favourite.emit(ACTION_CONSTANT.FAVOURITE.LOAD.ALL + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}

function oneFavourite(movie, user, type){
  axios.get("/api/favourite")
}
