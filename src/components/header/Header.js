import React, { Component } from 'react';
import Search from '../search/Search';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
   
  render() {
    
    return (
      <div className={styles.header}>

        <section className="header-container">
        
          <nav className="topnav">
            <ul>
              <a>
                <Link to="/">Home</Link>
              </a>
              <a>
                <Link to="/about">About</Link>
              </a>
              <a>
                <Link to="/profile">Profile</Link>
              </a>
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