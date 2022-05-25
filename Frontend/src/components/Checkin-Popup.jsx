/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../assets/styles/logged.scss";

function CheckinPopup({ idCheckin }) {
  return (
    <div className="container ">
      <div className="row containerCheckIn">
        <div className="col stangaCheck">
          <Row>
            <Col>
              <p className="checkinText">Surname: </p>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="Numele lui adevarat iti zic"
                readOnly
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="checkinText">Name: </p>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="Numele lui adevarat iti zic"
                readOnly
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="checkinText">Phone: </p>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="112"
                readOnly
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="checkinText">Number of guests: </p>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="3"
                readOnly
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="checkinText">Number of rooms: </p>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="2"
                readOnly
              />
            </Col>
          </Row>

            <Row className="checkinButtons">
              <button className="btn btn-form backbtn ">
                <p className="backbtnText">Accept request</p>
              </button>
            </Row>
            <Row className="checkinButtons">
              <button className="btn btn-form btn-logged2 backbtn ">
                <p className="backbtnText">Decline request</p>
              </button>
            </Row>

        </div>
        <div className="col dreaptaCheck">
          <h1 className="loggedText5">Available rooms</h1>
          <div className="containerLogged scrollable2 scrollBarLogged">
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
            <Row className="borderedRow">
              <Col className="displayGrid">
                <p className="loggedText6"> Room 223</p>
                <p className="loggedText6"> 2 guests</p>
                <button className="btn btn-form submitbtn ">
                  <p className="submitBtnTextCheck">Submit</p>
                </button>
              </Col>
              <Col>
                <Image
                  src="../assets/img/book.png"
                  className="imgCheck"
                  responsive
                ></Image>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckinPopup;
