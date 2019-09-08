import React from 'react'; 
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'; 
import {sendMessageActionCreator , addNewTextMessageActionCreator} from './../../redux/state' 



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
        props.dispatch(sendMessageActionCreator());
    }

    let textAreaOnchange = () =>{
        let message = newText.current.value;
        let action = addNewTextMessageActionCreator(message);
        props.dispatch(action);

    };


    let currentTextMessageFromState = props.newMessageText;

    
    return (
       
    <div className={styles.Dialogs}>

        <div className={styles.Dialogs_contacts}>
            {contactElements}
        </div>

        <div className={styles.Dialogs_its_dialog}>
            {messageElements}
        </div>

        <div className={styles.Dialogs_textarea}>

            <textarea   ref={newText} 
                        className = {styles.Dialogs_textare_istext}
                        value={currentTextMessageFromState} //тут надо правильный путь указать
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