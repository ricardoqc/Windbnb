import React from 'react';
import logo from '../../assets/logo.svg'

const Nav = ({ onDrawerToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} />
        <h1>Windbnb</h1>
      </div>
      <div className="navbar-filters">
        <button onClick={onDrawerToggle} className="filter-btn">
          Filtros
        </button>
      </div>
      <div className="navbar-location">
        <span>Helsinki, Finland</span>
        <span>Add guests</span>
      </div>
    </nav>
  );
};

export default Nav;