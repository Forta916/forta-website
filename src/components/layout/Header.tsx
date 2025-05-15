'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        buttonRef.current && 
        !dropdownRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close products dropdown when closing the menu
    if (isMenuOpen) {
      setIsMobileProductsOpen(false);
    }
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  // Navigation link styles
  const navLinkClasses = "text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded px-3 py-2 font-medium transition-colors duration-200";
  const activeNavLinkClasses = "text-blue-800 bg-blue-50 rounded px-3 py-2 font-medium";
  
  // Dropdown item styles
  const dropdownItemClasses = "block px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-150 rounded-md";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-800">FORTA</span>
          <span className="ml-2 text-sm text-gray-600">Official Hörmann Dealer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          <Link href="/" className={navLinkClasses}>
            Home
          </Link>
          <div className="relative">
            <button
              ref={buttonRef}
              className={`${isProductsDropdownOpen ? activeNavLinkClasses : navLinkClasses} flex items-center`}
              onClick={toggleProductsDropdown}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              aria-expanded={isProductsDropdownOpen}
              aria-haspopup="true"
            >
              Products
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu with transition */}
            <div
              ref={dropdownRef}
              className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-20 transition-all duration-200 origin-top-left ${
                isProductsDropdownOpen 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link href="/products/garage-doors" className={dropdownItemClasses}>
                Garage Doors
              </Link>
              <Link href="/products/doors" className={dropdownItemClasses}>
                Doors
              </Link>
              <Link href="/products/storage-systems" className={dropdownItemClasses}>
                Storage Systems
              </Link>
            </div>
          </div>
          <Link href="/about" className={navLinkClasses}>
            About Us
          </Link>
          <Link href="/contact" className={navLinkClasses}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-800 focus:outline-none p-2 rounded-md hover:bg-blue-50"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2 font-medium">
            Home
          </Link>
          <div className="py-2">
            <button
              className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2 font-medium flex items-center justify-between w-full"
              onClick={toggleMobileProducts}
              aria-expanded={isMobileProductsOpen}
            >
              Products
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`pl-4 mt-2 overflow-hidden transition-all duration-200 ease-in-out ${
                isMobileProductsOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <Link href="/products/garage-doors" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2">
                Garage Doors
              </Link>
              <Link href="/products/doors" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2">
                Doors
              </Link>
              <Link href="/products/storage-systems" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2">
                Storage Systems
              </Link>
            </div>
          </div>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2 font-medium">
            About Us
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md px-2 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
