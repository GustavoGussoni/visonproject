import { Card, DivCards, DivText } from "./style";
import imgOne from "../../img/img 1.png";
import imgTwo from "../../img/img 2.png";
import imgThree from "../../img/img 3.png";
import { TextOne, TitleTwo } from "../../styles/typography";

export const CardComponent = () => {
  return (
    <DivCards>
      <Card>
        <img src={imgOne} alt="" />
        <DivText>
          <TitleTwo color="--grey0">Café da manhã</TitleTwo>
          <TextOne color="--grey0" lHeight="--height2">
            Servido todos os dias entre 6h e 10h, somente para o pernoite.
          </TextOne>
        </DivText>
      </Card>
      <Card>
        <img src={imgTwo} alt="" />
        <DivText>
          <TitleTwo color="--grey0">Especial para Aniversariantes</TitleTwo>
          <TextOne color="--grey0" lHeight="--height2">
            A equipe do Vison Motel quer tornar o seu aniversário ainda mais
            especial!
          </TextOne>
        </DivText>
      </Card>
      <Card>
        <img src={imgThree} alt="" />
        <DivText>
          <TitleTwo color="--grey0">Descontos</TitleTwo>
          <TextOne color="--grey0" lHeight="--height2">
            Economize se hospedando com desconto no Motel Vison!
          </TextOne>
        </DivText>
      </Card>
    </DivCards>
  );
};
