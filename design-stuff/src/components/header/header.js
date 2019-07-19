import React from 'react';
import '../../styles/core/header.scss';

//TODO: finish drop down
function Header() {
  return (
    <>
    <header>
      <nav className="navbar">
        <ul className="mainLinks">
          <li className="mainLinks">page 1</li>
          <li className="mainLinks">page 2</li>
        </ul> 
      </nav>
      <h2>Design Playground... ain't she purdy </h2>
    </header>
    </>
  );
}

export default Header;