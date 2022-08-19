import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";


import Spinner from "./components/spinner/spinner-comp";

const Layout = lazy(() => import('./routes/layout/layout'))
const Homepage = lazy(() => import('./routes/homepage/homepage'))
const ExerciseDetails = lazy(() => import('./routes/exercise-details/exercise-details-comp'))

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
