import Tasks from "./tasks";

export default function Project({
  project,
  onDelete,
  onCreateTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.enddate).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[36rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.name}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Löschen
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.description}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{formattedDate}</p>
      </header>
      <Tasks
        onCreate={onCreateTask}
        onDelete={onDeleteTask}
        tasks={tasks.filter((task) => task.projectid !== project.id)}
      />
    </div>
  );
}
