import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products"; 

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-extrabold text-slate-700 mb-8">
          Explore Our <span className="text-amber-600">Collections</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-slate-100 rounded-xl overflow-hidden"
            >
              <div className="relative h-72 w-full bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
                />
              </div>

              <div className="p-5 grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-600 uppercase">
                    {product.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-700 mt-1 line-clamp-1">
                    {product.name}
                  </h2>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-[#B45309]">
                    ৳{product.price.toLocaleString()}
                  </span>
                  
                  <Link 
                    href={`/products/${product.id}`}
                    className="custom-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}