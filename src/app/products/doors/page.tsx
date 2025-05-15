import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export const metadata = {
  title: 'Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann doors including front doors, entrance doors, and interior doors. German engineering excellence for your home.',
};

export default function DoorsPage() {
  const doorProducts = [
    {
      title: "Front & Entrance Doors",
      description: "Secure and stylish entry doors combining security with architectural beauty.",
      imageSrc: "/images/doors/previews/front-doors.avif",
      imageAlt: "Hörmann front door",
      href: "/products/doors/front-doors",
      features: [
        "Enhanced security features",
        "Excellent thermal insulation",
        "Customizable designs",
        "Durable materials"
      ]
    },
    {
      title: "Room Doors",
      description: "Modern and high-quality interior doors for every style of interior.",
      imageSrc: "/images/doors/previews/room-doors.avif",
      imageAlt: "Hörmann room door",
      href: "/products/doors/room-doors",
      features: [
        "Carpenter quality",
        "Available as revolving or sliding doors",
        "Various design options",
        "Optional PortaMatic door drive"
      ]
    },
    {
      title: "Loft Doors",
      description: "Modern steel and glass doors for light-flooded spaces with industrial style.",
      imageSrc: "/images/doors/loft-doors/loft-doors-in-steel-and-glass/1.avif",
      imageAlt: "Hörmann loft door",
      href: "/products/doors/loft-doors",
      features: [
        "Steel and glass construction",
        "Maximum transparency",
        "Industrial design aesthetic",
        "Available as revolving or sliding doors"
      ]
    },
    {
      title: "Functional Doors",
      description: "High-quality steel doors for security, fire protection, and multi-purpose applications.",
      imageSrc: "/images/doors/functional-doors/functional-doors-for-your-house/function-doors.avif",
      imageAlt: "Hörmann functional door",
      href: "/products/doors/functional-doors",
      features: [
        "Security doors for basement and garage",
        "Fire-retarding doors for boiler rooms",
        "Multi-purpose doors for utility spaces",
        "Optional PortaMatic door drive"
      ]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Matches garage-doors structure */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Premium Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Discover Hörmann's range of high-quality doors combining security, style, and energy efficiency.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Doors for Every Home
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                As an official Hörmann dealer, we offer a wide range of high-quality doors to suit any architectural style and functional requirement. Hörmann doors are known for their exceptional quality, innovative features, and reliable performance.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                All Hörmann doors are manufactured to the highest standards, using premium materials and the latest technology. They offer excellent thermal insulation, enhanced security, and timeless aesthetic appeal.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/front-doors/doors-by-hoermann/1.avif"
                  alt="Modern home with Hörmann front door"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Enhanced to match garage-doors */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Our Doors Collection
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Find the perfect door solution for your home from our premium selection.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {doorProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                href={product.href}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Hörmann Doors?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann doors offer numerous benefits that set them apart from the competition.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Superior Security</h3>
                <p className="mt-2 text-base text-gray-600">
                  Our doors feature multi-point locking systems, reinforced frames, and optional smart locking technology for ultimate protection.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Energy Efficient</h3>
                <p className="mt-2 text-base text-gray-600">
                  Advanced thermal breaks and premium sealing systems ensure excellent insulation, reducing energy costs year-round.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Design</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from various materials, finishes, and glass options to perfectly match your home's architectural style.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Materials</h3>
                <p className="mt-2 text-base text-gray-600">
                  Crafted from weather-resistant steel, durable aluminum, or sustainable wood composites for long-lasting performance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">10-Year Warranty</h3>
                <p className="mt-2 text-base text-gray-600">
                  Backed by Hörmann's comprehensive warranty, covering materials and workmanship for peace of mind.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Home Ready</h3>
                <p className="mt-2 text-base text-gray-600">
                  Optional smart locking systems integrate with home automation platforms for keyless entry and remote monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Matches garage-doors structure */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your perfect door?</span>
            <span className="block text-blue-200">Contact us for expert advice and a personalized quote.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

