import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tour from './Tour';
// import AddTour from './AddTour';
import styles from './Tours.css';

export default class Tours extends Component {

  static propTypes = {
    tours: PropTypes.arrayOf(Object)
  };

  render() {
    const { tours } = this.props;

    return (
      <div>
        {/* <AddTour/> */}
        <ul className={styles.tours}>
          {tours.map((tour, i) => (
            <Tour key={i} tour={tour}/>
          ))}
        </ul>
      </div>
    );
  }
}