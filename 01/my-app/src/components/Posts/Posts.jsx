import React from 'react';
import styles from './Posts.module.css';
import {addNewTitleTextActionCreator,  postPostActionCreator , addNewPostTextActionCreator} from './../../redux/postReducer' 




const  Posts = (props) =>{
    let mapedPostsfromState = props.postItems.map (p =>
        <div className={styles.Posts_items_item}>
            <div className={styles.Posts_item_title}>{p.title}</div>

            <div>{p.postText} </div>
        </div>
        );

    let publishPost = () =>{
        props.dispatch(postPostActionCreator());
    }    
    let onchangeTitle = (element) =>{
        let onchangeTitleText = element.target.value;
        let action = addNewTitleTextActionCreator(onchangeTitleText);
        props.dispatch(action);
    };

    let onchangePostText = (element) =>{
        let onchangePostText = element.target.value;
        let action = addNewPostTextActionCreator(onchangePostText);
        props.dispatch(action);
    };


    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>                  
                    {mapedPostsfromState}
                </div>

                <div className={styles.Posts_adding}
                    >
                    <input type="text" placeholder='Title' value={props.currentTitleText} onChange={onchangeTitle}/>
                    <textarea placeholder='Text'  value={props.currentPostText}onChange={onchangePostText}></textarea>
                    <button onClick={publishPost}>Add new post</button>
                </div>

            </div>

            
            
    );


}

export default Posts;