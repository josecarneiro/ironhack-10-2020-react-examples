import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = withRouter(props => {
  return (
    <nav>
      <Link to="/">Book List</Link>
      <span>The url being visited is {props.location.pathname}</span>
      <Link to="/book/1984-george-orwell">1984-george-orwell</Link>
      <Link to="/book/coders-clive-thompson">coders-clive-thompson</Link>
      <Link to="/book/life-3-0-max-tegmark">life-3-0-max-tegmark</Link>
    </nav>
  );
});

export default Navbar;
