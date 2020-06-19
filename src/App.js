import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Blog } from './Blog';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Router basename="/Personal_Website">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
