import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NotFound from "../pages/notFound/index";
import Home from "../pages/home/";
import {Meta, Scripts} from "../pages/home/meta";
import About from "../pages/about/";

class Router extends Component {
  changeMeta = (value) => {
    this.props.changeMeta(value);
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <Home changeMeta={this.changeMeta}/>
            )} />
            <Route exact path="/about" render={() => (
              <About changeMeta={this.changeMeta}/>
            )} />
            <Route path="/contacts" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Router;
