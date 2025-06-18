
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple mock authentication
    // In a real app, this would call your backend API
    const mockUsers = [
      { id: 1, email: 'admin@shop.com', password: 'admin123', role: 'admin', name: 'Admin User' },
      { id: 2, email: 'customer@shop.com', password: 'customer123', role: 'customer', name: 'Customer User' }
    ];

    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const signup = (email, password, name) => {
    // Simple mock signup - creates customer by default
    const newUser = {
      id: Date.now(),
      email,
      name,
      role: 'customer'
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const value = {
    user,
    login,
    logout,
    signup,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
