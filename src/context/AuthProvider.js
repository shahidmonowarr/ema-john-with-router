import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allCOntexts = useFirebase();
    return (
        <AuthContext.Provider value={allCOntexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;