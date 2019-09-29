import {authAPI} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FITCHING = 'TOGGLE_IS_FITCHING';

let initialState = {

    userId: null,
    login: null,
    email: null ,
    isAuth: false,
    isFitching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        
        case TOGGLE_IS_FITCHING: {
            return { ...state, isFitching: action.isFitching }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: {userId, login, email}})
export const toggleIsFitching = (isFitching) => ({ type: TOGGLE_IS_FITCHING, isFitching })
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;