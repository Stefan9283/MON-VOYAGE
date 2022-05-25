import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

class Acquisitions extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <Row>
              <Col>
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Acquisitions</p>
                </button>
              </Col>
            </Row>
            <Row className="tableHeader">
                <Col>
                  <p className="loggedText4">Request</p>
                </Col>
                <Col>
                  <p className="loggedText4">Status</p>
                </Col>
                <Col>
                  <p className="loggedText4">Added by</p>
                </Col>
                <Col>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
                  <p className="loggedText4">someone</p>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Accept</p>
                </button>
                </Col>
                <Col>
                <button className="btn btn-form ">
                  <p className="loggedText3">Refuse</p>
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
export default Acquisitions;
