/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";
import Popup from "reactjs-popup";
import "../assets/styles/popupCity.scss";
import LocationPopupCheckRooms from "./LocationPopupCheckRooms";
import { useMediaQuery } from "react-responsive";

function LocationPopup({ idHotel, nameHotel, imgHotel, descriptionHotel }) {
  const contentStyle = { background: "none", border: "none" };
  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 1280px)" });

  const useTabletAndBelowMediaQuery = () =>
    useMediaQuery({ query: "(max-width: 1279px)" });
  const TabletAndBelow = ({ children }) => {
    const isTabletAndBelow = useTabletAndBelowMediaQuery();

    return isTabletAndBelow ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useDesktopMediaQuery();

    return isDesktop ? children : null;
  };
  return (
    <div className="mainPopupLoc">
      {/* <div className="card popupCardCity">
        <img className="card-img cityImgPopup" src={imgHotel}></img>
        <p className="card-text txtMorePhoto"> More photos..</p>
        <h5 className="card-title popupTitleCity">{nameHotel}</h5>
        <p className="card-text popupDescriptionCity">{descriptionHotel}</p>
        <Popup
          trigger={
            <button className="btn btn-sm btn-default btnPopupCity text-white textMare">
              <p className="btnTextPopupCity">Check rooms</p>
            </button>
          }
          modal
          contentStyle={contentStyle}
          nested
        >
          <LocationPopupCheckRooms idHotel={idHotel} />
        </Popup>
      </div> */}
      <Row>
        <Col>
          <h5 className="popupTitleCity">{nameHotel}</h5>
          <Desktop>
            <p className="popupDescriptionCity">{descriptionHotel}</p>
          </Desktop>
          <TabletAndBelow>
            <p className="popupDescriptionCity">{descriptionHotel.substring(0, 150)}..</p>
          </TabletAndBelow>
        </Col>
        <Col>
          <img className="cityImgPopup" src={imgHotel}></img>
          <p className=" txtMorePhoto text-end"> More photos..</p>
        </Col>
      </Row>
      <Row className="rowBtn">
        <Popup
          trigger={
            <button className="btn btn-sm btn-default btnPopupCity text-white textMare">
              <p className="btnTextPopupCity">Check rooms</p>
            </button>
          }
          modal
          contentStyle={contentStyle}
          nested
        >
          <LocationPopupCheckRooms idHotel={idHotel} />
        </Popup>
      </Row>
    </div>
  );
}

export default LocationPopup;
