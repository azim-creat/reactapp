import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { titleOnchanged, textOnchanged, publishPost, setUserProfile } from '../../redux/profileReducer'
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
             userId=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
       
            .then(response => { 
              
                this.props.setUserProfile(response.data);
    
            });
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

// profile={this.props.profile}
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

        profile:state.profileModul.profile
    }
}

let WitUrlDataContainerComponent = withRouter(ProfileContainer)
 
export default connect(mapStateToProps, { titleOnchanged, textOnchanged, publishPost, setUserProfile })(WitUrlDataContainerComponent);