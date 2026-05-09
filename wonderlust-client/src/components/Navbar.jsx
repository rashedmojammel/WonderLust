'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/add-destination", label: "Add Destination" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
                  pathname === href
                    ? "text-cyan-600 border-cyan-500"
                    : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={"/assets/Wanderlast.png"}
            height={120}
            width={120}
            alt="Wanderlust logo"
            className="h-10 w-40 object-contain"
          />
        </div>

        {/* Right auth links */}
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="text-sm font-medium bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;