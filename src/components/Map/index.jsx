import { DivMap, MapContent, MapInfo } from "./style";
import map from "../../img/mapa-d.png";
import { TextOne, TitleOne } from "../../styles/typography";
import { ButtonSecondary } from "../Buttons/style";

export const MapComponent = () => {
  return (
    <DivMap>
      <MapContent>
        <img src={map} alt="imagem mapa"></img>
        <MapInfo>
          <TitleOne color="--grey0">Localização</TitleOne>
          <TextOne color="--grey0" lHeight="--height2">
            Avenida Santos Dumont, 5253 Zona Industrial Norte - Joinville - SC
          </TextOne>
          <ButtonSecondary color="--brown-primary">Traçar rota</ButtonSecondary>
        </MapInfo>
      </MapContent>
    </DivMap>
  );
};
