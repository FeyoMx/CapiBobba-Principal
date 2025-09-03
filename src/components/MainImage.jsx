import React, { useState } from 'react';

const MainImage = React.memo(() => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [_imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = (e) => {
        setImageError(true);
        setImageLoaded(true);
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/1024x768/F9A8D4/ffffff?text=CapiBobba+Image+Error';
    };

    return (
        <>
            {!imageLoaded && (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-t-2xl animate-pulse">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-purple-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Cargando imagen...</p>
                    </div>
                </div>
            )}
            
            <img
                src="https://i.imgur.com/i7psA3z.jpeg"
                alt="Tres bebidas CapiBobba con diferentes sabores y el logo de la marca."
                className={`w-full h-full object-contain rounded-t-2xl transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
            />
            
            {imageLoaded && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-2xl"></div>
                    <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 text-center text-shadow-md">
                        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white text-shadow-md">
                            ¡Sabores que te harán sonreír!
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-white text-shadow-md">
                            Descubre la combinación perfecta de sabor y diversión en cada sorbo.
                        </p>
                    </div>
                </>
            )}
        </>
    );
});

export default MainImage;