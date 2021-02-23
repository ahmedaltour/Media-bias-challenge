import React, { useEffect } from "react";
import { DataContent } from "../";
import { State } from "../../State/State";
import feed from "../../../public/feed/sample.json";

export function MainContentContainer({ type }) {
  const [state, dispatch, actions] = State();

  useEffect(() => {
    async function fetchContent() {
      const fetchedData = feed.entries.filter((i) => i.programType === type);
      dispatch({ type: actions.SET_DATA, payload: fetchedData });
    }
    fetchContent();
  }, []);

  return (
    <div className="media__wrapper">
      <div className="media__wrapper-container">
        <DataContent
          data={state.data.filter((item) => item.releaseYear > 2010)}
        />
      </div>
    </div>
  );
}
