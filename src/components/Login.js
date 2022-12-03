import React from 'react';
import './login.css'


const Login = () => {

  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container'>
    <h1>Member Login</h1>
    <form>
      <input type="text" name="username" id="username" placeholder='Username' />
      <input type="password" name="password" id="password" placeholder='Password' />
      <button onClick={submitHandler} type='submit'>LOGIN</button>
      <div className="para">

      <p>Forgot Password?</p>
      <p className='register'>Register</p>
      </div>
    </form>

    </div>
  )
}

export default Login