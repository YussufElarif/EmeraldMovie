var React = require("react");
var Link = require("react-router").Link;

var Navigation = React.createClass({
  getInitialState: function(){
    return {
      isLoggedIn: false
    }
  },
  handleNavigation: function(){

  },
  render: function(){
    return (
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movie">Movie</Link></li>
        <li><Link to="/tv">TV</Link></li>
        {
          (this.state.isLoggedIn) ? (
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
