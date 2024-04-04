import Input from "./input";
import Modal from "./modal";
import { useRef } from "react";

export default function NewProject({ onCreateProject, onCancel }) {
  const nameref = useRef();
  const descriptionref = useRef();
  const enddateref = useRef();
  const modalref = useRef();

  function handleCreateProject() {
    if (
      nameref.current.value === "" ||
      descriptionref.current.value === "" ||
      enddateref.current.value === ""
    ) {
      modalref.current.open();
    }

    onCreateProject(
      nameref.current.value,
      descriptionref.current.value,
      enddateref.current.value
    );
  }

  return (
    <>
      <Modal ref={modalref}>
        <p>Bitte fülle alle Felder aus.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <h3>Neues Projekt</h3>
        <Input type="text" ref={nameref} label="Projektname" />
        <Input ref={descriptionref} label="Beschreibung" textarea />
        <Input type="date" ref={enddateref} label="Enddatum" />

        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onCancel}
            className="text-stone-700 hover:text-stone-950"
            type="submit"
          >
            Abbrechen
          </button>
          <button
            onClick={handleCreateProject}
            className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950"
            type="submit"
          >
            Projekt erstellen
          </button>
        </menu>
      </div>
    </>
  );
}
