import { usersAPI, followAPI } from '../api/api'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FITCHING = 'TOGGLE_IS_FITCHING';
const TOGGLE_PROGRESS_OF_FOLLOWING = 'TOGGLE_PROGRESS_OF_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFitching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FITCHING: {
            return { ...state, isFitching: action.isFitching }
        }
        case TOGGLE_PROGRESS_OF_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFitching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotlaUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFitching = (isFitching) => ({ type: TOGGLE_IS_FITCHING, isFitching })
export const toggleProgressOfFollowing = (isFitching, userId) => ({ type: TOGGLE_PROGRESS_OF_FOLLOWING, isFitching, userId })


export const getUser = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFitching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFitching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotlaUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgressOfFollowing(true, userId))
        followAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleProgressOfFollowing(false, userId))
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgressOfFollowing(true, userId))
        followAPI.unfollow(userId)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleProgressOfFollowing(false, userId))
            });
    }
}

export default usersReducer;