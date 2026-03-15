import React from "react";
import hampiImg from "../assets/Badami-Tour_BMCadventures1234.jpg";
import belurImg from "../assets/The-Architecture-of-A-Fabled-Past-lg-cov.jpg";

const HistoricalLegacy = () => {
  return (
    <section className="py-12 md:py-24 bg-white white:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="w-12 h-1 bg-yellow-400 mb-4 md:mb-6 rounded-full"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 dark:text-red-500 mb-6 md:mb-8">
              Historical Legacy
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Karnataka's history is a grand epic spanning over two millennia.
              From the mighty Vijayanagara Empire to the intricate craftsmanship
              of the Hoysalas.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              UNESCO World Heritage sites like Hampi and Pattadakal stand as
              silent sentinels of a glorious past.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
              <div className="border-l-2 border-yellow-400 pl-4 md:pl-5">
                <span className="block text-xl md:text-2xl font-bold">UNESCO</span>
                <span className="text-sm text-slate-500">Heritage Sites</span>
              </div>

              <div className="border-l-2 border-yellow-400 pl-4 md:pl-5">
                <span className="block text-xl md:text-2xl font-bold">2000+</span>
                <span className="text-sm text-slate-500">Years of History</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">

            {/* Left column */}
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src={hampiImg}
                  alt="Hampi Stone Chariot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-red-600 text-white p-5 md:p-8 rounded-2xl md:rounded-3xl">
                <h4 className="font-bold text-lg md:text-xl mb-2">Vijayanagara</h4>
                <p className="text-sm text-white/80">
                  The epicenter of South Indian renaissance.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
              <div className="bg-yellow-400 text-red-700 p-5 md:p-8 rounded-2xl md:rounded-3xl">
                <h4 className="font-bold text-lg md:text-xl mb-2">Hoysala Art</h4>
                <p className="text-sm text-red-700/80">
                  Soapstone wonders with minute carvings.
                </p>
              </div>

              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src={belurImg}
                  alt="Belur Temple Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalLegacy;
