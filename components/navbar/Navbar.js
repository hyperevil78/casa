"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useUser } from '@clerk/nextjs';



import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();


  return (
    <nav
      className="w-full bg-[#111111] text-white p-5 z-50 sticky top-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#FFE100] font-bold text-xl">
          <Link className="hover:cursor-pointer" href="/">
            Casa Lumière
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 ">

          
          <li>
            <SignedOut>
              <SignInButton>
                <button className="hover:text-zinc-300 transition-colors hover:cursor-pointer xl:text-xl">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
          </li>



          
           {(isLoaded && isSignedIn)?  <Link href="/reservation" className=" hover:text-zinc-300 transition-colors xl:text-xl">
              My Bookings
            </Link> : null}
           
       

          
          <li><Link className="hover:text-zinc-300 transition-colors xl:text-xl" href="/rooms">Stay</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors xl:text-xl" href="/gallery">Gallery</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors xl:text-xl" href="/contact">Contact</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors xl:text-xl" href="/aboutus">About Us</Link></li>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#FFE100] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}>
        <ul className="flex flex-col gap-4 bg-[#000000]/95 backdrop-blur-sm p-5 rounded-lg border-t border-zinc-700">

          <li> <SignedOut>
            <SignInButton>
              <button className="hover:text-zinc-300 transition-colors hover:cursor-pointer xl:text-xl">
                Login
              </button>
            </SignInButton>
          </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>

             {(isLoaded && isSignedIn)?  <Link href="/reservation" className=" hover:text-zinc-300 transition-colors xl:text-xl">
              My Bookings
            </Link> : null}

          <li><Link className="hover:text-zinc-300 transition-colors" href="/rooms">Stay</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors" href="/gallery">Gallery</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors" href="/contact">Contact</Link></li>
          <li><Link className="hover:text-zinc-300 transition-colors" href="/aboutus">About Us</Link></li>
        </ul>
      </div>

      {/* Desktop Dropdown */}
      <div
        className={`hidden md:block absolute left-0 top-full w-full bg-[#121212]/95 backdrop-blur-sm border-t border-zinc-700 transition-all duration-700 ease-in-out overflow-hidden ${isHovered ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="grid grid-cols-4 gap-8 px-10 py-6">
          <div>
            <h3 className="font-semibold text-[#FFE100] mb-2">Stay</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/rooms/deluxe" className="hover:text-zinc-300">Deluxe Suites</Link></li>
              <li><Link href="/rooms/presidential" className="hover:text-zinc-300">Presidential Suite</Link></li>
              <li><Link href="/rooms/ocean" className="hover:text-zinc-300">Ocean View Rooms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#FFE100] mb-2">Dining</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/dining" className="hover:text-zinc-300">Fine Dining</Link></li>
              <li><Link href="/dining/lounge" className="hover:text-zinc-300">Rooftop Lounge</Link></li>
              <li><Link href="/dining/bar" className="hover:text-zinc-300">Wine & Bar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#FFE100] mb-2">Experience</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/spa" className="hover:text-zinc-300">Spa & Wellness</Link></li>
              <li><Link href="/eventss" className="hover:text-zinc-300">Events</Link></li>
              <li><Link href="/adventures" className="hover:text-zinc-300">Local Adventures</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#FFE100] mb-2">More</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/offers" className="hover:text-zinc-300">Exclusive Offers</Link></li>
              <li><Link href="/careers" className="hover:text-zinc-300">Careers</Link></li>
              <li><Link href="/membership" className="hover:text-zinc-300">Membership</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
