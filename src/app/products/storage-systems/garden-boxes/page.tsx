import Image from 'next/image';
import Button from '@/components/ui/Button';
// Removed unused imports
// import Carousel from '@/components/ui/Carousel';
// import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Garden Boxes | Storage Systems | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann garden boxes. Modern and stylish storage solutions for your balcony and garden, providing safe storage for cushions, toys, and garden accessories.',
};

export default function GardenBoxesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Garden Boxes</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Modern and stylish storage solutions for your balcony and garden, providing safe storage for cushions, toys, and garden accessories.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Modern and Stylish Storage Solutions
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Do you need storage space on your balcony or in your garden? If you are looking for a convenient storage solution for cushions, toys, as well as garden and terrace accessories, then our metal garden boxes are just right for you.
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
                  src="/images/storage-systems/garden-boxes/the-hrmann-garden-boxes-in-the-overview/gardenbox-1.avif"
                  alt="Hörmann garden boxes"
                  fill
                  sizes="(max-width: 768px), (max-width: 1200px)"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Juno Garden Boxes Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Juno Garden Boxes
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                High quality storage space for balcony and garden. The robust construction made of galvanized and high-quality painted steel sheet is weather-resistant, rainwaterproof and resistant to sunlight.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This allows you to protect your utensils safely against external weather conditions and at the same time create a visual upgrade and a tidy impression in your garden or on the balcony.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Whether you need storage for cushions, toys, or garden accessories, our range of garden boxes offers the perfect solution for your needs, combining functionality with modern design.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/garden-boxes/juno-garden-boxes/kampagneep25bau252024-10030.avif"
                  alt="Hörmann Juno garden boxes"
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
            <h3 className="mt-2 text-xl text-gray-600">Garden boxes by Hörmann</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Juno garden boxes as a high-quality storage solution for balcony and garden</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Safe storage of cushions, toys, garden and patio accessories</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Robust construction made of galvanized, high-quality painted steel sheet</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Particularly durable and low-maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weather resistant, rainwaterproof and UV-resistant</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Standard with two-point locking with metal fittings and a cylinder lock integrated in the lid for safe protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comfortable opening and closing thanks to two integrated dampers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Individually adaptable by height-adjustable feet</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Visual eye-catchers in the garden or on the balcony</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Two outer colours to choose from: grey aluminium (RAL 9007) and anthracite grey (RAL 7016)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Available in two sizes: Type 1320 and Type 1620</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/garden-boxes/your-benefits-at-a-glance/gardenbox-2.avif"
                  alt="Hörmann garden boxes benefits"
                  fill
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Hörmann Garden Boxes in the Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Hörmann Garden Boxes in the Overview
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Robust, durable and weatherproof</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/garden-boxes/the-hrmann-garden-boxes-in-the-overview/gardenbox-1.avif"
                  alt="Hörmann garden boxes overview"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mt-3 text-lg text-gray-600">
                Storage space is often scarce. Our metal garden boxes are available in two modern colours and two sizes. They offer new storage space for balcony and garden, so cushions, toys as well as garden and terrace accessories can be safely stored.
              </p>
              <p className="mt-6 text-lg font-semibold text-gray-900">
                It all depends on the material: garden boxes made of metal
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The Hörmann garden boxes are made of metal. Thanks to their robust construction made of galvanized, high-quality painted steel sheet, they are:
              </p>
              <div className="mt-8 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Very stable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Particularly durable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Low maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Weather resistant</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Rainwaterproof</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Resistant to solar radiation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Space with Style: Sizes Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Storage Space with Style: Sizes of Hörmann Garden Boxes
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Choose the perfect size for your needs</h3>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              The Juno garden boxes are available in two sizes. Depending on the need for space and space, you can decide on your balcony or garden for one size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/garden-boxes/storage-space-with-style-sizes-of-hrmann-garden-boxes/1.avif"
                  alt="Type 1320 garden box"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Type 1320</h5>
              <p className="text-gray-700">
                The smaller option, providing approximately 0.4 m³ of storage space. Ideal for balconies or smaller garden areas where space is limited.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/garden-boxes/storage-space-with-style-sizes-of-hrmann-garden-boxes/2.avif"
                  alt="Type 1620 garden box"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Type 1620</h5>
              <p className="text-gray-700">
                The larger option, providing approximately 0.7 m³ of storage space. Perfect for gardens or larger balconies where more storage capacity is needed.
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-4 text-sm text-gray-600 text-center">
                Technical specifications for Hörmann garden boxes
              </caption>
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Installation dimensions / technical data
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type 1320
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type 1620
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    External dimensions with lid (width - depth - height)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    136 - 68 x 73 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    166 x 88 x 73 cm
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Internal dimensions (width - depth)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    123 x 53 cm
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    153 x 73 cm
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Volume
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    0.4 m³
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    0.7 m³
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Colors for the Garden Boxes Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colors for the Garden Boxes
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Modern color options to match your style</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/garden-boxes/colors-for-the-garden-boxes/1.avif"
                  alt="Grey aluminium RAL 9007"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Grey Aluminium (RAL 9007)</h5>
              <p className="text-gray-700">
                The standard colour grey aluminium RAL 9007 can be chosen for the outer colour design. This modern, neutral tone complements a wide range of garden and balcony styles.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/garden-boxes/colors-for-the-garden-boxes/2.avif"
                  alt="Anthracite grey RAL 7016"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Anthracite Grey (RAL 7016)</h5>
              <p className="text-gray-700">
                The standard colour anthracite grey RAL 7016 can be chosen for the outer colour design. This deep, sophisticated tone creates a striking visual element in your outdoor space.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-64 relative mb-4">
                <Image
                  src="/images/storage-systems/garden-boxes/colors-for-the-garden-boxes/3.avif"
                  alt="Grey white RAL 9002"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-2">Grey White (RAL 9002)</h5>
              <p className="text-gray-700">
                The interior is designed in the colour grey-white RAL 9002. This light, neutral tone creates a bright interior space that makes it easy to see and access your stored items.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick and Easy Assembly Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Quick and Easy Assembly
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Set up your garden box in no time</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 text-lg text-gray-600">
                Our high-quality garden boxes for your balcony or garden are delivered with a maximum degree of prefabrication. The appropriate tool is also included in the delivery.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Thanks to fewer individual parts, you can quickly and easily set up the garden boxes and fill them with your utensils to be stored. No specialized tools or complex assembly required - just simple, straightforward setup that gets your storage solution ready to use in minutes.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The height-adjustable feet allow you to adapt the garden box to uneven surfaces, ensuring stability and proper functionality regardless of where you place it.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/garden-boxes/quick-and-easy-assembly-of-hrmann-garden-boxes/gardenbox-6.avif"
                  alt="Quick and easy assembly of Hörmann garden boxes"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to organize your outdoor space?</span>
            <span className="block text-blue-200">Contact us to discuss your garden box options.</span>
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
