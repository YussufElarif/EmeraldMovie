console.log("test");

var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

var Main = require("./components/main.jsx")
var Login = require("./components/body/login.jsx");
var Register = require("./components/body/register.jsx");
var Home = require("./components/body/home.jsx");

var MovieList = require("./components/body/movieList.jsx");
var TVList = require("./components/body/tvList.jsx");

var Product = require("./components/body/production.jsx");
var MovieDetail = require("./components/body/production/movieDetail.jsx");
var TvDetail = require("./components/body/production/tvDetail.jsx");

var Errors = require("./components/404/error.jsx");

require("../scss/style.scss");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>

      <Route path="movie" component={MovieList}/>
      <Route path="tv" component={TVList}/>

      <Route path="movie" component={Product}>
        <Route path=":id" component={MovieDetail}/>
      </Route>

      <Route path="tv" component={Product}>
        <Route path=":id" component={TvDetail}/>
      </Route>

    </Route>
    <Route path="*" component={Errors}/>
  </Router>,
  document.getElementById("app")
);
