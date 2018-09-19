import React, { Component } from 'react';
import styles from '../tours/Tour.css';

class Tour extends Component {
  
  render() { 
    return ( 
      <div className={styles.Tour}>
        < a href="#"> 
          <div className="tourtile">
            <div className="star">
              <i className="far fa-star fa-2x"></i>
            </div>
            <img className="cover" src="http://www.worldwidewalrusweb.com/bc2/europe_2.jpg" />
            <div className="textcontainer">
              <h2 className="tourhead">Secret Walking Tour</h2>
              <p className="tour-tile-text">Here is the description of this tour. It is super cool, you should really check it out</p>
            </div>
            
          </div>
        </a>
      </div>

}