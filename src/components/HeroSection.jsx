import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-6 mt-6">
      <div
        className="relative h-[460px] rounded-[2.5rem] overflow-hidden"
        style={{
          backgroundImage: "url('/assests/karnataka.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Red overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/85 to-red-900/70"></div>

        {/* Centered Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-900/80 backdrop-blur-md text-white p-10 rounded-3xl max-w-xl text-center shadow-2xl">

            <span className="text-xs tracking-widest text-yellow-300 uppercase">
              Official Information Portal
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
              About Karnataka:
              <br />
              <span className="text-yellow-400">One State. Many Worlds.</span>
            </h1>

            <p className="mt-5 text-white/85">
              A land of diverse heritage, burgeoning technology, and pristine
              natural beauty. Discover the essence of India’s most vibrant state.
            </p>

            {/* READY TO EXPLORE BUTTON */}
            <button
              onClick={() => navigate("/places")}
              className="mt-8 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
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
