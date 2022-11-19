import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DailyPicture } from "./pages/daily-picture";
import { Home } from "./pages/home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='daily-picture' element={<DailyPicture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
