import styled from "styled-components";

import { Link } from "react-router-dom";

import { mainColor } from "../../utils/colors";

export const CardContainer = styled(Link)`
  width: 400px;
  height: 445px;
  background-color: white;
  border-top: 4px solid ${mainColor};
  border-bottom-left-radius: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 949px) {
    width: 280px;
    height: 312px;
    margin-bottom: 30px;
  }
`;

export const HzCardContainer = styled(CardContainer) `
width: 280px;
height: 350px;
padding: 10px;
`

export const ExerciseImage = styled.img`
  width: 80%;
  align-self: center;
  `;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ExerciseName = styled.span`
  margin-left: 21px;
  margin-top: 11px;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: black;
  font-size: 24px;
  font-weight: bold;
`;
