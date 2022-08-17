import React from "react";

import {
  BackgroundText,
  BannerContainer,
  BannerImage,
  Content,
  Slogan,
  Title,
} from "./hero-banner-styles";
import { BannerButton } from "../buttons/button-types";

import HeroBannerImage from "../../assets/banner.png";

const HeroBanner = () => {
  return (
    <BannerContainer>
      <Title>Fitness Club</Title>
      <Slogan>
        Sweat, Smile <br /> And Repeat
      </Slogan>
      <Content>Check out the most effective exercises</Content>
      <BannerButton href="#exercices">Explore exercises</BannerButton>
      <BackgroundText>Exercise</BackgroundText>
      <BannerImage src={HeroBannerImage} />
    </BannerContainer>
  );
};

export default HeroBanner;
