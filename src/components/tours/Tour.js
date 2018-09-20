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

    //  const { name, description } = tour;
    //  return (
    //    <div className={styles.Tour}>
    //      <li>
    //        <h3><strong>{name}</strong> ({description})</h3>
    //        <Stops
    //          tourId={tour._id}
    //        />
    //      </li>

    const { description, _id, tourImage, city } = tour;

    return ( 
      <div className={styles.Tour}>
        <div className="tourtile">
          <Link to={`/tour/${_id}`}>
            <div className="star">
              <i className="far fa-star fa-2x"></i>
            </div>
            <div className="textcontainer">
              <h2 className="tourhead">{name}</h2>
              <h2 className="tourhead">{city}</h2>
              <p className="tour-tile-text">{description}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Tour;