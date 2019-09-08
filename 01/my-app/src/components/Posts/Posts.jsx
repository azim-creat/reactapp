import React from 'react';
import styles from './Posts.module.css';



const  Posts = (props) =>{
    let mapedPostsfromState = props.postItems.map (p =>
        <div className={styles.Posts_items_item}>
            <div className={styles.Posts_item_title}>{p.title}</div>

            <div>{p.postText} </div>

        </div>


        );


    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>                  
                    {mapedPostsfromState}
                </div>

                <div className={styles.Posts_adding}>
                    <input type="text" placeholder='Title'/>
                    <textarea placeholder='Text'></textarea>
                    <button>Add new post</button>
                </div>

            </div>

            
            
    );


}

export default Posts;