import styled from "styled-components";
import theMotel from "../../img/o-motel-d.png";
export const DivTheMotel = styled.article`
  width: 100%;
  background: #eeeeee;

  display: flex;

  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;

  .div-img {
    width: 104%;
    height: 512px;
    background-image: url(${theMotel});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -5px;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    height: 705px;
    padding: 80px 72px;
    position: unset;

    .div-img {
      width: -webkit-fill-available;
      max-width: 570px;
      height: 512px;
    }
  }
`;

export const TheMotelInfo = styled.div`
  width: -webkit-fill-available;
  max-width: 570px;
  gap: 20px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  bottom: 40px;

  @media (min-width: 800px) {
    align-self: end;
    position: unset;
  }
`;

export const ContentInfo = styled.div`
  background-color: var(--white);
  align-items: flex-start;
  justify-content: flex-start;
  padding: 72px 32px;
  flex-direction: column;

  gap: 20px;
  margin: 0 24px;

  p {
    text-align: left;
  }
  @media (min-width: 800px) {
    margin: unset;
    height: 500px;
  }
`;
