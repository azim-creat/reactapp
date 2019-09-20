import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import * as axios from 'axios';




/*        000000000000000000000000     */
class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotlaUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render(){
        return(
            <Users totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            onPageChanged = {this.onPageChanged}
            />
        )
    }

}
/*        000000000000000000000000     */
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
        setTotlaUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);