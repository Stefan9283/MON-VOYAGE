import React, { Component } from "react";
import "../assets/styles/logged.scss";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class AddHotel extends Component {
  render() {
    return (
      <>
        <div className="verde minH">
          <div className="container loggedPage formLogged">
            <div className="row">
              <div className="col">
                <button className="btn btn-form btn-logged widthformlogged">
                  <p className="loggedText">Add hotel</p>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form>
                  <div class="form-group row">
                    <label for="matrimonialRooms" class="col-sm-2 col-form-label textLabelForm">
                      Number of matrimonial rooms
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="matrimonialRooms" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="twinRooms" class="col-sm-2 col-form-label textLabelForm">
                      Number of twin rooms
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="twinRooms" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="tripleRooms" class="col-sm-2 col-form-label textLabelForm">
                      Number of triple rooms
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="tripleRooms" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="addadress" class="col-sm-2 col-form-label textLabelForm">
                      Add address
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="addadress" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="budget" class="col-sm-2 col-form-label textLabelForm">
                      Set budget
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="budget" />
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
export default AddHotel;
