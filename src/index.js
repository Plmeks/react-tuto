import React from 'react';
import ReactDOM from 'react-dom';
// import Router from "./router/Router";
import Landing from "./layouts/landing/";
import {Provider} from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
    <Provider store={Store}>
        <Landing />
    </Provider>, 
    document.documentElement
);
