var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _tv = [{
    id: "0",
    title: "Title of a Show",
    desc: "Description of a Show",
    image: "https://www.wired.com/wp-content/uploads/2014/06/Breaking-Bad-Heisenberg.jpg",
    rating: 8
  },
  {
    id: "1",
    title: "Title 2 of a Show",
    desc: "Description 2 of a Show",
    image: "http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/07/Vikings.jpg",
    rating: 2
  }];

var TvList = merge(EventEmitter.prototype, {
  getAllTvs: function(){
    console.log("get all tv");
    return _tv;
  },
  getTvById: function(i){
    console.log("get tv by id");
    return _tv[i]
  },
  getTvByGenre: function(genre){
      console.log("get tv by genre");
  }
});

module.exports = TvList;

// AppDispatcher.register(handleAction);
//
// function handleAction(payload){
//   console.log("handleAction tv");
// }
