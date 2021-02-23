import React from "react";
import Boilerplate from "../src/Components/Boilerplate/Boilerplate";
import { SecondaryHeader, HomeContent, HomeCard } from "../src/Components";

export default function Home() {
  return (
    <Boilerplate>
      <SecondaryHeader>Populars Titles</SecondaryHeader>
      <HomeContent>
        <HomeCard title="Series" target="/series" />
        <HomeCard title="Movies" target="/movies" />
      </HomeContent>
    </Boilerplate>
  );
}
