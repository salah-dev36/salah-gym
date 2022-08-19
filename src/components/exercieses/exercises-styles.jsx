import styled from "styled-components";

export const ExercicesSectionContainer = styled.div`
  margin-top: 110px;
  padding: 20px;

  @media screen and (max-width:949px) {
    margin-top: 50px;
    padding: 10px;
  }
`;

export const Caption = styled.h3`
  margin-bottom: 46px;
  font-size: 32px;

  @media screen and (max-width:949px) {
    font-size: 28px;
  }
`;

export const ExercisesList = styled.div`
  display: flex;
  gap: 110px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width:949px) {
    gap: 50px;
  }
`;
export const PaginationContainer = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
`;
