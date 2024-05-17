import React, { useState } from 'react';
import Card from './components/card/Card';
import StaysData from './bd/data';
import FilterDrawer from './components/nav/filter';
import Nav from './components/nav/Nav';
import './App.css';


const App = () => {
  const [properties, setProperties] = useState(StaysData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFilter = (name, value) => {
    const filteredProperties = StaysData.filter((property) => {
      if (name === 'location' && !property.city.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      if (name === 'guests' && property.maxGuests < parseInt(value)) {
        return false;
      }
      return true;
    });
    setProperties(filteredProperties);
    setIsDrawerOpen(false);
  };

  return (
    <div className="app">
      <Nav onDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)} />
      {isDrawerOpen && <FilterDrawer onFilter={handleFilter} />}
      <div className="results-summary">
        <span>{properties.length} stays</span>
      </div>
      <div className="cards-container">
        {properties.map((property) => (
          <Card
            key={property.title}
            photo={property.photo}
            superHost={property.superHost}
            type={property.type}
            beds={property.beds}
            rating={property.rating}
            title={property.title}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
