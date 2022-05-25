import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class AddRoom extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <div className="row">
              <div className="col">
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Add room</p>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form>
                  <div class="form-group row">
                    <label for="SelectHotel" class="col-sm-2 col-form-label textLabelForm">
                      Select hotel
                    </label>
                    <div class="col-sm-10" id="SelectHotel">
                      <select class="form-control">
                        <option>Hotel name 1</option>
                        <option>Hotel name 2</option>
                        <option>Hotel name 3</option>
                        <option>Hotel name 4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="roomNumber" class="col-sm-2 col-form-label textLabelForm">
                      Room number
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="roomNumber" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="roomType" class="col-sm-2 col-form-label textLabelForm">
                      Room type
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="roomType" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="AddFacilities" class="col-sm-2 col-form-label textLabelForm">
                      Add Facilities
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="AddFacilities"
                      />
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
              <p className="backbtnText">Ok</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default AddRoom;
