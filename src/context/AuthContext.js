import React, { createContext, useState, useEffect, useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [user, setUser] = useState(null); 

 
  const login = (userInfo) => {
    setIsLoggedIn(true);
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo)); 
  };


  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user'); 
  };


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
