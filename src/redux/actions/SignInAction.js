export const CHANGE_USER_SIGN_IN_STATUS = 'CHANGE_USER_SIGN_IN_STATUS';

export const changeUserSignInStatus = (status) => {
    return {
        type: CHANGE_USER_SIGN_IN_STATUS,
        status
    };
}