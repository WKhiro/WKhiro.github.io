import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} /> // Checks all pages we have, then goes to a 404 error page if there is no match
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
