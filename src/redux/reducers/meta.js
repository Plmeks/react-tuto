import * as MetaActions from "../actions/meta";

const initState = {
    title: "",
    description: ""
};

export default (state = initState, action) => {
    switch(action.type) {
        case MetaActions.CHANGE_META: {
            console.log(action.payload);
            return {...state, ...action.payload};
        }
        default:
    }
    return state;
}