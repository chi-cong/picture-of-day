import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to={"./daily-picture"}>go to daily picture</Link>
    </>
  );
};

export default Home;
