import styled from "styled-components";
import { Link } from "react-router-dom";

import { mainColor } from "../../utils/colors";

import { ReactComponent as Logo } from "../../assets/muscle.svg";

export const NavigationContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled(Link)`
  margin: 0 20px;
`;

export const MuscleLogo = styled(Logo)`
  width: 48px;
  height: 48px;
`;

export const LinksContainer = styled.div`
  width: 15%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #3a1212;
  border-bottom: 3px solid ${mainColor};
`;

export const ExerciesLink = styled.a`
  text-decoration: none;
  color: #3a1212;
  border-bottom: 3px solid #fffafb;
`;
