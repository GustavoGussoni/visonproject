import "./App.css";
import { CourtesiesComponent } from "./components/Courtesies";
import { OurSuitesComponent } from "./components/OurSuites";
import { StartPageComponent } from "./components/StartPage";
import { TheMotelComponent } from "./components/TheMotel";

function App() {
  return (
    <div className="App">
      <StartPageComponent />
      <OurSuitesComponent />
      <TheMotelComponent />
      <CourtesiesComponent />
    </div>
  );
}

export default App;
