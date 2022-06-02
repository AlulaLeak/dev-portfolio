import React from "react";
import SayBetMobile from "../mobile/SayBetMobile";
import SayBetDesktop from "../desktop/SayBetDesktop";
import "../../styles/PortfolioPiece.scss";

export default function SayBet() {
  return window.innerWidth < 500 ? (
    <SayBetMobile />
  ) : (
    <SayBetDesktop />
  );
}
