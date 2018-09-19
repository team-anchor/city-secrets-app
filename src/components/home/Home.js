import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Home.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <section className={styles.home}>
        <div className="splash-page">
          <h1>CitySecrets</h1>
          <h2>Discover what surrounds you! Curated walks to discover secrets in cities around the world.</h2>
        </div>
      </section>

    );
  }
}
 
export default Home;