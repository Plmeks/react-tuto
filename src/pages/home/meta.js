import React from 'react';
// import MetaTags from 'react-meta-tags';

const Meta = (props) => (
  <React.Fragment>
    <title>Home {props.name}</title>
    {/* <title>Homes</title> */}
    <meta name="description" content="Home description." />
    <meta property="og:title" content="Home app" />
    <meta property="og:image" content="path/to/image.jpg" />
  </React.Fragment>
);

const Scripts = () => (
  <React.Fragment>
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <script src="bower_components/popper.js/dist/popper.min.js"></script>
        <script src="bower_components/bootstrap/js/bootstrap.min.js"></script>
  </React.Fragment>
);

const Links = () => (
  <React.Fragment>
    <link rel="stylesheet" href="bower_components/bootstrap/css/bootstrap.min.css" />
  </React.Fragment>
);

export {Meta, Links, Scripts};

// import React from 'react';

// export default (props) => (
//   <React.Fragment>
//     <title>Home {props.name}</title>
//     <meta name="description" content="Home description." />
//     <meta property="og:title" content="Home app" />
//     <meta property="og:image" content="path/to/image.jpg" />
//   </React.Fragment>
// );

