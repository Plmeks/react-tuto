import React, { Component } from 'react';
import Meta from './meta';

class About extends Component {
  componentDidMount() {
    this.props.changeMeta({
      meta: <Meta />
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>About</h2>
      </React.Fragment>
    );
  }
}

export default About;
