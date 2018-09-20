/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTour } from '../../services/toursApi';
import styles from './TourDetail.css';

export default class TourDetail extends Component {
  state = {
    tour: null, 
    favorite: null
  };

  static propTypes = {
    match: PropTypes.array
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props.match);
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
    console.log(tour);

    return (
      <div className={styles.tourDetail}>
        <h1>{name}</h1>
        <p><strong>Description: </strong>{description}</p>
        {stops.map((stop, i) => {
          return (
            <div key={i}>
              <img className="covers" key={i} src={stop.picture}/>
              <p key={i}>{stop.address}</p>
            </div>
          );
        }
        )}
      </div>
    );
  }
}
