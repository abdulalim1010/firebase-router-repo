import React from 'react';
import { AuthContext } from './AuthConext';

const AuthProvider = ({children}) => {
  const userInfo = {
    email:'pata@dalim.com'
  }
  return (
    <AuthContext value={userInfo}>
{children}
    </AuthContext>
  );
};

export default AuthProvider;