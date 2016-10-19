var React = require("react");
var AppDispatcher = require("../../dispatchers/app");
var ACTION_CONSTANT = require("../../constants/action");
var User = require("../../stores/users");

var Login = React.createClass({
  getInitialState: function(){
    return {
      user: "",
      password: "",
      confirm: ""
    }
  },
  handleChange: function(e){
    this.setState(
      (e.target.name === "user") ? {user: e.target.value} : (e.target.name === "password") ? {password: e.target.value} : {confirm: e.target.value}
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    if (this.state.password === this.state.confirm){
      AppDispatcher.dispatch({
        action: ACTION_CONSTANT.USER.REGISTER,
        data: {
          username:this.state.user,
          password:this.state.password
        }
      });
    } else {
      console.log("error");
    }
  },
  render: function(){
    return (
      <form className="container login-register" onSubmit={this.handleSubmit}>
        <label htmlFor="user">Username</label>
        <input name="user" type="text" placeholder="username" onChange={this.handleChange}/>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="password" onChange={this.handleChange}/>

        <label htmlFor="confirm">Confirm Password</label>
        <input name="confirm" type="password" placeholder="confirm password" onChange={this.handleChange}/>

        <input type="submit" value="submit"/>
      </form>
    )
  }
});

module.exports = Login;
