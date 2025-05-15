import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | Forta - Official Hörmann Dealer in California',
  description: 'Learn about Forta, an official dealer of Hörmann products in California since 2008, offering high-quality garage doors, doors, and storage systems.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Forta</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Official Hörmann dealer in California since 2008, providing premium German-engineered products for your home.
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Forta was established in 2008 as an official dealer of Hörmann products. With our expertise and commitment to quality, we&apos;ve now expanded to serve customers in California, bringing the same dedication to excellence and customer satisfaction.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our team consists of experienced professionals who are passionate about providing the best products and services to our customers. We believe in the quality and reliability of Hörmann products and are proud to be their official dealer.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative lg:order-last">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/about/house.avif"
                  alt="Forta office building"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership with Hörmann */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 relative lg:order-first">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/about/company-01.avif"
                  alt="Hörmann manufacturing facility"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Partnership with Hörmann
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                As an official dealer of Hörmann, we provide our customers with access to the highest quality German-engineered products. Hörmann is Europe&apos;s leading manufacturer of doors, with over 85 years of experience and a commitment to innovation and quality.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                All Hörmann products are manufactured to the highest standards, using the latest technology and sustainable practices. The company&apos;s commitment to quality is reflected in their 10-year warranty on all sectional doors and 5-year warranty on all operators.
              </p>
              <div className="mt-8 flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/about/images.png"
                    alt="Hörmann Logo"
                    width={100}
                    height={50}
                    className="h-12 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Official Dealer</p>
                  <p className="text-sm text-gray-600">Since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CO2 Sustainability */}
      <div className="py-16 bg-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 relative lg:order-last">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/about/co2/sustainability.avif"
                  alt="CO2-neutral manufacturing at Hörmann"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 bg-blue-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/images/co2-neutral-badge.avif"
                    alt="CO2 Neutral Certification"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="ml-4 text-white">
                  <p className="text-sm font-semibold">ClimatePartner</p>
                  <p className="text-xs">Certified Product</p>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                For a more sustainable future – CO<sub>2</sub>-neutral components
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                As a family business, we are aware of the responsibility for future generations and offer our products for housing as standard CO<sub>2</sub>-neutral at all sales locations.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                At customer request, our products for contract construction are optionally available in Europe CO<sub>2</sub>-neutral. This means that the purchase decision will take over the compensation costs for remaining emissions and thus actively contribute.
              </p>
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    100% green electricity from renewable energies at all production sites
                  </p>
                </div>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    Reduced consumption through many sustainability measures
                  </p>
                </div>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    Annual savings of more than 75,000 tonnes of CO<sub>2</sub>
                  </p>
                </div>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    Compensation for remaining emissions through certified climate protection projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              What drives us every day to provide the best service and products to our customers.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality</h3>
              <p className="mt-2 text-base text-gray-600">
                We are committed to providing only the highest quality products that meet the strictest standards of durability, functionality, and design.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-600">
                We embrace the latest technologies and design trends to offer our customers innovative solutions that enhance their homes and lives.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Service</h3>
              <p className="mt-2 text-base text-gray-600">
                We prioritize our customers&apos; needs and satisfaction, providing personalized service and support throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to upgrade your home?</span>
            <span className="block text-blue-200">Contact us today for a consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Button href="/products" variant="outline" size="lg" className="bg-white">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
