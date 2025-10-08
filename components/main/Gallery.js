"use client"

import React, { useState, useEffect } from 'react';

// You can install lucide-react for icons: npm install lucide-react
// Or use inline SVGs as I have done here to keep it in a single file.
const ChevronLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);



export default function Gallery() {
 
  const gallerySlides = [
    {
      img: 'images/stay.webp',
      title: 'Luxury View Suites',
      line1: 'Experience unparalleled comfort with breathtaking views that captivate the senses.',
      line2: 'Each suite offers a private balcony and luxurious amenities.',
    },
    {
      img: 'images/dining.webp',
      title: 'Gourmet Dining Experience',
      line1: 'Indulge in culinary masterpieces crafted by our world-renowned chefs.',
      line2: 'A perfect blend of local flavors and international cuisine.',
    },
    {
      img: 'images/spa.webp',
      title: 'Relaxing Spa & Wellness',
      line1: 'Rejuvenate your body and soul in our state-of-the-art spa facilities.',
      line2: 'A sanctuary of peace and tranquility awaits you.',
    },
    {
      img: 'images/nightout.webp',
      title: 'Skyline Lounge',
      line1: 'Relax under the stars in our open-air lounge with mesmerizing city views.',
      line2: 'Sip your favorite drinks and enjoy an unforgettable evening ambiance.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallerySlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === gallerySlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Optional: Add useEffect for auto-sliding
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Changes slide every 5 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentIndex]);


  return (
    <div className="font-sans bg-gray-50 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-8">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-5 md:h-[600px]">
          
          {/* Left Side: Image Carousel */}
          <div className="relative w-full h-80 md:h-full group lg:col-span-3">
             {/* Main Image */}
            <div
              style={{ backgroundImage: `url(${gallerySlides[currentIndex].img})` }}
              className="w-full h-full bg-center bg-cover duration-700 ease-in-out"
            ></div>
             {/* Gradient Overlay for better text visibility on controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Carousel Controls: Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-5 hidden group-hover:block text-white/70 hover:text-white cursor-pointer p-2 bg-black/30 rounded-full transition-all">
              <ChevronLeft size={28} onClick={prevSlide} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-5 hidden group-hover:block text-white/70 hover:text-white cursor-pointer p-2 bg-black/30 rounded-full transition-all">
              <ChevronRight size={28} onClick={nextSlide} />
            </div>

             {/* Carousel Controls: Dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {gallerySlides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                    ></div>
                ))}
            </div>
          </div>
          
          {/* Right Side: Text Content */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-start lg:col-span-2">
            <div className="relative w-full min-h-[300px] md:h-full flex flex-col justify-center">
              {gallerySlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    {slide.title}
                  </h2>
                  <div className="mt-6 text-gray-500 text-lg space-y-2">
                    <p>{slide.line1}</p>
                    <p>{slide.line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

