import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import FormControl from '../shared/FormControl';
import { addTour } from './actions';
import styles from './AddTour.css';

class AddTour extends PureComponent {
  state = {
    name: '',
    description: '',
    city: '',
    tourimage: '',
    submitted: false,
    files: []
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
    this.setState({ name: '', description: '', city: '', tourimage: '', submitted: true });
  };

  handleDrop = files => {
    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'vv8z3otc');
      formData.append('api_key', '739535691895774');

      return axios.post('https://api.cloudinary.com/v1_1/dkbja8aak/image/upload', formData, {
        headers: { 'X-Requested-with': 'XMLHttpRequest' },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url;
        this.setState({ tourimage: fileURL });
      });
    });

    axios.all(uploaders).then(() => {});
  };

  render() {
    const { name, description, city, submitted, tourimage } = this.state;
    if(submitted) return <Redirect to="/tours"/>;

    return (
      <section className={styles.addtour}>
        <div className="add-tour-form-container">
          <h1>Share a tour</h1>
          <div className="add-tour-form">
            <form onSubmit={this.handleAdd}>
              <FormControl label="Name of tour">
                <input name="name" value={name} onChange={this.handleChange}/>
              </FormControl>

              <FormControl label="Description">
                <input name="description" value={description} onChange={this.handleChange}/>
              </FormControl>

              <FormControl label="City">
                <input name="city" value={city} onChange={this.handleChange}/>
              </FormControl>
      
              <Dropzone className="Dropzone"
                onDrop={this.handleDrop}
                multiple
                accept="image/*"
              >
                <p className="p">Drop your files here or click here to upload</p>
              </Dropzone>

              <p className="p">Add a featured image of your choice by uploading an image above.</p>
              <p className="p">Alternatively, paste a URL image link below.</p>

              <FormControl label="Featured Image">
                <input name="tourimage" value={tourimage} onChange={this.handleChange}/>
              </FormControl>
              <p>
                <button type="submit">Add</button>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
 
export default connect(
  null,
  { addTour }
)(AddTour);