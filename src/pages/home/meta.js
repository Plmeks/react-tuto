import React, { Component } from 'react';
// import Meta from "./meta";
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
    // this.props.fetchMetaTitle();
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export default connect(
  null,
  // (dispatch) => {
  //   return {
  //     changeMeta: (args) => dispatch(MetaActions.changeMeta(dispatch, args))
  //   };
  // }
  (dispatch) => ({
    changeMeta: bindActionCreators(MetaActions.changeMeta, dispatch),
    fetchMetaTitle: bindActionCreators(MetaActions.fetchMetaTitle, dispatch)
  })
)(Meta);
