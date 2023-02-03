/* eslint-disable jsx-a11y/anchor-has-content */
import { TextOne, TitleOne, TitleTwo } from "../../styles/typography";
import { ButtonPassTo, ButtonSecondary } from "../Buttons/style";
import { DivOurSuites, DivPrice, DivSuitesInfo } from "./style";
import vectorleft from "../../img/vectorleft.png";
import vectorright from "../../img/vectorright.png";

export const OurSuitesComponent = () => {
  return (
    <DivOurSuites>
      <TitleOne color="--white">Nossas suítes</TitleOne>
      <DivSuitesInfo>
        <ButtonPassTo className="to-the-left">
          <img src={vectorleft} alt="imagem de uma seta para a esquerda"></img>
        </ButtonPassTo>
        <ButtonPassTo className="to-the-right">
          <img src={vectorright} alt="imagem de uma seta para a direita"></img>
        </ButtonPassTo>
        <DivPrice>
          <div className="div-info-price">
            <TitleTwo color="--grey0">Suíte Cristal</TitleTwo>
            <TextOne color="--grey0" lHeight="--height1">
              A partir de R$164,00
            </TextOne>
          </div>
          <ButtonSecondary color="--brown-primary">Saiba mais</ButtonSecondary>
        </DivPrice>
        <a href="http://localhost:3000/">Ver todas as suítes</a>
      </DivSuitesInfo>
    </DivOurSuites>
  );
};
