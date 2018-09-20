import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTourList } from './reducers';
import { loadTours } from './actions';
import Tour from './Tour';
import AddTour from './AddTour';
import styles from './Tours.css';

class Tours extends Component {

  static propTypes = {
    loadTours: PropTypes.func.isRequired,
    tours: PropTypes.array
  };

  componentDidMount() {
    this.props.loadTours();
  }

  render() {
    const { tours } = this.props;
    return (
      <div>
        <AddTour/>
        <ul className={styles.tours}>

          {tours.map((tour, i) => (
            <Tour key={i} tour={tour}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ tours: getTourList(state) }),
  { loadTours }
)(Tours);