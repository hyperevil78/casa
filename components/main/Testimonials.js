"use client"

const StarIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);


export default function Testimonials() {

  const testimonials = [
    {
      name: 'Juliette Dubois',
      location: 'Paris, France',
      avatar: 'https://placehold.co/100x100/a78bfa/ffffff?text=JD',
      rating: 5,
      review: 'An absolutely unforgettable stay! The service was impeccable, and the ocean view from our suite was breathtaking. We felt pampered from the moment we arrived. Highly recommended!',
    },
    {
      name: 'Édouard Lefevre',
      location: 'Lyon, France',
      avatar: 'https://placehold.co/100x100/f472b6/ffffff?text=EL',
      rating: 5,
      review: 'The culinary experience alone is worth the visit. Every meal was a masterpiece of flavors. The staff went above and beyond to ensure our comfort. A true five-star experience.',
    },
    {
      name: 'Chloé Mercier',
      location: 'Marseille, France',
      avatar: 'https://placehold.co/100x100/60a5fa/ffffff?text=CM',
      rating: 5,
      review: 'The perfect getaway to relax and recharge. The spa is a sanctuary of peace, and the infinity pool is simply paradise. I have never felt so refreshed. I will be back soon!',
    },
    {
      name: 'Lucas Girard',
      location: 'Nice, France',
      avatar: 'https://placehold.co/100x100/fbbf24/ffffff?text=LG',
      rating: 4,
      review: 'A wonderful hotel with beautiful architecture and attentive staff. The location is perfect for exploring the area. Our only wish was that we could have stayed longer. A fantastic holiday.',
    },
  ];

  return (
    <div className="font-sans bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
     
        <div className="text-center">
          
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            What Our Guests Say
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A collection of genuine experiences from our valued guests.
          </p>
        </div>

        
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <img className="w-20 h-20 rounded-full object-cover" src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                
                
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                
                <blockquote className="mt-4 text-gray-600 italic border-l-4 border-indigo-100 pl-4">
                  "{testimonial.review}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
