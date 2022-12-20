import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

function App() {
  const DailyPicture = React.lazy(() => import("./pages/daily-picture"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='daily-picture'
          element={
            <Suspense>
              <DailyPicture />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
