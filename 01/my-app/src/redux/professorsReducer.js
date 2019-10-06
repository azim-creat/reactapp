let initialithation = { professorsItems:[] };

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROF = 'SET_PROF';

export const followAC =(professorsId) => ({type: FOLLOW , professorsId});
export const unfollowAC =(professorsId) => ({type: UNFOLLOW, professorsId });
export const setProfAC =(professors) => ({type: SET_PROF, professors });

const prodessorsReducer =(state = initialithation, action) =>{
    switch(action.type){
        case FOLLOW :
            return {
                ...state ,
                professorsItems: state.professorsItems.map (  p =>{
                    if (p.id === action.professorsId){
                        return{...p, followed: true }
                    }
                    return p 
            })
        }

        case UNFOLLOW :
            return {
                ...state ,
                professorsItems: state.professorsItems.map (  p =>{
                    if (p.id === action.professorsId){
                        return{...p, followed: false }
                    }
                    return p 
                } )

        }
        case SET_PROF:
            return {...state, 
                professorsItems: [...state.professorsItems, ...action.professorsItems] }

        default :
        return state;
    }
    
    
} ;

export default prodessorsReducer;
