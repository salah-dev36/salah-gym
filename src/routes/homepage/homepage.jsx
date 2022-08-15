import React from "react";
import Exercises from "../../components/exercieses/exercises-comp";
import HeroBanner from "../../components/hero-banner/hero-banner-comp";
import SearchExercies from "../../components/search-exercises/search-exercises-comp";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <SearchExercies />
      <Exercises />
    </div>
  );
};

export default Homepage;
