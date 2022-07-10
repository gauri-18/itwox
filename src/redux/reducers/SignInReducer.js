import { CHANGE_USER_SIGN_IN_STATUS } from '../actions/SignInAction';

const initialState = {
    isSignedIn: false
};

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_SIGN_IN_STATUS:
            return { ...state, isSignedIn: action.status };
        default:
            return state;
    }
};

export default signInReducer;
