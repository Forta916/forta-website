'use client';

interface PaginationDotsProps {
  totalDots: number;
  activeDotIndex: number;
}

export default function PaginationDots({ totalDots, activeDotIndex }: PaginationDotsProps) {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: totalDots }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === activeDotIndex ? 'bg-blue-800' : 'bg-gray-300'
          }`}
        ></span>
      ))}
    </div>
  );
}
