// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthConext';
// import { auth } from '../firebase.init';

const Register = () => {

    const { creatUser } = use (AuthContext)

 
  const handleRegister = e => {


    e.preventDefault();
  

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //   console.log(result)
    //   })
    //   .catch(error=>{
    //   console.log(error)
    // })
    creatUser (email, password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
 
  }

  return (
      <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center font-bold">Register Now!</h1>

      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>All ready have a account ?<Link className='text-blue-700 underline' to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;