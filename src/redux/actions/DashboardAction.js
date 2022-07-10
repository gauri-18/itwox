export const SET_POST_DATA = 'SET_POST_DATA';
export const SET_COMMENTS_DATA = 'SET_COMMENTS_DATA';

export const setPostData = (postData) => {
    return {
        type: SET_POST_DATA,
        postData
    }
}

export const setCommentsData = (commentsData) => {
    return {
        type: SET_COMMENTS_DATA,
        commentsData
    }
}