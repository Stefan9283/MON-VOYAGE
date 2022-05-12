
import React, {useState} from "react";
import Popup from "reactjs-popup";
import "../assets/styles/popupCityCheckRooms.scss";

import CounterInput from "react-counter-input";

import LocationPopupBook from "./LocationPopupBook";





function LocationPopupCheckRooms({ idHotel}) {
  const contentStyle = { background: "none", border: "none" };
  const inputStyle = {
    background: "white",
    borderRadius: "10px",
  };
  const wrapperStyle = {
    padding: "0 0 0 75px",
  };
  const btnStyle = {
    color: "white",
  };


  const [roomC, setRooms] = useState(0);
  const [guestC, setGuests] = useState(0);
  const [dateIn, setDateIn] = useState(0);
  const [dateOut, setDateOut] = useState(0);


  const dataIn = (event)=>{
    const userValue = event.target.value;
    setDateIn(userValue);

    console.log(userValue);

};

const dataOut = (event)=>{

  const userValue = event.target.value;
  setDateOut(userValue);

  console.log(userValue);
};


const regInput = React.useRef();

  return (
    
    <div className="card popupCardCityCheckRooms">
     <div className="linieCheckRoom">
        <p className="popupTitleCityCheckRooms"> Number of guests</p>
        <CounterInput
          wrapperStyle={wrapperStyle}
          inputStyle={inputStyle}
          btnStyle={btnStyle}
          min={0}
         ref={regInput}
          onCountChange={count  => setGuests(count)}
        />
      </div>
      <div className="linieCheckRoom">
        <p className="popupTitleCityCheckRooms"> Number of rooms </p>
        <CounterInput
          wrapperStyle={wrapperStyle}
          inputStyle={inputStyle}
          btnStyle={btnStyle}
          min={0}
          onCountChange={count  => setRooms(count)}
        />
      </div>
      <div className="linieCheckRoom">
        <p className="popupTitleCityCheckRooms"> Check-in </p>
        <input
          id="Checkin"
          className="inputDate"
          type="date"
          onChange={dataIn}
        />
      </div>
      <div className="linieCheckRoom">
        <p className="popupTitleCityCheckRooms"> Check-out </p>
        <input
          id="Checkout"
          className="inputDate"
          type="date"
          onChange={dataOut}
      />
      </div>

      <Popup
        trigger={
          <button className="btn btn-sm btn-default btnPopupCity text-white textMare">
            <p className="btnTextPopupCity">Check availability</p>
          </button>
        }
        modal
        nested
        contentStyle={contentStyle}
      >
        <LocationPopupBook
          idHotel={idHotel}
          guests={guestC}
          rooms={roomC}
          checkIn={dateIn}
          checkOut={dateOut}
        />
      </Popup>
    </div>
  );
}

export default LocationPopupCheckRooms;
