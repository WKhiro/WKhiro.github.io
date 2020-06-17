import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Jumbotron />
        <NavBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} /> // Checks all pages we have, then goes to a 404 error page if there is no match
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
