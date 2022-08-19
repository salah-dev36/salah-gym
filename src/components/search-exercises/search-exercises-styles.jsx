import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
  padding: 20px;

  @media screen and (max-width:949px) {
    padding: 5px;
  }

`;

export const Caption = styled.h2`
  text-align: center;
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 44px;

  @media screen and (max-width:949px) {
    padding: 5px;
    font-size: 34px;
  }

`;

export const SearchSectionContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width:949px) {
    width: 90%;
  }
`;

export const SearchBox = styled.input`
  height: 56px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  width: 75%;
  border: none;
  background-color: white;

  ::placeholder {
    color: ${mainColor};
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width:949px) {
    height: 45px;
    font-size: 16px;
  }
`;

export const ScrollBarContainer = styled.div`
  width: 80%;
  padding: 20px;
  margin: 20px auto;

  @media screen and (min-width: 950px) and (max-width:1200px) {
   width: 92%
  }

  @media screen and (max-width:949px) {
    width: 100%;
  }
`;
