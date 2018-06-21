import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NotFound from "../pages/notFound/index";
import Home from "../pages/home/";
import About from "../pages/about/";

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Router;
