import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
  padding: 20px;
`;

export const Caption = styled.h2`
  text-align: center;
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 44px;
`;

export const SearchSectionContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const SearchBox = styled.input`
  height: 56px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  width: 80%;
  border: none;
  background-color: white;

  ::placeholder {
    color: ${mainColor};
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }
`;
