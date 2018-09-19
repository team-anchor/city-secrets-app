import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from '../header/Header';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import Results from '../tours/Results';

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
            <Header onSearch={this.handleSearch}/>
          </header>
          
          <main>
            {checkedAuth &&
              <Switch>
                <Route exact path="/"/>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/search" component={Results}/>
                <Route exact path="/about"/>
                <Route exact path="/profile"/>
                <Redirect to="/"/>
              </Switch>
            }
          </main>
          <Home />
    
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);