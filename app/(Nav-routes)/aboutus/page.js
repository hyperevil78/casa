'use client';

import React from 'react';
import Image from 'next/image';

// --- TEAM & AWARDS DATA ---
// You can easily update the details for your team and awards here.
const teamMembers = [
  {
    name: 'Alistair Finch',
    role: 'General Manager',
    imageUrl: '/images/staff/head.webp',
    bio: 'With over 25 years in the luxury hotel industry across Europe, Alistair brings a wealth of experience and a passion for five-star service to helm the team at Casa Lumière.',
  },
  {
    name: 'Isabelle Dubois',
    role: 'Head of Guest Relations',
    imageUrl: '/images/staff/isa.webp',
    bio: 'Isabelle’s dedication to creating a flawless guest journey is second to none. She leads her team to ensure every visitor receives a personal and wonderfully memorable welcome.',
  },
  {
    name: 'Marco Rossi',
    role: 'Executive Chef',
    imageUrl: '/images/staff/chef.webp',
    bio: 'Chef Marco combines the finest local British produce with Mediterranean flair, creating innovative and exquisite dishes that define the culinary excellence of Casa Lumière.',
  },
];

const awards = [
    { name: 'Condé Nast Traveler Gold List', year: '2024' },
    { name: 'World Luxury Hotel Awards Winner', year: '2023' },
    { name: 'TripAdvisor: Best of the Best', year: '2023' },
    { name: 'Europe Hospitality Excellence Award', year: '2022' },
];


const about = () => {
  return (
    <div className="bg-white dark:bg-[#131322]">
      {/* --- HERO SECTION --- */}
      <div className="relative h-96">
        <img 
            src="https://placehold.co/1920x800/a1887f/333333?text=Welcome+to+Casa+Lumière" 
            alt="Panoramic view of Casa Lumière" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-9xl font-extrabold bg-gradient-to-r from-[#ffe100] via-[#e9c960] to-[#f2ebcd] bg-clip-text text-transparent tracking-tight text-center px-4">
             Casa Lumière
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-20">

        {/* --- OUR STORY SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-500 tracking-tight">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Founded in 2018, Casa Lumière was born from a vision to create an oasis of bespoke luxury amidst the vibrant, beating heart of Liverpool. Our founders, captivated by the city's rich maritime history and its dynamic cultural renaissance, sought to establish a landmark that mirrored Liverpool's own journey—honouring its grand past while embracing a sophisticated future.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Nestled within a meticulously restored Edwardian building near the iconic Royal Albert Dock, our hotel is a testament to timeless elegance. Every detail was crafted to offer a sanctuary of comfort and style, blending classic architecture with contemporary design. From our initial opening, we have strived to be more than just a place to stay; we aim to be a cornerstone of the city's luxury landscape, offering a uniquely Liverpudlian welcome to guests from across the globe.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image width={1200} height={800}
                src="/images/entrance.webp"
                alt="Entrance of Casa Lumière"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
        </section>

        {/* --- MISSION & VISION SECTION --- */}
        <section className="text-center bg-gray-50 dark:bg-gray-800 py-12 px-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                To deliver an extraordinary hospitality experience by blending impeccable, personalized service with the warmth and character of Liverpool. We are dedicated to creating a haven of comfort and luxury where every guest feels uniquely valued and leaves with lasting memories.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                To be recognized as Liverpool's most prestigious boutique hotel, celebrated for our unwavering commitment to excellence, our contribution to the local culture, and our passion for creating an unparalleled guest experience.
              </p>
            </div>
          </div>
        </section>

        {/* --- MEET THE TEAM SECTION --- */}
        <section>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Meet Our Leadership</h2>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                    The driving force behind our commitment to excellence.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member) => (
                    <div key={member.name} className="text-center">
                        <Image width={1200} height={800} 
                            className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
                            src={member.imageUrl} 
                            alt={`Portrait of ${member.name}`} 
                        />
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-amber-600 dark:text-amber-500">{member.role}</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* --- AWARDS & RECOGNITION SECTION --- */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12 px-8 rounded-lg">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Awards & Recognition</h2>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                    We are honored to be recognized for our dedication to excellence in hospitality.
                </p>
            </div>
            <div className="mt-10 max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {awards.map((award) => (
                        <li key={award.name} className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-md shadow-sm">
                            <svg className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                            <span className="font-medium text-gray-800 dark:text-gray-100">{award.name} - </span>
                            <span className="ml-1 text-gray-500 dark:text-gray-300">{award.year}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

      </div>
    </div>
  );
};

export default about;