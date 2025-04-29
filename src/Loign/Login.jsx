import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthConext';

const Login = () => {

  const { signInuser } = use(AuthContext)
   

  const handleLogin = e => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value
    console.log(email, password)

    signInuser (email, password)
     .then(result => {
    console.log(result)
    })
    .catch(error => {
    console.log(error)
  })
  
}



  return (
   
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center font-bold">Login now!</h1>

      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label  className="label">Email</label>
          <input type="email" name='email'  className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input  type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>new to this side please?<Link className='text-blue-700 underline' to='/register'>Register</Link></p>
      </div>
    </div>

  );
};

export default Login;