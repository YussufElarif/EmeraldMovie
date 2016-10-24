var React = require("react");
var browserHistory = require("react-router").browserHistory;
var GenreStore = require("../../stores/genres");
var UserStore = require("../../stores/users");
var FavouriteStore = require("../../stores/favourites");
var AppDispatcher = require("../../dispatchers/app");
var ACTION_CONSTANT = require("../../constants/action");

var Product = require("./categories/product.jsx");
var Loading = require("./assets/loading.jsx");

var Home = React.createClass({
  componentDidMount: function(){
    if (this.state.user){
      AppDispatcher.dispatch({
        action: ACTION_CONSTANT.FAVOURITE.LOAD.ALL,
        id: this.state.user.id
      });
      FavouriteStore.on(ACTION_CONSTANT.FAVOURITE.LOAD.ALL + "UPDATED", this.handleAction);
      UserStore.on("logout", function(){
        this.setState({user: UserStore.getUserDetails()})
      }.bind(this));
    }
  },
  getInitialState: function(){
    return {
      genres: GenreStore.getTopGenre(6),
      user: UserStore.getUserDetails(),
      favourites: false,
      loading: true
    }
  },
  handleAction: function(){
    console.log("chess");
    this.setState({
      favourites: FavouriteStore.getAllFavourites(),
      loading: false
    });
    console.log(this.state.favourites);
    console.log(this.state.user);
  },
  render: function(){
      if (!this.state.user){
        return (
          <div className="home row">
            <h1>Home</h1>
            {
              this.state.genres.map(function(genre, i){
                return (
                  <div className="genre col s4" key={i}>
                    <div style={{backgroundImage: "url(" + genre.image + ")"}} className="image">
                      <h3>{genre.title}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }

      else if(!this.state.loading) {
        return (
          <div className="productList row">
          <h1>Favourites</h1>
            {
              (this.state.favourites.length > 0)?
                this.state.favourites.map(function(product, i){
                  return (
                    <Product width="s3" type={product.type} id={product.id} image={product.poster_path} title={ (product.type==="movie")?product.original_title:product.original_name} rating={product.vote_average} key={i}/>

                  )
                })
              :
                <p>your bucket is empty</p>
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

module.exports = Home;
