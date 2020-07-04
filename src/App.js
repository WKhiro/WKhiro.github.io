import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Blog } from './Blog';
import { Projects } from './Projects';
import Gaming from './Gaming';
import { NoMatch } from './NoMatch';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/gaming" component={Gaming} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
