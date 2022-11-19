import React from "react";
import { Link, Outlet } from "react-router-dom";

export const DailyPicture: React.FC = () => {
  return (
    <>
      <h1>daly picture</h1>
      <Link to={"/"}>Back to home</Link>
      <Outlet />
    </>
  );
};
