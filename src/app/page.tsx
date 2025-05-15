import Hero from '@/components/sections/Hero';
import ProductCategories from '@/components/sections/ProductCategories';
import Sustainability from '@/components/sections/Sustainability';
import Partners from '@/components/sections/Partners';

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
      
      <Sustainability />
      
      <Partners {...partnersData} />
    </>
  );
}

