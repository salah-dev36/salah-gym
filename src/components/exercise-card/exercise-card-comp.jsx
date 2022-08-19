import React from "react";

import { BpButton, TargetButton } from "../buttons/button-types";

import {
  ButtonsContainer,
  CardContainer,
  ExerciseImage,
  ExerciseName,
  HzCardContainer,
} from "./exercise-card-styles";

const ExerciseCard = ({ exercise, HzCard }) => {
  const { gifUrl, name, id, bodyPart, target } = exercise;

  return (
    <>
      {HzCard ? (
        <HzCardContainer to={`/exercises/${id}`}>
          <ExerciseImage src={gifUrl} alt={name} loading="lazy" />
          <ButtonsContainer>
            <BpButton>{bodyPart}</BpButton>
            <TargetButton>{target}</TargetButton>
          </ButtonsContainer>
          <ExerciseName>{name}</ExerciseName>
        </HzCardContainer>
      ) : (
        <CardContainer to={`/exercises/${id}`}>
          <ExerciseImage src={gifUrl} alt={name} loading="lazy" />
          <ButtonsContainer>
            <BpButton>{bodyPart}</BpButton>
            <TargetButton>{target}</TargetButton>
          </ButtonsContainer>
          <ExerciseName>{name}</ExerciseName>
        </CardContainer>
      )}
    </>
  );
};

export default ExerciseCard;
