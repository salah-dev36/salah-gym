import React, { useContext, useEffect, useState } from "react";

import { ExercisesContext } from "../../contexts/exercices-context";

import HorizontalScrollBar from "../horizontal-scrollbar/horizontal-scrollbar-comp";

import { SubTitle } from "../exercise-videos/exercise-videos-styles";
import { SimilarDataContainer } from "./similar-exercises-styles";
import Loader from "../loader/loader-comp";

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
        similarBodyPart? <HorizontalScrollBar similarExercises={similarBodyPart} /> :<Loader />
      }
      
      <SubTitle>Similar Equipement Exercises</SubTitle>
      {
        similarBodyPart? <HorizontalScrollBar similarExercises={similarEquipment} /> :<Loader />
      }

    </SimilarDataContainer>
  );
};

export default SimilarExercises;
