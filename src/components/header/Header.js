import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import HeaderLogo from '../../assets/header-logo.png';
import styles from './Header.css';
// import Search from '../search/Search';

class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { user, logout } = this.props;

    return (
      <div className={styles.header}>

        <section className="header-container">
          <nav className="topnav">
            <ul>
              {/* {user &&
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              } */}
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              
              {user &&
                <li>
                  <NavLink to="/tours">Tours</NavLink>
                </li>
              }
              {user &&
                <li>
                  <NavLink to="/add">Add Tour</NavLink>
                </li>
              }
              <li>
                {user
                  ? <NavLink to="/" onClick={logout}>Logout</NavLink>
                  : <NavLink to="/auth">Login</NavLink>
                }
              </li>
            </ul>
          </nav>
          {user && <span className="logged-in-name">Logged in as {user.user.name}</span>}
          {/* <section className="search-container">
            <Route component={Search}/>
          </section> */}
          <div className="logo-container">
            <NavLink to="/tours">
              <img src={HeaderLogo} /><span className="logo-container-text"> CitySecrets</span>
            </NavLink>
          </div>
        </section>
      </div>
    );
  }

}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);