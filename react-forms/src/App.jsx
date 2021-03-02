import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    name: 'José',
    age: 27,
    city: 'Lisbon'
  };

  handleNameChange = event => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  };

  handleGenericChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={this.handleGenericChange}
          value={this.state.age}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={this.handleGenericChange}
          value={this.state.city}
        />
        <p>
          Hello, my name is {this.state.name}, I am {this.state.age} years old
          and I live in {this.state.city}.
        </p>
      </div>
    );
  }
}

export default App;
