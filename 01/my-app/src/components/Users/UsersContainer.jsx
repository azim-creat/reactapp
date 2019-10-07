import React from 'react'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { connect } from 'react-redux'
import { getUser,follow,unfollow,setCurrentPage,toggleProgressOfFollowing } from '../../redux/usersReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUser(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFitching ? <Preloader /> : undefined}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                toggleProgressOfFollowing={this.props.toggleProgressOfFollowing}
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
        isFitching: state.usersModul.isFitching,
        followingInProgress: state.usersModul.followingInProgress,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleProgressOfFollowing, getUser })
)(UsersContainer)