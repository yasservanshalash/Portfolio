import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
function App() {
  const [clicked, setClicked] = useState<boolean>(false); //theme
  // THEME
  const toggletheme = createTheme({
    palette: {
      mode: clicked ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={toggletheme}>
      <div className="App">
        <NavBar clicked={clicked} setClicked={setClicked} />
        <Routes>
          <Route path="/" element={<Home clicked={clicked} />} />
          <Route path="/skills" element={<SkillsPage clicked={clicked} />} />
          <Route
            path="/experience"
            element={<ExperiencePage clicked={clicked} />}
          />
          <Route
            path="/education"
            element={<EducationPage clicked={clicked} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
