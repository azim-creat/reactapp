import React from 'react';
import styles from './Posts.module.css';
import {Field, reduxForm} from "redux-form";





const  Posts = (props) =>{

    let mapedPostsfromState = props.postItems.map (p =>
        <div className={styles.Posts_items_item}>
            <div className={styles.Posts_item_title}>{p.title}</div>
            <div>{p.postText} </div>
        </div>
        );

   
    // let addNewPost = (values)=>{
    //     props.addPostTitle(values.newPostTitle)
    //     props.addPostText(values.newPostText)
    // }
    let addNewPost = (values)=>{
        let postData ={title:values.newPostTitle, postText:values.newPostText}
        props.addPostTitle(postData)
       // props.addPostText(values.newPostText)
    }

    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>                  
                    {mapedPostsfromState}
                </div>
                <AddMessageFormRedux onSubmit={addNewPost}/>
            </div>
            
    );


}


const AddNewPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder='Title' name='newPostTitle'/>
                <Field component={'textarea'} placeholder='Text' name='newPostText'/>
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux =  reduxForm({form: 'profile-add-post-form'})(AddNewPostForm)

export default Posts;