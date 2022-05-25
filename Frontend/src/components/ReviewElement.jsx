import React from "react";
import Rating from "react-star-rating-lite";

function ReviewElement({ fullName, date, ratingStars, title, content }) {
  return (
    <div className="cardReview">
      <h1 className="fullName">{fullName}</h1>
      <h2 className="data">{date}</h2>
      <div className="ratings">
        <Rating value={ratingStars} readonly weight="24" />
      </div>
      <h1 className="titleRev"> {title}</h1>
      <p className="contentRev">{content}</p>
    </div>
  );
}

export default ReviewElement;
