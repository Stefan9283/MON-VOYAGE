/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../assets/styles/logged.scss";

function CheckOutPopup() {
  return (
    <div className="container containerCheckOut">
      <div className="row titleCheckOut">
        <h1 className="CheckOutText">Check-out</h1>
      </div>
      <div className="row formCheckout">
        <Col>
          <p className="loggedText7"> Surname:</p>
        </Col>
        <Col>
          <input type="text" className="inputCheckOut" id="Surname" />
        </Col>
      </div>
      <div className="row formCheckout">
        <Col>
          <p className="loggedText7"> Name:</p>
        </Col>
        <Col>
          <input type="text" className="inputCheckOut" id="Name" />
        </Col>
      </div>
      <div className="row formCheckout">
        <Col>
          <p className="loggedText7"> Phone:</p>
        </Col>
        <Col>
          <input type="text" className="inputCheckOut" id="Phone" />
        </Col>
      </div>
      <div className="row formCheckout">
        <Col>
          <p className="loggedText7"> Number of guests:</p>
        </Col>
        <Col>
          <input type="text" className="inputCheckOut" id="Numberofguests" />
        </Col>
      </div>
      <div className="row formCheckout">
        <Col>
          <p className="loggedText7"> Add room numbers:</p>
        </Col>
        <Col>
          <input type="text" className="inputCheckOut" id="Addroomnumbers" />
        </Col>
      </div>
      <div className="row formCheckout btnCheckout">
        <button className="btn btn-form backbtn">
          <p> Payment</p>
        </button>
      </div>
    </div>
  );
}

export default CheckOutPopup;
