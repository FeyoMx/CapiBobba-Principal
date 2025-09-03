import React from 'react';

const ActionButtons = React.memo(() => (
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
                href="https://wa.me/5217711831526"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 min-h-[48px] min-w-[120px]"
                aria-label="Realizar pedido por WhatsApp"
            >
                ¡Pide Ahora!
            </a>
            <a
                href="https://feyomx.github.io/menucapibobba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 min-h-[48px] min-w-[120px]"
                aria-label="Ver menú completo de productos"
            >
                Ver Menú
            </a>
        </div>
    </div>
));

export default ActionButtons;