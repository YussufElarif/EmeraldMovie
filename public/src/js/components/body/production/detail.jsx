var React = require("react");
var MovieStore = require("../../../stores/movies");
var TvStore = require("../../../stores/tvs");

var MovieDetail = React.createClass({
  componentDidMount: function(){
    this.setState(
      (this.props.routes[1].path === "movie") ? MovieStore.getMovieById(this.props.params.id) : TvStore.getTvById(this.props.params.id)
    )
  },
  getInitialState: function(){
    return (this.props.routes[1].path === "movie") ? MovieStore.getMovieById(this.props.params.id) : TvStore.getTvById(this.props.params.id)
  },
  render: function(){
    var banner = (this.state.banner)? this.props.banner: "http://wowslider.com/sliders/demo-10/data/images/dock.jpg"
    return (
      <div className="row">
        <div className="banner" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w1000/" + this.state.backdrop_path + ")"}}></div>
        <div className ="container">
          <aside className="detail col s3">
            <div>
              <div className="poster" style={{backgroundImage: "url(" + this.state.image + ")"}}></div>
              <div>details</div>
            </div>
          </aside>
          <article className="col s9">
            <h1>{this.state.title}</h1>
            <p>{this.state.desc}</p>
          </article>
        </div>
      </div>
    )
  }
});

//banner
//image <- title
//image <- desc
//actors
//films like this

module.exports = MovieDetail;
