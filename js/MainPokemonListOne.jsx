var React = require('react');
var Pokemon = require('./PokemonOne.jsx');
var CombatView = require('./CombatView.jsx');
var MessageView = require('./MessageView.jsx');

var MainPokemonList = React.createClass({
  handleRandomPokemon: function() {
    this.setState({
        message: 'Ready!'
    });
    this.props.getPokemon()
  },

  callAttack: function(type, attacker) {
    //console.log(type, attacker)
    var updatePokeTwo = '';
    var msg = '';
    var index = 0;

    //determin Ability
    if(this.state.pokeOne.combat.abilities.length > this.state.pokeOne.combat.moves.length){
      index = Math.floor(Math.random()*(this.state.pokeOne.combat.abilities.length-0+0)+0);
      msg = this.state.pokeOne.name + ' attacked ' + this.state.pokeTwo.name + ' with ' + this.state.pokeOne.combat.abilities[index].name;
    }else{
      index = Math.floor(Math.random()*(this.state.pokeOne.combat.moves.length-0+0)+0);
      msg = this.state.pokeOne.name + ' attacked ' + this.state.pokeTwo.name + ' with ' + this.state.pokeOne.combat.moves[index].name;
    }

    //get defence skill
    if(this.state.pokeOne.combat.abilities.length > this.state.pokeOne.combat.moves.length){
      index = Math.floor(Math.random()*(this.state.pokeOne.combat.abilities.length-0+0)+0);
      msg = msg + ', ' + this.state.pokeTwo.name + ' defended with ' + this.state.pokeOne.combat.abilities[index].name;
    }else{
      index = Math.floor(Math.random()*(this.state.pokeOne.combat.moves.length-0+0)+0);
      msg = msg + ', ' + this.state.pokeTwo.name + ' defended with ' + this.state.pokeOne.combat.moves[index].name;
    }

    //determin hit
    var randomHit = Math.floor((Math.random()*(100-1+1)+1) - type);
    var heightMod = this.state.pokeOne.combat.height - this.state.pokeTwo.combat.height;
    var speedMod = this.state.pokeOne.combat.speed - this.state.pokeTwo.combat.speed ;
    var attackMod = this.state.pokeOne.combat.attack - this.state.pokeTwo.combat.defense;
    var checkHit = randomHit + (-heightMod+speedMod+attackMod);

    if(randomHit > 50) {
      this.state.pokeTwo.combat.hp = this.state.pokeTwo.combat.hp - type;
      updatePokeTwo = this.state.pokeTwo;
      msg = msg + ' taking ' + (type) + ' damage!'
    }else{
      msg = msg + ' taking no damage!' 
    }

    if(this.state.pokeTwo.combat.hp < 0){
      msg = msg + ' \n\n' + this.state.pokeTwo.name + ' was defeated!' 
    }
    
    //console.log(msg);

    this.state.message = msg

    this.setState({
        pokeTwo: this.state.pokeTwo,
        attacking: this.state.attacking = false,
        message: this.state.message
    });
  },

  callDefense: function(type, defender) {
    console.log(type, defender);
    var updatePokeOne = '';
    var msg = '';
    var index = 0;
    var types = [2, 6, 12, 24];
    type = types[Math.floor(Math.random()*(4-0+0)+0)]
    
    //determin Ability
    if(this.state.pokeTwo.combat.abilities.length > this.state.pokeTwo.combat.moves.length){
      index = Math.floor(Math.random()*(this.state.pokeTwo.combat.abilities.length-0+0)+0);
      msg = this.state.pokeTwo.name + ' attacked ' + this.state.pokeOne.name + ' with ' + this.state.pokeTwo.combat.abilities[index].name;
    }else{
      index = Math.floor(Math.random()*(this.state.pokeTwo.combat.moves.length-0+0)+0);
      msg = this.state.pokeTwo.name + ' attacked ' + this.state.pokeOne.name + ' with ' + this.state.pokeTwo.combat.moves[index].name;
    }

    //get defence skill
    if(this.state.pokeTwo.combat.abilities.length > this.state.pokeTwo.combat.moves.length){
      index = Math.floor(Math.random()*(this.state.pokeTwo.combat.abilities.length-0+0)+0);
      msg = msg + ', ' + this.state.pokeOne.name + ' defended with ' + this.state.pokeTwo.combat.abilities[index].name;
    }else{
      index = Math.floor(Math.random()*(this.state.pokeTwo.combat.moves.length-0+0)+0);
      msg = msg + ', ' + this.state.pokeOne.name + ' defended with ' + this.state.pokeTwo.combat.moves[index].name;
    }

    //determin hit
    var randomHit = Math.floor((Math.random()*(100-1+1)+1) - type);
    var heightMod = this.state.pokeTwo.combat.height - this.state.pokeOne.combat.height;
    var speedMod = this.state.pokeTwo.combat.speed - this.state.pokeOne.combat.speed ;
    var attackMod = this.state.pokeTwo.combat.attack - this.state.pokeOne.combat.defense;
    var checkHit = randomHit + (-heightMod+speedMod+attackMod);

    if(randomHit > 50) {
      this.state.pokeOne.combat.hp = this.state.pokeOne.combat.hp - type;
      updatePokeOne = this.state.pokeOne;
      msg = msg + ' taking ' + (type) + ' damage!'
    }else{
      msg = msg + ' taking no damage!' 
    }

    if(this.state.pokeOne.combat.hp < 0){
      msg = msg + ' \n\n' + this.state.pokeOne.name + ' was defeated!' 
    }
    
    //console.log(msg);

    this.state.message = msg

    this.setState({
        pokeOne: this.state.pokeOne,
        attacking: this.state.attacking = true,
        message: this.state.message
    });
  },

  getInitialState: function() {
    return {
      attacking: true,
      message: 'Ready!',
      pokeOne: '',
      pokeTwo: ''
    }
  },

  render: function() {

    var view = {
      width: "100%"
    }

    var centerStyle = {
      position: "relative",
      textAlign: "center"
    };

    var divStyle = {
      position: "relative",
      top: "0px",
      display: "inline-block",
      margin: "25px",
      textAlign: "center",
      verticalAlign: "top"
    };

    //console.log("State:", this.state.pokeOne)

    //if((this.state.pokeOne == '' || this.state.pokeOne == undefined) && (this.state.pokeTwo == '' || this.state.pokeTwo == undefined)){ 
    var ourPokemon = this.props.pokemonItem;
    var pokeOne = this.state.pokeOne = ourPokemon[0];
    var pokeTwo = this.state.pokeTwo = ourPokemon[1];

    //}

    //console.log("poke", ourPokemon, this.state.pokeTwo, this.state.pokeOne)

    return (
      <section style={view}>
        <article style={centerStyle}>
          <div style={divStyle}>
            <h2 style={centerStyle}>Your Pokemon</h2>
            <Pokemon item={this.state.pokeOne} attack={this.callAttack} defence={this.callDefense} player={true} attacking={this.state.attacking} />
          </div>

          <div style={divStyle}>
            <h2 style={centerStyle}>Enemy Pokemon</h2>
            <Pokemon item={this.state.pokeTwo} attack={this.callAttack} defence={this.callDefense} player={false} attacking={true} />
          </div>
          <article>
            <div style={divStyle}>
              <CombatView pokeOne={this.state.pokeOne} pokeTwo={this.state.pokeTwo} />
            </div>
            <div style={divStyle}>
              <MessageView msg={this.state.message} />
            </div>
          </article>
        </article>
        <div>
          <button onClick={this.handleRandomPokemon}>Get Random Pokemon</button>
        </div>        
      </section>
    )
  }
})

module.exports = MainPokemonList;