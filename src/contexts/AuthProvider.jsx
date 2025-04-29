import React from 'react';
import { AuthContext } from './AuthConext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {
  
  const creatUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInuser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userInfo = {
    creatUser,
   signInuser
  }
  return (
    <AuthContext value={userInfo}>
{children}
    </AuthContext>
  );
};

export default AuthProvider;