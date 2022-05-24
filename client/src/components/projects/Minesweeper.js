import React from "react";
import MinesweeperMobile from "../mobile/MinesweeperMobile";
import MinesweeperDesktop from "../desktop/MinesweeperDesktop";
import "../../styles/PortfolioPiece.css";

export default function Minesweeper() {
  return window.innerWidth < 500 ? (
    <MinesweeperMobile />
  ) : (
    <MinesweeperDesktop />
  );
}
