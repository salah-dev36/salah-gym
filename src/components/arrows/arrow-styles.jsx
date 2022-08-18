import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const LeftArrowContainer = styled.span`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainColor};
  font-size: 25px;
  border-radius: 4px;
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const RightArrowContainer = styled(LeftArrowContainer)`
  margin-left: 40px;
`;
