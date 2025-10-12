'use client';

import React from 'react';
import Image from 'next/image';

// --- RESTAURANT TIMINGS DATA ---
const diningTimings = [
  { meal: 'Breakfast', hours: '7:00 AM - 10:30 AM' },
  { meal: 'Lunch', hours: '12:00 PM - 3:00 PM' },
  { meal: 'Dinner', hours: '6:00 PM - 10:00 PM' },
];

// --- EXPANDED SAMPLE MENU DATA ---
const menu = {
  starters: [
    { name: 'Seared Scallops', description: 'With Stornoway black pudding, pea purée, and a lemon butter sauce.' },
    { name: 'Heritage Tomato & Burrata Salad', description: 'Drizzled with aged balsamic glaze and fresh basil oil.' },
    { name: 'Wild Mushroom & Truffle Soup', description: 'Creamy and rich, served with truffle-infused brioche croutons.' },
    { name: 'Gin-Cured Salmon', description: 'With pickled cucumber, dill crème fraîche, and toasted sourdough.' },
    { name: 'Duck Liver Parfait', description: 'Served with a spiced apple chutney and warm brioche.' },
  ],
  mains: [
    { name: 'Pan-Roasted Gressingham Duck Breast', description: 'Served with a cherry and red wine reduction, potato dauphinoise, and seasonal greens.' },
    { name: 'Grilled Halibut', description: 'Accompanied by saffron risotto, samphire, asparagus, and a white wine velouté.' },
    { name: '28-Day Dry-Aged Ribeye Steak (10oz)', description: 'Locally sourced, cooked to your liking, with triple-cooked chips, onion rings and a choice of peppercorn or béarnaise sauce.' },
    { name: 'Beetroot & Goat\'s Cheese Wellington (V)', description: 'A vegetarian take on a classic, encased in puff pastry with a rich vegetable gravy.' },
    { name: 'Slow-Braised Lamb Shank', description: 'Cooked in a red wine and rosemary jus, served on a bed of creamy mashed potatoes.' },
  ],
  desserts: [
    { name: 'Sticky Toffee Pudding', description: 'With vanilla bean ice cream and a rich butterscotch sauce.' },
    { name: 'Dark Chocolate Fondant', description: 'Melt-in-the-middle, served with a tangy raspberry sorbet.' },
    { name: 'Classic Lemon Tart', description: 'With crème fraîche and a sprinkle of fresh raspberries.' },
    { name: 'British Cheeseboard', description: 'A selection of local and British cheeses, served with artisan crackers, quince jelly, and chutney.' },
  ],
};

// --- REDEFINED PHOTO GALLERY DATA ---
const diningPhotos = [
  { src: '/images/dining2.webp', alt: 'Elegant restaurant interior at dusk' },
  { src: '/images/dining2.webp', alt: 'A beautifully plated main course' },
  { src: '/images/dining2.webp', alt: 'A craft cocktail at the bar' },
  
];


const DiningPage = () => {
  return (
    <div className="bg-white dark:bg-[#131322] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            The Lumière Restaurant
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Experience culinary excellence with locally sourced ingredients, crafted into unforgettable dishes by our award-winning chefs.
          </p>
        </div>

        {/* --- Timings and Photos Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image width={1200} height={800}  src={diningPhotos[0].src} alt={diningPhotos[0].alt} className="rounded-lg shadow-lg w-full h-full object-cover" />
            </div>
            <div>
              <Image width={1200} height={800}  src={diningPhotos[1].src} alt={diningPhotos[1].alt} className="rounded-lg shadow-lg w-full h-full object-cover" />
            </div>
            <div>
              <Image width={1200} height={800}  src={diningPhotos[2].src} alt={diningPhotos[2].alt} className="rounded-lg shadow-lg w-full h-full object-cover" />
            </div>
          </div>
          {/* Timings */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Opening Hours</h2>
            <div className="space-y-4">
              {diningTimings.map((timing) => (
                <div key={timing.meal} className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{timing.meal}</p>
                  <p className="text-gray-600 dark:text-gray-300">{timing.hours}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-amber-700 transition-all duration-300 hover:cursor-pointer">
              Reserve a Table
            </button>
          </div>
        </section>

        {/* --- Menu Section --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Menu</h2>
            <p className="mt-2 text-md text-gray-500 dark:text-gray-400">A taste of modern British cuisine.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Starters */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-600 dark:text-amber-500 mb-4">Starters</h3>
              <div className="space-y-4">
                {menu.starters.map((item) => (
                  <div key={item.name}>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Mains */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-600 dark:text-amber-500 mb-4">Mains</h3>
              <div className="space-y-4">
                {menu.mains.map((item) => (
                  <div key={item.name}>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Desserts */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-600 dark:text-amber-500 mb-4">Desserts</h3>
              <div className="space-y-4">
                {menu.desserts.map((item) => (
                  <div key={item.name}>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DiningPage;

