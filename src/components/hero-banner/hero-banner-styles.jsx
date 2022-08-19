import styled from "styled-components";

import { mainColor } from "../../utils/colors";

export const BannerContainer = styled.div`
  margin-top: 212px;
  position: relative;
  padding: 20px 40px;

  @media screen and (min-width: 950px) and (max-width:1200px) {
    margin-top: 100px;
  }

  @media screen and (max-width : 949px) {
    margin-top: 10px;
  }

`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 26px;
  color: ${mainColor};

  @media screen and (min-width: 950px) and (max-width:1200px) {
    font-size: 24px;
  }
`;

export const Slogan = styled.h3`
  font-weight: 600;
  font-size: 44px;
  margin: 30px 0 23px;

  @media screen and (min-width: 950px) and (max-width:1200px) {
    font-size: 40px;
  }
`;

export const Content = styled.span`
  font-size: 22px;
  line-height: 35px;

  @media screen and (min-width: 950px) and (max-width:1200px) {
    font-size: 20px;
  }
`;

export const BackgroundText = styled.span`
  font-weight: 600px;
  color: ${mainColor};
  opacity: 0.1;
  font-size: 200px;

  @media screen and (max-width : 949px) {
    display:none;
  }
`;

export const BannerImage = styled.img`
  position: absolute;
  right: 40px;
  top: 0px;
  width: 700px;
  height: 900px;
  margin-top: -330px;

  @media screen and (min-width: 950px) and (max-width:1200px) {
    width: 550px;
    height 707px;
    margin-top: -190px;
  }

  @media screen and (max-width : 949px) {
    display:none;
  }
`;
