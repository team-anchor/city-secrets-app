import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Tour extends Component {

    static propTypes = {
      tour: PropTypes.object.isRequired
    };

    render() {
      const { tour } = this.props;
      const { name, description, id, stops } = tour;

      return (
        <li>
          <Link to={`/tours/${id}`}>
            {stops.map((stop, i) => {
              return (
                <p key={i}>{stop.location.picture}</p>
              );
            }
            )}
            <p><strong>{name}</strong> ({description})</p>
            {stops.map((stop, i) => {
              return (
                <p key={i}>{stop.location.address}</p>
              );
            }
            )}
          </Link>
        </li>
      );
    }
}