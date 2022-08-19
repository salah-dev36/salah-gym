import React from "react";

import BodyPartImage from "../../assets/body-part.png";
import EquipmentImage from "../../assets/equipment.png";
import TargetImage from "../../assets/target.png";

import {
  AdditionalInfoContainer,
  Description,
  DetailImage,
  DetailsContainer,
  ExerciceInfoContainer,
  IconContainer,
  Info,
  Title,
} from "./details-styles";

const Details = ({ exerciseDetail }) => {
  const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail;

  return (
    <DetailsContainer>
      <DetailImage src={gifUrl} alt={name} loading="lazy" />
      <ExerciceInfoContainer>
        <Title>{name}</Title>
        <Description>
          Exercises keep you strong. <b>{name}</b> is one of the best exercises
          to target your <b>{target}</b>. It will help you improve your mood and
          gain energy
        </Description>
        <AdditionalInfoContainer>
          <IconContainer>
            <img src={BodyPartImage} alt={bodyPart} />
          </IconContainer>
          <Info>{bodyPart}</Info>
        </AdditionalInfoContainer>
        <AdditionalInfoContainer>
          <IconContainer>
            <img src={TargetImage} alt={target} />
          </IconContainer>
          <Info>{target}</Info>
        </AdditionalInfoContainer>
        <AdditionalInfoContainer>
          <IconContainer>
            <img src={EquipmentImage} alt={equipment} />
          </IconContainer>
          <Info>{equipment}</Info>
        </AdditionalInfoContainer>
      </ExerciceInfoContainer>
    </DetailsContainer>
  );
};

export default Details;
