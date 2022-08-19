import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Details from "../../components/details/details-comp";
import ExerciseVideos from "../../components/exercise-videos/exercise-videos-comp";
import SimilarExercises from "../../components/similar-exercises/similar-exercises-comp";

import {
  exercisesApiUrl,
  exercisesOptions,
  fetchData,
  youtubeApiUrl,
  youtubeOptions,
} from "../../utils/exercises-fetching";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercicesData = async () => {
      const exerciseDetailData = await fetchData(
        `${exercisesApiUrl}/exercise/${id}`,
        exercisesOptions
      );

      const exerciseVideoData = await fetchData(
        `${youtubeApiUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      setExerciseDetail(exerciseDetailData);
      setYoutubeVideos(exerciseVideoData.contents);
    };

    fetchExercicesData();
  }, [id]);

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        youtubeVideos={youtubeVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExerciseDetails;
