import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQSection from '@/components/ui/FAQSection';

export const metadata = {
  title: 'Garage Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann garage doors including sectional doors, roller doors, and swing doors. High-quality German engineering for your garage.',
  openGraph: {
    title: 'Premium Hörmann Garage Doors | Forta California',
    description: 'Explore our range of premium Hörmann garage doors including sectional doors, roller doors, and swing doors. High-quality German engineering.',
    images: ['/images/garage-doors/previews/berry-swing-doors-preview.avif'],
  },
};

export default function GarageDoorsPage() {
  // FAQ data for SEO
  const faqs = [
    {
      question: "How long do Hörmann garage doors last?",
      answer: "Hörmann garage doors are built to last for decades with proper maintenance. Hörmann offers up to 10 years warranty on sectional doors, reflecting their confidence in product quality and durability.",
    },
    {
      question: "What warranty is included with Hörmann garage doors?",
      answer: "Hörmann offers up to 10 years warranty on sectional doors and 5 years on operators. This comprehensive warranty covers materials and workmanship for peace of mind.",
    },
    {
      question: "Are Hörmann garage doors energy efficient?",
      answer: "Yes, Hörmann garage doors feature excellent thermal insulation properties with U-values as low as 0.64 W/(m²·K) for certain models. This helps reduce energy costs and contributes to a more comfortable garage environment.",
    },
    {
      question: "What security features do Hörmann garage doors have?",
      answer: "Hörmann garage doors feature advanced security systems including anti-lift protection, multi-point locking systems, and optional RC2 security equipment. All doors meet strict European security standards.",
    },
    {
      question: "How do I maintain my garage door?",
      answer: "Regular maintenance includes lubricating moving parts, checking springs and cables, cleaning the tracks, and inspecting weather seals. We recommend annual professional inspection to ensure optimal performance and safety.",
    },
    {
      question: "Can I get a custom design for my garage door?",
      answer: "Yes, Hörmann offers extensive customization options including various materials, colors, finishes, window inserts, and surface textures. You can choose from over 200 RAL colors and numerous design options to match your home's architecture.",
    },
  ];
  // Sample data for garage door products
  const garageDoorProducts = [
    {
      title: "Garage sectional doors",
      description: "Space-saving doors that open vertically and run under the ceiling, providing maximum space in and in front of the garage.",
      imageSrc: "/images/garage-doors/previews/sectionalgaragedoorspreview.avif",
      imageAlt: "Hörmann sectional garage door",
      href: "/products/garage-doors/sectional",
      features: [
        "Maximum space in the garage",
        "Excellent thermal insulation",
        "Wide range of designs and colors",
        "Smooth and quiet operation"
      ]
    },
    {
      title: "Garage rolling doors",
      description: "Compact doors that roll up vertically, requiring minimal headroom and providing maximum space in the garage.",
      imageSrc: "/images/garage-doors/previews/garagerollerdoorspreview.jpg",
      imageAlt: "Hörmann roller garage door",
      href: "/products/garage-doors/roller",
      features: [
        "Space-saving design",
        "No ceiling tracks required",
        "Quiet operation",
        "Wind and weather resistant"
      ]
    },
    {
      title: "Side sectional door",
      description: "Doors that open sideways instead of upwards, ideal for garages with special architectural features or low headroom.",
      imageSrc: "/images/garage-doors/previews/garage-door-side-sliding-01.jpg",
      imageAlt: "Hörmann side sectional door",
      href: "/products/garage-doors/side-sectional",
      features: [
        "Partial opening for pedestrian access",
        "No ceiling tracks required",
        "Smooth operation",
        "Perfect for special installation situations"
      ]
    },
    {
      title: "Rolling wing gate",
      description: "Practical doors that open outward, ideal for special installation situations and optimal use of garage interior space.",
      imageSrc: "/images/garage-doors/previews/rolling-wing-gate.jpg",
      imageAlt: "Hörmann rolling wing gate",
      href: "/products/garage-doors/hinged",
      features: [
        "Customizable door leaf division",
        "No ceiling tracks required",
        "Excellent thermal insulation",
        "Ideal for garages with special requirements"
      ]
    },
    {
      title: "Berry wings",
      description: "Classic up-and-over doors with proven Hörmann quality, available in steel, timber, and with various surface finishes.",
      imageSrc: "/images/garage-doors/previews/berry-swing-doors-preview.avif",
      imageAlt: "Hörmann Berry wings",
      href: "/products/garage-doors/berry-swing",
      features: [
        "Robust construction",
        "Reliable operation",
        "Multiple design options",
        "Easy installation"
      ]
    },
    {
      title: "Aluminium frame gate",
      description: "Elegant doors with maximum transparency, combining aluminum frames with various infill options.",
      imageSrc: "/images/garage-doors/previews/garage-door-aluminium-frame-1.avif",
      imageAlt: "Hörmann aluminium frame gate",
      href: "/products/garage-doors/aluminum-frame",
      features: [
        "Modern, elegant appearance",
        "Maximum light entry",
        "Various infill options",
        "Corrosion-resistant"
      ]
    },
    {
      title: "Garage side doors",
      description: "Matching side doors for your garage, providing convenient pedestrian access without opening the main garage door.",
      imageSrc: "/images/garage-doors/previews/garage-side-doors.avif",
      imageAlt: "Hörmann garage side door",
      href: "/products/garage-doors/side-doors",
      features: [
        "Matches main garage door design",
        "Easy pedestrian access",
        "Thermal insulation",
        "Security features"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Garage Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Discover our range of premium Hörmann garage doors, combining German engineering excellence with modern design and functionality.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Garage Doors for Every Home
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                As an official Hörmann dealer, we offer a wide range of high-quality garage doors to suit any architectural style and functional requirement. Hörmann garage doors are known for their exceptional quality, innovative features, and reliable performance.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                All Hörmann garage doors are manufactured to the highest standards, using premium materials and the latest technology. They offer excellent thermal insulation, enhanced security, and smooth, quiet operation.
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
                  src="/images/garage-doors/previews/berry-swing-doors-preview.avif"
                  alt="Modern home with Hörmann garage door"
                  fill
                  sizes="(max-width: 768px), (max-width: 1200px)"
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Our Garage Door Range
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Find the perfect garage door for your home from our comprehensive selection.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {garageDoorProducts.map((product, index) => (
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
              Why Choose Hörmann Garage Doors?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann garage doors offer numerous benefits that set them apart from the competition.
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">Superior Quality</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann garage doors are manufactured to the highest standards, using premium materials and the latest technology for long-lasting performance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Innovative Design</h3>
                <p className="mt-2 text-base text-gray-600">
                  With continuous research and development, Hörmann garage doors feature innovative designs and technologies for enhanced functionality and convenience.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Enhanced Security</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann garage doors feature advanced security systems, including anti-lift protection and optional RC2 security equipment for peace of mind.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Energy Efficiency</h3>
                <p className="mt-2 text-base text-gray-600">
                  With excellent thermal insulation properties, Hörmann garage doors help reduce energy costs and contribute to a more comfortable garage environment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Design Variety</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of designs, colors, and finishes to perfectly match your home's architecture and personal style preferences.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Long-Term Warranty</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann offers up to 10 years warranty on sectional doors and 5 years on operators, reflecting their confidence in product quality and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your perfect garage door?</span>
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

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Hörmann Garage Doors"
      />
    </div>
  );
}

