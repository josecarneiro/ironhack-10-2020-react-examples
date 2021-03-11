import React, { Component } from 'react';
import books from './../books.json';

class SingleBook extends Component {
  state = {
    book: null
  };

  componentDidMount() {
    const book = books.find(item => item.id === this.props.match.params.id);
    this.setState({
      book: book
    });
  }

  render() {
    return (
      <div>
        {this.state.book && (
          <div>
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
