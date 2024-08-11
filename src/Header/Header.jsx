import React from 'react';
import './Header.css';
import img1 from '../images/01.jpg';

function Header ()
{
  return (
    <>
      <div className="header">
        <div id="logo">
            <h3>DEV@Deakin</h3>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Search" />
        </div>

        <div className="button">
          <ul>
            <li><a href="#Post">Post</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
        </div>
      </div>
      <img src={img1} alt="image01" className="image01" />
    </>
  )
}

export default Header;