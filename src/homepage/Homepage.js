import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <h1 className='title'>Data Structure Visualizer</h1>
      <div className="data-structure-window">
        <Link to="/array">
          <div className="window">
            <h3>Array Visualizer</h3>
          </div>
        </Link>
        <Link to="/stack">
          <div className="window">
            <h3>Stack Visualizer</h3>
          </div>
        </Link>
        <Link to="/queue">
          <div className="window">
            <h3>Queue Visualizer</h3>
          </div>
        </Link>
        <Link to="/singly-linked-list">
          <div className="window">
            <h3>Singly Linked List Visualizer</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
