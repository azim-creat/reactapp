import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let contactElements = props.contacts.map(c =>
        <NavLink
            to={'/dialogs/' + c.id}
            className={styles.Dialogs_one_contact}
            activeClassName={styles.activeLink}
        >
            {c.fullName}

        </NavLink>
    );

    let messageElements = props.messages.map(m =>
        <div className={styles.Dialogs_message_item}>{m.message}</div>
    );



    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody);
    }

    return (
        <div className={styles.Dialogs}>
            <div className={styles.Dialogs_contacts}>
                {contactElements}
            </div>

            <div className={styles.Dialogs_its_dialog}>
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />    
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs; 