import styled from "styled-components";

export const TitleOne = styled.h1`
  font-weight: 500;
  font-size: 34px;
  line-height: 45px;
  color: var(${(props) => props.color});
`;

export const TitleTwo = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  color: var(${(props) => props.color});
`;
export const WelcomeTitle = styled.h1`
  font-weight: 500;
  font-size: 53px;
  line-height: 71px;
  color: var(${(props) => props.color});

  @media (min-width: 800px) {
    font-weight: 500;
    font-size: 67px;
    line-height: 89px;
  }
`;
export const WelcomeMessage = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: var(${(props) => props.color});

  @media (min-width: 800px) {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
  }
`;

export const TextOne = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: var(${(props) => props.lHeight});
  color: var(${(props) => props.color});
`;

export const TextContact = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 175%;
  letter-spacing: -0.01em;
`;

export const TextFooter = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  text-transform: uppercase;
`;
