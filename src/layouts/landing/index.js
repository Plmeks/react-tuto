import React, {Component} from "react";

import Router from "../../router/Router"
import Head from "./head";
import Body from "./body";
import Navigation from "../../components/navigation/";
import Footer from "../../components/footer/";

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Head />
                <Body>
                    <Navigation />
                    <Router />
                    <Footer />
                </Body>
            </React.Fragment>
        );
    }
}

export default Landing;

