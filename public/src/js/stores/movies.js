var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _movies = [];
var _movie = {};

var MovieList = merge(EventEmitter.prototype, {
  getAllMovies: function(){
    return _movies;
    //return _movie;
  },
  getMovieById: function(){
    console.log("get movie by id");
    return _movie
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
  } else if (ACTION_CONSTANT.MOVIE.LOAD.ONE === payload.action) {
    getMovieById(payload.id);
  }
}

function getAllMovies(){
  axios.get("/api/movie").then(function(res){
    console.log(res);
    _movies = res.data.results;
    MovieList.emit(ACTION_CONSTANT.MOVIE.LOAD.ALL + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}

function getMovieById(id){
  console.log(id);
  axios.get("/api/movie/" + id).then(function(res){
    console.log("result ", res);
    _movie = res.data;
    MovieList.emit(ACTION_CONSTANT.MOVIE.LOAD.ONE + "UPDATED");
  })
}
