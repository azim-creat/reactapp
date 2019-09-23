let initialithation = {
    profileInfo: {
        profileImg: 'path to img',
        firstName: 'Azim',
        lastName: 'Azimov',
        status: 'I am learnig programming',
        rang: 'student of Bachalor'
    },

    myPosts: [
        { id: 1, title: 'It is first Title', text: 'There is a plase for txt of this post', vievCount: 12 },
        { id: 1, title: 'It is second Title', text: 'There is a plase for txt of this post', vievCount: 72 },
        { id: 1, title: 'It is therd Title', text: 'There is a plase for txt of this post', vievCount: 75 },
        { id: 1, title: 'It is forth Title', text: 'There is a plase for txt of this post', vievCount: 14 },
        { id: 1, title: 'It is fiveth Title', text: 'There is a plase for txt of this post', vievCount: 1 }
    ],
    profile: null,
    inputedTitle: '',
    inputedText: ''
};

const TITLE_ONCH = 'TITLE_ONCH';
const TEXT_ONCH = 'TEXT_ONCH';
const PUBLISH_POST = 'PUBLISH_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export const titleOnchanged = (titleOnchanged) => ({ type: TITLE_ONCH, titleOnchanged });
export const textOnchanged = (textOnchanged) => ({ type: TEXT_ONCH, textOnchanged });
export const publishPost = () => ({ type: PUBLISH_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

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
        default:
            return state;
    }
};

export default profileReducer;
