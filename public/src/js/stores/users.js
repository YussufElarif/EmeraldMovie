var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");
var browserHistory = require("react-router").browserHistory;

var axios = require("axios");

var _user = {};

var MovieList = merge(EventEmitter.prototype, {
  getUserDetails: function(){

  },
  login: function(data){

    axios.post("/api/login", data)
    .then(function(res){
      console.log(res)
    })
    .catch(function(err){
      console.log(err);
    })
  },
  logout: function(){

  },
  register: function(data){
    axios.post("/api/register", data)
    .then(function(res){
      if (res.data.message === "success"){
        browserHistory.push("/");
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }
});

module.exports = MovieList;

AppDispatcher.register(handleAction);

function handleAction(payload){
  if (ACTION_CONSTANT.USER.LOGIN === payload.action){
    console.log("Login");
    MovieList.login(payload.data);
  } else if (ACTION_CONSTANT.USER.REGISTER === payload.action){
    console.log("Register");
    MovieList.register(payload.data);
  } else if (ACTION_CONSTANT.USER.LOGOUT === payload.action){
    console.log("Logout");
  }
}
