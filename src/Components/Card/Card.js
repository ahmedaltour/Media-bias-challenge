import React from "react";

export function Card({ itemData }) {
  return (
    <div className="moviecard__wrapper">
      <img
        className="moviecard__image"
        src={itemData.images["Poster Art"].url}
      ></img>

      <div className="moviecard__text">
        <p>{itemData.title}</p>{" "}
      </div>
    </div>
  );
}
