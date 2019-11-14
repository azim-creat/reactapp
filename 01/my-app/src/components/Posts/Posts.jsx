import React from 'react';
import styles from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators";

const maxLength10 = maxLengthCreator(10);



const  Posts = React.memo((props) =>{

    let mapedPostsfromState = 
    [...props.postItems].reverse()
        .map (p =>
        <div className={styles.Posts_items_item}>
            <div className={styles.Posts_item_title}>{p.title}</div>
            <div>{p.postText} </div>
        </div>
        );

   
    let addNewPost = (values)=>{
        let postData ={title:values.newPostTitle, postText:values.newPostText}
        props.addPostTitle(postData)
    }

    return (
            <div className={styles.Posts}>
                <div className={styles.Posts_items}>                  
                    {mapedPostsfromState}
                </div>
                <AddMessageFormRedux onSubmit={addNewPost}/>
            </div>
            
    );


})


const AddNewPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <Field component={'textarea'} placeholder='Title' name='newPostTitle'/>
                <Field component={'textarea'} placeholder='Text' name='newPostText'/> */}

                <Field name="newPostTitle" component={Textarea} placeholder={"Post Title"}
                   validate={[required, maxLength10]} />
                <Field name="newPostText" component={Textarea} placeholder={"Post Text"}
                   validate={[required, maxLength10]} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux =  reduxForm({form: 'profile-add-post-form'})(AddNewPostForm)

export default Posts;