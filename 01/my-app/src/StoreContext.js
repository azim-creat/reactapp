import React from 'react';
const StoreContext = React.createContext(null);

 export const Provider = (props) => {
    return <StoreContext.Context.Provider value={props.store}>
        {props.children}
    </StoreContext.Context.Provider>
}
export default StoreContext;
