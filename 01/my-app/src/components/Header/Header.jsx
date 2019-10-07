import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const  Header = (props) => {
    return (<div className='header'>
        <div className={styles.header_items}>
            <div className={styles.header__left_part}>
                <div className={styles.header__left_part_icon}>message </div>
                <div className={styles.header__left_part_icon}>notify </div>
                <div className={styles.header__left_part_icon}>search </div>
            </div>

            <div className={styles.header__right_part}>

                <div className={styles.header__right_part_icon}>
                { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                :<NavLink to={'/login'}>Login</NavLink>} </div>

                <div className={styles.header__right_part_icon}>img profile </div>
                <div className={styles.header__right_part_icon}>Name Lastname </div>
                <div className={styles.header__right_part_icon}>arrow </div>
                <div className={styles.header__right_part_icon}>chats </div>
            </div>
        </div>
    </div>
    );
}

export default Header;