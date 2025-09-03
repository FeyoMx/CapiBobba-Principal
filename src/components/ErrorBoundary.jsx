import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            ¡Ups! Algo salió mal
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Lo sentimos, ocurrió un error inesperado. Por favor, recarga la página o intenta más tarde.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
                        >
                            Recargar página
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;