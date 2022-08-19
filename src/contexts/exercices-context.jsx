import { createContext, useEffect, useState } from "react";

import {
  fetchData,
  exercisesOptions,
  exercisesApiUrl,
} from "../utils/exercises-fetching";

export const ExercisesContext = createContext({
  allExercises: [],
  setAllExercises: () => null,
});

export const ExercisesProvider = ({ children }) => {
  const [allExercises, setAllExercises] = useState([]);
  const value = { allExercises };

  useEffect(() => {
    const fetchExercises = async () => {
      const exerciesesArray = await fetchData(
        exercisesApiUrl,
        exercisesOptions
      );
      setAllExercises(exerciesesArray);
    };
    fetchExercises();
  }, []);

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
