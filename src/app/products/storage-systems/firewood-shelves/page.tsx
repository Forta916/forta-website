import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Firewood Shelves | Storage Systems | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann firewood shelves. Modern and stylish storage solutions for your garden, providing safe and dry storage for your firewood.',
};

export default function FirewoodShelvesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Firewood Shelves</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Modern and stylish storage solutions for your garden, providing safe and dry storage for your firewood.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Modern and Stylish Firewood Storage
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Do you want a modern and stylish firewood rack for your garden? If you are looking for a practical storage solution for your wood, then the metal firewood shelves by Hörmann are just the thing for you.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Firewood Shelves Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Berry Firewood Shelves
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Our firewood shelves for outdoor use can be individually designed and can therefore be adapted exactly to your wishes. This way, you have always stored your wood dry and safe. Assemble your perfect firewood rack of different styles, colors and sizes.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                With our complementary accessories, Hörmann firewood shelves also offer advanced storage options. Our firewood shelves are designed to keep your firewood protected from the elements while providing an attractive addition to your outdoor space.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Whether you need a small rack for occasional use or a larger storage solution for regular wood burning, our range of firewood shelves offers the perfect option for your needs.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/firewood-shelves/berry-firewood-shelves/wood-shelves-02.avif"
                  alt="Hörmann Berry firewood shelves"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Benefits at a Glance Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Benefits at a Glance
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Firewood shelves from Hörmann</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Quick and easy assembly thanks to maximum prefabrication</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">High stability due to steel frame construction and higher sheet metal thickness than standard on the market</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No sharp edges and therefore very child-proof</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Matched to your space: 2 sizes available</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Including aluminum floor frame at no extra charge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Varied design: optionally all RAL colours available</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Combinable with Berry equipment houses to fit perfectly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">20 year warranty</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">CO2-neutral as standard</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/firewood-shelves/your-benefits-at-a-glance/wood-shelves-03.avif"
                  alt="Hörmann firewood shelves benefits"
                  fill
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Material Depends On Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Material Depends On
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">An eye-catcher for wood storage</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/firewood-shelves/the-material-depends-on/storage-space-systems-06.avif"
                  alt="Hörmann firewood shelves material"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mt-3 text-lg text-gray-600">
                All our Hörmann Berry firewood shelves are made of metal. And there are also good reasons for this: In contrast to a wooden firewood shelf, our storage solutions are thanks to the hot-dip galvanized, dimensionally stable and powder-coated steel sheet:
              </p>
              <div className="mt-8 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Weather and mould resistant</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Not flammable and do not forfeit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Particularly low-maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motives for Firewood Shelves Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Motives for Firewood Shelves
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Modern or classic</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/motives-for-firewood-shelves/1.avif"
                  alt="Berry firewood shelf Classic"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Berry firewood shelf Classic</h5>
              <p className="text-gray-700">
                The Berry firewood shelf Classic with narrow, vertical motif has a classic filigree look. This timeless design complements traditional garden settings and provides a sophisticated storage solution for your firewood.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/motives-for-firewood-shelves/2.avif"
                  alt="Berry firewood shelf Modern"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Berry firewood shelf Modern</h5>
              <p className="text-gray-700">
                The Berry firewood rack Modern with a wide, vertical motif is particularly modern and elegant. This contemporary design creates a striking visual element in your garden while providing practical storage for your firewood.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Protected and Ready to Hand Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Protected and Ready to Hand
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Back wall or bracing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/protected-and-ready-to-hand/1.avif"
                  alt="Firewood shelves with open struts"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Firewood shelves with open struts</h5>
              <p className="text-gray-700">
                Are you planning to place your metal firewood rack on a house wall? Then a shelf in the standard version with open struts is suitable for you. This design allows for efficient air circulation while providing support for your firewood.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/protected-and-ready-to-hand/2.avif"
                  alt="Firewood shelves with back wall"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Firewood shelves with back wall</h5>
              <p className="text-gray-700">
                To protect your wood optimally from wind and weather, you can choose a firewood rack for outside with built-in back wall. This gives you the maximum freedom to place your shelf where you want. In addition, the firewood shelf is also ideal as a storage option. For example, your garden tools or barbecue are well protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes for Firewood Shelves Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sizes for Firewood Shelves
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Individually for your space requirements</h3>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              The Berry firewood shelves are available in 2 different sizes. Around 3.7 bulk metres (type 1) or approximately 5.8 bulk kilometres (type 2) are available for your firewood. The wood storage is possible in two rows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/sizes-for-firewood-shelves/1.avif"
                  alt="Type 1 firewood shelf"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Type 1</h5>
              <p className="text-gray-700">
                The smaller option, providing approximately 3.7 bulk meters of storage space for your firewood. Ideal for gardens with limited space or for those who use firewood occasionally.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/sizes-for-firewood-shelves/2.avif"
                  alt="Type 2 firewood shelf"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Type 2</h5>
              <p className="text-gray-700">
                The larger option, providing approximately 5.8 bulk meters of storage space for your firewood. Perfect for those who regularly use firewood and need a substantial storage solution.
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-4 text-sm text-gray-600 text-center">
                Technical specifications for Hörmann firewood shelves
              </caption>
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Installation dimensions / technical data
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type 1
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type 2
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    External dimensions floor frame (width - depth)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    120 x 81 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    178 x 81 cm
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Outside dimensions of foundation (width - depth)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    130 x 91 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    188 x 91 cm
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Internal dimensions of firewood shelf (width - depth)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    113 x 81 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    171 x 81 cm
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Outside dimensions of firewood shelf (width - depth)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    123 x 103 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    181 x 103 cm
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Element height
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    178 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    178 cm
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total height
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    198 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    198 cm
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Volume (without roof)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    1.6 m³
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    2.5 m³
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Wood storage room meter
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    approx. 2.2 room meter
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    approx. 3.5 space meters
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Wood storage bulk meter
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    approx. 3.7 bulk meter
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    approx. 5.8 bulk meters
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Colours and Decors for Wood Racks Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colours and Decors for Wood Racks
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Various Design Options</h3>
          </div>
          
          {/* Standard Colors Subsection */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">9 Standard Colors</h4>
              <p className="text-lg text-gray-600">
                9 attractive standard colours are available for colour scheme. Also the interior has the chosen color.
              </p>
            </div>
            
            <div className="mt-12">
              <Carousel>
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-3004-purple-red.avif"
                  imageAlt="RAL 3004 Purple red"
                  title="RAL 3004 Purple Red"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-5014-pigeon-blue.avif"
                  imageAlt="RAL 5014 Pigeon Blue"
                  title="RAL 5014 Pigeon Blue"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-6005-moss-green.avif"
                  imageAlt="RAL 6005 Moss Green"
                  title="RAL 6005 Moss Green"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-6013-reed-green.avif"
                  imageAlt="RAL 6013 Reed Green"
                  title="RAL 6013 Reed Green"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-7016-anthracite-grey.avif"
                  imageAlt="RAL 7016 Anthracite Grey"
                  title="RAL 7016 Anthracite Grey"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-7039-quartz-grey.avif"
                  imageAlt="RAL 7039 Quartz Grey"
                  title="RAL 7039 Quartz Grey"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-7040-window-grey.avif"
                  imageAlt="RAL 7040 Window Grey"
                  title="RAL 7040 Window Grey"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-9006-white-aluminium.avif"
                  imageAlt="RAL 9006 White Aluminium"
                  title="RAL 9006 White Aluminium"
                  subtitle="Standard color for Berry firewood shelves"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-9007-grey-aluminium.avif"
                  imageAlt="RAL 9007 Grey Aluminium"
                  title="RAL 9007 Grey Aluminium"
                  subtitle="Standard color for Berry firewood shelves"
                />
              </Carousel>
            </div>
          </div>
          
          {/* Decograin Decor and Custom RAL Colors Subsections */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Decograin Decor Subsection */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Decograin Decor Golden Oak</h4>
              <div className="h-64 relative mb-6">
                <Image
                  src="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/decograin-decor-golden-oak.avif"
                  alt="Decograin decor Golden Oak"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-gray-700">
                The Golden Oak decor is available for an additional charge for the "Modern" motif. Firewood shelves with this decor are white inside, creating a bright and welcoming interior space.
              </p>
              <p className="mt-4 text-gray-700">
                This natural-looking wood finish adds warmth and character to your garden storage solution while maintaining the durability and low maintenance of metal construction.
              </p>
            </div>
            
            {/* Custom RAL Colors Subsection */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Custom RAL Colors</h4>
              <div className="h-64 relative mb-6">
                <Image
                  src="/images/storage-systems/firewood-shelves/colours-and-decors-for-wood-racks/ral-by-election.avif"
                  alt="RAL by election"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-gray-700">
                Your desired colour is not included? No problem! In order to meet your ideas, you will also receive the Hörmann firewood shelves in all RAL colours for an additional fee.
              </p>
              <p className="mt-4 text-gray-700">
                This allows you to perfectly match your firewood shelf to your home's exterior, garden features, or other structures on your property for a cohesive and personalized look.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suitable Accessories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Suitable Accessories for Every Application
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">A firewood shelf according to your wishes</h3>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              The Berry firewood shelves can be easily extended with optional accessories. This creates a clever storage solution - not only for wood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/suitable-accessories-for-every-application/1.avif"
                  alt="Aluminium corrugated sheet base"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Aluminium corrugated sheet base</h5>
              <p className="text-gray-700">
                Perfectly matched to the firewood shelf: The corrugated aluminium bottom is available as an option. This keeps the floor stainless and easily removes dirt.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/suitable-accessories-for-every-application/2.avif"
                  alt="Device holder incl. Shelf bar"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Device holder incl. Shelf bar</h5>
              <p className="text-gray-700">
                Broom, shovel and co. can be placed in the device holder. So they are always quickly at hand for the next use.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/suitable-accessories-for-every-application/3.avif"
                  alt="Tool holder"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Tool holder</h5>
              <p className="text-gray-700">
                Always visible and quick: In the practical holder, the tools can be clearly stored.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/firewood-shelves/suitable-accessories-for-every-application/4.avif"
                  alt="Rain drain hose set"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Rain drain hose set</h5>
              <p className="text-gray-700">
                With the optionally available hose set, you can use rainwater, e.g. directly into a rain barrel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to organize your firewood storage?</span>
            <span className="block text-blue-200">Contact us to discuss your firewood shelf options.</span>
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

