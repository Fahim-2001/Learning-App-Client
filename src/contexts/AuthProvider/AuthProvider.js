import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Use state changed", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Create User with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In With Email and Password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In With Google
  const signInWithGoogle = (provider) => {
    signInWithPopup(auth, provider);
  };

  // Sign In With Github
  const signInWithGithub = (provider) => {
    signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    signInWithGithub,
    signIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
