import React, { Component } from "react";
import "../assets/styles/logged.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class Cleaner extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage">
            <div className="row rowButton">
              <div className="col">
                <Link className="btn btn-form btn-logged widthlogged" to="HandOver">
                  <p className="loggedText">Hand over a room</p>
                </Link>
              </div>
            </div>
            <div className="row rowButton">
              <div className="col">
              <Link className="btn btn-form btn-logged widthlogged" to="/timetables">
                  <p className="loggedText">Timetablse</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Cleaner;
