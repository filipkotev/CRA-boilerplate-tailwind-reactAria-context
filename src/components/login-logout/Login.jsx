import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import './login.css'

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    // Login to firestore

    // if login successful then form.reset() and redirect the user
  }

  const { user } = useStateContext();

  return (
    user ?
      <div className='login-page'>
        <form className='login-form' onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="submit" />
        </form>
      </div>
    : null
  )
}

export default Login