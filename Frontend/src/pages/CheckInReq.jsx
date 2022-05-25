import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Popup from "reactjs-popup";
import CheckinPopup from "../components/Checkin-Popup";

const contentStyle = { background: "none", border: "none", display: "inline-table"};

class CheckInReq extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <Row>
              <Col>
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Check in requests</p>
                </button>
              </Col>
            </Row>
            <Row className="tableHeader">
              <Col>
                <p className="loggedText4">Name</p>
              </Col>
              <Col>
                <p className="loggedText4">Status</p>
              </Col>
              <Col>
                <p className="loggedText4">Location</p>
              </Col>
              <Col></Col>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={0} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={1} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={2} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={3} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={4} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={5} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={6} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={7} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={8} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={9} />
                  </Popup>
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
                  <p className="loggedText4">somewhere</p>
                </Col>
                <Col>
                  <Popup
                    trigger={
                      <button className="btn btn-form ">
                        <p className="loggedText3">Open</p>
                      </button>
                    }
                    modal
                    contentStyle={contentStyle}
                    nested
                  >
                    <CheckinPopup idCheckin={10} />
                  </Popup>
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
export default CheckInReq;
