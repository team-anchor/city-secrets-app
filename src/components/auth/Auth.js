import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signin, signup } from './actions';
// import { getUser } from './reducers';
import Credentials from './Credentials';

class Auth extends PureComponent {
  render() { 
    return (
      <div>
        <h2>Auth Component</h2>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <section>
              <p>Not a user? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit/>
            </section>
          )}/>
          <Route path="/auth/signup" render={() => (
            <section>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit/>
            </section>
          )}/>
          <Redirect to="/auth/signin"/>
        </Switch>
      </div>
    );
  }
}
 
export default Auth;