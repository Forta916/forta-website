import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Rolling Wing Gates | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann rolling wing gates. Optimal use of garage interior space, customizable door leaf division, and excellent thermal insulation.',
};

export default function RollingWingGatePage() {
  // Sample data for hinged door features
  // Keeping this data for future reference - currently unused
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doorFeatures = [
    {
      title: "Customizable Door Leaf Division",
      description: "The division of the door leaves and the position of the fixed and moving leaves can be individually designed according to your wishes."
    },
    {
      title: "Stable in All Weather Conditions",
      description: "Door stops on the ground provide additional security to ensure the opened door remains stable even in bad weather conditions."
    },
    {
      title: "Enhanced Security",
      description: "The rolling wing gate is equipped with a profile cylinder lock for protection against burglars, with a standard 3-point locking on the closing and curve side, plus additional security bolts."
    },
    {
      title: "Excellent Thermal Insulation",
      description: "The door filling made of 42 mm thick slats provides good thermal insulation and insulation in the garage."
    },
    {
      title: "Versatile Design Options",
      description: "Available in various designs and in all Hörmann decors and colors, allowing you to match your home's aesthetic perfectly."
    },
    {
      title: "Motorized Operation Option",
      description: "Can be operated with a drive for added convenience and ease of use."
    }
  ];

  // Sample data for practical benefits
  // Keeping this data for future reference - currently unused
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const practicalBenefits = [
    {
      title: "Partial Opening",
      description: "For pedestrian access, rolling wing gates can be opened quickly and easily only partially, allowing you to get into your garage faster to retrieve items like bicycles or tools."
    },
    {
      title: "Optimal Space Utilization",
      description: "Unlike up-and-over or sectional doors, rolling wing gates don't require ceiling space, making them ideal for garages with low headroom or ceiling-mounted storage."
    },
    {
      title: "Ideal for Renovations",
      description: "The DFT 42 rolling wing gate is often chosen for renovations of older, rather smaller garages, providing a practical solution for special installation situations."
    },
    {
      title: "No Swing-Out Space Required",
      description: "Unlike traditional up-and-over doors, rolling wing gates don't swing out into the driveway, making them perfect for short driveways or tight spaces."
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Rolling Wing Gate</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            The ideal solution for special installation situations, providing optimal use of your garage's interior space.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Practical Solution for Special Requirements
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann rolling wing gates (DFT 42) are the ideal solution for special installation situations. Unlike sectional, roller, or up-and-over doors, this door type opens outward, allowing you to make full use of the space under the garage ceiling for storage or in cases where the garage construction doesn't allow for other door types.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                With customizable door leaf division, high-quality materials, and excellent thermal insulation properties, Hörmann rolling wing gates combine practicality with comfort and security.
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
                  src="/images/hinged-garage-doors.jpg"
                  alt="Hörmann rolling wing gate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rolling Wing Gate Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Rolling wing gate
              </h2>
              <p className="mt-3 text-xl text-gray-600">
                For optimal use of the garage interior
              </p>
              <div className="mt-6 prose prose-blue prose-lg text-gray-600">
                <p>
                  When <strong>renovating</strong> older, rather smaller garages, the revolving door DFT 42 is often chosen. With the revolving door, the <strong>entire garage interior</strong> can <strong>be used optimally</strong>, as the gate opens to the outside. With a <strong>2-leaf revolving door</strong>, both or even one door swing can be opened as required. This <strong>allows comfortable access for people to the garage</strong> and the gate is also spared in the long term, since, for example, the entire gate does not have to be opened and closed when the bicycle is removed from the garage.
                </p>
                <p>
                  The <strong>division of the door wing</strong> and the position of the stand and gait wing <strong>can be individually designed according to your wishes</strong>. To ensure that the open gate remains stable even in bad weather conditions, goal fixers on the ground additionally secure the gate. To protect the gate from burglars, the revolving door is equipped with a profile cylinder lock. The door filling made of 42 mm thick slats ensure <strong>good thermal insulation</strong> and insulation in the garage. The revolving door is available in various motifs as well as in all Hörmann decors and colours and can also be operated with drive.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <video
                  src="/images/garage-doors/hinged/rolling-wing-gate/1.mp4"
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

      {/* Good Reasons Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Good reasons for Hörmann swing goals
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Individual, stable and safe
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600">
            <p>
              The Hörmann swing goals offer numerous advantages that make them the perfect choice for special installation situations. With customizable door leaf division, high-quality materials, and excellent sealing properties, these doors combine practicality with comfort and security.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Reason 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/hinged/good-reasons-for-hrmann-swing-goals/1.avif"
                  alt="Flight sharing according to your wishes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Flight sharing according to your wishes</h3>
                <p className="mt-4 text-gray-600">
                  Design your revolving door according to your requirements. The gate wings are both symmetrically and asymmetrically divided. The symmetrical division with equally wide door wings offers a harmonious door view. With the asymmetric division, you get the wing in a width of 870 mm, which allows a simple passage into the garage.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/hinged/good-reasons-for-hrmann-swing-goals/2.avif"
                  alt="60 mm thick aluminium frame profiles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">60 mm thick aluminium frame profiles</h3>
                <p className="mt-4 text-gray-600">
                  The frame profile seals reliably through a 3-sided double stop seal and double lip seal in the threshold area. The door filling made of 42 mm thick slats is available in the motifs S-Sicke, M-Sicke, L-Sicke and D-Sicke as well as in all colours and decors.
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/hinged/good-reasons-for-hrmann-swing-goals/3.avif"
                  alt="Safe locking system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Safe locking system</h3>
                <p className="mt-4 text-gray-600">
                  For a reliable closure of the door, the aisle wing is equipped as standard with an aluminium blackener set and a lock with a profile cylinder. The swivel is securely locked over a goal blade. To fix the wings when open, the gear and standing wings can be equipped with additional goal locking on the ground.
                </p>
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
              Hörmann rolling wing gates offer numerous advantages for special installation situations.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customizable Door Leaf Division</h3>
                <p className="mt-2 text-base text-gray-600">
                  The division of the door leaves and the position of the fixed and moving leaves can be individually designed according to your wishes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Stable in All Weather Conditions</h3>
                <p className="mt-2 text-base text-gray-600">
                  Door stops on the ground provide additional security to ensure the opened door remains stable even in bad weather conditions.
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
                  The rolling wing gate is equipped with a profile cylinder lock for protection against burglars, with a standard 3-point locking on the closing and curve side, plus additional security bolts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Excellent Thermal Insulation</h3>
                <p className="mt-2 text-base text-gray-600">
                  The door filling made of 42 mm thick slats provides good thermal insulation and insulation in the garage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Versatile Design Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Available in various designs and in all Hörmann decors and colors, allowing you to match your home's aesthetic perfectly.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Motorized Operation Option</h3>
                <p className="mt-2 text-base text-gray-600">
                  Can be operated with a drive for added convenience and ease of use.
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
            <span className="block">Ready to find your perfect rolling wing gate?</span>
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
