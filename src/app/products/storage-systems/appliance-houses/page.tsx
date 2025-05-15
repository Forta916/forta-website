import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Appliance Houses | Storage Systems | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann appliance houses including Berry and Juno series. Modern and stylish storage solutions for your garden, courtyard or driveway.',
};

export default function ApplianceHousesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Appliance Houses</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Modern and comfortable storage systems for your garden, courtyard or driveway.
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
                You want a modern and stylish equipment house for your garden, courtyard or driveway? If you are looking for a practical storage solution, then our metal equipment houses are just the thing for you.
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
                  src="/images/storage-systems/appliance-houses/appliance-houses/storage-space-systems-9.avif"
                  alt="Hörmann appliance house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appliance Houses Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Appliance Houses
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Hörmann tool houses can be individually designed and can therefore be adapted exactly according to your wishes. So you never have to think about where with your garden tools – and every tool, barbecue as well as high-quality machines, e-bikes or garden furniture will find their perfect place here.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                We offer two different series of equipment houses: the Berry and the Juno series. The Berry series provides robust metal construction with reinforced frames, ideal for standard storage needs. The Juno series offers premium metal construction with enhanced stability and additional features, perfect for those seeking a more sophisticated storage solution with greater customization options.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Both series can be tailored to your specific requirements with various size options, door configurations, and color choices to complement your outdoor space perfectly.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/appliance-houses/storage-space-systems-9.avif"
                  alt="Hörmann appliance house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Juno Equipment Houses Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Juno Equipment Houses
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Modern, durable, individual</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                With our storage systems, you can store your garden tools, tools, bicycles and much more practically and well protected. So you have more space in your home for the really beautiful things. Our equipment houses will reliably accompany you through life and protect what is important to you.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                The Juno appliance houses offer high-quality storage space for the garden or the terrace and allow an individual design: choose from two motifs, two roof shapes, three colours and up to 14 different sizes. In addition, you have the opportunity to design the roof and door elements in a different color than the rest of the device house.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium metal construction with enhanced stability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Available in 14 different sizes to fit your space</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Two distinct motifs and roof shapes for personalized style</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mix-and-match color options for roof and door elements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weather-resistant materials for long-lasting protection</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/juno-equipment-houses/juno-storage-space-system-2.avif"
                  alt="Hörmann Juno equipment house"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Benefits at a Glance Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Benefits at a Glance
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Juno equipment houses from Hörmann</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Robust construction made of single-walled, galvanized, high-quality painted sheet steel</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weather-resistant, rainwaterproof and UV-resistant thanks to high-quality double-sided coil coating</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Particularly low-maintenance and easy to care for</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Various design options: two roof shapes (flat and gable roof) as well as two motifs (modern and design)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Large selection of sizes: 11 sizes for the flat roof, 14 sizes for the gable roof</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Three modern exterior colours: RAL 7016 anthracite grey, CH 703 Anthracite metallic and RAL 9007 grey aluminium</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Modern design with concealed ribbons</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Door lock for controlled opening and closing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Standard stainless steel pusher set</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Individually expandable inside and outside with optional accessories</span>
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
                  src="/images/storage-systems/appliance-houses/juno-benefits-at-a-glance/juno-storage-space-system-3.avif"
                  alt="Hörmann Juno equipment house benefits"
                  fill
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colors for Juno Equipment Houses Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colors for Juno Equipment Houses
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Three modern exterior colours</h3>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              There are 3 modern standard colours for colour design: anthracite grey, anthracite metallic and grey aluminium. 
              In addition, there is the possibility to design the roof and the door elements in a different color than the rest of the device house. 
              Inside, the Juno equipment houses are painted in grey white.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/storage-systems/appliance-houses/colors-for-juno-equipment-houses/1.avif"
                  alt="RAL 7016 anthracite grey"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900">RAL 7016</h4>
                <p className="text-gray-700">Anthracite Grey</p>
                <p className="mt-2 text-sm text-gray-600">Standard exterior color</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/storage-systems/appliance-houses/colors-for-juno-equipment-houses/2.avif"
                  alt="CH 703 Anthracite Metallic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900">CH 703</h4>
                <p className="text-gray-700">Anthracite Metallic</p>
                <p className="mt-2 text-sm text-gray-600">Standard exterior color</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/storage-systems/appliance-houses/colors-for-juno-equipment-houses/3.avif"
                  alt="RAL 9007 Grey aluminium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900">RAL 9007</h4>
                <p className="text-gray-700">Grey Aluminium</p>
                <p className="mt-2 text-sm text-gray-600">Standard exterior color</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/storage-systems/appliance-houses/colors-for-juno-equipment-houses/4.avif"
                  alt="RAL 9002 Grey white"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900">RAL 9002</h4>
                <p className="text-gray-700">Grey White</p>
                <p className="mt-2 text-sm text-gray-600">Standard interior color</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-600 italic">
              Custom color combinations available for roof and door elements.
            </p>
          </div>
        </div>
      </div>

      {/* Roof Shapes and Motifs for Juno Equipment Houses Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Roof Shapes and Motifs for Juno Equipment Houses
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Large design selection</h3>
          </div>
          
          {/* Flat Roof Information */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Juno equipment house with flat roof</h4>
              <p className="mt-4 text-lg text-gray-600">
                A Juno equipment house with a flat roof sets a striking accent in your garden. The minimalist, modern design blends perfectly into any contemporary garden design. With a comfortable passage height of almost 2 meters, it offers enough space for all your garden tools.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The flat roof is available for both motifs (design and modern) of the Juno equipment houses and is available in 11 sizes, so you will find exactly the right solution for your needs.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Equipped as standard with two rain after pipes, it ensures optimum drainage even in bad weather and makes it possible to collect rainwater for garden irrigation. Get the functional and aesthetic highlight for your garden now!
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-juno-equipment-houses/juno-storage-space-system-4.avif"
                  alt="Juno equipment house with flat roof"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Motives for Flat Roofs */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Motives for flat roofs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-juno-equipment-houses/motivedesign.avif"
                    alt="Design Motif for Juno equipment house"
                    fill
                    className="object-cover"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Design Motif</h5>
                <p className="text-gray-700">
                  The Design motif features clean lines and a contemporary aesthetic with elegant detailing. This option is perfect for modern garden landscapes and offers a sophisticated look that complements architectural elements in your outdoor space.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-juno-equipment-houses/motivemodern.avif"
                    alt="Modern Motif for Juno equipment house"
                    fill
                    className="object-contain rounded-md"
                  />
                  <Image
                  src="/images/storage-systems/appliance-houses/juno-equipment-house-with-saddle-roof/juno-storage-space-system-5.avif"
                  alt="Juno equipment house with saddle roof"
                  fill
                  priority={true}
                  className="object-cover"
                />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Modern Motif</h5>
                <p className="text-gray-700">
                  The Modern motif emphasizes simplicity and functionality with a minimalist approach. This option provides a sleek, unobtrusive appearance that blends seamlessly with various garden styles while maintaining a contemporary feel.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                Both motifs are available with flat roof or gable roof options, giving you complete design flexibility.
              </p>
            </div>
          </div>
          
          {/* Saddle Roof Information */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Juno equipment house with saddle roof</h4>
              <p className="mt-4 text-lg text-gray-600">
                A Juno equipment house with a traditional gable roof brings a classic style to your garden. Thanks to a generous passage height of almost 2 meters, it offers you plenty of space for your garden tools.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The gable roof is available for the two design and modern motifs and is available in 14 different sizes, so you can find the perfect solution for your gardening supplies. Choose timeless elegance and functionality!
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/juno-equipment-house-with-saddle-roof/juno-storage-space-system-5.avif"
                  alt="Juno equipment house with saddle roof"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Motives for Saddle Roofs */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Motives for saddle roofs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/juno-equipment-house-with-saddle-roof/motivedesign.avif"
                    alt="Design Motif for Juno equipment house with saddle roof"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Design Motif</h5>
                <p className="text-gray-700">
                  The Design motif for saddle roof models features elegant lines and refined details that enhance the traditional appearance. This option combines classic architecture with contemporary design elements for a sophisticated garden storage solution.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/juno-equipment-house-with-saddle-roof/motivemodern.avif"
                    alt="Modern Motif for Juno equipment house with saddle roof"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Modern Motif</h5>
                <p className="text-gray-700">
                  The Modern motif with saddle roof offers a clean, streamlined aesthetic that updates the traditional gable roof design. This option provides a perfect balance between classic form and contemporary style, ideal for various garden settings.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                The saddle roof design is available in 14 different sizes to accommodate various space requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Juno Equipment House Design Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Juno Equipment House Design
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Elegant aesthetics with modern details</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/juno-equipment-house-design/juno-storage-space-system-9.avif"
                  alt="Juno equipment house design"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mt-3 text-lg text-gray-600">
                The Juno-Appliance House in the Design motif convinces with its striking, wide, vertical slats, which give the house a modern and elegant aesthetic. Thanks to the invisible screws, rivets and door straps, a particularly simple and harmonious overall look is created.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                It is available with both a flat roof and a classic gable roof, which allows it to be flexibly adapted to different architectural requirements.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Design Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Striking wide vertical slats for modern aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Invisible screws, rivets, and door straps for clean appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Simple and harmonious overall look</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available with both flat roof and gable roof options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Adaptable to different architectural requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Juno Equipment House Modern Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Juno Equipment House Modern
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Classic, filigree charm with clean lines</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 text-lg text-gray-600">
                The narrow, vertically aligned slats in the Modern motif give the Juno-Gerätehaus a classic, filigree charm. The invisible screws, rivets and door straps create a particularly clear and harmonious look.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The garden shed is available with both a flat roof and a gable roof, so it can be easily integrated into different garden styles.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Modern Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Narrow vertical slats for classic, filigree appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Invisible screws, rivets, and door straps for clean aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Clear and harmonious overall look</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available with both flat roof and gable roof options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Easily integrates into different garden styles</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/juno-equipment-house-modern/juno-storage-space-system-7.avif"
                  alt="Juno equipment house modern"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suitable accessories for every application Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Suitable accessories for every application
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">An equipment house according to your wishes</h3>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              All Juno equipment houses can be easily and individually supplemented with practical accessories. This makes your equipment house a unique piece that is perfectly tailored to your requirements.
            </p>
          </div>
          
          <div className="mt-12">
            <Carousel>
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/1.avif"
                imageAlt="Raincum pipe set (2 pieces)"
                title="Raincum pipe set (2 pieces)"
                subtitle="The rainfall pipe (5.5 x 5.5 cm) incl. mounting material is optionally available in suitable RAL colour of the device house. The rainfall pipe in the unit house with a flat roof is standard equipment."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/2.avif"
                imageAlt="Hose set (2 pieces)"
                title="Hose set (2 pieces)"
                subtitle="With the optionally available hose set incl. fastening material you can use the rainwater e.g. directly into a rain barrel."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/3.avif"
                imageAlt="Soil sleep ramp (inside/outside)"
                title="Soil sleep ramp (inside/outside)"
                subtitle="With the floor sleeper ramp, wheelbrass, lawn mowers or bicycles can be easily pushed into and out of the equipment house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/4.avif"
                imageAlt="Glazing"
                title="Glazing"
                subtitle="You want natural light in your device house? Then it can be easily supplemented with glazing elements made of 4 mm thick safety glass (ESG) in the walls or doors."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/5.avif"
                imageAlt="Light band"
                title="Light band"
                subtitle="The strip of light is a glazing that is located between the roof and the side walls and allows natural daylight to the appliance house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/6.avif"
                imageAlt="Soil depth glazing"
                title="Soil depth glazing"
                subtitle="Floor-deep windows made of 4 mm thick laminated safety glass (VSG) leave plenty of daylight into your appliance house, create a bright and welcoming atmosphere and improve the indoor climate."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/7.avif"
                imageAlt="Leaves cover"
                title="Leaves cover"
                subtitle="A foliage cover prevents leaves from penetrating into the gutter and clogging it. With this simple solution, you save time and effort, especially in credible environments. The foliage cover is optionally available for tool houses with flat roof and gable roof."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/8.avif"
                imageAlt="Aluminium floor frame"
                title="Aluminium floor frame"
                subtitle="The optional aluminum floor frame incl. fastening material provides stability and protects against weather conditions and rust."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/9.avif"
                imageAlt="Steel substructure for floor"
                title="Steel substructure for floor"
                subtitle="The steel substructure incl. mounting material for the floor provides a stable surface in the equipment house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/10.avif"
                imageAlt="Screw foundation"
                title="Screw foundation"
                subtitle="With the screw foundation, you can place your equipment house safely and stable on uneven floors without having to worry about an elaborate concrete foundation."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/11.avif"
                imageAlt="Bike stand horizontal"
                title="Bike stand horizontal"
                subtitle="The bicycle stand is available in various lengths. In addition, the distance of the bracket can be flexibly adjusted to the tyre width. Bicycles weighing up to 40 kg can be parked in the holder."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/12.avif"
                imageAlt="Bicycle stand vertical"
                title="Bicycle stand vertical"
                subtitle="Wheels of up to 40 kg can be found in the bracket."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/13.avif"
                imageAlt="Clothes hook"
                title="Clothes hook"
                subtitle="A coat hook provides a practical solution for hanging jackets or other items neatly and handy. Through its simple installation, it creates additional storage space and helps to keep order in the appliance house. The coat hook is part of the standard equipment."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/14.avif"
                imageAlt="Shelf set"
                title="Shelf set"
                subtitle="The shelf set consists of two shelves and shelf strips for convenient attachment to the interior walls. The set is standard equipment."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/15.avif"
                imageAlt="Folding table set incl. Shelf holder set"
                title="Folding table set incl. Shelf holder set"
                subtitle="The folding table set consists of a folding table and shelf strips for practical attachment to the inner walls."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/16.avif"
                imageAlt="Device holder incl. Shelf bar"
                title="Device holder incl. Shelf bar"
                subtitle="Always visible and quick: In the practical holder, the tools can be clearly stored."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/17.avif"
                imageAlt="Shelf shelf (2 pieces)"
                title="Shelf shelf (2 pieces)"
                subtitle="A shelf strip allows the clear storage of smaller tools, plant accessories or other objects. It creates additional storage space and ensures that frequently used utensils are always at hand and well organized. The shelf strips are standard equipment."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application/18.avif"
                imageAlt="Aluminum floor profiles"
                title="Aluminum floor profiles"
                subtitle="Perfectly matched to the appliance house: The floor profiles made of aluminium are available as an option. This keeps the floor stainless and easily removes dirt."
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Berry Equipment Houses Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment Houses
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Modern, robust, versatile in design</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 text-lg text-gray-600">
                Are you looking for an elegant and modern solution to store your garden utensils? Individually adaptable to your needs, practical, particularly durable and CO<sub>2</sub>-neutral?
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Our Berry metal appliance houses are a practical and modern storage solution and ensure maximum order in your garden for a lifetime.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The tool houses can be individually designed and can therefore be adapted exactly according to your wishes. So you never have to think about where with your garden tools – and every tool, barbecue as well as high-quality machines, e-bikes or garden furniture will find their perfect place here.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Key Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Robust metal construction with reinforced frames</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Weather-resistant materials for year-round protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Customizable design options to match your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Practical storage for garden tools, equipment, and furniture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Long-lasting durability for lifetime use</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Environmentally friendly CO<sub>2</sub>-neutral production</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-houses/storage-space-systems-02-new.avif"
                  alt="Berry equipment house"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Benefits at a Glance Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Benefits at a Glance
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Berry equipment houses from Hörmann</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Robust construction made of single-walled, galvanized, high-quality painted sheet steel</span>
                </li>
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
                  <span className="text-gray-700">Quick and easy assembly thanks to maximum prefabrication</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Particularly low-maintenance and easy to care</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Various design options: two roof shapes (console and gable roof) as well as two motifs (Modern and Classic)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">9 standard colours and optionally all RAL colours available</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">3 different sizes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Height-adjustable strips</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Standard plastic pressure set</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Maximum order through practical accessories</span>
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
                  <span className="text-gray-700">Including aluminum floor frame at no extra charge</span>
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
                  src="/images/storage-systems/appliance-houses/berry-benefits-at-a-glance/tool-sheds-03.avif"
                  alt="Hörmann Berry equipment house benefits"
                  fill
                  priority={true}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colours and Decors for Berry Equipment Houses Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colours and Decors for Berry Equipment Houses
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
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-3004-purple-red.avif"
                  imageAlt="RAL 3004 Purple red"
                  title="RAL 3004 Purple Red"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-5014-pigeon-blue.avif"
                  imageAlt="RAL 5014 Pigeon Blue"
                  title="RAL 5014 Pigeon Blue"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-6005-moss-green.avif"
                  imageAlt="RAL 6005 Moss Green"
                  title="RAL 6005 Moss Green"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-6013-reed-green.avif"
                  imageAlt="RAL 6013 Reed Green"
                  title="RAL 6013 Reed Green"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-7016-anthracite-grey.avif"
                  imageAlt="RAL 7016 Anthracite Grey"
                  title="RAL 7016 Anthracite Grey"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-7039-quartz-grey.avif"
                  imageAlt="RAL 7039 Quartz Grey"
                  title="RAL 7039 Quartz Grey"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-7040-window-grey.avif"
                  imageAlt="RAL 7040 Window Grey"
                  title="RAL 7040 Window Grey"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-9006-white-aluminium.avif"
                  imageAlt="RAL 9006 White Aluminium"
                  title="RAL 9006 White Aluminium"
                  subtitle="Standard color for Berry equipment houses"
                />
                
                <CarouselItem 
                  imageSrc="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-9007-grey-aluminium.avif"
                  imageAlt="RAL 9007 Grey Aluminium"
                  title="RAL 9007 Grey Aluminium"
                  subtitle="Standard color for Berry equipment houses"
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
                  src="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/decograin-decor-golden-oak.avif"
                  alt="Decograin decor Golden Oak"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-gray-700">
                The Golden Oak decor is available for an additional charge for the "Modern" motif. Appliance houses with this decor are white inside, creating a bright and welcoming interior space.
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
                  src="/images/storage-systems/appliance-houses/colours-and-decors-for-berry-equipment-houses/ral-by-election.avif"
                  alt="RAL by election"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-gray-700">
                Your desired colour is not included? No problem! In order to meet your ideas, you will also receive the Hörmann equipment houses in all RAL colours for an additional fee.
              </p>
              <p className="mt-4 text-gray-700">
                This allows you to perfectly match your equipment house to your home's exterior, garden features, or other structures on your property for a cohesive and personalized look.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roof Shapes and Motifs for Berry Equipment Houses Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Roof Shapes and Motifs for Berry Equipment Houses
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Large Design Selection</h3>
          </div>
          
          {/* Berry Equipment House with Pitch Tower */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Berry equipment house with pitch tower</h4>
              <p className="mt-4 text-lg text-gray-600">
                Do you want to set a more striking accent and create a modern look? Then a pitched roof with a rear inclined roof and an elegant roof ledge is just the right choice for your device house. On the front side, glazing provides daylight inside the house.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The device house with a pitch tower is almost 2 metres high inside and thus offers a comfortable standing height. The console roof is available for all motifs of the Berry equipment houses.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This design combines functionality with modern aesthetics, creating a storage solution that not only serves its purpose but also enhances the visual appeal of your garden or outdoor space.
              </p>
              <div className="mt-6 space-y-2">
                <h5 className="font-semibold text-lg text-gray-900">Key Features:</h5>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Modern design with striking accent</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Pitched roof with rear incline and elegant roof ledge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Front glazing for natural daylight inside</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Comfortable standing height of almost 2 meters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available for all Berry equipment house motifs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/tool-sheds-08-new.avif"
                  alt="Berry equipment house with pitch tower"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Motives with Console Roof */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Motives with Console Roof</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/1.avif"
                    alt="Motive Classic for Berry equipment house"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic</h5>
                <p className="text-gray-700">
                  The Classic motif features traditional design elements with clean lines and a timeless appearance. This option provides a sophisticated look that complements various garden styles while maintaining a classic aesthetic.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/2.avif"
                    alt="Motive Modern for Berry equipment house"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Modern</h5>
                <p className="text-gray-700">
                  The Modern motif emphasizes contemporary design with sleek lines and minimalist details. This option offers a clean, uncluttered appearance that integrates seamlessly with modern garden landscapes and architectural styles.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/3.avif"
                    alt="Motive Classic Air for Berry equipment house"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic Air</h5>
                <p className="text-gray-700">
                  The Classic Air motif combines traditional design elements with enhanced ventilation features. This option provides the timeless appeal of the Classic motif while incorporating improved airflow for better climate control inside the equipment house.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/4.avif"
                    alt="Motive Classic Air-Plus for Berry equipment house"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic Air-Plus</h5>
                <p className="text-gray-700">
                  The Classic Air-Plus motif takes ventilation to the next level with additional airflow features while maintaining the elegant Classic design. This premium option is ideal for storing items that benefit from optimal air circulation and climate control.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/roof-shapes-and-motifs-for-berry-equipment-houses/5.avif"
                    alt="Motive Vario for Berry equipment house"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Vario</h5>
                <p className="text-gray-700">
                  The Vario motif offers customizable design elements that can be tailored to your specific preferences. This versatile option allows you to create a unique look that perfectly complements your garden's style and meets your specific storage requirements.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                All motifs are available with the console roof design, giving you complete flexibility to choose the perfect combination for your outdoor space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Equipment House with Saddle Roof Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment House with Saddle Roof
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Classic Style with Comfortable Height</h3>
          </div>
          
          {/* Berry Equipment House with Saddle Roof */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Classic Gable Roof Design</h4>
              <p className="mt-4 text-lg text-gray-600">
                Do you like a classic style for your equipment house? Then opt for a house with a gable roof. These houses reach a comfortable passage height of almost 2 metres, providing ample space for storing your garden tools and equipment.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The gable roof is available for all motifs of the Berry equipment houses, giving you complete flexibility to choose the perfect combination of roof style and design motif for your outdoor space.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The traditional gable roof design not only offers a timeless aesthetic that complements any garden setting but also provides practical benefits such as excellent rain drainage and increased interior height.
              </p>
              <div className="mt-6 space-y-2">
                <h5 className="font-semibold text-lg text-gray-900">Key Features:</h5>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Classic gable roof design with timeless appeal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Comfortable passage height of almost 2 meters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Excellent rain drainage and weather protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available for all Berry equipment house motifs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complements traditional garden and home designs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/storage-space-systems-03.avif"
                  alt="Berry equipment house with saddle roof"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Motives for Saddle Roof */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Motives for Saddle Roof</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/1.avif"
                    alt="Motive Classic for Berry equipment house with saddle roof"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic</h5>
                <p className="text-gray-700">
                  The Classic motif with saddle roof combines traditional design elements with the timeless appeal of a gable roof. This option offers a sophisticated, classic look that harmonizes with various garden styles and traditional architecture.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/2.avif"
                    alt="Motive Modern for Berry equipment house with saddle roof"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Modern</h5>
                <p className="text-gray-700">
                  The Modern motif with saddle roof creates an interesting contrast between contemporary design elements and the classic gable roof shape. This combination offers a fresh take on traditional garden storage that bridges modern and classic aesthetics.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/3.avif"
                    alt="Motive Classic Air for Berry equipment house with saddle roof"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic Air</h5>
                <p className="text-gray-700">
                  The Classic Air motif with saddle roof enhances the traditional design with improved ventilation features. The gable roof design works perfectly with this motif to create optimal airflow while maintaining the classic aesthetic appeal.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/4.avif"
                    alt="Motive Classic Air-Plus for Berry equipment house with saddle roof"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Classic Air-Plus</h5>
                <p className="text-gray-700">
                  The Classic Air-Plus motif with saddle roof takes ventilation to the next level while preserving the traditional gable roof appearance. This premium option is ideal for storing items that benefit from optimal air circulation in a classic-styled structure.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="h-64 relative mb-4">
                  <Image
                    src="/images/storage-systems/appliance-houses/berry-equipment-house-with-saddle-roof/5.avif"
                    alt="Motive Vario for Berry equipment house with saddle roof"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Motive Vario</h5>
                <p className="text-gray-700">
                  The Vario motif with saddle roof offers customizable design elements within the classic gable roof framework. This versatile option allows you to create a personalized traditional-style storage solution that perfectly matches your specific requirements.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                All motifs are available with the saddle roof design, allowing you to choose the perfect combination of style and functionality for your garden storage needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Equipment House Classic Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment House Classic
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Timeless Design with Elegant Details</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-house-classic/tool-sheds-05-new.avif"
                  alt="Berry equipment house Classic"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mt-3 text-lg text-gray-600">
                The Berry equipment house Classic with a narrow, vertical motif has a classic filigree look. A design that connects style and shape timelessly and does not have any visible screws and rivets. An attractive appearance down to the smallest detail.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                With the even, tidy view, the appliance houses can be perfectly combined with facades, front doors and garage doors. The Berry-Gerätehaus Classic is available with a pitched roof or with a gable roof, giving you flexibility to match your existing architecture.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This timeless design creates a sophisticated storage solution that enhances the visual appeal of your garden or outdoor space while providing practical functionality for all your storage needs.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Design Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Narrow vertical motif with classic filigree appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Timeless design that connects style and shape</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No visible screws and rivets for a clean, seamless appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Perfectly combines with facades, front doors, and garage doors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available with both pitched roof and gable roof options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Equipment House Modern Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment House Modern
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Contemporary Elegance with Wide Vertical Motif</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 text-lg text-gray-600">
                The Berry equipment house Modern is characterized by a wide, vertical motif. This is particularly elegant and stylish. The generous motif creates a modern and straightforward view. There are no screws or rivets visible that disturb this high-quality optics.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This makes your equipment house an eye-catcher outside. A pitch tower or gable roof is available for the Berry-Gerätehaus Modern, allowing you to choose the perfect roof style to complement your garden and home architecture.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The Modern motif combines contemporary aesthetics with practical functionality, creating a storage solution that stands out as a design element in your outdoor space while providing all the utility you need.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Modern Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Wide vertical motif for a modern, elegant appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Clean design with no visible screws or rivets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Stylish and straightforward aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Eye-catching exterior appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available with both pitched roof and gable roof options</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-house-modern/storage-space-systems-04-new.avif"
                  alt="Berry equipment house Modern"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Equipment Houses Classic Air and Classic Air Plus Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment Houses Classic Air and Classic Air Plus
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Enhanced Ventilation for Specialized Storage</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-houses-classic-air-and-classic-air-plus/tool-sheds-16.avif"
                  alt="Berry equipment houses Classic Air and Classic Air Plus"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mt-3 text-lg text-gray-600">
                The Berry equipment houses Classic Air and Classic Air Plus, which are only available from Hörmann, feature ventilation cross-sections, which provide natural ventilation and are ideal as garbage can storage spaces or bicycle garages, for example.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                The Classic Air version with three-hole rows offers good ventilation while at the same time reducing insight into the equipment house. The Classic Air Plus version with eight rows of holes provides plenty of light and excellent ventilation.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Matching ventilation grilles are optionally available as accessories. The Berry equipment houses Classic Air and Classic Air Plus are available with both a pitched roof and a gable roof.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Ventilation Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exclusive Hörmann ventilation design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Classic Air version with three-hole rows for good ventilation with privacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Classic Air Plus version with eight-hole rows for excellent ventilation and light</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Optional matching ventilation grilles available as accessories</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Ideal for garbage can storage and bicycle garages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available with both pitched roof and gable roof options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berry Equipment House Vario Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Berry Equipment House Vario
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">Customizable Design for Personal Expression</h3>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="mt-3 text-lg text-gray-600">
                With the Vario motif, the outside of the Berry equipment house can be individually designed, because it enables on-site planking. Choose your desired filling to realize your personal design ideas and adapt the equipment house to the garden style.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Hörmann provides the frame construction for the later on-site planking, as standard in black or on request in a freely selectable RAL colour. The Vario motif is available for both roof shapes – pitched and gable roof – as well as in three different sizes.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                This unique customization option allows you to create a truly personalized storage solution that perfectly complements your home's exterior, matches existing garden structures, or makes a distinctive design statement in your outdoor space.
              </p>
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Customization Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Personalized design with on-site planking options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Ability to match garden style and existing structures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Frame construction provided by Hörmann</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Standard black frame or custom RAL color options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Compatible with both pitched roof and gable roof designs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Available in three different sizes</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/storage-systems/appliance-houses/berry-equipment-house-vario/motivvariofuerberry-geraetehaeuser.avif"
                  alt="Berry equipment house Vario"
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suitable accessories for every application Berry Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Suitable accessories for every application
            </h2>
            <h3 className="mt-2 text-xl text-gray-600">An equipment house according to your wishes</h3>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-600">
              What would the perfect store be without the appropriate accessories? The Hörmann Berry equipment houses can be easily equipped individually with clever solutions inside and outside. This is not only the look right, but also the functionality.
            </p>
          </div>
          
          <div className="mt-12">
            <Carousel>
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/1.avif"
                imageAlt="Roof frame for green roof"
                title="Roof frame for green roof"
                subtitle="All Berry appliance houses with a pitched roof and gable roof can be equipped with a roof frame to prepare for green roof. For more biodiversity in your own garden!"
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/2.avif"
                imageAlt="Leaves cover"
                title="Leaves cover"
                subtitle="A foliage cover prevents leaves from penetrating into the gutter and clogging it. With this simple solution, you save time and effort, especially in credible environments. The foliage cover is optionally available for appliance cabins with pitch tower and gable roof."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/3.avif"
                imageAlt="Stainless steel pusher set"
                title="Stainless steel pusher set"
                subtitle="At your request, a high-quality stainless steel pusher set is available. And optionally, even a cylinder lock for a locking system can be retrofitted."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/4.avif"
                imageAlt="Vineyard bars"
                title="Vineyard bars"
                subtitle="Your device house should be beautified with plants? Then we have a stable trellis for you in the offer, which can be easily attached to an outside wall of the device house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/5.avif"
                imageAlt="Soil sleeper ramp (outside)"
                title="Soil sleeper ramp (outside)"
                subtitle="With the external floor sleeper ramp, wheelbarrow, lawn mowers or bicycles can be easily pushed into and out of the equipment house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/6.avif"
                imageAlt="Soil sleep ramp (inside)"
                title="Soil sleep ramp (inside)"
                subtitle="The floor sleeper ramp for the interior of the device house ensures easy pushing in and out."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/7.avif"
                imageAlt="Ventilation grilles"
                title="Ventilation grilles"
                subtitle="The ventilation grilles for the Berry equipment houses Classic Air and Classic Air Plus, which are equipped with ventilation cross-sections, ensure effective privacy. This keeps hidden which objects are inside the device house, while at the same time the natural ventilation is not affected."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/8.avif"
                imageAlt="Glazing"
                title="Glazing"
                subtitle="You want natural light in your device house? Then, on request, it can be easily supplemented with glazing elements with shatterproof plastic discs in the walls or doors."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/9.avif"
                imageAlt="Rain drain hose set"
                title="Rain drain hose set"
                subtitle="With the optionally available hose set, you can e.g. directly into a rain barrel."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/10.avif"
                imageAlt="Raincoff pipe"
                title="Raincoff pipe"
                subtitle="The rainfall pipe is available in a matching RAL colour of the device house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/11.avif"
                imageAlt="Screw foundation"
                title="Screw foundation"
                subtitle="With the screw foundation, you can place your equipment house safely and stable on uneven floors without having to worry about an elaborate concrete foundation."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/12.avif"
                imageAlt="Door locking"
                title="Door locking"
                subtitle="More comfort for your door: The door lock including gas spring ensures a safe detection of the door and automatic closing. So you always have your hands free."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/13.avif"
                imageAlt="Folding table set incl. Shelf holder set"
                title="Folding table set incl. Shelf holder set"
                subtitle="The folding table set consists of a folding table and shelf strips for practical attachment to the inner walls."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/14.avif"
                imageAlt="Shelf set"
                title="Shelf set"
                subtitle="The shelf set consists of two shelves and shelf strips for convenient attachment to the interior walls."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/15.avif"
                imageAlt="Corner rack"
                title="Corner rack"
                subtitle="The corner shelf can be attached to the corners of the appliance house and allows a practical storage option."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/16.avif"
                imageAlt="Device holder incl. Shelf bar"
                title="Device holder incl. Shelf bar"
                subtitle="Broom, shovel and co. can be placed in the device holder. So they are always quickly at hand for the next use."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/17.avif"
                imageAlt="Tool holder"
                title="Tool holder"
                subtitle="Always visible and quick: In the practical holder, the tools can be clearly stored."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/18.avif"
                imageAlt="Bicycle holder"
                title="Bicycle holder"
                subtitle="Wheels of up to 40 kg can be found in the bracket."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/19.avif"
                imageAlt="Aluminium corrugated sheet base"
                title="Aluminium corrugated sheet base"
                subtitle="Perfectly matched to the appliance house: The corrugated aluminium bottom is available as an option. This keeps the floor stainless and easily removes dirt."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/20.avif"
                imageAlt="Steel substructure for floors"
                title="Steel substructure for floors"
                subtitle="The steel substructure for the floor ensures a stable substrate in the equipment house."
              />
              
              <CarouselItem 
                imageSrc="/images/storage-systems/appliance-houses/suitable-accessories-for-every-application-berry/21.avif"
                imageAlt="LED magnetic lamp"
                title="LED magnetic lamp"
                subtitle="The perfect lighting should also be provided: Thanks to functional aluminium LED magnetic lamps with motion detectors, you also have all your devices in view when it is dark outside."
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Our Products Compare Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Products Compare
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The comparison is worthwhile
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-8">
              Compare the features of our Juno and Berry equipment houses to find the perfect storage solution for your needs.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Juno Equipment Houses
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Berry Equipment Houses
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Roof type
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Saddle roof and flat roof
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Saddle roof and pitcher
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Passage dimensions
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Depth height and width larger than with comparable equipment houses of other manufacturers
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Depth height and width larger than with comparable equipment houses of other manufacturers
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Colors
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      3 colours as standard
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      9 colors as standard
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      RAL by election
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      No RAL of your choice
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      RAL by election
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sizes
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      11 sizes flat roof, 14 sizes saddle roof
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      3 sizes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Motives
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2 motifs "Modern" and "Design"
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2 motifs "Classic" and "Modern"
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Mounting
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Installation in a modular principle – individual 480 mm wall elements
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Simple and quick assembly – high degree of prefabrication due to frame design
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sheet metal thickness
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Wall and roofing sheet thickness 0.5 mm
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Wall and roofing sheet thickness 0.5 mm to 0.65 mm
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Stability
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Stability due to screwed floor and roof frames in 1.5 mm material thickness
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Stability through walls with steel tube frame construction – frame parts in 1.5 mm material thickness
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Window
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Floor-to-ceiling windows with 4 mm laminated safety glass possible
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Optionally small windows with Duratec glazing possible
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Door
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      1-flüglig and 2-flüglig possible
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      1-flüglig and 2-flüglig possible
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Door hinges
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Concealed straps, 3-dimensional adjustable
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Height adjustable bands
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Edges
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Carefully works all edges to minimize the risk of injury
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Without sharp edges and thus very child-proof
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Wind load
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Wind load 150 km/h / snow load 150 kg/m²
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Wind load 150 km/h / snow load 150 kg/m²
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Roof frame
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      No roof frame for green roof possible
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Optional roof frame for green roof possible
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bicolor (roof and door elements in different color)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Optional Bicolor outside
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      No Bicolor
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Coating
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      High-quality coil coating (advantage: inside lighter thanks to RAL 9002 grey white)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Inside and outside powder-coated hot-dip galvanized steel sheet
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Pusher
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Standard stainless steel pusher set
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Standard plastic pressure set
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Guarantee
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      20 year warranty
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      20 year warranty
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Need Help Choosing? Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to organize your outdoor space?</span>
            <span className="block text-blue-200">Contact us to discuss your appliance house options.</span>
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

