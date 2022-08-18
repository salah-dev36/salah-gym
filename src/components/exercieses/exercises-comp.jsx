import React, { useContext, useState, useEffect } from "react";
import { Pagination } from "@mui/material";

import { ExercisesContext } from "../../contexts/exercices-context";
import { DisplayedExercisesContext } from "../../contexts/displayed-exercises-context";

import ExerciseCard from "../exercise-card/exercise-card-comp";

import {
  Caption,
  ExercicesSectionContainer,
  ExercisesList,
  PaginationContainer,
} from "./exercises-styles";

const Exercises = ({ searchField }) => {
  const { allExercises } = useContext(ExercisesContext);
  const { displayedExercises, setDisplayedExercises } = useContext(
    DisplayedExercisesContext
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    if (allExercises) {
      const filteredExercises = allExercises.filter((exercice) => {
        return (
          exercice.name.toLowerCase().includes(searchField) ||
          exercice.bodyPart.toLowerCase().includes(searchField) ||
          exercice.target.toLowerCase().includes(searchField)
        );
      });

      setDisplayedExercises(filteredExercises);
    }
  }, [searchField, allExercises]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    if (displayedExercises) {
      const itemsPerPage = displayedExercises.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      setItemsCount(displayedExercises.length);
      setCurrentItems(itemsPerPage);
    }
  }, [displayedExercises, currentPage]);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

  return (
    <ExercicesSectionContainer>
      <Caption>Showing {itemsCount} Results</Caption>
      <ExercisesList>
        {displayedExercises
          ? currentItems.map((exercise) => {
              return <ExerciseCard key={exercise.id} exercise={exercise} />;
            })
          : ""}
      </ExercisesList>
      <PaginationContainer>
        <Pagination
          color="standard"
          shape="rounded"
          count={Math.ceil(itemsCount / itemsPerPage)}
          page={currentPage}
          onChange={paginate}
        />
      </PaginationContainer>
    </ExercicesSectionContainer>
  );
};

export default Exercises;
