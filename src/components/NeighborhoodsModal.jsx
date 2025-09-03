import React, { useEffect, useRef } from 'react';

const NeighborhoodsModal = React.memo(({ isOpen, onClose, neighborhoods }) => {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            closeButtonRef.current?.focus();
            
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
                
                if (e.key === 'Tab') {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey && document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                ref={modalRef}
                className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative"
            >
                <h2 
                    id="modal-title"
                    className="text-2xl font-bold mb-4 text-gray-800"
                >
                    Fraccionamientos con Servicio GRATIS
                </h2>
                <ul 
                    className="list-disc list-inside text-gray-700 max-h-60 overflow-y-auto pr-2"
                    role="list"
                >
                    {neighborhoods.map((name) => (
                        <li 
                            key={name} 
                            className="py-1 border-b border-gray-200 last:border-b-0"
                            role="listitem"
                        >
                            {name}
                        </li>
                    ))}
                </ul>
                <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 rounded"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>
            </div>
        </div>
    );
});

export default NeighborhoodsModal;