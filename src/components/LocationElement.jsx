/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Popup from "reactjs-popup";
import LocationPopup from "./LocationPopup";

function LocationElement({ idHotel, imgLink, cityName, imgHotel, descriptionHotel}) {
  const contentStyle = { background: 'none' , border: 'none'};

  return (
    <div className="card bg-dark text-white">
      <img className="card-img imgCardLoc" src={imgLink}></img>

      <div className="card-img-overlay centered">
        <h5 className="card-title cardCityTitle">{cityName}</h5>

        <Popup
          
          trigger={<p className="card-text cardCityMore"> Find out more</p>}
          modal contentStyle={contentStyle} nested
        >
          <LocationPopup 
            nameHotel={"Mon Voyage Hotel in " + cityName}
            imgHotel={imgHotel}
            descriptionHotel={descriptionHotel}
            idHotel={idHotel}
          />
        </Popup>
      </div>
    </div>
  );
}

export default LocationElement;
