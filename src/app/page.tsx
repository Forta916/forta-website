import Hero from '@/components/sections/Hero';
import ProductCategories from '@/components/sections/ProductCategories';
import Sustainability from '@/components/sections/Sustainability';
import Partners from '@/components/sections/Partners';
import Button from '@/components/ui/Button';

export default function Home() {
  // Sample data for the hero section
  const heroData = {
    title: "Premium Hörmann Products in California",
    subtitle: "Forta is an official dealer of Hörmann, offering high-quality garage doors, doors, and storage systems since 2008.",
    ctaText: "Explore Products",
    ctaLink: "/products",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageSrc: "/images/hero-image.avif",
    imageAlt: "Modern home with Hörmann garage door and entrance door"
  };

  // Sample data for product categories
  const categoriesData = {
    title: "Our Product Range",
    subtitle: "Discover premium German engineering for your home",
    categories: [
      {
        title: "Garage Doors",
        description: "Sectional, roller, and swing garage doors with premium insulation and security features",
        imageSrc: "/images/garage-doors/previews/garage-side-doors.avif",
        imageAlt: "Modern sectional garage door",
        href: "/products/garage-doors"
      },
      {
        title: "Doors",
        description: "Front doors, entrance doors, room doors, and specialized functional doors",
        imageSrc: "/images/doors/previews/front-doors.avif",
        imageAlt: "Elegant front door design",
        href: "/products/doors"
      },
      {
        title: "Storage Systems",
        description: "Tool sheds, garden boxes, and firewood racks for organized outdoor spaces",
        imageSrc: "/images/storage-systems/previews/storage-space-systems-9.avif",
        imageAlt: "Modern garden storage solution",
        href: "/products/storage-systems"
      }
    ]
  };

  // Data for partners section
  const partnersData = {
    title: "Our Partners",
    subtitle: "Popular brands have trusted Hörmann for over 85 years",
    imageSrc: "/images/partners/allbrands.avif"
  };

  return (
    <>
      <Hero {...heroData} />
      
      <ProductCategories {...categoriesData} />
      
      {/* Commercial Doors Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-800 text-white mr-3">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                      </svg>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Partner Solutions
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
                    Commercial Doors Available
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                    While we specialize in residential solutions, we partner with Hörmann to offer comprehensive commercial door systems. 
                    Explore industrial doors, loading dock equipment, and commercial entrance solutions designed for businesses and industrial facilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Industrial & Warehouse Doors
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Loading Dock Solutions
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Commercial Entrance Systems
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
                  <Button 
                    href="https://www.hormann.us/commercial/" 
                    variant="primary" 
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span className="flex items-center">
                      Explore Commercial Solutions
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Sustainability />
      
      <Partners {...partnersData} />
    </>
  );
}
