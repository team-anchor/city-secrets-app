import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from '../header/Header';
import Auth from '../auth/Auth';

class App extends Component {
  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          
          <main>
            {checkedAuth &&
              <Switch>
                <Route exact path="/"/>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/search"/>
                <Route exact path="/about"/>
                <Route exact path="/profile"/>
                <Redirect to="/"/>
              </Switch>
            }
          </main>
    
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);