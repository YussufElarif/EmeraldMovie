var React = require("react");
var Link = require("react-router").Link;

var Movie = React.createClass({
  handleClick: function(){
    console.log(this.props);
  },
  render: function(){
    return (
      <Link className="product col s2" to={"/" + this.props.type + "/" + this.props.id}>
        <div className="image" style={{backgroundImage: "url(" + this.props.image + ")"}}>
          <div className="rating">Rating:
            <span><i className="material-icons">star</i>{this.props.rating}/10</span>
          </div>
        </div>
        <h6>{this.props.title}</h6>
      </Link>
    )
  }
});

// <div className="card small sticky-action">
//   <div className="card-image waves-effect waves-block waves-light">
//     <img className="activator" src={this.props.image}/>
//   </div>
//   <div className="card-content">
//     <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
//   </div>
//   <div className="card-reveal">
//     <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
//     <p>Here is some more information about this product that is only revealed once clicked on.</p>
//   </div>
//   <div className="card-action">
//     <a href="#">This is a link</a>
//   </div>
// </div>

module.exports = Movie;
