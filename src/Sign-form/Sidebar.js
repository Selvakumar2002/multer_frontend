import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar bg-light">
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Dashboard</a>
        <a className="nav-link" href="#">Profile</a>
        <a className="nav-link" href="#">Settings</a>
      </nav>
    </div>
  );
}

export default Sidebar;
