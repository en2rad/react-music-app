import React, { useState } from 'react';
export const Context = React.createContext({});

const Provider = Context.Provider;



const ContextApp = ({ children }) => {
    const [page, setPage] = useState(true)
    const [stateBottomMenu, setStateBottomMenu] = useState(false);


    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setStateBottomMenu(open);
    };

    
    
    const contextState = {
        page, setPage,
        stateBottomMenu, setStateBottomMenu, toggleDrawer,
    }
   
    return (
        <Provider value={contextState}>
            {children}
        </Provider>
    );
};

export default ContextApp;


