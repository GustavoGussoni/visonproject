import styled from "styled-components";

export const DivFootNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--grey0);
  justify-content: space-between;
  align-items: center;
  padding: 48px 32px;
  gap: 32px;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 64px 144px;
  }
`;

export const DivFootNavLogo = styled.div`
  flex-direction: column;
  gap: 32px;
  width: 100%;

  align-items: center;
  padding: 0 0 32px 0;
  border-bottom: 1px solid var(--white);

  @media (min-width: 800px) {
    padding: unset;
    border-bottom: unset;
    align-items: flex-start;
    max-width: 265px;
  }
  img {
    width: -webkit-fill-available;
    width: 100%;
    max-width: 190px;
  }

  p {
    display: none;
    text-align: left;

    @media (min-width: 800px) {
      display: flex;
    }
  }
`;

export const DivFootNavigate = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @media (min-width: 800px) {
    display: flex;
  }
`;

export const DivFootContact = styled.div`
  display: none;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  @media (min-width: 800px) {
    display: flex;
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DivFootButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (min-width: 800px) {
    display: none;
  }
`;
