import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Stops from '../stops/Stops';
import styles from '../tours/Tour.css';

class Tour extends Component {
  static propTypes = {
    tour: PropTypes.object.isRequired
  };
  
  render() { 
    const { tour } = this.props;

    const { description, _id, name, tourimage } = tour;
    console.log(tour);

    return ( 
      <div className={styles.Tour}>
        <li className="tourtile">
          <img className="cover" src={tourimage}/>
          <Link to={`/tour/${_id}`}>
            <div className="star">
              <i className="far fa-star fa-2x"></i>
            </div>
            <div className="textcontainer">
              <h2 className="tourhead">{name}</h2>
              <p className="tour-tile-text">{description}</p>
            </div>
          </Link>
        </li>
      </div>
    );
  }
}

export default Tour;