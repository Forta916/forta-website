'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface CarouselItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function CarouselItem({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle,
  children 
}: CarouselItemProps) {
  return (
    <div className="flex-none w-72 mx-2">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="288px"
            className="object-contain"
            priority
          />
        </div>
        <div className="p-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
          {children && <div className="mt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
}
