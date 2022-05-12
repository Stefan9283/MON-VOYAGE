/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "../assets/styles/location.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper";
import LocationElement from "../components/LocationElement";

class Location extends Component {
  render() {
    return (
      <>
        <div className="verde">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-12">
                <h1 className="titleLocation">
                  Explore our <i>beautiful</i> locations..
                </h1>
              </div>
              <div className="row justify-content-center">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"2"}
                  loop={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <LocationElement
                      idHotel={1} //facui aici un idHotel in caz ca o sa ai nev in baza sa iei in functie de iD elemente, e transmis in fiecare componenta
                      imgLink={require("../assets/img/UK 1.png")}
                      cityName={"London"}
                      imgHotel={require("../assets/img/UK 1.png")}
                      descriptionHotel={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam. Sed bibendum, lorem vel scelerisque interdum, tortor mauris molestie ante, non pellentesque augue dolor ac ipsum."}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LocationElement
                      idHotel={2}
                      imgLink={require("../assets/img/venice.png")}
                      cityName={"Venice"}
                      imgHotel={require("../assets/img/venice.png")}
                      descriptionHotel={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam. Sed bibendum, lorem vel scelerisque interdum, tortor mauris molestie ante, non pellentesque augue dolor ac ipsum."}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LocationElement
                      idHotel={3}
                      imgLink={require("../assets/img/athens.png")}
                      cityName={"Athens"}
                      imgHotel={require("../assets/img/AthensHotel.png")}
                      descriptionHotel={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim augue, vulputate sit amet vestibulum eu, accumsan a tellus. Nam erat magna, tincidunt a convallis ut, hendrerit in metus. Ut fringilla mi ac ultrices ullamcorper. Phasellus metus risus, blandit tempor mi et, scelerisque egestas ligula. Proin pulvinar ante non gravida aliquet. Suspendisse sit amet iaculis quam. Sed bibendum, lorem vel scelerisque interdum, tortor mauris molestie ante, non pellentesque augue dolor ac ipsum."}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Location;
