import styled from "styled-components";

export const DivMap = styled.div`
  width: 100%;
  padding: 80px 144px;
`;

export const MapContent = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    height: 290px;
    @media (min-width: 800px) {
      max-width: 50%;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const MapInfo = styled.div`
  flex-direction: column;
  padding: 64px 32px;
  background-color: var(--white);
  height: 290px;
  gap: 16px;
`;
