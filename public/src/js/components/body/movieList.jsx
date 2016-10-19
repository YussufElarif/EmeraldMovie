var React = require("react");
var MovieStore = require("../../stores/movies");
var AppDispatcher = require("../../dispatchers/app");

var Movie = require("./list/product.jsx");

var MovieList = React.createClass({
  getInitialState: function(){
    return {
      movies: MovieStore.getAllMovies()
    }
  },
  render: function(){
    return (
      <div className="productList row">
        <h1>list from movie</h1>
        {
          this.state.movies.map(function(product, i){
            return (
                <Movie type="movie" id={product.id} image={product.image} title={product.title} rating={product.rating} key={i} params={this.props.params}/>
            )
        }.bind(this))
      }
      </div>
    )
  }
});

module.exports = MovieList;
