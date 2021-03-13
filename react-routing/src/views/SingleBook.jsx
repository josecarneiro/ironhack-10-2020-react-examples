import React, { Component } from 'react';
import books from './../books.json';

class SingleBook extends Component {
  state = {
    book: null
  };

  componentDidMount() {
    console.log('Component has been mounted');
    this.loadBook();
  }

  componentDidUpdate(previousProps) {
    console.log('Component updated due to changes in props or state');
    // You should never call setState (or trigger a method that calls setState)
    // unconditionally inside of the componentDidUpdate lifecycle method
    if (this.props.match.params.id !== previousProps.match.params.id) {
      console.log(
        'componentDidUpdate was triggered by a change to the id being passed in the props object'
      );
      this.loadBook();
    }
  }

  loadBook = () => {
    const book = books.find(item => item.id === this.props.match.params.id);
    this.setState({
      book: book
    });
  };

  render() {
    return (
      <div>
        {this.state.book && (
          <div>
            <small>Book id: {this.props.match.params.id}</small>
            <h1>{this.state.book.name}</h1>
            <h3>{this.state.book.author}</h3>
            <span>Published on {this.state.book.date}</span>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBook;
