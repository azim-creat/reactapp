import React from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/img/user.png'
import styles from './Users.module.css'


const User = (props) => {
    return(

    <div className={styles.Students_oneItem} key={props.u.id}>

        <div className={styles.Students_header}>

            <NavLink to={'/profile/' + props.u.id}><img className={styles.Students_img} src={userImg} alt="" /></NavLink>
            <div >
                <div className={styles.Students_FullName} >{props.u.name}</div>
                <div className={styles.Students_Rang} >{props.u.rang}</div>
            </div>
        </div>

        <div className={styles.Students_Status} >{props.u.followed ? 'уже одписан' : 'ещё не подписан'}</div>

        <div className={styles.Students_Location} >
            <div className={styles.Students_Location_faculcity} >
                Faculciyt: {props.u.location}
            </div>
            <div className={styles.Students_Location_kafedra}>
                Kafedra: {props.u.location}
            </div >
        </div>
        <div>
            {props.u.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.u.id)} className={styles.Students_Button}
                    onClick={() => { props.unfollow(props.u.id) }}>
                    Unfollow
                    </button>

                : <button disabled={props.followingInProgress.some(id => id === props.u.id)} className={styles.Students_Button}
                    onClick={() => { props.follow(props.u.id) }}>
                    Follow
                    </button>
            }
        </div>
    </div>)


}

export default User;


