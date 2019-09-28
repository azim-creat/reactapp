import {connect} from 'react-redux';
import Professors from './Professors';
import {followAC, unfollowAC, setProfAC} from './../../redux/professorsReducer'

let mapStateToProps =(state) =>{
    return{
        professors : state.professorModul.professorsItems
    }
}

let mapDispatchToProps =(dispatch) =>{
    return{
        follow : (professorsId)=>{
            dispatch(followAC(professorsId))
        },
        unfollow : (professorsId)=>{
            dispatch(unfollowAC(professorsId))
        },
        setProf : (professorsItems)=>{
            dispatch(setProfAC(professorsItems))
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Professors);