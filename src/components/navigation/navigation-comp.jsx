import React from "react";

import {
  ExerciesLink,
  HomeLink,
  LinksContainer,
  LogoContainer,
  MuscleLogo,
  NavigationContainer,
} from "./navigation-styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <MuscleLogo />
      </LogoContainer>

      <LinksContainer>
        <HomeLink to="/">Home</HomeLink>
        <ExerciesLink href="#exercises">Exercises</ExerciesLink>
      </LinksContainer>
    </NavigationContainer>
  );
};

export default Navigation;
