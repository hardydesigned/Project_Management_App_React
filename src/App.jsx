import React, { useState } from "react";
import LeftSideBar from "./components/leftsidebar";
import { useRef } from "react";
import NewProject from "./components/newproject";
import NoProjectSelected from "./components/noprojectselected";
import Project from "./components/project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleCreateTask(task) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        {
          id: Math.random(),
          text: task,
          projectid: prevState.selectedProjectId,
        },
      ],
    }));
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,

      selectedProjectId: null,
    }));
  }

  function handleCreateProject(name, description, enddate) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [
        ...prevState.projects,
        {
          id: Math.random(),
          name: name,
          description: description,
          enddate: enddate,
        },
      ],
    }));
  }

  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  function handleCancelCreateProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <Project
      project={selectedProject}
      onCreateTask={handleCreateTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCreateProject={handleCreateProject}
        onCancel={handleCancelCreateProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <LeftSideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}{" "}
    </main>
  );
}

export default App;
