/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getTourById } from '../../services/toursApi';
import { getTour } from '../../services/toursApi';
// import { loadTour } from './actions';
import Stops from '../stops/Stops';
import styles from './TourDetail.css';

export default class TourDetail extends Component {
  state = {
    tour: null, 
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getTour(id)
      .then(tour => {
        this.setState({ tour });
      })
      .catch(console.log);
  }
  
  render() {
    const { tour } = this.state;
    if(!tour) return null;

    const { name, description, stops } = tour;

    return (
      <div className={styles.tourDetail}>
        <h1>{name}</h1>
        <p><strong>description: </strong>{description}</p>
        {stops.map((stop, i) => {
          return (
            <div key={i}>
              <img className="covers" key={i} src={stop.picture}/>
              <p key={i + 1}>{stop.address}</p>
              <p key={i + 2}>{stop.caption}</p>
            </div>
          );
        }
        )}
        <Stops
          stops={tour.stops}
          tourId={tour._id}
        />
      </div>
    );
  }
}
