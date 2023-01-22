import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

import NavBar from "./components/navbar/NavBar"
import './App.css';
import Home from './pages/Home';
import Skills from './components/pageComponents/Skills';

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
      <NavBar clicked={clicked} setClicked={setClicked}/>
      <Routes>
        <Route path='/' element={
          <Home clicked={clicked}/>
        }/>
        <Route path='/skills' element={
          <Skills />
        } />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
