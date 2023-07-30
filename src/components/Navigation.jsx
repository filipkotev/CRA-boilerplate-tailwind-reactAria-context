import React from 'react';
import { Link } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';

const Navigation = () => {

  const { user } = useStateContext();

  return (
    <nav className="mb-12">
    <Link to="/" className="navigation--logo">Logo</Link>
    <div className="navigation--links">
      <Link to="/add-todo">Add ToDo</Link>

      {
        user ?
          <Link to="/">Log out</Link>
        : <Link to="/login">Log in</Link>

      }
    </div>
  </nav>
  )
}

export default Navigation