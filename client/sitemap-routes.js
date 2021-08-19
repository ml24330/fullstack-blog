import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
export default (
    <Router>
        <Switch>
          <Route path="/" exact/>
          <Route path="/404" exact />
          <Route path="/about" exact />
          <Route path="/sponsors" exact />
          <Route path="/partners" exact />
          <Route path="/authors" exact />
          <Route path="/author/:name" exact />
          <Route path="/prizewinners" exact />
          <Route path="/category/:cat" exact />
          <Route path="/submissions" exact />
          <Route path="/privacy" exact />
          <Route path="/:year/:month/:title" exact />
        </Switch>
    </Router>
);