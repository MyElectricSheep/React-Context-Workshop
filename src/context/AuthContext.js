import { createContext, useState, useContext } from "react"

const AuthContext = createContext()

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {
    const [me, setMe] = useState()

    return (
        <AuthContext.Provider value={{me, setMe}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, useAuthContext }