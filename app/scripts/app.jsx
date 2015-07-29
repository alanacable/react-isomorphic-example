var React = require('react');

var App = React.createClass({

  testClientScript: function() {
  	console.log("****HERE")
    alert('component has mounted on client side!');
  },

  render: function() {
    return (
      <div>
      	<h2>Hello Bancvue</h2>
      	<button onClick={this.testClientScript}>Test Client Script</button>
      </div>
    );
  }
});

module.exports = App;