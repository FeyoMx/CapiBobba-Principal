import React from 'react';

// Componente para la imagen principal y superposición
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

        {/* Sección de contenido superpuesta en la PARTE SUPERIOR de la imagen */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white text-shadow-md">
                ¡Sabores que te harán sonreír!
            </p>
            <p className="text-base sm:text-lg md:text-xl text-