import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import styles from './about.css';

class About extends Component {
 
  render() { 
    return ( 
      <section className={styles.about}>
        <div className="headline-container">
          <img src={Logo} />
          <h1>CitySecrets</h1>
          <h2>Discover what surrounds you!<br />Curated walks to discover secrets in cities around the world.</h2>
        </div>
        
      </section>

    );
  }
}
 
export default About;