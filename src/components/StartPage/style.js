import styled from "styled-components";
import backGround from "../../img/slider-d.png";

export const DivStartPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  height: 720px;
  background-image: url(${backGround});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  padding: 22px 16px;
  position: relative;

  @media (min-width: 800px) {
    padding: 22px 70px;
  }
`;

export const DivWelcome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivButtonsWelcome = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 10px;
`;
