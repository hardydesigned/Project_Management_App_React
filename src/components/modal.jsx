import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";

const Modal = forwardRef(function Modal({ children, onClose }, ref) {
  const dialogref = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogref.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogref}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog">
        <button className="mt-4 text-right">Schließen</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
