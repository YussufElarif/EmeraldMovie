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
  },
  render: function(){
    return (
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movie">Movie</Link></li>
        <li><Link to="/tv">TV</Link></li>
        {
          (this.state.user) ? (
            <li><a className="waves-effect waves-light btn cyan darken-4" onClick={this.handleLogout}>Logout</a></li>
          ) : (
            <span>
              <li><Link className="waves-effect waves-light btn cyan darken-4" to="/login">Login</Link></li>
              <li><Link className="waves-effect waves-light btn cyan darken-4" to="/register">Register</Link></li>
            </span>
          )
        }

      </div>
    )
  }
});

module.exports = Navigation;
