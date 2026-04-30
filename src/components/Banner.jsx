"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Apple } from "lucide-react";

const products = [
  { id: 2, image: "/product-2.png", details: "/product-2-details.png" },
  { id: 4, image: "/product-4.png", details: "/product-4-details.png" },
  { id: 5, image: "/product-5.png", details: "/product-5-details.png" },
  { id: 6, image: "/product-6.png", details: "/product-6-details.png" },
  { id: 7, image: "/product-7.png", details: "/product-7-details.png" },
  { id: 8, image: "/product-8.png", details: "/product-8-details.png" },
];

const Banner = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const totalProducts = products.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % totalProducts);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalProducts]);

  const prevIndex1 = (currentProductIndex - 1 + totalProducts) % totalProducts;
  const prevIndex2 = (currentProductIndex - 2 + totalProducts) % totalProducts;
  const nextIndex1 = (currentProductIndex + 1) % totalProducts;
  const nextIndex2 = (currentProductIndex + 2) % totalProducts;

  return (
    <section className="w-full max-w-[1400px] mx-auto bg-[#f4faf6] antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-4">
        <div className="text-center relative">
          {/* Trust Badge Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pb-[8px] pt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 hover:z-50 hover:scale-110 cursor-pointer"
                >
                  <Image
                    width={36}
                    height={36}
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                    className="rounded-full border-2 border-white object-cover shadow-sm"
                  />
                </div>
              ))}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e2e2e2] border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm relative z-10">
                13k+
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-gray-600">
              Trusted by thousands of healthy families
            </span>
          </div>

          {/* Title - Mobile Responsive font-size */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] pt-[20px] sm:pt-[38px] font-semibold text-[#253612] mb-6 sm:mb-8 leading-[1.1] tracking-[-1px] sm:tracking-[-1.8px] px-2">
            The Safest Way to <br />
            Shop for Groceries
          </h1>

          {/* Paragraph */}
          <p className="text-[15px] sm:text-[18px] text-[#1f1f1f]/60 max-w-[650px] mx-auto mt-[10px] sm:mt-[16px] mb-8 px-[20px] leading-[1.5] sm:leading-[1.6] font-normal tracking-tight">
            Use the Olive Food Scanner App to Instantly Eliminate
            <br className="hidden md:block" /> Harmful Ingredients from Your
            Family&apos;s Diet and Get <br className="hidden md:block" />
            Expert-Backed Food Insights
          </p>
          {/* Button Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
            {/* Download Button */}
            <button className="bg-[#243417] w-full sm:w-auto flex items-center justify-center hover:bg-[#2b3d1c] text-white px-6 py-3 rounded-full text-[15px] font-medium transition-all duration-300 gap-2 group">
              <Apple className="w-5 h-5 fill-current" />
              <span className="tracking-tight">Download for iOS</span>
            </button>

            {/* Join Community Button - Hidden on Mobile, Shown on Desktop */}
            <button className="hidden sm:flex items-center text-[#243417] text-[15px] font-semibold hover:opacity-80 transition-all gap-1">
              Join the Olive Community
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Animation Section */}
          <div className="relative flex justify-center items-center h-[480px] sm:h-[520px] md:h-[550px]">
            {/* Left Preview - Hidden on small mobile */}
            <div className="absolute left-[calc(50%-160px-104px)] md:flex items-start gap-[12px] hidden pointer-events-none z-40 top-[80px] translate-y-[-10px]">
              <div className="w-[90px] h-[90px] flex items-center justify-center">
                <motion.div
                  key={`far-left-${products[prevIndex2].id}`}
                  layoutId={`product-img-${products[prevIndex2].id}`}
                  animate={{ opacity: 0.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 22 }}
                >
                  <Image
                    src={products[prevIndex2].image}
                    width={80}
                    height={80}
                    alt="p2"
                    className="object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
              <div className="w-[90px] h-[90px] flex items-center justify-center">
                <motion.div
                  key={`left-${products[prevIndex1].id}`}
                  layoutId={`product-img-${products[prevIndex1].id}`}
                  animate={{ opacity: 0.3 }}
                  transition={{ type: "spring", stiffness: 100, damping: 22 }}
                >
                  <Image
                    src={products[prevIndex1].image}
                    width={80}
                    height={80}
                    alt="p1"
                    className="object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>

            {/* Phone Model - Responsive Width/Height */}
            <div className="relative z-20 w-[280px] sm:w-[320px] h-[450px] sm:h-[525px] bg-white rounded-t-[35px] sm:rounded-t-[40px] shadow-2xl overflow-hidden border-x-8 border-t-8 sm:border-x-10 sm:border-t-10 border-[#b1b1b1]/40">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[70px] sm:w-[90px] h-[18px] sm:h-[22px] bg-black rounded-full z-[250]"></div>

              <div className="w-full h-full relative">
                <div className="absolute top-2 left-0 w-full h-[180px] sm:h-[210px] z-50 flex items-center justify-center p-4 sm:p-6">
                  <motion.div
                    key={`main-${products[currentProductIndex].id}`}
                    layoutId={`product-img-${products[currentProductIndex].id}`}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                      delay: 0.1,
                    }}
                  >
                    <Image
                      src={products[currentProductIndex].image}
                      width={130}
                      height={130}
                      alt="Main"
                      className="object-contain rounded-3xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                    />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`details-${products[currentProductIndex].id}`}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{
                      y: "100%",
                      transition: { duration: 0.4, ease: "easeInOut" },
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 120,
                      delay: 0.3,
                    }}
                    className="absolute top-[120px] sm:top-[145px] left-0 w-full h-full z-[50] bg-white rounded-t-[40px] sm:rounded-t-[50px] shadow-[0_-15px_35px_rgba(0,0,0,0.1)]"
                  >
                    <Image
                      src={products[currentProductIndex].details}
                      width={320}
                      height={500}
                      alt="Details"
                      className="w-full h-auto object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Preview - Hidden on small mobile */}
            <div className="absolute right-[calc(50%-160px-104px)] md:flex items-start gap-[12px] hidden pointer-events-none z-40 top-[80px] translate-y-[-10px]">
              <div className="w-[90px] h-[90px] flex items-center justify-center">
                <motion.div
                  key={`right-${products[nextIndex1].id}`}
                  layoutId={`product-img-${products[nextIndex1].id}`}
                  animate={{ opacity: 0.3 }}
                  transition={{ type: "spring", stiffness: 100, damping: 22 }}
                >
                  <Image
                    src={products[nextIndex1].image}
                    width={80}
                    height={80}
                    alt="n1"
                    className="object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
              <div className="w-[90px] h-[90px] flex items-center justify-center">
                <motion.div
                  key={`far-right-${products[nextIndex2].id}`}
                  layoutId={`product-img-${products[nextIndex2].id}`}
                  animate={{ opacity: 0.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 22 }}
                >
                  <Image
                    src={products[nextIndex2].image}
                    width={80}
                    height={80}
                    alt="n2"
                    className="object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
