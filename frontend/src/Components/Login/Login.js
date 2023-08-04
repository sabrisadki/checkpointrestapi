import React from 'react'
import "/home/sabri/Desktop/contactlistproject/frontend/src/Components/Login/Login.css"
const Login = () => {
  return (
  <form className="form-2">
      <p className="login">Log in to App</p>
      <div className="inputContainer">
        <input type="button" value="next" className="submit"/>
        <input placeholder="email" type="text" className="fInput email"/>
        <input placeholder="Enter your password" type="text" className="fInput pass"/>
      </div>
      <button className="forget">forget password?</button>
        <div className="con">
            <p>don't have account?&nbsp;</p>
            <a href="#"> Register</a>
        </div>
    </form>
  )
}

export default Login