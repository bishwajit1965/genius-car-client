import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login using email and password
  const logIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    signOut(auth);
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      loading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [loading]);

  const authInfo = { user, loading, createUser, logIn, logout };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
