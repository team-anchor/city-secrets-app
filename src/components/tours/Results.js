import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';
import ToursResults from './ToursResults';
import { search as searchTours } from '../../services/toursApi';
import Search from '../search/Search';
import styles from './Results.css';

class Results extends Component {

  state = {
    tours: null,
    loading: false,
    error: null
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchTours();
  }

  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch !== this.searchTerm) this.searchTours();
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchTours() {
    const search = this.searchTerm;
    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });
    
    searchTours({ search })
      .then(
        (tour) => {
          this.setState({ tours: tour });
        },
        err => {
          this.setState({ error: err.message });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {

    const { tours, loading, error } = this.state;
    const { searchTerm } = this;

    return (
      <section className="mlist">
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }
        <div className={styles.results}>
          <div className="search-term">
            {searchTerm && 
            <Fragment>
              <h3>We found these <strong>CitySecrets</strong> in &ldquo;{searchTerm}&rdquo;</h3>
            </Fragment>
            }
          </div>

          <section className="onpage-search-container">
            <Route component={Search}/>
          </section>

          <div className="results-container">
            {tours 
              ? <ToursResults tours={tours}/>
              : <h1>We don&lsquo;t have anything yet for {searchTerm}. Please try again.</h1>
            }
          </div>
        </div>
      </section>
      
    );
  }
}
export default Results;