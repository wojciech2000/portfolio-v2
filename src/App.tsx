import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "components/header/Header.component";
import Particles from "components/particles/Particles.component";
import Home from "components/home/Home.component";
import { routes } from "utilities/helpers/routes";
import About from "components/about/About.component";

function App() {
  return (
    <div className="w-full h-screen bg-mainBg">
      <Router>
        <Header />

        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
      </Router>

      {/* <Particles /> */}
    </div>
  );
}

export default App;
