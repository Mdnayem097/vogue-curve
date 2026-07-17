import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar text-slate-900 shadow-sm bg-[#F8FAFC]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:text-amber-600 transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link href="/products">Shop</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link href="/newArrivals">New Arrivals</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-xl px-2">
            <span className="text-xl font-extrabold tracking-widest text-slate-900">
              VOGUE<span className="text-amber-600">CURVE</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-amber-600 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-amber-600 transition-colors">
              <Link href="/products">Shop</Link>
            </li>
            <li className="hover:text-amber-600 transition-colors">
              <Link href="/newArrivals">New Arrivals</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-3">
          <Link href={'/cart'}><ShoppingCart/></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
