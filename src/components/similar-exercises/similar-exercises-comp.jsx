import React, { useContext, useEffect, useState } from "react";

import { ExercisesContext } from "../../contexts/exercices-context";

import HorizontalScrollBar from "../horizontal-scrollbar/horizontal-scrollbar-comp";

import { SubTitle } from "../exercise-videos/exercise-videos-styles";

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
  }, []);

  return (
    <div>
      <SubTitle>Similar Body Part Exercises</SubTitle>
      <HorizontalScrollBar similarExercises={similarBodyPart} />
      <SubTitle>Similar Equipement Exercises</SubTitle>
      <HorizontalScrollBar similarExercises={similarEquipment} />
    </div>
  );
};

export default SimilarExercises;
