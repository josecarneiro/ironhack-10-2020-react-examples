import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';

import BookList from './views/BookList';
import SingleBook from './views/SingleBook';
import ErrorView from './views/ErrorView';

// Redirect
// How can we use router props in components other than view components
// How do we pass custom props to view components

// How do we protect a route

// const x = { a: 1, b: 2 };
// const y = { ...x };

// const w = [1, 2];
// const z = [...w];

function App() {
  const favoriteBook = '1984';
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={BookList} exact />
        {/* Passing custom props to a View component */}
        <Route
          path="/book/:id"
          render={props => (
            <SingleBook {...props} favoriteBook={favoriteBook} />
          )}
          exact
        />
        <Route path="/error" component={ErrorView} exact />
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
