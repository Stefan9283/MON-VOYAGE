import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, DropdownButton, Row } from "react-bootstrap";

class TimeTables extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <div className="row">
              <div className="col">
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Time tables</p>
                </button>
              </div>
            </div>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div class="dropdown dropdownPadding">
                  <button
                    class="btn btn-form btn-logged dropdown-toggle btn-dropdown"
                    type="button"
                    id="Administrators"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Administrators
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                    aria-labelledby="Administrators"
                  >
                    <Dropdown.ItemText>Name 1</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 2</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 3</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 4</Dropdown.ItemText>
                  </ul>
                </div>
                <div class="dropdown dropdownPadding">
                  <button
                    class="btn btn-form btn-logged dropdown-toggle btn-dropdown"
                    type="button"
                    id="cleaners"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cleaners
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                    aria-labelledby="cleaners"
                  >
                    <Dropdown.ItemText>Name 1</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 2</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 3</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 4</Dropdown.ItemText>
                  </ul>
                </div>
                <div class="dropdown dropdownPadding">
                  <button
                    class="btn btn-form btn-logged dropdown-toggle btn-dropdown"
                    type="button"
                    id="Accountants"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accountants
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                    aria-labelledby="Accountants"
                  >
                    <Dropdown.ItemText>Name 1</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 2</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 3</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 4</Dropdown.ItemText>
                  </ul>
                </div>
                <div class="dropdown dropdownPadding">
                  <button
                    class="btn btn-form btn-logged dropdown-toggle btn-dropdown"
                    type="button"
                    id="Receptioners"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Receptioners
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                    aria-labelledby="Receptioners"
                  >
                    <Dropdown.ItemText>Name 1</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 2</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 3</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 4</Dropdown.ItemText>
                  </ul>
                </div>
                <div class="dropdown dropdownPadding">
                  <button
                    class="btn btn-form btn-logged dropdown-toggle btn-dropdown"
                    type="button"
                    id="Managers"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Managers
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                    aria-labelledby="Managers"
                  >
                    <Dropdown.ItemText>Name 1</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 2</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 3</Dropdown.ItemText>
                    <Dropdown.ItemText>Name 4</Dropdown.ItemText>
                  </ul>
                </div> 

 
              </Col>
            </Row>
          </div>

          <div className="container buttons">
            {/* <Link
              className="BackButton btn btn-form btn-logged2 backbtn"
              to="/admin"
            >
              <p className="backbtnText">Back</p>
            </Link> */}
            <Link
              className="OkButton btn btn-form btn-logged2 backbtn"
              to="/admin"
            >
              <p className="backbtnText">Add user</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default TimeTables;
