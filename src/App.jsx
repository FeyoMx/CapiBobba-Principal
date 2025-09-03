import React from 'react';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import MainImage from './components/MainImage.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import NeighborhoodsModal from './components/NeighborhoodsModal.jsx';
import BottomBar from './components/BottomBar.jsx';
import { useModal } from './hooks/useModal.js';
import { neighborhoods } from './data/neighborhoods.js';

function App() {
    const { isOpen: showNeighborhoodsModal, openModal, closeModal } = useModal(false);

    return (
        <ErrorBoundary>
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-900 rounded-2xl overflow-hidden container-shadow min-h-[95vh]">
                <div className="relative h-[80vh] flex items-center justify-center">
                    <MainImage />
                    <ActionButtons />
                </div>
                <BottomBar onClick={openModal} />
                <NeighborhoodsModal
                    isOpen={showNeighborhoodsModal}
                    onClose={closeModal}
                    neighborhoods={neighborhoods}
                />
            </div>
        </ErrorBoundary>
    );
}

export default App;
