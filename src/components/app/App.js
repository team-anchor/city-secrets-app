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
import TourDetail from '../tours/TourDetail';
import Tours from '../tours/Tours';
import Favorites from '../favorites/Favorites';


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
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route exact path="/search" component={Results}/>
                <Route exact path="/about"/>
                <Route exact path="/tours/:id" component={TourDetail}/>   
                <Route exact path="/tours" component={Tours} />
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