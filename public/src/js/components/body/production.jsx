var React = require("react");

var Production = React.createClass({
  render: function(){
    return this.props.children
  }
});

module.exports = Production;
