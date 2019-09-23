import React from 'react';
import styles from './Profile.module.css';
import profileImg from '../../assets/img/user.png'
import Preloader from '../Preloader/Preloader';




let Profile = (props)=>{
    let mapedPosts = props.myPosts.map(p => <div className={styles.publishedPosts}>

            <div className={styles.publishedPosts_item}>
                    <div className={styles.publishedPosts_title}>{p.title}</div>
                    <div className={styles.publishedPosts_text}>{p.text}</div>
                    <div className={styles.publishedPosts_vievCount}>{p.vievCount}</div>
            </div>

        </div>
        );

    let sendToContainerTitle = (element)=>{
        props.titleOnchanged(element.target.value)
    }
   
    let sendToContainerText = (element)=>{
        props.textOnchanged(element.target.value)
    }

    let postSender = ()=>{
        props.publishPost();
    }
    if(!props.profile){
        return <Preloader/>
    }
   
    return <div className={styles.Profile}>
 
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_img}><img src={props.profile.photos.small} alt=""/></div>
            <div className={styles.profileInfo_text}> 
                <div className={styles.profileInfo_text_fullName}>{props.firstName} {props.lastName}</div>
                <div className={styles.profileInfo_text_status}>{props.status}</div>
                <div className={styles.profileInfo_text_rang}>{props.rang}</div>

            </div>
        </div>
        <div className={styles.publishingPosts}>
            <input type="text" placeholder='Title' value={props.inputedTitle} onChange={sendToContainerTitle}/>
            <textarea placeholder='Text'  value={props.inputedText} onChange={sendToContainerText}></textarea>
            <button onClick={postSender}>Add new post</button>
        </div>
        {mapedPosts}
    </div>
    
}

export default Profile;