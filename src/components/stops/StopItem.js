import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class StopItem extends Component {
  static propTypes = {
    stop: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { stop, onEdit, remove } = this.props;

    return (
      <section>
        <p>{stop.address}</p>
        <p>{stop.picture}</p>
        <p>{stop.caption}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={() => remove(stop)}>Delete</button>
      </section>
    );
  }
}

export default connect(
  null,
  { remove }
)(StopItem);