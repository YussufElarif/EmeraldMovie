var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _tv = [];

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

AppDispatcher.register(handleAction);

function handleAction(payload){
  if (ACTION_CONSTANT.TV.LOAD.ALL === payload.action){
    getAllTvs();
  }
}

function getAllTvs(){
  axios.get("/api/tv").then(function(res){
    console.log(res);
    _tv = res.data.results;
    TvList.emit(ACTION_CONSTANT.TV.LOAD.ALL + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}
