import { useEffect, useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm" role="dialog">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Modal component</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900" id="modal-title">Reusable overlay</h2>
          </div>
          <button className="rounded-full bg-slate-100 px-3 py-1 text-lg font-bold text-slate-600 hover:bg-slate-200" onClick={onClose} ref={closeButtonRef} type="button">
            ×
          </button>
        </div>
        <p className="mt-4 text-slate-600">This modal is controlled by props, focuses the close button on open, and can be reused anywhere in the app.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button className="btn-secondary" onClick={onClose} type="button">Cancel</button>
          <button className="btn-primary" onClick={onClose} type="button">Looks good</button>
        </div>
      </div>
    </div>
  );
}
