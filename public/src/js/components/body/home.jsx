var React = require("react");
var GenreStore = require("../../stores/genres");
var AppDispatcher = require("../../dispatchers/app");

var Home = React.createClass({
  getInitialState: function(){
    return {
      genres: GenreStore.getTopGenre(6)
    }
  },
  render: function(){
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
});

module.exports = Home;
