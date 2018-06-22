import React, { Component } from 'react';
// import Meta from "./meta";
import css from "./styles.scss";

import Meta from "./meta"
// import * as HeadActions from "../../actions/head";

// const meta = {
//   title: "Home",
//   description: "Home desc"
// };

class Home extends Component {
  // state = {
  //   name: ""
  // };

  render() {
    // const {name} = this.state;
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

  // componentDidMount() {
  //   // prop is taken from connect bind method
  //   console.log(this.props.changeMeta);
  //   this.props.changeMeta(meta);
  //   this.vkUser("210700286");
  // }

  // vkUser = (id) => {
  //   let target =`https://api.vk.com/method/users.get?user_ids=${id}&access_token=${this.vk.token}&v=${this.vk.version}`;

  //   fetch(this.vk.proxy + target)
  //   .then(res => res.json())
  //   .then(user => {
  //     let {first_name, last_name} = user.response[0];
  //     this.props.changeMeta({title: `${meta.title} ${first_name} ${last_name}`});
  //   });
  // };

  // vk = {
  //   proxy: "https://cors-anywhere.herokuapp.com/",
  //   token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
  //   version: "5.80"
  // };
}

export default Home;

// export default connect(
//   null,
//   (dispatch) => ({
//     changeMeta: bindActionCreators(HeadActions.changeMeta, dispatch)
//   })
// )(Home);
