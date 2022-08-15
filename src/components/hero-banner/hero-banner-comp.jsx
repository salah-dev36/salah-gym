import React from "react";
import {
  BannerContainer,
  BannerImage,
  Button,
  Content,
  Slogan,
  Title,
} from "./hero-banner-styles";

import HeroBannerImage from "../../assets/banner.png";

const HeroBanner = () => {
  return (
    <BannerContainer>
      <Title>Fitness Club</Title>
      <Slogan>
        Sweat, Smile <br /> And Repeat
      </Slogan>
      <Content>Check out the most effective exercises</Content>
      <Button href="#exercices">Explore exercises</Button>
      <BannerImage src={HeroBannerImage} />
    </BannerContainer>
  );
};

export default HeroBanner;
