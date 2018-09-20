import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styles from './About.css';

class About extends Component {
 
  render() { 
    return ( 
      <section className={styles.about}>
        <div className="about-headline">
          <h1>About This App</h1>
          <h2>Discover what surrounds you!<br />Curated walks to discover secrets in cities around the world.</h2>
          <p><i className="fab fa-node-js fa-2x"></i><i className="fab fa-react fa-2x"></i> <i className="fab fa-css3-alt fa-2x"></i> </p>
        </div>
        
      </section>

    );
  }
}
 
export default About;