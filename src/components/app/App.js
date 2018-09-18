import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Auth from '../auth/Auth';
import Results from '../tours/Results';

class App extends Component {

  render() {
    
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/"/>
              <Route path="/auth" component={Auth}/>
              <Route exact path="/search" component={Results}/>
              <Route exact path="/about"/>
              <Route exact path="/profile"/>
              <Redirect to="/"/>
            </Switch>
          </main>
    
        </div>
      </Router>
    );
  }
}

export default App;