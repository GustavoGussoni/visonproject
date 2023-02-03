import styled from "styled-components";

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  flex-direction: column;
  background-color: var(--white);
  max-width: 368px;
  gap: 32px;

  img {
    width: 100%;
    background-color: var(--brown-tertiary);
  }
  /* @media (min-width: 800px) {
    min-width: 300px;
  } */
`;

export const DivText = styled.div`
  max-width: 304px;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  padding: 0 8px;
`;
