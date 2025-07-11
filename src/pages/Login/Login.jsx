import React, { useState } from 'react'
import './Login.css'

import logo from '../../assets/logo.png'
import { login, signUp } from '../../firebase' 


const Login = () => {

  const [first, setfirst] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    // this esures the page does'nt reload
    e.preventDefault();

    if(first === "Sign In"){
      await login(email, password);
    }else{
      await signUp(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img className='login-logo' src={logo} />
      <div className="login-form">
        <h1 className="">{first}</h1>
        <form className="">
          {
            first === "Sign Up" ? <input className="" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' type='text' /> : ""
          }
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' type='email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' />
          <button onClick={user_auth} type='submit'>{first}</button>
          <div className="form-help">
            <div className="remember">
              <input className="" type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p className="">Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            first === "Sign Up" ? <p className="">Already have account?<span className=""  onClick={() => setfirst("Sign In")} >Sign In Now</span></p> : <p className="">New to Netflix?<span className="" onClick={() => setfirst("Sign Up")}>Sign Up Now</span></p> 
          }
          
        </div>
      </div>
    </div>
  )
}

export default Login