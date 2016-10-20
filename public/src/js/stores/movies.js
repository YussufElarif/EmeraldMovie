var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _movie = [];

var MovieList = merge(EventEmitter.prototype, {
  getAllMovies: function(){
    return _movie;
    //return _movie;
  },
  getMovieById: function(i){
    console.log("get movie by id");
    for (var i = 0; i < _movie.length; i++){

    }
    return _movie[i]
  },
  getMovieByGenre: function(genre){
      console.log("get movie by genre");
  }
});

module.exports = MovieList;

AppDispatcher.register(handleAction);

function handleAction(payload){
  if (ACTION_CONSTANT.MOVIE.LOAD.ALL === payload.action){
    getAllMovies();
  }
}

function getAllMovies(){
  axios.get("/api/movie").then(function(res){
    console.log(res);
    _movie = res.data.results;
    MovieList.emit(ACTION_CONSTANT.MOVIE.LOAD.ALL + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}
