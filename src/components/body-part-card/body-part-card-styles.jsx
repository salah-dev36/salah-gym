import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const CardContainer = styled.div`
  margin: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;
  border-top: 3px solid ${mainColor};
  background-color: white;
  width: 270px;
  height: 280px;
  gap: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width:949px) {
    width: 120px;
    height: 124px;
    gap: 15px;
  }
`;

export const BodyPartImage = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (max-width:949px) {
    width: 30px;
    height: 30px;
  }
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #3a1212;
  text-transform: capitalize;

  @media screen and (max-width:949px) {
    font-size: 18px;
  }
`;
