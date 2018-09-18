import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class Credentials extends PureComponent {
  state = {
    name: '',
    email: '',
    password: ''
  };
  
  render() {
    const { name, email, password } = this.state;

    return (
      <form>
        <FormControl label="name">
          <input name="name" value={name}/>
        </FormControl>

        <FormControl label="email">
          <input name="email" value={email}/>
        </FormControl>

        <FormControl label="password">
          <input name="password" value={password}/>
        </FormControl>

        <button>Test</button>
      </form>
    );
  }
}
 
export default Credentials;