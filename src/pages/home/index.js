import React, { Component } from 'react';
import {Meta, Links, Scripts} from "./meta";
import css from "./styles.scss";

class Home extends Component {
  state = {
    name: ""
  };

  render() {
    const {name} = this.state;
    return (
      <React.Fragment>
        {/* <Meta name={name}/> */}
        <div className={css.home}>
          <h2>Home</h2>
          <p className={css.title}>Title</p>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.changeMeta({
      meta: <Meta />,
      links:  <Links />,
      scripts: <Scripts />
    })
    // this.vkUser("210700286");
  }

  vkUser = (id) => {
    let target =`https://api.vk.com/method/users.get?user_ids=${id}&access_token=${this.vk.token}&v=${this.vk.version}`;

    fetch(this.vk.proxy + target)
    .then(res => res.json())
    .then(user => {
      let {first_name, last_name} = user.response[0];
      this.props.changeMeta(<Meta name={first_name + last_name}/>)
      // this.setState({
      //   name: `${first_name} ${last_name}`
      // });
    });
  };

  vk = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
    version: "5.80"
  };
}

export default Home;
