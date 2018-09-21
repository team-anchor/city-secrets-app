import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import FormControl from '../shared/FormControl';
import { addStop } from './actions';

class StopForm extends PureComponent {
  state = {
    address: '',
    picture: '',
    caption: ''
  };

  static propTypes = {
    stop: PropTypes.object,
    tourid: PropTypes.string,
    addStop: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { stop } = this.props;
    if(!stop) return;
    this.setState(stop);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { addStop, tourid } = this.props;
    event.preventDefault();
    addStop(tourid, this.state);
    this.setState({ address: '', picture: '', caption: '' });
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
        this.setState({ picture: fileURL });
      });
    });

    axios.all(uploaders).then(() => {});
  };

  render() {
    const { address, picture, caption } = this.state;
    const { onCancel, stop } = this.props;

    return (
      <section>
        <h2>Add a stop</h2>
        <form onSubmit={this.handleSubmit}>
          <FormControl label="Address">
            <input name="address" value={address} onChange={this.handleChange}/>
          </FormControl>

          <Dropzone
            onDrop={this.handleDrop}
            multiple
            accept="image/*"
          >
            <p>Drop your files here or click here to upload</p>
          </Dropzone>

          <p>Add a featured image of your choice by uploading an image above.</p>
          <p>Alternatively, paste a URL image link below.</p>

          <FormControl label="picture">
            <input name="picture" value={picture} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="Caption">
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
 
export default connect(
  null,
  { addStop }
)(StopForm);