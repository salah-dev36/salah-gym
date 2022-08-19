import styled from "styled-components";

export const VideosSectionContainer = styled.div`
  margin-top: 180px;
  padding: 20px 40px;

  @media screen and (max-width: 950px) {
    margin-top: 80px;
  }
`;
export const SubTitle = styled.h3`
  font-size: 30px;
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 110px;
  margin-bottom: 100px;
`;

export const Video = styled.a`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-decoration: none;
  width: 387px;

  @media screen and (max-width: 950px) {
    340px;
  }
`;
