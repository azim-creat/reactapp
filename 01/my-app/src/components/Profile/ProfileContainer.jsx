import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { titleOnchanged, textOnchanged, publishPost, setUserProfile, getUserProfile } from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
             userId=2
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {

        profileImg: state.profileModul.profileInfo.profileImg,
        firstName: state.profileModul.profileInfo.firstName,
        lastName: state.profileModul.profileInfo.lastName,
        status: state.profileModul.profileInfo.status,
        rang: state.profileModul.profileInfo.rang,

        myPosts: state.profileModul.myPosts,

        inputedTitle: state.profileModul.inputedTitle,
        inputedText: state.profileModul.inputedText,

        profile:state.profileModul.profile,
    }
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
 
// export default connect(mapStateToProps, {getUserProfile, titleOnchanged, textOnchanged, publishPost, setUserProfile })(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);