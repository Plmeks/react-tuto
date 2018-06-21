import HeadActions from "../actions/head";

const initState = {
    title: "",
    description: ""
};

export default (state = initState, action) => {
    switch(action.type) {
        case HeadActions.CHANGE_META:
            return {...state, ...action.payload};
    }
    return state;
}