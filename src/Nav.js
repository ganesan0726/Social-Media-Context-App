import React from "react";
import { Link } from "react-router-dom";


const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          placeholder="Search Post"
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

