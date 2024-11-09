import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()

function AuthProvider({children}) {
  
    const initialAuthUSer = localStorage.getItem("users");
    const [authUser, setAuthUser] = useState(
        initialAuthUSer? JSON.parse(initialAuthUSer) : undefined
    )

    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider

export const useAuth = ()=> useContext(AuthContext);