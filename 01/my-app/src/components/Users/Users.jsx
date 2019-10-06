import React from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/img/user.png'
import styles from './Users.module.css'


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.pagesLine}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : undefined}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }} key={p.$}>{p}</span>
            })
            }
        </div>

        {
            props.users.map(s => <div className={styles.Students_oneItem} key={s.id}>

                <div className={styles.Students_header}>

                    <NavLink to={'/profile/' + s.id}><img className={styles.Students_img} src={userImg} alt="" /></NavLink>

                    <div >
                        <div className={styles.Students_FullName} >{s.name}</div>
                        <div className={styles.Students_Rang} >{s.rang}</div>
                    </div>
                </div>

                <div className={styles.Students_Status} >{s.followed? 'уже одписан':'ещё не подписан'}</div>

                <div className={styles.Students_Location} >
                    <div className={styles.Students_Location_faculcity} >
                        Faculciyt: {s.location}
                    </div>
                    <div className={styles.Students_Location_kafedra}>
                        Kafedra: {s.location}
                    </div >
                </div>
                <div>
                    {s.followed
                        ? <button disabled={props.followingInProgress.some(id => id === s.id)} className={styles.Students_Button}
                            onClick={() => {props.unfollow(s.id)}}>
                            Unfollow
                        </button>

                        : <button disabled={props.followingInProgress.some(id => id === s.id)} className={styles.Students_Button}
                            onClick={() => {props.follow(s.id)}}>
                            Follow
                        </button>
                    }
                </div>
            </div>)

        }

    </div>

}




export default Users;