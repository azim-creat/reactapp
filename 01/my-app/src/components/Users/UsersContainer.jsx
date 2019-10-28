import React from 'react'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { connect } from 'react-redux'
import { getUser,follow,unfollow,setCurrentPage,toggleProgressOfFollowing } from '../../redux/usersReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {compose} from "redux";
import {getUsersReSelector,
        getPageSizeSelector,
        getTotalUsersCountSelector, 
        getCurrentPageSelector,
        getIsFitchingSelector,
        getFollowingInProgressSelector} from '../../redux/usersSelectors'

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
        users: getUsersReSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFitching: getIsFitchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleProgressOfFollowing, getUser })
)(UsersContainer)