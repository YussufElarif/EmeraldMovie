var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _tvs = [];

var _tv = {};

var TvList = merge(EventEmitter.prototype, {
  getAllTvs: function(){
    console.log("get all tv");
    return _tvs;
  },
  getTvById: function(i){
    console.log("get tv by id");
    return _tv
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
  } else if (ACTION_CONSTANT.TV.LOAD.ONE === payload.action){
    getTvById(payload.id);
  }
}

function getAllTvs(){
  axios.get("/api/tv").then(function(res){
    console.log(res);
    _tvs = res.data.results;
    TvList.emit(ACTION_CONSTANT.TV.LOAD.ALL + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}

function getTvById (id) {
  axios.get("/api/tv/" + id).then(function(res){
    console.log(res);
    _tv = res.data;
    TvList.emit(ACTION_CONSTANT.TV.LOAD.ONE + "UPDATED");
  })
  .catch(function(err){
    console.log(err);
  });
}
