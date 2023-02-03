import styled from "styled-components";
import suites from "../../img/suite.png";

export const DivOurSuites = styled.div`
  width: 100%;
  height: 782px;
  padding: 64px 24px;
  flex-direction: column;
  background-color: var(--brown-secondary);
  gap: 32px;
  justify-content: flex-start;

  @media (min-width: 800px) {
    padding: 80px 24px;
  }
`;

export const DivSuitesInfo = styled.div`
  display: flex;
  max-width: 752px;
  width: 100%;
  height: 440px;
  background-image: url(${suites});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  position: relative;

  .to-the-left {
    position: absolute;
    left: 0px;
  }
  .to-the-right {
    position: absolute;
    right: 0px;
  }
  a {
    position: absolute;
    bottom: -30%;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--white);
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 350px;

  background: var(--white);
  gap: 24px;
  padding: 35px 42px;
  position: absolute;
  bottom: -20%;

  .div-info-price {
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      width: max-content;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
