import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class Administrator extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage">
            <div className="row rowButton">
              <div className="col">
                <Link className="btn btn-form btn-logged widthlogged" to="addRoom">
                  <p className="loggedText">Add room</p>
                </Link>
              </div>
            </div>
            <div className="row rowButton">
              <div className="col">
                <Link className="btn btn-form btn-logged widthlogged" to="addHotel">
                  <p className="loggedText">Add hotel</p>
                </Link>
              </div>
            </div>
            <div className="row rowButton">
              <div className="col">
                <Link className="btn btn-form btn-logged widthlogged" to="addUser">
                  <p className="loggedText">Add user</p>
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
export default Administrator;
