var React = require("react");
var TVStore = require("../../stores/tvs");
var AppDispatcher = require("../../dispatchers/app");

var TV = require("./list/product.jsx");

var TVList = React.createClass({
  getInitialState: function(){
    return {
      tvs: TVStore.getAllTvs()
    }
  },
  render: function(){
    return (
      <div className="productList row">
        <h1>list from movie</h1>
        {
          this.state.tvs.map(function(product, i){
            return (
                <TV type="tv" id={product.id} image={product.image} title={product.title} rating={product.rating} key={i} params={this.props.params}/>
            )
        }.bind(this))
      }
      </div>
    )
  }
});

module.exports = TVList;
