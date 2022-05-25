/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Popup from "reactjs-popup";
import "../assets/styles/popUpBook.scss";

import SignPopup from "./SignPopup";

import { ImageViewer } from "react-image-viewer-dv";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";

function LocationPopupBook({ idHotel, guests, rooms, checkIn, checkOut }) {
  const contentStyle = { background: "none", border: "none" };

  const Desktop = ({ children }) => {
    const isBigScreen = useMediaQuery({ minWidth: 1880 });
    return isBigScreen ? children : null;
  };

  const useTabletAndBelowMediaQuery = () =>
    useMediaQuery({ query: "(max-width: 1279px)" });
  const TabletAndBelow = ({ children }) => {
    const isTabletAndBelow = useTabletAndBelowMediaQuery();

    return isTabletAndBelow ? children : null;
  };

  const Between = ({ children }) => {
    const isBetween = useMediaQuery({ minWidth: 1280, maxWidth: 1879 });
    return isBetween ? children : null;
  };

  return (
    <div>
      <Desktop>
        <div className="card popupCardCityBook">
          {/* <p className="card-text popupDescriptionCity">{idHotel}</p> */}

          {/* <p className="popupTitleCityCheckRooms"> Number of guests {guests}</p>
        <p className="popupTitleCityCheckRooms"> Number of rooms {rooms}</p>
        <p className="popupTitleCityCheckRooms"> checkin {checkIn}</p>
        <p className="popupTitleCityCheckRooms"> checkOut {checkOut}</p>
        <p className="popupTitleCityCheckRooms"> idHotel {idHotel}</p> */}
          <div className="tableBook">
            <div className="priceRow">
              <h1 className="priceTitle"> Price</h1>
              <h1 className="priceText"> Euro 100 / night</h1>
            </div>

            <div className="guestRow">
              <h1 className="guestTitle"> Guests</h1>
              <h1 className="guestText"> {guests} guests</h1>
            </div>
            <div className="roomsRow">
              <h1 className="roomsTitle"> rooms</h1>
              <h1 className="roomsText"> {rooms} rooms</h1>
            </div>
            <div className="checksRow">
              <h1 className="checkInTitle"> Check-in</h1>
              <h1 className="checkinText"> {checkIn}</h1>
              {/* <div className="separator"></div> */}
              <h1 className="checkoutTitle"> Check-out</h1>
              <h1 className="checkoutText"> {checkOut}</h1>
            </div>
          </div>
          <div className="photos">
            <div>
              <ImageViewer>
                <img
                  className="photoBook"
                  src={"../assets/img/book.png"}
                  alt="Hotel"
                />
              </ImageViewer>
            </div>
            {/* ../img/book.png */}
            <div>
              <ImageViewer>
                <img
                  className="photoBookUp"
                  src={"../assets/img/book.png"}
                  alt="Hotel"
                />
              </ImageViewer>
            </div>
            <div>
              <ImageViewer>
                <img
                  className="photoBookDown"
                  src={"../assets/img/book.png"}
                  alt="Hotel"
                />
              </ImageViewer>
            </div>
          </div>
          <div className="container contentContainerBook">
            <div className="row">
              {" "}
              <p>What this place offers</p>
            </div>
            <div className="row">
              <div className="col">
                <p> Wifi</p>
                <p> TV</p>
                <p> Pool</p>
              </div>
              <div className="col">
                <p> Private Bathroom</p>
                <p> Cleaning service</p>
                <p> 10 minutes from the airport</p>
              </div>
            </div>
          </div>
          <Popup
            trigger={
              <button className="btn btn-sm btn-default btnPopupCityBook text-white textMare">
                <p className="btnTextPopupCityBook">Book your stay</p>
              </button>
            }
            modal
            contentStyle={contentStyle}
          >
            <SignPopup />
          </Popup>
        </div>
      </Desktop>
      <TabletAndBelow>
        <div className="card popupCardCityBook">
          <Row>
            <ImageViewer>
              <img
                className="photoBook"
                src={"../assets/img/book.png"}
                alt="Hotel"
              />
            </ImageViewer>
          </Row>

          <Row>
            <div className="tableBook">
              <div className="priceRow">
                <h1 className="priceTitle"> Price</h1>
                <h1 className="priceText"> Euro 100 / night</h1>
              </div>

              <div className="guestRow">
                <h1 className="guestTitle"> Guests</h1>
                <h1 className="guestText"> {guests} guests</h1>
              </div>
              <div className="roomsRow">
                <h1 className="roomsTitle"> rooms</h1>
                <h1 className="roomsText"> {rooms} rooms</h1>
              </div>
              <div className="checksRow">
                <h1 className="checkInTitle"> Check-in</h1>
                <h1 className="checkinText"> {checkIn}</h1>
                {/* <div className="separator"></div> */}
                <h1 className="checkoutTitle"> Check-out</h1>
                <h1 className="checkoutText"> {checkOut}</h1>
              </div>
            </div>
          </Row>
          <Row>
            <Popup
              trigger={
                <button className="btn btn-sm btn-default btnPopupCityBook text-white textMare">
                  <p className="btnTextPopupCityBook">Book your stay</p>
                </button>
              }
              modal
              contentStyle={contentStyle}
            >
              <SignPopup />
            </Popup>
          </Row>
        </div>
      </TabletAndBelow>
      <Between>
        <div className="container popupCardCityBook">
          <Row>
            <Col>
              <div className="tableBook">
                <div className="priceRow">
                  <h1 className="priceTitle"> Price</h1>
                  <h1 className="priceText"> Euro 100 / night</h1>
                </div>

                <div className="guestRow">
                  <h1 className="guestTitle"> Guests</h1>
                  <h1 className="guestText"> {guests} guests</h1>
                </div>
                <div className="roomsRow">
                  <h1 className="roomsTitle"> rooms</h1>
                  <h1 className="roomsText"> {rooms} rooms</h1>
                </div>
                <div className="checksRow">
                  <h1 className="checkInTitle"> Check-in</h1>
                  <h1 className="checkinText"> {checkIn}</h1>
                  {/* <div className="separator"></div> */}
                  <h1 className="checkoutTitle"> Check-out</h1>
                  <h1 className="checkoutText"> {checkOut}</h1>
                </div>
              </div>
            </Col>
            <Col>
            <ImageViewer>
                <img
                  className="photoBookBetween"
                  src={"../assets/img/book.png"}
                  alt="Hotel"
                />
              </ImageViewer>
            </Col>
          </Row>
          <Row>
            {/* facilitati */}
            <Col>
              <Row className="container contentContainerBookBetween">
                <Col>
                  <p> Wifi</p>
                  <p> TV</p>
                  <p> Pool</p>
                </Col>
                <Col>
                  <p> Private Bathroom</p>
                  <p> Cleaning service</p>
                  <p> 10 minutes from the airport</p>
                </Col>
              </Row>
            </Col>
            {/* button */}
            <Col>
              <Popup
                trigger={
                  <button className="btn btn-sm btn-default btnPopupCityBook text-white textMare">
                    <p className="btnTextPopupCityBook">Book your stay</p>
                  </button>
                }
                modal
                contentStyle={contentStyle}
              >
                <SignPopup />
              </Popup>
            </Col>
          </Row>
        </div>
      </Between>
    </div>
  );
}

export default LocationPopupBook;
