import Image from 'next/image';

interface PartnersProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export default function Partners({
  title,
  subtitle,
  imageSrc,
}: PartnersProps) {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/6] md:aspect-[16/7]">
            <Image
              src={imageSrc}
              alt="Our partners"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
