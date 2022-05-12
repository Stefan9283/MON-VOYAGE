import React from 'react'

import '../assets/styles/form.scss';
import LogoForm from '../components/LogoForms';

function SignUp() {
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
              <label className="form-label" for="Full Name">Full Name</label
              ><input className="form-control item" type="text" id="fullname" />
            </div>
            <div className="mb-3">
              <label className="form-label" for="email">Email</label
              ><input className="form-control item" type="email" id="email" />
            </div>
            <div className="mb-3">
              <label className="form-label" for="password">Password</label
              ><input className="form-control" type="password" id="password" />
            </div>
            <div className="mb-3">
              <label className="form-label" for="retype-password">Retype Password</label
              ><input className="form-control" type="password" id="retype-password" />
            </div>
            <div className='form-stuffs'>
            <button className="btn btn-form" type="submit">Sign Up</button>
            <br></br><br></br>
          </div>
          </form>
          </div>
      </section>
    </main>
  )
} 
 
export default SignUp;