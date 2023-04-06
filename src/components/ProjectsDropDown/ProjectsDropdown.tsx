import React from "react";
import { X } from "react-feather";
import ProjectsLink from "../ProjectsLinks/ProjectsLink";
import "./ProjectsDropdown.scss";

type Props = {
    toggleShowProjectsDropdown: () => void;
};

export default function ProjectsDropdown({
    toggleShowProjectsDropdown,
}: Props) {
    return (
        <div className="model-container">
            <div className="model-card project-dropdown">
                <div
                    className="model-close"
                    onClick={() => toggleShowProjectsDropdown()}
                >
                    <X />
                </div>
                <h3>All projects</h3>
                <ProjectsLink />
            </div>
        </div>
    );
}
