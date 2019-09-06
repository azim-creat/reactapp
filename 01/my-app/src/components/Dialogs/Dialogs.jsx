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
    
    let messageElements = props.messages.map( m => 
        <div className={styles.Dialogs_message_item}>{m.message}</div> 
    );
    
    let newText= React.createRef();




    let sendMessage = () => {
        props.dispatch({type: 'SEND_MESSAGE'});
    }

    let textAreaOnchange = () =>{
        let message = newText.current.value;
        props.dispatch({ type:'ADD_NEW_TEXT_MESSAGE', newMassage: message});

    };





    
    return (
    <div className={styles.Dialogs}>

        <div className={styles.Dialogs_contacts}>
            {contactElements}
        </div>

        <div className={styles.Dialogs_its_dialog} addNewTextMessage={props.addNewTextMessage}>
            {messageElements}
        </div>

        <div className={styles.Dialogs_textarea}>

            <textarea   ref={newText} 
                        className = {styles.Dialogs_textare_istext}
                        value={props.newMessageText} 
                        onChange={textAreaOnchange}
                                    />
            

            <button  onClick   = {sendMessage} 
                     className = {styles.Dialogs_textare_isbutton}>Send
            </button>

        </div>

    </div>
    );
}

export default Dialogs;