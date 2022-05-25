import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class HandOver extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <div className="row">
              <div className="col">
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Hand over the room</p>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form>
                  <div class="form-group row">
                    <label for="roomNr" class="col-sm-2 col-form-label textLabelForm">
                      Room number
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="roomNr" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="status" class="col-sm-2 col-form-label textLabelForm">
                      Status
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="status" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="SetRole" class="col-sm-2 col-form-label textLabelForm">
                      Absent objects
                    </label>
                    <div class="col-sm-10" id="SetRole">
                      <select class="form-control">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="container buttons">
            <Link
              className="BackButton btn btn-form btn-logged2 backbtn"
              to="/cleaner"
            >
              <p className="backbtnText">Back</p>
            </Link>
            <Link
              className="OkButton btn btn-form btn-logged2 backbtn"
              to="/cleaner"
            >
              <p className="backbtnText">Hand over</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default HandOver;
