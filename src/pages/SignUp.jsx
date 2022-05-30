import React, { Component, useState, setState } from "react";
import '../assets/styles/form.scss';
import LogoForm from '../components/LogoForms';

import http from "../http-common";

function send(email, username, password, password2) {
  if (password === password2)
    http.post("/api/auth/signup", {
      email: email,
      username: username,
      password: password
    })
}

function SignUp() {
  const [email, setEmail] = React.useState()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [password2, setPassword2] = React.useState('')
  return (
    <main className="page signup-page">
      <section className="clean-block clean-form dark">
        <div className="container content container-signUp"> 
          <div className="block-heading form-stuffs" >
              <LogoForm className="svgLogo" />
          </div>

            <h2 className="title form-stuffs">Sign Up</h2>
          <form>
          <div className="mb-3">
              <label className="form-label" for="username">Username</label>
              <input className="form-control item" type="text" id="username" 
                defaultValue={username}
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label" for="email">Email</label>
              <input className="form-control item" type="email" id="email" 
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label" for="password">Password</label
              ><input className="form-control" type="password" id="password" 
              defaultValue={password}
              onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" for="retype-password">Retype Password</label>
              <input className="form-control" type="password" id="retype-password"
              defaultValue={password2}
              onChange={(event) => setPassword2(event.target.value)}/>
            </div>
            <div className='form-stuffs'>
            <button onClick={() => send(email, username, password, password2)} className="btn btn-form" type="submit">Sign Up</button>
            <br></br><br></br>
          </div>
          </form>
          </div>
      </section>
    </main>
  )
} 
 
export default SignUp;