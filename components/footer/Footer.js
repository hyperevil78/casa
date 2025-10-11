import React from 'react';
import Link from 'next/link';

// --- SVG Icons for Social Media ---
// Using inline SVGs is a great way to keep everything in one file without extra libraries.

const FacebookIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


// Main Footer Component
export default function App() {
  const navLinks = {
    explore: [
      { name: 'Home', href: '/' },
      { name: 'Rooms & Suites', href: '/rooms' },
      { name: 'Dining', href: '/dining' },
      { name: 'Gallery', href: '/gallery' },
    ],
    about: [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Events', href: '/events' },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12">
          
          {/* Hotel Name and Socials Section */}
          <div className="md:col-span-3 lg:col-span-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight">Casa Lumière</h2>
            <p className="mt-4 text-gray-400">
              Experience unparalleled luxury and comfort. Your perfect escape awaits.
            </p>
            <div className="mt-6 flex space-x-5">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="md:col-span-2 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Explore</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.explore.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">About</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.about.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Legal</h3>
              <ul className="mt-4 space-y-3">
                 <li>
                    <Link href="/privacy" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </li>
                   <li>
                    <Link href="/terms" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Terms of Service
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-500">
            &copy; {currentYear} Casa Lumière. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

