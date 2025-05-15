import ProductCategories from '@/components/sections/ProductCategories';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Products | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann products including garage doors, doors, and storage systems. High-quality German engineering for your home.',
};

export default function ProductsPage() {
  // Sample data for product categories
  const categoriesData = {
    title: "Our Product Range",
    subtitle: "Discover premium German engineering for your home",
    categories: [
      {
        title: "Garage Doors",
        description: "Sectional, roller, and swing garage doors with premium insulation and security features",
        imageSrc: "/images/garage-doors/previews/garage-side-doors.avif",
        imageAlt: "Modern sectional garage door",
        href: "/products/garage-doors"
      },
      {
        title: "Doors",
        description: "Front doors, entrance doors, room doors, and specialized functional doors",
        imageSrc: "/images/doors/previews/front-doors.avif",
        imageAlt: "Elegant front door design",
        href: "/products/doors"
      },
      {
        title: "Storage Systems",
        description: "Tool sheds, garden boxes, and firewood racks for organized outdoor spaces",
        imageSrc: "/images/storage-systems/previews/storage-space-systems-9.avif",
        imageAlt: "Modern garden storage solution",
        href: "/products/storage-systems"
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Products</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Explore our range of premium Hörmann products, combining German engineering excellence with modern design and functionality.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <ProductCategories {...categoriesData} />

      {/* Why Choose Hörmann */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Hörmann Products?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann has been synonymous with quality and innovation for over 85 years.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Unmatched Quality</h3>
                <p className="mt-2 text-base text-gray-600">
                  All Hörmann products are manufactured to the highest standards, using premium materials and the latest technology.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Innovative Design</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann continuously develops new technologies and designs to improve functionality, security, and aesthetics.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Enhanced Security</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann products feature advanced security systems to protect your home and provide peace of mind.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Energy Efficiency</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann doors and gates provide excellent insulation, helping to reduce energy costs and environmental impact.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customization Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of designs, colors, and finishes to perfectly match your home's architecture and style.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Long-Term Warranty</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann offers up to 10 years warranty on sectional doors and 5 years on operators, reflecting their confidence in product quality.
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
            <span className="block">Ready to find the perfect solution?</span>
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
