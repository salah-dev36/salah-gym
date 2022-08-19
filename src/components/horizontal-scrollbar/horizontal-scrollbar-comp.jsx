import React from "react";

import BodyPartCard from "../body-part-card/body-part-card-comp";
import { LeftArrow, RightArrow } from "../arrows/arrows-comp";

import { ScrollingMenu } from "./horizontal-scrollbar-styles";

import ExerciseCard from "../exercise-card/exercise-card-comp";

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

const HorizontalScrollBar = ({ isBodyPart, similarExercises }) => {
  return (
    <ScrollingMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {isBodyPart
        ? bodyParts.map((bodyPartName) => {
            return (
              <BodyPartCard key={bodyPartName} bodyPartName={bodyPartName} />
            );
          })
        : similarExercises.map((item) => {
            return <ExerciseCard key={item.id} exercise={item} />;
          })}
    </ScrollingMenu>
  );
};

export default HorizontalScrollBar;
