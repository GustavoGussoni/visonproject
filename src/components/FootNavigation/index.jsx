import {
  DivFootButtons,
  DivFootContact,
  DivFootNav,
  DivFootNavigate,
  DivFootNavLogo,
} from "./style";
import logo from "../../img/logo.png";
import { TextContact, TextContactTwo, TextOne } from "../../styles/typography";
import { BttFooter, ButtonSmall } from "../Buttons/style";
export const FootNavComponent = () => {
  return (
    <DivFootNav>
      <DivFootNavLogo>
        <img src={logo} alt="imagem logo"></img>
        <TextOne color="--white" lHeight="--height2">
          Rua SPMS, Conj./Lote 175/225 - Núcleo Bandeirante - Brasília - DF
        </TextOne>
      </DivFootNavLogo>
      <DivFootNavigate>
        <ButtonSmall>Início</ButtonSmall>
        <ButtonSmall>Suítes</ButtonSmall>
        <ButtonSmall>O Motel</ButtonSmall>
      </DivFootNavigate>
      <DivFootNavigate>
        <ButtonSmall>Gastronomia</ButtonSmall>
        <ButtonSmall>Localização</ButtonSmall>
        <ButtonSmall>Reservas</ButtonSmall>
      </DivFootNavigate>
      <DivFootContact>
        <div className="contact-info">
          <TextContact color="--white">Whatsapp:</TextContact>
          <TextContactTwo color="--white">(061)3552-2297</TextContactTwo>
        </div>
        <div className="contact-info">
          <TextContact color="--white">E-mail:</TextContact>
          <TextContactTwo color="--white">
            contato@motelvison.com
          </TextContactTwo>
        </div>
      </DivFootContact>
      <DivFootButtons>
        <BttFooter backgroundColor="--brown-secondary">Reservas</BttFooter>
        <BttFooter backgroundColor="--brown-secondary">Ver suítes</BttFooter>
        <BttFooter borderBtt="--border1">Whatsapp</BttFooter>
        <BttFooter borderBtt="--border1">Contato</BttFooter>
      </DivFootButtons>
    </DivFootNav>
  );
};
