import { DivButtons, Header } from "./style";
import logoVison from "../../img/logo.png";
import { ButtonHamburguer, ButtonHeader, ButtonSmall } from "../Buttons/style";
import hamburguerBtt from "../../img/hamburguer.png";

export const HeaderComponent = () => {
  return (
    <Header>
      <img src={logoVison} alt="imagem logo vison motel" />
      <DivButtons>
        <ButtonSmall>Início</ButtonSmall>
        <ButtonSmall>Suítes</ButtonSmall>
        <ButtonSmall>O Motel</ButtonSmall>
        <ButtonSmall>Cortesias</ButtonSmall>
        <ButtonSmall>Localização</ButtonSmall>
        <ButtonSmall>Contato</ButtonSmall>
      </DivButtons>
      <ButtonHeader>Reservas</ButtonHeader>
      <ButtonHamburguer>
        <img src={hamburguerBtt} alt="imagem ícone hamburguer"></img>
      </ButtonHamburguer>
    </Header>
  );
};
