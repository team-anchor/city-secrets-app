import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Tours from './Tours';
import { search as searchTours } from '../../services/toursApi';

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
    console.log('GET Tour', tours);

    return (
      <section className="mlist">
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }

        {searchTerm && 
          <Fragment>
            <p>Searching for &quot;{searchTerm}&quot;</p>
          </Fragment>
        }

        <div>
          {tours 
            ? <Tours tours={tours}/>
            : <h1>Please enter a tour name to get started</h1>
          }
        </div>
      </section>
    );
  }
}
export default Results;