import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';
import Logo from '../../assets/Logo.png';
import styles from './Auth.css';

class Auth extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    location: PropTypes.object
  };
  
  render() {
    const { user, signin, signup, location } = this.props;
    const redirect = location.state ? location.state.from : '/tours';
    if(user) return <Redirect to={redirect}/>;
    
    return (
      <div className={styles.auth}>
        <div className="splash-page">
          <div className="headline-container">
            <img src={Logo} />
            <h1>CitySecrets</h1>
            <h2>Discover what surrounds you!<br />Curated walks to discover secrets in cities around the world.</h2>
         
            <div className="auth">
              <Switch>
                <Route path="/auth/signin" component={() => (
                  <section className="contents">
                    <Credentials action="Sign In" submit={signin}/>
                    <p>Not a user?&nbsp;&nbsp;<Link to="/auth/signup"> Sign Up</Link></p>
                  </section>
                )}/>
                <Route path="/auth/signup" render={() => (
                  <section className="contents">
                    <Credentials action="Sign Up" submit={signup} allowName={true}/>
                    <p>Already have an account?&nbsp;&nbsp;<Link to="/auth/signin"> Sign In</Link></p>
                  </section>
                )}/>
                <Redirect to="/auth/signin"/>
              </Switch>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state)
  }),
  { signup, signin }
)(Auth);