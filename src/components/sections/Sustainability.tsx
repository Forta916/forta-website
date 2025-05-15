import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Sustainability() {
  return (
    <section className="bg-green-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              CO<sub>2</sub>-Neutral Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer all garage doors, drives, front doors, room doors, steel frames, steel doors for residential 
              construction and storage systems as standard in a CO<sub>2</sub>-neutral manner at no extra cost.
            </p>
            <div className="mt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Environmentally friendly production processes
                </p>
              </div>
              <div className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  100% renewable energy at all production sites
                </p>
              </div>
              <div className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Support for certified climate protection projects
                </p>
              </div>
              <div className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Annual savings of more than 75,000 tons of CO<sub>2</sub>
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                Learn More About Our Commitment
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 relative">
            <div className="relative w-full rounded-lg shadow-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
              <Image
                src="/images/about/co2/sustainability.avif"
                alt="Sustainable manufacturing at Hörmann"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 -mb-4 sm:-mb-6 -mr-2 sm:-mr-6 bg-blue-800 rounded-lg shadow-lg p-3 sm:p-4 flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                <Image
                  src="/images/co2-neutral-badge.avif"
                  alt="CO2 Neutral Certification"
                  fill
                  sizes="(max-width: 640px) 48px, 64px"
                  className="object-contain"
                />
              </div>
              <div className="ml-3 sm:ml-4 text-white">
                <p className="text-xs sm:text-sm font-semibold">ClimatePartner</p>
                <p className="text-xs hidden sm:block">Certified Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
