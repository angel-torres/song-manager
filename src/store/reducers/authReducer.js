import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    LOG_IN,
    LOG_IN_SUCCESS,
    INVALID_CREDENTIALS,
    PROVIDE_CREDENTIALS,
    LOG_OUT,
    FETCH_POEMS,
    FETCH_POEMS_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    LIKE,
    LIKE_SUCCESS,
    ADD_COMMENT_SUCCESS
} from '../actions';

const initialState = {
    user: {},
    allPoems: [],
    loggingIn: false,
    signingUp: false,
    isSignedUp: false,
    isLoggedIn: false,
    isFetchingPoems: false,
    validCredentials: true,
    token: localStorage.getItem('token'),
    isFetchingUserInView: false,
    userInView: {}
}

export const authReducer = (state = initialState, action) => {
    console.log(action.type, action.payload)
    switch (action.type) {
        case SIGN_UP:
            return { ...state, signingUp: true };
        case SIGN_UP_SUCCESS:
            return { ...state, isSignedUp: true, signingUp: false };
        case LOG_IN:
            return {
                ...state,
                loggingIn: true,
                isSignedUp: false,
                validCredentials: true,
            }
        case INVALID_CREDENTIALS:
            return {
                ...state,
                loggingIn: false,
                validCredentials: false,
            }
        case PROVIDE_CREDENTIALS:
            return {
                ...state,
                validCredentials: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true,
                passwordsMatch: true,
                isSignedUp: false,
                validCredentials: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                allPoems: [],
            }
        case FETCH_USER:
            return {
                ...state,
                isFetchingUserInView: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userInView: action.payload,
                isFetchingUserInView: false,
            }

        case FETCH_POEMS:
            return { ...state, isFetchingPoems: true }
        case FETCH_POEMS_SUCCESS:
            return { ...state, isFetchingPoems: false, allPoems: action.payload };
        case ADD_COMMENT_SUCCESS:
            return { ...state, allPoems: action.payload };
        case LIKE:
            return { ...state }
        case LIKE_SUCCESS:
            return { ...state }
        default:
            return state
    }
}