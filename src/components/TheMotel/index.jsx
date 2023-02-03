import { TextOne, TitleOne } from "../../styles/typography";
import { ButtonSecondary } from "../Buttons/style";
import { ContentInfo, DivTheMotel, TheMotelInfo } from "./style";

export const TheMotelComponent = () => {
  return (
    <DivTheMotel>
      <TheMotelInfo>
        <ContentInfo>
          <TitleOne>O Motel</TitleOne>
          <TextOne>
            O Vison Motel está localizado na Zona Industrial Norte, em Joinville
            e conta com ambientes exclusivos e privativos, basta escolher a
            suíte que mais combina com você.
          </TextOne>
          <TextOne>
            Todos os quartos são equipados com TV, ar-condicionado, ducha,
            frigobar e garagem privativa, enquanto outras opções vão além:
            oferecem hidromassagem, pole dance, x sado e no caso da Suíte
            Erótika, até mesmo uma jaula ao redor da cama.
          </TextOne>
          <TextOne>
            Hospede-se e aproveite ainda nosso delicioso café da manhã, servido
            todos os dias para pernoites!
          </TextOne>
          <ButtonSecondary color="--brown-secondary">
            Saiba mais
          </ButtonSecondary>
        </ContentInfo>
      </TheMotelInfo>
      <div className="div-img"></div>
    </DivTheMotel>
  );
};
