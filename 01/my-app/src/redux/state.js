
let rerenderTree = () =>{
    
}

export let state = {
    contacts : [
        { id: 1, fullName: 'Sasha Petrovv' },
        { id: 2, fullName: 'Iosiv Stalin' },
        { id: 3, fullName: 'Engels Chyn' },
        { id: 4, fullName: 'Adolf Enshtein' },
        { id: 5, fullName: 'Mark Czykerberg' },
        { id: 6, fullName: 'Stiv Jobs' },
        { id: 7, fullName: 'Masha Rasputina' },
        { id: 8, fullName: 'Vladimir Pytin' }
    ],
    
    messages : [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whats Up?' },
        { id: 3, message: 'Fine, What about you?' },
        { id: 4, message: 'Not bad' },
        { id: 5, message: 'Great' },
        { id: 6, message: 'By' },
    ],

    newMessageText :'Write down new message' 

};



export const sendMessage = ()=>{

    let newMessage ={
        id:6,
        message:state.newMessageText
    };

    state.messages.push(newMessage);
    state.newMessageText = '';
    rerenderTree(state);
};




export const  addNewTextMessage = (newMassage)=>{

    

    state.newMessageText= newMassage;

    rerenderTree(state);
};


export const subscribe =(observer)=>{
    rerenderTree=observer
}

