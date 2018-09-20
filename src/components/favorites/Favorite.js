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
    const { _id, name, description } = tour;

    return (
      <div>
        <li className={styles.favorite}>
          <Link to={`/tours/${_id}`}>
            <p><strong>{name}</strong></p>
            <p><strong>{description}</strong></p>
          </Link>
        </li>
      </div>
    );
  }
}