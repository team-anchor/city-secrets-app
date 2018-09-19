/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTours } from '../../services/toursApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';
import styles from './TourDetail.css';

export default class TourDetail extends Component {

  state = {
    tour: null, 
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getTours(id)
      .then(tour => {
        this.setState({ tour });
      })
      .catch(console.log);

    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { tour, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(tour.id)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.tour)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { tour, favorite } = this.state;
    if(!tour) return null;

    const { name, description } = tour;

    return (
      <div className={styles.tourDetail}>
        <img />
        <h2>{name}</h2>
        <p><strong>Location:</strong></p>
        <p><strong>description:</strong> {description}</p>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove from' : 'Add to' } Favorites
        </button>
      </div>
    );
  }
}
