import React from "react";
import westernGhatsImg from "/assets/geo (1).webp";

const GeographyNature = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={westernGhatsImg}
                alt="Western Ghats Karnataka"
                className="w-full h-full object-cover"
              />
            </div>

            {/* QUOTE CARD */}
            <div className="absolute -bottom-4 md:bottom-8 left-4 md:left-8 bg-karnataka-red text-white p-4 md:p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm italic leading-relaxed">
                "The Western Ghats of Karnataka are among the top biodiversity hotspots in the world."
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="w-14 h-[3px] bg-karnataka-yellow mb-4 md:mb-6"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-karnataka-red mb-6 md:mb-8">
              Geography & Nature
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              From the sun-drenched Karavali coast to the mist-covered peaks of the
              Malnad region, Karnataka's landscape is a geographical masterpiece.
            </p>

            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700 text-sm md:text-base">
                  <strong>Western Ghats:</strong> A UNESCO World Heritage mountain
                  range teeming with wildlife.
                </p>
              </li>

              <li className="flex items-start gap-3 md:gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700 text-sm md:text-base">
                  <strong>Coastal Splendor:</strong> Over 300km of pristine beaches
                  along the Arabian Sea.
                </p>
              </li>

              <li className="flex items-start gap-3 md:gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700 text-sm md:text-base">
                  <strong>Majestic Waterfalls:</strong> Home to Jog Falls, one of
                  India's highest plunge waterfalls.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GeographyNature;
