import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  IRoute,
  RouterProvider,
} from "./lib/react-router";
import { Home } from "./pages/home";
import DailyPicture from "./pages/daily-picture";
import DailyDetail from "./pages/daily-picture/daily-detail";
import "./App.css";

function App() {
  const routes: IRoute[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "daily-picture",
      element: <DailyPicture />,
      children: [{ path: ":date", element: <DailyDetail /> }],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
