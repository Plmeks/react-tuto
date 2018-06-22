import React, { Component } from 'react';
import css from "./styles.scss";

import Meta from "./meta"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Meta />
        <div className={css.home}>
          <h2>Home</h2>
          <p className={css.title}>Title</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;