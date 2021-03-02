import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      active: true,
      names: ['Katja', 'Daniel', 'Smaragda']
    };
  }

  // state = {
  //   count: 1,
  //   active: true
  // }

  // Public class field syntax
  // Any method that needs to be passed to an onSomething attribute
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  toggleParagraph = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <span>{this.state.count}</span>
          <button onClick={this.incrementCount}>+</button>
        </div>
        <div>
          <button onClick={this.toggleParagraph}>Toggle paragraph</button>
          {(this.state.active && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              blanditiis, repellendus perferendis cupiditate doloribus possimus
              provident facilis ab optio minus, nemo magni sit accusamus nobis
              beatae incidunt libero deserunt quasi.
            </p>
          )) || <span>No message to display</span>}
          <ul>
            {this.state.names.map(name => {
              return <li key={name}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
