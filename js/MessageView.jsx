var React = require('react');

var MessageView = React.createClass({
  
  render: function() {
    //console.log("combat", this.props.combat)
    var divStyle = {
        display: "inline-block",
        margin: "25px",
        top: "0px",
        width: "300"
    };

    var centerStyle = {
      textAlign: "center"
    };

    console.log("MessageView: ", this.props.msg)
    return (
      <section style={divStyle}>
        <h2 style={centerStyle}>Message View</h2>
        <p>{this.props.msg}</p>
      </section>
    )
  }
})

module.exports = MessageView;