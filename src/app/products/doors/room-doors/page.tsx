import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Room Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann room doors. Modern and high-quality interior doors for every style, available as revolving or sliding doors.',
};

export default function RoomDoorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Room Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Modern and high-quality room doors for every style of interior.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Room Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Discover the new comfort with the high-quality room doors by Hörmann in carpenter quality. Our room doors combine elegant design with exceptional functionality, enhancing the aesthetic appeal of your interior spaces.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Would you like high-quality room doors in a classic or modern style – with large-scale glazing, elegant accents or cool loft design? Hörmann offers you exactly the door that suits you and your decor. Our room doors are available in many designs as both a revolving and sliding door.
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
                  src="/images/doors/room-doors/room-doors/1.avif"
                  alt="Hörmann room door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Door Types Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Versatile Door Types
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Hörmann room doors are available in various configurations to suit your space and functional requirements. Choose between traditional revolving doors or space-saving sliding door solutions.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Revolving Doors</h3>
                <p className="mt-2 text-gray-600">
                  Our classic revolving doors feature premium hinges and hardware for smooth, quiet operation. Available with various panel designs, glazing options, and finishes to match your interior decor.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Sliding Doors</h3>
                <p className="mt-2 text-gray-600">
                  Perfect for spaces where traditional swing doors aren't practical, our sliding door solutions run on high-quality track systems for effortless operation. Available in surface-mounted or pocket door configurations.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">PortaMatic Door Drive</h3>
                <p className="mt-2 text-gray-600">
                  For enhanced accessibility and comfort, our room doors can be equipped with the PortaMatic interior door drive. This innovative system allows for automatic opening and closing, ideal for barrier-free living and added convenience.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/room-doors/room-doors/1.avif"
                  alt="Hörmann sliding room door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Door Styles Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Door Styles for Every Interior 
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              From classic to contemporary, find the perfect door to complement your home's interior design.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                <Image
                  src="/images/doors/room-doors/room-doors/4.avif"
                  alt="Classic style room door"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Classic Style
              </h3>
              <p className="text-base text-gray-500">
                Timeless designs that complement traditional interiors with elegant panel details and refined finishes.
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                <Image
                  src="/images/doors/room-doors/room-doors/2.avif"
                  alt="Modern style room door"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Modern Style
              </h3>
              <p className="text-base text-gray-500">
                Contemporary designs with clean lines, minimalist aesthetics, and innovative materials for modern living spaces.
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                <Image
                  src="/images/doors/room-doors/room-doors/3.avif"
                  alt="Loft style room door with glass elements"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Loft Style
              </h3>
              <p className="text-base text-gray-500">
                Industrial-inspired designs featuring glass elements and metal accents for urban and contemporary interiors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ProLine Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ProLine Room Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Timelessly elegant doors for a homely atmosphere
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Do you attach great importance to the feel-good character in your home? Then make the right choice with the door models of the ProLine. The door leaf in a blunt or tarnished design, combined with your desired colour or your desired decor, creates a homely atmosphere that invites you to relax.
            </p>
            <p className="mt-4">
              With the ProLine series you can choose from a variety of different surfaces to perfectly match your interior design preferences and create a cohesive look throughout your home.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Surface Options:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Duradecor Smooth</strong> – Highly impact resistant surface</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Duradecor Structure</strong> – Units real wood feeling and care comfort</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Duradecor Ultramatt</strong> – Especially noble surface and resistant to fingerprints</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Duradecor Slate</strong> – Modern living design with structured surface in slate look</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Duradecor Linen</strong> – Robust surface in linen optics</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Real Lacquer</strong> – Painted surface with brilliant colour effect</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Real Varnish Matt</strong> – Trend surface for a modern interior</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Real Wood Veneers</strong> – Natural real wood veneers made of high-quality precious woods</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Real Wood Veneer Variants</strong> – Cosy and natural living ambience with veneer surfaces made of high-quality precious woods</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ProLine Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/1.avif"
                imageAlt="Duradecor Glatt Color: White varnish RAL 9016"
                title="Duradecor Glatt"
                subtitle="White varnish RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/2.avif"
                imageAlt="Real wood veneer variants Color: White oak Matt, Listello"
                title="Real wood veneer variants"
                subtitle="White oak Matt, Listello"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/3.avif"
                imageAlt="Real wood veneer variants Color: Rich Matt, Listello"
                title="Real wood veneer variants"
                subtitle="Rich Matt, Listello"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/4.avif"
                imageAlt="Real wood veneer variants Color: Core beech Matt, Quirin Q1"
                title="Real wood veneer variants"
                subtitle="Core beech Matt, Quirin Q1"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/5.avif"
                imageAlt="Duradecor slate Color: Anthracite RAL 7016"
                title="Duradecor slate"
                subtitle="Anthracite RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/6.avif"
                imageAlt="Duradecor Ultramatt Color: Traffic white RAL 9016"
                title="Duradecor Ultramatt"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/7.avif"
                imageAlt="Duradecor slate Color: Traffic white RAL 9016"
                title="Duradecor slate"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/8.avif"
                imageAlt="Duradecor slate Color: Dust grey RAL 7037"
                title="Duradecor slate"
                subtitle="Dust grey RAL 7037"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/9.avif"
                imageAlt="ConceptoGlass slate Color: Dust grey RAL 7037"
                title="ConceptoGlass slate"
                subtitle="Dust grey RAL 7037"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ProLine/10.avif"
                imageAlt="Duradecor linen Color: Taupe RAL 7048"
                title="Duradecor linen"
                subtitle="Taupe RAL 7048"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* DesignLine Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              DesignLine Room Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Discover your dream door with modern design elements
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              With the DesignLine you fill your individual door rooms. Whether style elements such as stainless steel applications, recessed joints or modern wood-glass combinations, whether real wood veneer or colour - the DesignLine offers you a variety of modern door motifs.
            </p>
            <p className="mt-4">
              Our DesignLine room doors are available in different finishes to match your interior design style, from embossed grooves to in-depth joints and flush-mounted applications in various metallic finishes.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">DesignLine Variants:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Stripe</strong> – With embossed grooves for a textured, contemporary look</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Groove</strong> – With in-depth joints creating elegant shadow lines</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Plain</strong> – With flush-mounted applications optionally available in stainless steel, gold, bronze and black</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Rail</strong> – Wood-glass combinations to match the DesignLine wooden door motifs</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Available Colors:</h3>
            <p className="text-gray-700 mb-4">
              We offer the door models DesignLine Groove, Plain and Rail in the preferred colours traffic white, pure white, taupe, light grey, dust grey, anthracite grey and deep black also with matt real paint surface.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">DesignLine Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/1.avif"
                imageAlt="DesignLine Groove 95"
                title="DesignLine Groove 95"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/2.avif"
                imageAlt="DesignLine Groove 101"
                title="DesignLine Groove 101"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/3.avif"
                imageAlt="DesignLine Groove 102"
                title="DesignLine Groove 102"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/4.avif"
                imageAlt="DesignLine Groove 103"
                title="DesignLine Groove 103"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/5.avif"
                imageAlt="DesignLine Groove 104"
                title="DesignLine Groove 104"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/6.avif"
                imageAlt="DesignLine Groove 107"
                title="DesignLine Groove 107"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/7.avif"
                imageAlt="DesignLine Stripe 15"
                title="DesignLine Stripe 15"
                subtitle="Duradecor dust grey RAL 7037"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/8.avif"
                imageAlt="DesignLine Stripe 15"
                title="DesignLine Stripe 15"
                subtitle="Duradecor white varnish RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/9.avif"
                imageAlt="DesignLine Plain 27-7 black with black applications"
                title="DesignLine Plain 27-7"
                subtitle="Traffic white RAL 9016 with black applications"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/10.avif"
                imageAlt="DesignLine Plain 27-7"
                title="DesignLine Plain 27-7"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/DesignLine/11.avif"
                imageAlt="DesignLine Groove 89"
                title="DesignLine Groove 89"
                subtitle="Traffic white RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* ClassicLine Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ClassicLine Room Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              For lovers of classic and elegance
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Do you like it classic, but still modern? Then our timeless motifs of the ClassicLine are the right choice for you. For the perfect country house style you can now discover your favourite door from the ClassicLine.
            </p>
            <p className="mt-4">
              All motifs of this series convince with craftsmanship details in the best joinery quality, combining traditional aesthetics with modern functionality.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ClassicLine Variants:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Georgia</strong> – Particularly high-quality doors with inlaid profile strip</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Carolina</strong> – Elegant doors with embossed profiling</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Montana</strong> – Distinctive doors with high-quality refurbished frames</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Kontura</strong> – Sophisticated doors with contour-milled profiles</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Color Options:</h3>
            <p className="text-gray-700 mb-4">
              For individual color design, almost all doors of the ClassicLine with a lacquer surface can be designed in RAL of your choice. In addition, our door models of the ClassicLine are also available in matt versions in 7 preferred colours.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ClassicLine Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ClassicLine/1.avif"
                imageAlt="ClassicLine Montana 5"
                title="ClassicLine Montana 5"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ClassicLine/2.avif"
                imageAlt="ClassicLine Kontura 3"
                title="ClassicLine Kontura 3"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ClassicLine/3.avif"
                imageAlt="ClassicLine Carolina 2"
                title="ClassicLine Carolina 2"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ClassicLine/4.avif"
                imageAlt="ClassicLine Carolina 1"
                title="ClassicLine Carolina 1"
                subtitle="Traffic white RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/ClassicLine/5.avif"
                imageAlt="ClassicLine Montana 4"
                title="ClassicLine Montana 4"
                subtitle="Traffic white RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Loft Doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Loft Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              A real highlight for your home
            </p>
          </div>

          {/* Text and image sections */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="md:w-1/2 text-lg text-gray-600">
              <p>
                Loft doors by Hörmann ensure transparency and light-flooded spaces in modern industrial style. The stylish elements made of high-quality steel profiles and large-scale glazing enable the separation of living areas with maximum transparency at the same time – for example, in the transition from living and dining space.
              </p>
              <p className="mt-3">
                Available as a classic revolving door or as a space-saving sliding door. Can be configured as 1- or 2-wing doors with and without side panels and skylights or as a glass partition.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/room-doors/LoftDoors/1.avif"
                  alt="Loft door in modern industrial style"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row-reverse md:items-center md:space-x-reverse md:space-x-8">
            <div className="md:w-1/2 text-lg text-gray-600">
              <p>
                With a particularly narrow profile view and in deep black colour design, the night doors give every living room a modern look in trendy industrial style.
              </p>
              <p className="mt-3">
                Available in deep black matt, 5 preferred colours, RAL of your choice, NCS special colours and textured and pearl effect colours. Elements can be sized up to 5000 mm x 4000 mm.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/room-doors/LoftDoors/2.avif"
                  alt="Loft door with large-scale glazing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Features</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src="/images/doors/room-doors/LoftDoors/Flexibly-combinable.avif"
                    alt="Flexibly combinable loft doors"
                    width={250}
                    height={175}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-gray-900">Flexibly Combinable</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Flexible combinations up to 5 x 4 meters, with various door configurations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src="/images/doors/room-doors/LoftDoors/Retaining-bars.avif"
                    alt="Retaining bars options"
                    width={250}
                    height={175}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-gray-900">Retaining Bars</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Available with angle or Slim glass holding strips in various colors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src="/images/doors/room-doors/LoftDoors/Door-handle-models.avif"
                    alt="Door handle models"
                    width={250}
                    height={175}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-gray-900">Door Handle Models</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Eleven handle models in deep black and stainless steel options.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src="/images/doors/room-doors/LoftDoors/Shell-and-pole-handles.avif"
                    alt="Shell and pole handles"
                    width={250}
                    height={175}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-gray-900">Shell and Pole Handles</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Four shell handles and eleven pole handle models, color-matched to the door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GlassLine Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              GlassLine Room Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Glass doors for a friendly atmosphere
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Glass doors are not only classy and chic, they make your home open and friendly and give every room a very special charm. Especially the glass doors in trendy industrial style set elegant accents with black lines for modern interiors.
            </p>
            <p className="mt-4">
              Discover the glass door that suits you. Whether as a hinged door with wooden frame or as a sliding door, our GlassLine collection offers versatile options to enhance your interior design.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">GlassLine Features:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Modern Design</strong> – Trendy industrial style with elegant black lines for contemporary interiors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Versatile Options</strong> – Available as hinged doors with wooden frames or as sliding doors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Enhanced Sound Insulation</strong> – Available with laminated safety glass and lowerable floor seals for tested sound insulation class 1</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="text-gray-700"><strong>Glazing Options</strong> – Choose from clear, satined, or grey-tinted glass to match your privacy needs and interior style</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Benefits of Glass Doors:</h3>
            <p className="text-gray-700 mb-4">
              Glass doors create a sense of openness and allow light to flow between rooms, making spaces feel larger and more connected. They're perfect for creating visual separation while maintaining an open-concept feel, and they add a touch of elegance to any interior design scheme.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">GlassLine Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/1.avif"
                imageAlt="GrooveGlas 29 Black"
                title="GrooveGlas 29 Black"
                subtitle="Modern industrial style"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/2.avif"
                imageAlt="GrooveGlas 31 Black"
                title="GrooveGlas 31 Black"
                subtitle="Contemporary design"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/3.avif"
                imageAlt="GrooveGlas 50 Black"
                title="GrooveGlas 50 Black"
                subtitle="Elegant black accents"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/4.avif"
                imageAlt="Motive 1-1 with Clear grey glazing"
                title="Motive 1-1"
                subtitle="Clear grey glazing"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/5.avif"
                imageAlt="Motive 3-5 with Clear glazing"
                title="Motive 3-5"
                subtitle="Clear glazing"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/room-doors/GlassLine/6.avif"
                imageAlt="Motive 2-5 with satined glazing"
                title="Motive 2-5"
                subtitle="Satined glazing"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features & Benefits
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hörmann room doors offer numerous advantages that enhance your living space.
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">Carpenter Quality</h3>
                <p className="mt-2 text-base text-gray-600">
                  Crafted with precision and attention to detail, our room doors feature the highest quality materials and construction techniques.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Sound Insulation</h3>
                <p className="mt-2 text-base text-gray-600">
                  Enjoy enhanced privacy and reduced noise transfer between rooms with our specially designed door construction.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Design Variety</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of designs, finishes, and glazing options to perfectly match your interior style.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Durable Materials</h3>
                <p className="mt-2 text-base text-gray-600">
                  Built to last with high-quality materials that resist warping, fading, and wear over time.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Maintenance</h3>
                <p className="mt-2 text-base text-gray-600">
                  Simple to clean and maintain, our doors retain their beauty and functionality with minimal upkeep.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Accessibility Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  With the optional PortaMatic door drive, our doors can be automated for enhanced accessibility and convenience.
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
            <span className="block">Ready to enhance your interior spaces?</span>
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

