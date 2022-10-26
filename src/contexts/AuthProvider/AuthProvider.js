import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

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

  // Log Out
  const logOut = () => {
    signOut(auth);
  };

  // Verify Email Message
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please check your verification mail!");
    });
  };

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    signInWithGithub,
    signIn,
    logOut,
    verifyEmail,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
