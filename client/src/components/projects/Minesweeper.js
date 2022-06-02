import React from "react";
import MinesweeperMobile from "../mobile/MinesweeperMobile";
import MinesweeperDesktop from "../desktop/MinesweeperDesktop";
import "../../styles/PortfolioPiece.scss";

export default function Minesweeper() {
  return window.innerWidth < 500 ? (
    <MinesweeperMobile />
  ) : (
    <MinesweeperDesktop />
  );
}
