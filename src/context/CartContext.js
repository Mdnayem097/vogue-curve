"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity, size) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.size === size
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id && item.size === size
                        ? { ...item, qty: item.qty + quantity }
                        : item
                );
            }

            return [...prevItems, { ...product, qty: quantity, size: size || "M" }];
        });

        toast.success(`${product.name} (${size || "M"}) added to cart!`, {
            style: {
                border: '1px solid #10b981',
                padding: '16px',
                color: '#0f172a',
                fontWeight: '500'
            },
            iconTheme: {
                primary: '#10b981',
                secondary: '#FFFAEE',
            },
        });
    };

    const updateQuantity = (productId, size, newQty) => {
        if (newQty < 1) return;
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId && item.size === size
                    ? { ...item, qty: newQty }
                    : item
            )
        );
    };

    const removeFromCart = (productId, size) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => !(item.id === productId && item.size === size))
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);