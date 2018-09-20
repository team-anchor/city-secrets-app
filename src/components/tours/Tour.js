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
    const { name, description } = tour;
    return (
      <div className={styles.Tour}>
        <li>
          <h3><strong>{name}</strong> ({description})</h3>
          <Stops
            tourId={tour._id}
          />
        </li>
      </div>
    );
  }
}

export default Tour;