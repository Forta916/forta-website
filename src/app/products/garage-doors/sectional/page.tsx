import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Garage sectional doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann garage sectional doors. Space-saving design, excellent thermal insulation, and a wide range of designs and colors.',
};

export default function GarageSectionalDoorsPage() {
  // Sample data for sectional garage door variants
  const doorVariants = [
    {
      title: "LPU 42",
      description: "Double-skinned, 42 mm thick panels for excellent thermal insulation, good stability, and quiet operation.",
      features: [
        "U-value of door section: 0.5 W/(m²·K)",
        "Wind load: Class 3",
        "Air/water tightness: Class 3/Class 3",
        "Maximum force: 400 N (operator), 150 N (manual operation)"
      ]
    },
    {
      title: "LPU 67 Thermo",
      description: "Premium door with thermal break and 67 mm thick panels for excellent thermal insulation.",
      features: [
        "U-value of door section: 0.33 W/(m²·K)",
        "Wind load: Class 3",
        "Air/water tightness: Class 3/Class 3",
        "Maximum force: 400 N (operator), 150 N (manual operation)"
      ]
    },
    {
      title: "LTE 42",
      description: "Single-skinned panels for a cost-effective solution with reliable Hörmann quality.",
      features: [
        "Reliable operation",
        "Long service life",
        "Available in various designs",
        "Made in Germany"
      ]
    }
  ];

  // Sample data for surface finishes
  const surfaceFinishes = [
    {
      title: "Woodgrain",
      description: "This robust finish with a realistic timber-grain pattern and surface irregularities perfectly conceals minor scratches."
    },
    {
      title: "Slategrain",
      description: "The new Slategrain surface finish impresses with its structured look, which replicates the appearance of natural slate."
    },
    {
      title: "Sandgrain",
      description: "The finely structured surface for price-conscious building owners is particularly suitable for modern homes."
    },
    {
      title: "Silkgrain",
      description: "The silky-smooth Silkgrain surface is the first choice for modern architecture thanks to its elegant appearance."
    },
    {
      title: "Decograin",
      description: "The Decograin surface finishes with UV-resistant plastic film coating give your garage sectional door a striking and authentic timber look or an elegant metallic appearance in Anthracite."
    },
    {
      title: "Duragrain",
      description: "The smooth Duragrain surface finish in 24 decors impresses with its natural, colorfast, and true-to-detail appearance."
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Garage sectional doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Space-saving doors that open vertically and run under the ceiling, providing maximum space in and in front of the garage.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Garage Sectional Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann garage sectional doors open vertically upwards and are suspended under the ceiling to save space. This construction principle means you can make full use of the space inside and in front of the garage.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Garage sectional doors can be fitted in any garage opening and offer up to 14 cm more passage width than up-and-over doors. They are also optimally sealed with flexible and weather-resistant seals on all four sides.
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
                  src="/images/garage-doors/sectional/sectional-garage-doors-LPU-42.avif"
                  alt="Hörmann garage sectional door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Garage Sectional Doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Types of garage sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Choose the right type of door for your needs
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600">
            <p>
              The choice is yours: With the double-walled garage sectional doors LPU 67 Thermo and LPU 42, you rely on outstanding or very good thermal insulation and beyond that to increased stability and smooth running. If wood determines the appearance of your house, the Hörmann Sektionaltor with solid wood filling of type LTH 42 comes into its own. The Garages Sectionaltor LPU 42 PremiumPlus offers increased corrosion protection for regions with a high-quality coated door leaf, a powdered premium frame and bead filling profiles for better sealing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* LPU 67 Thermo */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/sectional/sectional-garage-doors-LPU-67-Thermo.avif"
                  alt="LPU 67 Thermo garage sectional door"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">LPU 67 Thermo</h3>
                <p className="mt-4 text-gray-600">
                  The energy-saving gate convinces thanks to the thermally separated 67 mm thick slats with excellent thermal insulation.
                </p>
              </div>
            </div>

            {/* LPU 42 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/sectional/sectional-garage-doors-LPU-42.avif"
                  alt="LPU 42 garage sectional door"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">LPU 42</h3>
                <p className="mt-4 text-gray-600">
                  The double-walled LPU 42 garage sectional door offers very good insulation with its 42 mm thick slats.
                </p>
                <p className="mt-2 text-gray-600">
                  The optional LPU 42 PremiumPlus version offers increased corrosion protection and is therefore particularly designed for use in areas with maritime climates, e.g. in coastal regions.
                </p>
              </div>
            </div>

            {/* LTH 42 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/sectional/sectional-garage-doors-LTH-42-new.avif"
                  alt="LTH 42 garage sectional door"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">LTH 42</h3>
                <p className="mt-4 text-gray-600">
                  The solid wood gate is ideally suited for wooden houses or buildings with many wooden elements, e.g. B. Half-timbered or facade elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motives Section with Horizontal Scrolling */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Motives for sectional doors made of steel
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              From elegantly simple to exclusive design motifs - you have the choice
            </p>
          </div>

          <div className="mt-12">
            <Carousel className="mt-12">
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/1.avif"
                imageAlt="S-Suck (LPU 42) garage door"
                title="S-Suck (LPU 42)"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/2.avif"
                imageAlt="M-Sicke (LPU 67 Thermo, LPU 42) garage door"
                title="M-Sicke (LPU 67 Thermo, LPU 42)"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/3.avif"
                imageAlt="D-Sicke (LPU 42) garage door"
                title="D-Sicke (LPU 42)"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/4.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42) garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42)"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/5.avif"
                imageAlt="Cassette (LPU 42) garage door"
                title="Cassette (LPU 42)"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/6.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 450 garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 450"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/7.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 456 garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 456"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/8.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 461 with glazing garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 461 with glazing"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/9.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 457 garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 457"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/10.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motif 462 with glazing garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motif 462 with glazing"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/11.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 458 garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 458"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/12.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 454 garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 454"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/13.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 469 with glazing garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 469 with glazing"
                subtitle="Color: Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/styles/14.avif"
                imageAlt="L-Sicke (LPU 67 Thermo, LPU 42), motive 481 with glazing garage door"
                title="L-Sicke (LPU 67 Thermo, LPU 42), motive 481 with glazing"
                subtitle="Color: Traffic white RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Surfaces for sectional doors made of steel Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Surfaces for sectional doors made of steel
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The right gate surface for every building architecture
            </p>
          </div>

          <div className="mt-12">
            {/* Surface Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/garage-doors/sectional/surfaces/1.avif"
                  alt="Woodgrain surface"
                  fill
                  className="object-cover"
                />
                
              </div>
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/garage-doors/sectional/surfaces/2.avif"
                  alt="Silkgrain surface"
                  fill
                  className="object-cover"
                />
                
              </div>
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/garage-doors/sectional/surfaces/3.avif"
                  alt="Decograin surface"
                  fill
                  className="object-cover"
                />
                
              </div>
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/garage-doors/sectional/surfaces/4.avif"
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
                  In the robust surface with faithful saw cut pattern, small scratches can be easily repaired due to the embossing. This interface is available in Traffic white RAL 9016, in 
                  <a href="#" className="text-blue-600 hover:underline">15 preferential colours</a> or in 
                  <a href="#" className="text-blue-600 hover:underline">RAL by election</a>. Additionally, in the version VarioDesign individual lamellas in Duragrain or Decorgrain decors. ***
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Silkgrain</h3>
                <p className="mt-2 text-sm text-gray-600">
                  The silk-smooth Silkgrain surface is the first choice in modern architecture thanks to its noble goal view. In addition, the 50% thicker outer sheet gives the slats a higher stability and even better smooth running. This interface is available in Traffic white RAL 9016, in 
                  <a href="#" className="text-blue-600 hover:underline">15 preferential colours</a> or in 
                  <a href="#" className="text-blue-600 hover:underline">RAL by election</a>. Additionally, in the version VarioDesign individual lamellas can be chosen in Duragrain or Decograin decorations. ***
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Decograin</h3>
                <p className="mt-2 text-sm text-gray-600">
                  The Decograin surface with UV-resistant, high-quality plastic film coating gives your sectional door a detailed, distinctive wood look or a noble anthracite metallic elegance. You can choose from <a href="#" className="text-blue-600 hover:underline">5 natural wood decors</a> and an <a href="#" className="text-blue-600 hover:underline">elegant metallic decor</a>.
                  <br />
                  <span className="text-xs">* not for LPU 67 Thermo</span>
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Duragrain</h3>
                <p className="mt-2 text-sm text-gray-600">
                  With the Duragrain surface with its detailed, natural and colourfast finish, you can choose from more than <a href="#" className="text-blue-600 hover:underline">30 decors</a> such as a concrete, rust, wood, metal or natural stone look. The innovative digital printing process and a coating made of high-quality protective varnish ensure a permanently beautiful and scratch-resistant door view. Six decors are also available in a vertical design with vertical beading and longitudinal grace.
                  <br />
                  <a href="#" className="text-blue-600 hover:underline">Configure your desired motif now!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protective Coating for sectional doors made of steel Section */}
      <div className="py-16 bg-gray-50">
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

      {/* Colors for sectional doors made of steel Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colors for sectional doors made of steel
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Almost unlimited choices
            </p>
          </div>

          <div className="mt-12">
            {/* Description */}
            <div className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
              <p>
                The double-walled LPU sectional doors and side doors are available as standard in traffic white (RAL 9016) as well as in 15 inexpensive preferred colours and around 200 colours according to RAL* as well as in many NCS and DB colours. If you want to create your garage sectional door equal to your <a href="#" className="text-blue-600 hover:underline">front door</a>, <a href="#" className="text-blue-600 hover:underline">side entrance door</a> or <a href="#" className="text-blue-600 hover:underline">steel door</a>, you can choose from 10 MatchColor preferred colors. The MatchColor colors are available for the Woodgrain and Silkgrain surfaces. **
              </p>
            </div>

            {/* Standard Color */}
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral9016standardwhite.avif"
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
                    src="/images/garage-doors/sectional/colors/16light-ivory.avif"
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
                    src="/images/garage-doors/sectional/colors/8light-grey.avif"
                    alt="RAL 7035 Light grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7035 Light grey**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral9006-white-aluminium.avif"
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
                    src="/images/garage-doors/sectional/colors/7window-grey.avif"
                    alt="RAL 7040 window grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7040 window grey**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/9stone-grey.avif"
                    alt="RAL 7030 Stone grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7030 Stone grey**</p>
                </div>
              </div>
            </div>

            {/* Preferential Colors Grid - Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral9007-grey-aluminium.avif"
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
                    src="/images/garage-doors/sectional/colors/ral7039quartz-grey.avif"
                    alt="RAL 7039 Quartz Grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7039 Quartz Grey**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ch703anthracite-metallic.avif"
                    alt="CH 703 Anthracite metallic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">CH 703 Anthracite metallic**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral7015slate-grey.avif"
                    alt="RAL 7015 slate grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7015 slate grey**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral7020basalt-grey.avif"
                    alt="RAL 7012 Basalt grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7012 Basalt grey**</p>
                </div>
              </div>
            </div>

            {/* Preferential Colors Grid - Third Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral7016-anthracite-grey.avif"
                    alt="RAL 7016 anthracite grey"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 7016 anthracite grey**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/11fir-green.avif"
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
                    src="/images/garage-doors/sectional/colors/ral6005-moss-green.avif"
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
                    src="/images/garage-doors/sectional/colors/ral8028-terra-brown.avif"
                    alt="RAL 8028 Terra brown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 8028 Terra brown**</p>
                </div>
              </div>
              <div>
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ral9005jet-black.avif"
                    alt="RAL 9005 Low black"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL 9005 Low black**</p>
                </div>
              </div>
            </div>

            {/* RAL by election */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RAL by election</h3>
              <div className="max-w-md mx-auto">
                <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/colors/ralelection.avif"
                    alt="RAL by election"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-gray-900">RAL by election</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
              <p className="text-sm text-gray-600 mb-4">
                For a harmonious look, the same colour can be used for gates with Woodgrain and Silkgrain surface on the inside and outside – in the Comfort variant even including colour coordination of door leaf reinforcements, glazing frames, etc. All other inner sides of the door are delivered in the coloured grey white (RAL 9002). Dark colours must be avoided in alignment with the sun with double-walled steel gates, as a possible lamella deflection can damage the gate. All colours based on the respective RAL colour. The images of the colours and surfaces are not colour-binding for printing reasons. Let your Hörmann partner advise you.
              </p>
              <p className="text-xs text-gray-500">
                * RAL Classic colours; excluding pearl effect, luminous and metallic colours.<br />
                ** MatchColor preferred color<br />
                *** up to 5500 mm width, with L-sick, without slurping doors; information about details is provided to you by the dealer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Motives for solid wood sectional doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Motives for solid wood sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Classic design with natural wooden paneling
            </p>
          </div>

          <div className="mt-12">
            <Carousel className="mt-12">
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/1.avif"
                imageAlt="M bead solid wood sectional door"
                title="M bead"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/2.avif"
                imageAlt="L-Sicke solid wood sectional door"
                title="L-Sicke"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/3.avif"
                imageAlt="Cassette solid wood sectional door"
                title="Cassette"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/4.avif"
                imageAlt="Motive 401 solid wood sectional door"
                title="Motive 401"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/5.avif"
                imageAlt="Motive 402 solid wood sectional door"
                title="Motive 402"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/6.avif"
                imageAlt="Motive 405 solid wood sectional door"
                title="Motive 405"
                subtitle="Color: Nordic tax"
              />
              
              <CarouselItem 
                imageSrc="/images/garage-doors/sectional/motives-for-solid-wood-sectional-doors/7.avif"
                imageAlt="Motive 405 with optional footer fittings Exclusive solid wood sectional door"
                title="Motive 405 with optional footer fittings 'Exclusive'"
                subtitle="Color: Nordic tax"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Surfaces for solid wood sectional doors Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Surfaces for solid wood sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Exclusive wooden lining in Nordic spruce
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nordic tax */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/sectional/surfaces-for-solid-wood-sectional-doors/1.avif"
                  alt="Nordic tax wood surface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Nordic tax</h3>
                <p className="mt-4 text-gray-600">
                  The sectional doors made of solid wood are available with an exclusive wood panelling in Nordic spruce in 8 different colours.
                </p>
              </div>
            </div>

            {/* Nordic spruce with brushed surface */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/garage-doors/sectional/surfaces-for-solid-wood-sectional-doors/2.avif"
                  alt="Nordic spruce with brushed surface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Nordic spruce with brushed surface</h3>
                <p className="mt-4 text-gray-600">
                  The wooden type Nordic spruce is also available with a brushed surface. It gives your gate a natural view that particularly supports the charm of half-timbered houses or the country house style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wood glazes and coatings for solid wood sectional doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Wood glazes and coatings for solid wood sectional doors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              For a natural look
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600 text-center">
            <p>
              For our garage sectional doors made of solid wood, you can choose from five glazes and three coatings:
            </p>
          </div>

          {/* Wood Glazes - First Row */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Wood Glazes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Pine */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/Pine.avif"
                    alt="Pine wood glaze"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Pine</p>
                </div>
              </div>

              {/* Larch */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/Larch-Tree.avif"
                    alt="Larch wood glaze"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Larch</p>
                </div>
              </div>

              {/* Nut */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/Nut.avif"
                    alt="Nut wood glaze"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Nut</p>
                </div>
              </div>

              {/* Silver */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/Silver.avif"
                    alt="Silver wood glaze"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Silver</p>
                </div>
              </div>

              {/* Sandbeige */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/Sandbeige.avif"
                    alt="Sandbeige wood glaze"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Sandbeige</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coatings - Second Row */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Coatings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {/* Traffic white */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/white.avif"
                    alt="Traffic white coating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Traffic white</p>
                </div>
              </div>

              {/* Cream white */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/creamwhite.avif"
                    alt="Cream white coating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Cream white</p>
                </div>
              </div>

              {/* Light grey */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/garage-doors/sectional/wood-glazes-and-coatings-for-solid-wood-sectional-doors/light-grey.avif"
                    alt="Light grey coating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-medium text-gray-900">Light grey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Picture gallery Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Picture gallery
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The right section gate for every building architecture
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="grid grid-cols-1 gap-4">
                {/* S-Sicke in Woodgrain fir green RAL 6009 */}
                <div>
                  <Image
                    src="/images/garage-doors/sectional/picture-gallery/s-sicke-in-woodgrain-fir-green-ral-6009.avif"
                    alt="S-Sicke in Woodgrain fir green RAL 6009"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="bg-gray-100 p-2">
                    <h3 className="text-base font-bold text-gray-900">S-Sicke in Woodgrain fir green RAL 6009</h3>
                  </div>
                </div>

                {/* M-Sicke in Woodgrain Window grey RAL 7040 */}
                <div>
                  <Image
                    src="/images/garage-doors/sectional/picture-gallery/m-sicke-in-woodgrain-window-grey-ral-7040.avif"
                    alt="M-Sicke in Woodgrain Window grey RAL 7040"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="bg-gray-100 p-2">
                    <h3 className="text-base font-bold text-gray-900">M-Sicke in Woodgrain Window grey RAL 7040</h3>
                  </div>
                </div>
              </div>

              {/* L-Sicke in Duragrain Concrete - spans 2 rows */}
              <div className="md:row-span-2 flex flex-col">
                <Image
                  src="/images/garage-doors/sectional/picture-gallery/l-sicke-in-duragrain-concrete.avif"
                  alt="L-Sicke in Duragrain Concrete"
                  width={500}
                  height={650}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="bg-gray-100 p-2 mt-auto">
                  <h3 className="text-base font-bold text-gray-900">L-Sicke in Duragrain Concrete</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* S-Sicke in Woodgrain Anthracite Grey RAL 7016 */}
                <div>
                  <Image
                    src="/images/garage-doors/sectional/picture-gallery/s-sicke-in-woodgrain-anthracite-grey-ral-7016.avif"
                    alt="S-Sicke in Woodgrain Anthracite Grey RAL 7016"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="bg-gray-100 p-2">
                    <h3 className="text-base font-bold text-gray-900">S-Sicke in Woodgrain Anthracite Grey RAL 7016</h3>
                  </div>
                </div>

                {/* M-Sicke in Decograin Dark Oak */}
                <div>
                  <Image
                    src="/images/garage-doors/sectional/picture-gallery/m-sicke-in-decograin-dark-oak.avif"
                    alt="M-Sicke in Decograin Dark Oak"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="bg-gray-100 p-2">
                    <h3 className="text-base font-bold text-gray-900">M-Sicke in Decograin Dark Oak</h3>
                  </div>
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
              Hörmann garage sectional doors offer numerous advantages that make them a popular choice for homeowners.
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">Maximum Space Utilization</h3>
                <p className="mt-2 text-base text-gray-600">
                  Sectional doors open vertically upwards and are suspended under the ceiling to save space, allowing you to use the full space inside and in front of the garage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Excellent Thermal Insulation</h3>
                <p className="mt-2 text-base text-gray-600">
                  Double-skinned sectional doors provide excellent thermal insulation, making them ideal for garages that are attached to the house or used as a workshop.
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
                  Hörmann sectional doors feature a mechanical anti-lift kit in the operator boom that effectively protects against forced opening, even during power failures.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Optimal Sealing</h3>
                <p className="mt-2 text-base text-gray-600">
                  Flexible and weather-resistant seals on all four sides of the door provide excellent protection against wind and rain, keeping your garage clean and dry.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Design Variety</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of designs, colors, and surface finishes to perfectly match your home's architecture and personal style preferences.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smooth & Quiet Operation</h3>
                <p className="mt-2 text-base text-gray-600">
                  Precision-engineered track systems, rollers, and hinges ensure smooth and quiet door operation, with minimal maintenance required.
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
            <span className="block">Ready to find your perfect garage sectional door?</span>
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

