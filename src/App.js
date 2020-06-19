import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Blog } from './Blog';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route component={NoMatch} /> // Checks all pages we have, then goes to a 404 error page if there is no match
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
