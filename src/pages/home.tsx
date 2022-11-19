import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to={"./daily-picture"}>go to daily picture</Link>
    </>
  );
};
