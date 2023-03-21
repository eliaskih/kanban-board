import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";
import { useBoardContext } from "../../context/BoardsContext";

export default function Board() {
  const { currentProject } = useBoardContext();
  return (
    <div className="board">
      {currentProject.board.map((column) => (
        <div className="board-column">
          <div className="board-title">
            <div className="board-title-icon todo"></div>
            <h4>todo</h4>
          </div>

          {column.tickets.map((ticket) => (
            <Ticket />
          ))}
        </div>
      ))}
    </div>
  );
}
