import React from "react";
import {
  VideosSectionContainer,
  SubTitle,
  Video,
  VideosContainer,
} from "./exercise-videos-styles";

const ExerciseVideos = ({ youtubeVideos, name }) => {
  if (!youtubeVideos.length) return "Loading...";
  return (
    <VideosSectionContainer>
      <SubTitle>Watch {name} exercise videos</SubTitle>
      <VideosContainer>
        {youtubeVideos.slice(0, 6).map((item, index) => {
          const { videoId, thumbnails, title, channelName } = item.video;
          return (
            <Video
              key={index}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={thumbnails[0].url} alt={title} />
              <div>
                <h4>{title}</h4>
                <h6>{channelName}</h6>
              </div>
            </Video>
          );
        })}
      </VideosContainer>
    </VideosSectionContainer>
  );
};

export default ExerciseVideos;
