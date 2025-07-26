import React, { useState } from 'react';

const MainImage = () => (
    <>
        {/* Imagen principal de CapiBobba */}
        <img
            src="https://i.imgur.com/i7psA3z.jpeg"
            alt="Tres bebidas CapiBobba con diferentes sabores y el logo de la marca."
            className="w-full h-full object-contain rounded-t-2xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1024x768/F9A8D4/ffffff?text=CapiBobba+Image+Error'; }}
        />
        {/* Capa de oscurecimiento sobre la imagen para mejorar el contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-2xl"></div>

        {/* Texto superpuesto (esto ya lo tenías) */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 text-center text-shadow-md">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white text-shadow-md">
                ¡Sabores que te harán sonreír!
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white text-shadow-md">
                Descubre la combinación perfecta de sabor y diversión en cada sorbo.
            </p>
        </div>
    </>
);
// Componente para los botones de acción
const ActionButtons = () => (
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-3">
            {/* Botón "¡Pide Ahora!" enlazado a WhatsApp */}
            <a
                href="https://wa.me/5217712794633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
                ¡Pide Ahora!
            </a>
            {/* Botón "Ver Menú" enlazado al menú externo */}
            <a
                href="https://feyomx.github.io/Menu-CapiBobba-/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
                Ver Menú
            </a>
        </div>
    </div>
);

// Componente para el modal de fraccionamientos
const NeighborhoodsModal = ({ isOpen, onClose, neighborhoods }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Fraccionamientos con Servicio GRATIS</h2>
                <ul className="list-disc list-inside text-gray-700 max-h-60 overflow-y-auto pr-2">
                    {neighborhoods.map((name) => (
                        <li key={name} className="py-1 border-b border-gray-200 last:border-b-0">
                            {name}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                    aria-label="Cerrar"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

// Componente para la barra inferior clickeable
const BottomBar = ({ onClick }) => (
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
);

// Componente principal de la aplicación React
function App() {
    const [showNeighborhoodsModal, setShowNeighborhoodsModal] = useState(false);

    const neighborhoods = [
        'Viñedos', 'Real Navarra', 'Señeros', 'Qvalta', 'Amores de don Juan',
        'San Alfonso', 'Santa Matilde', 'Real Toledo', 'Ciruelos', 'Real de Joyas',
        'Lindavista', 'Valle Diamante', 'Esmeralda', 'Mineral del oro', 'Residencial Aurora',
        'Platinum', 'Bosques de Santa Matilde','Sendero de los pinos'
    ];

    return (
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-900 rounded-2xl overflow-hidden container-shadow min-h-[95vh]">
            {/* Contenedor que agrupa la imagen y los botones para el posicionamiento */}
            <div className="relative h-[80vh] flex items-center justify-center">
                <MainImage />
                <ActionButtons />
            </div>
            <BottomBar onClick={() => setShowNeighborhoodsModal(true)} />
            <NeighborhoodsModal
                isOpen={showNeighborhoodsModal}
                onClose={() => setShowNeighborhoodsModal(false)}
                neighborhoods={neighborhoods}
            />
        </div>
    );
}

export default App;
