﻿import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Side sectional door | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann side sectional door. Perfect for special installation situations, with partial opening for pedestrian access.',
};

export default function SideSectionalDoorPage() {
  // Sample data for side sectional door features
  // Keeping this data for future reference - currently unused
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doorFeatures = [
    {
      title: "Partial Opening for Pedestrian Access",
      description: "Side sectional door can be partially opened to allow pedestrian access, making it convenient to enter the garage without fully opening the door."
    },
    {
      title: "Perfect for Special Installation Situations",
      description: "Ideal for garages with sloped roofs or obstructions on the ceiling, as the door opens sideways instead of upwards."
    },
    {
      title: "No Ceiling Tracks Required",
      description: "The door runs along the garage wall, leaving the ceiling completely free for lighting fixtures or additional storage space."
    },
    {
      title: "Smooth and Quiet Operation",
      description: "Precision-engineered track systems and rollers ensure smooth and quiet door operation with minimal maintenance required."
    },
    {
      title: "Excellent Thermal Insulation",
      description: "Double-skinned, thermally insulated panels provide excellent thermal insulation, helping to reduce energy costs."
    },
    {
      title: "Enhanced Security",
      description: "Multiple locking points and a mechanical anti-lift kit provide enhanced security against forced entry attempts."
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Side sectional door</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Doors that open sideways instead of upwards, ideal for garages with special architectural features or low headroom.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The Perfect Solution for Special Installation Situations
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann side sectional door opens sideways instead of upwards. This is particularly advantageous when the garage ceiling needs to remain free for storing items or when the garage construction (sloped roof, low lintel, obstructing pipes) makes it impossible to install a door that travels under the ceiling.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                With side sectional door, the door sections run along the garage wall, allowing for flexible use of the garage space. The door leaves can also be partially opened to allow pedestrian access, making it convenient to retrieve bicycles or gardening equipment without fully opening the door.
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
                  src="/images/side-sectional-doors.jpg"
                  alt="Hörmann side sectional door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The door for special installation situations and requirements
              </h2>
              <div className="mt-6 prose prose-blue prose-lg text-gray-600">
                <p>
                  Hörmann side sectional doors are the <strong>ideal solution for special installation situations</strong>. Unlike swinging, sectional and garage roller doors, this type of door does not open upwards, but rather sideways. A particular advantage, for example, if the garage ceiling for storing objects (surfing boards, etc.) is to remain free or if the door leaf cannot be parked or assembled under the ceiling for structural reasons (slanted roofing, low lintel, disturbing drainage pipes).
                </p>
                <p>
                  The 42 mm thick PU-foamed sandwich panels impress with their <strong>very good sound and thermal insulation</strong> as well as a <strong>high stability of the door leaf</strong> and a <strong>pleasant smooth running</strong>. The HST side sectional gates are characterised by a <strong>high operating comfort</strong> through a recessed grip recess for manual operation and also impress with improved sealing properties and <strong>increased burglary resistance</strong> thanks to a standard 3-point locking on the closing and curve side and additional locking bolts.
                </p>
                <p>
                  Particularly practical: For the passenger passage, side sectional doors can only be partially opened quickly and easily. So you come to your garage faster to e.g. B. Get your bike or motorcycle out.
                </p>
                <p>
                  For more transparency, light transmission and good ventilation in the garage, the side sectional door is also available as aluminium frame gate HART 42. The HART 42 aluminium frame door is used where more light in the garage or better ventilation is desired, e.g. in parking boxes of collecting garages. The combination of aluminium frame and the large, evenly divided glazing ensures a harmonious and elegant door view.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <video
                  src="/images/garage-doors/side-sectional/side-sectional-door/1.mp4"
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

      {/* Types of Side Sectional Doors Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Types of side sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Choose the right type of door for your needs
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              The choice is yours: With the double-walled, 42 mm thick slats of the side sectional doors <span className="font-semibold">HST 42</span>, you rely on <span className="font-semibold">good thermal insulation</span> and, in addition, to <span className="font-semibold">increased stability and smoothness</span>. If you want more light in the garage or better <span className="font-semibold">ventilation</span>, the <span className="font-semibold">HART 42</span> aluminum frame door is suitable. The combination of aluminium frame and the <span className="font-semibold">large, evenly divided glazing</span> ensures a <span className="font-semibold">harmonious and elegant door view</span>.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* HST 42 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48 sm:h-54">
                  <Image
                    src="/images/garage-doors/side-sectional/types-of-side-sectional-doors/hst-42.avif"
                    alt="HST 42 side sectional door"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-blue-800">HST 42</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Double-walled panels with thermal insulation
                  </p>
                </div>
              </div>

              {/* HART 42 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48 sm:h-54">
                  <Image
                    src="/images/garage-doors/side-sectional/types-of-side-sectional-doors/hart-42.avif"
                    alt="HART 42 aluminum frame door"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-blue-800">HART 42</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Aluminum frame with glazing for more light
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motives Section with Horizontal Scrolling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Motives for side sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              From elegantly simple to exclusive design motifs - you have the choice
            </p>
          </div>

          <div className="mt-12">
            <Carousel className="mt-12">
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/1.avif"
                imageAlt="M bead side sectional door"
                title="M bead"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/2.avif"
                imageAlt="L-Sicke side sectional door"
                title="L-Sicke"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/3.avif"
                imageAlt="L-Sicke, motive 461 side sectional door"
                title="L-Sicke, motive 461"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/4.avif"
                imageAlt="L-Sicke, motive 462 side sectional door"
                title="L-Sicke, motive 462"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/5.avif"
                imageAlt="L-Sicke, motive 481 side sectional door"
                title="L-Sicke, motive 481"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/6.avif"
                imageAlt="HART 42 glass side sectional door"
                title="HART 42 glass"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/7.avif"
                imageAlt="HART 42 glared white tinted side sectional door"
                title="HART 42 glared white tinted"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/8.avif"
                imageAlt="HART 42 with perforated sheet side sectional door"
                title="HART 42 with perforated sheet"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/side-sectional/motives-for-side-sectional-doors/9.avif"
                imageAlt="HART 42 with stretch grid side sectional door"
                title="HART 42 with stretch grid"
                subtitle="Color: Traffic white RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Surfaces for side sectional doors Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Surfaces for side sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The right gate surface for every building architecture
            </p>
          </div>

          {/* Surface Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/garage-doors/side-sectional/surfaces-for-side-sectional-doors/Woodgrain.avif"
                alt="Woodgrain surface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/garage-doors/side-sectional/surfaces-for-side-sectional-doors/Silkgrain.avif"
                alt="Silkgrain surface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/garage-doors/side-sectional/surfaces-for-side-sectional-doors/Decograin.avif"
                alt="Decograin surface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/garage-doors/side-sectional/surfaces-for-side-sectional-doors/Duragrain.avif"
                alt="Duragrain surface"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Surface Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Woodgrain</h3>
              <p className="mt-2 text-sm text-gray-600">
                With the inexpensive, robust surface with faithful saw cut patterns, small scratches can be easily repaired thanks to the embossing. This interface is available in white RAL 9016, in 15 preferred colours or in RAL of your choice.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Silkgrain</h3>
              <p className="mt-2 text-sm text-gray-600">
                The silk-smooth Silkgrain surface is the first choice in modern architecture thanks to its noble goal view. In addition, the 50% thicker outer sheet gives the slats a higher stability and even better smooth running. This interface is available in white RAL 9016, in 15 preferred colours or in RAL of your choice.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Decograin</h3>
              <p className="mt-2 text-sm text-gray-600">
                The Decograin surface with UV-resistant, high-quality plastic film coating gives your sectional door a detailed, distinctive wood look or a noble anthracite metallic elegance. You can choose from 5 natural wood decors and an elegant metallic decor.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Duragrain</h3>
              <p className="mt-2 text-sm text-gray-600">
                With the Duragrain surface with its detailed, natural and colourfast gate surface, you can choose from such as a concrete, rust or natural stone look. The innovative digital printing process and a coating made of high-quality protective varnish ensure a permanently beautiful and scratch-resistant door view.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Colors for side sectional doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colors for side sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Almost unlimited choices
            </p>
          </div>

          <div className="mt-12">
            {/* Description */}
            <div className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
              <p>
                The double-walled side sectional doors are available as standard in traffic white (RAL 9016) as well as in 15 inexpensive preferred colours and around 200 colours according to RAL* as well as in many NCS and DB colours.
              </p>
            </div>

            {/* Standard Color */}
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral9016standardwhite.avif"
                    alt="Traffic white RAL 9016 (standard color)"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-base font-semibold text-gray-900">Traffic white RAL 9016 (standard color)</h3>
                </div>
              </div>
            </div>

            {/* 15 Preferential Colors Heading */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">15 preferential colours</h3>
            </div>

            {/* Preferential Colors Grid - First Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/16light-ivory.avif"
                    alt="RAL 1015 Light ivory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 1015 Light ivory</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/8light-grey.avif"
                    alt="RAL 7035 Light grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7035 Light grey</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral9006-white-aluminium.avif"
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
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/7window-grey.avif"
                    alt="RAL 7040 window grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7040 window grey</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/9stone-grey.avif"
                    alt="RAL 7030 Stone grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7030 Stone grey</p>
                </div>
              </div>
            </div>

            {/* Preferential Colors Grid - Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral9007-grey-aluminium.avif"
                    alt="RAL 9007 Grey aluminium"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9007 Grey aluminium</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral7039quartz-grey.avif"
                    alt="RAL 7039 Quartz Grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7039 Quartz Grey</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ch703anthracite-metallic.avif"
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
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral7015slate-grey.avif"
                    alt="RAL 7015 slate grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7015 slate grey</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral7020basalt-grey.avif"
                    alt="RAL 7012 Basalt grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7012 Basalt grey</p>
                </div>
              </div>
            </div>

            {/* Preferential Colors Grid - Third Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral7016-anthracite-grey.avif"
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
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/11fir-green.avif"
                    alt="RAL 6009 fir green"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 6009 fir green</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral6005-moss-green.avif"
                    alt="RAL 6005 Moss Green"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 6005 Moss Green</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral8028-terra-brown.avif"
                    alt="RAL 8028 Terra brown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 8028 Terra brown</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/side-sectional/colors-for-side-sectional-doors/ral9005jet-black.avif"
                    alt="RAL 9005 Low black"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9005 Low black</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-12 bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
              <p className="text-sm text-gray-600 mb-4">
                The door sides of the page sectional doors are generally supplied in the colour of grey white (RAL 9002). Dark colours must be avoided in alignment with the sun with double-walled steel gates, as a possible lamella deflection can damage the gate. All colours based on the respective RAL colour. The images of the colours and surfaces are not colour-binding for printing reasons. Let your Hörmann partner advise you.
              </p>
              <p className="text-xs text-gray-500">
                * RAL Classic colours; excluding pearl effect, luminous and metallic colours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* High-quality protective coating Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              High-quality protective coating
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              For a permanently beautiful gate surface
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="relative mx-auto h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/garage-doors/sectional/protection/torblatt-aufbau-schutzbeschichtungen.avif"
                  alt="Door leaf structure with protective coatings"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <p className="mt-3 text-lg text-gray-600">
                The protective coatings for the garage sectional doors with Woodgrain and Silkgrain surface ensure a permanently beautiful door view. Choose between two variants:
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900">High-quality protective coating:</h3>
                <p className="mt-2 text-gray-600">
                  The surface of the lamella is particularly insensitive, scratch-resistant and dirt-repellent due to the protective varnish.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900">High-quality protective coating "Anti-Graffiti":</h3>
                <p className="mt-2 text-gray-600">
                  The protective paint on the surface of the lamella as well as on glazing or design elements can be removed graffiti with a commercially available special cleaner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Picture gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Picture gallery
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Modern or classic – the right gate for every architecture
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-2">
                <div className="relative h-80 sm:h-96 md:h-[400px] overflow-hidden">
                  <Image
                    src="/images/garage-doors/side-sectional/picture-gallery/l-sicke-in-grey-aluminium-ral-9007.avif"
                    alt="L-Sicke in grey aluminium RAL 9007"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-blue-800 font-medium">L-Sicke in grey aluminium RAL 9007</p>
              </div>

              <div className="space-y-2">
                <div className="relative h-80 sm:h-96 md:h-[400px] overflow-hidden">
                  <Image
                    src="/images/garage-doors/side-sectional/picture-gallery/ms-sicke-in-decograin-golden-oak.avif"
                    alt="Ms-Sicke in Decograin Golden Oak"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-blue-800 font-medium">Ms-Sicke in Decograin Golden Oak</p>
              </div>

              <div className="space-y-2">
                <div className="relative h-80 sm:h-96 md:h-[400px] overflow-hidden">
                  <Image
                    src="/images/garage-doors/side-sectional/picture-gallery/l-sicke-motif-461-in-hrmann-colour-ch-703.avif"
                    alt="L-Sicke motif 461 in Hörmann Colour CH 703"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-blue-800 font-medium">L-Sicke motif 461 in Hörmann Colour CH 703</p>
              </div>

              <div className="space-y-2">
                <div className="relative h-80 sm:h-96 md:h-[400px] overflow-hidden">
                  <Image
                    src="/images/garage-doors/side-sectional/picture-gallery/m-bead-in-traffic-white-ral-9016.avif"
                    alt="M bead in traffic white RAL 9016"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-blue-800 font-medium">M bead in traffic white RAL 9016</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features & Benefits
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann side sectional door offers numerous advantages for special installation situations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Partial Opening for Pedestrian Access</h3>
              <p className="mt-2 text-base text-gray-600">
                Side sectional door can be partially opened to allow pedestrian access, making it convenient to enter the garage without fully opening the door.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Perfect for Special Installation Situations</h3>
              <p className="mt-2 text-base text-gray-600">
                Ideal for garages with sloped roofs or obstructions on the ceiling, as the door opens sideways instead of upwards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No Ceiling Tracks Required</h3>
              <p className="mt-2 text-base text-gray-600">
                The door runs along the garage wall, leaving the ceiling completely free for lighting fixtures or additional storage space.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828-3.536-3.536 2.828-2.828m13.434 5.656l2.828 2.828-3.536 3.536-2.828-2.828m-9.9-2.828a9 9 0 010-12.728m11.314 0a9 9 0 00-12.728 0" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smooth and Quiet Operation</h3>
              <p className="mt-2 text-base text-gray-600">
                Precision-engineered track systems and rollers ensure smooth and quiet door operation with minimal maintenance required.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excellent Thermal Insulation</h3>
              <p className="mt-2 text-base text-gray-600">
                Double-skinned, thermally insulated panels provide excellent thermal insulation, helping to reduce energy costs.
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
                Multiple locking points and a mechanical anti-lift kit provide enhanced security against forced entry attempts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
