﻿import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Loft Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann loft doors in steel and glass. Create light-flooded spaces with modern industrial style for your California home.',
};

export default function LoftDoorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Loft Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Modern steel and glass doors for light-flooded spaces.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Loft Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Discover the perfect combination of elegance and functionality with Hörmann loft doors in steel and glass. Our loft doors create a harmonious ambience with plenty of light and open designed spaces, adding a tasteful accent to your interior.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                The delicate and expressive design of our loft doors provides a modern look that can be combined with different interior styles. Thanks to the combination of glass and steel, rooms with loft doors by Hörmann can be opened and separated at the same time, ensuring natural light and maximum transparency.
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
                  src="/images/doors/loft-doors/loft-doors-in-steel-and-glass/1.avif"
                  alt="Hörmann loft door in steel and glass"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Section: Loft Doors in Steel and Glass */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/loft-doors-in-steel-and-glass/2.avif"
                alt="Hörmann loft door details"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Loft Doors in Steel and Glass
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                For light-flooded rooms
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our loft doors can be individually designed and adapt to your personal wishes. This makes every room a highlight and in combination with your furnishings a modern and timeless look in trendy industrial style.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Loft doors are a real eye-catcher and ensure a special feeling of space with their minimalist elegance – tailored to current interior trends. They are used in new construction and renovation projects in apartments as well as in single and two-family houses.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                The steel loft doors are a classic swing door or as a space-saving sliding door. Both are also convincing in combination with a harmonious overall view, since the sprouting layout is optimally coordinated with each other. In addition, stylish pivot doors are also available without door frames or fixed glazing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: 2 TEXT - 2 IMAGE */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Transparent Spaces
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Thanks to the combination of glass and steel, rooms with loft doors by Hörmann can be opened and separated at the same time. They also ensure natural light and maximum transparency. The clean lines of the doors give structure and allow a harmonious layout of your living spaces:
              </p>
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">Separate large-scale living areas meaningfully from each other and at the same time maintain an unobstructed view of adjacent spaces</span>
                </li>
                <li>
                  <span className="text-gray-700">Create a harmonious transition between living area and kitchen</span>
                </li>
                <li>
                  <span className="text-gray-700">Ensure natural light and an inviting reception between the hallway and the living room</span>
                </li>
                <li>
                  <span className="text-gray-700">Give your entrance area a special style with a loft door as a modern vestibule element</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/loft-doors-in-steel-and-glass/2.avif"
                alt="Hörmann loft door creating transparent spaces"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Your Benefits at a Glance Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Benefits at a Glance
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Discover the advantages of Hörmann loft doors
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className="text-lg text-gray-600">
                Would you like to create your home with modern openness and minimalist elegance? Are separate rooms and simultaneous transparency and incidence of light important to you? Then put a real highlight with a loft door from Hörmann.
              </p>
              
              <ul className="mt-8 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">Modern design in trendy industrial style</span>
                </li>
                <li>
                  <span className="text-gray-700">Maximum transparency and light incidence</span>
                </li>
                <li>
                  <span className="text-gray-700">Clear room layout</span>
                </li>
                <li>
                  <span className="text-gray-700">Design according to individual wishes</span>
                </li>
                <li>
                  <span className="text-gray-700">Large glazing with high-quality steel profiles</span>
                </li>
                <li>
                  <span className="text-gray-700">Also tinted or mirror glazing possible</span>
                </li>
                <li>
                  <span className="text-gray-700">Extra narrow glazing strips</span>
                </li>
                <li>
                  <span className="text-gray-700">Flexible elements and sizes up to 5 x 4 meters</span>
                </li>
                <li>
                  <span className="text-gray-700">Available as rotary wings, sliding, pivot door or fixed glazing</span>
                </li>
                <li>
                  <span className="text-gray-700">Side parts and skylights can be flexibly combined</span>
                </li>
                <li>
                  <span className="text-gray-700">Available in many colours</span>
                </li>
                <li>
                  <span className="text-gray-700">Large selection of pushers and handle bars</span>
                </li>
                <li>
                  <span className="text-gray-700">Adapted to the Hörmann black.edition for room doors and front doors</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/loft-doors/your-benefits-at-a-glance/loftdoor-27.avif"
                  alt="Hörmann loft door benefits"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual design for loft doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Individual design for your loft door
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Make sure you have a real eye-catcher in your home
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600">
            <p>
              Hörmann loft doors are the perfect harmony of glass and steel. This connection ensures the modern and elegant design. The large-area glazing of the doors is made of 6 mm laminated safety glass, which can be designed as a clear glass as a matt glass on request. Tinted glazing and mirror glazing are also possible – for example, to create more privacy.
            </p>
            <p className="mt-4">
              With their narrow profile view of only 76 mm for doors or 20 mm, the high-quality create a clear design in modern industrial style for fixed glazing. In the case of glass mesh, you can choose between angle glass holding strips or even more filigree glare strips Slim.
            </p>
            <p className="mt-4">
              The modern loft doors can also be designed with an asymmetric rung layout in horizontal and vertical orientation, thus offering individual design options.
            </p>
          </div>

          {/* Glass bars Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Glass bars</h3>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                Choose the perfect style for your interior
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Loft doors with angle glass storage */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/loft-doors-with-angle-glass-storage.avif"
                    alt="Loft doors with angle glass storage"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Angle glass storage</h3>
                  <p className="mt-4 text-gray-600">
                    You want to set a more striking accent? Then loft doors with angle glass holding strips are the best choice. Thanks to their authentic design with visible bolting, they bring out the industrial style concisely.
                  </p>
                </div>
              </div>

              {/* Loft doors with glass strips Slim */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/loft-doors-with-glass-strips-slim.avif"
                    alt="Loft doors with glass strips Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Glass strips Slim</h3>
                  <p className="mt-4 text-gray-600">
                    If you attach great importance to an elegant and particularly narrow profile view, glare shelf strips Slim are the right choice. With a viewing width of only 15 mm, they give your loft door a particularly elegant and delicate door design without visible screw connections.
                  </p>
                </div>
              </div>

              {/* Loft doors with different color of door frames and glass strips */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/loft-doors-with-different-color-of-door-frames-and-glass-strips.avif"
                    alt="Loft doors with different color of door frames and glass strips"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Different color frames and strips</h3>
                  <p className="mt-4 text-gray-600">
                    For an exciting contrast or to adapt to your facility, you can also design door frames and glazing strips in two colours. Choose the color of the door frame and those of the glass holding strips individually and let your loft door become a real unique piece.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Colours</h3>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                Almost unlimited choices
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
              <p>
                Our loft doors can be designed individually and according to your personal wishes. In the standard, the doors are made in deep black RAL 9005. In addition, you also have the option of choosing from 5 further preferred colours.
              </p>
              <p className="mt-4">
                Your wish colour is not yet there? No problem! You also receive the loft doors in RAL of your choice, NCS special colours as well as textured and pearl effect colours and create your very own style.
              </p>
            </div>

            {/* Standard Color */}
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/1.avif"
                    alt="RAL 9005 Low black matt (standard color)"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-base font-semibold text-gray-900">RAL 9005 Low black matt (standard color)</h3>
                </div>
              </div>
            </div>

            {/* 5 Preferential Colors Heading */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">5 preferential colours</h3>
            </div>

            {/* Preferential Colors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/2.avif"
                    alt="RAL 9016 Transport white"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9016 Transport white</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/3.avif"
                    alt="CH 703 Anthracite metallic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">CH 703 Anthracite metallic</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/4.avif"
                    alt="RAL 7016 anthracite grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7016 anthracite grey</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/5.avif"
                    alt="RAL 9006 white aluminium"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9006 white aluminium</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/6.avif"
                    alt="RAL 9007 Grey aluminium"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9007 Grey aluminium</p>
                </div>
              </div>
            </div>

            {/* RAL by election */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">RAL of your choice</h3>
              <div className="max-w-md mx-auto">
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/loft-doors/individually-design-loft-doors/7.avif"
                    alt="RAL of your choice, NCS special colours, textured and pearl effect colours"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL of your choice, NCS special colours, textured and pearl effect colours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loft doors made to measure Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Loft doors made to measure
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The right door for every installation situation
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              Loft doors from Hörmann are available in different sizes, tailored to your individual wishes and room requirements. Each loft door is manufactured especially for you. One element can be up to 5000 mm wide and 4000 mm high, so that the doors are also suitable for very large openings and passageways. But smaller elements are also available and can be combined flexibly and shapely.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              The exclusive frameless pivot doors set new standards in minimalist door design. This particularly elegant solution is ideal for wide passageways where double-fold doors or doors with side panels are normally used. The door leafs are attached to hinges in the floor as well as to the ceiling or to the lintel and swing on a vertical axis in both directions. This innovative construction allows for maximum transparency and light-flooded spaces, while the filigree glass holding strips set an elegant accent.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              You can choose between 1- and 2-wing swing doors, pivot doors and glass partitions and equip them according to your wishes with additional side panels and skylights.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              For maximum living comfort, our high-quality loft doors are equipped with numerous exclusive details. For optimum door function and an elegant door view, our swing leaf doors can be individually adjusted thanks to the standard three-dimensionally adjustable roller tapes – in door colour, black or optionally in high-quality stainless steel versions.
            </p>
          </div>

          {/* Premium Features */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Premium Features</h3>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                Exclusive details for maximum comfort and functionality
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Integrated door closer */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/loft-doors-made-to-measure/integrated-door-closer.avif"
                    alt="Integrated door closer"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Integrated door closer</h3>
                  <p className="mt-4 text-gray-600">
                    The optional door closer for swing leaf doors closes the door leaf gently and is invisibly integrated in the door profile, maintaining the elegant appearance of your loft door.
                  </p>
                </div>
              </div>

              {/* 3-Dimensional adjustable straps */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/loft-doors-made-to-measure/3-dimensional-adjustable-straps.avif"
                    alt="3-Dimensional adjustable straps"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">3-Dimensional adjustable straps</h3>
                  <p className="mt-4 text-gray-600">
                    Our swing leaf doors can be individually adjusted thanks to the standard three-dimensionally adjustable roller tapes – available in door colour, black or optionally in high-quality stainless steel versions.
                  </p>
                </div>
              </div>

              {/* Absenable floor seal */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src="/images/doors/loft-doors/loft-doors-made-to-measure/absenable-floor-seal.avif"
                    alt="Absenable floor seal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Absenable floor seal</h3>
                  <p className="mt-4 text-gray-600">
                    An optionally available, lowerable floor seal and an 8 mm clear glass glazing made of laminated safety glass (VSG) ensure improved sound insulation of up to 30 dB, creating a quieter and more comfortable living environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swing doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Swing doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              The classic variant for a stylish feeling of space
            </p>
          </div>

          {/* Overview image with text */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <p className="text-lg text-gray-600">
                Steel loft doors as swing doors are available as 1- and 2-wing versions or as glass partitions and can also be equipped with side panels or skylights. This gives you maximum flexibility in designing your interior spaces, allowing you to create custom solutions that perfectly match your architectural vision.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                The combination of steel and glass creates a timeless aesthetic that works beautifully in both modern and traditional settings. Whether you're looking to separate spaces while maintaining visual continuity or create a striking design feature, these versatile doors offer the perfect solution.
              </p>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/revolving-doors/steel-loft-doors.avif"
                alt="Steel loft doors as swing doors with various configuration options"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 1-Single-leaf swing door section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">1-Single-leaf swing door made of steel and glass</h3>
              <p className="mt-4 text-lg text-gray-600">
                Are you looking for a classic door with large glazing and modern steel profiles? Then use a 1-ly-lythaled swing wing door from Hörmann to provide more light and transparency in the living room and set a stylish and modern accent.
              </p>
              
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">1-flügly swing leaf doors are available for smaller passages from a width of 650 mm and a height of 1900 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">For larger openings, the doors can also be manufactured up to a width of 1500 mm and a height of 3000 mm, as well as provided with additional side panels and skylights</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Image 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/revolving-doors/1-fly-glid-revolving-sash-door-with-glass-strips-slim.avif"
                    alt="1-fly-glid swing sash door with glass strips Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">1-fly swing sash door with glass strips Slim</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/revolving-doors/1-fly-gland-swing-door-with-side-panels-and-skylights-and-glass-strips.avif"
                    alt="1-fly-gland swing door with side panels and skylights and glass strips"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">1-fly swing door with side panels and skylights</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Leaf swing door section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">2-Leaf swing door made of steel and glass</h3>
              <p className="mt-4 text-lg text-gray-600">
                Do you love generous passageways and openness as well as clear structures? Then our 2-wing swing leaf doors are exactly the right solution for you. A 2-wing loft door creates a unique feeling of space and is a real eye-catcher in your home. With large openings, the doors with two door wings separate rooms from each other and at the same time offer transparency and a generous passageway. This is especially practical between living room and kitchen or the transition from living area and hallway.
              </p>
              
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">2-flying loft doors made of steel and glass are already available from a width of 1250 mm and a height of 1900 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">The largest Hörmann Loft door with two door wings is 2500 mm wide and 3000 mm high</span>
                </li>
                <li>
                  <span className="text-gray-700">With supplementary side panels and skylights, even larger elements are possible, which close particularly large openings and further underline the modern industrial look of the doors</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Image 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/revolving-doors/2-fly-gliding-revolving-door-with-angle-glass-holding-strips.avif"
                    alt="2-fly-gliding swing door with angle glass holding strips"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">2-fly swing door with angle glass holding strips</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/revolving-doors/2-flying-revolving-swing-door-with-side-panels-and-skylights-and-angle-glass-holding-strips.avif"
                    alt="2-flying swing door with side panels and skylights and angle glass holding strips"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">2-flying swing door with side panels and skylights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding doors Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sliding doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Space-saving solutions with modern industrial style
            </p>
          </div>

          {/* Overview image with text */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <p className="text-lg text-gray-600">
                A steel loft door as a sliding door is the perfect solution for the transition from the kitchen to the dining area: With the sliding door, for example, the rooms can be easily separated for cooking and then combined again to an open kitchen. At the same time, sliding doors are space-saving, as they are not opened into the room like revolving doors.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                The 1- and 2-wing Retro Loft sliding doors underline the trendy industrial style with their distinctive wheels on the rail profile. This design element not only adds visual interest but also ensures smooth and reliable operation.
              </p>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/sliding-doors/loftdoor-9.avif"
                alt="Steel loft sliding door with industrial style rail system"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 1-Single-flying sliding door section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">1-Flying sliding door made of steel and glass</h3>
              <p className="mt-4 text-lg text-gray-600">
                You want to separate spaces, but do not lose any incidence of light and space? Then our sliding doors in trendy industrial style are the perfect solution! This allows spaces to be temporarily separated and reconnected while maintaining an open, airy feel throughout your home.
              </p>
              
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">1-flying sliding doors are available for smaller passages from a width of 650 mm and a height of 1900 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">For larger openings, the doors can also be produced up to a width of 1500 mm and a height of 3000 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">Available with different glass holding strip options to match your interior style</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Image 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/sliding-doors/1-flglige-sliding-door-with-glass-holding-strip-slim.avif"
                    alt="1-flying sliding door with glass holding strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">1-wing sliding door with glass holding strip Slim</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/sliding-doors/1-flgly-retro-loft-sliding-door-with-glass-holding-strip.avif"
                    alt="1-wing Retro Loft sliding door with glass holding strip"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">1-wing Retro Loft sliding door with glass holding strip</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/sliding-doors/1-flywing-sliding-door-with-side-panel-and-glass-strip-suspended.avif"
                    alt="1-wing sliding door with side panel and glass strip suspended"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">1-wing sliding door with side panel and glass strip suspended</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Flying sliding door section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">2-Flying sliding door made of steel and glass</h3>
              <p className="mt-4 text-lg text-gray-600">
                Maximum transparency, generous passages and at the same time space-saving: With the 2-flying sliding doors from Hörmann, you can create a modern room layout and light-flooded rooms, which you can separate with the help of the sliding door and then reconnect. Perfect for creating flexible living spaces that adapt to your needs.
              </p>
              
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">2-flying sliding doors are available from a width of 1250 mm and a height of 1900 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">The maximum width can be 2500 mm and the height 3000 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">With side panels, even larger elements are possible, which underline the particularly striking style of the loft doors</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Image 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/sliding-doors/2-fly-gliding-sliding-door-with-side-panels-and-glass-strip-slim.avif"
                    alt="2-fly gliding sliding door with side panels and glass strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">2-wing gliding sliding door with side panels and glass strip Slim</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/sliding-doors/2-flywed-retro-loft-sliding-door-with-glass-strip-slim.avif"
                    alt="2-wing Retro Loft sliding door with glass strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">2-wing Retro Loft sliding door with glass strip Slim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pivot doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pivot doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Minimalist design with maximum elegance
            </p>
          </div>

          {/* Overview image with text */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <p className="text-lg text-gray-600">
                This special shape of the revolving sash door impresses with a reduced profile view without door frame. This minimalist design with the standard glass holding strip Slim comes into its own in living rooms with wide passages.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                The door leaf is anchored directly to the floor as well as to the ceiling or to the fall with hinges. On this vertical axis, the door swings slightly and elegantly in both directions. The pivot point can be determined individually.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Thanks to the same door motifs and rung layout, the pivot doors harmonise optimally with our revolving wings doors.
              </p>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/pivot-doors/loftdoor-28.avif"
                alt="Elegant pivot door with minimalist design"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Pivot doors in steel and glass section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">Pivot doors in steel and glass</h3>
              <p className="mt-4 text-lg text-gray-600">
                Are you looking for a door that impresses with simple elegance, is anchored directly in the floor and ceiling and gently swinging in both directions? Our pivot doors offer exactly these features. Thanks to a freely selectable pivot point, they open up maximum design freedom. This door is not only practical, but also sets a stylish highlight in every room.
              </p>
              
              <ul className="mt-6 space-y-3 list-disc list-inside text-blue-800">
                <li>
                  <span className="text-gray-700">Pivot doors are available for smaller passageways from 600 mm wide and a height of 1800 mm</span>
                </li>
                <li>
                  <span className="text-gray-700">For larger openings, the doors can also be equipped with a maximum door leaf width of 2000 mm and a height of up to 3000 mm, as well as with additional side panels</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Image 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/pivot-doors/a-pivot-door-with-glass-strip-slim.avif"
                    alt="A pivot door with glass strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">A pivot door with glass strip Slim</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/pivot-doors/two-pivot-doors-with-glazing-strip-slim.avif"
                    alt="Two pivot doors with glazing strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">Two pivot doors with glazing strip Slim</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/doors/loft-doors/pivot-doors/two-pivot-doors-with-two-side-panels-and-glare-strip-slim.avif"
                    alt="Two pivot doors with two side panels and glare strip Slim"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-900">Two pivot doors with two side panels and glare strip Slim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pushers, Shell and Pole Handles Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pushers, Shell and Pole Handles
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              For an optimally coordinated design
            </p>
          </div>

          {/* Overview image with text */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <p className="text-lg text-gray-600">
                Round off the industrial style of Hörmann loft doors with the right door handle or a modern shell or pole handle. In total, between 11 handle sets with and without lock as well as 4 shell handles and 11 rod handles can be selected.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                The handle sets are made as standard in deep black RAL 9005 or in stainless steel on request. The Kome D-810 pusher can be ordered in stainless steel, raw stainless steel or brass. The narrow profile width of the pushers underlines the delicate, modern view of the loft doors.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                For a particularly minimalist design, the pushers are executed without a rosette. If you need a lock for your loft door, it can also be optionally equipped with a single-tube frame lock with profile cylinder.
              </p>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/loft-doors/pushers-shell-and-pole-handles/loftdoors-two-winged-door-handle-black-matt.avif"
                alt="Two-winged door with black matt handle"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Pusher Sets Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Pusher Sets</h3>
              <p className="mt-4 text-lg text-gray-600 text-center">
                Choose from 11 elegant handle designs to complement your loft door
              </p>
            </div>

            <div className="mt-12">
              <Carousel className="mt-8">
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/1.avif"
                  imageAlt="Ogro-Design Model 8100 A"
                  title="Ogro-Design Model 8100 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/2.avif"
                  imageAlt="Ogro-Design Model 8100 V"
                  title="Ogro-Design Model 8100 V"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/3.avif"
                  imageAlt="Ogro-Design Model 8140 A"
                  title="Ogro-Design Model 8140 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/4.avif"
                  imageAlt="Ogro-Design Model 8155 V"
                  title="Ogro-Design Model 8155 V"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/5.avif"
                  imageAlt="Ogro-Design Model 8906 A"
                  title="Ogro-Design Model 8906 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/6.avif"
                  imageAlt="Ogro-Design Model 8928 A"
                  title="Ogro-Design Model 8928 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/7.avif"
                  imageAlt="Ogro-Design Model 8906 V"
                  title="Ogro-Design Model 8906 V"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/8.avif"
                  imageAlt="Ogro-Design Model 8907 V"
                  title="Ogro-Design Model 8907 V"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/9.avif"
                  imageAlt="Ogro-Design Model 8940 A"
                  title="Ogro-Design Model 8940 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/10.avif"
                  imageAlt="Ogro-Design Model 8907 A"
                  title="Ogro-Design Model 8907 A"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/11.avif"
                  imageAlt="ECO-Design model Kome D-810"
                  title="ECO-Design model Kome D-810"
                />
              </Carousel>
            </div>
          </div>

          {/* Shell Handles Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Shell Handles</h3>
              <p className="mt-4 text-lg text-gray-600 text-center mb-6">
                Modern and minimalist design in deep black RAL 9005
              </p>
              <p className="text-lg text-gray-600 text-center">
                The shell handles provide a modern and minimalist design and are available in deep black RAL 9005. Choose from four distinctive shapes to complement your loft door design.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Shell Handle 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/doors/loft-doors/pushers-shell-and-pole-handles/model-hl-mg-02.avif"
                    alt="Model HL MG-02 oval"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-gray-900">Model HL MG-02 oval</p>
                </div>
              </div>

              {/* Shell Handle 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/doors/loft-doors/pushers-shell-and-pole-handles/model-hl-mg-03.avif"
                    alt="Model HL MG-03 rectangular"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-gray-900">Model HL MG-03 rectangular</p>
                </div>
              </div>

              {/* Shell Handle 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/doors/loft-doors/pushers-shell-and-pole-handles/model-hl-mg-04.avif"
                    alt="Model HL MG-04 round"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-gray-900">Model HL MG-04 round</p>
                </div>
              </div>

              {/* Shell Handle 4 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/doors/loft-doors/pushers-shell-and-pole-handles/model-hl-mg-05.avif"
                    alt="Model HL MG-05 square"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-gray-900">Model HL MG-05 square</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rod Handles Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Rod Handles</h3>
              <p className="mt-4 text-lg text-gray-600 text-center mb-6">
                Elegant accent pieces that emphasize the door's clean lines
              </p>
              <p className="text-lg text-gray-600 text-center">
                Bar handles place a special emphasis on the door leaf and underline the clear structure of the loft doors. Available in various lengths and designs to match your door color and style.
              </p>
              <div className="mt-4 text-lg text-gray-600">
                <ul className="mt-6 space-y-2 list-disc list-inside text-gray-700">
                  <li>HL G-06 bar handles have lengths dependent on the lamination layout and are individually matched to your door</li>
                  <li>HL G-07 to HL G-09 rod handles are available in lengths from 300 mm to 1100 mm</li>
                  <li>Modern HL G-10 to HL G-16 rod handles can be ordered with a length of 500 mm</li>
                  <li>All rod handles are color-matched to your door for a cohesive look</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Carousel className="mt-8">
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r1.avif"
                  imageAlt="HL G-06"
                  title="HL G-06"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r2.avif"
                  imageAlt="HL G-07"
                  title="HL G-07"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r3.avif"
                  imageAlt="HL G-08"
                  title="HL G-08"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r4.avif"
                  imageAlt="HL G-09"
                  title="HL G-09"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r5.avif"
                  imageAlt="HL G-10"
                  title="HL G-10"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r6.avif"
                  imageAlt="HL G-11"
                  title="HL G-11"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r7.avif"
                  imageAlt="HL G-12"
                  title="HL G-12"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r8.avif"
                  imageAlt="HL G-13"
                  title="HL G-13"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r9.avif"
                  imageAlt="HL G-14"
                  title="HL G-14"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r10.avif"
                  imageAlt="HL G-15"
                  title="HL G-15"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r11.avif"
                  imageAlt="HL G-16"
                  title="HL G-16"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r12.avif"
                  imageAlt="HL G-17"
                  title="HL G-17"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r13.avif"
                  imageAlt="HL G-18"
                  title="HL G-18"
                />
                
                <CarouselItem 
                  imageSrc="/images/doors/loft-doors/pushers-shell-and-pole-handles/r14.avif"
                  imageAlt="HL G-19"
                  title="HL G-19"
                />
              </Carousel>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Additional Options</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <p className="text-lg text-gray-700 mb-4">
                  For enhanced functionality and convenience, Hörmann offers several optional features for your loft doors:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-700"><strong>Electronic Access Control</strong> – E-opener and electronic locking systems for convenient access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-700"><strong>Mechanical Slot Lock</strong> – Available for bar handles for added security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-700"><strong>Toilet Profile Cylinder</strong> – For bathroom applications with frosted glass panes for privacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-700"><strong>Single-Tube Frame Lock</strong> – Optional profile cylinder for doors requiring locks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your space?</span>
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
