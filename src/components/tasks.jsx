import NewTask from "./newtask";

export default function Tasks({ onCreate, onDelete, tasks }) {
  return (
    <section>
      <h2>Aufgaben</h2>
      <NewTask onAdd={onCreate} />

      {tasks.length === 0 && (
        <p className="text-stone-800 my-4"> Keine Aufgaben vorhanden.</p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-400">
          {tasks.map((task) => (
            <li key={task.id} className="flex my-4 justify-between">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-600 hover:text-red-500"
              >
                Löschen
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
