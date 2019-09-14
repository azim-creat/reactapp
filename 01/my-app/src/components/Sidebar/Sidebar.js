import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const  Sidebar = () => {
    return ( <div className={styles.sidebar} >
            <div className={styles.sidebar_items}>
            <NavLink to='/main'         className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Dashboard          </NavLink>
            <NavLink to='/dialogs'      className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Dialogs            </NavLink>
            <NavLink to='/professors'   className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Profesors          </NavLink>
            <NavLink to='/students'     className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Students           </NavLink>
            <NavLink to='/staffs'       className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Staffs             </NavLink>
            <NavLink to='/reports'      className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Reports            </NavLink>
            <NavLink to='/posts'        className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Posts                </NavLink>
            <NavLink to='/university'   className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>University Centres </NavLink>
            <NavLink to='/courses'      className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Courses            </NavLink>
            <NavLink to='/library'      className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Library            </NavLink>
            <NavLink to='/departaments' className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Departaments       </NavLink>
            <NavLink to='/ivents'       className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Ivents             </NavLink>
            <NavLink to='/multi'        className={styles.Sidebar_icon}  activeClassName={styles.activeLink}>Multi Purpose      </NavLink>
            </div>
        </div>
    );
}


export default Sidebar;