import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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


    let sendMessageToContainer = () => {props.sendMessage()}

    let sendOnchangeText = (element) => {
        let message = element.target.value;
        props.textAreaOnchange(message)
    };


    return (
        <div className={styles.Dialogs}>
            <div className={styles.Dialogs_contacts}>
                {contactElements}
            </div>

            <div className={styles.Dialogs_its_dialog}>
                {messageElements}
            </div>

            <div className={styles.Dialogs_textarea}>
                <textarea className={styles.Dialogs_textare_istext}
                    value={props.newMessageText}
                    onChange={sendOnchangeText}
                />
                <button onClick={sendMessageToContainer}
                    className={styles.Dialogs_textare_isbutton}>Send
            </button>
            </div>

        </div>
    );
}

export default Dialogs; 