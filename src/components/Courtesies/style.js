import styled from "styled-components";

export const DivCourtesies = styled.div`
  width: 100%;
  padding: 64px 24px;
  flex-direction: column;
  background-color: var(--brown-tertiary);
  position: absolute;
  top: 170%;

  @media (min-width: 800px) {
    position: unset;
  }
  p {
    max-width: 304px;
  }
`;
