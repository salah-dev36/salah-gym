import { createContext, useState } from "react";

export const DisplayedExercisesContext = createContext({
  displayedExercises: [],
  setDisplayedExercises: () => null,
});

export const DisplayedExercisesProvider = ({ children }) => {
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const value = { displayedExercises, setDisplayedExercises };

  return (
    <DisplayedExercisesContext.Provider value={value}>
      {children}
    </DisplayedExercisesContext.Provider>
  );
};
