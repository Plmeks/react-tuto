import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

 class Head extends React.Component {
     render() {
         const {title, description} = this.props.HeadReducer;
         return(
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="manifest" href="/manifest.json" />

                <title>{title}</title>
                <meta property="og:description" content={description} />
            </head>
         );
     };
}

export default connect(
    (state) => state
)(Head);

