var React = require("react");
var MovieStore = require("../../stores/movies");
var TvStore = require("../../stores/tvs");
var AppDispatcher = require("../../dispatchers/app");

var Product = require("./categories/product.jsx");

var Categories = React.createClass({
  componentDidMount: function(){
    var type = this.props.routes[1].path;
    this.setState({
      products: (type === "movie") ? MovieStore.getAllMovies() : TvStore.getAllTvs(),
      type: type
    });
  },
  getInitialState: function(){
    var type = this.props.routes[1].path;
    return {
      products: (type === "movie") ? MovieStore.getAllMovies() : TvStore.getAllTvs(),
      type: type
    }
  },
  render: function(){
    return (
      <div className="productList row">
        <h1>list from {this.state.type}</h1>
        {
          this.state.products.map(function(product, i){
            return (
                <Product type={this.state.type} id={product.id} image={product.image} title={product.title} rating={product.rating} key={i} params={this.props.params}/>
            )
        }.bind(this))
      }
      </div>
    )
  }
});

module.exports = Categories;
