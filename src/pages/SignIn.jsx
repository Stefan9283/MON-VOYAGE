import React from 'react'
import { Link } from "react-router-dom";
import '../assets/styles/form.scss';
import LogoForm from '../components/LogoForms';

import http from "../http-common";

function send(email, password) {
    http.post("/api/auth/signin", {
      email: email,
      password: password
    })
}

function SignIn() {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container content"> 
          <div className="block-heading form-stuffs" >
              <LogoForm />
          </div>

            <h2 className="title form-stuffs">Sign In</h2>
          <form>
            <div className="mb-3">
              <label className="form-label" for="email">Email</label
              ><input className="form-control item" type="email" id="email" 
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label" for="password">Password</label
              >
              <label className='forgotPass'><Link className="textMare textForm" to="/">Forgot password?</Link></label>
              <input className="form-control" type="password" id="password" 
              defaultValue={password}
              onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <div className='form-stuffs'>
            <button className="btn btn-form" type="submit"
              onClick={() => send(email, password)}
            >Sign In</button>
            <br></br><br></br><Link className="textMare textForm" to="/signup">Don't have an account?</Link>
          </div>
          </form>
          </div>
      </section>
    </main>
  )
} 
 
export default SignIn;