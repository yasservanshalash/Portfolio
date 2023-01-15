import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/navbar/NavBar"
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
      </Routes>
    </div>
  );
}

export default App;
