import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FITCHING = 'TOGGLE_IS_FITCHING';

let initialState = {

    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFitching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...action.payload
            }

        case TOGGLE_IS_FITCHING: {
            return { ...state, isFitching: action.isFitching }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        { userId, email, login, isAuth }
})
export const toggleIsFitching = (isFitching) => ({ type: TOGGLE_IS_FITCHING, isFitching })
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;