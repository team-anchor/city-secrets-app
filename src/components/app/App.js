import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Auth from '../auth/Auth';
import Results from '../tours/Results';
import AddTour from '../tours/AddTour';
import TourDetail from '../tours/TourDetail';
import Tours from '../tours/Tours';

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
        <div className="wrapper">

          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
          
          <main>
            {checkedAuth &&
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <PrivateRoute exact path="/search" component={Results}/>
                <Route exact path="/about" component={About}/>
                <PrivateRoute exact path="/tour/:id" component={TourDetail}/>   
                <PrivateRoute exact path="/tours" component={Tours}/>
                <PrivateRoute exact path="/add" component={AddTour}/>
                <PrivateRoute exact path="/profile"/>
                <Redirect to="/auth/signin"/>
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