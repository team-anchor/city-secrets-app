import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import HeaderLogo from '../../assets/header-logo.png';
import styles from './Header.css';

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
              {user &&
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              }
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
          <div className="logo-container"><img src={HeaderLogo} /></div>

        </section>

      </div>
    );
  }

}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);