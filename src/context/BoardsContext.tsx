import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Project, projectsData } from "./projects-data";

interface Context {
  projects: Project[];
  createProject: (name: string) => void;
  changeBoard: (index: number) => void;
  currentProject: Project;
}

const BoardsContext = createContext<Context>({
  projects: [],
  createProject: () => {},
  changeBoard: () => {},
  currentProject: {} as Project,
});

export function useBoardContext() {
  return useContext(BoardsContext);
}

type Props = {
  children: React.ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentProject = projects[selectedIndex];

  function createProject(name: string) {
    setProjects([
      ...projects,
      {
        name,
        id: uuidv4(),
        board: [
          { name: "Todo", tickets: [] },
          { name: "Doing", tickets: [] },
          { name: "Done", tickets: [] },
        ],
      },
    ]);
    changeBoard(projects.length);
  }

  function changeBoard(index: number) {
    setSelectedIndex(index);
  }

  return (
    <BoardsContext.Provider
      value={{ projects, createProject, currentProject, changeBoard }}
    >
      {children}
    </BoardsContext.Provider>
  );
}