import { createContext, useState } from "react";


export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    
    const [logado, setLogado] = useState(false)

    const state = useState(true)

    //console.log('CONTEXT PROVIDER', state)

    return (
        <AppContext.Provider value = { { logado, setLogado } }>
            {children}
        </AppContext.Provider>
    )
} 