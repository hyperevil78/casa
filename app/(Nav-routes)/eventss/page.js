'use client';

import React from 'react';
import Image from 'next/image';



const attractionsData = [
  {
    name: 'Royal Albert Dock',
    description: 'A stunning complex of dock buildings and warehouses, now home to the city\'s best museums, galleries, restaurants, and bars.',
    distance: '10 min walk',
    imageSrc: '/images/attraction/dock.webp',
  },
  {
    name: 'The Beatles Story',
    description: 'Journey through the lives and music of the Fab Four at this award-winning museum, the world\'s largest permanent exhibition devoted to The Beatles.',
    distance: '12 min walk',
    imageSrc: '/images/attraction/beatles.webp',
  },
  {
    name: 'Anfield Stadium',
    description: 'A must-visit for football fans. Take a tour of the legendary home of Liverpool FC, explore the museum, and soak in the electric atmosphere.',
    distance: '15 min drive',
    imageSrc: '/images/attraction/stadium.webp',
  },
  {
    name: 'Liverpool Cathedral',
    description: 'Discover Britain\'s largest cathedral, an architectural marvel offering breathtaking panoramic views of the city from its tower.',
    distance: '20 min walk',
    imageSrc: '/images/attraction/cathedral.webp',
  },
];

// --- LOCAL EVENTS DATA ---
// You can update this section with current and upcoming events in Liverpool.
const eventsData = [
  {
    name: 'New Exhibition at Tate Liverpool',
    date: 'Now - Dec 2025',
    location: 'Tate Liverpool, Royal Albert Dock',
    description: 'Explore the latest collection of modern and contemporary art from internationally acclaimed artists at the iconic Tate Liverpool.',
    imageSrc: '/images/events/exhibition.webp',
  },
  {
    name: 'Liverpool Music Week',
    date: 'October 25-31, 2025',
    location: 'Various Venues',
    description: 'Celebrate the city\'s vibrant music scene with a week of live performances from established acts and rising stars across Liverpool.',
    imageSrc: '/images/events/music.webp',
  },
  {
    name: 'Theatre Royal\'s New Season',
    date: 'Throughout Autumn',
    location: 'Liverpool Empire Theatre',
    description: 'Catch a spectacular West End show, classic play, or thrilling musical at one of the country\'s most historic and grand theatres.',
    imageSrc: '/images/events/theatre.webp',
  },
];


const EventsPage = () => {
  return (
    <div className="bg-[#131322] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Events & Activities
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Discover the vibrant culture and exciting events that make Liverpool a world-class destination, all just moments from our doorstep.
          </p>
        </div>

        {/* --- Upcoming Local Events Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Upcoming Local Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((event) => (
              <div key={event.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <Image width={1200} height={800} src={event.imageSrc} alt={event.name} className="w-full h-48 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.name}</h3>
                  <div className="flex items-center text-sm text-amber-600 dark:text-amber-500 mb-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{event.date}</span>
                  </div>
                   <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">{event.description}</p>
                   <button className="mt-6 w-full sm:w-auto self-start text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition">
                    Learn More &rarr;
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Nearby Attractions Section --- */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Iconic Liverpool Attractions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {attractionsData.map((attraction) => (
              <div key={attraction.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center">
                <Image width={1200} height={800} src={attraction.imageSrc} alt={attraction.name} className="w-1/3 h-full object-cover"/>
                <div className="p-6 w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{attraction.name}</h3>
                   <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{attraction.distance} from hotel</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default EventsPage;
