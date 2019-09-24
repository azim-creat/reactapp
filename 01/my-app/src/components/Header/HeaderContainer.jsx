import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import Preloader from '../Preloader/Preloader';
import { toggleIsFitching, setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFitching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }


                this.props.toggleIsFitching(false);


            });
    }
    render() {

        return <>
            {this.props.isFitching ? <Preloader /> : null}
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authModul.isAuth,
        login: state.authModul.login,
        isFitching: state.authModul.isFitching
    }
}
export default connect(mapStateToProps, { toggleIsFitching, setAuthUserData })(HeaderContainer);