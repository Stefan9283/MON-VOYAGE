import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";


function Navbar() {

    const [navbar, negruNav] = useState(true);
    const navbarBackground = () => {
      if(window.scrollY >= 80){
        negruNav(false)
      } else {
        negruNav(true)
      }
    }
    window.addEventListener('scroll', navbarBackground);


    return (
      // <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-transparent text-dark clean-navbar">
      <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bg-dark shadow '}>
        <div className="container">

          <button
            type="button"
            
            data-bs-toggle="collapse"
            className="navbar-toggler ms-auto"
            data-bs-target="#navcol-11"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-11">
            <ul className="navbar-nav">
              <li className="nav-item item ">
                <Link className="nav-link text-white textMare" to="location">
                  Locations
                </Link>
              </li>
              <li className="nav-item item">
                <Link className="nav-link text-white textMare" to="reviews">
                  Reviews
                </Link>
              </li>

              <li className="nav-item item">
                <Link className="nav-link text-white textMare" to="contact">
                  Contact
                </Link>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto">
                <form className="form-inline">
                    <Link className="btn btn-sm btn-default text-white textMare" to="signin" >Sign in</Link>
                    
                    <Link className="btn btn-sm btn-outline-default textMare" to="signup">Sign up</Link>
                </form>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  