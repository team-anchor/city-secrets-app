import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stops from '../stops/Stops';
import styles from '../tours/Tour.css';

class Tour extends Component {
  static propTypes = {
    tour: PropTypes.object.isRequired
  };
  
  render() { 
    const { tour } = this.props;

//    const { name, description } = tour;
//    return (
//      <div className={styles.Tour}>
//        <li>
//          <h3><strong>{name}</strong> ({description})</h3>
//          <Stops
//            tourId={tour._id}
//          />
//        </li>

    const { name, description, _id, stops } = tour;

    return ( 
      <div className={styles.Tour}>
        <div className="tourtile">
          <Link to={`/tours/${_id}`}>
            <div className="star">
              <i className="far fa-star fa-2x"></i>
              {stops.map((stop, i) => {
                return (
                  <img className="cover" key={i} src={stop.location.picture}/>
                );
              }
              )}
            </div>
            <div className="textcontainer">
              <h2 className="tourhead">{name}</h2>
              <p className="tour-tile-text">{description}</p>
              {stops.map((stop, i) => {
                return (
                  <p key={i}>{stop.location.address}</p>
                );
              }
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Tour;