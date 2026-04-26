import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-[1400px] bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <span className="ml-3 text-sm text-gray-600">
              Trusted by thousands of healthy families
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Safest Way to
            <br />
            Shop for Groceries
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Use the Olive Food Scanner App to Instantly Eliminate
            <br />
            Harmful Ingredients from Your Family's Diet and Get
            <br />
            Expert-Backed Food Insights
          </p>

          {/* CTA Button */}
          <button className="bg-[#4a5d3f] hover:bg-[#3d4d33] text-white px-8 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
            Download for iOS
          </button>

          {/* Hero Image/Phone Mockup */}
          <div className="mt-16 relative">
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
                <div className="bg-gray-100 rounded-2xl aspect-[9/16] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gray-300 rounded-2xl mx-auto mb-4"></div>
                    <h3 className="font-semibold text-lg mb-2">
                      Gradea Raw Pure Jersey Milk
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">Claravale Farm</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        100/100
                      </span>
                      <span className="text-sm text-gray-600">Excellent</span>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-left">
                      <p className="text-xs text-gray-700 font-medium mb-2">
                        🫒 Oliver Says:
                      </p>
                      <p className="text-xs text-gray-600">
                        "This product scored perfectly because it contains no
                        processed sugars, seed oils, or harmful additives..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
