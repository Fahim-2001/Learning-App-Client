import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Use state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Create User with Email and Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In With Email and Password
  const signIn = (email, password) => {
    setLoading(true);
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
    setLoading(true);
    signOut(auth);
  };

  // Update profile
  const updateUserProfile = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => console.error(error));
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signInWithGithub,
    signIn,
    logOut,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
