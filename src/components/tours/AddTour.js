import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '../shared/FormControl';
import { addTour } from './actions';
import styles from './AddTour.css';

class AddTour extends PureComponent {
  state = {
    name: '',
    description: '',
    city: '',
    tourimage: ''
  };

  static propTypes = {
    addTour: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    const { addTour } = this.props;
    addTour(this.state);
    this.setState({ name: '', description: '', city: '', tourimage: '' });
  };

  render() {
    const { name, description, city, tourimage } = this.state;

    return (
      <section className={styles.AddTour}>
        <h2>Share a tour</h2>
        <form onSubmit={this.handleAdd}>
          <FormControl label="Name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="Description">
            <input name="description" value={description} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="City">
            <input name="city" value={city} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="Featured Image">
            <input name="tourimage" value={tourimage} onChange={this.handleChange}/>
          </FormControl>
          <p>
            <button type="submit">Add</button>
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