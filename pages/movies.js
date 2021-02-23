import React from "react";
import {
  Boilerplate,
  SecondaryHeader,
  MainContentContainer,
} from "../src/Components";

export default function Movies() {
  return (
    <Boilerplate>
      <SecondaryHeader>Popular Movies</SecondaryHeader>
      <MainContentContainer type="movie" />
    </Boilerplate>
  );
}
