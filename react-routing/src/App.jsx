import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import BookList from './views/BookList';
import SingleBook from './views/SingleBook';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Book List</Link>
        <Link to="/book/1984-george-orwell">1984-george-orwell</Link>
        <Link to="/book/coders-clive-thompson">coders-clive-thompson</Link>
        <Link to="/book/life-3-0-max-tegmark">life-3-0-max-tegmark</Link>
      </nav>
      <Switch>
        <Route path="/" component={BookList} exact />
        <Route path="/book/:id" component={SingleBook} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
