import React from 'react';
import styles from './Users.module.css';
import userImg from '../../assets/img/user.png'
import * as axios from 'axios';




class Students extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    
    render(){
        return <div>

            { 
                this.props.users.map(s =>  <div className={styles.Students_oneItem} key={s.id}>

                    <div className={styles.Students_header}>
                        <img className={styles.Students_img} src={userImg} alt="" />

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
                    <div>{s.followed
                        ? <button className={styles.Students_Button} onClick={() => { this.props.unfollow(s.id) }}>Unfollow</button>
                        : <button className={styles.Students_Button} onClick={() => { this.props.follow(s.id) }}>Follow</button>
                    }</div>
                </div>)

            }

        </div>

    }
}



export default Students;