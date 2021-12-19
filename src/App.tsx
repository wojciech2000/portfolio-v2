import Header from "components/header/Header.component";
import Particles from "components/particles/Particles.component";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden w-full h-screen bg-mainBg">
      <Router>
        <Header />
      </Router>

      {/* <Particles /> */}
    </div>
  );
}

export default App;
