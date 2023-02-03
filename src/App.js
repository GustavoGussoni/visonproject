import "./App.css";
import { CourtesiesComponent } from "./components/Courtesies";
import { FooterComponent } from "./components/Footer";
import { FootNavComponent } from "./components/FootNavigation";
import { MapComponent } from "./components/Map";
import { OurSuitesComponent } from "./components/OurSuites";
import { StartPageComponent } from "./components/StartPage";
import { TheMotelComponent } from "./components/TheMotel";

export const App = () => {
  return (
    <div className="App">
      <StartPageComponent />
      <OurSuitesComponent />
      <TheMotelComponent />
      <CourtesiesComponent />
      <MapComponent />
      <FootNavComponent />
      <FooterComponent />
    </div>
  );
};
