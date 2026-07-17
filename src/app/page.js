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

      <div className='max-w-7xl mx-auto mt-10 px-4 md:px-8'>
        <p className="text-slate-900 font-semibold uppercase text-xs sm:text-sm mb-4">POPULAR CATEGORIES</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm">
            <Image
              src={'https://images.pexels.com/photos/34905444/pexels-photo-34905444.jpeg?w=300&q=80'}
              alt={'Panjabi'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 cursor-pointer" />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-3xl md:text-base bg-slate-50 p-2">
              Panjabi
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm">
            <Image
              src={'https://images.pexels.com/photos/38246571/pexels-photo-38246571.jpeg?w=300&q=80'}
              alt={'Saree'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 cursor-pointer" />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-3xl md:text-base bg-slate-50 p-2">
              Saree
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm">
            <Image
              src={'https://images.pexels.com/photos/37738043/pexels-photo-37738043.jpeg?w=300&q=80'}
              alt={'Kurt'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 cursor-pointer" />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-3xl md:text-base bg-slate-50 p-2">
              Kurt
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm">
            <Image
              src={'https://images.pexels.com/photos/9050627/pexels-photo-9050627.jpeg?w=300&q=80'}
              alt={'Shirt'}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 cursor-pointer" />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-3xl md:text-base bg-slate-50 p-2">
              Shirt
            </p>
          </div>
        </div>
      </div>

      <div className='my-14 bg-slate-100 p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6 max-w-7xl mx-auto border border-slate-200/60'>
        <div>
          <p className='font-semibold text-2xl'>Get <span className='text-amber-600'>10% Off</span> Your First Order</p>
          <p className='font-semibold text-slate-900'>Subscribe to our newsletter and never miss an update</p>
        </div>
        <div className="w-full max-w-md">
          <form className="flex items-center w-full bg-white p-1.5 rounded-xl border border-slate-200 focus-within:border-slate-400 focus-within:ring-1 focus-within:ring-slate-400 transition-all shadow-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full pl-3 pr-2 py-2 text-sm text-slate-800 bg-transparent placeholder-slate-400 outline-none border-none"
            />
            <button
              type="submit"
              className="custom-btn"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;