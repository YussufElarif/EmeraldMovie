var React = require("react");
var TvStore = require("../../../stores/tvs");
var AppDispatcher = require("../../../dispatchers/app");
var ACTION_CONSTANT = require("../../../constants/action");

var Loading = require("../assets/loading.jsx");
var Tv = require("./product.jsx");

var TvList = React.createClass({
  componentDidMount: function(){
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.TV.LOAD.ALL
    });
    TvStore.on(ACTION_CONSTANT.TV.LOAD.ALL + "UPDATED", this.handleAction);
  },
  getInitialState: function(){
    return {
      tvs: TvStore.getAllTvs(),
      loading: true
    }
  },
  handleAction: function(){
    this.setState({
      tvs: TvStore.getAllTvs(),
      loading: false
    });
  },
  render: function(){
    return (
      <div className="productList row">
        <h1>list from tv</h1>
        <Loading value={this.state.loading}/>
        {
          this.state.tvs.map(function(product, i){
            return (
                <Tv type="tv" id={product.id} image={product.poster_path} title={product.original_name} rating={product.vote_average} key={i}/>
            )
        }.bind(this))
      }
      </div>
    )
  }
});

module.exports = TvList;
