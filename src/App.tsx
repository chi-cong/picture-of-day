import React, { Suspense } from "react";
import { Router, MultiRoute, SingleRoute } from "./lib/react-router";
import { Home } from "./pages/home";
import "./App.css";

function App() {
  const DailyPicture = React.lazy(() => import("./pages/daily-picture"));

  return (
    <Router>
      <MultiRoute>
        <SingleRoute path='/' element={<Home />} />
        <SingleRoute
          path='daily-picture'
          element={
            <Suspense>
              <DailyPicture />
            </Suspense>
          }
        />
      </MultiRoute>
    </Router>
  );
}

export default App;
