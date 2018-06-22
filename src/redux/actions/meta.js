export const CHANGE_META = "CHANGE_META";

// export const changeMeta = (payload) => ({
//     type: CHANGE_META,
//     payload
// });

export const changeMeta = (payload) => {
    return (dispatch) => {
        vkUser("1")
        .then(user => {
            const {first_name, last_name} = user;
            console.log(user);
            dispatch({
                type: CHANGE_META,
                payload: {
                    ...payload,
                    title: `${payload.title} ${first_name} ${last_name}`,
                }
            });
        });
    }
};

export const FETCH_META_TITLE = "FETCH_META_TITLE";

export const fetchMetaTitle = (dispatch) => {
    return () => {}
};

const vk = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
    version: "5.80"
};

const vkUser = (id) => {
    let target =`https://api.vk.com/method/users.get?user_ids=${id}&access_token=${vk.token}&v=${vk.version}`;
    
    return new Promise((resolve, reject) => {
        fetch(vk.proxy + target)
        .then(res => res.json())
        .then(user => {
            
            resolve(user.response[0]);
            // this.props.changeMeta({title: `${meta.title} ${first_name} ${last_name}`});
        });
    })
};
