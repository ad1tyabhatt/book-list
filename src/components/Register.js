import React from 'react'
import './register.css'

const Register = () => {

  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container'>
    <h1>Register</h1>
    <form>
      <input type="text" name="username" id="username" placeholder='Username' />
      <input type="password" name="password" id="password" placeholder='Password' />
      <input type="password" name="password" id="password" placeholder='Confirm Password' />
      <button onClick={submitHandler} type='submit'>REGISTER</button>
      <div className="para">

      <p>Member Login</p>
      </div>
    </form>

    </div>
  )
}

export default Register