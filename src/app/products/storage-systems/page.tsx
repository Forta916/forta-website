import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export const metadata = {
  title: 'Storage Systems | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann storage systems including appliance houses. High-quality German engineering for your outdoor storage needs.',
};

export default function StorageSystemsPage() {
  // Sample data for storage system products
  const storageSystemProducts = [
    {
      title: "Appliance Houses",
      description: "Modern and stylish equipment houses for your garden, courtyard or driveway, providing practical storage solutions.",
      imageSrc: "/images/storage-systems/appliance-houses/appliance-houses/storage-space-systems-9.avif",
      imageAlt: "Hörmann appliance house",
      href: "/products/storage-systems/appliance-houses",
      features: [
        "Modern design",
        "Customizable options",
        "Weather resistant",
        "Secure storage solution"
      ]
    },
    {
      title: "Firewood Shelves",
      description: "Modern and stylish firewood storage solutions for your garden, providing safe and dry storage for your firewood.",
      imageSrc: "/images/storage-systems/firewood-shelves/berry-firewood-shelves/wood-shelves-02.avif",
      imageAlt: "Hörmann firewood shelves",
      href: "/products/storage-systems/firewood-shelves",
      features: [
        "Weather resistant metal construction",
        "Multiple design options",
        "Child-proof with no sharp edges",
        "Available in various colors"
      ]
    },
    {
      title: "Garden Boxes",
      description: "Modern and stylish storage solutions for your balcony and garden, providing safe storage for cushions, toys, and garden accessories.",
      imageSrc: "/images/storage-systems/garden-boxes/the-hrmann-garden-boxes-in-the-overview/gardenbox-1.avif",
      imageAlt: "Hörmann garden boxes",
      href: "/products/storage-systems/garden-boxes",
      features: [
        "Weather resistant metal construction",
        "Two-point locking system for security",
        "Available in two sizes and colors",
        "Quick and easy assembly"
      ]
    }
    // More storage system products can be added here as they become available
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Storage Systems</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Discover our range of premium Hörmann storage systems, combining German engineering excellence with modern design and functionality.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Storage Solutions for Every Need
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                As an official Hörmann dealer, we offer high-quality storage systems to suit any outdoor space and storage requirement. Hörmann storage systems are known for their exceptional quality, innovative features, and reliable performance.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                All Hörmann storage systems are manufactured to the highest standards, using premium materials and the latest technology. They offer excellent weather resistance, enhanced security, and modern design to complement your outdoor space.
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
                  src="/images/storage-systems/appliance-houses/appliance-houses/storage-space-systems-9.avif"
                  alt="Modern Hörmann storage system"
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
              Explore Our Storage Systems Range
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Find the perfect storage solution for your outdoor space from our selection.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {storageSystemProducts.map((product, index) => (
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
              Why Choose Hörmann Storage Systems?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann storage systems offer numerous benefits that set them apart from the competition.
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
                  Hörmann storage systems are manufactured to the highest standards, using premium materials and the latest technology for long-lasting performance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Modern Design</h3>
                <p className="mt-2 text-base text-gray-600">
                  With contemporary aesthetics and clean lines, Hörmann storage systems enhance the appearance of your outdoor space while providing practical functionality.
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
                  Hörmann storage systems feature robust construction and secure locking mechanisms to protect your valuable equipment and belongings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Weather Resistance</h3>
                <p className="mt-2 text-base text-gray-600">
                  Designed to withstand various weather conditions, Hörmann storage systems provide reliable protection for your stored items throughout the year.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customization Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a variety of sizes, configurations, and finishes to create a storage solution that perfectly meets your specific needs and complements your property.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Installation</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann storage systems are designed for straightforward assembly and installation, saving you time and effort while ensuring a stable and durable result.
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
            <span className="block">Ready to find your perfect storage solution?</span>
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
