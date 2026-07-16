import React from 'react';
import { products } from "@/data/products";
import Image from 'next/image';

const SinglePage = ({ params }) => {
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
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-slate-50 py-12 px-4 md:px-8'>
            <div className="w-full flex justify-center items-center bg-slate-100 rounded-2xl p-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-auto max-h-[500px] w-auto rounded-2xl object-contain shadow-md"
                    sizes="100vw"
                />
            </div>

            <section className="p-8">
                <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
                <p className="text-xl font-extrabold text-amber-600 mt-2">৳{product.price}</p>
                <p className="text-slate-600 mt-4">{product.description}</p>
            </section>
        </div>
    );
};

export default SinglePage;