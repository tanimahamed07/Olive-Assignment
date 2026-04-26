"use client"; // Next.js App Router use korle eta proyojon

import React, { useState } from "react"; // useState import kora hoyeche
import Image from "next/image";
import { Apple, Camera, X, Share2, Heart } from "lucide-react"; // Missing icons gulo add kora holo

const Banner = () => {
  // activeTab state define kora holo (Default "result" thakbe)
  const [activeTab, setActiveTab] = useState("result");

  return (
    <section className="w-full max-w-[1400px] mx-auto bg-[#f4faf6] antialiased">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="flex justify-center items-center pb-[8px] pt-10">
             <div className="flex -space-x-3 mr-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-9 h-9">
                    <Image
                      fill
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                      className="rounded-full border-2 border-white object-cover shadow-sm"
                    />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-[#e2e2e2] border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm relative z-10">
                13k+
              </div>
            </div>
            <span className="text-xs font-medium text-gray-600">
              Trusted by thousands of healthy families
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[48px] pt-[38px] md:text-[72px] font-semibold text-[#253612] mb-8 leading-[1.05] tracking-[-1.8px]">
            The Safest Way to
            <br />
            Shop for Groceries
          </h1>

          {/* Subheading */}
          <p className="text-[18px] text-[#1f1f1f]/60 max-w-[650px] mx-auto mt-[16px] mb-8 px-[16px] leading-[1.6] font-normal tracking-tight">
            Use the Olive Food Scanner App to Instantly Eliminate
            <br className="hidden md:block" />
            Harmful Ingredients from Your Family&apos;s Diet and Get
            <br className="hidden md:block" />
            Expert-Backed Food Insights
          </p>

          {/* CTA Button */}
          <button className="bg-[#243417]/90 hover:bg-[#243417] text-white px-[16px] py-[10px] rounded-full text-[14px] font-medium leading-none transition-all duration-300 inline-flex items-center gap-2 group">
            <Apple className="w-[18px] h-[18px] fill-current" />
            <span className="tracking-tight">Download for iOS</span>
          </button>

          {/* Hero Image / Phone Mockup */}
          <div className="flex items-center pt-[22px] justify-center">
            <div className="relative w-full max-w-[300px] h-[500px] bg-black rounded-t-[40px] shadow-2xl overflow-hidden border-[10px] border-b-0 border-[#d5dcd6]">
              {/* Notch / Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full z-50"></div>

              {/* Screen Content */}
              <div className="w-full h-full bg-white overflow-hidden relative">
                {activeTab === "camera" ? (
                  <div className="relative w-full h-full bg-black">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full h-[60%] border-2 border-white/20 rounded-3xl flex items-center justify-center">
                         <Camera className="w-12 h-12 text-white/20" />
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveTab("result")}
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white bg-white/20"
                    />
                    <button onClick={() => setActiveTab("result")} className="absolute top-12 left-6">
                        <X className="text-white" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full bg-white overflow-y-auto">
                    <div className="bg-[#46c35f] pt-12 pb-10 px-6">
                      <div className="flex justify-between items-center text-white">
                        <X className="w-5 h-5 cursor-pointer" onClick={() => setActiveTab("camera")} />
                        <span className="font-bold">Product Details</span>
                        <Share2 className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="px-6 -mt-6">
                       <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
                          <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200" width={100} height={100} alt="Product" className="rounded-xl" />
                          <div className="w-full mt-4">
                             <div className="flex justify-between items-start">
                                <div>
                                   <h2 className="text-xl font-bold">Organic Bagels</h2>
                                   <p className="text-gray-400 text-sm">Killer Dave's</p>
                                </div>
                                <div className="text-right">
                                   <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold text-sm">43/100</div>
                                   <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Avoid</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;