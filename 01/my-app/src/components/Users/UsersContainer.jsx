import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotlaUsersCount, toggleIsFitching } from '../../redux/usersReducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFitching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{whithCredentials: true})
            .then(response => {
                this.props.toggleIsFitching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotlaUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFitching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{whithCredentials: true})
           
        .then(response => {
       
                this.props.toggleIsFitching(false);
                this.props.setUsers(response.data.items);
               
            });
    }

    render(){
        return<>
            {this.props.isFitching ? <Preloader/>: null}
            <Users totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            onPageChanged = {this.onPageChanged}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersModul.users,
        pageSize: state.usersModul.pageSize,
        totalUsersCount: state.usersModul.totalUsersCount,
        currentPage: state.usersModul.currentPage,
        isFitching: state.usersModul.isFitching
    }
}


export default connect(mapStateToProps, { follow, setUsers, unfollow, setCurrentPage, setTotlaUsersCount, toggleIsFitching})(UsersContainer);