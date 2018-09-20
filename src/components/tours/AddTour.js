import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '../shared/FormControl';
import { addTour } from './actions';

class AddTour extends PureComponent {
  state = {
    key: null,
    name: '',
    description: ''
  };

  static propTypes = {
    addTour: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    const { addTour } = this.props;
    addTour(this.state);
    this.setState({ name: '', budget: '' });
  };

  render() {
    const { key, name, description } = this.state;
    const { onCancel } = this.props;

    return (
      <section>
        <h2>Share a tour</h2>
        <form onSubmit={this.handleAdd}>
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="description">
            <input name="description" value={description} onChange={this.handleChange}/>
          </FormControl>
          <p>
            <button type="submit">{ key ? 'Update' : 'Add' }</button>
            {key && <button type="button" onClick={onCancel}>Cancel</button>}
          </p>
        </form>
      </section>
    );
  }
}
 
export default connect(
  null,
  { addTour }
)(AddTour);