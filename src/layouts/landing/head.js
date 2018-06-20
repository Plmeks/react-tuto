import React from "react";

export default(props) => (
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="stylesheet" href="bower_components/bootstrap/css/bootstrap.min.css" /> */}
        {props.children}
    </head>
);

