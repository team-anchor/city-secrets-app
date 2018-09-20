import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStopsByTourId } from './reducers';
import { add } from './actions';
import Stop from './Stop';
import StopForm from './StopForm';

class Stops extends Component {
  static propTypes = {
    stops: PropTypes.array,
    tourId: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
  };

  handleAdd = stop => {
    const { tourId, add } = this.props;
    add(tourId, { ...stop });
  };

  render() {
    const { stops } = this.props;

    return (
      <section>
        <section>
          <h3>Add a stop</h3>
          <StopForm onComplete={this.handleAdd}/>
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
 
export default connect(
  (state, { tourId }) => ({
    stops: getStopsByTourId(state, tourId)
  }),
  { add }
)(Stops);