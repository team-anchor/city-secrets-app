import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StopForm from './StopForm';
import StopItem from './StopItem';
import { update } from './actions';

class Stop extends PureComponent {
  state = {
    editing: false
  };

  static propTypes = {
    stop: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = stop => {
    const { update } = this.props;
    update(stop);
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { stop } = this.props;
    
    return (
      <div>
        {editing
          ? <StopForm
            stop={stop}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <StopItem
            stop={stop}
            onEdit={this.handleEdit}
          />
        }
      </div>
    );
  }
}
 
export default connect(
  null,
  { update }
)(Stop);