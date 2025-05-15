import Image from 'next/image';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import CarouselItem from '@/components/ui/CarouselItem';

export const metadata = {
  title: 'Berry Swing Doors | Forta - Official Hörmann Dealer in California',
  description: 'Explore our range of premium Hörmann Berry swing garage doors. Classic up-and-over doors with proven quality, available in steel, timber, and various surface finishes.',
};

export default function BerrySwingDoorsPage() {
  // Sample data for Berry swing door features - commented out as it's not used
  /*
  const doorFeatures = [
    {
      title: "Robust Construction",
      description: "Berry swing doors are built with a sturdy steel construction that ensures durability and long-lasting performance."
    },
    {
      title: "Reliable Operation",
      description: "The proven technology of Berry swing doors ensures smooth and reliable operation for many years."
    },
    {
      title: "Multiple Design Options",
      description: "Choose from a wide range of designs, including steel and timber versions, to match your home's architecture."
    },
    {
      title: "Easy Installation",
      description: "Berry swing doors are designed for straightforward installation, saving time and reducing costs."
    },
    {
      title: "Space-Efficient",
      description: "The up-and-over mechanism requires minimal space inside the garage, making it ideal for certain garage configurations."
    },
    {
      title: "Security Features",
      description: "Berry swing doors come with multiple locking points and can be equipped with additional security features for enhanced protection."
    }
  ];
  */

  // Sample data for door designs - commented out as it's not used
  /*
  const doorDesigns = [
    {
      title: "Steel Designs",
      description: "Steel Berry doors are available in various ribbed and paneled designs, offering a classic look with modern durability.",
      variants: [
        "Horizontal ribbing",
        "Vertical ribbing",
        "Paneled designs",
        "With or without glazing elements"
      ]
    },
    {
      title: "Timber Designs",
      description: "Timber Berry doors provide a natural, warm appearance and are available in various wood types and designs.",
      variants: [
        "Nordic Pine",
        "Hemlock",
        "Vertical or diagonal boarding",
        "Paneled designs"
      ]
    },
    {
      title: "Surface Finishes",
      description: "Choose from various surface finishes to customize the appearance of your Berry swing door.",
      variants: [
        "Traffic white (RAL 9016)",
        "Anthracite grey (RAL 7016)",
        "Woodgrain texture",
        "Decograin timber designs"
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Berry Swing Doors</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Classic up-and-over doors with proven Hörmann quality, available in steel, timber, and with various surface finishes.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Classic Garage Doors with Proven Quality
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Hörmann Berry swing doors have been a trusted choice for homeowners for decades. These classic up-and-over doors combine reliable functionality with attractive design options to enhance the appearance of your home.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                With their robust construction and smooth operation, Berry swing doors offer excellent value and dependable performance. They are available in a wide range of designs, including steel and timber versions, to suit various architectural styles and personal preferences.
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
                  src="/images/berry-swing-doors.jpg"
                  alt="Hörmann Berry swing door"
                  fill
                  className="object-cover"
                />
              </div>
      </div>
    </div>
  </div>
</div>

{/* Berry Wings Section */}
<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Berry wings
        </h2>
        <p className="mt-2 text-xl text-gray-600">
          Here quality oscillates in a beautiful look
        </p>
        <div className="mt-6 prose prose-blue prose-lg text-gray-600">
          <p>
            Everything speaks for the original: quality and safety, appearance and comfort and the sophisticated technology. Every Hörmann Berry-Tor contains the experience of more than 50 years of know-how in the construction of garage gates.
          </p>
          <p>
            No matter for which a Berry swingbar style you are looking for, at Hörmann you will certainly find the gate motif that suits you and your house – from straightforward beads to classic cassettes in many finishes, colours and decors, and as a solid wood gate. With almost every torture, Hörmann also provides you with the right side door. Thus the gate and the door form a harmonious unity.
          </p>
          <p>
            Berry wings-goers are tested and certified according to the high safety requirements of the US standard. You can check with the safety checklist whether your old garage door meets the modern safety standards.
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 relative">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden">
          <video
            src="/images/garage-doors/berry-swing/berry-wings/1.mp4"
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

{/* Motive Overview Steel Gates Section */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Motive overview steel gates
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        For single and collecting garages
      </p>
    </div>

    <div className="mt-12">
      <Carousel className="mt-12">
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/1.avif"
          imageAlt="Motive 902 steel gate"
          title="Motive 902"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/2.avif"
          imageAlt="Motive 941 steel gate"
          title="Motive 941"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/3.avif"
          imageAlt="Motive 957 steel gate"
          title="Motive 957"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/4.avif"
          imageAlt="Motive 990 steel gate"
          title="Motive 990"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/5.avif"
          imageAlt="Motive 968 steel gate"
          title="Motive 968"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/6.avif"
          imageAlt="Motive 984 steel gate"
          title="Motive 984"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/7.avif"
          imageAlt="Motive 985 steel gate"
          title="Motive 985"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/8.avif"
          imageAlt="Theme 971 steel gate"
          title="Theme 971"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/9.avif"
          imageAlt="Motive 973 steel gate"
          title="Motive 973"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/10.avif"
          imageAlt="Motif 975 steel gate"
          title="Motif 975"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/11.avif"
          imageAlt="Motif 977 steel gate"
          title="Motif 977"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/12.avif"
          imageAlt="Motive 979 steel gate"
          title="Motive 979"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/13.avif"
          imageAlt="Motive 913 steel gate"
          title="Motive 913"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/14.avif"
          imageAlt="Motive 914 steel gate"
          title="Motive 914"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/15.avif"
          imageAlt="Motive 988 steel gate"
          title="Motive 988"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/16.avif"
          imageAlt="Motif 903 steel gate"
          title="Motif 903"
          subtitle="Color: Traffic white RAL 9016"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-steel-gates/17.avif"
          imageAlt="Motive 904 steel gate"
          title="Motive 904"
          subtitle="Color: Traffic white RAL 9016"
        />
      </Carousel>
    </div>
  </div>
</div>

{/* Motive Overview Solid Wood Gates Section */}
<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Motive overview solid wood gates
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        Classic design with natural wooden paneling
      </p>
    </div>

    <div className="mt-12">
      <Carousel className="mt-12">
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/1.avif"
          imageAlt="Motif 925 solid wood gate"
          title="Motif 925"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/2.avif"
          imageAlt="Motive 927 solid wood gate"
          title="Motive 927"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/3.avif"
          imageAlt="Motive 931 solid wood gate"
          title="Motive 931"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/4.avif"
          imageAlt="Motive 933 solid wood gate"
          title="Motive 933"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/5.avif"
          imageAlt="Motive 937 solid wood gate"
          title="Motive 937"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/6.avif"
          imageAlt="Motive 934 solid wood gate"
          title="Motive 934"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/7.avif"
          imageAlt="Motive 936 solid wood gate"
          title="Motive 936"
          subtitle="Color: Nordic tax"
        />
        
        <CarouselItem 
          imageSrc="/images/garage-doors/berry-swing/motive-overview-solid-wood-gates/8.avif"
          imageAlt="Motif 905 solid wood gate"
          title="Motif 905"
          subtitle="Color: Nordic tax"
        />
      </Carousel>
    </div>
  </div>
</div>

{/* Colours and Decors for Steel Doors Section */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Colours and decors for steel doors
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        Almost unlimited choices
      </p>
    </div>

    <div className="mt-12">
      {/* Description */}
      <div className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
        <p>
          The steel motifs are available as standard in particularly cheap traffic white, in 7 inexpensive preferred colours and around 200 colours according to RAL (except for pearl effects, lighting and metallic colours).
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

      {/* 7 Preferential Colors Heading */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900">7 preferential colours</h3>
      </div>

      {/* Preferential Colors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
        <div>
          <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/ral9006-white-aluminium.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/8_light-grey.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/7window-grey.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/ral7016-anthracite-grey.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/ral8028-terra-brown.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/11fir-green.avif"
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
              src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/16_light-ivory.avif"
              alt="RAL 1015 Light ivory"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-1">
            <p className="text-xs font-medium text-gray-900">RAL 1015 Light ivory</p>
          </div>
        </div>
      </div>

      {/* Decals Section */}
      <div className="mt-12">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Decals</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/garage-doors/berry-swing/colours-and-decors-for-steel-doors/Decograin.avif"
                alt="Decograin surface"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Decograin</h3>
              <p className="text-gray-600">
                The Decograin surface with UV-resistant, high-quality plastic film coating on the outside of the door leaf combines the advantages of a sheet steel sheet with the faithful view of the natural material wood and gives your door a detailed, striking wood look.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
        <p className="text-sm text-gray-600 mb-4">
          Dark colours should be avoided in alignment with the sun with steel gates, as a possible door deflection can damage the gate. All colours based on the respective RAL colour. The images of the colours and surfaces are not colour-binding for printing reasons. Let your Hörmann partner advise you.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Natural Solid Wood Types Section */}
<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Natural solid wood types
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        Exclusive wooden lining in Nordic spruce
      </p>
    </div>

    <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600 text-center">
      <p>
        Exclusive wood panelling. The solid wood finishes are available with an exclusive wooden cladding in Nordic spruce in 6 different colours.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
      {/* Dove Blue */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Dove-Blue.avif"
            alt="Nordic Pine - Dove Blue finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Dove Blue</h3>
        </div>
      </div>

      {/* Fir Green */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Fir-Green.avif"
            alt="Nordic Pine - Fir Green finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Fir Green</h3>
        </div>
      </div>

      {/* Light Grey */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Light-Grey.avif"
            alt="Nordic Pine - Light Grey finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Light Grey</h3>
        </div>
      </div>

      {/* Pine Yellow */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Pine-Yellow.avif"
            alt="Nordic Pine - Pine Yellow finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Pine Yellow</h3>
        </div>
      </div>

      {/* Pure White */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Pure-White.avif"
            alt="Nordic Pine - Pure White finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Pure White</h3>
        </div>
      </div>

      {/* Royal Blue */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <Image
            src="/images/garage-doors/berry-swing/natural-solid-wood-types/Nordic-Pine-Finish-Royal-Blue.avif"
            alt="Nordic Pine - Royal Blue finish"
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
        <div className="p-4 text-center bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">Nordic Pine - Royal Blue</h3>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Picture Gallery Section */}
<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Picture gallery
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        Modern or classic – the right gate for every architecture
      </p>
    </div>

<div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 */}
        {/* Image 1 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/steel-gate-motive-902-traffic-white-ral-9016.avif"
            alt="Steel gate motive 902 traffic white RAL 9016"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Steel gate motive 902 traffic white RAL 9016</h3>
          </div>
        </div>

        {/* Image 2 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/steel-gate-motif-990-in-fir-green-ral-6009.avif"
            alt="Steel gate motif 990 in fir green RAL 6009"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Steel gate motif 990 in fir green RAL 6009</h3>
          </div>
        </div>

        {/* Image 3 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/steel-gate-motif-905-with-filling-on-site.avif"
            alt="Steel gate motif 905 with filling on site"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Steel gate motif 905 with filling on site</h3>
          </div>
        </div>

        {/* Row 2 */}
        {/* Image 4 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/solid-wood-gate-motif-925-in-northern-spruce-fir-green.avif"
            alt="Solid wood gate Motif 925 in northern spruce fir green"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Solid wood gate Motif 925 in northern spruce fir green</h3>
          </div>
        </div>

        {/* Image 5 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/steel-gate-motif-984-in-decograin-golden-oak.avif"
            alt="Steel Gate Motif 984 in Decograin Golden Oak"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Steel Gate Motif 984 in Decograin Golden Oak</h3>
          </div>
        </div>

        {/* Image 6 */}
        <div>
          <Image
            src="/images/garage-doors/berry-swing/picture-gallery/steel-door-motif-985-in-anthracite-grey-ral-7016.avif"
            alt="Steel door motif 985 in anthracite grey RAL 7016"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="bg-gray-100 p-2">
            <h3 className="text-base font-bold text-gray-900">Steel door motif 985 in anthracite grey RAL 7016</h3>
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
              Hörmann Berry swing doors offer numerous advantages for homeowners.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Robust Construction */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Robust Construction</h3>
                <p className="mt-2 text-base text-gray-600">
                  Berry swing doors are built with a sturdy steel construction that ensures durability and long-lasting performance.
                </p>
              </div>

              {/* Reliable Operation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Reliable Operation</h3>
                <p className="mt-2 text-base text-gray-600">
                  The proven technology of Berry swing doors ensures smooth and reliable operation for many years.
                </p>
              </div>

              {/* Multiple Design Options */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Multiple Design Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Choose from a wide range of designs, including steel and timber versions, to match your home's architecture.
                </p>
              </div>

              {/* Easy Installation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Installation</h3>
                <p className="mt-2 text-base text-gray-600">
                  Berry swing doors are designed for straightforward installation, saving time and reducing costs.
                </p>
              </div>

              {/* Space-Efficient */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Space-Efficient</h3>
                <p className="mt-2 text-base text-gray-600">
                  The up-and-over mechanism requires minimal space inside the garage, making it ideal for certain garage configurations.
                </p>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Security Features</h3>
                <p className="mt-2 text-base text-gray-600">
                  Berry swing doors come with multiple locking points and can be equipped with additional security features for enhanced protection.
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
            <span className="block">Ready to find your perfect Berry swing door?</span>
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
