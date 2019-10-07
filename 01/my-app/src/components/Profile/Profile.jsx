import React from 'react';
import styles from './Profile.module.css';
import Preloader from '../Preloader/Preloader';
import {Redirect} from 'react-router-dom'
import ProfileStatus from "./ProfileStatus"
import PostsContainer from "../Posts/PostsContainer"



let Profile = (props)=>{
    if(!props.profile){
        return <Preloader/>
    };

   if (!props.isAuth) return <Redirect to={"/login"} /> ;
   
    return <div className={styles.Profile}>
        
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_img}><img src={props.profile.photos.small} alt=""/></div>
            <div className={styles.profileInfo_text}> 
                <div className={styles.profileInfo_text_fullName}>{props.profile.fullName}</div>
                <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                <div className={styles.profileInfo_text_fullName}>{props.profile.aboutMe}</div>
                <div className={styles.profileInfo_text_status}>{props.profile.lookingForAJob}</div>
                <div className={styles.profileInfo_text_rang}>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
        <PostsContainer/>
    </div>
    
}

export default Profile;