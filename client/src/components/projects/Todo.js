import React from "react";
import TodoMobile from "../mobile/TodoMobile";
import TodoDesktop from "../desktop/TodoDesktop";
import "../../styles/PortfolioPiece.scss";

export default function Todo() {
  return window.innerWidth < 500 ? (
    <TodoMobile />
  ) : (
    <TodoDesktop />
  );
}
