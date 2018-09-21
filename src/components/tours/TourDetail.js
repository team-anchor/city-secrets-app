/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTourById } from './reducers';
// import { getTour } from '../../services/toursApi';
import { loadTour } from './actions';
import StopForm from '../stops/StopForm';
import styles from './TourDetail.css';

class TourDetail extends Component {
  state = {
    favorite: null
  };

  static propTypes = {
    loadTour: PropTypes.func,
    tour: PropTypes.object,
    match: PropTypes.object
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadTour(id);
  }

  render() {
    const { tour } = this.props;
    if(!tour) return null;
    const { name, description, stops } = tour;

    return (
      <div className={styles.tourDetail}>
        <div className="tour-detail">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="stops-container">
          {stops.map((stop, i) => {
            const searchAddress = encodeURIComponent(stop.address);
            return (
              <div className="stop-container-ind" key={i + 3}>
                <div>
                  <img className="covers" src={stop.picture}/>
                  <div className="stop-text-block">
                    <p className="des" key={i + 1}>{stop.caption}</p>
                  </div>
                  <p className="address" key={i + 2}>{stop.address}</p>
                  <span className="map-pin">
                    <i className="fas fa-map-marker-alt">&nbsp;</i>
                  </span>
                  <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${searchAddress}`}>View on Google Maps</a>
                </div>
              </div>
            );
          }
          )}
        </div>
        <StopForm tourid={tour._id}/>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ tour: getTourById(state, props.match.params.id) }),
  { loadTour }
)(TourDetail);