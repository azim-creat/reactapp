import React from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/img/user.png'
import styles from './Users.module.css'
import * as axios from 'axios'



let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.pagesLine}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
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

                <div className={styles.Students_Status} >{s.status}</div>

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

                            onClick={() => {
                                props.toggleProgressOfFollowing(true, s.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${s.id}`,{
                                    withCredentials: true ,
                                     headers:{
                                    "API-KEY":"7521dd95-7452-4083-aa0f-a142132db7e3"
                                }
                                })
                                    .then(response => {
                                        
                                        if(response.data.resultCode===0){
                                            props.unfollow(s.id)
                                        }
                                        props.toggleProgressOfFollowing(false, s.id)
                                    });
                            }}>
                            Unfollow
                        </button>

                        : <button disabled={props.followingInProgress.some(id => id === s.id)} className={styles.Students_Button}
                            onClick={() => {
                                props.toggleProgressOfFollowing(true, s.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${s.id}`,{},{
                                    withCredentials: true,
                                headers:{
                                    "API-KEY":"7521dd95-7452-4083-aa0f-a142132db7e3"
                                }
                                })
                                    .then(response => {
                                        if(response.data.resultCode===0){
                                            props.follow(s.id)
                                        }
                                        props.toggleProgressOfFollowing(false, s.id)
                                    });
                
                            }}>
                            Follow
                        </button>
                    }
                </div>
            </div>)

        }

    </div>

}




export default Users;