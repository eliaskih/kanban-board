import React, { useState } from "react";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import Navbar from "./components/Navbar/Navbar";
import ProjectsDropdown from "./components/ProjectsDropDown/ProjectsDropdown";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

    function toogleShowCreateTask() {
        setShowCreateTask(!showCreateTask);
    }

    function toggleShowProjectsDropdown() {
        setShowProjectsDropdown(!showProjectsDropdown);
    }

    return (
        <div className="app">
            <Navbar
                toggleShowCreateTask={toogleShowCreateTask}
                toggleShowProjectsDropdown={toggleShowProjectsDropdown}
            />
            <div className="main-container">
                <Sidebar />
                <Board />
            </div>
            {showCreateTask && (
                <CreateTaskModel toggleShowCreateTask={toogleShowCreateTask} />
            )}
            {showProjectsDropdown && (
                <ProjectsDropdown
                    toggleShowProjectsDropdown={toggleShowProjectsDropdown}
                />
            )}
        </div>
    );
}
