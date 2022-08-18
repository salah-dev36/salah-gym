import React, { useContext } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrowContainer, RightArrowContainer } from "./arrow-styles";

import rightImage from "../../assets/right-arrow.png";
import leftImage from "../../assets/left-arrow.png";

export const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <LeftArrowContainer onClick={() => scrollPrev()}>
      <img src={leftImage} alt="previous" />
    </LeftArrowContainer>
  );
};

export const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <RightArrowContainer onClick={() => scrollNext()}>
      <img src={rightImage} alt="next" />
    </RightArrowContainer>
  );
};
