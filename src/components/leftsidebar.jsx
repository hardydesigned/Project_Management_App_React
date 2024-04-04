export default function LeftSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Deine Projekte
        </h2>
        <div>
          <button
            onClick={onStartAddProject}
            className="px-8 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-400 hover:bg-stone-600"
          >
            + Projekt hinzufügen
          </button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssclass =
              "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            if (selectedProjectId === project.id) {
              cssclass += " bg-stone-800 text-stone-200";
            } else {
              cssclass += " text-stone-400";
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={cssclass}
                >
                  {project.name}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
