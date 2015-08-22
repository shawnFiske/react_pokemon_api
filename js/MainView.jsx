var React = require('react');
var MainContainerListOne = require('./MainContainerListOne.jsx');

var MainView = React.createClass({
  render: function() {
    
    return (
      <div>
        <h2>Pokemon</h2>
        <div>
          <MainContainerListOne />
        </div>
      </div>
    )
  }
})

module.exports = MainView;