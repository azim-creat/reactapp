import React from 'react'
import Paginator from '../../common/Paginator'
import User from './User'

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator 
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />

        {users.map(u => <User u={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}

        />)
        }
    </div>
}

export default Users;