// Mainbar.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Homecards from './Homecards';

const Mainbar = ({ isSidebarOpen }) => {
  return (
    <div className="p-4 bg-white-100 flex-grow">
      <Navbar/> 
      <Hero/>
      <Homecards/>
    </div>
  );
}

export default Mainbar;
