import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

class Bookings extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <Row>
              <Col>
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Bookings</p>
                </button>
              </Col>
            </Row>
            <Row className="tableHeader">
                <Col>
                  <p className="loggedText4">Name</p>
                </Col>
                <Col>
                  <p className="loggedText4">Location</p>
                </Col>
                <Col>
                  <p className="loggedText4">Room</p>
                </Col>
                <Col>
                </Col>
              </Row>
              <hr></hr>
            <div className="containerLogged scrollable scrollBarLogged">

              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <p className="loggedText4">some rooms</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">cancel</p>
                </button>
                </Col>
              </Row>

              
            </div>
          </div>
          <div className="container buttons">
            <Link
              className="BackButton btn btn-form btn-logged2 backbtn"
              to="/receptionist"
            >
              <p className="backbtnText">Back</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Bookings;
