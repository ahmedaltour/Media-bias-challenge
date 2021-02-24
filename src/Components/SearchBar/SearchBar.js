import React, { useContext } from "react";
import { ContentContext } from "../DataContent/DataContent";

export function SearchBar() {
  const [dispatch, actions] = useContext(ContentContext);

  const changheHandler = (e) => {
    const input = e.target.value;
    if (input.length > 2) {
      dispatch({ type: actions.CHANGE_INPUT, payload: e.target.value });
    } else {
      dispatch({ type: actions.CHANGE_INPUT, payload: "" });
    }
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search..."
        onChange={changheHandler}
      />
      <div className="searchbar__button">
        <img className="searchbar__button-icon" src="/assets/search.svg" />
      </div>
    </div>
  );
}
