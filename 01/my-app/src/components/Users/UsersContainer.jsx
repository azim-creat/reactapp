import React from 'react'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotlaUsersCount, toggleIsFitching } from '../../redux/usersReducer'
import {userAPI} from '../../api/api'



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFitching(true);
        
        userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFitching(false);
                this.props.setUsers(data.items);
                this.props.setTotlaUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFitching(true);
        this.props.setCurrentPage(pageNumber);
        
        userAPI.setPage(pageNumber,this.props.pageSize)
        .then(data => {
       
                this.props.toggleIsFitching(false);
                this.props.setUsers(data.items);
               
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