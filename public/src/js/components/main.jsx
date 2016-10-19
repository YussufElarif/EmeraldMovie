var React = require("react");

var Header = require("./header.jsx");
var Home = require("./body/home.jsx");
var Footer = require("./footer.jsx");

var Body = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <main>
        {
          this.props.children
        }
        </main>
        <Footer/>
      </div>
    )
  }
});

//<Route path="/\(movie|tv)\" component={Platform}/>
// <Route path="/movie/:id" component={Detail}/>
// <Route path="/tv/:id" component={Detail}/>
//
// <Route path="*" component={Errors}/>

module.exports = Body;
