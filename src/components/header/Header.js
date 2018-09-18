import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Search from '../search/Search';
import styles from './Header.css';

class Header extends Component {
   
  render() {
    
    return (
      <div className={styles.header}>

        <section className="header-container">
          <nav className="topnav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/auth">Auth</NavLink>
              </li>
            </ul>
          </nav>
        </section>

        <section className="search-container">
          <Route component={Search}/>
        </section>

      </div>
    );
  }

}

export default Header;