import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class AddUser extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <div className="row">
              <div className="col">
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Add user</p>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form>
                  <div class="form-group row">
                    <label for="fullName" class="col-sm-2 col-form-label textLabelForm">
                      Full name
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="fullName" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phoneNr" class="col-sm-2 col-form-label textLabelForm">
                      Add phone number
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="phoneNr" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="SetRole" class="col-sm-2 col-form-label textLabelForm">
                      Set role
                    </label>
                    <div class="col-sm-10" id="SetRole">
                      <select class="form-control">
                        <option>Administrator</option>
                        <option>Cleaner</option>
                        <option>Accountant</option>
                        <option>Receptioner</option>
                        <option>Manager</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="workingHours" class="col-sm-2 col-form-label textLabelForm">
                      Add working hours
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="workingHours" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="assignedHotel" class="col-sm-2 col-form-label textLabelForm">
                      Add assigned hotel
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="assignedHotel" />
                    </div>
                  </div>


                </form>
              </div>
            </div>
          </div>
          <div className="container buttons">
            <Link
              className="BackButton btn btn-form btn-logged2 backbtn"
              to="/admin"
            >
              <p className="backbtnText">Back</p>
            </Link>
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
export default AddUser;
