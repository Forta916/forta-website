
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Front Doors & Entrance Doors| Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann front doors. Combining security, thermal insulation, and elegant design for a warm welcome to your home.',
};

export default function FrontDoorsPage() {
  // Sample data for front door variants - commented out as it's not used
  /*
  const doorVariants = [
    {
      title: "ThermoSafe",
      description: "Premium front doors with excellent thermal insulation and high security features.",
      features: [
        "73 mm aluminum door leaf",
        "Thermal break aluminum frame",
        "Triple thermal insulation glazing",
        "RC 3 security equipment as standard"
      ]
    },
    {
      title: "ThermoCarbon",
      description: "High-end front doors with outstanding thermal insulation and maximum security.",
      features: [
        "100 mm aluminum door leaf",
        "Thermal break aluminum frame",
        "Quadruple thermal insulation glazing",
        "RC 4 security equipment as standard"
      ]
    },
    {
      title: "Thermo65",
      description: "Cost-effective front doors with good thermal insulation and security features.",
      features: [
        "65 mm steel door leaf",
        "Thermal break aluminum frame",
        "Double or triple glazing",
        "RC 2 security equipment as standard"
      ]
    }
  ];
  */

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Front & Entrance Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Safety, security, and a warm welcome: your front door should radiate comfort while guaranteeing protection.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Premium Front & Entrance Doors
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann's front doors fulfill every wish – whether large-scale glazing, smart operating accessories, or a large selection of colors and motifs. Our high-quality front doors offer you security, first-class design, and quality.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                All Hörmann front doors are optimally tailored to your individual requirements and can be further customized with suitable accessories. Let yourself be inspired and configure your front door "Made in Germany" according to your wishes.
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
                  src="/images/doors/front-doors/doors-by-hoermann/1.avif"
                  alt="Hörmann front door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doors by Hörmann Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Doors by Hörmann
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Safety, security and a warm welcome: your own front door should radiate a lot that gives fun and guarantees protection. At Hörmann you will find front doors that offer exactly that and even more, because our front doors are optimally tailored to your individual requirements and can be further customised with suitable accessories.

                Hörmann's front door front door fulfills every wish – whether large-scale glazing, smart operating accessories or a large selection of colours and motifs. Our high-quality front doors offer you security, first-class design and quality. Let yourself be inspired and configured your front door "Made in Germany" according to your wishes.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/front-doors/doors-by-hoermann/1.avif"
                  alt="Hörmann front door"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Your benefits at a glance
              </h2>
              <h3 className="mt-2 text-xl text-gray-600">Doors by Hörmann</h3>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">High quality and durability "Made in Germany"</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">High quality materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Burglar-resistant safety equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Very good thermal insulation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">High soundproofing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Elegant door design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Individual design options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Quick and clean assembly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Attractive funding opportunities</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600">There are many good reasons for Hörmann's door front house. Prepare yourself and your guests an inviting reception and ensure a safe and undisturbed feel-good atmosphere. Your Hörmann sales partner will be happy to advise you:</p>
              <Button href="/contact" variant="primary">REQUEST NOW</Button>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/doors/front-doors/your-benefits-at-a-glance/front-doors-38.avif"
                  alt="Hörmann front door"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Door Designs Section with Carousel */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Front Door Designs
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Explore our range of elegant and secure front door designs
            </p>
          </div>

          <div className="mt-12">
            <Carousel className="mt-12">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/1.avif"
                imageAlt="ThermoSafe, motive 860, MatchDecor cement"
                title="ThermoSafe, motive 860"
                subtitle="MatchDecor cement"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/2.avif"
                imageAlt="ThermoSafe, motive 860, MatchDecor barn wood grey"
                title="ThermoSafe, motive 860"
                subtitle="MatchDecor barn wood grey"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/3.avif"
                imageAlt="ThermoSafe, motive 504, MatchDecor Wild oak"
                title="ThermoSafe, motive 504"
                subtitle="MatchDecor Wild oak"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/4.avif"
                imageAlt="ThermoCarbon, Motive 680, RAL 7015 Fine structure matt"
                title="ThermoCarbon, Motive 680"
                subtitle="RAL 7015 Fine structure matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/5.avif"
                imageAlt="ThermoCarbon, motive 308, RAL 7016"
                title="ThermoCarbon, motive 308"
                subtitle="RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/6.avif"
                imageAlt="ThermoSafe, motif 560, RAL 7016 matt"
                title="ThermoSafe, motif 560"
                subtitle="RAL 7016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/7.avif"
                imageAlt="Thermo65, motive THP 750, RAL 7016"
                title="Thermo65, motive THP 750"
                subtitle="RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/8.avif"
                imageAlt="ThermoSafe Hybrid, motif 138, RAL 9016 matt"
                title="ThermoSafe Hybrid, motif 138"
                subtitle="RAL 9016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/9.avif"
                imageAlt="ThermoSafe, motive 189, CH 703"
                title="ThermoSafe, motive 189"
                subtitle="CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/10.avif"
                imageAlt="ThermoSafe, motif 553, RAL 9016 matt"
                title="ThermoSafe, motif 553"
                subtitle="RAL 9016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/11.avif"
                imageAlt="ThermoSafe, motif 697, RAL 9016 matt"
                title="ThermoSafe, motif 697"
                subtitle="RAL 9016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/12.avif"
                imageAlt="ThermoSafe Hybrid, motif 188, RAL 9016 matt"
                title="ThermoSafe Hybrid, motif 188"
                subtitle="RAL 9016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/13.avif"
                imageAlt="Thermo65, motive THP 700, Golden Oak"
                title="Thermo65, motive THP 700"
                subtitle="Golden Oak"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/14.avif"
                imageAlt="Thermo65, motive 137, Titan Metallic"
                title="Thermo65, motive 137"
                subtitle="Titan Metallic"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/15.avif"
                imageAlt="ThermoSafe Hybrid, motif 875, RAL 9007 Fine structure matt"
                title="ThermoSafe Hybrid, motif 875"
                subtitle="RAL 9007 Fine structure matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/16.avif"
                imageAlt="ThermoSafe Hybrid, motif 650, RAL 9016 matt"
                title="ThermoSafe Hybrid, motif 650"
                subtitle="RAL 9016 matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/17.avif"
                imageAlt="ThermoSafe Hybrid, motif 875, RAL 7016 Fine structure matt"
                title="ThermoSafe Hybrid, motif 875"
                subtitle="RAL 7016 Fine structure matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/18.avif"
                imageAlt="ThermoSafe Hybrid, motive 860, CH 703"
                title="ThermoSafe Hybrid, motive 860"
                subtitle="CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/doors-by-hoermann/carousel/19.avif"
                imageAlt="ThermoCarbon, motive 308, RAL 3003"
                title="ThermoCarbon, motive 308"
                subtitle="RAL 3003"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* The right material Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            The right material
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Front door is not the same door. The material in particular is crucial for product quality and durability and ensures the characteristic fineness of the door. The Hörmann product range includes front doors made of aluminium, a combination of steel and aluminium, and glass. Tailored to your individual requirements and design, you will find the doorstep that suits you and your home. All remarks have one thing in common: the Hörmann quality promise. Thanks to perfectly coordinated and high-quality materials, we set high standards in terms of stability, safety, sound insulation and thermal insulation with our front doors.
          </p>
          {/* Aluminum Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Front doors made of aluminium</h3>
              <p className="mt-3 text-lg text-gray-600">
                Our ThermoSafe aluminum front doors, , and ThermoCarbon offer a high burglary resistance with RC3 safety features as standard. They convince with efficient thermal insulation, very good sound insulation and numerous design options. In addition, they are particularly easy to care for and durable against the weather. The ThermoSafe Hybrid and ThermoPlan Hybrid models ensure a particularly high dimensional stability even with large temperature differences thanks to a stainless steel sheet with high powder coating on the outside door leaf. With aluminium front doors, you can rely on durability, high functionality and a high-quality design.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/front-doors/the-right-material/1.avif"
                alt="Hörmann front door material"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Steel / Aluminium Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Front doors made of steel / aluminium</h3>
              <p className="mt-3 text-lg text-gray-600">
                Front doors made of a combination of steel and aluminum, such as the Hörmann Door Doors Thermo65, score points with high durability and optional RC2 safety feature. They have good thermal insulation, are easy to clean and, compared to aluminium doors, less price.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/front-doors/the-right-material/2.avif"
                alt="Hörmann front door material"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Glass front doors Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Glass front doors</h3>
              <p className="mt-3 text-lg text-gray-600">
                Front doors made of glass, such as the Hörmann front door TopComfort, ensure with large-area glazing and aluminium frames for light-flooded home entrances and are ideal for apartment buildings or commercial entrances. They have very good sound insulation values, good thermal insulation properties and ensure the necessary burglary protection with optional safety equipment.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/doors/front-doors/the-right-material/3.avif"
                alt="Hörmann front door material"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ThermoSafe Aluminum Front Doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aluminum Front Doors ThermoSafe
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Premium quality and elegant design for your home entrance
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Made of high-quality aluminum, ThermoSafe front doors offer a high level of safety and dimensional stability. With a 73 mm door leaf, they ensure high noise insulation and excellent thermal insulation values, making them ideally suited for low-energy houses and energy-efficient refurbishments.
            </p>
            <p className="mt-4">
              The flush transition from the door leaf to the door frame gives the aluminum door an elegant interior view, which harmonizes particularly well with blunt room doors. Numerous motifs – from classic to modern – as well as many different standard and preferred colours enable you to customize your desired design.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Standard RC3 Safety and 10-Year Safety Proposition</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">High sound insulation: up to 34 dB (depending on equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Very good thermal insulation: UD value of up to 0.87 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large selection of colours and motifs: 77 motifs, 20 preferred colours and RAL of your choice</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Five modern decors MatchDecor available for exceptional design</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Colour interior and exterior view freely selectable</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shapely handles and pusher sets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional additional equipment and smart operating accessories</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ThermoSafe Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/1.avif"
                imageAlt="ThermoSafe Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/2.avif"
                imageAlt="ThermoSafe Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9007"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/3.avif"
                imageAlt="ThermoSafe Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/4.avif"
                imageAlt="ThermoSafe Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/5.avif"
                imageAlt="ThermoSafe Motive 860"
                title="Motive 860"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/6.avif"
                imageAlt="ThermoSafe Motif 137"
                title="Motif 137"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/7.avif"
                imageAlt="ThermoSafe Motive 138"
                title="Motive 138"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/8.avif"
                imageAlt="ThermoSafe Motive 502"
                title="Motive 502"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/9.avif"
                imageAlt="ThermoSafe Motive 501"
                title="Motive 501"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/10.avif"
                imageAlt="ThermoSafe Motive 686"
                title="Motive 686"
                subtitle="Color: MatchDecor Stadel wood"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe/11.avif"
                imageAlt="ThermoSafe Motive 878"
                title="Motive 878"
                subtitle="Color: RAL 9005"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Steel-aluminum Front Doors Thermo65 Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Steel-aluminum Front Doors Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Cost-effective solution with excellent security and insulation
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              The Thermo65 doors are a cost-effective alternative to our aluminum front doors. They feature a high-quality material combination with a steel door leaf and a frame made of aluminum. The 65 mm thick door leaf with standard 5-fold safety lock and optional RC2 equipment is burglar-resistant and offers good thermal insulation values.
            </p>
            <p className="mt-4">
              Our high-quality steel/aluminum front door Thermo65 is also available in 2-wing design, creating a larger passage width for strollers, wheelchairs, or furniture. The standing wing can be chosen narrower than the passage wing, with dimensions from 700 mm possible. The flush transition between passage and standing wing ensures a high-quality and modern appearance.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional RC2 security</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">High sound insulation: Up to 32 dB (depending on the equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Very good thermal insulation: UD value of up to 0.87 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Built-in brush seal protects reliably against drafts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large color and motif selection: 23 motifs and 28 preferred colors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Color inside and exterior view similar, optional inside in traffic white RAL 9016</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shapely handles and pusher sets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional additional equipment and smart operating accessories</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Thermo65 Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/1.avif"
                imageAlt="Thermo65 Motive 700"
                title="Motive 700"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/2.avif"
                imageAlt="Thermo65 Motive 700"
                title="Motive 700"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/3.avif"
                imageAlt="Thermo65 Motive 010"
                title="Motive 010"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/4.avif"
                imageAlt="Thermo65 Motive 010"
                title="Motive 010"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/5.avif"
                imageAlt="Thermo65 Motive 810"
                title="Motive 810"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/6.avif"
                imageAlt="Thermo65 Motif 515"
                title="Motif 515"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/7.avif"
                imageAlt="Thermo65 Motive 010"
                title="Motive 010"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/8.avif"
                imageAlt="Thermo65 Motive 810"
                title="Motive 810"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/9.avif"
                imageAlt="Thermo65 Motive 015"
                title="Motive 015"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/10.avif"
                imageAlt="Thermo65 Motif 515"
                title="Motif 515"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/11.avif"
                imageAlt="Thermo65 Motive 630S"
                title="Motive 630S"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/12.avif"
                imageAlt="Thermo65 Motive 610S"
                title="Motive 610S"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/13.avif"
                imageAlt="Thermo65 Motive 700P"
                title="Motive 700P"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/14.avif"
                imageAlt="Thermo65 Motive 610N"
                title="Motive 610N"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/15.avif"
                imageAlt="Thermo65 Motif 640S"
                title="Motif 640S"
                subtitle="Color: Titanium metallic"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/16.avif"
                imageAlt="Thermo65 Motive 650S"
                title="Motive 650S"
                subtitle="Color: Titanium metallic"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/steel-aluminum-front-doors-thermo65/17.avif"
                imageAlt="Thermo65 Motive 750C black edition"
                title="Motive 750C black edition"
                subtitle="Color: RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Aluminum Front Doors ThermoSafe Hybrid Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aluminum Front Doors ThermoSafe Hybrid
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Superior stability and security with aluminum and stainless steel construction
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              ThermoSafe Hybrid front doors feature a specially developed construction made of aluminum and stainless steel that ensures particularly high dimensional stability, even with significant temperature differences between living spaces and outdoor areas.
            </p>
            <p className="mt-4">
              These premium front doors come with standard RC4 security equipment for closed door motifs or RC3 safety for doors with glazing elements, fulfilling high requirements for preventive burglary protection. The outer door leaf is made of stainless steel sheet with high-quality powder coating, providing exceptional durability and resistance.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">RC4 as standard (without glazing) or RC3 Safety (with glazing) and 10-year safety promise</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Outer door leaf made of stainless steel sheet with high powder coating for particularly high dimensional stability</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Particularly high noise protection: up to 36 dB (depending on equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Very good thermal insulation: UD value of up to 0.87 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large selection of colours and motifs: 71 door motifs, 20 preferred colours and RAL of your choice on request</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Colour interior and exterior view freely selectable</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shapely handles and pusher sets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional additional equipment and smart operating accessories</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ThermoSafe Hybrid Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/1.avif"
                imageAlt="ThermoSafe Hybrid Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/2.avif"
                imageAlt="ThermoSafe Hybrid Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9007"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/3.avif"
                imageAlt="ThermoSafe Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/4.avif"
                imageAlt="ThermoSafe Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/5.avif"
                imageAlt="ThermoSafe Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/6.avif"
                imageAlt="ThermoSafe Hybrid Motive 138"
                title="Motive 138"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/7.avif"
                imageAlt="ThermoSafe Hybrid Motive 502"
                title="Motive 502"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermosafe-hybrid/8.avif"
                imageAlt="ThermoSafe Hybrid Motive 871"
                title="Motive 871"
                subtitle="Color: CH 703"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Aluminum Front Doors ThermoPlan Hybrid Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aluminum Front Doors ThermoPlan Hybrid
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Elegant flush-mounted design with exceptional stability
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              ThermoPlan Hybrid aluminum front doors are characterized by the double-sided surface connection of the door leaf and frame. This creates a flat and particularly elegant interior and exterior view of the front doors.
            </p>
            <p className="mt-4">
              In addition, the ThermoPlan Hybrid front doors feature a stainless steel sheet on the outside, which ensures particularly high dimensional stability even with large temperature differences. This combination of materials provides exceptional weather resistance and durability while maintaining a sleek, modern appearance.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Full-surface door view and flush-mounted crossing of door leaf and door frame on both sides</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Standard RC3 Safety and 10-Year Safety Proposition</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Particularly high noise protection: up to 33 dB (depending on equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Very good thermal insulation: UD value of up to 0.78 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Outer side of stainless steel sheet with high quality powder coating for particularly high dimensional stability and weather resistance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large selection of colours and motifs: 16 motifs, 20 preferred colours and RAL of your choice on request</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Colour interior and exterior view freely selectable</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shapely handles and pusher sets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional additional equipment and smart operating accessories</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ThermoPlan Hybrid Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/1.avif"
                imageAlt="ThermoPlan Hybrid Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/2.avif"
                imageAlt="ThermoPlan Hybrid Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/3.avif"
                imageAlt="ThermoPlan Hybrid Motive 504"
                title="Motive 504"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/4.avif"
                imageAlt="ThermoPlan Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/5.avif"
                imageAlt="ThermoPlan Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/6.avif"
                imageAlt="ThermoPlan Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/7.avif"
                imageAlt="ThermoPlan Hybrid Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 9007"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/8.avif"
                imageAlt="ThermoPlan Hybrid Motive 138"
                title="Motive 138"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/9.avif"
                imageAlt="ThermoPlan Hybrid Motive 502"
                title="Motive 502"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-front-doors-thermoplan-hybrid/10.avif"
                imageAlt="ThermoPlan Hybrid Motive 871"
                title="Motive 871"
                subtitle="Color: RAL 7016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Aluminum Doors ThermoCarbon Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aluminum Doors ThermoCarbon
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Premium class entrance doors with unmatched thermal insulation
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              ThermoCarbon doors represent the premium class among aluminum entrance doors. They are absolute leaders in terms of thermal insulation and are even certified for passive houses, making them the perfect choice for energy-efficient homes.
            </p>
            <p className="mt-4">
              With a 100 mm thick door leaf reinforced with carbon fiber optical hybrid material, ThermoCarbon doors meet the highest requirements for burglary protection with standard RC3 and optional RC4 safety equipment. This advanced construction allows for a particularly large selection of motifs and exclusive designs, such as embedded handles for a flush door view.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">High-tech wing profile made of carbon fibre-optic hybrid material</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Outstanding thermal insulation: UD value of up to 0.47 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Certified for use in passive houses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Standard RC3 Safety and 10-Year Safety Proposition</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional RC4 safety equipment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Particularly high noise protection: up to 29 dB (depending on equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Up to 3000 mm door height</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large range of colours and motifs: 21 motifs, 20 preferred colours and RAL on request</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Colour interior and exterior view freely selectable</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Exclusive designs such as recessed handles for a flush door view</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional additional equipment and smart operating accessories</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ThermoCarbon Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/1.avif"
                imageAlt="ThermoCarbon Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/2.avif"
                imageAlt="ThermoCarbon Motive 504"
                title="Motive 504"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/3.avif"
                imageAlt="ThermoCarbon Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/4.avif"
                imageAlt="ThermoCarbon Motive 860"
                title="Motive 860"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/5.avif"
                imageAlt="ThermoCarbon Motive 860"
                title="Motive 860"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/6.avif"
                imageAlt="ThermoCarbon Motive 308"
                title="Motive 308"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/7.avif"
                imageAlt="ThermoCarbon Motive 308"
                title="Motive 308"
                subtitle="Color: RAL 7016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/8.avif"
                imageAlt="ThermoCarbon Motive 862"
                title="Motive 862"
                subtitle="Color: RAL 9016"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/9.avif"
                imageAlt="ThermoCarbon Motive 568"
                title="Motive 568"
                subtitle="Color: CH 703"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminum-doors-thermocarbon/10.avif"
                imageAlt="ThermoCarbon Motive 189"
                title="Motive 189"
                subtitle="Color: RAL 9016"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Glass Doors TopComfort Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Glass Doors TopComfort
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Bright and welcoming entrances with elegant glass designs
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Our TopComfort glass doors allow for a particularly bright and friendly house entrance, creating a welcoming atmosphere for visitors. With large-area glazing and aluminum frames, these doors flood your entryway with natural light.
            </p>
            <p className="mt-4">
              TopComfort doors are the ideal solution for multi-family homes and commercial entrances. You can choose from 9 exclusive glass door motifs, which differ in glass design, transparency, and light incidence, allowing you to customize the perfect entrance for your property.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional RC2 and RC3 safety</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Particularly high noise protection: up to 39 dB (depending on equipment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Good thermal insulation: UD value of up to 1.3 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large motif selection, 20 preferred colours and RAL of your choice upon request</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Automatically open and close with optional HDO door drive</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Large selection of additional features such as side panels, light switches, speech sieve and bell pad for up to 12 households</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">TopComfort Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/1.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 9016, MG 115"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/2.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 7015, MG 115"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/3.avif"
                imageAlt="TopComfort Motive 101"
                title="Motive 101"
                subtitle="Color: RAL 7031, Clear glass"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/4.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: CH 703, MG 112"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/5.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 9007, MG 117"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/6.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 6005, MG 113"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/7.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 9006, MG 114"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/8.avif"
                imageAlt="TopComfort Motive 101"
                title="Motive 101"
                subtitle="Color: RAL 7037, clear glass"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/9.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 8028, MG 112"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/glass-doors-topcomfort/10.avif"
                imageAlt="TopComfort Motive 100"
                title="Motive 100"
                subtitle="Color: RAL 3003, MG 116"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Aluminium Door TopComfort Portal Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aluminium Door TopComfort Portal
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Double-wing doors for wider entrances and representative access
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              The 2-flying aluminium front door TopComfort Portal offers more passage width and very good thermal insulation, making it ideal for grand entrances and buildings requiring wider access points.
            </p>
            <p className="mt-4">
              The inside and outside aluminium sheets create an elegant door view for representative entrance areas. With its almost flush-mounted transition between the gear and standing wing, the TopComfort Portal provides a sophisticated and cohesive appearance that enhances the overall aesthetic of your property.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">2-flying aluminum front door TopComfort Portal for more passage width and representative home access</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Aluminum frame construction with internal PU foam filling ensures high energy efficiency with very good thermal insulation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Elegant door view through indoor and outside covering aluminium sheets and almost flush-mounted transition of gear and standing wing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Individual design options: 7 door motifs, 23 preferred colours and numerous handles and glazing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Door size up to 2600 mm width and 2500 mm height</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">TopComfort Portal Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminium-door-topcomfort-portal/1.avif"
                imageAlt="TopComfort Portal Motive 138"
                title="Motive 138"
                subtitle="Color: Grey aluminium RAL 9007 Fine structure matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminium-door-topcomfort-portal/2.avif"
                imageAlt="TopComfort Portal Motive 501"
                title="Motive 501"
                subtitle="Color: Grey aluminium RAL 9007 Fine structure matt"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminium-door-topcomfort-portal/3.avif"
                imageAlt="TopComfort Portal Motive 565"
                title="Motive 565"
                subtitle="Color: white aluminium RAL 9006 silk finish"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminium-door-topcomfort-portal/4.avif"
                imageAlt="TopComfort Portal Motive 568"
                title="Motive 568"
                subtitle="Color: white aluminium RAL 9006 silk finish"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/aluminium-door-topcomfort-portal/5.avif"
                imageAlt="TopComfort Portal Motive 860"
                title="Motive 860"
                subtitle="Color: white aluminium RAL 9006 silk finish"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Entrance door Thermo46 Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Entrance door Thermo46
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Make your entrance to the eye-catcher
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              The Thermo46 doors offer you everything that makes a good entrance door. With UD values of up to 1.1 W/(m²·K), the Thermo46 doors achieve good thermal insulation values. Thanks to the standard 5-fold security lock, the entrance doors are ideally equipped in terms of security.
            </p>
            <p className="mt-4">
              Optionally, they can also be equipped with a self-locking lock. Because it is automatically locked when closing the door, manual closing with a key is no longer necessary and at the same time the insurance cover is always given during attempts to break-in – practical! Some motifs of the Thermo46 doors are optionally available with the RC2 safety equipment for an even more comfortable feeling in your own home.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your benefits at a glance:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Good thermal insulation with UD values of up to 1.1 W/(m²·K)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Standard 5-fold security lock for enhanced protection</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional self-locking lock for automatic security</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional RC2 safety equipment available for select motifs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Wide range of customization options with colors, glazing, side panels and skylights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Variety of door motifs from modern to classic designs</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Thermo46 Door Models</h3>
            <Carousel className="mt-8">
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/1.avif"
                imageAlt="Thermo46 Motive 010"
                title="Motive 010"
                subtitle="Classic design with clean lines"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/2.avif"
                imageAlt="Thermo46 Motive 700B"
                title="Motive 700B"
                subtitle="Modern design with glass elements"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/3.avif"
                imageAlt="Thermo46 Motive 015"
                title="Motive 015"
                subtitle="Timeless design with ribbed profile"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/4.avif"
                imageAlt="Thermo46 Motive 020S"
                title="Motive 020S"
                subtitle="Contemporary style with glass insert"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/5.avif"
                imageAlt="Thermo46 Motive 900D"
                title="Motive 900D"
                subtitle="Elegant design with stainless steel elements"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/6.avif"
                imageAlt="Thermo46 Motive 400I"
                title="Motive 400I"
                subtitle="Traditional style with arched glass"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/7.avif"
                imageAlt="Thermo46 Motive 025S"
                title="Motive 025S"
                subtitle="Modern design with horizontal elements"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/8.avif"
                imageAlt="Thermo46 Motif 515"
                title="Motif 515"
                subtitle="Contemporary style with ribbed sections"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/9.avif"
                imageAlt="Thermo46 Motive 750C"
                title="Motive 750C"
                subtitle="Modern design with vertical glass element"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/10.avif"
                imageAlt="Thermo46 Motive 030S"
                title="Motive 030S"
                subtitle="Contemporary style with square glass insert"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/11.avif"
                imageAlt="Thermo46 Motive 200I"
                title="Motive 200I"
                subtitle="Classic design with decorative glass"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/12.avif"
                imageAlt="Thermo46 Motive 100"
                title="Motive 100"
                subtitle="Traditional style with large glass panel"
              />
              
              <CarouselItem 
                imageSrc="/images/doors/front-doors/front-door-models/entrance-door-thermo46/13.avif"
                imageAlt="Thermo46 Motif 040S"
                title="Motif 040S"
                subtitle="Modern design with round glass element"
              />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Colours and Finishes for Aluminium House Doors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colours and Finishes for Aluminium House Doors
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Almost unlimited design possibilities
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              For our aluminium home doors ThermoSafe, ThermoSafe Hybrid, ThermoPlan Hybrid and ThermoCarbon, we offer you a wide range of colours of standard and preferential colours, with which you can design your front door individually and according to your wishes. Choose from numerous standard and preferred colours such as white and anthracite as well as colours with a matt fine structure.
            </p>
            <p className="mt-4">
              If you want to design your front door similar to your garage sectional door, side entrance door or steel door, you can choose from 10 MatchColor preferred colors. For our ThermoSafe front doors, you also have five modern MatchDecore to choose from, which make your front door a real eye-catcher thanks to its extraordinary design. Or design your door individually in RAL of your choice.
            </p>
          </div>

          {/* Standard and Preferential Matt */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Standard and Preferential Matt</h3>
            </div>
            
            {/* Standard Color - Single Row */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/doors/front-doors/front-door-models/colours-and-finishes-for-aluminium-house-doors/1.avif"
                  alt="Standard color - Traffic white RAL 9016"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium text-gray-900">Standard color (Traffic white RAL 9016) and various preferential matt colors</p>
              </div>
            </div>
          </div>

          {/* Other Color Categories - 2 Column Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Preferred Coloured Fine Structure Matt */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Preferred Coloured Fine Structure Matt</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colours-and-finishes-for-aluminium-house-doors/2.avif"
                    alt="Preferred coloured fine structure matt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">Fine structure matt finishes</p>
                </div>
              </div>
            </div>

            {/* Preferred Colors MatchColor */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Preferred Colors MatchColor</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colours-and-finishes-for-aluminium-house-doors/3.avif"
                    alt="MatchColor preferred colors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">MatchColor preferred colors</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                Match your front door to your garage sectional door
              </p>
            </div>

            {/* MatchDecor (ThermoSafe only) */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">MatchDecor (ThermoSafe only)</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colours-and-finishes-for-aluminium-house-doors/4.avif"
                    alt="MatchDecor options"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">Modern MatchDecor options</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                Five modern decors for an extraordinary design
              </p>
            </div>

            {/* RAL by Election */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">RAL by Election</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colours-and-finishes-for-aluminium-house-doors/5.avif"
                    alt="RAL by election"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">Choose from approximately 200 RAL colors</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                Design your door individually in any RAL color
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-12 bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
            <p className="text-sm text-gray-600 mb-4">
              For a harmonious look, the same colour can be used for the inside and outside of your door. Dark colours should be avoided in direct sunlight, as possible door leaf deflection may impair the door's function. All colours based on the respective RAL colour. The images of the colours and surfaces are not colour-binding for printing reasons. Let your Hörmann partner advise you.
            </p>
          </div>
        </div>
      </div>

      {/* Colors and Finishes for Steel/Aluminum Front Doors Thermo65 Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Colors and Finishes for Steel/Aluminum Front Doors Thermo65
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Extensive selection of colors and decors for your Thermo65 door
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              For our steel/aluminum home doors Thermo65, we offer you a large selection of colours and decors. Choose from numerous standard and preferred colours such as white or anthracite as well as 7 Matt deluxe colours and 5 decograin decors. If you want to design your front door similar to your garage sectional door, side entrance door or steel door, you can choose from 10 MatchColor preferred colors.
            </p>
          </div>

          {/* Standard and Preferential Colors */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Standard and Preferential Colors</h3>
            </div>
            
            {/* Standard Color - Single Row */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/doors/front-doors/front-door-models/colors-and-finishes-for-steel---aluminum-front-doors-thermo65/1.avif"
                  alt="Standard and preferential colors for Thermo65"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium text-gray-900">Standard color (Traffic white RAL 9016) and various preferential colors</p>
              </div>
            </div>
          </div>

          {/* Other Color Categories - 2 Column Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colours Matt Deluxe */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Colours Matt Deluxe</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colors-and-finishes-for-steel---aluminum-front-doors-thermo65/2.avif"
                    alt="Matt deluxe colors for Thermo65"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">7 exclusive Matt deluxe colors</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                Premium matte finish with elegant appearance
              </p>
            </div>

            {/* Preferred Colors MatchColor */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Preferred Colors MatchColor</h3>
              </div>
              
              <div className="mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colors-and-finishes-for-steel---aluminum-front-doors-thermo65/3.avif"
                    alt="MatchColor preferred colors for Thermo65"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">10 MatchColor preferred colors</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                Match your front door to your garage door or other entrances
              </p>
            </div>

            {/* Decograin Decors */}
            <div className="md:col-span-2">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Decograin Decors</h3>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/doors/front-doors/front-door-models/colors-and-finishes-for-steel---aluminum-front-doors-thermo65/4.avif"
                    alt="Decograin decors for Thermo65"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-900">5 natural-looking Decograin decors</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center max-w-md mx-auto">
                Detailed wood-grain appearance with UV-resistant coating for lasting beauty
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
            <p className="text-sm text-gray-600 mb-4">
              The inside view of Thermo65 doors is generally delivered in Traffic white RAL 9016. Dark colors should be avoided on sun-exposed sides, as potential door leaf deflection may impair functionality. Color representations may differ from actual colors due to printing limitations. Please consult your Hörmann partner for detailed advice.
            </p>
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
              Hörmann front doors offer numerous advantages that make them a popular choice for homeowners.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Enhanced Security</h3>
                <p className="mt-2 text-base text-gray-600">
                  Hörmann front doors feature multi-point locking systems and are available with RC 2, RC 3, or RC 4 security equipment to protect your home against break-in attempts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Excellent Thermal Insulation</h3>
                <p className="mt-2 text-base text-gray-600">
                  With thermal break frames and insulated door leaves, Hörmann front doors provide outstanding thermal insulation, helping to reduce energy costs and increase comfort.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Weather Resistance</h3>
                <p className="mt-2 text-base text-gray-600">
                  Designed to withstand harsh weather conditions, Hörmann front doors feature high-quality seals and durable materials that protect against rain, wind, and temperature fluctuations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
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

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Quality & Durability</h3>
                <p className="mt-2 text-base text-gray-600">
                  Made in Germany with premium materials and precise engineering, Hörmann front doors are built to last and maintain their appearance and functionality for many years.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Home Integration</h3>
                <p className="mt-2 text-base text-gray-600">
                  Optional smart access systems allow for keyless entry, remote monitoring, and integration with home automation platforms for enhanced convenience and security.
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
            <span className="block">Ready to find your perfect front door?</span>
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
