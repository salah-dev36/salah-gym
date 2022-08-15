import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 212px;
  position: relative;
  padding: 20px 40px;
`
export const Title = styled.h2`
  font-weight: 600;
  font-size: 26px;
  color: #FF2625;
`

export const Slogan = styled.h3`
  font-weight: 600;  
  font-size: 44px;
  margin: 30px 0 23px;
`

export const Content = styled.span`
  font-size: 22px;
  line-height: 35px;
  `

export const Button = styled.button`
display: block;
color:white;
margin-top:5px;
background-color:#FF2625;
border: 4px solid #FF2625;
border-radius: 3px;
box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
line-height: 20px;
padding: 3px 15px;
`

export const BannerImage = styled.img`
  position: absolute;
  right: 40px;
  top: 0px;
  width: 700px;
  height: 900px;
  margin-top: -330px;
`