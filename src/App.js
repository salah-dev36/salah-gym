import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./routes/layout/layout";
import Homepage from "./routes/homepage/homepage";
import ExerciseDetails from "./routes/exercise-details/exercise-details-comp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
