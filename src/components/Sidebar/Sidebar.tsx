import React from "react";
import "./Sidebar.scss";
import { Folder, FolderPlus } from "react-feather";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <p>All BOARDS (2)</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>
        <li>
          <Folder />
          Place board
        </li>
        <li>
          <FolderPlus />
          Create board
        </li>
      </ul>
    </div>
  );
}
