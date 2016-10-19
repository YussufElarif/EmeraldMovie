var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _movie = [{
    id: "0",
    title: "Title of a Movie",
    desc: "Description of a movie",
    image: "http://photos.toofab.com/gallery-images/2013/04/20-new-oblivion-movie-stills-19-of-201_src.jpg",
    rating: 8
  },
  {
    id: "1",
    title: "Title 2 of a movie",
    desc: "Description 2 of a movie",
    image: "http://www.theglobeandmail.com/arts/article27682767.ece/BINARY/w620/goldenglobe10rv02.JPG",
    rating: 2
  }];

var MovieList = merge(EventEmitter.prototype, {
  getAllMovies: function(){
    console.log("get all movies");
    return _movie;
  },
  getMovieById: function(i){
    console.log("get movie by id");
    return _movie[i]
  },
  getMovieByGenre: function(genre){
      console.log("get movie by genre");
  }
});

module.exports = MovieList;

// AppDispatcher.register(handleAction);
//
// function handleAction(payload){
//   console.log("handleAction _movie");
// }
