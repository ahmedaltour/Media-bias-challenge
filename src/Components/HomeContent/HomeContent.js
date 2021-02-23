import React from "react";

export function HomeContent(props) {
  return (
    <div className="homeContent__wrapper">
      <div className="homeContent__items">{props.children}</div>
    </div>
  );
}
