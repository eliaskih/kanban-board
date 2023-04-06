import React, { useState } from "react";
import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";
import ProjectsLink from "../ProjectsLinks/ProjectsLink";

export default function Sidebar() {
    const { projects } = useBoardContext();

    return (
        <div className="sidebar">
            <p>All BOARDS ({projects.length})</p>
            <ProjectsLink />
        </div>
    );
}
