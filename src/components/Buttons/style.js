import styled from "styled-components";

export const ButtonHeader = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: var(--white);
  background: var(--brown-secondary);
  padding: 12px 16px;
  @media (min-width: 800px) {
    background: var(--white);
    color: var(--grey0);
  }
`;

export const ButtonHamburguer = styled.button`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const ButtonPrimary = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  max-width: 160px;

  color: var(--white);
  background: var(${(props) => props.color});
  padding: 12px 16px;
`;

export const ButtonSecondary = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  max-width: 110px;

  color: var(--white);
  background: var(${(props) => props.color});
  padding: 12px 16px;
`;

export const ButtonTertiary = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
  background: var(--grey0);
  padding: 16px 24px;
`;

export const ButtonSmall = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: var(--white);
`;

export const ButtonPassTo = styled.button`
  background: rgba(255, 255, 255, 0.6);
  width: 40px;
  height: 62px;
`;

export const BttFooter = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--white);
  padding: 16px 32px 16px 32px;

  border: var(${(props) => props.borderBtt});
  background: var(${(props) => props.backgroundColor});
`;
