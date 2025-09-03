import React from 'react';

const BottomBar = React.memo(({ onClick }) => (
    <button
        onClick={onClick}
        className="w-full p-4 sm:p-6 bg-purple-700 hover:bg-purple-800 text-white text-center rounded-b-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
    >
        <p className="text-base sm:text-lg font-light mb-1">
            Servicio a domicilio GRATIS
        </p>
        <p className="text-xs sm:text-sm font-light opacity-80">
            Click para ver área de cobertura
        </p>
    </button>
));

export default BottomBar;