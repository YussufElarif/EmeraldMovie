var React = require("react");
var currencyFormatter = require("currency-formatter");
var MovieStore = require("../../../stores/movies");
var TvStore = require("../../../stores/tvs");
var FavouriteStore = require("../../../stores/favourites");
var UserStore = require("../../../stores/users");
var ACTION_CONSTANT = require("../../../constants/action");
var AppDispatcher = require("../../../dispatchers/app")
var Loading = require("../assets/loading.jsx");

var MovieDetail = React.createClass({
  componentDidMount: function(){
    console.log("component will mount");
    //dispatches based on product type to retrieve correct data
    if (this.props.routes[1].path === "movie") {
      AppDispatcher.dispatch({
        action: ACTION_CONSTANT.MOVIE.LOAD.ONE,
        id: this.props.params.id
      });
      MovieStore.on(ACTION_CONSTANT.MOVIE.LOAD.ONE + "UPDATED", this.handleAction);
    } else {
      AppDispatcher.dispatch({
        action: ACTION_CONSTANT.TV.LOAD.ONE,
        id: this.props.params.id
      });
      TvStore.on(ACTION_CONSTANT.TV.LOAD.ONE + "UPDATED", this.handleAction);
    }
    //dispatch for favourite
  },
  getInitialState: function(){
    return {
      data: false,
      user: UserStore.getUserDetails()
    }
  },
  handleAction: function(){
    this.setState({
      data: (this.props.routes[1].path === "movie") ? MovieStore.getMovieById(this.props.params.id) : TvStore.getTvById(this.props.params.id)
    })
    console.log(this.state.data);
  },
  handleFavourite: function(){
    if (this.state.user) {
      AppDispatcher.dispatch({
        action: ACTION_CONSTANT.MOVIE.FAVOURITE.ONE,
        id: this.props.params.id,
        user: this.state.user,
        type: this.props.routes[1].path
      });
    } else {
      console.log("not logged in");
    }
  },
  render: function(){
    console.log("test", this.state.data)
    var movie = this.props.routes[1].path === "movie";
    if (this.state.data){
      return (
        <div className="row">
          <div className="banner" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w1000/" + this.state.data.backdrop_path + ")"}}></div>
          <div className="container content">
            <aside className="detail col s3">
              <div>
                <div className="poster" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w500/" + this.state.data.poster_path + ")"}}></div>
                <a className="waves-effect waves-light btn yellow darken-1 favourite" onClick={this.handleFavourite}><i className="material-icons right">star</i>favourite</a>
                {
                (movie) ?
                  <span>
                    <div><strong>Budget:</strong> <span className="">{currencyFormatter.format(this.state.data.budget, { code: 'USD' })}</span></div>
                    <div><strong>Length:</strong> <span className="">{this.state.data.runtime} minutes</span></div>
                  </span>
                :
                  <span>
                    <div><strong>Run Time:</strong> <span>{this.state.data.episode_run_time[0]} minutes</span></div>
                    <div><strong>Seasons:</strong> <span>{this.state.data.number_of_seasons}</span></div>
                  </span>
                }
              </div>
            </aside>
            <article className="detail col s8">
              <h1>{(movie)? this.state.data.original_title : this.state.data.original_name }</h1>

              {
                this.state.data.genres.map(function(genre, i){
                  return (
                    <div className="chip" key={i}>
                      {genre.name}
                    </div>
                  )
                })
              }

              <p>{this.state.data.overview}</p>
            </article>
          </div>
          <section className="actors blue-grey darken-4 row col s12">
            <div>
            {
              this.state.data.cast.cast.map(function(actor,i){
                if (i < 5){
                  return (
                    <div key={i}>
                      <div className="actor-profile" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w300/" + actor.profile_path + ")"}}></div>
                      <p>{actor.name}</p>
                      <p>as</p>
                      <p>{actor.character}</p>
                    </div>
                  )
                }
              })
             }
           </div>
          </section>
        </div>
      )
    } else {
      return (
        <Loading/>
      )
    }
  }
});

//banner
//image <- title
//image <- desc
//actors
//films like this

module.exports = MovieDetail;
