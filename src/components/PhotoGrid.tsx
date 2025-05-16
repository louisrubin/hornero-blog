import React, { useState, useRef } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/src/assets/grid/foto1.jpg",
  "/src/assets/grid/foto2.jpg",
  "/src/assets/grid/foto3.jpg",
  "/src/assets/grid/foto4.jpg",
  "/src/assets/grid/foto5.jpg",
  "/src/assets/grid/foto6.jpg",
  "/src/assets/grid/foto7.jpg",
  "/src/assets/grid/foto8.jpg",
  "/src/assets/grid/foto9.jpg",
  "/src/assets/grid/foto10.jpg",
  "/src/assets/grid/foto11.jpg",
  "/src/assets/grid/foto12.jpg",
  "/src/assets/grid/foto13.jpg",
  "/src/assets/grid/foto14.jpg",
  "/src/assets/grid/foto15.jpg",
  "/src/assets/grid/foto16.jpg",
  "/src/assets/grid/foto17.jpg",
  "/src/assets/grid/foto18.jpg",
  "/src/assets/grid/foto19.jpg",
  "/src/assets/grid/foto20.jpg",
  "/src/assets/grid/foto21.jpg",
];

export default function PhotoGrid() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50 && expandedIdx !== null && expandedIdx > 0) {
      setExpandedIdx(expandedIdx - 1);
    } else if (deltaX < -50 && expandedIdx !== null && expandedIdx < images.length - 1) {
      setExpandedIdx(expandedIdx + 1);
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div className="mt-16 grid grid-cols-3 gap-5">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setExpandedIdx(idx)}
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="object-cover w-full h-32 rounded-lg shadow-lg transition-all duration-300"
            />
          </div>
        ))}
      </div>
      {expandedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setExpandedIdx(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {expandedIdx > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 z-50"
              onClick={e => {
                e.stopPropagation();
                setExpandedIdx(expandedIdx - 1);
              }}
              aria-label="Anterior"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
          )}
          <img
            src={images[expandedIdx]}
            alt={`Foto ${expandedIdx + 1}`}
            className="object-contain max-w-full max-h-full rounded-lg shadow-2xl transition-all duration-300"
            onClick={e => e.stopPropagation()}
          />
          {expandedIdx < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 z-50"
              onClick={e => {
                e.stopPropagation();
                setExpandedIdx(expandedIdx + 1);
              }}
              aria-label="Siguiente"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          )}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={e => {
              e.stopPropagation();
              setExpandedIdx(null);
            }}
            aria-label="Cerrar"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}