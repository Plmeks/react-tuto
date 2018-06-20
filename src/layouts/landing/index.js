import React, {Component} from "react";

import Router from "../../router/Router"
import Head from "./head";
import Body from "./body";
import Navigation from "../../components/navigation/";
import Footer from "../../components/footer/";

class Landing extends Component {
    state = {
        meta: null
    };
    
    changeMeta = ({meta, links, scripts}) => {
        this.setState({
            meta,
            links,
            scripts
        });
    }

    render() {
        let {meta, links, scripts} = this.state;
        return(
            <React.Fragment>
                <Head>
                    {meta}
                    {links}
                </Head>
                <Body>
                    <Navigation />
                    <Router changeMeta={this.changeMeta}/>
                    <Footer />
                    {scripts}
                </Body>
            </React.Fragment>
        );
    }
}

export default Landing;

