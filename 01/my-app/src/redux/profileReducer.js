import { profileAPI, usersAPI } from '../api/api'

let initialithation = {
    profileInfo: {
        profileImg: 'path to img',
        firstName: 'Azim',
        lastName: 'Azimov',
        rang: 'student of Bachalor'
    },


    profile: null,
    status: ""
};

const TITLE_ONCH = 'TITLE_ONCH';
const TEXT_ONCH = 'TEXT_ONCH';
const PUBLISH_POST = 'PUBLISH_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


export const titleOnchanged = (titleOnchanged) => ({ type: TITLE_ONCH, titleOnchanged });
export const textOnchanged = (textOnchanged) => ({ type: TEXT_ONCH, textOnchanged });
export const publishPost = () => ({ type: PUBLISH_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


const profileReducer = (state = initialithation, action) => {
    switch (action.type) {
        case TITLE_ONCH:
            return { ...state, inputedTitle: action.titleOnchanged }

        case TEXT_ONCH:
            return { ...state, inputedText: action.textOnchanged }

        case PUBLISH_POST:
            let newTitle = state.inputedTitle;
            let newText = state.inputedText;
            return {
                ...state,
                inputedTitle: '',
                inputedText: '',
                myPosts: [...state.myPosts, { id: 99, title: newTitle, text: newText, vievCount: 0 }]

            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export default profileReducer;
