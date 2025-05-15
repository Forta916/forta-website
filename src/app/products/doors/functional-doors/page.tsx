import Image from 'next/image';
import Button from '@/components/ui/Button';
import ComparisonTable from '@/components/ui/ComparisonTable';

export const metadata = {
  title: 'Functional Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann functional doors. High-quality steel doors for security, fire protection, and multi-purpose applications for your California home.',
};

export default function FunctionalDoorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Functional Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            The right door for every room – feel-good character guaranteed.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Functional Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Whether new building or modernisation, Hörmann offers you the right door for every area of the house. Whether security doors for the basement or garage entrance, fire-retarding doors for the boiler room or multi-purpose doors for your hobby room – our high-quality steel doors ensure that you feel really comfortable and safe in your own home.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Discover all the advantages and functions of our steel doors and the individual design options. For more comfort and accessibility, steel doors can also be equipped with the PortaMatic door drive from Hörmann.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/function-doors.avif"
                  alt="Hörmann functional door"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Section: Specialized Doors for Every Need */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Specialized Doors for Every Need
            </h2>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                Whether new building or modernisation, Hörmann offers you the right door for every area of the house. Whether security doors for the basement or garage entrance, fire-retarding doors for the boiler room or multi-purpose doors for your hobby room – our high-quality steel doors ensure that you feel really comfortable and safe in your own home. Discover all the advantages and functions of our steel doors and the individual design options.
              </p>
              
              <p className="mt-6 text-lg text-gray-600">
                For more comfort and accessibility, steel doors can also be equipped with the PortaMatic door drive from Hörmann.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/functional-doors-for-your-house/function-doors.avif"
                  alt="Hörmann functional door"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety door KSI Thermo46 / KSI Thermo65 Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Safety door KSI Thermo46 / KSI Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              High safety and best thermal insulation
            </p>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The KSI Thermo46 / KSI Thermo65 safety doors impress with a variety of advantages. Thanks to the thermally separated door leaf, the KSI Thermo65 offers a roughly 50% better thermal insulation compared to a conventional safety door, the KSI Thermo46 is approx. 30%. Both doors reduce the risk of sweating in heated rooms. Thanks to the burglar-resistant RC2 safety equipment, you can feel safe in your home. Thanks to the thick door leaf with PU-hard foam filling and the double seals on all four sides, the steel safety doors have thermal insulation values that otherwise only have front doors. They offer soundproofing up to 29 dB, while the KSI Thermo65 optionally even up to 42 dB (sound protection class 3).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* KSI Thermo46 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">KSI Thermo46</h3>
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/doors/functional-doors/safety-door-ksi-thermo46--ksi-thermo65/function-door-KSI-Thermo46.avif"
                    alt="KSI Thermo46 safety door"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">30% better thermal insulation than conventional safety doors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Burglar-resistant RC2 safety equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Thick door leaf with PU-hard foam filling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Double seals on all four sides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Soundproofing up to 29 dB</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* KSI Thermo65 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">KSI Thermo65</h3>
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/doors/functional-doors/safety-door-ksi-thermo46--ksi-thermo65/function-door-KSI-Thermo65.avif"
                    alt="KSI Thermo65 safety door"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">50% better thermal insulation than conventional safety doors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Burglar-resistant RC2 safety equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Thick door leaf with PU-hard foam filling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Double seals on all four sides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Soundproofing up to 42 dB (sound protection class 3)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Fire protection door FS Thermo65 Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fire protection door FS Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              For the highest demands on fire protection
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                The fire protection door FS Thermo65 is tested in retardant after El 2 30 and can withstand for up to 30 minutes in case of fire. In addition, the door with a 65 mm thick door leaf offers very good thermal insulation and reaches a UD value of up to 0.85 W/(m²·K). This is significantly below the limit value of the Building Energy Act (1.8 W/(m²·K).
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                Thanks to thermal separation, the door offers up to 49% better thermal insulation compared to a conventional fire protection door. In addition, the risk of sweating water on the door leaf is reduced in heated rooms. In combination with the motif 610S, the FS Thermo65 with frameless glazing cut-out and clear or frosted satin-finish glazing ensures a modern door design and natural light incidence.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                With the standard top door closer, the fire protection door can be opened and closed comfortably. The smokedness S 200 is achieved exclusively with a multi-point locking system.
              </p>
              
              <p className="mt-4 text-lg font-medium text-gray-900">
                Outside door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Fire protection requirements, e.g. for the transition from the garage to the house</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Fire-retardant tested according to El230 (withstands up to 30 minutes in a fire)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Excellent thermal insulation with a UD value of up to 0.85 W/(m²·K)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">49% better thermal insulation compared to conventional fire protection doors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">65 mm thick door leaf for superior protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional frameless glazing for modern design and natural light</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Standard top door closer for comfortable operation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Smokedness S 200 with multi-point locking system</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/fire-protection-door-fs-thermo65/function-doors-7.avif"
                  alt="FS Thermo65 fire protection door"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Garage connection door with T30 fire protection Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Garage connection door with T30 fire protection
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Secures the transition from the garage to the house
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 order-2 lg:order-1">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/garage-connection-door-with-t30-fire-protection/function-doors-12.avif"
                  alt="Garage connection door with T30 fire protection"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-600">
                The use of a fire protection door for the transition from the garage to the house is required by law due to the increased fire risk. Our garage connection door meets the requirements of the legislator with a tested T30 fire protection function and thus withstands up to 30 minutes in the event of a fire.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                In addition, the door is smoke-proof, sound and burglary-resistant and meets climate class 3 for high dimensional stability despite large temperature differences between the garage and living space. The door can be designed in a rotten version and, depending on the requirements, optionally with a shock-resistant Duradecor surface or brilliant real varnish surface.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                For a particularly harmonious interior design, the garage connection door made of wood is available on request to view our room doors.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Indoor door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Fire protection requirements, e.g. for the transition from the garage to the house</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">T30 fire protection function (withstands up to 30 minutes in a fire)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Smoke-proof design for added safety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Sound-resistant properties for quieter living spaces</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Burglary-resistant construction for enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Climate class 3 for high dimensional stability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional shock-resistant Duradecor surface</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available to match room doors for harmonious interior design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-purpose door MZ Thermo46 / MZ Thermo65 Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Multi-purpose door MZ Thermo46 / MZ Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The thermally separated outer door with best thermal insulation values
            </p>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The multi-purpose doors MZ Thermo 65 / MZ Thermo 46 not only impress with their extremely robust quality, but also by their high energy efficiency. The thermal separation of door leaf and frame reduces the risk of sweating in heated rooms. Compared to conventional multi-purpose doors, the MZ Thermo 65 offers about 49% better thermal insulation with a UD value of up to 0.86 W/(m²·K). The MZ Thermo 65 / MZ Thermo 46 is optionally available with or without glazing and in a variety of colours and with decograin surface.
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              The MZ Thermo 65 is also available with a panic lock (switching function B or through function D) in combination with an RC2 safety equipment. As a result, the door combines increased burglary protection with escape route requirements in accordance with DIN EN 179 and 1125. Optionally, a lowerable floor seal can be integrated into this combination.
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              The multi-purpose door MZ Thermo65 is also available in 2-footed version. This means that the door offers a larger passage width and is particularly suitable for use as an outside door for factory and hobby rooms. The flush transition from the aisle to the wings provides a full-surface and elegant door view without visible medium shoots. The lock is integrated in the door's wings.
            </p>
            
            <p className="mt-6 text-lg font-medium text-gray-900 text-center">
              Outside door for:
            </p>
            <ul className="mt-2 max-w-md mx-auto list-disc text-gray-600 pl-6">
              <li>Cellars</li>
              <li>Heated annex buildings</li>
              <li>Garages with access to the house</li>
              <li>Factory and hobby rooms</li>
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* MZ Thermo46 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">MZ Thermo46</h3>
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/doors/functional-doors/multi-purpose-door-mz-thermo46--mz-thermo65/function-doors-MZ-Thermo.avif"
                    alt="MZ Thermo46 multi-purpose door"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Thermal separation of door leaf and frame</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Reduced risk of condensation in heated rooms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available with or without glazing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available in various colors and decograin surface</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Extremely robust quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MZ Thermo65 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">MZ Thermo65</h3>
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/doors/functional-doors/multi-purpose-door-mz-thermo46--mz-thermo65/function-doors-MZ-Thermo-2.avif"
                    alt="MZ Thermo65 multi-purpose door"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">49% better thermal insulation (UD value of up to 0.86 W/(m²·K))</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available with panic lock and RC2 safety equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional lowerable floor seal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available in 2-footed version for larger passage width</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Flush transition from aisle to wings for elegant appearance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Soundproof door Thermo65 Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Soundproof door Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Outer door for arcades
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                Especially with doors for so-called arcades, sufficient sound insulation and good thermal insulation are important, since they enable external access, for example, to individual apartments in a residential building. The Thermo65 with soundproof class 3 and thermally separated door leaf and frame is ideally suited for this purpose. In combination with the motif 610S with frameless glazing, it ensures a modern design and natural light incidence.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Outside door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Multi-family houses</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Soundproof class 3 for excellent noise reduction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Thermally separated door leaf and frame</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Ideal for external access to apartments in residential buildings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available with motif 610S with frameless glazing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Modern design with natural light incidence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Perfect for multi-family houses and apartment buildings</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/doors/functional-doors/soundproof-door-thermo65/function-doors-9.avif"
                    alt="Soundproof door Thermo65"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/doors/functional-doors/soundproof-door-thermo65/function-doors-10.avif"
                    alt="Soundproof door Thermo65 with frameless glazing"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KSI 40-1 security door Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              KSI 40-1 security door
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The proven classic for more security
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                Basement entrances, outbuildings or garages are often still equipped with old doors, which can be cracked in seconds. Remember: if the basement door is only open, the whole house is also accessible. We therefore recommend the KSI 40-1 security door for these areas with standard safety equipment.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Outside door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Cellars</li>
                <li>Unheated annex buildings</li>
                <li>Detached garages</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Standard safety equipment for enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Ideal for basement entrances, outbuildings, and garages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Protection against break-ins</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Prevents unauthorized access to the entire house</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Durable and reliable security solution</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/ksi-40-1-security-door/function-doors-KSI40.avif"
                  alt="KSI 40-1 security door"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Functional door H3 OD Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Functional door H3 OD
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The functional door from the garage to the house
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 order-1">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/function-door-h3-od/function-doors-H3-OD.avif"
                  alt="Functional door H3 OD"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2">
              <p className="text-lg text-gray-600">
                The legislator prescribes a fire door for the transition to the house because of the fire risk in the garage. The H3 OD steel object door is the best choice for this sensitive area. On request, it additionally seals against possible flue gases, has a sound insulation effect with up to 42 dB and additionally protects your family from uninvited guests with optional RC2 or RC3 safety.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                The choice of an internal or external door depends on the installation situation (protected / unprotected) and on the requirements for performance characteristics.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Interior door/outdoor door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Requirements for fire protection, e.g. for the transfer from the garage to the house</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Fire protection for the transition from garage to house</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Seals against possible flue gases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Sound insulation up to 42 dB</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional RC2 or RC3 safety equipment for additional security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Suitable for both interior and exterior applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">High-quality steel object door construction</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fire protection door H8-5 Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fire protection door H8-5
            </h2>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 order-1 lg:order-1">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/fire-protection-door-h8-5/function-doors-H8-5.avif"
                  alt="Fire protection door H8-5"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-lg text-gray-600">
                The H8-5 fire protection door has been providing maximum safety for boiler cellars and oil tanks for decades. The door is the best example of the high Hörmann Competence in Fire Protection and you benefit from it.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Indoor door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Heating cellar</li>
                <li>Oil tank rooms</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Maximum safety for boiler cellars and oil tanks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Decades of proven performance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Hörmann's high competence in fire protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Reliable fire protection solution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Durable and long-lasting construction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Industry-leading safety standards</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ZK multi-purpose steel door Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ZK multi-purpose steel door
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Robust, dimensionally stable and hard-wearing
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                The ZK multi-purpose steel door is robust and dimensionally stable and therefore ideally suited as an indoor or outdoor door for basement, garages and outbuildings. In addition, the door impresses with good thermal insulation, quick installation and an attractive price-performance ratio.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                The double-walled, 40 mm thick door leaf with a sheet thickness of 0.8 mm ensures a high stability of the door. The 3-sided thick rebate version creates an elegant door view, which harmonises particularly well with barreled interior doors.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                The steel door leaf, which is fully glued together with a styrofoam insert, ensures good thermal insulation with a UD value of up to 1.6 W/(m²·K), below the limit value of the Building Energy Act (1.8 W/m²·K). For more light incidence, glazing in the door leaf is also possible on request.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Double-walled, 40 mm thick door leaf with 0.8 mm sheet thickness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Good thermal insulation with UD value of up to 1.6 W/(m²·K)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">3-sided thick rebate version for elegant appearance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Fully glued steel door leaf with styrofoam insert</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Comes with corner frame, 3-sided seal, wall anchor and floor holder</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Safety bolt on hinge side for enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional glazing for more light incidence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional lowerable floor seal for exterior use</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/zk-multi-purpose-steel-door/function-doors-6.avif"
                  alt="ZK multi-purpose steel door"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-purpose door MZ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Multi-purpose door MZ
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The stable and inexpensive inside and outside door
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0 order-1 lg:order-1">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/functional-doors/multi-purpose-door-mz/function-doors-MZ.avif"
                  alt="Multi-purpose door MZ"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-lg text-gray-600">
                This multi-purpose door, which has been proven for more than four decades, is stable, durable and weather-resistant, making it ideal for indoor and outdoor use. You will receive the MZ one and two-winged gliding and, if desired, also with glazing.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Indoor and outside door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Unheated annex buildings</li>
                <li>Device scales</li>
                <li>Storage rooms</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Proven reliability for over four decades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Stable and durable construction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Weather-resistant for indoor and outdoor use</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available in one and two-winged versions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Optional glazing available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Cost-effective solution</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior door ZK Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Interior door ZK
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The durable and inexpensive door
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                ZK-Türen has proven themselves for many years as robust doors for cellars and storage rooms in single-family and apartment houses as well as for the staircase to the undeveloped attic floor. The ZK door does not warp and with its high-quality surface is durable, stain-resistant and thus easy to clean. This is safe quality – at a low price.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                The ZK indoor door is also available as a 2-fly-drum version and provides an elegant door view with a flush transition from aisle and standing wing without visible centre. The locking is integrated in the shelf wings of the robust steel door.
              </p>
              
              <p className="mt-6 text-lg font-medium text-gray-900">
                Indoor door for:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-600">
                <li>Basements</li>
                <li>Storage rooms</li>
                <li>Rise to the undeveloped attic floor</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Proven durability for many years</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Robust construction that doesn't warp</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">High-quality, stain-resistant surface for easy cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Available in 2-wing version with flush transition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Elegant door view without visible center</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Integrated locking in the shelf wings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                    <span className="text-gray-700">Quality construction at an affordable price</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/doors/functional-doors/interior-door-zk/1.avif"
                    alt="Interior door ZK - Front view"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg shadow-xl overflow-hidden">
                    <Image
                      src="/images/doors/functional-doors/interior-door-zk/2.avif"
                      alt="Interior door ZK - Detail view"
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="rounded-lg shadow-xl overflow-hidden">
                    <Image
                      src="/images/doors/functional-doors/interior-door-zk/3.avif"
                      alt="Interior door ZK - Installation view"
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our products compare Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Products Compare
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              All functions at a glance
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-8">
              The classification of the individual doors shows at a glance which functions the respective door fulfills with which value – of best value (3 stars), Very good value (2 stars), Good value (1 star) to not suitable (no star).
            </p>
            
            <ComparisonTable 
              models={[
                {
                  name: "Safety door KSI Thermo46",
                  breakInInhibition: 2,
                  thermalInsulation: 2,
                  soundInsulation: 1,
                  fireProtection: 0
                },
                {
                  name: "Safety door KSI Thermo65",
                  breakInInhibition: 2,
                  thermalInsulation: 3,
                  soundInsulation: 1,
                  fireProtection: 0
                },
                {
                  name: "Fire protection door FS Thermo65",
                  breakInInhibition: 1,
                  thermalInsulation: 3,
                  soundInsulation: 2,
                  fireProtection: 3
                },
                {
                  name: "Garage connection door",
                  breakInInhibition: 2,
                  thermalInsulation: 2,
                  soundInsulation: 2,
                  fireProtection: 3
                },
                {
                  name: "Multi-purpose door MZ Thermo46",
                  breakInInhibition: 1,
                  thermalInsulation: 2,
                  soundInsulation: 1,
                  fireProtection: 0
                },
                {
                  name: "Multi-purpose door MZ Thermo65",
                  breakInInhibition: 1,
                  thermalInsulation: 3,
                  soundInsulation: 1,
                  fireProtection: 0
                },
                {
                  name: "Soundproof door Thermo65",
                  breakInInhibition: 1,
                  thermalInsulation: 3,
                  soundInsulation: 3,
                  fireProtection: 0
                },
                {
                  name: "KSI 40-1 security door",
                  breakInInhibition: 2,
                  thermalInsulation: 1,
                  soundInsulation: 1,
                  fireProtection: 0
                },
                {
                  name: "Function door H3 OD",
                  breakInInhibition: 2,
                  thermalInsulation: 2,
                  soundInsulation: 2,
                  fireProtection: 3
                },
                {
                  name: "Fire protection door H8-5",
                  breakInInhibition: 1,
                  thermalInsulation: 1,
                  soundInsulation: 2,
                  fireProtection: 3
                },
                {
                  name: "ZK multi-purpose steel door",
                  breakInInhibition: 1,
                  thermalInsulation: 2,
                  soundInsulation: 0,
                  fireProtection: 0
                },
                {
                  name: "Multi-purpose door MZ",
                  breakInInhibition: 1,
                  thermalInsulation: 1,
                  soundInsulation: 2,
                  fireProtection: 0
                },
                {
                  name: "Interior door ZK",
                  breakInInhibition: 0,
                  thermalInsulation: 0,
                  soundInsulation: 0,
                  fireProtection: 0
                }
              ]}
            />
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
            <span className="block">Ready to enhance your home's safety?</span>
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

