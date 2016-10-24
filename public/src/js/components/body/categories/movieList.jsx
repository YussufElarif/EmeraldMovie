var React = require("react");
var MovieStore = require("../../../stores/movies");
var AppDispatcher = require("../../../dispatchers/app");
var ACTION_CONSTANT = require("../../../constants/action");
var Movie = require("./product.jsx");
var Loading = require("../assets/loading.jsx");

var MovieList = React.createClass({
  componentDidMount: function(){
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.MOVIE.LOAD.ALL
    });
    MovieStore.on(ACTION_CONSTANT.MOVIE.LOAD.ALL + "UPDATED", this.handleAction);
  },
  getInitialState: function(){
    return {
      movies: false,
      loading: true
    }
  },
  handleAction: function(){
    //unlisten?
    this.setState({
      movies: MovieStore.getAllMovies(),
      loading: false
    });
  },
  scrollIntoView: function(){
    console.log("into view");
  },
  render: function(){
    if (this.state.movies){
      return (
        <div className="productList row">
          <h1>list from movie</h1>
          {
            this.state.movies.map(function(product, i){
              return (
                  <Movie type="movie" width="s2" id={product.id} image={product.poster_path} title={product.original_title} rating={product.vote_average} key={i}/>
              )
          })
        }
        </div>
      )
    } else {
      return (
        <Loading/>
      )
    }
  }
});

module.exports = MovieList;
