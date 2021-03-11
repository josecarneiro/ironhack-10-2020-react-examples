import { Component } from 'react';
import './App.css';

import LikeButton from './components/LikeButton';

class App extends Component {
  state = {
    active: false,
    message: 'Hello'
  };

  handleActivateClick = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <button onClick={this.handleActivateClick}>Activate like button</button>
        {this.state.active && <LikeButton message={this.state.message} />}
      </div>
    );
  }
}

export default App;
