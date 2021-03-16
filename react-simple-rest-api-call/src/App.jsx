import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        const data = response.data;
        const characters = data.results;
        this.setState({
          characters: characters
        });
      })
      .catch(error => {
        alert('There was an error.');
      });
  }

  // async loadCharacters() {
  //   try {
  //     const response = await axios.get(
  //       'https://rickandmortyapi.com/api/character'
  //     );
  //     const data = response.data;
  //     const characters = data.results;
  //     this.setState({
  //       characters: characters
  //     });
  //   } catch (error) {
  //     alert('There was an error.');
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Rick and Morty Information</h1>
        {this.state.characters.map(character => (
          <div key={character.id} className="character">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <span>Status: {character.status}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
