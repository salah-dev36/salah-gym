import React from "react";

import { BpButton, TargetButton } from "../buttons/button-types";

import {
  ButtonsContainer,
  CardContainer,
  ExerciseImage,
  ExerciseName,
} from "./exercise-card-styles";

const ExerciseCard = ({ exercise }) => {
  const { gifUrl, name, id, bodyPart, target } = exercise;

  return (
    <CardContainer to={`/exercises/${id}`}>
      <ExerciseImage src={gifUrl} alt={name} loading="lazy" />
      <ButtonsContainer>
        <BpButton>{bodyPart}</BpButton>
        <TargetButton>{target}</TargetButton>
      </ButtonsContainer>
      <ExerciseName>{name}</ExerciseName>
    </CardContainer>
  );
};

export default ExerciseCard;
