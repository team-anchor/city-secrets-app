import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stop from './Stop';
import StopForm from './StopForm';

class Stops extends Component {
  static propTypes = {
    stops: PropTypes.array,
    tourId: PropTypes.string.isRequired
  };

  render() {
    const { stops, tourId } = this.props;

    return (
      <section>
        <section>
          <StopForm onComplete={this.handleAdd} tourId={tourId}/>
        </section>

        {stops &&
          <ul>
            {stops.map(stop => (
              <Stop
                key={stop._id}
                stop={stop}
              />
            ))}
          </ul>
        }
      </section>
    );
  }
}

export default Stops;