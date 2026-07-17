'use client'
import React, { useState } from 'react';
import { products } from "@/data/products";
import Image from 'next/image';
import { Check, Clock3, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const SinglePage = ({ params }) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [qty, setQty] = useState(1);
    const { addToCart } = useCart();
    const resolvedParams = React.use(params);
    const productId = resolvedParams.id;
    const product = products.find((item) => item.id.toString() == productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-xl font-bold">Product not found!</h1>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 min-h-screen bg-slate-50 py-12 px-4 md:px-8 gap-8'>

            {/* product image */}
            <div className="lg:col-span-1 w-full flex justify-center items-center rounded-2xl shadow-md">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-auto max-h-500px w-auto rounded-2xl object-contain shadow-lg"
                    sizes="100vw"
                />
            </div>

            {/* product details */}
            <section className="lg:col-span-2 p-4 bg-white rounded-2xl shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
                <div className="flex items-center gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                        <span
                            key={starIndex}
                            className={`text-xl ${product.rating >= starIndex ? "text-amber-500" : "text-slate-300"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="text-sm font-semibold text-slate-500 ml-2">
                        ({product.rating})
                    </span>
                </div>
                <p className="text-xl font-extrabold text-amber-600 mt-2">BDT {product.price}</p>

                {/* size section */}
                <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-800">Select Size:</h3>
                    <div className="flex gap-2 mt-2">
                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => setSelectedSize(size)}
                                className={`h-10 w-12 text-sm font-medium rounded-md border transition-colors ${selectedSize === size
                                    ? "bg-amber-600 border-amber-700 text-white"
                                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity section */}
                <div className="mt-6 flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-800">Quantity:</span>

                    <div className="flex items-center border border-slate-200 rounded-md bg-white">
                        <button type="button" onClick={() => qty > 1 && setQty(qty - 1)} className="h-9 w-9 text-slate-600 hover:bg-slate-50">-</button>
                        <span className="w-9 text-center text-sm font-semibold text-slate-700">{qty}</span>
                        <button type="button" onClick={() => setQty(qty + 1)} className="h-9 w-9 text-slate-700 hover:bg-slate-50">+</button>
                    </div>
                </div>
                <p className="text-slate-500 mt-4 leading-relaxed">{product.description}</p>
                <p className='flex mt-6 gap-2 text-slate-500'><Check className='text-[#059669] font-bold'></Check> In Stock</p>
                <div className="mt-8">
                    <button className="custom-btn" onClick={() => addToCart(product, qty, selectedSize)}>
                        Add to Cart
                    </button>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mt-15 px-4 md:px-8">
                    <div className='flex items-center gap-3'>
                        <Truck className='text-slate-900'></Truck>
                        <div>
                            <p className='font-semibold text-slate-900'>Cash on Delivery</p>
                            <p className="text-slate-500">Available</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Truck className='text-slate-900'></Truck>
                        <div>
                            <p className='font-semibold text-slate-900'>Free Shipping</p>
                            <p className="text-slate-500">On all orders</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Clock3 className='text-slate-900'></Clock3>
                        <div>
                            <p className='font-semibold text-slate-900'>Easy Returns</p>
                            <p className="text-slate-500">30-dey return</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default SinglePage;