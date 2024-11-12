import React, { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // your authentication logic here

  return (
    <AuthContext.Provider value={{ /* your context value here */ }}>
      {children}
    </AuthContext.Provider>
  );
};
