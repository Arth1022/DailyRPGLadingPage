import React, { useState } from 'react';

import loja from '../assets/loja.png';
import login from '../assets/login.png';
import inv from '../assets/inv.png';
import contrato from '../assets/contrato.png';
import forja from '../assets/forja.png';
import rank from '../assets/rank.png';

const images = [
  login,
  inv,
  loja,
  contrato,
  forja,
  rank,
];

function Carrossel() {
  const numItems = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numItems) % numItems);
  };
  
  const currentImageSrc = images[currentIndex];

  return (
    <div className="mx-auto flex items-center max-w-xl md:max-w-1xl">
      
      <div className="flex justify-center items-center px-2">
        <button 
          onClick={goToPrev} 
          className="p-1 cursor-pointer text-4xl border-none bg-transparent text-gray-700 hover:text-blue-600 transition duration-200 focus:outline-none"
        >
          &lt;
        </button>
      </div>

      <div className="flex-grow overflow-hidden flex flex-col justify-center items-center px-2">
        <div className="h-72 md:h-130 w-full flex justify-center items-center">
            <img 
              src={currentImageSrc} 
              alt={`Slide ${currentIndex + 1}`} 
              className="max-w-full max-h-full object-contain" 
            />
        </div>
        <p className="mt-2 text-sm text-gray-600">{currentIndex + 1} / {numItems}</p>
      </div>

      <div className="flex justify-center items-center px-2">
        <button 
          onClick={goToNext} 
          className="p-1 cursor-pointer text-4xl border-none bg-transparent text-gray-700 hover:text-blue-600 transition duration-200 focus:outline-none"
        >
          &gt;
        </button>
      </div>
      
    </div>
  );
}

export default Carrossel;