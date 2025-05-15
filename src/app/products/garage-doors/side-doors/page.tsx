import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Garage Side Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann garage side doors. Matching designs to your main garage door, convenient access, and high-quality construction.',
};

export default function GarageSideDoorsPage() {
  // Sample data for side door benefits
  const doorBenefits = [
    {
      title: "Convenient Access",
      description: "Access your garage without opening the entire door - perfect for retrieving bicycles, lawn mowers, or other equipment."
    },
    {
      title: "Matching Appearance",
      description: "Side doors are available with the same appearance as your garage door, creating a harmonious overall look for your home."
    },
    {
      title: "Perfect Color Harmony",
      description: "Design your home with perfect color harmony using Hörmann's MatchColor preferred colors for a consistent appearance across all doors."
    },
    {
      title: "High-Quality Construction",
      description: "Built with the same attention to detail and quality materials as Hörmann's main garage doors."
    },
    {
      title: "Versatile Applications",
      description: "Ideal for garages, workshops, storage areas, and other outbuildings requiring separate pedestrian access."
    },
    {
      title: "Security Features",
      description: "Equipped with robust locking mechanisms to keep your garage secure even with the convenience of a separate entrance."
    }
  ];

  // Sample data for door styles
  const doorStyles = [
    {
      title: "Sectional Door Matching",
      description: "Side doors designed to perfectly match your sectional garage door's appearance, including panel design, surface finish, and color."
    },
    {
      title: "Roller Door Matching",
      description: "Complementary side doors for roller garage doors, maintaining design consistency across your garage entrances."
    },
    {
      title: "Up-and-Over Door Matching",
      description: "Side doors that match the classic appearance of Berry up-and-over doors for a cohesive look."
    },
    {
      title: "Custom Designs",
      description: "Options for custom designs to meet specific architectural requirements or personal preferences."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Garage Side Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Convenient access to your garage with doors that perfectly match your main garage door's appearance.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Practical Access with Harmonious Design
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Would you like to retrieve your bicycle or lawn mower from the garage without opening the entire door? No problem - Hörmann offers a matching side door for almost every garage door design.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Side doors are available with the same appearance as the garage doors, creating a harmonious overall look. This attention to design consistency ensures your home maintains a cohesive and attractive exterior.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/garage-side-doors.jpg"
                  alt="Hörmann garage side door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perfect Color Harmony Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 lg:order-first relative">
              <div className="relative mx-auto h-96 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/garage-doors/side-doors/perfect-color-harmony/garage-side-door-2.avif"
                  alt="Hörmann color harmony across different doors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Perfect Color Harmony
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
              This example shows a Hörmann sectional garage door in Decograin Winchester Oak with a perfectly matching side door. The consistent appearance creates a harmonious overall look for the property.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Identical surface finish and color</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Matching panel arrangement</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Coordinated hardware and fittings</span>
                </li>
              </ul>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">
                Enjoy the harmonious appearance of coordinated colors across all your doors and entrances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Showcase
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              See how Hörmann garage side doors complement main garage doors in real installations.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sectional Door with Matching Side Door</h3>
                  <p className="mt-4 text-lg text-gray-600">
                  Design your home in perfect color harmony with Hörmann's MatchColor preferred colors for a consistent appearance across all your doors.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  The MatchColor system ensures visual consistency between your:
                 </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Front doors</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Garage sectional doors</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Side entrance doors</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Steel doors</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 lg:mt-0 relative">
                  <Carousel className="mt-4" singleItemMode={true}>
                    <div className="flex-none w-full snap-center">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                        <div className="relative h-80 w-full">
                          <Image
                            src="/images/garage-doors/side-doors/picture-gallery/berry-wings-door-in-ral-7016-anthracite-grey-with-view-like-secondary-door.avif"
                            alt="Berry wings door with matching side door"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-900">Berry Wings Door</h3>
                          <p className="mt-1 text-md text-gray-600">RAL 7016 Anthracite Grey</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-none w-full snap-center">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                        <div className="relative h-80 w-full">
                          <Image
                            src="/images/garage-doors/side-doors/picture-gallery/garage-roll-gate-in-ral-6005-moss-green-with-view-level-side-door.avif"
                            alt="Garage roll gate with matching side door"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-900">Garage Roll Gate</h3>
                          <p className="mt-1 text-md text-gray-600">RAL 6005 Moss Green</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-none w-full snap-center">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                        <div className="relative h-80 w-full">
                          <Image
                            src="/images/garage-doors/side-doors/picture-gallery/garage-roller-door-in-ral-9016-traffic-white-with-view-like-next-door.avif"
                            alt="Garage roller door with matching side door"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-900">Garage Roller Door</h3>
                          <p className="mt-1 text-md text-gray-600">RAL 9016 Traffic White</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-none w-full snap-center">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                        <div className="relative h-80 w-full">
                          <Image
                            src="/images/garage-doors/side-doors/picture-gallery/garage-sectional-door-in-ral-7012-basalt-grey-with-view-level-secondary-door.avif"
                            alt="Garage sectional door with matching side door"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-900">Garage Sectional Door</h3>
                          <p className="mt-1 text-md text-gray-600">RAL 7012 Basalt Grey</p>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features & Benefits
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann garage side doors offer numerous advantages for homeowners.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Convenient Access */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Convenient Access</h3>
                <p className="mt-2 text-base text-gray-600">
                  Access your garage without opening the entire door - perfect for retrieving bicycles, lawn mowers, or other equipment.
                </p>
              </div>

              {/* Matching Appearance */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Matching Appearance</h3>
                <p className="mt-2 text-base text-gray-600">
                  Side doors are available with the same appearance as your garage door, creating a harmonious overall look for your home.
                </p>
              </div>

              {/* Perfect Color Harmony */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Perfect Color Harmony</h3>
                <p className="mt-2 text-base text-gray-600">
                  Design your home with perfect color harmony using Hörmann's MatchColor preferred colors for a consistent appearance across all doors.
                </p>
              </div>

              {/* High-Quality Construction */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">High-Quality Construction</h3>
                <p className="mt-2 text-base text-gray-600">
                  Built with the same attention to detail and quality materials as Hörmann's main garage doors for long-lasting performance.
                </p>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Security Features</h3>
                <p className="mt-2 text-base text-gray-600">
                  Equipped with robust locking mechanisms to keep your garage secure even with the convenience of a separate entrance.
                </p>
              </div>

              {/* Versatile Applications */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Versatile Applications</h3>
                <p className="mt-2 text-base text-gray-600">
                  Ideal for garages, workshops, storage areas, and other outbuildings requiring separate pedestrian access.
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
            <span className="block">Ready to find your perfect garage side door?</span>
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

