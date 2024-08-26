import React from "react";
import { HeaderProp } from "./headerProp";
import "./header.css";

export const Header: React.FC<HeaderProp> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
