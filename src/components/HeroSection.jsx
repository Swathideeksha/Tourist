import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-4 md:mx-6 mt-4 md:mt-6">
      <div
        className="relative h-[300px] md:h-[380px] lg:h-[460px] rounded-2xl md:rounded-[2.5rem] overflow-hidden"
        style={{
          backgroundImage: "url('/assests/karnataka.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Red overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/85 to-red-900/70"></div>

        {/* Centered Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="bg-red-900/80 backdrop-blur-md text-white p-6 md:p-10 rounded-2xl md:rounded-3xl max-w-xl text-center shadow-2xl mx-auto">

            <span className="text-xs tracking-widest text-yellow-300 uppercase">
              Official Information Portal
            </span>

            <h1 className="mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl sm:text-4xl font-extrabold">
              About Karnataka:
              <br />
              <span className="text-yellow-400">One State. Many Worlds.</span>
            </h1>

            <p className="mt-3 md:mt-5 text-white/85 text-sm md:text-base">
              A land of diverse heritage, burgeoning technology, and pristine
              natural beauty. Discover the essence of India's most vibrant state.
            </p>

            {/* READY TO EXPLORE BUTTON */}
            <button
              onClick={() => navigate("/places")}
              className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              Ready to Explore →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
