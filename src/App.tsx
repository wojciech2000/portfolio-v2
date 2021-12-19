import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "components/header/Header.component";
import Particles from "components/particles/Particles.component";
import Home from "components/home/Home.component";
import { routes } from "utilities/helpers/routes";
import About from "components/about/About.component";
import Skills from "components/skills/Skills.component";
import Projects from "components/projects/Projects.component";

const App = () => (
  <div className="w-full min-h-screen bg-mainBg w-">
    <Router>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.skills} element={<Skills />} />
        <Route path={routes.projects} element={<Projects />} />
      </Routes>
    </Router>

    <Particles />
  </div>
);

export default App;
