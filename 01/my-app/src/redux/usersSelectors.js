export const getUsersSelector = (state) => {
    return state.usersModul.users
}
export const getPageSizeSelector = (state) => {
    return state.usersModul.pageSize
}
export const getTotalUsersCountSelector = (state) => {
    return state.usersModul.totalUsersCount
}
export const getCurrentPageSelector = (state) => {
    return state.usersModul.currentPage
}
export const getIsFitchingSelector = (state) => {
    return state.usersModul.isFitching
}
export const getFollowingInProgressSelector = (state) => {
    return state.usersModul.followingInProgress
}

