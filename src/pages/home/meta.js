import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as MetaActions from "../../redux/actions/meta";

const meta = {
  title: "Home",
  description: "Home desc"
};

class Meta extends Component {
  componentDidMount() {
    this.props.changeMeta(meta);
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    changeMeta: bindActionCreators(MetaActions.changeMeta, dispatch)
  })
)(Meta);
