
let initialithation = {
    professorsItems : [
        {id:1, followed:true, fullname: 'Kyanish Kenesov',  profileImg:'img/ssss' , rang:'Zav Kafidra', status:'Im a boss', location:{faculcity:'Agrobiology', kafedra:'Soil Scince'}},

        {id:2, followed:true, fullname: 'Some Nothh',  profileImg:'img/ssss' , rang:'Laborant', status:'Im a boss', location:{faculcity:'Ecology', kafedra:'Biology'}},

        {id:3,  followed:true,  fullname: 'Machh  Calerty',  profileImg:'img/ssss' , rang:'Teacher', status:'Im a boss', location:{faculcity:'Machine', kafedra:'Automatithation of farming'}},

        {id:5,  followed:false,  fullname: 'Roun Found',  profileImg:'img/ssss' , rang:'High Teacher', status:'Im a boss', location:{faculcity:'Economics', kafedra:'Bissines'}},

        {id:6, followed:false,  fullname: 'Marux Caryb',  profileImg:'img/ssss' , rang:'Professor', status:'Im a boss', location:{faculcity:'Zooveterinary', kafedra:'Microbiology'}}
    ]
       
};


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
