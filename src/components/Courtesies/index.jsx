import { TitleOne } from "../../styles/typography";
import { CardComponent } from "../Cards";
import { DivCourtesies } from "./style";

export const CourtesiesComponent = () => {
  return (
    <DivCourtesies>
      <TitleOne color="--white">Cortesias</TitleOne>
      <CardComponent></CardComponent>
    </DivCourtesies>
  );
};
