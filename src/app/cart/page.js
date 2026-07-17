"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trash2 } from 'lucide-react';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
                <h1 className="text-2xl font-bold text-slate-800">Your cart is empty!</h1>
                <Link href="/shop" className="custom-btn flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Go Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <p className='text-2xl font-semibold'>Shopping Cart ({cartItems.length} Items)</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <p className='font-semibold'>YOUR ITEMS</p>
                        {cartItems.map((item, index) => (
                            <div key={index} className="border-b border-slate-100">
                                <div className="flex items-top gap-4">
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
                                    <div className='w-full'>
                                        <h3 className="font-semibold text-slate-800">{item.name}</h3>
                                        <p className="text-xs text-slate-500 mt-1">Size: <span className="font-bold">{item.size}</span> | Qty: <span className="font-bold">{item.qty}</span></p>
                                        <p className="font-bold text-slate-800 my-1.5">BDT {item.price * item.qty}</p>
                                        <div className="flex justify-between">
                                            <div className="flex items-center border border-slate-200 rounded-md bg-white overflow-hidden">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.size, item.qty - 1)}
                                                    className="h-8 w-8 text-slate-800 hover:bg-slate-50 font-medium"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center text-sm font-semibold text-slate-700">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.size, item.qty + 1)}
                                                    className="h-8 w-8 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="hover:text-red-800 transition-colors mr-2"
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:sticky lg:top-8 space-y-6'>
                        <p className='font-semibold'>ORDER SUMMARY</p>
                        <div className='flex justify-between mt-6 text-slate-900'>
                            <p>Subtotal</p>
                            <p>BDT {totalPrice}</p>
                        </div>
                        <div className='flex justify-between my-2 text-slate-900'>
                            <p>Delivery Fee</p>
                            <p className='text-green-600'>Free</p>
                        </div>
                        <div className='flex justify-between text-slate-900'>
                            <p>Discount</p>
                            <p>- BDT 0</p>
                        </div>
                        <div className='my-5 flex justify-between mb-3'>
                            <p className="text-slate-500 text-sm">Total Amount:</p>
                            <p className="text-2xl font-extrabold text-amber-600">BDT {totalPrice}</p>
                        </div>
                        <button className="custom-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;