import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/popupsign.scss";
import LogoForm from "../components/LogoForms";

function SignPopup() {
  return (
    <div className="contentPop">
      <LogoForm className="logoPop" />
      <p className="textPop">To complete this action please create an account.</p>
      <Link className="btn btn-form btn-popUp" to="/signup">
        <p className="textBtnPopup"> Sign up</p>
      </Link>
      <p className="textDownPopup">
        Already a member?
        <Link to="/signin">
          <i>Sign in</i>
        </Link>
      </p>
    </div>
  );
}
 
export default SignPopup;
