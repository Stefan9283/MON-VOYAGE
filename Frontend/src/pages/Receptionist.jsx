import React, { Component } from "react";
import "../assets/styles/logged.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import CheckOutPopup from "../components/CheckOutPopup";

const contentStyle = { background: "none", border: "none", display: "inline-table"};


class Receptionist extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage">
            <div className="row rowButton">
              <div className="col">
              <Link className="btn btn-form btn-logged widthlogged" to="/receptionist/checkin-requests">
                  <p className="loggedText">Check in</p>
                </Link>
              </div>
            </div>
            <div className="row rowButton">
              <div className="col">

              <Popup
                    trigger={
                      <button className="btn btn-form btn-logged widthlogged">
                      <p className="loggedText">Check-out</p>
                    </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckOutPopup />
                  </Popup>



              </div>
            </div>
            <div className="row rowButton">
              <div className="col">
              <Link className="btn btn-form btn-logged widthlogged" to="/receptionist/bookings">
                  <p className="loggedText">Bookings</p>
                </Link>
              </div>
            </div>
            <div className="row rowButton">
              <div className="col">
                <button className="btn btn-form btn-logged widthlogged">
                  <p className="loggedText">Cancel booking</p>
                </button>
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
export default Receptionist;
