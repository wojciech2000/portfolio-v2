import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "components/header/Header.component";
import Particles from "components/particles/Particles.component";
import Home from "components/home/Home.component";

function App() {
  return (
    <div className="w-full h-screen bg-mainBg">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      {/* <Particles /> */}
    </div>
  );
}

export default App;
