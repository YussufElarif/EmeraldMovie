var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");
var browserHistory = require("react-router").browserHistory;


var MovieList = merge(EventEmitter.prototype, {
  getUserDetails: function(){
    return JSON.parse(localStorage.getItem("user"));
  },
  login: function(data){
    var self = this;
    return axios.post("/api/login", data)
    .then(function(res){
      self.accessGranted(res.data);
    })
    .catch(function(err){
      console.log(err);
    });
  },
  logout: function(){
    // axios.post("/api/logout")
    // .then(function(res){
    //   if (res.data.message === "success"){
    //     localStorage.removeItem("token");
    //   }
    // })
    // .catch(function(err){
    //
    // });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
},
  register: function(data){
    var self = this;
    return axios.post("/api/register", data)
    .then(function(res){
      self.accessGranted(res.data);
    })
    .catch(function(err){
      console.log(err);
    })
  },
  accessGranted: function(data){
    if (data.message === "success"){
      localStorage.setItem("token", data.response.token);
      localStorage.setItem("user", JSON.stringify(data.response.user));
      browserHistory.push("/");
    }
  }
});

module.exports = MovieList;

AppDispatcher.register(handleAction);

function handleAction(payload){
  if (ACTION_CONSTANT.USER.LOGIN === payload.action){
    MovieList.login(payload.data).then(function(data){
      MovieList.emit("login");
    });
  } else if (ACTION_CONSTANT.USER.REGISTER === payload.action){
    MovieList.register(payload.data).then(function(data){
      MovieList.emit("login");
    });
  } else if (ACTION_CONSTANT.USER.LOGOUT === payload.action){
    MovieList.logout();
    MovieList.emit("logout");

  }
}
