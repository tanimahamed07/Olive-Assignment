"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { id: 2, image: "/product-2.png" },
  { id: 4, image: "/product-4.png" },
  { id: 5, image: "/product-5.png" },
  { id: 7, image: "/product-7.png" },
  { id: 8, image: "/product-8.png" },
];

export default function HowItWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[48px] font-medium text-[#2d402e] leading-tight flex flex-wrap justify-center items-center gap-3">
            How the Olive Food <br className="hidden md:block" />
            Scanner App Works
            <Image
              src="/image3.png"
              alt="Olive"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 - Scan & Detect */}
          <div className="bg-[#f2f6f0] rounded-[32px] p-8 flex flex-col h-[480px]">
            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6">
              Scan & Detect
            </h3>
            <div className="flex-1 flex items-center justify-center relative mb-6 scale-90">
              <div className="relative w-full max-w-[200px] aspect-square">
                <Image
                  width={20}
                  height={30}
                  src="/image4.png"
                  alt="Scan Animation"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-[14px] text-[#4a4a4a] leading-normal">
              When you open Olive simply scan the barcode to instantly detect
              product ingredients. Olive&apos;s intuitive design means busy parents
              can quickly see which items contain harmful substances.
            </p>
          </div>

          {/* Card 2 - Data Analysis & Validation */}
          <div className="bg-[#f2f6f0] rounded-[32px] p-8 flex flex-col h-[480px]">
            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6">
              Data Analysis & Validation
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center mb-6">
              <div className="relative flex items-center justify-center w-full gap-2 overflow-hidden h-24">
                {[-1, 0, 1].map((offset) => {
                  const index =
                    (currentIndex + offset + products.length) % products.length;
                  return (
                    <motion.div
                      key={`${index}-${offset}`}
                      animate={{
                        opacity: offset === 0 ? 1 : 0.3,
                        scale: offset === 0 ? 1 : 0.8,
                      }}
                      className="w-16 h-16 relative shrink-0"
                    >
                      <Image
                        width={20}
                        height={20}
                        src={products[index].image}
                        alt="Product"
                        className="w-full h-full object-contain rounded-xl bg-white p-1 shadow-sm"
                      />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 bg-[#e8eee4] px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#d9e2d5]">
                <div className="w-4 h-4 bg-[#638c6d] rounded-full flex items-center justify-center">
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-[12px] text-[#2d402e] font-bold">
                  Safe to consume
                </span>
              </div>
            </div>
            <p className="text-[14px] text-[#4a4a4a] leading-normal">
              After scanning, our food scanner app compares product data with an
              extensive database. Using expert nutritional guidelines, Olive
              filters out potentially dangerous ingredients.
            </p>
          </div>

          {/* Card 3 - Actionable Insights */}
          <div className="bg-[#f2f6f0] rounded-[32px] p-8 flex flex-col h-[480px]">
            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6">
              Actionable Insights & Recommendations
            </h3>
            <div className="flex-1 flex items-center justify-center relative mb-6">
              <div className="relative flex items-center justify-center">
                {/* Background Stacked Images */}
                <div className="absolute w-20 h-28 bg-white rounded-xl shadow-sm -translate-x-12 rotate-[-10deg] opacity-50 border border-gray-100 overflow-hidden">
                  <Image
                    width={80}
                    height={112}
                    src="/product-2.png"
                    alt="Product recommendation"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="absolute w-20 h-28 bg-white rounded-xl shadow-sm translate-x-12 rotate-[10deg] opacity-50 border border-gray-100 overflow-hidden">
                  <Image
                    width={80}
                    height={112}
                    src="/product-7.png"
                    alt="Product recommendation"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                {/* Main Image */}
                <div className="relative w-24 h-34 bg-white rounded-xl shadow-md z-10 border border-gray-50 flex flex-col overflow-hidden">
                  <Image
                    width={96}
                    height={136}
                    src="/product-5.png"
                    alt="Featured product"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
            <p className="text-[14px] text-[#4a4a4a] leading-normal">
              Once analyzed, Olive provides tailored insights and healthier
              product suggestions. Olive proactively flags harmful ingredients
              and offers personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
