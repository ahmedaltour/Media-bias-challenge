import React from "react";
import {
  Boilerplate,
  SecondaryHeader,
  MainContentContainer,
} from "../src/Components";

export default function Series() {
  return (
    <Boilerplate>
      <SecondaryHeader>Popular Series</SecondaryHeader>
      <MainContentContainer type="series" />
    </Boilerplate>
  );
}
