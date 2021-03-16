import React, { Component } from 'react';
import { loadPokemon } from './../services/pokemon-api';
import { Link } from 'react-router-dom';

class SinglePokemon extends Component {
  state = {
    single: null
  };

  componentDidMount() {
    this.loadSinglePokemon();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadSinglePokemon();
    }
  }

  async loadSinglePokemon() {
    const id = this.props.match.params.id;
    const single = await loadPokemon(id);
    this.setState({
      single: single
    });
  }

  render() {
    const single = this.state.single;
    return (
      <div>
        {single && (
          <>
            <img src={single.sprites.front_default} alt={single.name} />
            <h1>{single.name}</h1>
            <span>Weight: {single.weight}</span>
            <br />
            <span>Height: {single.height}</span>
            <ul>
              {single.evolutions.map(name => (
                <li key={name}>
                  <Link to={`/pokemon/${name}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default SinglePokemon;
