import React from "react";

import BodyPartCard from "../body-part-card/body-part-card-comp";
import { LeftArrow, RightArrow } from "../arrows/arrows-comp";

import { ScrollingMenu } from "./horizontal-scrollbar-styles";

const bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

const HorizontalScrollBar = () => {
  return (
    <ScrollingMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((bodyPartName) => {
        return <BodyPartCard key={bodyPartName} bodyPartName={bodyPartName} />;
      })}
    </ScrollingMenu>
  );
};

export default HorizontalScrollBar;
