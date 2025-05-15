'use client';

import { ReactNode, useRef, useState, useEffect, Children } from 'react';
import PaginationDots from './PaginationDots';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  showPagination?: boolean;
  singleItemMode?: boolean;
}

export default function Carousel({ children, className = '', showPagination = true, singleItemMode = false }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenCount = Children.count(children);

  // Function to calculate which slide is currently visible
  const updateActiveIndex = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const itemWidth = scrollWidth / childrenCount;
    
    // Check if we're at the end of the scroll
    if (Math.ceil(scrollLeft + containerWidth) >= scrollWidth) {
      // We're at the end, set to last item
      setActiveIndex(childrenCount - 1);
      return;
    }
    
    // Calculate the active index based on scroll position
    const newIndex = Math.min(
      Math.round(scrollLeft / itemWidth),
      childrenCount - 1
    );
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Add scroll event listener
    const handleScroll = () => {
      updateActiveIndex();
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, childrenCount]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      if (singleItemMode) {
        // In single item mode, scroll exactly one container width
        const containerWidth = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollBy({
          left: -containerWidth,
          behavior: 'smooth'
        });
      } else {
        // In regular mode, scroll a fixed amount (original behavior)
        scrollContainerRef.current.scrollBy({
          left: -375,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      if (singleItemMode) {
        // In single item mode, scroll exactly one container width
        const containerWidth = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollBy({
          left: containerWidth,
          behavior: 'smooth'
        });
      } else {
        // In regular mode, scroll a fixed amount (original behavior)
        scrollContainerRef.current.scrollBy({
          left: 375,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left Navigation Arrow */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className={`overflow-x-auto pb-6 hide-scrollbar ${singleItemMode ? 'snap-x snap-mandatory' : ''}`}
      >
        <div className={`flex px-8 ${singleItemMode ? '' : 'space-x-4'}`}>
          {children}
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      {showPagination && childrenCount > 0 && (
        <PaginationDots totalDots={childrenCount} activeDotIndex={activeIndex} />
      )}
    </div>
  );
}
