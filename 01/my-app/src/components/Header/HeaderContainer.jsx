import React from 'react';
import Header from './Header';
//import { getAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import {getAuthUserData, logout} from "../../redux/authReducer";
class HeaderContainer extends React.Component {
    componentDidMount() {this.props.getAuthUserData()}
    render() {

        return <>
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
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
//export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);