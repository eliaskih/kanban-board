import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon todo"></div>
          <h4>todo</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon doing"></div>
          <h4>doing</h4>
        </div>
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon done"></div>
          <h4>done</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
