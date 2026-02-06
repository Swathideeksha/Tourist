import React from "react";
import westernGhatsImg from "../assests/ghats.jpg";

const GeographyNature = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={westernGhatsImg}
                alt="Western Ghats Karnataka"
                className="w-full h-full object-cover"
              />
            </div>

            {/* QUOTE CARD */}
            <div className="absolute -bottom-8 left-8 bg-karnataka-red text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm italic leading-relaxed">
                “The Western Ghats of Karnataka are among the top biodiversity hotspots in the world.”
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="w-14 h-[3px] bg-karnataka-yellow mb-6"></div>

            <h2 className="text-4xl md:text-5xl font-bold text-karnataka-red mb-8">
              Geography & Nature
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              From the sun-drenched Karavali coast to the mist-covered peaks of the
              Malnad region, Karnataka’s landscape is a geographical masterpiece.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700">
                  <strong>Western Ghats:</strong> A UNESCO World Heritage mountain
                  range teeming with wildlife.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700">
                  <strong>Coastal Splendor:</strong> Over 300km of pristine beaches
                  along the Arabian Sea.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 text-karnataka-yellow">▲</span>
                <p className="text-slate-700">
                  <strong>Majestic Waterfalls:</strong> Home to Jog Falls, one of
                  India’s highest plunge waterfalls.
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
