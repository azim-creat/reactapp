import React from 'react';
import styles from './Professors.module.css';




const Professors = (props) => {
    let mappedprofessorsItems = props.professors.map(p =>
        <div className={styles.Professors_oneItem} key={p.id}>
            <img src={p.profileImg} alt="" />

            <div className={styles.Professors_FullName} >{p.fullname}</div>

            <div className={styles.Professors_Rang} >{p.rang}</div>
            <div className={styles.Professors_Status} >{p.status}</div>

            <div className={styles.Professors_Location} >
                <div className={styles.Professors_Location_faculcity} >
                    Faculciyt: {p.location.faculcity}
                </div>
                <div className={styles.Professors_Location_kafedra}>
                    Kafedra: {p.location.kafedra}
                </div >
            </div>
            <div>{p.followed
                ? <button onClick={() => { props.unfollow(p.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(p.id) }}>Follow</button>
            }</div>
        </div>)


    return (
        <div className={styles.Professors}>
            {mappedprofessorsItems}
        </div>
    )
}

export default Professors;