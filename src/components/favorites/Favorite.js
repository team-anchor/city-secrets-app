import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Favorite.css';

export default class Tour extends Component {

  static propTypes = {
    tour: PropTypes.object.isRequired
  };

  render() {
    const { tour } = this.props;
    const { id, name, featured_image } = tour;

    return (
      <div>
        <li className={styles.favorite}>
          <Link to={`/tours/${id}`}>
            <img src={featured_image}/>
            <p><strong>{name}</strong></p>
          </Link>
        </li>
      </div>
    );
  }
}