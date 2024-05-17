import React, { useState } from 'react';
import StaysData from '../../bd/data';
import './Nav.css'

const FilterDrawer = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const locations = [...new Set(StaysData.map((property) => property.city))];

  const handleFilter = () => {
    onFilter('location', location);
    onFilter('guests', adults + children);
  };

  const totalGuests = adults + children;

  return (
    <div className="filter-modal">
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All locations</option>
          {locations.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Guests</label>
        <div className="guests-input">
          <input
            type="text"
            value={`${totalGuests} guests`}
            readOnly
            className="total-guests-input"
          />
          <div className="guests-controls">
            <div>
              <label>Adults</label>
              <div>
                <button onClick={() => setAdults(adults - 1)} disabled={adults === 0}>
                  -
                </button>
                <span>{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>
            <div>
              <label>Children</label>
              <div>
                <button onClick={() => setChildren(children - 1)} disabled={children === 0}>
                  -
                </button>
                <span>{children}</span>
                <button onClick={() => setChildren(children + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default FilterDrawer;
