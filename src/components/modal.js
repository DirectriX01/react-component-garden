import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ children, onClose, actionBar }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className=" relative w-full max-w-md mx-auto my-auto p-6 bg-white rounded-lg shadow-md modal-content">
        <div className="modal-header flex justify-between items-center pb-4 border-b">
          <h2 className="text-lg font-medium">Modal Title</h2>
          <button className="modal-close text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="modal-body py-4">
          <p>{children}</p>
        </div>
        <div className="modal-footer flex justify-end pt-4">
          {actionBar}
          <button className="modal-close btn btn-outline" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
