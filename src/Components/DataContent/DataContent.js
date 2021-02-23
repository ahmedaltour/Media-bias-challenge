import React from "react";
import { State } from "../../State/State";
import { SearchBar, Sort, Card } from "../";
import { renderedData } from "../../Helpers";

export const ContentContext = React.createContext([]);

export function DataContent({ data }) {
  const [state, dispatch, actions, sortOptions] = State();
  return (
    <>
      <div className="media__queries">
        <ContentContext.Provider value={[dispatch, actions, sortOptions]}>
          <SearchBar />
          <Sort />
        </ContentContext.Provider>
      </div>
      <div className="media__content">
        {renderedData(data, state.input, state.sortOption).map((itemData) => (
          <Card key={itemData.title} itemData={itemData} />
        ))}
      </div>
    </>
  );
}
