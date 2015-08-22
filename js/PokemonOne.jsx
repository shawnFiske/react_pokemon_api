var React = require('react');

var Pokemon = React.createClass({
  handleAttackOne: function(e) {
    this.props.attack(e.target.name, this.state.pokemon.name);
  },

  handleDefenseOne: function(e) {
    this.props.defence(e.target.name, this.state.pokemon.name);
  },

  getInitialState: function() {
    return {
      pokemon: ''
    }
  },

  render: function() {

    if(this.props.item != undefined){
    
      this.state.pokemon = this.props.item

      var centerStyle = {
        verticalAlign: "top",
        textAlign: "center"
      };

      var hideElement = {
        visibility: "hidden"
      };

      var removeElement = {
        display: "none"
      };

      var setHeight = {
        height: "40px"
      }

      var centerImage = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        height: "120"
      }

      //console.log("display: ", this.state.pokemon, this.state.pokemon.name);

      var name = this.state.pokemon.name;
      var src = "http://pokeapi.co" + this.state.pokemon.image;
      
      return (
        <section>
          <img src={src} style={centerImage} />
          <p style={centerStyle}>{name}</p>
          <div style={(this.props.attacking)? centerStyle:removeElement}>
            <div>
              <div style={(this.props.player)? centerStyle:hideElement}>
                <button onClick={this.handleAttackOne} name="2">Attack One</button>
                <button onClick={this.handleAttackOne} name="6">Attack Two</button>
              </div>
              <div style={(this.props.player)? centerStyle:hideElement}>
                <button onClick={this.handleAttackOne} name="12">Attack Three</button>
                <button onClick={this.handleAttackOne} name="24">Attack Four</button>
              </div>
            </div>
          </div> 

          <div style={(!this.props.attacking)? centerStyle:removeElement}>
            <div>
              <div style={(this.props.player)? centerStyle:hideElement}>
                <button onClick={this.handleDefenseOne} name="2">Defense One</button>
                <button onClick={this.handleDefenseOne} name="6">Defense Two</button>
              </div>
              <div style={(this.props.player)? centerStyle:hideElement}>
                <button onClick={this.handleDefenseOne} name="12">Defense Three</button>
                <button onClick={this.handleDefenseOne} name="24">Defense Four</button>
              </div>
            </div>
          </div> 

        </section>
      )                                       
    }else{
      return(<div></div>)
    }
  }
})

module.exports = Pokemon;