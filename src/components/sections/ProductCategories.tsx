import Image from 'next/image';
import Link from 'next/link';

interface Category {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface ProductCategoriesProps {
  title: string;
  subtitle?: string;
  categories: Category[];
}

export default function ProductCategories({
  title,
  subtitle,
  categories,
}: ProductCategoriesProps) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.href}
              className="group"
            >
              <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300 aspect-[4/3]">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-1 text-sm text-gray-200 line-clamp-2 sm:line-clamp-none">{category.description}</p>
                  <div className="mt-3 sm:mt-4 flex items-center text-blue-100 group-hover:text-white transition-colors duration-300">
                    <span className="font-medium">Explore Products</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
