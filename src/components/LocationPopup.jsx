/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Popup from "reactjs-popup";
import "../assets/styles/popupCity.scss";
import LocationPopupCheckRooms from "./LocationPopupCheckRooms";

function LocationPopup({idHotel, nameHotel, imgHotel, descriptionHotel }) {
  
  const contentStyle = { background: 'none' , border: 'none'};
  return (
    <div className="card popupCardCity">
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
        <LocationPopupCheckRooms
        idHotel={idHotel} />
      </Popup>
    </div>
  );
}

export default LocationPopup;
