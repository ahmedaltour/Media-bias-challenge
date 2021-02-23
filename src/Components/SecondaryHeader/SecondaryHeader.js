import React from "react";

export function SecondaryHeader({ children }) {
  return (
    <div className="secondaryHeader__wrapper">
      <div className="secondaryHeader__text">{children}</div>
    </div>
  );
}
