var React = require("react");
var AppDispatcher = require("../../dispatchers/app");
var ACTION_CONSTANT = require("../../constants/action");
var User = require("../../stores/users");

var Login = React.createClass({
  getInitialState: function(){
    return {
      user: "",
      password: ""
    }
  },
  handleChange: function(e){
    console.log(e.target)
    this.setState(
      (e.target.name === "user") ? {user: e.target.value} : {password: e.target.value}
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state);
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.USER.LOGIN,
      data: this.state
    })
  },
  render: function(){
    return (
      <form className="container login-register" onSubmit={this.handleSubmit}>
        <label htmlFor="user">Username</label>
        <input name="user" type="text" placeholder="username" onChange={this.handleChange}/>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="password" onChange={this.handleChange}/>

        <input type="submit" value="submit"/>
      </form>
    )
  }
});

module.exports = Login;
