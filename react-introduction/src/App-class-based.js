import React from 'react';
import logo from './logo.svg';
// const logo = require('./logo.svg');
import './App.css';
import Message from './Message';

const message = 'Ciao Mondo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Message text="Olá mundo" />
          <Message text="Olá mundo" />
          <Message text="Ciao Mondo" />
          <Message text="Olá mundo" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message.toUpperCase()}</p>
          {/* <label htmlFor="foo-input"></label> */}
          <Message text="Hallo Welt" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Message text="Hola Mundo" />
        </header>
      </div>
    );
  }
}

export default App;
