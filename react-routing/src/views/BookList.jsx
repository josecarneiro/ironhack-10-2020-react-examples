import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import books from './../books.json';

class BookList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.setState({
      books: books
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.name}</Link>{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
