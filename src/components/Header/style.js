import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  padding: 18px 16px;
  background-color: var(--grey0);

  img {
    object-fit: contain;
  }

  @media (min-width: 800px) {
    display: flex;
    top: 22px;
    bottom: unset;
    background-color: unset;
    padding: 18px 70px;
  }
`;

export const DivButtons = styled.div`
  display: none;
  width: 100%;
  max-width: 650px;
  margin: 0 25px;

  align-items: center;
  justify-content: space-between;
  @media (min-width: 800px) {
    display: flex;
  }
`;
