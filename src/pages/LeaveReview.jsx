import React, { Component } from "react";
import "../assets/styles/leavereview.scss";
import Rating from "react-star-rating-lite";

function onClickHandler(ratedVal) //de aici iei nr de stele
{
  console.log("Selected Rating",ratedVal)
}

class LeaveReview extends Component {
  
  render() {

    return (
      <>
        <div className="verde">
          <div className="container containerLeave">
            <div className="row align-items-center ">
              <div className="col-12">
                <h1 className="titleLeaveReview">Leave a review</h1>
              </div>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="FullName"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="emailLeaveReview"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="dateReview"
                  placeholder="Date of your stay"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="titleReview"
                  placeholder="Name of your review"
                />
              </div>
              <div className="form-group">
                <Rating  weight="24" onClick={onClickHandler} />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="review"
                  rows="10"
                  placeholder="Your review."
                ></textarea>
              </div>
              <div className="form-stuffs">
                {" "}
                <button className="btn btn-form " type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default LeaveReview;
