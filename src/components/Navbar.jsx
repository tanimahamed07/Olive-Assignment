import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Features", href: "/features", hasDropdown: false },
  { name: "Pricing", href: "/pricing", hasDropdown: false },
  { name: "Blog", href: "/blog", hasDropdown: true },
  { name: "Restaurants", href: "/restaurants", hasDropdown: false },
  { name: "Food", href: "/food", hasDropdown: true },
];

const Navbar = () => {
  return (
    <nav className="w-full ">
      <div className="pt-[10px] pl-[16px] pr-[8px]">
        <div className="flex justify-between items-center relative">
          {" "}
          {/* relative added here */}
          {/* Left: Logo */}
          <div className="shrink-0 z-10">
            <Link href="/" className="flex pt-[10px] items-center">
              <Image
                src="/navlogo.svg"
                alt="Olive Logo"
                width={110}
                height={45}
                className="h-[56px] w-auto"
                priority
              />
            </Link>
          </div>
          {/* Center: Navigation Links (Absolutely Centered) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="group relative cursor-pointer">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg bg-transparent hover:bg-black/5 transition-all duration-200"
                  >
                    <span className="text-[#232020] text-[14px] font-medium antialiased">
                      {link.name}
                    </span>
                    {link.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-[oklch(0.439_0_0)] transition-transform group-hover:rotate-180 duration-200" />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            <Link
              href="/signin"
              className="text-[#333] hover:text-black text-[16px] font-400"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="flex items-center justify-center gap-[8px] px-[16px] py-[12px] bg-[#253612] hover:bg-[#1a2611] text-white rounded-full text-[16px] font-medium leading-[24px] transition-all duration-300 group shadow-none"
            >
              Get Olive
              <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-[#333] z-10">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
