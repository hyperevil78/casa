'use client';

import React from 'react';
import Image from 'next/image';

// --- GALLERY IMAGES DATA ---

const galleryImages = [
  { id: 1, src: '/images/lobby.webp', alt: 'Hotel Lobby', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { id: 2, src: '/images/stay.webp', alt: 'Luxury Room View', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 3, src: '/images/dining2.webp', alt: 'Fine Dining Restaurant', colSpan: 'md:col-span-3' },
  { id: 4, src: '/images/main.webp', alt: 'Swimming Pool Area', colSpan: 'md:col-span-3' },
  { id: 5, src: '/images/spa.webp', alt: 'Hotel Spa & Wellness', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 6, src: '/images/inlouge.webp', alt: 'Lounge Bar Interior', colSpan: 'md:col-span-2' },
  { id: 7, src: '/images/city.webp', alt: 'View of Liverpool City', colSpan: 'md:col-span-6' },
];

const Gallery = () => {
  return (
    <div className="bg-[#131322] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            A visual journey through the elegance and charm of Casa Lumière.
          </p>
        </div>

        {/* Asymmetrical Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4"> {/* Using a 6-column base grid for maximum flexibility */}
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative group overflow-hidden rounded-lg shadow-lg 
                          ${image.colSpan || ''} 
                          ${image.rowSpan || ''}
                          ${!image.rowSpan ? 'h-80' : ''}`} /* Conditionally apply height only to standard items */
            >
              <Image width={1200} height={800}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional: Overlay for image title on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

