import React from "react";
import InterviewSchedulerMobile from "../mobile/InterviewSchedulerMobile";
import InterviewSchedulerDesktop from "../desktop/InterviewSchedulerDesktop";
import "../../styles/PortfolioPiece.scss";

export default function InterviewScheduler() {
  return window.innerWidth < 500 ? (
    <InterviewSchedulerMobile />
  ) : (
    <InterviewSchedulerDesktop />
  );
}
