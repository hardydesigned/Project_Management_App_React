import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="Empty" className=" w-32 m-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        Keine Projekte vorhanden, füge ein neues hinzu!
      </h2>
      <button
        onClick={onStartAddProject}
        className="px-8 py-2 mt-5 text-xs md:text-base rounded-md bg-stone-900 text-stone-400 hover:bg-stone-600"
      >
        + Projekt hinzufügen
      </button>
    </div>
  );
}
