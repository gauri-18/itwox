import { SET_POST_DATA, SET_COMMENTS_DATA } from '../actions/DashboardAction';

const initialState = {
    posts: [],
    comments: []
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            return { ...state, posts: action.postData };
        case SET_COMMENTS_DATA:
            return { ...state, comments: action.commentsData };
        default:
            return state;
    }
};

export default dashboardReducer;
