import React from "react";

import {
  Caption,
  ScrollBarContainer,
  SearchBox,
  SearchSectionContainer,
  SectionContainer,
} from "./search-exercises-styles";
import { SearchButton } from "../buttons/button-types";

import HorizontalScrollBar from "../horizontal-scrollbar/horizontal-scrollbar-comp";

const SearchExercies = ({ eventHandler }) => {
  return (
    <SectionContainer>
      <Caption>
        Awesome Exercises You
        <br />
        Shoud Know
      </Caption>
      <SearchSectionContainer>
        <SearchBox
          type="text"
          onChange={eventHandler}
          placeholder="Search Exercises"
        />
        <SearchButton type="button">Search</SearchButton>
      </SearchSectionContainer>
      <ScrollBarContainer>
        <HorizontalScrollBar isBodyPart={true} />
      </ScrollBarContainer>
    </SectionContainer>
  );
};

export default SearchExercies;
