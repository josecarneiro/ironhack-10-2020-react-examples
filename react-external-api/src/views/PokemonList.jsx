import React, { Component } from 'react';
import { listPokemon } from './../services/pokemon-api';
import { Link } from 'react-router-dom';

class PokemonList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.loadPokemonList();
  }

  async loadPokemonList() {
    const list = await listPokemon();
    this.setState({
      list
    });
  }

  render() {
    return (
      <div>
        <h1>Pokémon List</h1>
        <ul>
          {this.state.list.map((pokemon, index) => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${ index + 1 }`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt=""
                />
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
