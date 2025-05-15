import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Roller Garage Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann roller garage doors. Space-saving design, excellent security features, and a wide range of colors and finishes.',
};

export default function RollerGarageDoorsPage() {
  // Sample data for roller garage door variants
  // Keeping this data for future reference - currently unused
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doorVariants = [
    {
      title: "RollMatic",
      description: "The classic roller garage door with proven technology and reliable function.",
      features: [
        "Space-saving design",
        "Integrated operator",
        "Smooth and quiet operation",
        "Wide range of colors"
      ]
    },
    {
      title: "RollMatic T",
      description: "The cost-effective alternative with tension spring technology for smaller garages.",
      features: [
        "Economical solution",
        "Easy installation",
        "Low maintenance",
        "Reliable operation"
      ]
    }
  ];

  // Sample data for color options
  // Keeping this data for future reference - currently unused
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colorOptions = [
    {
      title: "Standard Colors",
      description: "Choose from 11 equally-priced colors to match your home's exterior.",
      colors: [
        "Traffic white (RAL 9016)",
        "Ruby red (RAL 3003)",
        "Gentian blue (RAL 5010)",
        "Moss green (RAL 6005)",
        "Anthracite grey (RAL 7016)",
        "Jet black (RAL 9005)",
        "White aluminum (RAL 9006)",
        "Terra brown (RAL 8028)",
        "Light grey (RAL 7035)",
        "Light ivory (RAL 1015)",
        "Steel blue (RAL 5011)"
      ]
    },
    {
      title: "Decograin Surfaces",
      description: "Two Decograin surfaces in Golden Oak and Rosewood timber designs with a natural timber look.",
      colors: [
        "Golden Oak",
        "Rosewood"
      ]
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Roller Garage Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Compact doors that roll up vertically, requiring minimal headroom and providing maximum space in the garage.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Space-Saving Roller Garage Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann roller garage doors are designed to save space in your garage. The door curtain compactly rolls up into the box above the opening, allowing you to use the ceiling area for storage or lighting.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                With their space-saving design, roller garage doors are ideal for garages with limited headroom or where the ceiling space needs to remain free. The integrated operator ensures convenient and secure operation.
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
                  src="/images/garage-roller-doors.jpg"
                  alt="Hörmann roller garage door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your_benefits_at_a_glance Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your benefits at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Garage rolling gates by Hörmann
            </p>
          </div>

          <div className="mt-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">The RollMatic Rollrollador</h3>
                <p className="mt-3 text-lg text-gray-600">
                  is full of innovative details that have only one goal: to offer you safety and comfort. From 
                  particularly simple assembly to advanced safety patents, this concept runs like a red thread 
                  through all aspects of the product. Our compact garage roller rattor RollMatic is the best choice 
                  if the ceiling area is to stay free in the garage and there is no parking for a door leaf on the side.
                </p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Innovative surface protection</h4>
                      <p className="mt-2 text-base text-gray-600">
                        The DuraBelt winding unit is recommended to protect against scratch marks that can be caused by dirt when opening the door. 
                        This significantly reduces the risk of scratches and is not only available for all new RollMatic and RollMatic T gates, 
                        but can also be retrofitted to older RollMatic gates. Visually, the DuraBelt is not visible from the outside.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Reliable weight compensation</h4>
                      <p className="mt-2 text-base text-gray-600">
                        The patented spring tension technology with spring-in-feather system and the transparent protective cover, 
                        which is only available from Hörmann, prevent a broken spring from being scraped away and people injured.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Standard drive</h4>
                      <p className="mt-2 text-base text-gray-600">
                        The RollMatic Tore are particularly quiet thanks to the standard drive with soft start and soft stop and protect the door. 
                        In addition, operation with the smartphone via Bluetooth and integration into a smart home system is possible.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Harmonious overall view</h4>
                      <p className="mt-2 text-base text-gray-600">
                        Gate hanging, guide rail, blend and wrap shaft covering are available in the same colour on request.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Wide range of colours</h4>
                      <p className="mt-2 text-base text-gray-600">
                        The RollMatic is available in 16 standard colours and in Golden Oak or Rosewood as a decograin or decopaint surface.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Request Now
                  </Button>
                </div>
              </div>
              
              <div className="mt-10 lg:mt-0 relative">
                <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                  <video
                    src="/images/garage-doors/roller/yourbenefitsataglance/1.mp4"
                    className="w-full h-full object-cover"
                    controls
                    muted
                    autoPlay
                    loop
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative">
                  <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                    <Image
                      src="/images/garage-doors/roller/yourbenefitsataglance/2.jpg"
                      alt="Hörmann RollMatic T garage door"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Garage roller ratin RollMatic T</h3>
                  <p className="mt-3 text-lg text-gray-600">
                    The RollMatic T enables particularly fast installation and is characterised by a space-saving design and safe door operation.
                  </p>
                  <p className="mt-3 text-lg text-gray-600">
                    The pre-drilled guide rails and the pre-assembled winding shaft incl. Cladding allows a <span className="font-semibold">particularly fast and easy door mounting</span>. Narrow guide rails and a compact tube motor are characterised by the <span className="font-semibold">space-saving design</span> of the RollMatic T. The RollMatic T is <span className="font-semibold">suitable</span> for <span className="font-semibold">mounting as an indoor and outer rolling door</span>. The controller is installed in a new, elegant housing with integrated LED lighting and can be controlled by <span className="font-semibold">BiSecur radio system</span> as <span className="font-semibold">standard</span>. The standard fishing device and closing edge protection in the floor profile ensure <span className="font-semibold">particularly safe door operation</span>. An external emergency release is optionally available. The RollMatic T is available in many and can be ordered up to a size of 5000 x 3100 mm. For more information, please see this <a href="#" className="text-blue-600 hover:underline">video</a>.
                  </p>
                  <p className="mt-3 text-lg text-gray-600">
                    The RollMatic T can optionally be equipped with the <span className="font-semibold">DuraBelt winding unit</span> to prevent scratches caused by external and protective particles, which settle for everyday use on the surface of the torous lamellas. This is not visible from the outside and reduces surface wear. Learn more in our <a href="#" className="text-blue-600 hover:underline">video</a>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ceiling Running Gate RollMatic OD</h3>
                  <p className="mt-3 text-lg text-gray-600">
                    The space-saving RollMatic OD ceiling runtor is <span className="font-semibold">ideal for modernisation</span>. The narrow construction of the ceiling running door 
                    allows installation even in <span className="font-semibold">very confined spaces</span> in the garage. Due to the compact design, the door requires only a <span className="font-semibold">lintel of 60 mm</span>.
                  </p>
                  <p className="mt-3 text-lg text-gray-600">
                    The ProMatic can be mounted either on the right or left horizontal guide rail, no additional fall requirement is required.
                  </p>
                  <p className="mt-3 text-lg text-gray-600">
                    With the optionally available <span className="font-semibold">SupraMatic drive</span>, your ceiling runlet opens faster and you can drive directly from the street to your garage.
                  </p>
                  <p className="mt-3 text-lg text-gray-600">
                    And on <span className="font-semibold">comfort functions</span> such as the additional opening height, e.g. for ventilating the garage, and the drive lighting, 
                    which can be switched off separately via your hand transmitter, will no longer want to do without.
                  </p>
                </div>
                
                <div className="mt-6 lg:mt-0 relative">
                  <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                    <video
                      src="/images/garage-doors/roller/yourbenefitsataglance/3.mp4"
                      className="w-full h-full object-cover"
                      controls
                      muted
                      autoPlay
                      loop
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Picture Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Picture gallery
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The right roller shutter gate for every home architecture
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Gallery Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/roller/picturegallery/garage-roller-door-and-door-in-traffic-white-ral-9016.avif"
                  alt="Garage roller door and door in traffic white RAL 9016"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-800 font-medium">Garage roller door and door in traffic white RAL 9016</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/roller/picturegallery/garage-roller-ratis-rollmatic-in-traffic-white-ral-9016.avif"
                  alt="Garage roller ratis RollMatic in traffic white RAL 9016"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-800 font-medium">Garage roller ratis RollMatic in traffic white RAL 9016</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/roller/picturegallery/ceiling-running-door-rollmatic-od-in-anthracite-grey-ral-7016.avif"
                  alt="Ceiling Running Door RollMatic OD in anthracite grey RAL 7016"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-800 font-medium">Ceiling Running Door RollMatic OD in anthracite grey RAL 7016</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/roller/picturegallery/outdoor-gate-in-light-grey-ral-7035.avif"
                  alt="Outdoor gate in light grey RAL 7035"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-800 font-medium">Outdoor gate in light grey RAL 7035</p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/roller/picturegallery/garage-roller-ratin-in-decograin-golden-oak.avif"
                  alt="Garage roller ratin in Decograin Golden Oak"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-800 font-medium">Garage roller ratin in Decograin Golden Oak</p>
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
              Hörmann roller garage doors offer numerous advantages that make them an excellent choice for many homeowners.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Space-Saving Design</h3>
                <p className="mt-2 text-base text-gray-600">
                  The door curtain rolls up compactly into a box above the garage opening, leaving the ceiling area free for storage or lighting.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Integrated Operator</h3>
                <p className="mt-2 text-base text-gray-600">
                  The operator is perfectly matched to the door and features automatic door locking and a soft start and stop function.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Enhanced Security</h3>
                <p className="mt-2 text-base text-gray-600">
                  The mechanical anti-lift kit effectively prevents forced opening of the door, providing excellent protection against break-ins.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Wind and Weather Resistant</h3>
                <p className="mt-2 text-base text-gray-600">
                  The aluminum profiles with polyurethane foam core provide good thermal insulation and operate quietly, even in strong winds.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Design Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of colors and surface finishes to perfectly match your home's architecture and personal style preferences.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Low Maintenance</h3>
                <p className="mt-2 text-base text-gray-600">
                  The door curtain is made of corrosion-resistant aluminum profiles with polyurethane foam core, requiring minimal maintenance for long-lasting performance.
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
            <span className="block">Ready to find your perfect roller garage door?</span>
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
