import { TitleOne } from "../../styles/typography";
import { ButtonTertiary } from "../Buttons/style";
import { CardComponent } from "../Cards";
import { DivCourtesies } from "./style";

export const CourtesiesComponent = () => {
  return (
    <DivCourtesies>
      <TitleOne color="--white">Cortesias</TitleOne>
      <CardComponent></CardComponent>
      <ButtonTertiary>Ver todas as cortesias</ButtonTertiary>
    </DivCourtesies>
  );
};
