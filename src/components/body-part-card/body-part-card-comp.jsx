import React, { useContext, useEffect, useState } from "react";

import { BodyPartImage, CardContainer, Name } from "./body-part-card-styles";
import icon from "../../assets/gym.png";

import { DisplayedExercisesContext } from "../../contexts/displayed-exercises-context";
import { ExercisesContext } from "../../contexts/exercices-context";

const BodyPartCard = ({bodyPartName,setSelectedBodyPart, selectedBodyPart}) => {
  const { setDisplayedExercises } = useContext(DisplayedExercisesContext);
  const { allExercises } = useContext(ExercisesContext);

  useEffect(() => {
    const exercisesByBodyParts = allExercises.filter((exercise) => {
      return exercise.bodyPart.toLowerCase() === selectedBodyPart;
    });

    setDisplayedExercises(exercisesByBodyParts);
  }, [selectedBodyPart]);

  const selectBodyPart = () => {
    setSelectedBodyPart(bodyPartName);
  };

  return (
    <CardContainer onClick={selectBodyPart}>
      <BodyPartImage src={icon} alt="dumbell" />
      <Name>{bodyPartName}</Name>
    </CardContainer>
  );
};

export default BodyPartCard;
