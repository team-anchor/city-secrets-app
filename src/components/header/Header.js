import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import Search from '../search/Search';
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
          {user && <span>Logged in as {user.user.email}</span>}
          <nav className="topnav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {user &&
                <li>
                  <NavLink to="/profile">Profile</NavLink>
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
          <section className="search-container">
            <Route component={Search}/>
          </section>
        </section>

        

      </div>
    );
  }

}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);