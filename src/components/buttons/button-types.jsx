import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const BannerButton = styled.button`
  display: block;
  color: white;
  margin-top: 30px;
  background-color: ${mainColor};
  border: 4px solid ${mainColor};
  border-radius: 3px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  line-height: 20px;
  padding: 3px 15px;
`;

export const SearchButton = styled.button`
  width: 20%;
  border-radius: 4px;
  height: 56px;
  border: none;
  background-color: ${mainColor};
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    border: 2px solid ${mainColor};
    opacity: 0.8;
  }
`;