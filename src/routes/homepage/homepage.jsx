import React, { useState } from "react";

import Exercises from "../../components/exercieses/exercises-comp";
import HeroBanner from "../../components/hero-banner/hero-banner-comp";
import SearchExercies from "../../components/search-exercises/search-exercises-comp";

const Homepage = () => {
  const [searchField, setSearchField] = useState("");

  const eventHandler = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div>
      <HeroBanner />
      <SearchExercies eventHandler={eventHandler} searchField={searchField} />
      <Exercises searchField={searchField} />
    </div>
  );
};

export default Homepage;
