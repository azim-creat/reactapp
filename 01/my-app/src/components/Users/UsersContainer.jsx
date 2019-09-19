import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersModul.users,
        pageSize: state.usersModul.pageSize,
        totalUsersCount: state.usersModul.totalUsersCount,
        currentPage: state.usersModul.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber)); 
        },
        setTotlaUsersCount:(totalCount) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);