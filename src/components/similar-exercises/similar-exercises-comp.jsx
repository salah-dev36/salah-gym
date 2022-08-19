import React, { useContext, useEffect, useState } from "react";

import { ExercisesContext } from "../../contexts/exercices-context";

import HorizontalScrollBar from "../horizontal-scrollbar/horizontal-scrollbar-comp";
import Spinner from "../spinner/spinner-comp";

import { SubTitle } from "../exercise-videos/exercise-videos-styles";
import { SimilarDataContainer } from "./similar-exercises-styles";


const SimilarExercises = ({ exerciseDetail }) => {
  const [similarBodyPart, setSimilarBodyPart] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const { allExercises } = useContext(ExercisesContext);

  useEffect(() => {
    const exercisesByBodyParts = allExercises.filter((exercise) => {
      return exercise.bodyPart.toLowerCase() === exerciseDetail.bodyPart;
    });

    const exercisesByEquipement = allExercises.filter((exercise) => {
      return exercise.equipment.toLowerCase() === exerciseDetail.equipment;
    });
    setSimilarBodyPart(exercisesByBodyParts);
    setSimilarEquipment(exercisesByEquipement);
  }, [exerciseDetail]);

  return (
    
    <SimilarDataContainer>
      <SubTitle>Similar Body Part Exercises</SubTitle>
      {
        similarBodyPart? <HorizontalScrollBar similarExercises={similarBodyPart} /> :<Spinner />
      }
      
      <SubTitle>Similar Equipement Exercises</SubTitle>
      {
        similarBodyPart? <HorizontalScrollBar similarExercises={similarEquipment} /> :<Spinner />
      }

    </SimilarDataContainer>
  );
};

export default SimilarExercises;
