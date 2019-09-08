import React from 'react';
import styles from './Posts.module.css';



const  Posts = (props) =>{
    


    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>

                    <div className={styles.Posts_items_item}>
                        <div className={styles.Posts_item_title}>Title</div>

                        <div>bodu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?</div>

                    </div>

                    <div className={styles.Posts_items_item}>
                        <div className={styles.Posts_item_title}>Title</div>

                        <div>bodu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?</div>

                    </div>

                    <div className={styles.Posts_items_item}>
                        <div className={styles.Posts_item_title}>Title</div>

                        <div>bodu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?</div>

                    </div>
                    <div className={styles.Posts_items_item}>
                        <div className={styles.Posts_item_title}>Title</div>

                        <div>bodu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?</div>

                    </div>
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