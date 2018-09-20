import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styles from './About.css';

class About extends Component {
 
  render() { 
    return ( 
      <section className={styles.about}>
        <div className="about-headline">
          <div className="headline-container">
            <h1>CitySecrets</h1>
            <h2>Developed by Injoong Yoon, Mario Quintana and Mark Myers</h2>
            <p>CitySecrets was developed in Javascript using <strong>Node.js</strong> and <strong>React/Redux</strong>, interacting with <strong>MongoDB</strong> and deployed to <strong>Heroku.</strong> The team chose to use <strong>Cloudinary</strong> to handle image management, processing and hosting. During development, the team used <strong>Test Driven Development (TDD)</strong> principles and <strong>Jest</strong> as a test suite/assertion library. The homepage background photo is by Paul Trienekens and sourced from <strong>Unsplash.</strong></p>
            <p>Project definition, scoping, design and development were completed over a <strong>5-day sprint</strong>, as our team&rsquo;s final project for <a href="http://alchemycodelab.com" target="_blank" rel="noopener noreferrer">Alchemy Code Lab&rsquo;s</a> Full Stack Javascript (401) bootcamp.</p>
            <p><i className="fab fa-node-js fa-2x"></i><i className="fab fa-react fa-2x"></i> <i className="fab fa-css3-alt fa-2x"></i> </p>
          </div>
        </div>
        
      </section>

    );
  }
}
 
export default About;