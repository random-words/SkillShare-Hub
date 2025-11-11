import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext(null);
const USER_KEY = "skillshare_user";

const MOCK_USERS = {
  "exists@user.com": { id: 1, email: "exists@user.com", password: "good_password" },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    setLoadingAuth(true);
    setTimeout(() => {
      const storedUser = localStorage.getItem(USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoadingAuth(false);
    }, 500);
  }, []);

  const register = useCallback(credentials => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { email, password } = credentials;
        if (email === "exists@user.com") {
          reject(new Error("User with this email already exists"));
          return;
        }

        const newUser = { id: Date.now(), email };
        localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        setUser(newUser);
        resolve(newUser);
      }, 1000);
    });
  }, []);

  const login = useCallback(credentials => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { email, password } = credentials;

        if (password === "wrong") {
          reject(new Error("Invalid email or password"));
          return;
        }

        const fakeUser = { id: 1, email };
        localStorage.setItem(USER_KEY, JSON.stringify(fakeUser));
        setUser(fakeUser);
        resolve(fakeUser);
      }, 1000);
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }, []);

  const value = {
    user,
    loadingAuth,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
