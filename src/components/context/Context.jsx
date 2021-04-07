import React, { useState } from 'react';
export const Context = React.createContext({});

const Provider = Context.Provider;



const ContextApp = ({ children }) => {
    const [page, setPage] = useState(true)
    
    const contextState = {
        page, setPage
    }

    return (
        <Provider value={contextState}>
            {children}
        </Provider>
    );
};

export default ContextApp;


