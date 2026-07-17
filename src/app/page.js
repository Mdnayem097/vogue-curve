import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className='sm:p-0 bg-[#F8FAFC] lg:p-15 gap-5'>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
        <section className="text-center lg:text-left order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 text-amber-600 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">⚡ NEW COLLECTION 2026</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-700">Elevate Your<br></br>Everyday Style</h1>
          <p className='mt-5 text-slate-500 mb-10'>Discover premium local clothing designed for comfort, elegance, and timeless fashion. Explore curated collections crafted with premium fabrics for every occasion.</p>
          <Link href='/shop' className='custom-btn'>Shop Collection <ArrowRight /></Link>
        </section>
        <section className="order-1 lg:order-2">
          <Image alt='banner image' src="https://images.pexels.com/photos/9594675/pexels-photo-9594675.jpeg?w=600&q=80" width={700} height={700} className='rounded-xl'></Image>
        </section>
      </div>

      <div className='max-w-7xl mx-auto mt-16 px-4 md:px-8'>
        <p className="inline-flex items-center gap-2 text-amber-600 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">POPULAR CATEGORIES</p>
        <div className='grid grid-cols-4 gap-3'>
          <div>
            <Image
              src={'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=300&q=80'}
              alt={'mens'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <p>Men's Wear</p>
          </div>
          <div>
            <Image
              src={'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=300&q=80'}
              alt={'mens'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <p>Men's Wear</p>
          </div>
          <div>
            <Image
              src={'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=300&q=80'}
              alt={'mens'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <p>Men's Wear</p>
          </div>
          <div>
            <Image
              src={'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=300&q=80'}
              alt={'mens'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <p>Men's Wear</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;