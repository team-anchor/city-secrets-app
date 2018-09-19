import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Tour extends Component {

    static propTypes = {
      tour: PropTypes.object.isRequired
    };

    render() {
      const { tour } = this.props;
      const { name, description, featured_image, id, stops } = tour;
      console.log('*** TOUR STOPS ***', tour.stops);

      return (
        <li>
          <Link to={`/tours/${id}`}>
            {featured_image !== 'N/A'
              ? <img src={featured_image}/>
              : <img src='https://www.nationalpetregister.org/assets/img/no-photo.jpg'/>}
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