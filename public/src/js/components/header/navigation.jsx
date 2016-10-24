var React = require("react");
var Link = require("react-router").Link;
var AppDispatcher = require("../../dispatchers/app")
var ACTION_CONSTANT = require("../../constants/action");
var UserStore = require("../../stores/users");

var Navigation = React.createClass({
  componentDidMount: function(){
    UserStore.on("logout", this.handleAction);
    UserStore.on("login", this.handleAction);
  },
  getInitialState: function(){
    return {
      user: UserStore.getUserDetails()
    }
  },
  handleLogout: function(){
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.USER.LOGOUT
    });
  },
  handleAction: function(){
    this.setState({
      user: UserStore.getUserDetails()
    });
    $(".button-collapse").sideNav("hide");
  },
  handleClick: function(){
    $(".button-collapse").sideNav("hide");
  },
  render: function(){
    return (
      <div>
        <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
        <li><Link to="/movie" onClick={this.handleClick}>Movie</Link></li>
        <li><Link to="/tv" onClick={this.handleClick}>TV</Link></li>
        {
          (this.state.user) ? (
            <li><a className="waves-effect waves-light btn cyan darken-4" onClick={this.handleLogout}>Logout</a></li>
          ) : (
            <span>
              <li><Link className="waves-effect waves-light btn cyan darken-4" to="/login" onClick={this.handleClick}>Login</Link></li>
              <li><Link className="waves-effect waves-light btn cyan darken-4" to="/register" onClick={this.handleClick}>Register</Link></li>
            </span>
          )
        }

      </div>
    )
  }
});

module.exports = Navigation;
