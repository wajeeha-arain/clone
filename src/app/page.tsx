'use client'; // Needed if you're using Next.js App Router

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">MyApp</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 absolute md:static bg-white left-0 w-full md:w-auto px-4 md:px-0 transition-all duration-200 ease-in ${
            isOpen ? 'top-16' : 'top-[-400px]'
          }`}
        >
          <li>
            <Link href="/" className=" text-black hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
