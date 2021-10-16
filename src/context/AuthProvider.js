import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allcontext = useFirebase()
    return (
        <AuthContext.provider value={allcontext}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProvider;