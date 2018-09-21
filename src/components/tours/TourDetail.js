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
        <StopForm tourid={tour._id}/>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ tour: getTourById(state, props.match.params.id) }),
  { loadTour }
)(TourDetail);