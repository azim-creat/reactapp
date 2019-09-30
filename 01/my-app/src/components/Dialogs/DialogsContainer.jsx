import { addNewTextMessageActionCreator, sendMessageActionCreator } from './../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps =(state)=>{
    return {
        contacts: state.dialogModul.contacts,
        messages: state.dialogModul.messages,
        newMessageText: state.dialogModul.newMessageText,
        isAuth: state.authModul.isAuth
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        sendMessage:         () =>  {dispatch(sendMessageActionCreator())},
        textAreaOnchange:    (message) => {let action = 
                                            addNewTextMessageActionCreator(message);
                                            dispatch(action);
                                        }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer; 