import { WelcomeMessage, WelcomeTitle } from "../../styles/typography";
import { ButtonPrimary } from "../Buttons/style";
import { HeaderComponent } from "../Header";
import { DivButtonsWelcome, DivStartPage, DivWelcome } from "./style";

export function StartPageComponent() {
  return (
    <DivStartPage>
      <HeaderComponent />
      <DivWelcome>
        <WelcomeMessage color="--white">Bem vindo ao</WelcomeMessage>
        <WelcomeTitle color="--white">Vison Motel</WelcomeTitle>
        <DivButtonsWelcome>
          <ButtonPrimary color="--brown-secondary">Ver suítes</ButtonPrimary>
          <ButtonPrimary color="--brown-primary">Reservas</ButtonPrimary>
        </DivButtonsWelcome>
      </DivWelcome>
    </DivStartPage>
  );
}
