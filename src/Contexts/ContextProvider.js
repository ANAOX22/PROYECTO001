import { createContext, useState } from "react";





export const AppContext = createContext()
//console.log('AppContext ', AppContext)

// ========================================================================
export const ContextProvider = ({ children }) => {
    //console.log('=>CONTEXT PROVIDER', ContextProvider)
    

    const [logado, setLogado] = useState(false)
    //console.log('CONTEXT PROVIDER', logado)



    return (
        <AppContext.Provider value = { { logado, setLogado } }>
            {children}
        </AppContext.Provider>
    )
} 