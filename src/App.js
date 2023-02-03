import "./App.css";
import { OurSuitesComponent } from "./components/OurSuites";
import { StartPageComponent } from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <StartPageComponent />
      <OurSuitesComponent />
    </div>
  );
}

export default App;
