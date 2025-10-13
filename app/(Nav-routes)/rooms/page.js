'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allAmenities = [
  { id: 'wifi', name: 'High-speed WiFi' },
  { id: 'tv', name: '4K Smart TV with Netflix' },
  { id: 'shower', name: 'Rainfall Shower' },
  { id: 'minibar', name: 'Mini Bar & Coffee Maker' },
  { id: 'roomService', name: '24/7 Room Service' },
  { id: 'balcony', name: 'Private Balcony/Terrace' },
  { id: 'poolAccess', name: 'Swimming Pool Access' },
  { id: 'loungeAccess', name: 'Executive Lounge Access' },
  { id: 'airportTransfer', name: 'Complimentary Airport Transfer' },
  { id: 'butler', name: 'Personal Butler Service' },
  { id: 'jacuzzi', name: 'In-suite Jacuzzi' },
  { id: 'safe', name: 'In-room Safe' },
  { id: 'breakfast', name: 'Complimentary Breakfast' },
];

// --- DATA FOR THE ROOMS ---
// The `includedAmenities` array now uses the 'id' from the master list above.
const roomData = [
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: '€250',
    description: 'Experience unparalleled comfort in our Deluxe Suite. Featuring a plush king-sized bed, a modern workspace, and a spacious marble bathroom, this suite is designed for both relaxation and productivity. Enjoy serene views of the city skyline from your private balcony.',
    imageSrc: '/images/deluxe_suite.webp',
    includedAmenities: ['wifi', 'tv', 'shower', 'minibar', 'roomService', 'balcony', 'poolAccess', 'safe', 'breakfast'],
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: '€750',
    description: 'The pinnacle of luxury at Casa Lumière. Our Presidential Suite offers a separate living area, a formal dining space for six, a master bedroom with a walk-in closet, and a lavish bathroom with a jacuzzi tub. This suite is the epitome of opulence and exclusivity.',
    imageSrc: '/images/presidential.webp',
    includedAmenities: ['wifi', 'tv', 'shower', 'minibar', 'roomService', 'balcony', 'poolAccess', 'loungeAccess', 'airportTransfer', 'butler', 'jacuzzi', 'safe', 'breakfast'],
  },
  {
    id: 'ocean',
    name: 'Ocean View Room',
    price: '€350',
    description: 'Wake up to the breathtaking sight and sound of the ocean waves. Our Ocean View rooms offer floor-to-ceiling windows, a private terrace, and a tranquil atmosphere. The coastal-inspired decor and premium comforts make it a perfect seaside escape.',
    imageSrc: '/images/Ocean_view.webp',
    includedAmenities: ['wifi', 'tv', 'shower', 'minibar', 'roomService', 'balcony', 'poolAccess', 'safe', 'breakfast'],
  },
];


const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(roomData[0]);

  // Dynamically find which amenities are included and which are not for the selected room
  const includedAmenitiesDetails = allAmenities.filter(amenity =>
    selectedRoom.includedAmenities.includes(amenity.id)
  );
  const notIncludedAmenitiesDetails = allAmenities.filter(amenity =>
    !selectedRoom.includedAmenities.includes(amenity.id)
  );

  return (
    <section className="bg-gray-50 dark:bg-[#131322] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Center Navigation Buttons */}
        <div className="flex justify-center items-center mb-12">
          {roomData.map((room, index) => (
            <React.Fragment key={room.id}>
              <button
                onClick={() => setSelectedRoom(room)}
                className={`hover:cursor-pointer text-lg md:text-xl font-semibold mx-4 px-2 py-1 transition-colors duration-300 focus:outline-none ${selectedRoom.id === room.id
                    ? 'text-amber-600 dark:text-amber-500'
                    : 'text-gray-500 hover:text-amber-600 dark:hover:text-amber-500'
                  }`}
              >
                {room.name}
              </button>
              {index < roomData.length - 1 && (
                <span className="border-l border-gray-300 dark:border-gray-600 h-6"></span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* --- Main Room Details Layout --- */}
        <div key={selectedRoom.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">

          {/* Left Side: Image */}
          <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image width={1200} height={800}
              src={selectedRoom.imageSrc}
              alt={selectedRoom.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              {selectedRoom.name}
            </h2>
            <p className="mt-2 text-2xl font-semibold text-amber-600 dark:text-amber-500">
              {selectedRoom.price} / Night
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedRoom.description}
            </p>

            <div className="mt-auto pt-8">
              <Link href={'/book/{roomID}'} className="w-full sm:w-auto inline-block bg-amber-600 text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 lg:mb-50 text-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* --- Detailed Amenities Section --- */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">What This Room Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {/* Column 1: Included Amenities */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Included in Your Stay</h4>
              <ul className="space-y-3">
                {includedAmenitiesDetails.map(amenity => (
                  <li key={amenity.id} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-700 dark:text-gray-200">{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Available in Other Suites</h4>
              <ul className="space-y-3">
                {notIncludedAmenitiesDetails.length > 0 ? (
                  notIncludedAmenitiesDetails.map(amenity => (
                    <li key={amenity.id} className="flex items-center">
                      <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-gray-500 dark:text-gray-400 line-through">{amenity.name}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-center text-gray-500 dark:text-gray-400 italic">
                    This suite includes all available amenities.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Room;

