var React = require('react');
var request = require('superagent')
var MainPokemonList = require('./MainPokemonListOne.jsx');

var MainContainerList = React.createClass({
  getPokemon: function() { 
    this.getPokemonData()
  },
  getInitialState: function() {
    return {
      pokemon: []

    }
  },
  getPokemonData: function(){
    var pickPokemon;
    var pokemonObject = [];

    for(var i = 0; i < 2; i++) {
      pickPokemon = Math.floor(Math.random()*(719-1+1)+1);

      request
        .get('http://pokeapi.co/api/v1/sprite/?limit=1&offset=' + pickPokemon)
        .end(function(err, res) {
          
          if(err){
            return console.log(err)
          }

          var parsedData = JSON.parse(res.text);
          var initialData = {name: parsedData.objects[0].pokemon.name.toUpperCase(), 
                              image: parsedData.objects[0].image, 
                              dataUrl: parsedData.objects[0].pokemon.resource_uri,
                              count: parsedData.meta.total_count,
                              combat: null
                            };

          //console.log("parsed", initialData)
          request
            .get('http://pokeapi.co' + initialData.dataUrl)
            .end(function(err, res) {
              
              if(err){
                return console.log(err)
              }

              initialData.combat = JSON.parse(res.text)
              pokemonObject.push(initialData)
              
              //console.log('PokemonData: ', pokemonObject)
              if(pokemonObject.length > 1) {
               this.setState({
                  pokemon: pokemonObject
                })
              }
              
            }.bind(this))
        }.bind(this))
    };
  },

  componentDidMount: function() {
    this.getPokemonData()
  },
  render: function() {
    return (
      <div>
        <MainPokemonList getPokemon={this.getPokemon} pokemonItem={this.state.pokemon} />
      </div>
    )
  }
})

module.exports = MainContainerList;