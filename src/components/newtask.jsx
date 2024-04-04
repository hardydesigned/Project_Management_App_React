import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-md bg-stone-200"
        onChange={handleChange}
        value={task}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Aufgabe hinzufügen
      </button>
    </div>
  );
}
