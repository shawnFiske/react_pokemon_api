var React = require('react');

var CombatView = React.createClass({
  
  render: function() {
    if(this.props.pokeOne != undefined && this.props.pokeTwo != undefined){
      //console.log("combat", this.props.combat)
      var divStyle = {
          display: "inline-block",
          margin: "25px"
      };

      var centerStyle = {
        textAlign: "center"
      };

      //console.log(this.props.pokeOne, this.props.pokeTwo)

      return (
        <section>
          <h2 style={centerStyle}>Combat View</h2>
          <div style={divStyle}>
            <p>{this.props.pokeOne.name}</p>
            <p>HP: {this.props.pokeOne.combat.hp}</p>
            <p>Att: {this.props.pokeOne.combat.attack}</p>
            <p>Def: {this.props.pokeOne.combat.defense}</p>
            <p>Speed: {this.props.pokeOne.combat.speed}</p>
          </div>
          <div style={divStyle}>
            <p>{this.props.pokeTwo.name}</p>
            <p>HP: {this.props.pokeTwo.combat.hp}</p>
            <p>Att: {this.props.pokeTwo.combat.attack}</p>
            <p>Def: {this.props.pokeTwo.combat.defense}</p>
            <p>Speed: {this.props.pokeTwo.combat.speed}</p>
          </div>
        </section>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
})

module.exports = CombatView;