import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Aluminum-frame gate | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann aluminum-frame gate. Maximum transparency, modern design, and excellent durability for contemporary homes.',
};

export default function AluminumFrameGatePage() {
  // Sample data for aluminum-frame gate variants
  const gateVariants = [
    {
      title: "ART 42",
      description: "The standard aluminum-frame gate with 42 mm profiles provides good stability and durability for everyday use.",
      features: [
        "42 mm thick aluminum profiles",
        "Standard glazing: synthetic double panes, clear",
        "Good stability and durability",
        "Available with various infill options"
      ]
    },
    {
      title: "ART 42 Thermo",
      description: "Featuring thermally insulated profiles, this gate provides improved thermal insulation for temperature-controlled garages.",
      features: [
        "Thermally insulated 42 mm aluminum profiles",
        "Improved thermal insulation with double glazing",
        "Reduced condensation on the inside",
        "Ideal for attached garages"
      ]
    },
    {
      title: "ART 42 Vitraplan",
      description: "The exclusive gate variant with flush-fitting glazing in gray or brown tinted glass creates a striking, elegant appearance.",
      features: [
        "Surface-mounted, flush glazing",
        "Striking, elegant appearance",
        "Available in gray or brown tinted glass",
        "Perfect for modern architectural designs"
      ]
    }
  ];

  // Sample data for infill options
  const infillOptions = [
    {
      title: "Double Pane, Clear",
      description: "Standard glazing with excellent visibility and light transmission."
    },
    {
      title: "Double Pane, Crystal Structure",
      description: "Textured glazing that provides privacy while still allowing light to enter."
    },
    {
      title: "Double Pane, Tinted",
      description: "Available in gray, brown, or white tints to complement your home's exterior."
    },
    {
      title: "Perforated Stainless Steel",
      description: "Modern industrial look with ventilation properties, ideal for parking garages."
    },
    {
      title: "Expanded Mesh",
      description: "Robust metal mesh infill providing security and ventilation."
    },
    {
      title: "Synthetic Double Pane, Scratch-Resistant",
      description: "Duratec plastic glazing with high scratch resistance for lasting transparency."
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Aluminum-frame gate</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Elegant gates with aluminum frames and large-area glazing for maximum transparency and a modern appearance.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Modern Transparency & Elegance
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann aluminum-frame gate combines elegant design with maximum transparency. The combination of aluminum frames and large-area glazing creates a harmonious gate appearance and allows more light to enter your garage.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                This gate is particularly suitable for modern architectural styles and can be customized with various infill options to match your home's design. The glazing fields feature a scratch-resistant Duratec coating, ensuring lasting transparency.
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
                  src="/images/aluminum-frame-garage-gates.jpg"
                  alt="Hörmann aluminum-frame gate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aluminium frame gate Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Aluminium frame gate
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Glazed doors for maximum transparency and an elegant design
              </p>
              <div className="mt-6 prose prose-blue prose-lg text-gray-600">
                <p>
                  The aluminium frame gate is the right choice for builders or modernizers, who also attach great importance to a generous and elegant design at the garage door. Aluminium frame doors are a good alternative to closed garage sectional doors and are often used where more light in the garage or better ventilation in parking boxes of collecting garages is required.
                </p>
                <p>
                  In this sectional door can be selected between three different versions. The combination of aluminium frame and large glazing ensures a harmonious door view and more light transmission in the garage for the ART 42 and ART 42 Thermo aluminium frame gates. The glazing fields are very robust thanks to the particularly scratch-resistant Duratec coating, which is only available from Hörmann.
                </p>
                <p>
                  The ART 42 Vitraplan aluminium frame gate is ideally suited for a modern and high-quality residential architecture thanks to the exciting mix of viewing and mirroring. With the applied, flush-mounted Duratec glazing in grey and concealed, colour-coordinated frame profiles in deep black RAL 9005, an exclusive door view is created, which visually convinces.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <video
                  src="/images/garage-doors/aluminum-frame/aluminium-frame-gate/1.mp4"
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

      {/* Profile Versions Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Profile versions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              For good to very good thermal insulation
            </p>
          </div>

          <div className="mt-12">
            <div className="relative">
              <div className="relative w-full max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/garage-doors/aluminum-frame/profile-versions/garage-door-aluminium-profil.avif"
                  alt="Hörmann aluminum frame gate profile versions"
                  width={800}
                  height={400}
                  className="w-full mx-auto"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* ART 42 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">ART 42</h3>
                <p className="mt-4 text-gray-600">
                  Standard aluminum frame with normal profile offering good thermal insulation. Ideal for standalone garages and basic applications where standard insulation is sufficient.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">42 mm thick aluminum profiles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Good thermal insulation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Various infill options available</span>
                  </li>
                </ul>
              </div>

              {/* ART 42 Thermo */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">ART 42 Thermo</h3>
                <p className="mt-4 text-gray-600">
                  Enhanced aluminum frame with thermally separated profile for particularly good thermal insulation. Perfect for attached garages or climate-controlled spaces.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Thermally separated 42 mm profiles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Excellent thermal insulation values</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reduced condensation on the inside</span>
                  </li>
                </ul>
              </div>

              {/* ART 42 Vitraplan */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">ART 42 Vitraplan</h3>
                <p className="mt-4 text-gray-600">
                  Premium aluminum frame with preceding, flush-mounted glazing for a striking, elegant appearance. Ideal for modern architectural designs and premium homes.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flush-mounted glazing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exciting mix of viewing and mirroring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exclusive door view with concealed frame profiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filling Variants Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Filling variants
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              From clearly to tinted to breathable
            </p>
          </div>

          <div className="mt-12">
            {/* Description */}
            <div className="max-w-4xl mx-auto text-lg text-gray-600 mb-12 text-center">
              <p>
                When glazing the Hörmann aluminum frame doors, you have the choice between different filling variants.
              </p>
            </div>

            {/* First Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/1.avif"
                    alt="Polycarbonate double disc, clear"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Polycarbonate double disc, clear</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/2.avif"
                    alt="Plastic double disc, crystal structure"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Plastic double disc, crystal structure</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/3.avif"
                    alt="Bridge double plate"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Bridge double plate</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/4.avif"
                    alt="Plastic double disc, white tinted (opal)"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Plastic double disc, white tinted (opal)</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/5.avif"
                    alt="Plastic double disc, brown tinted"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Plastic double disc, brown tinted</p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/6.avif"
                    alt="Plastic double disc, grey tinted"
                    width={100}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Plastic double disc, grey tinted</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/7.avif"
                    alt="PU sandwich filling, smooth"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">PU sandwich filling, smooth</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/8.avif"
                    alt="PU sandwich filling, stucco"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">PU sandwich filling, stucco</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/9.avif"
                    alt="Wave grid"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Wave grid</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/10.avif"
                    alt="Perforated stainless steel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Perforated stainless steel</p>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/11.avif"
                    alt="Stretch grille made of stainless steel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Stretch grille made of stainless steel</p>
                </div>
              </div>
              
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/aluminum-frame/filling-variants/12.avif"
                    alt="Welded grilles"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">Welded grilles</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                All filling variants are available for all aluminum-frame gate models. The choice of filling can affect the gate's appearance, light transmission, privacy level, and ventilation properties. Our experts can help you select the best option for your specific needs.
              </p>
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
              Hörmann aluminum-frame gate offers numerous advantages for modern homes and special applications.
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">Scratch-Resistant Glazing</h3>
                <p className="mt-2 text-base text-gray-600">
                  The Duratec plastic glazing is exceptionally scratch-resistant and maintains its clear view even after many cleanings.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customizable Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from various frame profiles, glazing types, and infill options to create a gate that perfectly matches your requirements.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Thermal Insulation Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  The ART 42 Thermo variant features thermally insulated profiles for improved energy efficiency in temperature-controlled garages.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Durable Construction</h3>
                <p className="mt-2 text-base text-gray-600">
                  High-quality aluminum profiles and robust glazing ensure long-lasting performance and minimal maintenance requirements.
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
            <span className="block">Ready to find your perfect aluminum-frame gate?</span>
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
