import React from 'react';
import styles from './Posts.module.css';

const  Posts = (props) =>{
    debugger;
    let mapedPostsfromState = props.postItems.map (p =>
        <div className={styles.Posts_items_item}>
            <div className={styles.Posts_item_title}>{p.title}</div>
            <div>{p.postText} </div>
        </div>
        );

    let sendToContainerPublishPost = () =>{
        props.publishPost();
    };

    let sendToContainerTitle = (element) =>{
        let onchangeTitleText = element.target.value;
        props.onchangeTitle(onchangeTitleText);
    };

    let sendToContainerText = (element) =>{
        let onchangePostText = element.target.value;
        props.onchangePostText(onchangePostText);
    };


    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>                  
                    {mapedPostsfromState}
                </div>

                <div className={styles.Posts_adding}
                    >
                    <input type="text" placeholder='Title' value={props.currentTitleText} onChange={sendToContainerTitle}/>
                    <textarea placeholder='Text'  value={props.currentPostText} onChange={sendToContainerText}></textarea>
                    <button onClick={sendToContainerPublishPost}>Add new post</button>
                </div>
            </div>
    );


}

export default Posts;