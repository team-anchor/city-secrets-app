import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class StopForm extends PureComponent {
  state = {
    address: '',
    picture: '',
    caption: ''
  };

  static propTypes = {
    stop: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { stop } = this.props;
    if(!stop) return;
    this.setState(stop.location);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ address: '', picture: '', caption: '' });
  };

  render() {
    const { address, picture, caption } = this.state;
    const { onCancel, stop } = this.props;

    return (
      <section>
        <h2>Add a stop</h2>
        <form onSubmit={this.handleAdd}>
          <FormControl label="address">
            <input name="address" value={address} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="picture">
            <input name="picture" value={picture} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="caption">
            <input name="caption" value={caption} onChange={this.handleChange}/>
          </FormControl>
          <p>
            <button type="submit">{stop ? 'Update' : 'Add'}</button>
            {stop && <button type="button" onClick={onCancel}>Cancel</button>}
          </p>
        </form>
      </section>
    );
  }
}
 
export default StopForm;