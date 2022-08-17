import React, { useContext, useEffect, useState } from "react";

import {
  Caption,
  SearchBox,
  SearchSectionContainer,
  SectionContainer,
} from "./search-exercises-styles";
import { SearchButton } from "../buttons/button-types";

import { ExercisesContext } from "../../contexts/exercices-context";

const SearchExercies = ({ eventHandler, searchField }) => {
  const { allExercises } = useContext(ExercisesContext);
  const [displayedExercises, setDisplayedExercises] = useState();

  useEffect(() => {
    if (allExercises) {
      const filteredExercises = allExercises.filter((exercice) => {
        return (
          exercice.name.toLowerCase().includes(searchField) ||
          exercice.bodyPart.toLowerCase().includes(searchField) ||
          exercice.target.toLowerCase().includes(searchField)
        );
      });

      setDisplayedExercises(filteredExercises);
    }
  }, [searchField, allExercises]);

  return (
    <SectionContainer>
      <Caption>
        Awesome Exercises You
        <br />
        Shoud Know
      </Caption>
      <SearchSectionContainer onSubmit={() => {}}>
        <SearchBox
          type="text"
          onChange={eventHandler}
          placeholder="Search Exercises"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchSectionContainer>
    </SectionContainer>
  );
};

export default SearchExercies;
