import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, updateStatus, getStatus} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profileModul.profile,
        profileImg: state.profileModul.profileInfo.profileImg,
        firstName: state.profileModul.profileInfo.firstName,
        lastName: state.profileModul.profileInfo.lastName,
        status: state.profileModul.status,
        rang: state.profileModul.profileInfo.rang,

        myPosts: state.profileModul.myPosts,

        inputedTitle: state.profileModul.inputedTitle,
        inputedText: state.profileModul.inputedText,

        authorizedUserId: state.authModul.userId,
        isAuth: state.authModul.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);