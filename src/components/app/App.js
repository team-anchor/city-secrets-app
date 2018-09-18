import React, { Component } from 'react';
import { BrowserRouter as  Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';



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
              <Route exact path="/search"/>
              <Redirect to="/"/>
            </Switch>
          </main>
    
        </div>
      </Router>
    );
  }
}

export default App;