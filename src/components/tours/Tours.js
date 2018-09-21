import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tour from './Tour';
import { Route } from 'react-router-dom';
// import AddTour from './AddTour';
import styles from './Tours.css';
import { connect } from 'react-redux';
import { getTourList } from './reducers';
import { loadTours } from './actions';
import Search from '../search/Search';

class Tours extends Component {

  static propTypes = {
    loadTours: PropTypes.func.isRequired,
    tours: PropTypes.arrayOf(Object),
  };

  componentDidMount() {
    this.props.loadTours();
  }

  render() {
    const { tours } = this.props;

    return (
      <div>
        <div className={styles.tours}>
          <div className="all-tours-view">
            <h1>CitySecrets</h1>
            <h2>Browse or search for curated walks in your city, or cities around the world.</h2>
          </div>
          <section className="onpage-search-container">
            <Route component={Search}/>
          </section>

          <ul className="tours-container">
            {tours.map((tour, i) => (
              <Tour key={i} tour={tour}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ tours: getTourList(state) }),
  { loadTours }
)(Tours);