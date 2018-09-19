import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tour from './Tour';
import styles from './Tours.css';

export default class Tours extends Component {

  static propTypes = {
    tours: PropTypes.arrayOf(Object)
  };

  render() {
    const { tours } = this.props;

    return (
      <ul className={styles.tours}>

        <Tour />
        {/* {tours.map((tour, i) => (
          <Tour key={i} tour={tour}/>
        ))} */}
      </ul>
    );
  }
}
