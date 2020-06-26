import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome:'André',
        uid: '1231321321'
    });
    return(
        <AuthContext.Provider value={{signed: !!user, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;