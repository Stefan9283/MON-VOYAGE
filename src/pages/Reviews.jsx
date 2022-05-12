import React, { Component } from "react";
import "../assets/styles/review.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import ReviewElement from "../components/ReviewElement";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import SignPopup from "../components/SignPopup";

import { isMobile, isTablet } from "react-device-detect";

class Review extends Component {
  render() {
    return (
      <>
        <div className="verde">
          <Swiper
            navigation={true}
            slidesPerView={isMobile ? 1 : 3} 
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ReviewElement
                fullName={"Full name"}
                date={"18.02.2022"}
                ratingStars={"4"}
                title={"Review Title"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam. Sed bibendum, lorem vel scelerisque interdum, tortor mauris molestie ante, non pellentesque augue dolor ac ipsum. Fusce ultrices ipsum eu risus sodales volutpat. Sed mollis massa non dignissim aliquet. Morbi id ultricies ipsum, a ornare metus. Cras at arcu in nisi ultrices faucibus. Cras nec dolor dignissim, laoreet sem in, scelerisque ex. Suspendisse dolor arcu, semper eget odio ut, feugiat porta enim. Ut malesuada blandit purus et bibendum. Morbi enim turpis, malesuada vitae bibendum id, blandit non felis. In dui nunc, volutpat lacinia mi sit amet, efficitur ullamcorper orci."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewElement
                fullName={"Full name"}
                date={"18.02.2022"}
                ratingStars={"0"}
                title={"Review 2"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewElement
                fullName={"Full name"}
                date={"18.02.2022"}
                ratingStars={"5"}
                title={"Review 3"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewElement
                fullName={"Full name"}
                date={"18.02.2022"}
                ratingStars={"3"}
                title={"Review 4"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewElement
                fullName={"Full name"}
                date={"18.02.2022"}
                ratingStars={"4"}
                title={"Review 5"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam."
                }
              />
            </SwiperSlide>
          </Swiper>

          {/* if logged == true »this, else » popup 
          <Link className="btn btn-form btn-form2" to="/leavereview">
            <p className="txtBtn">Leave a review</p>
          </Link> */}
          <Popup
            trigger={
              <button className="btn btn-form btn-form2">
                <p className="txtBtn">Leave a review</p>
              </button>
            }
            modal
          >
            <SignPopup />
          </Popup>
        </div>
      </>
    );
  }
}
export default Review;
