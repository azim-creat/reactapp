import {sendMessageActionCreator } from './../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from "redux";
let mapStateToProps = (state) => {
    return {
        contacts: state.dialogModul.contacts,
        messages: state.dialogModul.messages,
        isAuth: state.authModul.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },
    }


}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);