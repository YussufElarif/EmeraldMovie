var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _genre = [{
      title: "animation",
      image: "https://image.tmdb.org/t/p/original/oB2yICsyvg5UgTT6poxuZUAAdWS.jpg"
  }, {
    title: "action",
    image: "https://thdirectorschair.files.wordpress.com/2015/02/the-raid-2-3-connections-story.jpg"
  }, {
      title: "adventure",
      image: "https://s.yimg.com/ny/api/res/1.2/Zs._Cr3_rlLGPySzfHy7pQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://67.media.tumblr.com/7f157bd45a39cf20e8f33789e66839e0/tumblr_inline_nn46e5UwXh1shsv1e_1280.jpg"
  }, {
    title: "comedy",
    image: "http://i.huffpost.com/gen/2290154/images/o-SUPERBAD-facebook.jpg"
  }, {
    title: "romance",
    image: "http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2012/04/19/The-Notebook-Kiss_610_612x380_1.jpg"
  }, {
    title: "thriller",
    image: "http://www.horrordvds.com/reviews/n-z/sevblu/sevblu_shot23l.jpg"
  }, {
    title: "horror",
    image: "http://www.moviemail.com/img/still/7223/The-Shining-7223_7.jpg"
  }];

var GenreList = merge(EventEmitter.prototype, {
  getAllGenre: function(){
    return _genre;
  },
  getTopGenre: function(limit){
    return _genre.slice(0, limit)
  },
  getGenreById: function(i){
    return _genre[i]
  }
});

module.exports = GenreList;
