import React from 'react';
import('../../styles/core/header.scss');

//TODO: finish drop down
function Header() {
  return (
    <>
    <header>
      <nav className="navbar">
        <ul>
          <li>page 1</li>
          <li>page 2</li>
        </ul> 
        <div class="dropdown">
            <ul className='dropdown'>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
        </div> 
      </nav>
      <h2>Design Playground... ain't she purdy </h2>
    </header>
    </>
  );
}

export default Header;