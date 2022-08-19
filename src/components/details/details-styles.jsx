import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  gap: 60px;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const DetailImage = styled.img`
  width: 729px;
  height: 742px;

  @media screen and (max-width: 949px) {
    width: 360px;
    height: 366px;
  }
`;

export const ExerciceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 36px;
  
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;

export const Description = styled.span`
  font-size: 18px;
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const IconContainer = styled.button`
  background-color: #fff2db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: none;
`;

export const Info = styled.span`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
`;
