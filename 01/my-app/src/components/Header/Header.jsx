import React from 'react';
import styles from'./Header.module.css';

function Header() {
    return ( <div className='header'>
            
            <div className={styles.header__left_part}>
                <div className={styles.header__left_part_icon}>message </div>
                <div className={styles.header__left_part_icon}>notify </div>
                <div className={styles.header__left_part_icon}>search </div>
            </div>

            <div className={styles.header__right_part}>
                <div className={styles.header__right_part_icon}>img profile </div>
                <div className={styles.header__right_part_icon}>Name Lastname </div>
                <div className={styles.header__right_part_icon}>arrow </div>
                <div className={styles.header__right_part_icon}>chats </div>
            </div>

        </div>
    );
}

export default Header;