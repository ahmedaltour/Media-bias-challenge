import React, { useContext } from "react";
import { ContentContext } from "../DataContent/DataContent";

export function Sort() {
  const [dispatch, actions, sortOptions] = useContext(ContentContext);

  const changheHandler = (e) => {
    dispatch({ type: actions.SET_SORT, payload: e.target.value });
  };

  return (
    <select className="sort" onChange={changheHandler}>
      <option value={sortOptions.ASC_TITLE}>Ascending by Title</option>
      <option value={sortOptions.DSC_TITLE}>Descending by Title</option>
      <option value={sortOptions.ASC_YEAR}>Ascending by Year</option>
      <option value={sortOptions.DSC_YEAR}>Descending by Year</option>
    </select>
  );
}
