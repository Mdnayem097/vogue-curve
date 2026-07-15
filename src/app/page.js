import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import {
//   ArrowRight,
//   Truck,
//   RefreshCw,
//   BadgeCheck,
// } from "lucide-react";

const HomePage = () => {
  return (
    <div className='sm:p-0 grid sm:grid-cols-1 lg:grid-cols-2 bg-[#F8FAFC] lg:p-15 gap-5'>
      <section className="text-center lg:text-left order-2 lg:order-1">
        <p className="inline-flex items-center gap-2 text-amber-600 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">⚡ NEW COLLECTION 2026</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900">Elevate Your<br></br>Everyday Style</h1>
        <p className='mt-5 text-slate-500 mb-10'>Discover premium local clothing designed for comfort, elegance, and timeless fashion. Explore curated collections crafted with premium fabrics for every occasion.</p>
        <Link href='/shop' className='custom-btn'>Shop Collection <ArrowRight /></Link>
      </section>
      <section className="order-1 lg:order-2">
        <Image alt='banner image' src="https://images.pexels.com/photos/9594675/pexels-photo-9594675.jpeg" width={700} height={700} className='rounded-xl'></Image>
      </section>
    </div>
  );
};

export default HomePage;