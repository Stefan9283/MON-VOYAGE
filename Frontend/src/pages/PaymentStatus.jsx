import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

class PaymentStatus extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <Row>
              <Col>
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Payment Status</p>
                </button>
              </Col>
            </Row>
            <Row className="tableHeader">
                <Col>
                  <p className="loggedText4">Payment</p>
                </Col>
                <Col>
                  <p className="loggedText4">Status</p>
                </Col>
                <Col>
                  <p className="loggedText4">due to</p>
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
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="loggedText4">name</p>
                </Col>
                <Col>
                  <p className="loggedText4">some status</p>
                </Col>
                <Col>
                  <p className="loggedText4">some date</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Edit</p>
                </button>
                </Col>
              </Row>
              
            </div>
          </div>
          <div className="container buttons">
            <Link
              className="BackButton btn btn-form btn-logged2 backbtn"
              to="/accountant"
            >
              <p className="backbtnText">Back</p>
            </Link>
            <Link
              className="OkButton btn btn-form btn-logged2 backbtn"
              to="/accountant"
            >
              <p className="backbtnText">Ok</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default PaymentStatus;
